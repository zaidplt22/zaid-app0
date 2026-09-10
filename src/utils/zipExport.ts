import JSZip from 'jszip';
import { ManuscriptGalleryImage } from '../data/manuscriptImagesData';

/**
 * Converts Base64 data URL to binary Uint8Array
 */
function base64ToUint8Array(base64Str: string): Uint8Array {
  const base64Data = base64Str.includes(';base64,') 
    ? base64Str.split(';base64,')[1] 
    : base64Str;
  const binaryString = window.atob(base64Data);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

/**
 * Client-Side Direct Full Project Exporter:
 * Bundles index.html, app_data.json, and all 74 images into a single, offline-ready ZIP file.
 */
export async function exportCompleteProjectWithImagesZip(
  images: ManuscriptGalleryImage[],
  onProgress?: (msg: string) => void
): Promise<Blob> {
  onProgress?.('جاري تحضير ملفات المشروع والمشجر...');
  const zip = new JSZip();

  // 1. Fetch index.html
  let indexHtmlContent = '';
  try {
    const res = await fetch('/index.html');
    if (res.ok) {
      indexHtmlContent = await res.text();
    }
  } catch {
    // Continue
  }

  if (!indexHtmlContent && typeof document !== 'undefined') {
    indexHtmlContent = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
  }

  // Add the single production index.html
  zip.file('index.html', indexHtmlContent);

  // 2. Fetch or generate app_data.json
  onProgress?.('جاري تضمين قاعدة بيانات الأسماء والأرقام (app_data.json)...');
  try {
    const res = await fetch('/app_data.json');
    if (res.ok) {
      const appData = await res.text();
      zip.file('app_data.json', appData);
    }
  } catch (err) {
    console.warn('Could not fetch app_data.json:', err);
  }

  // 3. Add images folder with all 74 manuscript images
  const imagesFolder = zip.folder('images');
  const totalImages = images.length;
  onProgress?.(`جاري تجهيز وتضمين ${totalImages} وثيقة ومخطوطة في مجلد images/...`);

  for (let i = 0; i < totalImages; i++) {
    const item = images[i];
    const indexNum = item.imageIndex || i + 1;
    const padIndex = String(indexNum).padStart(2, '0');
    let ext = 'jpg';
    if (item.fileName && item.fileName.toLowerCase().endsWith('.png')) {
      ext = 'png';
    } else if (item.fileName && item.fileName.toLowerCase().endsWith('.webp')) {
      ext = 'webp';
    }

    const targetFileName = item.fileName && item.fileName.length > 3
      ? item.fileName
      : `manuscript-${padIndex}.${ext}`;

    if (item.imageUrl && item.imageUrl.startsWith('data:')) {
      try {
        const bytes = base64ToUint8Array(item.imageUrl);
        imagesFolder?.file(targetFileName, bytes);
      } catch (e) {
        console.warn('Failed to convert base64 image:', item.fileName, e);
      }
    } else if (item.imageUrl) {
      try {
        // Relative or HTTP url
        const res = await fetch(item.imageUrl);
        if (res.ok) {
          const buffer = await res.arrayBuffer();
          imagesFolder?.file(targetFileName, buffer);
        }
      } catch (e) {
        console.warn('Failed to fetch image:', item.imageUrl, e);
      }
    }

    if ((i + 1) % 10 === 0 || i === totalImages - 1) {
      onProgress?.(`تم تضمين ${i + 1} من ${totalImages} وثيقة ومخطوطة...`);
    }
  }

  // 4. Add manuscripts metadata JSON
  const metadataClean = images.map((img, idx) => ({
    imageIndex: img.imageIndex || idx + 1,
    fileName: img.fileName,
    imagePath: `images/${img.fileName || `manuscript-${String(idx + 1).padStart(2, '0')}.jpg`}`,
    title: img.title,
    category: img.categoryLabel,
    era: img.era,
    archive: img.archive,
    witness: img.witness,
    description: img.description
  }));
  zip.file('manuscripts_data.json', JSON.stringify(metadataClean, null, 2));

  // 5. Add WebToApp & Android Guide
  const readmeText = `============================================================
دليل تشغيل التطبيق على WebToApp ونظام أندرويد (WebToApp Guide)
============================================================

1. محتويات هذه الحزمة المستقلة:
   - index.html: تطبيق المشجر والموسوعة الشامل (يعمل بدون إنترنت).
   - images/: مجلد يحتوي على كافة الوثائق والمخطوطات الـ 74 بدقة كاملة ومربوطة بـ index.html.
   - app_data.json: قاعدة البيانات الكاملة للأسماء والأرقام والأكواد.
   - manuscripts_data.json: فهرس وأرشيف كافة الوثائق الـ 74 وبياناتها المعتمدة.

2. كيفية الاستخدام والتشغيل:
   - للتشغيل على الحاسوب أو الهاتف: افتح ملف index.html مباشرة بأي متصفح، وستجد كافة الوثائق الـ 74 تعمل فوراً دون اتصال.
   - لإنشاء تطبيق أندرويد (APK) عبر WebToApp:
     1. ارفع هذا الملف المضغوط (ZIP) كاملاً إلى WebToApp.
     2. حدد ملف البداية (Start file) ليكون: index.html
     3. فعّل صلاحية التخزين (Storage / File Download) ووضع عدم الاتصال (Offline Mode).
`;
  zip.file('README_WebToApp.txt', readmeText);

  // 6. Generate ZIP
  onProgress?.('جاري ضغط الحزمة وإنشاء ملف ZIP النهائي...');
  const zipBlob = await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 }
  });

  return zipBlob;
}

/**
 * Triggers direct browser download of the generated ZIP
 */
export function triggerZipDownload(blob: Blob, filename = 'Sharh-AlBahr-Full-Export-With-74-Images.zip') {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 20000);
}

/**
 * Auto-sync images to backend server so server-side downloads also stay current
 */
export async function syncImagesToServer(images: ManuscriptGalleryImage[]): Promise<boolean> {
  if (!images || images.length === 0) return false;
  try {
    const res = await fetch('/api/sync-manuscripts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ images })
    });
    return res.ok;
  } catch {
    return false;
  }
}
