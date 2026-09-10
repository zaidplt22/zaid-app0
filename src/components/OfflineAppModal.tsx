import React, { useState } from 'react';
import { Smartphone, Download, CheckCircle2, ShieldCheck, BookOpen, ExternalLink, X, Copy, Check, FileArchive, Layers } from 'lucide-react';
import { sequentialLineageBlocks } from '../data/sequentialLineageData';
import { useAuthRole } from '../utils/authRole';
import { exportCompleteProjectWithImagesZip, triggerZipDownload } from '../utils/zipExport';
import { loadImagesFromStorage } from '../utils/imageStorage';

interface OfflineAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfflineAppModal: React.FC<OfflineAppModalProps> = ({ isOpen, onClose }) => {
  const { isAdmin } = useAuthRole();
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
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
      triggerZipDownload(zipBlob, 'Sharh-AlBahr-Complete-With-74-Images.zip');
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

  const triggerDirectApkDownload = (filename: string = 'geneology-app.apk') => {
    setDownloading(true);
    // 1. Direct Anchor Download
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 1500);
  };

  const triggerOfflineHtmlDownload = async (filename: string = 'index.html') => {
    try {
      const response = await fetch('/Sharh-AlBahr-Offline-App.html');
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
    } catch {
      const link = document.createElement('a');
      link.href = '/Sharh-AlBahr-Offline-App.html';
      link.download = filename;
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleCopyLink = () => {
    const fullUrl = window.location.origin + '/geneology-app.apk';
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
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

          {/* 1. Complete Project Full Export Package (ZIP) */}
          <div className="bg-emerald-950/40 border-2 border-emerald-500/70 rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FileArchive className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold text-emerald-300">حزمة المشروع الكاملة مع كافة الصور الـ 74 (ZIP)</span>
              </div>
              <span className="px-2 py-0.5 bg-emerald-500 text-stone-950 text-[10px] font-black rounded-md uppercase tracking-wider">
                الحزمة الشاملة الموصى بها
              </span>
            </div>
            <p className="text-xs text-stone-300 mb-3 leading-relaxed">
              الحزمة الكاملة الجاهزة للتشغيل الفوري أوفلاين أو الرفع على WebToApp. تتضمن:
              <br />
              • ملف <code className="text-amber-300 font-mono font-bold">index.html</code> الشامل مع التصميم والوظائف.
              <br />
              • مجلد <code className="text-emerald-300 font-mono font-bold">images/</code> يحتوي على جميع الوثائق والمخطوطات الـ 74 بدقة عالية.
              <br />
              • ملف البيانات <code className="text-cyan-300 font-mono font-bold">app_data.json</code> وفهرس التوثيق <code className="text-cyan-300 font-mono font-bold">manuscripts_data.json</code>.
            </p>

            {zipProgress && (
              <div className="mb-3 p-2.5 bg-emerald-950/90 border border-emerald-500/60 rounded-lg text-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{zipProgress}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href="/Sharh-AlBahr-Full-Export-With-74-Images.zip"
                download="Sharh-AlBahr-Full-Export-With-74-Images.zip"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>تحميل الحزمة الشاملة الآن (ZIP مباشر)</span>
              </a>

              <button
                onClick={handleExportZipWithImages}
                disabled={isExportingZip}
                className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition border border-stone-700 disabled:opacity-50 cursor-pointer"
                title="إنشاء وضغط حزمة مخصصة من المتصفح"
              >
                <FileArchive className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isExportingZip ? 'جاري التجهيز...' : 'تصدير ديناميكي (ZIP)'}</span>
              </button>
            </div>
          </div>

          {/* 2. Standalone Single-File HTML (With 74 Embedded Base64 Images) */}
          <div className="bg-stone-900/90 border border-amber-500/50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-bold text-amber-300">ملف تطبيق HTML المستقل (صور مدمجة داخلياً)</span>
              </div>
              <span className="text-[11px] text-amber-300 font-medium bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                ملف واحد يعمل بدون أي مجلد
              </span>
            </div>
            <p className="text-xs text-stone-300 mb-3 leading-relaxed">
              ملف HTML مدمج مستقل 100% يحتوي على كامل الشيفرات والبيانات مع كافة الوثائق الـ 74 مدمجة داخلياً. يفتح مباشرة بنقرة واحدة في أي متصفح بالهاتف أو الحاسوب ويعرض جميع الصور دون الحاجة لوجود مجلد الصور بجانبه.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href="/index.html"
                download="index.html"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition shadow-md"
              >
                <Download className="w-4 h-4 text-stone-950" />
                <span>تحميل ملف التطبيق الرئيسي (index.html)</span>
              </a>
              <a
                href="/Sharh-AlBahr-Offline-App.html"
                download="Sharh-AlBahr-Offline-App.html"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-medium transition border border-stone-700"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>نسخة أوفلاين مدمجة</span>
              </a>
            </div>
          </div>

          {/* 3. Dedicated 74 Images Archive & app_data.json */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* 74 Images ZIP */}
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-stone-200 mb-1">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span>مجلد الوثائق الـ 74 فقط (ZIP)</span>
                </div>
                <p className="text-[11px] text-stone-400 mb-2.5">
                  أرشيف يحتوي على كافة ملفات صور المخطوطات الـ 74 بصيغة PNG بدقة كاملة ومفهرسة.
                </p>
              </div>
              <a
                href="/Sharh-AlBahr-74-Images-Only.zip"
                download="Sharh-AlBahr-74-Images-Only.zip"
                className="inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-blue-300 text-xs font-medium transition border border-stone-700"
              >
                <Download className="w-3.5 h-3.5 text-blue-400" />
                <span>تحميل مجلد الصور (ZIP)</span>
              </a>
            </div>

            {/* app_data.json */}
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-stone-200 mb-1">
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>قاعدة البيانات (app_data.json)</span>
                </div>
                <p className="text-[11px] text-stone-400 mb-2.5">
                  ملف البيانات الخام لجميع الأنساب والأكواد والأجيال بصيغة JSON القياسية.
                </p>
              </div>
              <a
                href="/app_data.json"
                download="app_data.json"
                className="inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-cyan-300 text-xs font-medium transition border border-stone-700"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>تحميل ملف app_data.json</span>
              </a>
            </div>
          </div>

          {/* 4. APK Direct Download Button */}
          <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-emerald-500 text-stone-950 text-[10px] font-bold rounded-md uppercase">APK أندرويد</span>
                <span className="text-xs font-bold text-stone-200">حزمة تثبيت أندرويد المستقلة (APK)</span>
              </div>
              <span className="text-[11px] text-stone-400 font-mono">geneology-app.apk</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => triggerDirectApkDownload('geneology-app.apk')}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-emerald-300 text-xs font-bold transition border border-stone-700 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloading ? 'جاري التحميل...' : 'تحميل تطبيق الأندرويد (APK)'}</span>
              </button>
              <button
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold transition border border-stone-700 cursor-pointer"
                title="نسخ رابط APK"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

        </div>

        {/* Installation Instructions for Android */}
        <div className="mt-4 pt-4 border-t border-stone-800 text-[11px] text-stone-400 leading-normal space-y-1.5 bg-stone-950/60 p-3 rounded-xl">
          <div className="font-bold text-stone-300 text-xs flex items-center gap-1.5 mb-1">
            <span>💡 تعليمات التثبيت على هواتف الأندرويد:</span>
          </div>
          <div>1. انقر فوق زر <strong>تحميل التطبيق الآن (APK مباشر)</strong> ليتم تنزيل الحزمة إلى هاتفك.</div>
          <div>2. افتح مدير التنزيلات بالهاتف واضغط على ملف <code className="text-emerald-300 font-mono">geneology-app.apk</code>.</div>
          <div>3. إذا طلب الهاتف تفعيل <em>"التثبيت من مصادر غير معروفة"</em>، اضغط سماح ليتم تثبيت التطبيق وتصفح الأنساب بالكامل دون إنترنت.</div>
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
