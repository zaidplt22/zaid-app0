import React from 'react';
import { PersonNode } from '../types';
import { ScrollText, Award, AlertCircle, ChevronLeft, BookOpen, Shield } from 'lucide-react';

interface VerticalLineageViewProps {
  rootNode: PersonNode;
  onSelectNode: (node: PersonNode) => void;
}

export const VerticalLineageView: React.FC<VerticalLineageViewProps> = ({
  rootNode,
  onSelectNode,
}) => {
  // Recursive component for traditional nested lineage
  const renderVerticalBranch = (node: PersonNode, indentLevel: number = 0): React.ReactNode => {
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id} className="relative flex flex-col my-1">
        {/* Branch Sub-header Divider if isBranchHead */}
        {node.isBranchHead && (
          <div className="my-3 pt-2 pb-1 border-b border-amber-800/40">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/70 border border-amber-600/50 rounded-lg text-amber-200 text-sm font-scheherazade font-bold">
              <ScrollText className="w-4 h-4 text-amber-400" />
              <span>{node.branchHeaderTitle || `أعقب ${node.name}`}</span>
            </div>
          </div>
        )}

        {/* Node Line Entry */}
        <div
          onClick={() => onSelectNode(node)}
          style={{ marginRight: `${indentLevel * 24}px` }}
          className={`group flex items-center justify-between p-2.5 rounded-lg border transition cursor-pointer my-1 ${
            node.isMartyr
              ? 'bg-rose-950/60 border-rose-700/60 text-rose-100 hover:bg-rose-900/80 shadow-sm'
              : node.noOffspring
              ? 'bg-yellow-950/40 border-yellow-700/50 text-yellow-100 hover:bg-yellow-900/60'
              : node.isBranchHead
              ? 'bg-stone-900 border-amber-600/60 text-amber-100 hover:bg-stone-800'
              : 'bg-stone-900/60 border-stone-800 text-stone-200 hover:bg-stone-800/90'
          }`}
        >
          <div className="flex items-center gap-3">
            {/* Generational Line Indicator */}
            <div className="w-6 h-6 rounded-full bg-stone-950 border border-amber-700/50 flex items-center justify-center text-[10px] font-mono text-amber-400">
              G{node.generation}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base font-scheherazade text-amber-100 group-hover:text-amber-300">
                  {node.name}
                </span>

                {/* Badges */}
                {node.isMartyr && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-rose-900/90 text-rose-200 border border-rose-500/80 flex items-center gap-1 font-cairo">
                    <span>🕊️</span>
                    <span>شهيد</span>
                  </span>
                )}

                {node.noOffspring && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-yellow-900/80 text-yellow-200 border border-yellow-500/80 flex items-center gap-1 font-cairo">
                    <span>🚫</span>
                    <span>لم يعقب</span>
                  </span>
                )}

                {node.hasOffspringNote && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-950 text-emerald-300 border border-emerald-700/50 font-cairo">
                    أعقب
                  </span>
                )}

                {node.title && (
                  <span className="text-xs text-stone-400">({node.title})</span>
                )}
              </div>

              {node.notes && (
                <p className="text-xs text-stone-400 mt-0.5 font-sans italic">
                  {node.notes}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-stone-400">
            {hasChildren && (
              <span className="bg-stone-950 px-2 py-0.5 rounded border border-stone-800 text-[11px] font-mono">
                {node.children.length} عقب
              </span>
            )}
            <ChevronLeft className="w-4 h-4 text-stone-500 group-hover:text-amber-300 group-hover:-translate-x-1 transition" />
          </div>
        </div>

        {/* Render Children */}
        {hasChildren && (
          <div className="flex flex-col border-r-2 border-amber-900/30 mr-3 pr-2">
            {node.children.map((child) => renderVerticalBranch(child, indentLevel + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Title Header */}
      <div className="bg-gradient-to-r from-stone-950 via-amber-950/40 to-stone-950 border border-amber-800/40 p-6 rounded-2xl shadow-xl mb-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold font-scheherazade text-amber-200">
          المشجر العمودي التراثي (الطومار النسبي الموثق)
        </h2>
        <p className="text-stone-400 text-xs sm:text-sm mt-2 max-w-2xl mx-auto font-cairo">
          عرض نسقي متسلسل للأنساب والأعقاب وفق الرسوم التراثية للمخطوطات الإسلامية مع إبراز رؤوس الفروع وعلامات الشهداء ومن انقطع عقبه.
        </p>
      </div>

      {/* Main Roll Container */}
      <div className="bg-stone-900/90 border border-amber-900/40 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
        {renderVerticalBranch(rootNode, 0)}
      </div>
    </div>
  );
};
