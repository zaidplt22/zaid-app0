import { MANUSCRIPT_BASE64_DATA } from './manuscriptBase64';

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
 * GLOBAL STATIC EMBEDDED MANUSCRIPTS ARRAY (74 VERIFIED HISTORICAL MANUSCRIPTS)
 * =========================================================================================
 * Contains all 74 historical manuscripts, archives, and genealogical records.
 * Prioritizes direct embedded Base64 data URLs for 100% offline self-containment,
 * with standard relative paths (images/manuscript-XX.png) as seamless fallback.
 */
export const MANUSCRIPT_IMAGES: ManuscriptGalleryImage[] = Array.from({ length: 74 }, (_, i) => {
  const index = i + 1;
  const numStr = String(index).padStart(2, '0');
  const embeddedBase64 = MANUSCRIPT_BASE64_DATA[index];
  return {
    id: `manuscript-${index}`,
    imageIndex: index,
    fileName: `manuscript-${numStr}.png`,
    imageUrl: embeddedBase64 || `images/manuscript-${numStr}.png`,
    title: `وثيقة ومخطوطة نسب آل شارح البحر المعتمدة (#${index})`,
    categoryLabel: 'وثيقة / مخطوطة أصلية محققة',
    era: 'سجلات تاريخية محققة وموثقة',
    archive: 'خزانة الوثائق والمخطوطات التاريخية',
    witness: 'الأرشيف والتوثيق المعتمد لآل شارح البحر',
    description: `صورة الوثيقة التاريخية المحققة رقم (${index}) ضمن الأرشيف الشامل لآل شارح البحر، مثبتة وموثقة في مشجر وسجلات النسب الشريف.`
  };
});

export const HARDCODED_MANUSCRIPTS: ManuscriptGalleryImage[] = MANUSCRIPT_IMAGES;
export const MANUSCRIPT_GALLERY_IMAGES: ManuscriptGalleryImage[] = MANUSCRIPT_IMAGES;
