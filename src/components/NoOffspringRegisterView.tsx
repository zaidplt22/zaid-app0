import React from 'react';
import { sequentialLineageBlocks, SequentialChildEntry } from '../data/sequentialLineageData';
import { Ban, AlertTriangle } from 'lucide-react';

interface NoOffspringRegisterViewProps {
  searchQuery: string;
}

export const NoOffspringRegisterView: React.FC<NoOffspringRegisterViewProps> = ({ searchQuery }) => {
  const allNoOffspring = React.useMemo(() => {
    const list: Array<{ child: SequentialChildEntry; fatherTitle: string; mainBranch: string }> = [];
    const seen = new Set<string>();

    sequentialLineageBlocks.forEach((block) => {
      block.children.forEach((c) => {
        if (c.noOffspring) {
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
    if (!searchQuery.trim()) return allNoOffspring;
    const q = searchQuery.toLowerCase();
    return allNoOffspring.filter(
      (item) =>
        item.child.name.toLowerCase().includes(q) ||
        item.child.code.toLowerCase().includes(q) ||
        item.fatherTitle.toLowerCase().includes(q) ||
        item.mainBranch.toLowerCase().includes(q)
    );
  }, [allNoOffspring, searchQuery]);

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-6 space-y-5 font-cairo text-stone-900">
      {/* Header Banner */}
      <div className="bg-[#451a03] border border-amber-800 text-amber-100 rounded-2xl p-5 shadow-md flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-900/80 text-amber-300 border border-amber-700">
              <Ban className="w-6 h-6" />
            </span>
            <div>
              <h2 className="text-xl font-bold font-scheherazade text-white">
                سجل من انقطع عقبه (لم يعقب / ×)
              </h2>
              <p className="text-xs text-amber-200 mt-0.5">
                حصر الفروع التي لم تعقب ذكوراً أو انتهت بموت صاحبها حفاظاً على دقة شجرة النسب
              </p>
            </div>
          </div>
        </div>
        <div className="text-center px-4 py-2 bg-amber-900/60 rounded-xl border border-amber-700">
          <span className="text-2xl font-black text-amber-200">{filtered.length}</span>
          <span className="text-xs text-amber-300 block">شخص موثق</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filtered.map((item, idx) => (
          <div
            key={`no-offspring-${idx}`}
            className="bg-white border border-amber-300/80 rounded-xl p-4 shadow-sm hover:border-amber-400 hover:shadow-md transition space-y-2.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-amber-100 text-amber-950 border border-amber-300">
                {item.child.code}
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#f59e0b] text-stone-950 flex items-center gap-1 border border-amber-600 shadow-xs">
                <span>🚫</span>
                <span>لم يعقب (×)</span>
              </span>
            </div>

            <h3 className="text-base font-bold font-scheherazade text-stone-900">
              {item.child.name}
            </h3>

            <div className="text-xs text-stone-600 bg-[#fffbeb] p-2.5 rounded-lg border border-amber-100 space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-900 font-semibold">من أعقاب:</span>
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
          لم يتم العثور على سجلات تطابق كلمة البحث.
        </div>
      )}
    </div>
  );
};
