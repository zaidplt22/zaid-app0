import { ManuscriptGalleryImage, MANUSCRIPT_IMAGES } from '../data/manuscriptImagesData';

const DB_NAME = 'SharikhAlBahrArchivalDB_v3';
const DB_VERSION = 1;
const STORE_NAME = 'manuscript_images_store';
const STORAGE_KEY = 'sharikh_al_bahr_manuscripts_permanent_v3';

// Ensure inMemoryImagesCache points directly to the static embedded MANUSCRIPT_IMAGES array
let inMemoryImagesCache: ManuscriptGalleryImage[] = MANUSCRIPT_IMAGES;

// Initialize IndexedDB
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB is not supported'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Synchronous accessor for currently loaded images in the app
 */
export function getActiveManuscriptImages(): ManuscriptGalleryImage[] {
  if (inMemoryImagesCache && inMemoryImagesCache.length > 0) {
    return inMemoryImagesCache;
  }
  return MANUSCRIPT_IMAGES;
}

export function getSynchronousManuscriptImages(): ManuscriptGalleryImage[] {
  return getActiveManuscriptImages();
}

/**
 * Update in-memory and global static array
 */
export function setActiveManuscriptImages(images: ManuscriptGalleryImage[]): void {
  MANUSCRIPT_IMAGES.length = 0;
  MANUSCRIPT_IMAGES.push(...images);
  inMemoryImagesCache = [...images];
}

/**
 * Load images from persistent storage (IndexedDB with LocalStorage fallback)
 */
export async function loadImagesFromStorage(): Promise<{ images: ManuscriptGalleryImage[] }> {
  try {
    // 1. Try IndexedDB first (Primary robust storage for full-res Base64 archives)
    if (typeof window !== 'undefined' && window.indexedDB) {
      try {
        const db = await openDB();
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const allRecordsRequest = store.getAll();

        const idbImages = await new Promise<ManuscriptGalleryImage[]>((resolve, reject) => {
          allRecordsRequest.onsuccess = () => resolve(allRecordsRequest.result || []);
          allRecordsRequest.onerror = () => reject(allRecordsRequest.error);
        });

        if (idbImages && idbImages.length > 0) {
          idbImages.sort((a, b) => a.imageIndex - b.imageIndex);
          setActiveManuscriptImages(idbImages);
          return { images: idbImages };
        }
      } catch (idbErr) {
        console.warn('IndexedDB read notice:', idbErr);
      }
    }

    // 2. Try LocalStorage fallback
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as ManuscriptGalleryImage[];
          if (Array.isArray(parsed) && parsed.length > 0) {
            parsed.sort((a, b) => a.imageIndex - b.imageIndex);
            setActiveManuscriptImages(parsed);
            return { images: parsed };
          }
        }
      } catch (lsErr) {
        console.warn('LocalStorage read notice:', lsErr);
      }
    }
  } catch (error) {
    console.warn('Error reading from persistent image storage:', error);
  }

  // If no stored images, return the global static array
  return { images: MANUSCRIPT_IMAGES };
}

/**
 * Save images to persistent storage (IndexedDB + LocalStorage) and update global static array
 */
export async function saveImagesToStorage(images: ManuscriptGalleryImage[]): Promise<void> {
  images.sort((a, b) => a.imageIndex - b.imageIndex);
  setActiveManuscriptImages(images);

  // 1. Save to IndexedDB (stores complete Base64 image payload safely)
  try {
    if (typeof window !== 'undefined' && window.indexedDB) {
      const db = await openDB();
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      
      // Clear old entries
      await new Promise<void>((resolve, reject) => {
        const clearReq = store.clear();
        clearReq.onsuccess = () => resolve();
        clearReq.onerror = () => reject(clearReq.error);
      });

      // Add all new entries
      for (const img of images) {
        store.put(img);
      }

      await new Promise<void>((resolve, reject) => {
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
      });
    }
  } catch (error) {
    console.warn('IndexedDB save warning:', error);
  }

  // 2. Save to LocalStorage as additional resilient layer
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    }
  } catch (e) {
    try {
      // If full array exceeds localStorage single-item quota, store lightweight metadata
      const lightweight = images.map(img => ({
        ...img,
        imageUrl: img.imageUrl.length < 100000 ? img.imageUrl : ''
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lightweight));
    } catch {
      // IndexedDB already holds the complete records
    }
  }

  // 3. Dispatch window storage event so all components/tabs sync instantly
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('sharikh-manuscripts-updated', { detail: { count: images.length } }));
  }
}

/**
 * Clear all stored images (IndexedDB + LocalStorage)
 */
export async function clearStorageImages(): Promise<void> {
  setActiveManuscriptImages([]);

  try {
    if (typeof window !== 'undefined' && window.indexedDB) {
      const db = await openDB();
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      store.clear();
    }
  } catch (e) {
    console.warn('Error clearing IndexedDB:', e);
  }

  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (e) {
    console.warn('Error clearing localStorage:', e);
  }

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('sharikh-manuscripts-updated', { detail: { count: 0 } }));
  }
}

/**
 * Process and convert uploaded files to high quality optimized base64 records
 * with natural numerical sorting (e.g. 1.jpg, 2.jpg ... 74.jpg) and standalone archival metadata
 */
export async function processUploadedImageFiles(
  files: File[],
  startIndex: number = 1
): Promise<ManuscriptGalleryImage[]> {
  // Sort files naturally by filename so numbered files like 1.jpg, 2.jpg ... 74.jpg maintain precise order
  const sortedFiles = Array.from(files).sort((a, b) => {
    return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
  });

  const results: ManuscriptGalleryImage[] = [];

  for (let i = 0; i < sortedFiles.length; i++) {
    const file = sortedFiles[i];
    const currentIndex = startIndex + i;
    
    // Read and optimize image for crisp historical manuscript readability
    const base64 = await readFileAndOptimizeBase64(file);
    
    // Clean file title from name without attaching to genealogy tree names
    const rawName = file.name.replace(/\.[^/.]+$/, '');
    const cleanTitle = rawName
      .replace(/[_-]+/g, ' ')
      .replace(/^\d+[\s.-]*/, '')
      .trim() || `وثيقة تاريخية معتمدة رقم (${currentIndex})`;

    const doc: ManuscriptGalleryImage = {
      id: `manuscript-${Date.now()}-${currentIndex}-${Math.random().toString(36).substring(2, 6)}`,
      imageIndex: currentIndex,
      fileName: file.name,
      imageUrl: base64,
      title: cleanTitle.length > 2 ? cleanTitle : `وثيقة تاريخية معتمدة (#${currentIndex})`,
      categoryLabel: 'وثيقة / مخطوطة أصلية معتمدة',
      era: 'وثائق ومخطوطات تاريخية محققة',
      archive: 'خزانة الوثائق والمخطوطات التاريخية',
      witness: 'الأرشيف والتوثيق المعتمد',
      description: `وثيقة تاريخية أصلية محققة معتمدة محفوظة في خزانة السجلات والوثائق التاريخية.`
    };

    results.push(doc);
  }

  return results;
}

/**
 * Delete a single image by ID and re-index the remaining images sequentially
 */
export async function deleteSingleImage(imageId: string, currentImages: ManuscriptGalleryImage[]): Promise<ManuscriptGalleryImage[]> {
  const filtered = currentImages.filter(img => img.id !== imageId);
  const reIndexed = filtered.map((img, idx) => ({
    ...img,
    imageIndex: idx + 1
  }));
  await saveImagesToStorage(reIndexed);
  return reIndexed;
}

/**
 * High-definition smart image optimizer for manuscript clarity and fast loading
 */
function readFileAndOptimizeBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      
      // If not an image or SVG/small file, return raw Base64
      if (!file.type.startsWith('image/') || file.type.includes('svg') || file.size < 300 * 1024) {
        resolve(result);
        return;
      }

      const img = new Image();
      img.onload = () => {
        try {
          const maxDim = 2400; // 2400px provides extreme clarity for handwritten manuscripts
          let { width, height } = img;

          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');

          if (!ctx) {
            resolve(result);
            return;
          }

          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, width, height);

          // Export as JPEG with 0.90 high quality (sharp legible text + compact size)
          const optimized = canvas.toDataURL('image/jpeg', 0.90);
          resolve(optimized);
        } catch {
          resolve(result);
        }
      };
      img.onerror = () => resolve(result);
      img.src = result;
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}
