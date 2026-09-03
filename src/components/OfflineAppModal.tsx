import React, { useState } from 'react';
import { Smartphone, Download, CheckCircle2, ShieldCheck, BookOpen, ExternalLink, X, Copy, Check } from 'lucide-react';
import { sequentialLineageBlocks } from '../data/sequentialLineageData';

interface OfflineAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfflineAppModal: React.FC<OfflineAppModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const totalBlocks = sequentialLineageBlocks.length;

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

  const triggerOfflineHtmlDownload = () => {
    const link = document.createElement('a');
    link.href = '/Sharh-AlBahr-Offline-Book.html';
    link.download = 'Sharh-AlBahr-Genealogy-Offline-App.html';
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            <p className="text-xs text-stone-400 mt-0.5">تحميل وتثبيت وثيقة وموسوعة أعقاب شارح البحر كاملة في هاتفك</p>
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
        <div className="space-y-3">
          
          {/* Primary APK Direct Download Button */}
          <div className="bg-emerald-950/40 border border-emerald-600/60 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-emerald-500 text-stone-950 text-[10px] font-bold rounded-md uppercase">APK مباشر</span>
                <span className="text-sm font-bold text-emerald-300">ملف تطبيق الأندرويد (APK)</span>
              </div>
              <span className="text-xs text-emerald-400/80 font-mono">geneology-app.apk</span>
            </div>
            <p className="text-xs text-stone-300 mb-3">
              ملف حزمة التثبيت المباشرة لنظام Android. يثبت تطبيقاً مستقلاً في هاتفك يعمل دون اتصال بالإنترنت.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => triggerDirectApkDownload('geneology-app.apk')}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{downloading ? 'جاري التحميل...' : 'تحميل التطبيق الآن (APK مباشر)'}</span>
              </button>
              <button
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition border border-stone-700 cursor-pointer"
                title="نسخ رابط ملف APK"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'تم النسخ' : 'نسخ الرابط'}</span>
              </button>
            </div>
          </div>

          {/* Secondary Offline Single-File HTML WebApp */}
          <div className="bg-stone-900 border border-stone-700/80 rounded-xl p-4">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-bold text-amber-300">نسخة الكتاب التفاعلي الشامل (Offline Web App)</span>
              </div>
              <span className="text-[11px] text-amber-400/90 font-medium">ملف واحد مستقل</span>
            </div>
            <p className="text-xs text-stone-300 mb-3 leading-relaxed">
              ملف كتاب إلكتروني متكامل وخفيف جداً، يفتح فوراً في أي متصفح بالهاتف بدون إنترنت وبدون الحاجة لأي صلاحيات تثبيت أو أذونات خارجية.
            </p>
            <div className="flex gap-2">
              <button
                onClick={triggerOfflineHtmlDownload}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4 text-stone-950" />
                <span>تحميل كتاب الأوفلاين الشامل (HTML)</span>
              </button>
              <a
                href="/Sharh-AlBahr-Offline-Book.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-medium transition border border-stone-700"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>فتح مباشرة</span>
              </a>
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
