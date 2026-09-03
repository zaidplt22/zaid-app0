import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  ScrollText, 
  Search, 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  X, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  FileText, 
  ShieldCheck,
  Upload,
  Trash2,
  Copy,
  Check,
  Image as ImageIcon,
  AlertTriangle,
  FileCheck,
  Lock,
  Unlock,
  Eye,
  KeyRound
} from 'lucide-react';
import { historicalManuscriptsList } from '../data/historicalManuscriptsData';
import { ManuscriptGalleryImage } from '../data/manuscriptImagesData';
import { 
  loadImagesFromStorage, 
  saveImagesToStorage, 
  clearStorageImages, 
  deleteSingleImage,
  processUploadedImageFiles,
  setActiveManuscriptImages 
} from '../utils/imageStorage';
import { exportLineageToPdf, exportLineageToDoc } from '../utils/exportUtils';

export const ManuscriptsGalleryView: React.FC = () => {
  // Gallery images state (Independent & Standalone)
  const [galleryImages, setGalleryImages] = useState<ManuscriptGalleryImage[]>([]);
  const [isLoadingStorage, setIsLoadingStorage] = useState<boolean>(true);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<string>('');

  // =========================================================================
  // ROLE-BASED ACCESS CONTROL (OWNER VS VISITOR)
  // =========================================================================
  // Checked from URL params (?admin=true / ?owner=true) or persisted in localStorage
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlHasAdmin = 
        params.get('admin') === 'true' || 
        params.get('admin') === '1' || 
        params.get('owner') === 'true' || 
        params.get('owner') === '1';
      
      const storageHasAdmin = localStorage.getItem('sharikh_is_admin') === 'true';
      return urlHasAdmin || storageHasAdmin;
    }
    return false;
  });

  // Admin PIN modal state
  const [showPinModal, setShowPinModal] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');

  // Clear confirmation modal state
  const [showClearConfirmModal, setShowClearConfirmModal] = useState<boolean>(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // File input ref for upload
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Gallery view state
  const [gallerySearchQuery, setGallerySearchQuery] = useState('');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [imageGridColumns, setImageGridColumns] = useState<3 | 4 | 2>(3);

  // Lightbox Zoom & Pan State
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);

  // 63 Historical references section toggle & filter state (Independent Annex)
  const [isTextDocsExpanded, setIsTextDocsExpanded] = useState<boolean>(false);
  const [refSearchQuery, setRefSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Initial load from persistent storage (IndexedDB + LocalStorage)
  useEffect(() => {
    const initLoad = async () => {
      try {
        const { images } = await loadImagesFromStorage();
        setGalleryImages(images);
        setActiveManuscriptImages(images);
      } catch (err) {
        console.error('Failed to load images from storage:', err);
      } finally {
        setIsLoadingStorage(false);
      }
    };
    initLoad();

    const handleStorageUpdate = async () => {
      try {
        const { images } = await loadImagesFromStorage();
        setGalleryImages(images);
      } catch (err) {
        console.error('Error refreshing images on storage event:', err);
      }
    };

    window.addEventListener('sharikh-manuscripts-updated', handleStorageUpdate);
    window.addEventListener('storage', handleStorageUpdate);

    return () => {
      window.removeEventListener('sharikh-manuscripts-updated', handleStorageUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex(prev => prev !== null ? (prev + 1) % galleryImages.length : null);
        setZoomLevel(1);
        setRotation(0);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex(prev => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
        setZoomLevel(1);
        setRotation(0);
      } else if (e.key === 'Escape') {
        setActiveImageIndex(null);
        setZoomLevel(1);
        setRotation(0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, galleryImages.length]);

  // Handle Admin PIN Unlock (Exact Passcode: 1357900)
  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    // Normalize both Eastern Arabic numerals (١٢٣...) and Western numerals (123...)
    const normalizedInput = pinInput
      .trim()
      .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString());

    if (normalizedInput === '1357900') {
      setIsAdmin(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('sharikh_is_admin', 'true');
      }
      setShowPinModal(false);
      setPinInput('');
      setPinError('');
    } else {
      setPinError('رمز المرور غير صحيح. يرجى إدخال رمز المرور الصحيح (1357900).');
    }
  };

  // Handle Admin Logout
  const handleAdminLogout = () => {
    setIsAdmin(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('sharikh_is_admin');
    }
  };

  // Handle Admin File Upload (Batch upload for up to 74+ images)
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setUploadProgress(`جاري معالجة وحفظ ${files.length} وثيقة في الأرشيف...`);

    try {
      const fileArray = Array.from(files) as File[];
      const newImages = await processUploadedImageFiles(fileArray, galleryImages.length + 1);
      
      const updatedList = [...galleryImages, ...newImages];
      setGalleryImages(updatedList);
      setActiveManuscriptImages(updatedList);
      await saveImagesToStorage(updatedList);
      
      setUploadProgress(`تم حفظ وإدراج ${newImages.length} وثيقة تاريخية بنجاح في المستودع المعتمد.`);
      setTimeout(() => setUploadProgress(''), 4000);
    } catch (err) {
      console.error('Error uploading manuscript images:', err);
      setUploadProgress('حدث خطأ أثناء معالجة الصور، يرجى المحاولة مجدداً.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  // Handle Single Image Delete (Admin only)
  const handleDeleteSingle = async (id: string) => {
    try {
      const updated = await deleteSingleImage(id, galleryImages);
      setGalleryImages(updated);
      setActiveManuscriptImages(updated);
      setDeleteTargetId(null);
      if (activeImageIndex !== null && activeImageIndex >= updated.length) {
        setActiveImageIndex(updated.length > 0 ? updated.length - 1 : null);
      }
    } catch (err) {
      console.error('Error deleting image:', err);
    }
  };

  // Handle Clear All (Admin only)
  const handleConfirmClear = async () => {
    setIsUploading(true);
    try {
      await clearStorageImages();
      setGalleryImages([]);
      setActiveManuscriptImages([]);
      setShowClearConfirmModal(false);
      setUploadProgress('تم تفريغ مستودع المخطوطات والوثائق بالكامل.');
      setTimeout(() => setUploadProgress(''), 3000);
    } catch (err) {
      console.error('Error clearing storage:', err);
    } finally {
      setIsUploading(false);
    }
  };

  // Copy code array snippet (Admin only)
  const handleCopyCode = () => {
    const codeSnippet = `export const MANUSCRIPT_IMAGES: ManuscriptGalleryImage[] = ${JSON.stringify(galleryImages, null, 2)};\n`;
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  // Filter standalone gallery images by search
  const filteredGalleryImages = useMemo(() => {
    if (!gallerySearchQuery.trim()) return galleryImages;
    const q = gallerySearchQuery.toLowerCase().trim();
    return galleryImages.filter(img => 
      img.title.toLowerCase().includes(q) ||
      img.fileName.toLowerCase().includes(q) ||
      img.categoryLabel.toLowerCase().includes(q) ||
      img.era.toLowerCase().includes(q) ||
      img.archive.toLowerCase().includes(q) ||
      img.description.toLowerCase().includes(q) ||
      img.imageIndex.toString() === q
    );
  }, [galleryImages, gallerySearchQuery]);

  // Filter 63 text references
  const filteredReferences = useMemo(() => {
    return historicalManuscriptsList.filter(item => {
      const q = refSearchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.referenceNumber.toString() === q ||
        item.description.toLowerCase().includes(q) ||
        item.proofSignificance.toLowerCase().includes(q) ||
        item.archiveLocation.toLowerCase().includes(q) ||
        item.custodianOrWitness.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q));

      const matchesCategory = 
        selectedCategory === 'all' || 
        item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [refSearchQuery, selectedCategory]);

  const categories = [
    { id: 'all', label: 'جميع المراجع التوثيقية (63)', count: historicalManuscriptsList.length },
    { id: 'manuscript', label: 'مخطوطات الأنساب', count: historicalManuscriptsList.filter(m => m.category === 'manuscript').length },
    { id: 'deed', label: 'حجج الوقف وبصائر التملك', count: historicalManuscriptsList.filter(m => m.category === 'deed').length },
    { id: 'tombstone', label: 'الشواهد والنقوش الأثرية', count: historicalManuscriptsList.filter(m => m.category === 'tombstone').length },
    { id: 'order', label: 'المراسيم والأوامر القضائية', count: historicalManuscriptsList.filter(m => m.category === 'order').length },
    { id: 'endorsement', label: 'شهادات العلماء والمحاضر', count: historicalManuscriptsList.filter(m => m.category === 'endorsement').length },
    { id: 'archive', label: 'المخطوطات النفيسة والمصاحف', count: historicalManuscriptsList.filter(m => m.category === 'archive').length },
  ];

  const handleOpenImageLightbox = (index: number) => {
    setActiveImageIndex(index);
    setZoomLevel(1);
    setRotation(0);
  };

  const handleCloseLightbox = () => {
    setActiveImageIndex(null);
    setZoomLevel(1);
    setRotation(0);
  };

  const handleNextImage = () => {
    if (activeImageIndex === null || galleryImages.length === 0) return;
    setActiveImageIndex((activeImageIndex + 1) % galleryImages.length);
    setZoomLevel(1);
    setRotation(0);
  };

  const handlePrevImage = () => {
    if (activeImageIndex === null || galleryImages.length === 0) return;
    setActiveImageIndex((activeImageIndex - 1 + galleryImages.length) % galleryImages.length);
    setZoomLevel(1);
    setRotation(0);
  };

  const activeImage: ManuscriptGalleryImage | null = 
    (activeImageIndex !== null && galleryImages[activeImageIndex]) ? galleryImages[activeImageIndex] : null;

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 font-cairo text-right" dir="rtl">
      {/* Header Banner */}
      <div className="bg-gradient-to-l from-[#042d23] via-[#064e3b] to-[#042d23] border border-amber-500/40 rounded-2xl p-6 sm:p-8 text-white shadow-xl mb-8 relative overflow-hidden">
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-400/50 text-amber-300 text-xs font-bold">
              <ScrollText className="w-3.5 h-3.5" />
              <span>خزانة الوثائق والمخطوطات التاريخية المعتمدة (المعرض المستقل)</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-amber-200 font-scheherazade">
              خزانة المخطوطات والوثائق التاريخية المحققة
            </h1>
            <p className="text-sm text-emerald-100/90 max-w-3xl leading-relaxed">
              المستودع الرقمي المستقل لعرض كافة الوثائق والمخطوطات الأصلية المحققة بالتسلسل الكامل مع إمكانية التكبير العالي والتدوير والتحميل المباشر بصيغتي PDF و Word لكافة الباحثين والزوار.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-950/70 border border-emerald-500/40 rounded-xl px-5 py-3 text-center min-w-[110px]">
                <div className="text-3xl font-black text-amber-300">{galleryImages.length}</div>
                <div className="text-[11px] text-emerald-200 font-bold">وثيقة تاريخية معتمدة</div>
              </div>
              <div className="bg-emerald-950/70 border border-emerald-500/40 rounded-xl px-5 py-3 text-center min-w-[110px]">
                <div className="text-3xl font-black text-emerald-300">63</div>
                <div className="text-[11px] text-emerald-200 font-bold">مرجعاً توثيقياً محققاً</div>
              </div>
            </div>

            {!isAdmin && (
              <button
                onClick={() => setShowPinModal(true)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-amber-950/60 hover:bg-amber-900/80 border border-amber-500/40 text-amber-300 text-xs font-bold transition cursor-pointer"
                title="تسجيل دخول المشرف والمالك لرفع وإدارة الوثائق"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>دخول الإدارة</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* OWNER CONTROL BAR (VISIBLE EXCLUSIVELY IN OWNER MODE)                     */}
      {/* ========================================================================= */}
      {isAdmin && (
        <div className="bg-gradient-to-l from-amber-950 via-stone-900 to-amber-950 border-2 border-amber-400 rounded-2xl p-5 mb-8 text-amber-100 shadow-2xl space-y-4 animate-fade-in">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-500/40 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-amber-400 text-stone-950 font-black shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-amber-200 text-base flex items-center gap-2">
                  <span>لوحة تحكم المشرف والمالك (وضع الإدارة النشط)</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-bold">
                    نشط ومحفوظ
                  </span>
                </h3>
                <p className="text-xs text-amber-300/80">
                  إدارة ورفع الـ 74 وثيقة ومخطوطة وحفظها بشكل دائم في مستودع التطبيق المشترك
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-stretch sm:self-auto">
              <button
                onClick={handleAdminLogout}
                className="text-xs bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-600 px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5"
                title="تسجيل الخروج والعودة لوضع الزائر"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>معاينة كزائر عادي</span>
              </button>
            </div>
          </div>

          {/* Action Buttons for Owner */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Direct Upload Button (Fully Operational for 74 files) */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              multiple
              accept="image/jpeg,image/png,image/webp,image/jpg"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-sm shadow-md hover:shadow-lg transition cursor-pointer border border-amber-300 disabled:opacity-50"
            >
              <Upload className="w-4 h-4 text-stone-950" />
              <span>[تحميل الوثائق والمخطوطات]</span>
            </button>

            {/* Clear All Button */}
            <button
              onClick={() => setShowClearConfirmModal(true)}
              disabled={isUploading || galleryImages.length === 0}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-950 hover:bg-rose-900 text-rose-200 font-bold text-xs sm:text-sm shadow-md transition cursor-pointer border border-rose-600/50 disabled:opacity-50"
            >
              <Trash2 className="w-4 h-4 text-rose-400" />
              <span>[مسح الوثائق / تفريغ]</span>
            </button>

            {/* Copy TypeScript Array Code */}
            {galleryImages.length > 0 && (
              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-xs sm:text-sm shadow-md transition cursor-pointer border border-stone-700"
                title="نسخ كود المصفوفة البرمجية مع الصور"
              >
                {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                <span>{copiedCode ? 'تم نسخ كود المصفوفة!' : 'نسخ كود المصفوفة البرمجية'}</span>
              </button>
            )}

            <div className="text-xs text-amber-300/90 mr-auto font-bold bg-amber-900/40 px-3.5 py-2 rounded-lg border border-amber-700/50">
              عدد الوثائق المحفوظة في المستودع: {galleryImages.length} وثيقة
            </div>
          </div>

          {/* Upload Progress Status Banner */}
          {uploadProgress && (
            <div className="p-3 bg-emerald-950/90 border border-emerald-500/60 text-emerald-200 text-xs rounded-xl flex items-center gap-2 shadow-inner">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="font-semibold">{uploadProgress}</span>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. STANDALONE DOCUMENT GALLERY SHOWCASE (INDEPENDENT FROM TREE)           */}
      {/* ========================================================================= */}
      <div className="space-y-6 mb-12">
        {/* Gallery Control Bar & Export Buttons (Visible to ALL Visitors) */}
        <div className="bg-gradient-to-r from-[#042d23] via-[#064e3b] to-[#042d23] border-2 border-amber-400/50 rounded-2xl p-5 sm:p-6 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-300" />
              <h2 className="text-base sm:text-lg font-extrabold text-amber-200">
                ألبوم معرض الوثائق والمخطوطات التاريخية المعتمدة ({galleryImages.length} وثيقة)
              </h2>
            </div>
            <p className="text-xs text-emerald-100/90">
              معرض الوثائق والمخطوطات الأصلية المحققة مع إمكانية التكبير بدقة كاملة والتحميل المباشر.
            </p>
          </div>

          {/* Export Controls for ALL Visitors */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {/* PDF Download Button */}
            <button
              onClick={() => exportLineageToPdf()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-amber-200 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition cursor-pointer border border-emerald-400/50"
              title="تحميل الوثائق والمشجر بصيغة PDF"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>[تحميل الوثائق بصيغة PDF]</span>
            </button>

            {/* Word Download Button */}
            <button
              onClick={() => exportLineageToDoc()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 text-xs sm:text-sm font-black shadow-md hover:shadow-lg transition cursor-pointer border border-amber-300"
              title="تحميل الوثائق والمشجر بصيغة Word"
            >
              <FileText className="w-4 h-4 text-stone-950" />
              <span>[تحميل الوثائق بصيغة Word]</span>
            </button>

            {/* Column Layout Density */}
            {galleryImages.length > 0 && (
              <div className="flex items-center bg-emerald-950/90 border border-emerald-500/40 rounded-xl p-1">
                <button
                  onClick={() => setImageGridColumns(2)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    imageGridColumns === 2 ? 'bg-amber-400 text-stone-950' : 'text-emerald-300 hover:text-white'
                  }`}
                  title="عرض عمودين (صور كبيرة)"
                >
                  2
                </button>
                <button
                  onClick={() => setImageGridColumns(3)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    imageGridColumns === 3 ? 'bg-amber-400 text-stone-950' : 'text-emerald-300 hover:text-white'
                  }`}
                  title="عرض 3 أعمدة (الافتراضي)"
                >
                  3
                </button>
                <button
                  onClick={() => setImageGridColumns(4)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                    imageGridColumns === 4 ? 'bg-amber-400 text-stone-950' : 'text-emerald-300 hover:text-white'
                  }`}
                  title="عرض 4 أعمدة (شبكة كثيفة)"
                >
                  4
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Gallery Search Filter Bar */}
        {galleryImages.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-stone-200 shadow-sm">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={gallerySearchQuery}
                onChange={(e) => setGallerySearchQuery(e.target.value)}
                placeholder="ابحث في وثائق المعرض (بالرقم، العنوان، الحقبة، الأرشيف)..."
                className="w-full pl-4 pr-10 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition"
              />
              {gallerySearchQuery && (
                <button 
                  onClick={() => setGallerySearchQuery('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs"
                >
                  مسح
                </button>
              )}
            </div>
            <div className="text-xs text-stone-500 font-bold whitespace-nowrap">
              عرض {filteredGalleryImages.length} من أصل {galleryImages.length} وثيقة تاريخية معتمدة
            </div>
          </div>
        )}

        {/* Gallery Image Grid (Independent & Standalone) */}
        {isLoadingStorage ? (
          <div className="p-12 text-center text-stone-500 bg-white rounded-2xl border border-stone-200">
            <div className="w-8 h-8 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm font-bold">جاري تحميل خزانة الوثائق والمخطوطات...</p>
          </div>
        ) : galleryImages.length === 0 ? (
          /* Clean Empty State */
          <div className="bg-white rounded-2xl border-2 border-dashed border-stone-300 p-8 sm:p-12 text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center mx-auto">
              <ImageIcon className="w-8 h-8" />
            </div>
            <div className="space-y-2 max-w-lg mx-auto">
              <h4 className="text-base sm:text-lg font-bold text-stone-800">
                خزانة الوثائق والمخطوطات التاريخية المعتمدة
              </h4>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                المستودع الرقمي جاهز. تظهر هنا الوثائق والمخطوطات الأصلية المحققة فور اعتمادها ورفعها من قبل إدارة الأرشيف.
              </p>
            </div>
            {isAdmin && (
              <div className="pt-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-sm shadow-md transition cursor-pointer"
                >
                  <Upload className="w-4 h-4" />
                  <span>رفع وإدراج الوثائق الآن</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className={`grid gap-5 ${
            imageGridColumns === 2 
              ? 'grid-cols-1 md:grid-cols-2' 
              : imageGridColumns === 4 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {filteredGalleryImages.map((img, idx) => {
              const actualIndex = galleryImages.findIndex(i => i.id === img.id);
              const hasImage = Boolean(img.imageUrl && img.imageUrl.trim().length > 0);

              return (
                <div
                  key={img.id}
                  className="group bg-white rounded-2xl border border-stone-200 hover:border-amber-500/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer relative"
                  onClick={() => handleOpenImageLightbox(actualIndex !== -1 ? actualIndex : idx)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] bg-stone-900 overflow-hidden flex items-center justify-center">
                    {hasImage ? (
                      <img
                        src={img.imageUrl}
                        alt={img.title}
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full p-6 flex flex-col justify-between bg-stone-950 text-stone-300">
                        <div className="text-center my-auto space-y-2">
                          <FileText className="w-10 h-10 text-amber-400 mx-auto" />
                          <div className="font-bold text-sm text-stone-200">{img.title}</div>
                        </div>
                      </div>
                    )}

                    {/* Hover Zoom Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-amber-400 text-stone-950 px-4 py-2 rounded-xl text-xs font-bold shadow-2xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <ZoomIn className="w-4 h-4" />
                        <span>عرض وتكبير الوثيقة</span>
                      </div>
                    </div>

                    {/* Top Badges */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-amber-300 text-[11px] font-black border border-amber-400/40 shadow-md">
                        وثيقة #{img.imageIndex}
                      </span>
                    </div>

                    {/* Admin Delete Action Button (On Card Hover) */}
                    {isAdmin && (
                      <div 
                        className="absolute top-3 left-3 z-20"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteSingle(img.id);
                        }}
                      >
                        <button
                          className="p-1.5 rounded-lg bg-rose-900/90 hover:bg-rose-700 text-rose-200 border border-rose-500/50 shadow-md transition"
                          title="حذف هذه الوثيقة"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Card Info Footer */}
                  <div className="p-4 flex-1 flex flex-col justify-between bg-stone-50/50 border-t border-stone-100">
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-stone-900 text-sm group-hover:text-emerald-800 transition line-clamp-2 leading-snug">
                        {img.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 line-clamp-2 leading-relaxed">
                        {img.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-2 border-t border-stone-200/60 flex items-center justify-between text-[10px] text-stone-400">
                      <span className="truncate max-w-[150px]" title={img.fileName}>
                        {img.fileName}
                      </span>
                      <span className="text-emerald-700 font-bold">
                        وثيقة أصلية محققة
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 2. DEDICATED ANNEX: 63 HISTORICAL REFERENCES (UNBOUND REFERENCE TEXTS)   */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-7 shadow-sm mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                الملحق التوثيقي التاريخي: الدليل النصي للمراجع الـ 63 المحققة
              </h3>
              <p className="text-xs text-stone-500">
                نصوص وبصائر الإثبات الشرعي والجغرافي والنسبي لعمود نسب شارح البحر الشريف
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsTextDocsExpanded(!isTextDocsExpanded)}
            className="text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-xl transition cursor-pointer self-start sm:self-auto"
          >
            {isTextDocsExpanded ? 'طي قسم نصوص المراجع ▲' : 'عرض وتوسيع نصوص المراجع الـ 63 ▼'}
          </button>
        </div>

        {isTextDocsExpanded && (
          <div className="space-y-6 animate-fade-in">
            {/* Search Bar */}
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={refSearchQuery}
                onChange={(e) => setRefSearchQuery(e.target.value)}
                placeholder="ابحث في نصوص المراجع الـ 63 (بالعنوان، المكان، الدلالة، الشهود، الأرشيف)..."
                className="w-full pl-4 pr-10 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition"
              />
              {refSearchQuery && (
                <button 
                  onClick={() => setRefSearchQuery('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs"
                >
                  مسح
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer border ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-900 text-amber-300 border-emerald-950 shadow-sm'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-200'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>

            {/* Reference Cards List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[560px] overflow-y-auto pr-1">
              {filteredReferences.map((ref) => (
                <div 
                  key={ref.id}
                  className="bg-stone-50/80 hover:bg-stone-50 rounded-xl p-4 border border-stone-200/80 hover:border-emerald-500/50 transition shadow-sm space-y-3"
                >
                  <div className="flex items-start justify-between gap-2 border-b border-stone-200/60 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-emerald-900 text-amber-300 font-black text-xs flex items-center justify-center flex-shrink-0">
                        {ref.referenceNumber}
                      </span>
                      <h4 className="font-bold text-stone-900 text-sm leading-snug">
                        {ref.title}
                      </h4>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold whitespace-nowrap">
                      {ref.dateOrEra}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {ref.description}
                  </p>

                  <div className="bg-amber-50/70 border-r-2 border-amber-500 p-2.5 rounded-l-lg text-[11px] text-amber-950 leading-relaxed">
                    <strong className="font-bold text-amber-900">دلالة الإثبات الشرعي: </strong>
                    {ref.proofSignificance}
                  </div>

                  <div className="pt-1 flex flex-wrap items-center justify-between text-[10px] text-stone-500 gap-2 border-t border-stone-200/50">
                    <div>
                      <span className="font-semibold text-stone-700">الأرشيف: </span>
                      <span>{ref.archiveLocation}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-stone-700">الشاهد/الناظر: </span>
                      <span>{ref.custodianOrWitness}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 3. LIGHTBOX MODAL WITH DEEP ZOOM, PAN & ROTATE CONTROLS                   */}
      {/* ========================================================================= */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-2 sm:p-4 text-white animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseLightbox();
          }}
        >
          {/* Lightbox Header Bar */}
          <div className="w-full max-w-6xl flex items-center justify-between bg-stone-900/80 border border-stone-800 rounded-2xl px-4 py-3 shadow-xl z-20">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-stone-950 font-black text-xs">
                #{activeImage.imageIndex}
              </span>
              <div>
                <h3 className="font-bold text-amber-200 text-xs sm:text-sm leading-tight line-clamp-1">
                  {activeImage.title}
                </h3>
                <span className="text-[10px] text-stone-400">
                  {activeImage.fileName} • {activeImage.archive}
                </span>
              </div>
            </div>

            {/* Lightbox Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setZoomLevel(prev => Math.min(prev + 0.3, 4))}
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white transition cursor-pointer"
                title="تكبير"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                onClick={() => setZoomLevel(prev => Math.max(prev - 0.3, 0.6))}
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white transition cursor-pointer"
                title="تصغير"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <button
                onClick={() => setRotation(prev => (prev + 90) % 360)}
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white transition cursor-pointer"
                title="تدوير 90 درجة"
              >
                <RotateCw className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setZoomLevel(1);
                  setRotation(0);
                }}
                className="px-2.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white text-xs font-bold transition cursor-pointer"
                title="إعادة ضبط المقياس"
              >
                100%
              </button>

              {/* Admin Single Delete in Lightbox */}
              {isAdmin && (
                <button
                  onClick={() => handleDeleteSingle(activeImage.id)}
                  className="p-2 rounded-xl bg-rose-950 hover:bg-rose-800 text-rose-300 hover:text-white transition cursor-pointer border border-rose-700"
                  title="حذف هذه الوثيقة"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={handleCloseLightbox}
                className="p-2 rounded-xl bg-rose-900/80 hover:bg-rose-800 text-rose-200 hover:text-white transition cursor-pointer mr-2"
                title="إغلاق المعاينة"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Stage */}
          <div className="relative flex-1 w-full max-w-6xl flex items-center justify-center overflow-hidden my-2">
            {/* Previous Image Arrow */}
            {galleryImages.length > 1 && (
              <button
                onClick={handlePrevImage}
                className="absolute right-2 sm:right-6 z-30 p-3 rounded-full bg-black/60 hover:bg-amber-500 hover:text-stone-950 text-white transition border border-white/20 shadow-2xl cursor-pointer"
                title="الوثيقة السابقة (السهم الأيمن)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Main Stage Image */}
            <div 
              className="w-full h-full flex items-center justify-center p-2 cursor-grab active:cursor-grabbing transition-transform duration-200"
              style={{
                transform: `scale(${zoomLevel}) rotate(${rotation}deg)`
              }}
            >
              {activeImage.imageUrl ? (
                <img
                  src={activeImage.imageUrl}
                  alt={activeImage.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl pointer-events-none select-none"
                />
              ) : (
                <div className="bg-stone-900 border-2 border-amber-500/60 rounded-2xl p-8 max-w-xl text-center space-y-4 shadow-2xl">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-amber-400 text-amber-300 flex items-center justify-center mx-auto shadow-md">
                    <FileCheck className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="px-3 py-1 rounded-full bg-amber-950 text-amber-300 text-xs font-bold border border-amber-500/50">
                      وثيقة رقم ({activeImage.imageIndex})
                    </span>
                    <h2 className="text-xl font-black text-amber-200 font-scheherazade">
                      {activeImage.title}
                    </h2>
                    <p className="text-xs text-stone-300 leading-relaxed text-right pt-2 border-t border-stone-800">
                      {activeImage.description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Next Image Arrow */}
            {galleryImages.length > 1 && (
              <button
                onClick={handleNextImage}
                className="absolute left-2 sm:left-6 z-30 p-3 rounded-full bg-black/60 hover:bg-amber-500 hover:text-stone-950 text-white transition border border-white/20 shadow-2xl cursor-pointer"
                title="الوثيقة التالية (السهم الأيسر)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Lightbox Footer Bar */}
          <div className="w-full max-w-4xl bg-stone-900/80 border border-stone-800 rounded-2xl px-5 py-2.5 text-center text-xs text-stone-300 shadow-xl flex items-center justify-between">
            <span className="text-amber-300 font-bold">
              الوثيقة {activeImageIndex !== null ? activeImageIndex + 1 : 1} من أصل {galleryImages.length}
            </span>
            <span className="text-[11px] text-stone-400">
              استخدم الأسهم بلوحة المفاتيح للتنقل • أزرار التكبير للتفاصيل • Esc للإغلاق
            </span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. CLEAR CONFIRMATION MODAL (ADMIN ONLY)                                 */}
      {/* ========================================================================= */}
      {showClearConfirmModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border-2 border-rose-600/80 rounded-2xl p-6 max-w-md w-full text-white shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-rose-400">
              <div className="p-2 rounded-xl bg-rose-950 border border-rose-700">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base">
                  تأكيد مسح وتفريغ الوثائق
                </h3>
                <p className="text-xs text-stone-400">هذا الإجراء سيحذف كافة الوثائق المحفوظة في المستودع</p>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed bg-stone-950 p-3 rounded-xl border border-stone-800">
              هل أنت متأكد من رغبتك في مسح كافة الوثائق الحالية ({galleryImages.length} وثيقة) والبدء بمستودع فارغ ونظيف؟
            </p>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={handleConfirmClear}
                className="flex-1 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs transition cursor-pointer"
              >
                نعم، مسح وتفريغ المستودع
              </button>
              <button
                onClick={() => setShowClearConfirmModal(false)}
                className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl text-xs transition cursor-pointer"
              >
                إلغاء التراجع
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. OWNER PIN UNLOCK MODAL                                                */}
      {/* ========================================================================= */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border-2 border-amber-500/80 rounded-2xl p-6 max-w-sm w-full text-white shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-amber-300">
                <KeyRound className="w-5 h-5" />
                <h3 className="font-bold text-sm">تسجيل دخول المشرف / المالك</h3>
              </div>
              <button
                onClick={() => {
                  setShowPinModal(false);
                  setPinError('');
                  setPinInput('');
                }}
                className="text-stone-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleVerifyPin} className="space-y-3">
              <p className="text-xs text-stone-300 leading-relaxed">
                أدخل رمز التحقق لتفعيل وضع المشرف والمالك وإظهار أدوات رفع وإدارة الوثائق:
              </p>

              <input
                type="password"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="أدخل رمز المرور..."
                autoFocus
                className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-700 rounded-xl text-sm text-center text-amber-200 tracking-widest focus:outline-none focus:border-amber-400"
              />

              {pinError && (
                <p className="text-[11px] text-rose-400 font-semibold">{pinError}</p>
              )}

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black rounded-xl text-xs transition cursor-pointer"
                >
                  دخول وتفعيل
                </button>
                <button
                  type="button"
                  onClick={() => setShowPinModal(false)}
                  className="px-3 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl text-xs transition cursor-pointer"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Discreet Admin Lock / Status in Footer for Owner Access */}
      <div className="pt-8 border-t border-stone-200 flex items-center justify-between text-xs text-stone-400">
        <div>
          خزانة وثائق ومخطوطات ذرية سيدي أحمد بن عبد الله الحضرمي البركاني (شارح البحر)
        </div>

        <div>
          {!isAdmin ? (
            <button
              onClick={() => setShowPinModal(true)}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-emerald-800 transition cursor-pointer text-[11px]"
              title="دخول المشرف والمالك"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>دخول الإدارة</span>
            </button>
          ) : (
            <div className="inline-flex items-center gap-2 text-amber-700 font-bold text-[11px]">
              <Unlock className="w-3.5 h-3.5 text-amber-600" />
              <span>وضع الإدارة نشط</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
