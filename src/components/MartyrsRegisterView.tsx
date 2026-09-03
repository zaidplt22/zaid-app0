import React from 'react';
import { sequentialLineageBlocks, SequentialChildEntry } from '../data/sequentialLineageData';
import { Award, Search } from 'lucide-react';

interface MartyrsRegisterViewProps {
  searchQuery: string;
}

export const MartyrsRegisterView: React.FC<MartyrsRegisterViewProps> = ({ searchQuery }) => {
  // Collect all martyrs from all sequential blocks
  const allMartyrs = React.useMemo(() => {
    const list: Array<{ child: SequentialChildEntry; fatherTitle: string; mainBranch: string }> = [];
    const seen = new Set<string>();

    sequentialLineageBlocks.forEach((block) => {
      block.children.forEach((c) => {
        if (c.isMartyr) {
          const key = `${c.code}-${c.name}`;
          if (!seen.has(key)) {
            seen.add(key);
            list.push({
              child: c,
              fatherTitle: `${block.fatherCode ? `${block.fatherCode} ` : ''}${block.fatherName}`,
              mainBranch: block.mainBranch,
            });
          }
        }
      });
    });
    return list;
  }, []);

  const filtered = React.useMemo(() => {
    if (!searchQuery.trim()) return allMartyrs;
    const q = searchQuery.toLowerCase();
    return allMartyrs.filter(
      (m) =>
        m.child.name.toLowerCase().includes(q) ||
        m.child.code.toLowerCase().includes(q) ||
        m.fatherTitle.toLowerCase().includes(q) ||
        m.mainBranch.toLowerCase().includes(q)
    );
  }, [allMartyrs, searchQuery]);

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-6 space-y-5 font-cairo text-stone-900">
      {/* Header Banner */}
      <div className="bg-[#4c0519] border border-rose-800 text-rose-100 rounded-2xl p-5 shadow-md flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-rose-900/80 text-rose-300 border border-rose-700">
              <Award className="w-6 h-6" />
            </span>
            <div>
              <h2 className="text-xl font-bold font-scheherazade text-white">
                سجل شهداء ذرية شارح البحر الموثق
              </h2>
              <p className="text-xs text-rose-200 mt-0.5">
                حصر وتوثيق الأعلام الذين استشهدوا في الدفاع والجهاد التاريخي عبر الأجيال
              </p>
            </div>
          </div>
        </div>
        <div className="text-center px-4 py-2 bg-rose-900/60 rounded-xl border border-rose-700">
          <span className="text-2xl font-black text-rose-200">{filtered.length}</span>
          <span className="text-xs text-rose-300 block">شهيد موثق</span>
        </div>
      </div>

      {/* Grid of Martyrs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filtered.map((item, idx) => (
          <div
            key={`martyr-${idx}`}
            className="bg-white border border-rose-300/80 rounded-xl p-4 shadow-sm hover:border-rose-400 hover:shadow-md transition space-y-2.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-rose-100 text-rose-950 border border-rose-300">
                {item.child.code}
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#881337] text-white flex items-center gap-1 shadow-xs">
                <span>🕊️</span>
                <span>شهيد</span>
              </span>
            </div>

            <h3 className="text-base font-bold font-scheherazade text-stone-900">
              {item.child.name}
            </h3>

            <div className="text-xs text-stone-600 bg-[#fdf2f4] p-2.5 rounded-lg border border-rose-100 space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="text-rose-900 font-semibold">من أعقاب:</span>
                <span className="text-stone-800 font-medium truncate">{item.fatherTitle}</span>
              </div>
              <div className="text-[11px] text-stone-500 truncate">
                {item.mainBranch}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="bg-stone-100 rounded-xl p-8 text-center text-stone-500">
          لم يتم العثور على شهداء يطابقون كلمة البحث.
        </div>
      )}
    </div>
  );
};
