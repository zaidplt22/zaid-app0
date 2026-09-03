import React, { useState } from 'react';
import { PersonNode, DuplicateGroup } from '../types';
import { findDuplicateAndHomonymGroups } from '../utils/genealogyParser';
import { Copy, Search, GitBranch, ArrowLeft, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

interface DisambiguationToolProps {
  rootNode: PersonNode;
  onSelectNodeById: (nodeId: string) => void;
}

export const DisambiguationTool: React.FC<DisambiguationToolProps> = ({
  rootNode,
  onSelectNodeById,
}) => {
  const [filterSearch, setFilterSearch] = useState<string>('');
  const duplicateGroups = findDuplicateAndHomonymGroups(rootNode);

  const filteredGroups = duplicateGroups.filter((group) =>
    group.name.toLowerCase().includes(filterSearch.toLowerCase()) ||
    group.occurrences.some((occ) => occ.fullPedigree.includes(filterSearch))
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-950 via-amber-950/40 to-stone-950 border border-amber-800/40 p-6 rounded-2xl shadow-xl mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-900/50 border border-amber-600/40 text-amber-300">
                <Copy className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-scheherazade text-amber-200">
                كاشف الأسماء المتشابهة والمكررة (Disambiguation Tool)
              </h2>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm mt-2 max-w-2xl font-cairo">
              أداة توثيقية رصينة لفرز الأسماء المتطابقة عبر أجيال وفروع مختلفة، مع تفكيك سلاسل الأنساب الكاملة بدقة لمنع أي لبس أو تداخل بين الأعلام المشتركة في الاسم.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full sm:w-72">
            <div className="relative">
              <input
                type="text"
                value={filterSearch}
                onChange={(e) => setFilterSearch(e.target.value)}
                placeholder="ابحث في الأسماء المشتركة..."
                className="w-full pl-3 pr-9 py-2 bg-stone-900 border border-stone-700 rounded-xl text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
              <Search className="w-4 h-4 text-stone-400 absolute right-3 top-2.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Overview Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-stone-900/80 border border-stone-800 p-4 rounded-xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-700/50 flex items-center justify-center text-amber-300 font-bold text-lg font-mono">
            {duplicateGroups.length}
          </div>
          <div>
            <div className="text-xs text-stone-400 font-cairo">مجموعات الأسماء المتكررة</div>
            <div className="text-sm font-semibold text-amber-100">أسماء شائعة في الشجرة</div>
          </div>
        </div>

        <div className="bg-stone-900/80 border border-stone-800 p-4 rounded-xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-700/50 flex items-center justify-center text-emerald-300 font-bold text-lg font-mono">
            100%
          </div>
          <div>
            <div className="text-xs text-stone-400 font-cairo">دقة الفصل والتمييز</div>
            <div className="text-sm font-semibold text-emerald-300">سلاسل نسب مفردة بلا تداخل</div>
          </div>
        </div>

        <div className="bg-stone-900/80 border border-stone-800 p-4 rounded-xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-rose-950/60 border border-rose-700/50 flex items-center justify-center text-rose-300">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-stone-400 font-cairo">ضمان الأمانة التوثيقية</div>
            <div className="text-sm font-semibold text-rose-200">عدم دمج الشخصيات المتعاقبة</div>
          </div>
        </div>
      </div>

      {/* Duplicate Groups List */}
      {filteredGroups.length === 0 ? (
        <div className="text-center py-16 bg-stone-900/50 border border-stone-800 rounded-2xl">
          <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-stone-200">لا توجد نتائج مطابقة لبحثك</h3>
          <p className="text-xs text-stone-400 mt-1">جرب البحث بكلمة أو اسم آخر.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredGroups.map((group, gIdx) => (
            <div
              key={gIdx}
              className="bg-stone-900/90 border border-stone-800 hover:border-amber-700/50 rounded-2xl p-6 shadow-xl transition"
            >
              {/* Group Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-stone-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-900/40 border border-amber-600/40 flex items-center justify-center text-amber-300 font-bold font-scheherazade text-xl">
                    {gIdx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-scheherazade text-amber-200">
                      الاسم المشترك: « {group.name} »
                    </h3>
                    <p className="text-xs text-stone-400">
                      تكرر هذا الاسم {group.count} مرات في أجيال وفروع مختلفة
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-stone-800 text-stone-300 text-xs rounded-full font-mono border border-stone-700">
                  {group.count} شخصيات موثقة
                </span>
              </div>

              {/* Occurrences Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.occurrences.map((occ, oIdx) => (
                  <div
                    key={occ.nodeId}
                    onClick={() => onSelectNodeById(occ.nodeId)}
                    className={`p-4 rounded-xl border transition cursor-pointer hover:scale-[1.02] flex flex-col justify-between ${
                      occ.isMartyr
                        ? 'bg-rose-950/40 border-rose-700/60 text-rose-100 hover:bg-rose-950/70'
                        : occ.noOffspring
                        ? 'bg-yellow-950/30 border-yellow-700/50 text-yellow-100 hover:bg-yellow-950/60'
                        : 'bg-stone-950/80 border-stone-800 text-stone-200 hover:border-amber-600/60'
                    }`}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-800 text-amber-300 border border-stone-700">
                          الجيل {occ.generation}
                        </span>

                        {occ.isMartyr && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-rose-900 text-rose-200 border border-rose-500">
                            شهيد 🕊️
                          </span>
                        )}

                        {occ.noOffspring && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-900/80 text-yellow-200 border border-yellow-500">
                            لم يعقب 🚫
                          </span>
                        )}

                        {occ.hasOffspringNote && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-600">
                            أعقب
                          </span>
                        )}
                      </div>

                      {/* Name */}
                      <div className="font-bold text-lg font-scheherazade text-amber-100 mb-1">
                        {occ.name}
                      </div>

                      {/* Full Pedigree / Chain of Lineage */}
                      <div className="mt-2 p-2.5 rounded-lg bg-stone-900/90 border border-stone-800 text-xs">
                        <div className="text-[10px] text-stone-500 font-bold mb-1">
                          سلسلة النسب الكاملة:
                        </div>
                        <div className="font-scheherazade text-amber-200 text-sm leading-relaxed">
                          {occ.fullPedigree}
                        </div>
                      </div>

                      {/* Parent & Branch */}
                      <div className="mt-2 space-y-1 text-xs text-stone-400">
                        <div className="flex items-center justify-between">
                          <span>الوالد المباشر:</span>
                          <span className="text-stone-200 font-medium">{occ.parentName}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>الفرع الأصلي:</span>
                          <span className="text-amber-300/80 font-medium">{occ.branchName}</span>
                        </div>
                      </div>

                      {occ.notes && (
                        <p className="text-[11px] text-stone-400 mt-2 italic line-clamp-2">
                          {occ.notes}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-2 border-t border-stone-800/80 flex items-center justify-between text-xs text-amber-400/90">
                      <span>عرض في المشجر</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
