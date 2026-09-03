import React from 'react';
import { PersonNode } from '../types';
import { 
  X, 
  Award, 
  AlertCircle, 
  GitCommit, 
  BookOpen, 
  Layers, 
  Users, 
  ScrollText, 
  ShieldCheck,
  Calendar,
  Share2
} from 'lucide-react';

interface NodeDetailModalProps {
  node: PersonNode | null;
  onClose: () => void;
  onSelectChild: (child: PersonNode) => void;
}

export const NodeDetailModal: React.FC<NodeDetailModalProps> = ({
  node,
  onClose,
  onSelectChild,
}) => {
  if (!node) return null;

  const pedigreeChain = (node.ancestorChain || [node.name]).slice().reverse().join(' بن ');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-stone-900 border border-amber-800/60 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Header Ribbon */}
        <div
          className={`p-6 border-b rounded-t-3xl ${
            node.isMartyr
              ? 'bg-gradient-to-r from-rose-950 via-stone-900 to-rose-950 border-rose-800/60'
              : node.noOffspring
              ? 'bg-gradient-to-r from-yellow-950/60 via-stone-900 to-yellow-950/60 border-yellow-800/50'
              : 'bg-gradient-to-r from-stone-950 via-amber-950/40 to-stone-950 border-amber-800/50'
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-stone-950 text-amber-300 border border-amber-700/50 text-xs font-mono">
                  الجيل {node.generation}
                </span>

                {node.isMartyr && (
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-900 text-rose-100 border border-rose-500 text-xs font-bold flex items-center gap-1 font-cairo">
                    <span>🕊️</span>
                    <span>شهيد</span>
                  </span>
                )}

                {node.noOffspring && (
                  <span className="px-2.5 py-0.5 rounded-full bg-yellow-900/90 text-yellow-100 border border-yellow-500 text-xs font-bold flex items-center gap-1 font-cairo">
                    <span>🚫</span>
                    <span>لم يعقب</span>
                  </span>
                )}

                {node.hasOffspringNote && (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-200 border border-emerald-600 text-xs font-bold font-cairo">
                    أعقب
                  </span>
                )}

                {node.isBranchHead && (
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-200 border border-amber-600 text-xs font-bold font-cairo">
                    رأس فرع
                  </span>
                )}
              </div>

              {/* Person Name */}
              <h3 className="text-2xl sm:text-3xl font-bold font-scheherazade text-amber-100">
                {node.name}
              </h3>
              {node.title && (
                <p className="text-xs text-amber-400/90 mt-0.5 font-cairo">{node.title}</p>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-stone-950/80 hover:bg-stone-800 text-stone-400 hover:text-stone-100 transition border border-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 font-cairo">
          {/* Full Lineage Pedigree Box */}
          <div className="bg-stone-950/80 border border-amber-900/40 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-2">
              <ScrollText className="w-4 h-4" />
              <span>سلسلة النسب الشريف المتصل بالجد الجامع:</span>
            </div>
            <div className="font-scheherazade text-lg sm:text-xl text-amber-100 leading-relaxed">
              {pedigreeChain}
            </div>
          </div>

          {/* Notes & Historical Bio */}
          {node.notes && (
            <div className="bg-stone-950/50 border border-stone-800 p-4 rounded-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-300 mb-1.5">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>البيان التوثيقي والملاحظات التاريخية:</span>
              </div>
              <p className="text-sm text-stone-300 leading-relaxed font-sans">
                {node.notes}
              </p>
            </div>
          )}

          {/* Document References if any */}
          {node.documentRefs && node.documentRefs.length > 0 && (
            <div className="bg-stone-950/50 border border-stone-800 p-4 rounded-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-300 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>الوثائق والسجلات المؤيدة:</span>
              </div>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {node.documentRefs.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Direct Children Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-sm font-bold text-stone-200">
                <Users className="w-4 h-4 text-amber-400" />
                <span>الأعقاب والأبناء المباشرون:</span>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-950 text-stone-400 border border-stone-800">
                {node.children.length} {node.children.length === 1 ? 'ابن مثبت' : 'أبناء مثبتون'}
              </span>
            </div>

            {node.children.length === 0 ? (
              <div className="p-4 bg-stone-950/60 border border-stone-800/80 rounded-xl text-center text-xs text-stone-400">
                {node.noOffspring ? (
                  <span className="text-yellow-300/90 font-medium">
                    مثبت في السجلات بأنه «لم يعقب» ولم تدرج له ذرية صيانةً للأمانة العلمية.
                  </span>
                ) : node.hasOffspringNote ? (
                  <span className="text-emerald-300/90 font-medium">
                    مكتوب في الأصل التراثي «أعقب» ولم تُسمَّ ذريته في المخطوط تفصيلاً.
                  </span>
                ) : (
                  <span>لا توجد تفريعات لاحقة مسجلة تحت هذا الاسم.</span>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {node.children.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => {
                      onSelectChild(child);
                    }}
                    className={`p-3 rounded-xl border text-right transition flex items-center justify-between ${
                      child.isMartyr
                        ? 'bg-rose-950/50 border-rose-800/60 hover:bg-rose-900/60 text-rose-100'
                        : child.noOffspring
                        ? 'bg-yellow-950/40 border-yellow-800/50 hover:bg-yellow-900/50 text-yellow-100'
                        : 'bg-stone-950 border-stone-800 hover:border-amber-600/50 text-stone-200'
                    }`}
                  >
                    <div>
                      <div className="font-bold font-scheherazade text-base text-amber-100">
                        {child.name}
                      </div>
                      <div className="text-[11px] text-stone-400 flex items-center gap-1 mt-0.5">
                        <span>الجيل {child.generation}</span>
                        {child.isMartyr && <span className="text-rose-300">• شهيد 🕊️</span>}
                        {child.noOffspring && <span className="text-yellow-300">• لم يعقب 🚫</span>}
                      </div>
                    </div>
                    <span className="text-xs text-stone-500">عرض ←</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-950 border-t border-stone-800/80 rounded-b-3xl flex items-center justify-between text-xs text-stone-400">
          <span>معرّف السجل: {node.id}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl transition"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
