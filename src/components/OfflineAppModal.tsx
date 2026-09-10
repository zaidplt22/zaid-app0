import React, { useState } from 'react';
import { Smartphone, Download, CheckCircle2, ShieldCheck, BookOpen, X, FileArchive } from 'lucide-react';
import { sequentialLineageBlocks } from '../data/sequentialLineageData';
import { exportCompleteProjectWithImagesZip, triggerZipDownload } from '../utils/zipExport';
import { loadImagesFromStorage } from '../utils/imageStorage';

interface OfflineAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfflineAppModal: React.FC<OfflineAppModalProps> = ({ isOpen, onClose }) => {
  const [zipProgress, setZipProgress] = useState<string>('');
  const [isExportingZip, setIsExportingZip] = useState(false);

  if (!isOpen) return null;

  const totalBlocks = sequentialLineageBlocks.length;

  const handleExportZipWithImages = async () => {
    try {
      setIsExportingZip(true);
      setZipProgress('جاري استخراج بيانات الوثائق الـ 74 وتجهيز ملفات المشروع...');
      const { images } = await loadImagesFromStorage();
      const zipBlob = await exportCompleteProjectWithImagesZip(images, (msg) => {
        setZipProgress(msg);
      });
      triggerZipDownload(zipBlob, 'webtoapp_bundle.zip');
      setZipProgress('تم تجهيز وبدء تحميل الحزمة الشاملة مع الـ 74 صورة بنجاح!');
      setTimeout(() => {
        setZipProgress('');
        setIsExportingZip(false);
      }, 3500);
    } catch (err) {
      console.error('Error generating project zip with images:', err);
      setZipProgress('حدث خطأ أثناء الضغط، يمكنك تنزيل ملف ZIP المباشر أدناه.');
      setIsExportingZip(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn" dir="rtl">
      <div className="bg-[#1c1917] border-2 border-emerald-600/80 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative text-stone-100 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 transition"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 border-b border-stone-700 pb-4">
          <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
            <Smartphone className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-emerald-400">تطبيق الأندرويد الشامل (بدون إنترنت)</h2>
            <p className="text-xs text-stone-400 mt-0.5">تحميل وتثبيت كتاب وموسوعة آل الجنيد في تعز - من أعقاب شارح البحر الحضرمي كاملة في هاتفك</p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 gap-2.5 mb-5">
          <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-3 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
            <div>
              <div className="text-xs font-bold text-stone-200">عمل أوفلاين 100%</div>
              <div className="text-[11px] text-stone-400">تصفح كامل المشجر بدون شبكة أو إنترنت</div>
            </div>
          </div>
          <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-3 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
            <div>
              <div className="text-xs font-bold text-stone-200">دقة توثيقية قطعية</div>
              <div className="text-[11px] text-stone-400">يشمل {totalBlocks} كتلة نسب وأكواد الأجيال</div>
            </div>
          </div>
        </div>

        {/* Download Action Section */}
        <div className="space-y-3.5">

          {/* 1. Complete Project Clean Export Package (ZIP) */}
          <div className="bg-emerald-950/50 border-2 border-emerald-500 rounded-xl p-4 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FileArchive className="w-5 h-5 text-emerald-400" />
                <span className="text-base font-bold text-emerald-300">حزمة المشروع النظيفة الشاملة (ZIP كامل)</span>
              </div>
              <span className="px-2 py-0.5 bg-emerald-500 text-stone-950 text-[10px] font-black rounded-md uppercase tracking-wider">
                الحزمة الشاملة المعتمدة
              </span>
            </div>
            <p className="text-xs text-stone-300 mb-3 leading-relaxed">
              الحزمة الكاملة النظيفة والجاهزة للتشغيل المباشر أوفلاين على الكمبيوتر والهاتف أو للرفع المباشر على WebToApp. تتضمن:
              <br />
              • تطبيق الموسوعة والمشجر الشامل <code className="text-amber-300 font-mono font-bold">index.html</code>.
              <br />
              • مجلد الوثائق والمخطوطات الـ 74 كاملة بدقة عالية <code className="text-emerald-300 font-mono font-bold">images/</code>.
              <br />
              • ملف البيانات الهيكلية <code className="text-cyan-300 font-mono font-bold">app_data.json</code> وفهرس التوثيق <code className="text-cyan-300 font-mono font-bold">manuscripts_data.json</code>.
            </p>

            {zipProgress && (
              <div className="mb-3 p-2.5 bg-emerald-950/90 border border-emerald-500/60 rounded-lg text-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{zipProgress}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href="/webtoapp_bundle.zip"
                download="webtoapp_bundle.zip"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-lg cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>تحميل حزمة webtoapp_bundle.zip الشاملة (مباشر)</span>
              </a>

              <button
                onClick={handleExportZipWithImages}
                disabled={isExportingZip}
                className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition border border-stone-700 disabled:opacity-50 cursor-pointer"
                title="إعادة ضغط حزمة مخصصة من المتصفح"
              >
                <FileArchive className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isExportingZip ? 'جاري التجهيز...' : 'ضغط مباشر من المتصفح'}</span>
              </button>
            </div>
          </div>

          {/* 2. Standalone Single-File HTML */}
          <div className="bg-stone-900/90 border border-amber-500/50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-bold text-amber-300">ملف التطبيق المستقل (index.html)</span>
              </div>
              <span className="text-[11px] text-amber-300 font-medium bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                تشغيل مباشر بدون فك ضغط
              </span>
            </div>
            <p className="text-xs text-stone-300 mb-3 leading-relaxed">
              ملف واحد متكامل وشامل يفتح ويعمل فوراً بنقرة واحدة في أي متصفح بالهاتف أو الحاسوب بدون الحاجة لإنترنت أو خادم.
            </p>
            <div className="flex gap-2">
              <a
                href="/index.html"
                download="index.html"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition shadow-md"
              >
                <Download className="w-4 h-4 text-stone-950" />
                <span>تحميل ملف index.html المستقل</span>
              </a>
              <a
                href="/app_data.json"
                download="app_data.json"
                className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-cyan-300 text-xs font-medium transition border border-stone-700"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>بيانات JSON</span>
              </a>
            </div>
          </div>

        </div>

        {/* Operating Instructions */}
        <div className="mt-4 pt-4 border-t border-stone-800 text-[11px] text-stone-400 leading-normal space-y-1.5 bg-stone-950/60 p-3.5 rounded-xl">
          <div className="font-bold text-stone-200 text-xs flex items-center gap-1.5 mb-1.5">
            <span>💡 إرشادات الاستخدام والتشغيل:</span>
          </div>
          <div>1. <strong>التشغيل على الكمبيوتر أو الهاتف:</strong> قم بفك ضغط ملف ZIP واضغط نقراً مزدوجاً على <code className="text-amber-300 font-mono">index.html</code> لتفتح الموسوعة والمشجر وكافة الوثائق الـ 74 أوفلاين.</div>
          <div>2. <strong>إنشاء تطبيق أندرويد (APK) عبر WebToApp:</strong> ارفع ملف ZIP إلى موقع webtoapp.com، وعيّن صفحة البداية إلى <code className="text-amber-300 font-mono">index.html</code> ثم حمّل تطبيق هاتفك.</div>
        </div>

        {/* Footer Close */}
        <div className="mt-4 text-center">
          <button
            onClick={onClose}
            className="px-6 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-medium transition cursor-pointer"
          >
            إغلاق النافذة
          </button>
        </div>

      </div>
    </div>
  );
};
