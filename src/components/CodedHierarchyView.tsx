import React, { useState, useMemo } from 'react';
import { sequentialLineageBlocks, SequentialBranchBlock, SequentialChildEntry } from '../data/sequentialLineageData';
import { 
  ScrollText, 
  Award, 
  Ban, 
  GitCommit, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  Sparkles,
  ChevronLeft,
  FileDown,
  RotateCcw,
  GitFork,
  ArrowRight,
  Network,
  List
} from 'lucide-react';
import { extractBranchHierarchy, buildBranchFullGenerationalBlocks } from '../utils/branchLineageHelper';
import { exportBranchLineageToPdf, exportBranchTreeDiagramToPdf } from '../utils/exportUtils';
import { BranchInteractiveTreeView } from './BranchInteractiveTreeView';
import { useAuthRole } from '../utils/authRole';
import { normalizeArabicForSearch } from '../utils/genealogyParser';

interface CodedHierarchyViewProps {
  fontSize: 'compact' | 'normal' | 'comfortable' | 'large';
  selectedBranch: string;
  setSelectedBranch: (branch: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterType: 'all' | 'martyrs' | 'no_offspring';
  setFilterType: (filter: 'all' | 'martyrs' | 'no_offspring') => void;
}

export const CodedHierarchyView: React.FC<CodedHierarchyViewProps> = ({
  fontSize,
  selectedBranch,
  setSelectedBranch,
  searchQuery,
  setSearchQuery,
  filterType,
  setFilterType,
}) => {
  const { isAdmin } = useAuthRole();
  const [branchDisplayMode, setBranchDisplayMode] = useState<'tree' | 'list'>('tree');

  // Extract branch hierarchy (ancestors, target node, and all descendants)
  const branchHierarchy = useMemo(() => {
    return extractBranchHierarchy(selectedBranch);
  }, [selectedBranch]);

  // Base blocks to render: if branch selected, build full sequential generational cascade starting from [الجيل 1] down to branch and descendants.
  // CRITICAL CONDITION: If selectedBranch === 'all', return global sequentialLineageBlocks completely untouched!
  const baseBlocks = useMemo(() => {
    if (selectedBranch === 'all') {
      return sequentialLineageBlocks;
    }
    return buildBranchFullGenerationalBlocks(branchHierarchy);
  }, [selectedBranch, branchHierarchy]);

  // Filtered sequential blocks
  const filteredBlocks = useMemo(() => {
    const rawQuery = searchQuery.trim();
    const query = normalizeArabicForSearch(rawQuery);

    return baseBlocks
      .map((block) => {
        // Filter children
        const matchedChildren = block.children.filter((child) => {
          // Status filters
          if (filterType === 'martyrs' && !child.isMartyr) return false;
          if (filterType === 'no_offspring' && !child.noOffspring) return false;

          // Search query filter
          if (query) {
            const inChildName = normalizeArabicForSearch(child.name).includes(query);
            const inChildCode = child.code.toLowerCase().includes(rawQuery.toLowerCase());
            const inFatherName = normalizeArabicForSearch(block.fatherName).includes(query);
            const inFatherCode = (block.fatherCode || '').toLowerCase().includes(rawQuery.toLowerCase());
            const inMainBranch = normalizeArabicForSearch(block.mainBranch).includes(query);
            return inChildName || inChildCode || inFatherName || inFatherCode || inMainBranch;
          }

          return true;
        });

        // If no children matched and there's a search query, but the father name matched, keep the block
        if (matchedChildren.length === 0) {
          if (query && (normalizeArabicForSearch(block.fatherName).includes(query) || (block.fatherCode || '').toLowerCase().includes(rawQuery.toLowerCase()))) {
            return {
              ...block,
              children: filterType === 'all' ? block.children : [],
            };
          }
          return null;
        }

        return {
          ...block,
          children: matchedChildren,
        };
      })
      .filter(Boolean) as SequentialBranchBlock[];
  }, [baseBlocks, searchQuery, filterType]);

  // When a specific branch is selected and tree display mode is active, render interactive tree
  if (selectedBranch !== 'all' && branchHierarchy.target && branchDisplayMode === 'tree') {
    return (
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 font-cairo">
        <BranchInteractiveTreeView
          hierarchy={branchHierarchy}
          onClearBranch={() => setSelectedBranch('all')}
          onSwitchToListView={() => setBranchDisplayMode('list')}
        />
      </div>
    );
  }

  // Font sizing styles
  const fontClasses = {
    compact: {
      nameText: 'text-xs sm:text-sm',
      codeBadge: 'text-[11px] px-2 py-0.5',
      headerText: 'text-sm sm:text-base',
      cardPad: 'p-2 sm:p-2.5',
      noteText: 'text-[10px]',
    },
    normal: {
      nameText: 'text-sm sm:text-base',
      codeBadge: 'text-xs sm:text-sm px-2.5 py-1',
      headerText: 'text-base sm:text-lg',
      cardPad: 'p-2.5 sm:p-3',
      noteText: 'text-xs',
    },
    comfortable: {
      nameText: 'text-base sm:text-lg',
      codeBadge: 'text-sm px-3 py-1',
      headerText: 'text-lg sm:text-xl',
      cardPad: 'p-3 sm:p-4',
      noteText: 'text-xs sm:text-sm',
    },
    large: {
      nameText: 'text-lg sm:text-xl font-bold',
      codeBadge: 'text-base px-3.5 py-1.5',
      headerText: 'text-xl sm:text-2xl',
      cardPad: 'p-4 sm:p-5',
      noteText: 'text-sm',
    },
  }[fontSize];

  // Helper for generational indentation
  const getIndentClass = (gen: number) => {
    if (gen <= 30) return 'mr-0';
    if (gen === 31) return 'mr-1 sm:mr-2 border-r-2 border-emerald-300 pr-2 sm:pr-3';
    if (gen === 32) return 'mr-2 sm:mr-4 border-r-2 border-emerald-400 pr-2 sm:pr-4';
    if (gen <= 35) return 'mr-3 sm:mr-6 border-r-2 border-emerald-500 pr-2 sm:pr-4';
    if (gen <= 39) return 'mr-4 sm:mr-7 border-r-2 border-emerald-600 pr-2 sm:pr-4';
    if (gen === 40) return 'mr-4 sm:mr-8 border-r-2 border-teal-500 pr-2 sm:pr-4';
    if (gen === 41) return 'mr-5 sm:mr-9 border-r-2 border-teal-600 pr-2 sm:pr-4';
    return 'mr-6 sm:mr-10 border-r-2 border-teal-700 pr-2 sm:pr-4';
  };

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 py-4 space-y-4 font-cairo">
      {/* Top Introductory Document Box */}
      <div className="bg-[#fcfdfd] border border-emerald-800/20 rounded-2xl p-4 sm:p-6 shadow-sm text-stone-800 space-y-3">
        <div className="text-center space-y-1.5 border-b border-stone-200/80 pb-3">
          <h2 className="text-base sm:text-lg font-bold font-scheherazade text-stone-900">
            وثيقة أعقاب شارح البحر (آل الجنيد وآل البركاني وآل السروري)
          </h2>
          <p className="text-xs sm:text-sm text-emerald-900 font-medium">
            المشجر الهرمي التتابعي المفتوح • تسلسل الأجيال والأعقاب بالترتيب الأصلي
          </p>
        </div>

        <div className="bg-[#f4f9f6] p-3.5 rounded-xl border border-emerald-200/60 text-xs text-stone-700 leading-relaxed font-scheherazade sm:text-sm">
          <span className="font-bold text-emerald-950 block mb-1">عمود النسب الشريف المتصل:</span>
          أحمد بن عبد الله الحضرمي بن محمد بن محمد بن علي بن القاسم بن أحمد الشيخ البركاني بن شارح البحر الشيخ سعيد بن أبي الأسرار علي بن إبراهيم السروري بن علي بن محمد بن الحسن بن المحسن بن يحيى الصوفي بن جعفر الزكي بن الإمام الهادي علي النقي بن الإمام الجواد محمد التقي بن الإمام علي الرضا بن الإمام موسى الكاظم بن الإمام جعفر الصادق بن الإمام محمد الباقر بن الإمام علي زين العابدين بن سيد شباب أهل الجنة وسبط رسول الله وسيد الشهداء الإمام الحسين بن الإمام علي بن أبي طالب سلام الله عليهم أجمعين
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DYNAMIC BRANCH BANNER: When a branch is selected */}
      {/* ========================================================================= */}
      {selectedBranch !== 'all' && branchHierarchy.target && (
        <div className="bg-gradient-to-br from-[#043326] via-[#064e3b] to-[#043326] border-2 border-emerald-400/80 rounded-2xl p-4 sm:p-6 text-white shadow-lg space-y-4 font-cairo relative overflow-hidden">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  مستعرض الفرع المحدد
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-800 text-emerald-200 border border-emerald-600 font-mono">
                  الجيل {branchHierarchy.target.generation}
                </span>
                {branchHierarchy.target.fatherCode && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-800 text-emerald-200 border border-emerald-600 font-mono">
                    كود: {branchHierarchy.target.fatherCode}
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-black font-scheherazade text-white leading-tight">
                فرع: {branchHierarchy.target.fatherName}
              </h2>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-scheherazade">
                تم استخراج وحصر الشجرة الخاصة بهذا الفرع المبارك: يشمل سلسلة الآباء والأجداد المتصلة ({branchHierarchy.ancestors.length} أجيال)، والجد الجامع للفرع، وكافة أعقابه وذريته الموثقة ({branchHierarchy.descendants.length} كتلة نسبية).
              </p>
            </div>

            {/* Prominent Action Button: Download Selected Branch PDF & Tree Switch */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setBranchDisplayMode('tree')}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition shadow-md cursor-pointer border border-emerald-400/50"
                title="التحويل إلى المخطط الشجري الهرمي التفاعلي"
              >
                <Network className="w-4 h-4 text-emerald-200" />
                <span>عرض المخطط الشجري</span>
              </button>

              {isAdmin && (
                <>
                  <button
                    type="button"
                    onClick={() => exportBranchLineageToPdf(branchHierarchy)}
                    id="download-branch-pdf-btn"
                    className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-bold text-xs sm:text-sm transition shadow-md hover:shadow-xl cursor-pointer"
                    title="تحميل مستند PDF تسلسل هرمي لهذا الفرع"
                  >
                    <FileDown className="w-4 h-4 text-stone-950" />
                    <span>تحميل PDF (تسلسل هرمي)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => exportBranchTreeDiagramToPdf(branchHierarchy)}
                    id="download-branch-tree-pdf-btn"
                    className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-stone-950 font-bold text-xs sm:text-sm transition shadow-md hover:shadow-xl cursor-pointer"
                    title="تحميل مستند PDF مخطط شجري تفاعلي لهذا الفرع"
                  >
                    <FileDown className="w-4 h-4 text-stone-950" />
                    <span>تحميل PDF (مخطط شجري تفاعلي)</span>
                  </button>
                </>
              )}

              <button
                type="button"
                onClick={() => setSelectedBranch('all')}
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-200 text-xs font-bold transition border border-stone-700 cursor-pointer"
                title="إلغاء التحديد والعودة لعرض المشجر العام كاملاً"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>عرض كل المشجر</span>
              </button>
            </div>
          </div>

          {/* Ancestor Chain Breadcrumbs */}
          {branchHierarchy.ancestors.length > 0 && (
            <div className="bg-[#022119]/90 rounded-xl p-3 border border-emerald-500/30 text-xs space-y-1">
              <div className="text-amber-300 font-bold flex items-center gap-1.5">
                <GitFork className="w-3.5 h-3.5 text-amber-400" />
                <span>سلسلة النسب الشريف المتصلة لهذا الفرع:</span>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap text-emerald-100 font-scheherazade text-sm sm:text-base leading-relaxed">
                <span className="font-bold text-amber-200">شارح البحر الشيخ سعيد</span>
                {branchHierarchy.ancestors.slice(1).map((anc) => (
                  <React.Fragment key={anc.id}>
                    <span className="text-amber-400/80 font-bold">⬅</span>
                    <span className="text-stone-200">{anc.fatherName.split(' بن ')[0]}</span>
                  </React.Fragment>
                ))}
                <span className="text-amber-400 font-bold">⬅</span>
                <span className="text-amber-300 font-black px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-400/40">
                  {branchHierarchy.target.fatherName.split(' بن ')[0]} بن {branchHierarchy.target.fatherName.split(' بن ')[1] || ''}
                </span>
                <span className="text-emerald-400 font-bold">⬅</span>
                <span className="text-emerald-300 font-bold">الأعقاب والذرية ({branchHierarchy.descendants.length} كتل)</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* PAGE 1 & PAGE 2: Shown when viewing full tree (selectedBranch === 'all') */}
      {/* ========================================================================= */}
      {selectedBranch === 'all' && (
        <>
          {/* PAGE 1: TITLE PAGE (صفحة الغلاف والعنوان) */}
          <div className="bg-gradient-to-b from-[#fcfbf7] via-[#f7f5ed] to-[#f4efe4] border-2 border-amber-600/35 rounded-2xl p-6 sm:p-10 shadow-sm text-center relative overflow-hidden font-scheherazade">
        {/* Subtle decorative corners */}
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600/40 rounded-tr-lg" />
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600/40 rounded-tl-lg" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600/40 rounded-br-lg" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600/40 rounded-bl-lg" />

        <div className="max-w-xl mx-auto space-y-4 py-2">
          <div className="text-xs sm:text-sm font-bold text-emerald-900 tracking-wider font-cairo">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>

          <div className="space-y-2">
            <h1 className="text-xl sm:text-3xl font-bold text-emerald-950 leading-snug">
              من أعقاب شارح البحر: أحمد بن عبد الله الحضرمي
            </h1>
            <h2 className="text-lg sm:text-2xl font-bold text-amber-900">
              آل الجنيد في تعز
            </h2>
          </div>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto my-3" />

          <div className="space-y-1 pt-1">
            <p className="text-sm sm:text-base text-stone-600 font-medium font-cairo">
              تأليف
            </p>
            <p className="text-lg sm:text-2xl font-black text-emerald-900 font-cairo">
              عبد الإله عبد القادر الجنيد
            </p>
          </div>

          <div className="pt-2">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100/70 border border-emerald-300 text-emerald-900 text-xs font-semibold font-cairo">
              وثيقة تاريخية محققة • مشجر تتابعي متصل بالأكواد والأجيال
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PAGE 2: ACKNOWLEDGMENTS & CREDITS (شكر وتقدير) */}
      {/* ========================================================================= */}
      <div className="bg-[#fcfdfd] border border-emerald-800/25 rounded-2xl p-5 sm:p-7 shadow-sm text-stone-800 space-y-5">
        {/* Magazine Masthead Header */}
        <div className="text-center border-b-2 border-emerald-700/80 pb-3">
          <div className="inline-flex items-center justify-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <h2 className="text-lg sm:text-2xl font-bold font-cairo text-emerald-950">
              شكر وتقدير:
            </h2>
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          </div>
          <p className="text-sm sm:text-base text-stone-700 font-scheherazade font-medium">
            نتقدم بالشكر والتقدير لكل من تعاون وساهم في إنجاز هذا العمل.
          </p>
        </div>

        {/* Magazine-Standard Multi-Section Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Section 1: الإشراف والمراجعة */}
          <div className="bg-[#fbf9f4] border border-amber-200/80 rounded-xl p-4 shadow-2xs border-r-4 border-r-emerald-700">
            <h3 className="text-sm font-bold font-cairo text-emerald-950 border-b border-amber-200 pb-1.5 mb-2.5 flex items-center gap-1.5">
              <span>📜</span>
              <span>* الإشراف والمراجعة:</span>
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-stone-800 font-scheherazade font-semibold pr-2">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-700 font-bold">-</span>
                <span>السيد العلامة: محمد بن عبد الولي البركاني</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-700 font-bold">-</span>
                <span>السيد العلامة: عدنان بن أحمد بن يحيى الجنيد</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-700 font-bold">-</span>
                <span>السيد العارف: سعيد بن عبد الغني الجنيد</span>
              </li>
            </ul>
          </div>

          {/* Section 2: المعلومات والإنترنت */}
          <div className="bg-[#f8fafc] border border-sky-200/80 rounded-xl p-4 shadow-2xs border-r-4 border-r-sky-700">
            <h3 className="text-sm font-bold font-cairo text-sky-950 border-b border-sky-200 pb-1.5 mb-2.5 flex items-center gap-1.5">
              <span>🌐</span>
              <span>* المعلومات والإنترنت:</span>
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-stone-800 font-scheherazade font-semibold pr-2">
              <li className="flex items-center gap-1.5">
                <span className="text-sky-700 font-bold">-</span>
                <span>علاء بن عبد العليم الجنيد</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-sky-700 font-bold">-</span>
                <span>زيد بن عبد الإله بن عبد القادر الجنيد</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: مراجعة تسلسل المشجرات */}
        <div className="bg-[#fafaf9] border border-stone-200 rounded-xl p-4 sm:p-5 shadow-2xs border-r-4 border-r-amber-600">
          <h3 className="text-sm font-bold font-cairo text-amber-950 border-b border-stone-200 pb-1.5 mb-3 flex items-center gap-1.5">
            <span>🌿</span>
            <span>* مراجعة تسلسل المشجرات:</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs sm:text-sm text-stone-800 font-scheherazade font-semibold pr-2">
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">-</span>
              <span>فهد بن محمد بن ناجي الجنيد</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">-</span>
              <span>أحمد بن محمد بن عبد الله الجنيد</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">-</span>
              <span>عبد الوهاب بن محمد بن عبد القادر الجنيد</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">-</span>
              <span>الشهيد: نبيل بن إبراهيم بن محمد الجنيد</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">-</span>
              <span>حسين بن عبد الصمد بن أحمد الجنيد</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">-</span>
              <span>الشاعر: محمد بن سعيد بن سيف الجنيد</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">-</span>
              <span>د. هشام بن محمد بن وجيه الجنيد</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">-</span>
              <span>فؤاد بن عبد الكريم بن أحمد الجنيد</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">-</span>
              <span>عبد الله بن عبد الوهاب بن محمد الجنيد</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">-</span>
              <span>أمين بن مقبل بن عبد الواسع الجنيد</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">-</span>
              <span>منذر بن نبيل بن يوسف الجنيد</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">-</span>
              <span>عدنان بن عبد الله بن سرور الجنيد</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">-</span>
              <span>خالد بن عثمان البركاني</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600 font-bold">-</span>
              <span>أمين البركاني</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )}

      {/* Summary Info Bar (Static & Informational) */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-stone-600">
        <div className="flex items-center gap-2">
          <span className="font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
            فروع وأعقاب معروضة: {filteredBlocks.length}
          </span>
          <span className="font-bold text-stone-700 bg-stone-100 border border-stone-200 px-3 py-1 rounded-lg">
            إجمالي الأعلام: {filteredBlocks.reduce((acc, b) => acc + b.children.length, 0)}
          </span>
        </div>

        <div className="text-[11px] text-stone-500 font-medium hidden sm:block">
          مشجر تتابعي كامل ومفتوح — يمكن التمرير وقراءة كامل السلسلة دون الحاجة للنقر
        </div>
      </div>

      {/* Fully Expanded Static Sequential Tree Container */}
      <div className="space-y-6">
        {filteredBlocks.map((block, bIdx) => {
          const isMainBranchStart =
            bIdx === 0 ||
            filteredBlocks[bIdx - 1].mainBranch !== block.mainBranch;

          const isTarget = Boolean(branchHierarchy.target && block.id === branchHierarchy.target.id);
          const isAncestor = Boolean(branchHierarchy.target && branchHierarchy.ancestors.some((a) => a.id === block.id));
          const isDescendant = Boolean(branchHierarchy.target && branchHierarchy.descendants.some((d) => d.id === block.id));

          return (
            <div key={block.id} className="space-y-2">
              {/* 1. Main Branch Header Banner (Dark Green as in standard document) */}
              {isMainBranchStart && (
                <div className="bg-[#063024] text-white rounded-2xl p-3.5 sm:p-4 shadow-md border border-[#0e5c46] flex items-center justify-between gap-3 mt-6 first:mt-0">
                  <span className="text-[11px] sm:text-xs px-3 py-1 rounded-full bg-[#094735] text-emerald-200 border border-emerald-600/40 font-medium">
                    وثيقة أعقاب شارح البحر
                  </span>

                  <h3 className="text-sm sm:text-base font-bold font-scheherazade text-amber-200 text-center flex-1">
                    {block.mainBranch}
                  </h3>

                  <div className="w-8 h-8 rounded-lg bg-[#0a4e3b] flex items-center justify-center text-amber-300 border border-amber-500/30">
                    <ScrollText className="w-4 h-4" />
                  </div>
                </div>
              )}

              {/* 2. Fully Expanded Branch Block with Distinct Sub-Header and Direct Children Cards */}
              <div className={`space-y-1.5 transition-all ${getIndentClass(block.generation)}`}>
                {/* Branch Sub-Header (Clean, distinct, no duplicated labels) */}
                <div className={`border rounded-xl px-3.5 py-2.5 flex items-center justify-between gap-2 shadow-2xs ${
                  isTarget
                    ? 'bg-amber-50/95 border-amber-400 ring-2 ring-amber-400/40'
                    : isAncestor
                    ? 'bg-sky-50/80 border-sky-300'
                    : 'bg-[#f0f7f4] border-emerald-300/80'
                }`}>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                      isTarget ? 'bg-amber-600' : isAncestor ? 'bg-sky-600' : 'bg-emerald-700'
                    }`}></span>
                    <span className={`font-bold font-scheherazade text-emerald-950 ${fontClasses.headerText}`}>
                      {block.children.length > 0 ? 'أعقاب: ' : ''}{block.fatherCode ? `${block.fatherCode} - ` : ''}{block.fatherName}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap">
                    {isTarget && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-200 text-amber-950 border border-amber-400 flex items-center gap-1">
                        🎯 الجد الجامع للفرع
                      </span>
                    )}
                    {isAncestor && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-sky-100 text-sky-900 border border-sky-300 flex items-center gap-1">
                        ⬆ سلسلة الآباء والأجداد
                      </span>
                    )}
                    {isDescendant && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1">
                        🌿 ذرية الفرع
                      </span>
                    )}
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-200/80 text-emerald-900 border border-emerald-400/60 font-mono">
                      الجيل: {block.generation}
                    </span>
                    {block.children.length > 0 && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300">
                        الأبناء ({block.children.length})
                      </span>
                    )}
                  </div>
                </div>

                {/* Direct Children Cards Immediately Below Father */}
                {block.children.length > 0 && (
                  <div className="space-y-1.5 mr-2 sm:mr-3.5">
                    {block.children.map((child, cIdx) => (
                      <div
                        key={`${block.id}-child-${cIdx}`}
                        className={`flex items-center justify-between ${fontClasses.cardPad} rounded-xl border transition ${
                          child.isMartyr
                            ? 'bg-rose-50/85 border-rose-300 hover:bg-rose-100/80 shadow-2xs'
                            : child.noOffspring
                            ? 'bg-amber-50/85 border-amber-300 hover:bg-amber-100/80 shadow-2xs'
                            : child.hasDaughters
                            ? 'bg-purple-50/70 border-purple-200 hover:bg-purple-100/70'
                            : 'bg-white border-stone-200/90 hover:bg-[#f3faf6] hover:border-emerald-300 shadow-2xs'
                        }`}
                      >
                        {/* Name and Badges on Right */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`font-bold font-scheherazade text-stone-900 ${fontClasses.nameText}`}>
                            {child.name}
                          </span>

                          {/* Martyr Badge (Burgundy / Red) */}
                          {child.isMartyr && (
                            <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#881337] text-white flex items-center gap-1 shadow-xs border border-rose-900">
                              <span>🕊️</span>
                              <span>شهيد</span>
                            </span>
                          )}

                          {/* No Offspring Badge (Yellow / Amber) */}
                          {child.noOffspring && (
                            <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#f59e0b] text-stone-950 flex items-center gap-1 border border-amber-600 shadow-xs">
                              <span>🚫</span>
                              <span>لم يعقب</span>
                            </span>
                          )}

                          {/* Daughters Badge */}
                          {child.hasDaughters && (
                            <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md bg-purple-100 text-purple-900 border border-purple-300">
                              أعقب بنات
                            </span>
                          )}

                          {/* Follow-up Note if has offspring or marked as أعقب */}
                          {child.hasChildrenFollowup && !child.isMartyr && !child.noOffspring && (
                            <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300">
                              أعقب
                            </span>
                          )}

                          {/* Additional Text Notes */}
                          {child.notes && !child.isMartyr && !child.noOffspring && !child.hasDaughters && !child.hasChildrenFollowup && (
                            <span className={`text-stone-500 italic ${fontClasses.noteText}`}>
                              ({child.notes})
                            </span>
                          )}
                        </div>

                        {/* Hierarchical Code Pill on Left */}
                        <div className="flex items-center gap-2">
                          <span className="text-stone-300 text-xs hidden sm:inline">-</span>
                          <span className={`font-mono font-bold rounded-lg bg-[#d1fae5] text-[#065f46] border border-[#a7f3d0] shadow-2xs whitespace-nowrap ${fontClasses.codeBadge}`}>
                            {child.code}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {filteredBlocks.length === 0 && (
          <div className="bg-stone-100 border border-stone-200 rounded-2xl p-8 text-center text-stone-500 space-y-3">
            <p className="font-bold text-stone-700">لم يتم العثور على نتائج مطابقة للبحث أو التصفية الحالية.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterType('all');
                setSelectedBranch('all');
              }}
              className="px-4 py-2 bg-emerald-800 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition shadow-xs"
            >
              إعادة ضبط الفلاتر وعرض المشجر كاملاً
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
