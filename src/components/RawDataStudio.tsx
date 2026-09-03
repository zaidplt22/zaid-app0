import React, { useState } from 'react';
import { PersonNode } from '../types';
import { parseRawGenealogyText, ParseValidationResult } from '../utils/genealogyParser';
import { 
  FileCode, 
  CheckCircle, 
  AlertTriangle, 
  UploadCloud, 
  RefreshCw, 
  Sparkles, 
  HelpCircle, 
  ShieldAlert,
  ArrowRight,
  Database
} from 'lucide-react';

interface RawDataStudioProps {
  onApplyData: (newRoot: PersonNode) => void;
  currentRoot: PersonNode;
}

export const RawDataStudio: React.FC<RawDataStudioProps> = ({
  onApplyData,
  currentRoot,
}) => {
  const sampleRawText = `الجد الجامع السيد علي (الأصل الجامع لكافة فروع ونواحي العائلة)
  السيد محمد (أعقب السيد محمد - فرع آل محمد)
    الشيخ أحمد (أعقب الشيخ أحمد)
      محمد (شهيد) [استشهد عام 1334هـ]
        أحمد [عاش بالقدس الشريف]
          محمود
          إبراهيم (شهيد) [استشهد عام 1948م]
        يوسف (لم يعقب) [توفي شاباً]
      عبد الله (أعقب) [وله أعقاب بحلب]
      عمر (لم يعقب)
    حسن (أعقب حسن بن محمد)
      علي
        حسن
        خالد (لم يعقب)
      حسين (شهيد)
        جعفر
    إبراهيم (لم يعقب) [درج عقيماً]
    خليل (أعقب) [وله ذرية متوارثة في الحجاز]
  السيد مصطفى (أعقب السيد مصطفى - فرع آل مصطفى)
    سليمان (أعقب سليمان بن مصطفى)
      عثمان
        مصطفى
        سليمان (شهيد)
      صالح (لم يعقب)
    عبد الرحمن (شهيد) [استشهد في حماية القافلة]
      عبد الرحيم
        عبد الرحمن
    ياسين (لم يعقب)
  السيد قاسم (أعقب السيد قاسم - فرع آل قاسم)
    محمد
      قاسم
        طارق (شهيد)
        زياد
      بلال (لم يعقب)
    حمزة (أعقب) [وله أعقاب بمصر]
  السيد حمزة (الأكبر) (لم يعقب)`;

  const [rawInput, setRawInput] = useState<string>(sampleRawText);
  const [parseResult, setParseResult] = useState<ParseValidationResult | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleValidateAndParse = () => {
    const res = parseRawGenealogyText(rawInput);
    setParseResult(res);
    setSuccessMessage(null);
  };

  const handleApply = () => {
    const res = parseRawGenealogyText(rawInput);
    setParseResult(res);
    if (res.root && res.errors.length === 0) {
      onApplyData(res.root);
      setSuccessMessage(`تم بنجاح تحديث المشجر التفاعلي بإجمالي ${res.totalParsed} علماً وشخصية موثقة وفق الضوابط.`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-950 via-amber-950/40 to-stone-950 border border-amber-800/40 p-6 rounded-2xl shadow-xl mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-900/50 border border-amber-600/40 text-amber-300">
                <Database className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-scheherazade text-amber-200">
                محرر ومدخل البيانات الخام (Raw Lineage Studio)
              </h2>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm mt-2 max-w-2xl font-cairo">
              أدخل نص شجرة العائلة أو ألصق بيانات النسب وسيقوم المحلل التوثيقي بالتحقق الصارم من القواعد (Zero-Hallucination) وبناء المشجر تلقائياً.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setRawInput(sampleRawText)}
              className="px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs border border-stone-700 transition"
            >
              استعادة النموذج المعتمد
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Input Textarea */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-4 shadow-xl">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-800">
              <span className="text-xs font-semibold text-amber-300 flex items-center gap-1.5 font-cairo">
                <FileCode className="w-4 h-4" />
                محرر النص النسَبي المتسلسل (استخدم المسافات أو التبويب لتحديد التفرع)
              </span>
              <span className="text-[11px] text-stone-500 font-mono">
                {rawInput.split('\n').filter(l => l.trim()).length} أسطر مدخلة
              </span>
            </div>

            <textarea
              id="raw-lineage-textarea"
              value={rawInput}
              onChange={(e) => setRawInput(e.target.value)}
              rows={18}
              dir="rtl"
              placeholder="اكتب أو الصق نسب العائلة هنا..."
              className="w-full bg-stone-950 border border-stone-800 rounded-xl p-4 text-xs sm:text-sm font-mono text-stone-200 focus:outline-none focus:border-amber-500 leading-relaxed resize-y"
            />

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-stone-800">
              <button
                id="btn-validate-raw-data"
                onClick={handleValidateAndParse}
                className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-medium border border-stone-700 transition"
              >
                <RefreshCw className="w-4 h-4 text-amber-400" />
                <span>فحص ومطابقة القواعد</span>
              </button>

              <button
                id="btn-apply-raw-data"
                onClick={handleApply}
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-amber-900/50 transition transform active:scale-95"
              >
                <CheckCircle className="w-4 h-4" />
                <span>تطبيق وبناء المشجر التفاعلي</span>
              </button>
            </div>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="p-4 bg-emerald-950/80 border border-emerald-600 rounded-xl text-emerald-200 text-xs sm:text-sm flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}
        </div>

        {/* Right: Validation Inspector & Guide */}
        <div className="space-y-4">
          {/* Rules Reminder Card */}
          <div className="bg-stone-900/90 border border-amber-800/40 rounded-2xl p-5 shadow-xl">
            <h3 className="text-base font-bold font-scheherazade text-amber-200 mb-3 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              ضوابط الإدخال وقواعد التوثيق الصارمة
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-300 font-cairo">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <div>
                  <span className="font-bold text-rose-300">الشهداء: </span>
                  أضف كلمة <code className="bg-stone-950 px-1 py-0.5 rounded text-rose-300">(شهيد)</code> بجانب الاسم وسيتم تمييزه باللون القرمزي ورمز 🕊️.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 shrink-0"></span>
                <div>
                  <span className="font-bold text-yellow-300">لم يعقب: </span>
                  أضف <code className="bg-stone-950 px-1 py-0.5 rounded text-yellow-300">(لم يعقب)</code> وسيتم تمييزه بالأصفر ومنع أي فروع تحته تماماً.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                <div>
                  <span className="font-bold text-emerald-300">أعقب دون سرد: </span>
                  أضف <code className="bg-stone-950 px-1 py-0.5 rounded text-emerald-300">(أعقب)</code> وسيتم إثبات ذريته دون توليد فروع وهمية.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                <div>
                  <span className="font-bold text-amber-300">رؤوس الفروع: </span>
                  استخدم <code className="bg-stone-950 px-1 py-0.5 rounded text-amber-300">أعقب فلان</code> وسيظهر كعنوان فرعي بارز (Sub-header).
                </div>
              </li>
            </ul>
          </div>

          {/* Validation Diagnostics Panel */}
          {parseResult && (
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 shadow-xl">
              <h3 className="text-sm font-bold text-stone-200 mb-3 flex items-center justify-between">
                <span>نتائج التدقيق التوثيقي:</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-stone-800 text-amber-300">
                  {parseResult.totalParsed} أعلام
                </span>
              </h3>

              {parseResult.errors.length > 0 && (
                <div className="space-y-2 mb-3">
                  {parseResult.errors.map((err, idx) => (
                    <div key={idx} className="p-3 bg-rose-950/60 border border-rose-700/60 rounded-xl text-xs text-rose-200 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{err}</span>
                    </div>
                  ))}
                </div>
              )}

              {parseResult.warnings.length > 0 && (
                <div className="space-y-2 mb-3">
                  {parseResult.warnings.map((warn, idx) => (
                    <div key={idx} className="p-3 bg-yellow-950/60 border border-yellow-700/60 rounded-xl text-xs text-yellow-200 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <span>{warn}</span>
                    </div>
                  ))}
                </div>
              )}

              {parseResult.errors.length === 0 && (
                <div className="p-3 bg-emerald-950/60 border border-emerald-700/60 rounded-xl text-xs text-emerald-200 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>جميع البيانات المدخلة مطابقة 100% لقواعد الأمانة التوثيقية.</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
