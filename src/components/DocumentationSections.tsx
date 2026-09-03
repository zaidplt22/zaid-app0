import React, { useState } from 'react';
import { TreeDocumentation } from '../types';
import { 
  BookOpen, 
  Target, 
  FileText, 
  ShieldCheck, 
  Award, 
  GitCompare, 
  Users, 
  CheckCircle2, 
  Scroll, 
  ExternalLink,
  Building,
  Calendar,
  MapPin,
  Bookmark
} from 'lucide-react';

interface DocumentationSectionsProps {
  documentation: TreeDocumentation;
}

export const DocumentationSections: React.FC<DocumentationSectionsProps> = ({
  documentation,
}) => {
  const [docSubTab, setDocSubTab] = useState<'intro' | 'objectives' | 'sources'>('intro');

  const getObjectiveIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-rose-400" />;
      case 'GitCompare':
        return <GitCompare className="w-6 h-6 text-amber-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-cyan-400" />;
      default:
        return <FileText className="w-6 h-6 text-amber-400" />;
    }
  };

  const getSourceTypeBadge = (type: string) => {
    switch (type) {
      case 'manuscript':
        return <span className="px-2.5 py-1 bg-amber-950 text-amber-300 border border-amber-700/50 rounded-lg text-xs">مخطوط أصلي</span>;
      case 'deed':
        return <span className="px-2.5 py-1 bg-emerald-950 text-emerald-300 border border-emerald-700/50 rounded-lg text-xs">حجة وقفية شرعية</span>;
      case 'registry':
        return <span className="px-2.5 py-1 bg-blue-950 text-blue-300 border border-blue-700/50 rounded-lg text-xs">سجل محكمة رسمي</span>;
      default:
        return <span className="px-2.5 py-1 bg-purple-950 text-purple-300 border border-purple-700/50 rounded-lg text-xs">أرشيف متواتر</span>;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Tab Switcher */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-stone-900/80 p-1.5 rounded-2xl border border-stone-800 max-w-2xl mx-auto shadow-lg">
        <button
          onClick={() => setDocSubTab('intro')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition ${
            docSubTab === 'intro'
              ? 'bg-amber-800/80 text-amber-100 shadow-md border border-amber-600/60'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
          }`}
        >
          <BookOpen className="w-4 h-4 text-amber-300" />
          <span>١. المقدمة التوثيقية</span>
        </button>

        <button
          onClick={() => setDocSubTab('objectives')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition ${
            docSubTab === 'objectives'
              ? 'bg-amber-800/80 text-amber-100 shadow-md border border-amber-600/60'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
          }`}
        >
          <Target className="w-4 h-4 text-amber-300" />
          <span>٢. الأهداف السامية</span>
        </button>

        <button
          onClick={() => setDocSubTab('sources')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition ${
            docSubTab === 'sources'
              ? 'bg-amber-800/80 text-amber-100 shadow-md border border-amber-600/60'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
          }`}
        >
          <Scroll className="w-4 h-4 text-amber-300" />
          <span>٣. المصادر والوثائق والحجج</span>
        </button>
      </div>

      {/* 1. INTRODUCTION SECTION */}
      {docSubTab === 'intro' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/40 border border-amber-800/50 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs px-3 py-1 bg-amber-900/60 text-amber-300 border border-amber-600/40 rounded-full font-mono">
                المدخل التاريخي والمنهجي
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-scheherazade text-amber-100 mt-3 mb-2">
                {documentation.introduction.title}
              </h2>
              <p className="text-amber-300/80 text-sm font-cairo mb-6">
                {documentation.introduction.subtitle}
              </p>

              <div className="prose prose-invert max-w-none text-stone-300 leading-relaxed font-cairo text-sm sm:text-base space-y-4">
                <p className="p-4 bg-stone-900/80 border-r-4 border-amber-500 rounded-lg italic text-amber-100/90 font-scheherazade text-lg leading-loose">
                  {documentation.introduction.text}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-stone-900/90 p-5 rounded-xl border border-stone-800">
                    <h3 className="text-lg font-bold font-scheherazade text-amber-200 mb-2 flex items-center gap-2">
                      <Bookmark className="w-5 h-5 text-amber-400" />
                      السياق التاريخي والمكاني
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {documentation.introduction.historicalContext}
                    </p>
                  </div>

                  <div className="bg-stone-900/90 p-5 rounded-xl border border-stone-800">
                    <h3 className="text-lg font-bold font-scheherazade text-amber-200 mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      منهجية التحقيق والضبط
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {documentation.introduction.methodology}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-emerald-950/40 border border-emerald-700/50 rounded-xl text-emerald-200 text-xs sm:text-sm flex items-start gap-3 mt-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">ضابط الأمانة العلمية الصارمة: </span>
                    <span>{documentation.introduction.preservationNote}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. OBJECTIVES SECTION */}
      {docSubTab === 'objectives' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-amber-950/40 border border-amber-800/50 rounded-2xl p-6 sm:p-8 shadow-xl text-center mb-6">
            <h2 className="text-3xl font-bold font-scheherazade text-amber-200">
              {documentation.objectives.title}
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
              {documentation.objectives.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documentation.objectives.items.map((item, idx) => (
              <div
                key={item.id}
                className="bg-stone-900/90 border border-stone-800 hover:border-amber-700/50 p-6 rounded-2xl shadow-xl flex items-start gap-4 transition group"
              >
                <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 group-hover:border-amber-500/50 transition">
                  {getObjectiveIcon(item.icon)}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-amber-500 block mb-1">
                    الهدف رقم 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold font-scheherazade text-amber-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-cairo">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. SOURCES & DOCUMENTS SECTION */}
      {docSubTab === 'sources' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-amber-950/40 border border-amber-800/50 rounded-2xl p-6 sm:p-8 shadow-xl mb-6">
            <h2 className="text-3xl font-bold font-scheherazade text-amber-200">
              المصادر والمراجع وحجج الأوقاف التاريخية
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              توثيق شامل للأصول الخطية، والحجج الشرعية، وسجلات المحاكم، والمخطوطات المحفوظة التي استند إليها هذا المشجر.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documentation.sources.map((src, sIdx) => (
              <div
                key={src.id}
                className="bg-stone-900/90 border border-stone-800 hover:border-amber-700/60 rounded-2xl p-6 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    {getSourceTypeBadge(src.type)}
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-700/40 font-mono">
                      {src.verificationStatus}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-scheherazade text-amber-100 mb-2">
                    {src.title}
                  </h3>

                  <div className="space-y-2 text-xs text-stone-400 my-4 bg-stone-950/80 p-3.5 rounded-xl border border-stone-800">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-stone-300 font-medium">الجهة / المدون:</span>
                      <span>{src.authorOrCustodian}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-stone-300 font-medium">التاريخ والزمن:</span>
                      <span>{src.dateOrCentury}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-stone-300 font-medium">مقر الحفظ والأرشيف:</span>
                      <span>{src.archiveLocation}</span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed font-cairo">
                    {src.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-500">
                  <span>مرجع معتمد في تثبيت الأنساب</span>
                  <span className="font-mono text-amber-400/80">REF-{sIdx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
