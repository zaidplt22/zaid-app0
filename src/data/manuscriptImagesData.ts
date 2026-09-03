export interface ManuscriptGalleryImage {
  id: string;
  imageIndex: number;
  fileName: string;
  imageUrl: string;
  title: string;
  categoryLabel: string;
  era: string;
  archive: string;
  witness: string;
  description: string;
}

/**
 * =========================================================================================
 * GLOBAL STATIC EMBEDDED MANUSCRIPTS ARRAY
 * =========================================================================================
 * Clean, empty array ready for real verified manuscripts.
 * Any uploaded image is directly appended as Base64 and stored so all users read from this array.
 */
export const MANUSCRIPT_IMAGES: ManuscriptGalleryImage[] = [];

export const HARDCODED_MANUSCRIPTS: ManuscriptGalleryImage[] = MANUSCRIPT_IMAGES;
export const MANUSCRIPT_GALLERY_IMAGES: ManuscriptGalleryImage[] = MANUSCRIPT_IMAGES;
