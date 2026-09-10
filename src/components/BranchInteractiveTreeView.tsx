import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  FileDown,
  Printer,
  ChevronDown,
  ChevronUp,
  GitBranch,
  Shield,
  Sparkles,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  Info,
  CheckCircle2,
  Layers,
  ListTree,
  Search,
} from 'lucide-react';
import {
  BranchHierarchyResult,
  BranchHierarchyTreeNode,
  buildBranchHierarchyTree,
  buildBranchHierarchyTreeStartingFromImamAli,
  buildBranchFullGenerationalBlocks,
  getIntermediateAncestors,
  NOBLE_ANCESTOR_SPINE,
  EXACT_UPWARD_ANCESTRAL_STRING,
  UpwardAncestorNode,
} from '../utils/branchLineageHelper';
import { exportBranchLineageToPdf, exportBranchTreeDiagramToPdf } from '../utils/exportUtils';
import { useAuthRole } from '../utils/authRole';
import { normalizeArabicForSearch } from '../utils/genealogyParser';

interface BranchInteractiveTreeViewProps {
  hierarchy: BranchHierarchyResult;
  onClearBranch: () => void;
  onSwitchToListView?: () => void;
}

export const BranchInteractiveTreeView: React.FC<BranchInteractiveTreeViewProps> = ({
  hierarchy,
  onClearBranch,
  onSwitchToListView,
}) => {
  const { target, ancestors, descendants, branchTitle, targetShortName } = hierarchy;
  const { isAdmin } = useAuthRole();

  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const [showAncestralSpine, setShowAncestralSpine] = useState<boolean>(true);
  const [collapsedNodes, setCollapsedNodes] = useState<Set<string>>(new Set());
  const [selectedNodeDetails, setSelectedNodeDetails] = useState<BranchHierarchyTreeNode | null>(null);

  // New states for generational upper lineage control
  const [treeRootMode, setTreeRootMode] = useState<'imamAli' | 'target'>('imamAli');
  const [branchViewTab, setBranchViewTab] = useState<'tree' | 'cascade'>('tree');
  const [cascadeSearchQuery, setCascadeSearchQuery] = useState<string>('');

  const containerRef = useRef<HTMLDivElement>(null);

  // Build the tree data based on selected root mode (Starting from Imam Ali [Gen 1] or from Target)
  const treeRoot = useMemo(() => {
    if (!target) return null;
    if (treeRootMode === 'imamAli') {
      return buildBranchHierarchyTreeStartingFromImamAli(target, descendants, ancestors);
    }
    return buildBranchHierarchyTree(target, descendants);
  }, [target, descendants, ancestors, treeRootMode]);

  // Full sequential generational blocks starting from [الجيل 1] down to branch and descendants
  const fullGenerationalBlocks = useMemo(() => {
    return buildBranchFullGenerationalBlocks(hierarchy);
  }, [hierarchy]);

  // Intermediate ancestors connecting Ahmad Al-Hadrami to target
  const intermediateAncestors = useMemo(() => {
    if (!target) return [];
    return getIntermediateAncestors(target, ancestors);
  }, [target, ancestors]);

  // Statistics calculation
  const stats = useMemo(() => {
    let totalMembers = 1; // root
    let martyrs = 0;
    let noOffspring = 0;
    const gens = new Set<number>();
    if (target) gens.add(target.generation);

    const countNodes = (node: BranchHierarchyTreeNode) => {
      node.children.forEach((c) => {
        totalMembers++;
        gens.add(c.generation);
        if (c.isMartyr) martyrs++;
        if (c.noOffspring) noOffspring++;
        countNodes(c);
      });
    };

    if (treeRoot) {
      countNodes(treeRoot);
    }

    return {
      totalMembers,
      martyrs,
      noOffspring,
      generationsSpan: gens.size,
      directChildren: treeRoot?.children.length || 0,
    };
  }, [treeRoot, target]);

  // Filtered generational blocks for cascade view
  const filteredCascadeBlocks = useMemo(() => {
    const rawQ = cascadeSearchQuery.trim();
    if (!rawQ) return fullGenerationalBlocks;
    const q = normalizeArabicForSearch(rawQ);

    return fullGenerationalBlocks.filter((b) => {
      const inFather = normalizeArabicForSearch(b.fatherName).includes(q) || (b.fatherCode && b.fatherCode.toLowerCase().includes(rawQ.toLowerCase()));
      const inBranch = normalizeArabicForSearch(b.mainBranch).includes(q);
      const inChild = b.children.some(
        (c) => normalizeArabicForSearch(c.name).includes(q) || (c.code && c.code.toLowerCase().includes(rawQ.toLowerCase()))
      );
      return inFather || inBranch || inChild;
    });
  }, [fullGenerationalBlocks, cascadeSearchQuery]);

  // Zoom controls
  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.15, 2.2));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.15, 0.4));
  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Drag pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only drag if left click on container background
    if ((e.target as HTMLElement).closest('.tree-node-interactive')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Toggle node collapse
  const toggleCollapse = (nodeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsedNodes((prev) => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  };

  const handleDownloadPdf = () => {
    if (!isAdmin) return;
    exportBranchLineageToPdf(hierarchy);
  };

  const handleDownloadTreePdf = () => {
    if (!isAdmin) return;
    exportBranchTreeDiagramToPdf(hierarchy);
  };

  const handlePrint = () => {
    if (!isAdmin) return;
    window.print();
  };

  if (!target || !treeRoot) {
    return (
      <div className="p-8 text-center bg-stone-50 rounded-2xl border border-stone-200">
        <p className="text-stone-600">لم يتم العثور على بيانات الفرع المحدد.</p>
        <button
          onClick={onClearBranch}
          className="mt-4 px-4 py-2 bg-emerald-700 text-white rounded-xl hover:bg-emerald-800 transition"
        >
          العودة لكل الفروع
        </button>
      </div>
    );
  }

  // Recursive Tree Node Renderer
  const renderTreeNode = (node: BranchHierarchyTreeNode, isRoot: boolean = false) => {
    const isCollapsed = collapsedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;

    const isTargetNode =
      node.id === `root-${target.id}` ||
      (node.generation === target.generation && (node.name.includes(targetShortName) || (node.code && node.code === target.fatherCode)));
    const isImamAli = node.generation === 1;
    const isSharhAlBahr = node.generation === 18;
    const isAhmadAlHadrami = node.generation === 25;
    const isNobleSpine = node.generation < target.generation;

    let cardClasses = 'bg-white border-emerald-300 text-stone-900 w-52 hover:border-emerald-500 hover:shadow-md';
    if (isTargetNode) {
      cardClasses = 'bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200/90 border-amber-400 ring-4 ring-amber-300/50 shadow-md w-64 text-stone-950';
    } else if (isImamAli) {
      cardClasses = 'bg-gradient-to-b from-amber-100 via-amber-50 to-white border-2 border-amber-500 ring-4 ring-amber-300/40 shadow-md w-64 text-stone-950';
    } else if (isSharhAlBahr || isAhmadAlHadrami) {
      cardClasses = 'bg-gradient-to-b from-emerald-100 via-emerald-50 to-white border-2 border-emerald-500 shadow-md w-60 text-stone-950';
    } else if (isNobleSpine) {
      cardClasses = 'bg-gradient-to-b from-slate-50 to-slate-100/90 border border-emerald-400 text-stone-900 w-56 shadow-xs';
    } else if (node.isMartyr) {
      cardClasses = 'bg-rose-50/90 border-rose-400 text-rose-950 w-52 hover:shadow-rose-100';
    } else if (node.noOffspring) {
      cardClasses = 'bg-yellow-50/90 border-yellow-400 text-yellow-950 w-52 hover:shadow-yellow-100';
    }

    return (
      <div key={node.id} className="flex flex-col items-center relative">
        {/* The Node Card */}
        <div
          onClick={() => setSelectedNodeDetails(node)}
          className={`tree-node-interactive cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 select-none rounded-xl p-3 text-center border shadow-sm relative ${cardClasses}`}
        >
          {/* Badge for Special Roles */}
          {isTargetNode && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-600 text-amber-50 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow border border-amber-300 whitespace-nowrap flex items-center gap-1 z-10">
              <Sparkles className="w-3 h-3 text-amber-200" />
              الجد الجامع للفرع
            </div>
          )}
          {isImamAli && !isTargetNode && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-800 text-emerald-50 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow border border-emerald-300 whitespace-nowrap flex items-center gap-1 z-10">
              <Sparkles className="w-3 h-3 text-amber-300" />
              👑 رأس السلسلة العلوية
            </div>
          )}
          {isSharhAlBahr && !isTargetNode && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-800 text-teal-50 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow border border-teal-300 whitespace-nowrap flex items-center gap-1 z-10">
              ⭐ شارح البحر الشيخ سعيد
            </div>
          )}
          {isAhmadAlHadrami && !isTargetNode && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-700 text-emerald-50 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow border border-emerald-300 whitespace-nowrap flex items-center gap-1 z-10">
              ⭐ أحمد بن عبد الله الحضرمي
            </div>
          )}
          {isNobleSpine && !isImamAli && !isSharhAlBahr && !isAhmadAlHadrami && !isTargetNode && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-700 text-slate-100 text-[9px] font-semibold px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap z-10">
              ⬆ عمود النسب الشريف
            </div>
          )}

          {/* Node Name */}
          <div className={`font-bold leading-tight ${isTargetNode || isImamAli ? 'text-stone-950 text-base mt-1' : 'text-sm'}`}>
            {node.name}
          </div>

          {/* Generation & Code Tag */}
          <div className="flex items-center justify-center gap-1.5 mt-1.5 flex-wrap">
            <span className="text-[10px] font-mono bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded border border-stone-200">
              الجيل {node.generation}
            </span>
            {node.code && (
              <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-200 font-bold">
                {node.code}
              </span>
            )}
          </div>

          {/* Status Badges */}
          <div className="flex items-center justify-center gap-1 mt-1.5 flex-wrap">
            {node.isMartyr && (
              <span className="text-[9px] bg-rose-600 text-white px-2 py-0.5 rounded-full font-bold shadow-xs">
                🕊️ شهيد
              </span>
            )}
            {node.noOffspring && (
              <span className="text-[9px] bg-yellow-500 text-stone-900 px-2 py-0.5 rounded-full font-bold shadow-xs">
                لم يعقب 🚫
              </span>
            )}
            {hasChildren && !isTargetNode && !isNobleSpine && (
              <span className="text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold border border-emerald-200">
                له عقب ({node.children.length})
              </span>
            )}
          </div>

          {/* Collapse/Expand button if node has children */}
          {hasChildren && (
            <button
              onClick={(e) => toggleCollapse(node.id, e)}
              className="mt-2 text-[10px] text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-md transition flex items-center justify-center gap-1 mx-auto"
            >
              {isCollapsed ? (
                <>
                  <ChevronDown className="w-3 h-3" />
                  إظهار الأبناء ({node.children.length})
                </>
              ) : (
                <>
                  <ChevronUp className="w-3 h-3" />
                  طي الأبناء
                </>
              )}
            </button>
          )}
        </div>

        {/* Children Render & Connecting Lines */}
        {hasChildren && !isCollapsed && (
          <div className="flex flex-col items-center w-full">
            {/* Vertical connector coming out from parent */}
            <div className="w-0.5 h-6 bg-emerald-400 shrink-0" />

            {/* Horizontal siblings container */}
            <div className="flex items-start justify-center pt-0">
              {node.children.map((childNode, index) => {
                const isFirst = index === 0;
                const isLast = index === node.children.length - 1;
                return (
                  <div key={childNode.id} className="relative flex flex-col items-center px-2 sm:px-3">
                    {/* Top horizontal crossbar connecting to siblings */}
                    {node.children.length > 1 && (
                      <div
                        className={`absolute top-0 h-4 border-emerald-400 ${
                          isFirst
                            ? 'right-1/2 left-0 border-t-2'
                            : isLast
                            ? 'left-1/2 right-0 border-t-2'
                            : 'left-0 right-0 border-t-2'
                        }`}
                      />
                    )}
                    {/* Vertical stem down into this child card */}
                    <div className="w-0.5 h-4 bg-emerald-400 shrink-0" />
                    {renderTreeNode(childNode, false)}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Control Center */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white rounded-2xl shadow-xl p-5 md:p-6 border border-emerald-700/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <GitBranch className="w-3.5 h-3.5" />
                مخطط شجري تفاعلي للفرع
              </span>
              <span className="bg-emerald-700/50 text-emerald-100 text-xs px-2.5 py-1 rounded-full font-mono">
                الجيل {target.generation}
              </span>
              {target.fatherCode && (
                <span className="bg-emerald-700/50 text-amber-200 text-xs px-2.5 py-1 rounded-full font-mono font-bold">
                  رمز التوثيق: {target.fatherCode}
                </span>
              )}
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-amber-100">{branchTitle}</h1>
            <p className="text-emerald-200/90 text-sm">
              عرض هرمي شجري مستقل للأعقاب والذرية مع إكمال سلسلة النسب الصاعد المتصل إلى رسول الله ﷺ والإمام علي عليه
              السلام.
            </p>
          </div>

          {/* Actions & Role Gated Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* PDF Exports for Branch - strictly for ADMIN */}
            {isAdmin && (
              <>
                <button
                  id="download-branch-pdf-btn"
                  onClick={handleDownloadPdf}
                  className="px-3.5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold rounded-xl shadow-lg hover:shadow-xl transition flex items-center gap-1.5 border border-amber-300 text-xs sm:text-sm"
                  title="تحميل مستند PDF تسلسل هرمي معتمد لهذا الفرع فقط"
                >
                  <FileDown className="w-4 h-4 text-stone-950" />
                  <span>تحميل PDF (تسلسل هرمي)</span>
                </button>

                <button
                  id="download-branch-tree-pdf-btn"
                  onClick={handleDownloadTreePdf}
                  className="px-3.5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-stone-950 font-bold rounded-xl shadow-lg hover:shadow-xl transition flex items-center gap-1.5 border border-emerald-300 text-xs sm:text-sm"
                  title="تحميل مستند PDF مخطط شجري تفاعلي معتمد لهذا الفرع فقط"
                >
                  <FileDown className="w-4 h-4 text-stone-950" />
                  <span>تحميل PDF (مخطط شجري تفاعلي)</span>
                </button>
              </>
            )}

            {/* Print for Branch - strictly for ADMIN */}
            {isAdmin && (
              <button
                onClick={handlePrint}
                className="px-3.5 py-2.5 bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 rounded-xl transition border border-emerald-600 flex items-center gap-2 text-sm"
                title="طباعة المخطط"
              >
                <Printer className="w-4 h-4" />
                طباعة
              </button>
            )}

            {/* Back to all branches */}
            <button
              onClick={onClearBranch}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition border border-white/20 text-sm flex items-center gap-1.5"
            >
              عرض كل المشجر
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-emerald-700/60 text-xs">
          <div className="bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-600/30 flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-300" />
            <div>
              <div className="text-emerald-300 text-[10px]">إجمالي أفراد الفرع</div>
              <div className="font-bold text-sm text-white">{stats.totalMembers} فرداً</div>
            </div>
          </div>
          <div className="bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-600/30 flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-amber-300" />
            <div>
              <div className="text-amber-300 text-[10px]">الأبناء المباشرين</div>
              <div className="font-bold text-sm text-white">{stats.directChildren} أبناء</div>
            </div>
          </div>
          <div className="bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-600/30 flex items-center gap-2">
            <Award className="w-4 h-4 text-rose-300" />
            <div>
              <div className="text-rose-300 text-[10px]">الشهداء الأبرار</div>
              <div className="font-bold text-sm text-white">{stats.martyrs} شهيد</div>
            </div>
          </div>
          <div className="bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-600/30 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-300" />
            <div>
              <div className="text-teal-300 text-[10px]">عمق الأجيال الممتدة</div>
              <div className="font-bold text-sm text-white">{stats.generationsSpan} أجيال</div>
            </div>
          </div>
        </div>
      </div>

      {/* REGAL ANCESTRAL CHAIN COMPLETION BANNER (Mandated Exact String) */}
      <div className="bg-amber-50 border-2 border-amber-300/80 rounded-2xl p-5 shadow-md relative overflow-hidden">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-600 text-white rounded-xl shadow-xs">
              <Award className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <h3 className="font-bold text-amber-950 text-base flex items-center gap-2">
                سلسلة النسب الشريف المتصل صعوداً إلى الإمام علي بن أبي طالب (سلام الله عليهم أجمعين)
                <span className="text-[11px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-normal">
                  سند محقق وموثق
                </span>
              </h3>
              <p className="text-xs text-amber-800/90 mt-0.5">
                إكمال السند التاريخي المتصل صعوداً من رأس الفرع إلى سيدي شارح البحر الشيخ سعيد ثم سيدي أحمد الحضرمي وصولاً
                إلى دوحة النبوة المطهرة
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowAncestralSpine(!showAncestralSpine)}
            className="text-xs bg-amber-200/80 hover:bg-amber-300 text-amber-900 px-3 py-1.5 rounded-lg font-semibold transition flex items-center gap-1 shrink-0"
          >
            {showAncestralSpine ? 'إخفاء المسار التفصيلي' : 'عرض مسار الأجداد'}
            {showAncestralSpine ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* The Exact Mandated Full Lineage String */}
        <div className="mt-3.5 p-3.5 bg-white/90 border border-amber-300 rounded-xl text-stone-900 leading-relaxed text-sm font-medium text-justify">
          <span className="font-bold text-amber-900 ml-1">السلسلة الكلية المباركة:</span>
          {EXACT_UPWARD_ANCESTRAL_STRING}
        </div>

        <div className="mt-2 text-[11px] text-amber-800 italic flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          ملاحظة توثيقية: "شارح البحر" الشيخ سعيد بن أبي الأسرار علي هو جد مباشر لسيدي أحمد بن عبد الله الحضرمي صاحب المقام
          بذخر.
        </div>

        {/* Detailed Ancestral Spine Stepper */}
        {showAncestralSpine && (
          <div className="mt-4 pt-4 border-t border-amber-200/80">
            <div className="text-xs font-bold text-amber-900 mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              تدرج الأجداد وصولاً إلى الجد الجامع للفرع ({targetShortName}):
            </div>
            <div className="flex items-center gap-1.5 flex-wrap text-xs">
              {NOBLE_ANCESTOR_SPINE.slice(0, 10).map((anc) => (
                <span
                  key={`noble-${anc.generation}`}
                  className="bg-amber-100 text-amber-950 px-2 py-0.5 rounded border border-amber-300 font-semibold flex items-center gap-1"
                >
                  {anc.name.split(' ')[0]} {anc.name.split(' ')[1] || ''}
                  <span className="text-amber-500">←</span>
                </span>
              ))}
              <span className="text-amber-700 font-bold">... (عشرة أجيال) ←</span>
              <span className="bg-emerald-100 text-emerald-950 px-2 py-0.5 rounded border border-emerald-300 font-bold">
                شارح البحر الشيخ سعيد (الجيل 18)
              </span>
              <span className="text-amber-500">←</span>
              <span className="bg-emerald-100 text-emerald-950 px-2 py-0.5 rounded border border-emerald-300 font-bold">
                أحمد بن عبد الله الحضرمي (الجيل 25)
              </span>
              {intermediateAncestors.map((im) => (
                <React.Fragment key={`im-${im.generation}-${im.name}`}>
                  <span className="text-amber-500">←</span>
                  <span className="bg-stone-100 text-stone-800 px-2 py-0.5 rounded border border-stone-300">
                    {im.name} (الجيل {im.generation})
                  </span>
                </React.Fragment>
              ))}
              <span className="text-amber-500">←</span>
              <span className="bg-amber-500 text-stone-950 px-2.5 py-0.5 rounded-full font-bold shadow-xs">
                🎯 {targetShortName} (الجيل {target.generation})
              </span>
            </div>
          </div>
        )}
      </div>

      {/* SUB-VIEW SELECTOR TABS & CONTROLS */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-2.5 rounded-2xl border border-stone-200 shadow-xs">
        <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl">
          <button
            onClick={() => setBranchViewTab('tree')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition ${
              branchViewTab === 'tree'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-stone-700 hover:bg-white/70'
            }`}
          >
            <GitBranch className="w-4 h-4" />
            المخطط الشجري التفاعلي
          </button>
          <button
            onClick={() => setBranchViewTab('cascade')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition ${
              branchViewTab === 'cascade'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-stone-700 hover:bg-white/70'
            }`}
          >
            <ListTree className="w-4 h-4" />
            التسلسل الهرمي مع "وأعقب:" ({fullGenerationalBlocks.length} كتلة)
          </button>
        </div>

        {/* Tree Root Scope Selector (Shown when in Tree mode) */}
        {branchViewTab === 'tree' ? (
          <div className="flex items-center gap-2 text-xs">
            <span className="text-stone-500 font-semibold hidden md:inline">بداية المخطط:</span>
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
              <button
                onClick={() => setTreeRootMode('imamAli')}
                className={`px-2.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1 ${
                  treeRootMode === 'imamAli'
                    ? 'bg-amber-500 text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:bg-white/80'
                }`}
                title="يبدأ المخطط من الجيل 1 (الإمام علي عليه السلام) ويتدلى عبر الأئمة والأجداد للفرع"
              >
                <Sparkles className="w-3.5 h-3.5" />
                الجيل 1: الإمام علي (ع)
              </button>
              <button
                onClick={() => setTreeRootMode('target')}
                className={`px-2.5 py-1.5 rounded-lg font-bold transition flex items-center gap-1 ${
                  treeRootMode === 'target'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-stone-600 hover:bg-white/80'
                }`}
                title={`يركز المخطط مباشرة على رأس الفرع (${targetShortName})`}
              >
                رأس الفرع ({targetShortName})
              </button>
            </div>
          </div>
        ) : (
          /* Search in cascade */
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="بحث في أسماء وأكواد الفرع..."
              value={cascadeSearchQuery}
              onChange={(e) => setCascadeSearchQuery(e.target.value)}
              className="w-full text-xs pl-3 pr-8 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Search className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2" />
          </div>
        )}
      </div>

      {branchViewTab === 'cascade' ? (
        /* GENERATIONAL CASCADE VIEW WITH "وأعقب:" */
        <div className="space-y-4">
          <div className="bg-white border border-emerald-300/80 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                التسلسل الهرمي التتابعي للأجداد مع "وأعقب:" لفرع {targetShortName}
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                يبدأ التسلسل من [الجيل 1] الإمام علي بن أبي طالب عليه السلام ويتدلى عبر عمود النسب الشريف وسيدي شارح البحر الشيخ سعيد ثم سيدي أحمد الحضرمي وصولاً إلى الجد الجامع للفرع وكافة أعقابه الموثقين.
              </p>
            </div>
            <div className="text-xs text-emerald-900 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 font-bold self-start sm:self-auto shrink-0">
              عدد الكتل: {filteredCascadeBlocks.length}
            </div>
          </div>

          <div className="space-y-3">
            {filteredCascadeBlocks.map((block, idx) => {
              const isTarget = block.id === target.id || block.fatherName.includes('الجد الجامع للفرع');
              const isImamAli = block.generation === 1;
              const isSharhAlBahr = block.generation === 18;
              const isHadrami = block.generation === 25;
              const isNoble = block.generation < target.generation;

              let roleBadgeText = '🌿 أعقاب وذرية الفرع';
              let roleBadgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';

              if (isImamAli) {
                roleBadgeText = '👑 رأس السلسلة النبوية العلوية المطهرة';
                roleBadgeColor = 'bg-amber-100 text-amber-900 border-amber-300 font-bold';
              } else if (isSharhAlBahr) {
                roleBadgeText = '⭐ سيدي شارح البحر الشيخ سعيد';
                roleBadgeColor = 'bg-teal-100 text-teal-900 border-teal-300 font-bold';
              } else if (isHadrami) {
                roleBadgeText = '⭐ سيدي أحمد بن عبد الله الحضرمي (صاحب المقام)';
                roleBadgeColor = 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold';
              } else if (isTarget) {
                roleBadgeText = '🎯 الجد الجامع للفرع المحدد';
                roleBadgeColor = 'bg-amber-100 text-amber-950 border-amber-400 font-bold shadow-xs';
              } else if (isNoble) {
                roleBadgeText = '⬆ عمود النسب وسلسلة الأجداد';
                roleBadgeColor = 'bg-slate-100 text-slate-800 border-slate-300';
              }

              const validChildren = block.children.filter(
                (c) =>
                  c.name &&
                  c.name.trim() !== '' &&
                  c.name.trim() !== '-' &&
                  c.name.trim() !== 'بن' &&
                  !/^بن\s*$/.test(c.name.trim()) &&
                  !c.name.includes('لم تتم موافاتنا')
              );

              return (
                <div
                  key={block.id || `cascade-${idx}`}
                  className={`rounded-2xl border p-4 sm:p-5 transition-all shadow-xs ${
                    isTarget
                      ? 'bg-gradient-to-r from-amber-50/90 via-amber-100/50 to-amber-50/90 border-amber-400 ring-2 ring-amber-300/40'
                      : isImamAli
                      ? 'bg-gradient-to-r from-amber-50 via-white to-emerald-50 border-amber-300'
                      : isSharhAlBahr || isHadrami
                      ? 'bg-gradient-to-r from-emerald-50 via-white to-teal-50 border-emerald-400'
                      : isNoble
                      ? 'bg-[#fcfdfd] border-stone-200 hover:border-emerald-300'
                      : 'bg-white border-emerald-200/70 hover:border-emerald-400'
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200/80 pb-3 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md font-bold">
                        [{idx + 1}]
                      </span>
                      <span className="font-mono text-xs bg-emerald-700 text-white px-2 py-0.5 rounded-md font-bold">
                        الجيل {block.generation}
                      </span>
                      {block.fatherCode && (
                        <span className="font-mono text-xs bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-md font-bold">
                          رمز: {block.fatherCode}
                        </span>
                      )}
                      <h4 className="font-bold text-stone-900 text-base">
                        {block.fatherName.replace(/^\[الجيل \d+\]\s*/, '')}
                      </h4>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full border ${roleBadgeColor}`}>
                      {roleBadgeText}
                    </span>
                  </div>

                  {/* Sub-branch badge */}
                  <div className="text-[11px] text-stone-500 mb-2.5">
                    الفرع التوثيقي: {block.mainBranch}
                  </div>

                  {/* Children with "وأعقب:" */}
                  {validChildren.length > 0 ? (
                    <div className="bg-[#f8faf9] rounded-xl p-3 sm:p-4 border border-emerald-100 space-y-2">
                      <div className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                        <span className="text-emerald-700 font-extrabold text-sm font-scheherazade">وأعقب:</span>
                        <span className="text-stone-600 font-normal">({validChildren.length} من الأبناء والذرية)</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {validChildren.map((c, cIdx) => (
                          <div
                            key={`child-${idx}-${cIdx}`}
                            className="bg-white p-2.5 rounded-lg border border-stone-200 flex items-center justify-between gap-2 text-xs hover:border-emerald-300 transition"
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                              <span className="font-semibold text-stone-900 truncate">{c.name}</span>
                            </div>
                            <div className="flex items-center gap-1 shrink-0">
                              {c.code && (
                                <span className="font-mono text-[10px] bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded border border-stone-200">
                                  {c.code}
                                </span>
                              )}
                              {c.isMartyr && (
                                <span className="text-[9px] bg-rose-600 text-white px-1.5 py-0.5 rounded font-bold">
                                  🕊️ شهيد
                                </span>
                              )}
                              {c.noOffspring && (
                                <span className="text-[9px] bg-yellow-500 text-stone-900 px-1.5 py-0.5 rounded font-bold">
                                  🚫 لم يعقب
                                </span>
                              )}
                              {c.hasDaughters && (
                                <span className="text-[9px] bg-pink-100 text-pink-800 px-1.5 py-0.5 rounded font-bold">
                                  🌸 أعقب بنات
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-stone-500 italic bg-stone-50 p-2.5 rounded-lg">
                      لم تُسجل أعقاب مباشرة تالية في هذه الكتلة التوثيقية.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* TREE CANVAS SECTION */
        <div className="bg-stone-100/80 border border-stone-300 rounded-2xl shadow-inner relative overflow-hidden">
          {/* Canvas Toolbar */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-white/95 backdrop-blur-xs p-1.5 rounded-xl border border-stone-300 shadow-md">
            <button
              onClick={handleZoomIn}
              className="p-1.5 hover:bg-stone-100 rounded-lg text-stone-700 transition"
              title="تكبير (+)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-1.5 hover:bg-stone-100 rounded-lg text-stone-700 transition"
              title="تصغير (-)"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 hover:bg-stone-100 rounded-lg text-stone-700 transition"
              title="إعادة ضبط (100%)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono px-1.5 text-stone-500">{Math.round(zoom * 100)}%</span>
          </div>

          {/* Legend / Guide Pill */}
          <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-stone-300 shadow-md text-xs">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-600" />
              رأس الفرع
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              له عقب
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              شهيد 🕊️
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              لم يعقب 🚫
            </span>
          </div>

          {/* Interactive Canvas */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`w-full min-h-[550px] max-h-[750px] overflow-auto p-12 flex justify-center items-start cursor-grab ${
              isDragging ? 'cursor-grabbing' : ''
            }`}
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.08) 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          >
            <div
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transformOrigin: 'top center',
                transition: isDragging ? 'none' : 'transform 0.15s ease-out',
              }}
              className="inline-block py-6"
            >
              {renderTreeNode(treeRoot, true)}
            </div>
          </div>

          {/* Bottom instructions footer */}
          <div className="bg-white/80 border-t border-stone-200 px-4 py-2 text-center text-xs text-stone-500 flex items-center justify-between">
            <span>💡 يمكنك سحب المخطط للتنقل، واستخدام أزرار التكبير للتصفح السلس. انقر على أي اسم لعرض تفاصيله.</span>
            <span className="font-semibold text-emerald-800">مشجر آل الحضرمي والجنيد - فرع {targetShortName}</span>
          </div>
        </div>
      )}

      {/* Node Details Modal */}
      {selectedNodeDetails && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedNodeDetails(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-emerald-200 animate-in fade-in zoom-in duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg">{selectedNodeDetails.name}</h3>
                  <div className="text-xs text-stone-500 font-mono">الجيل: {selectedNodeDetails.generation}</div>
                </div>
              </div>
              <button
                onClick={() => setSelectedNodeDetails(null)}
                className="text-stone-400 hover:text-stone-600 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 mt-4 text-sm">
              {selectedNodeDetails.code && (
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-500">رمز التوثيق بالمشجر:</span>
                  <span className="font-mono font-bold text-emerald-700">{selectedNodeDetails.code}</span>
                </div>
              )}

              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-stone-500">حالة العقب:</span>
                <span className="font-semibold">
                  {selectedNodeDetails.noOffspring
                    ? 'لم يعقب'
                    : selectedNodeDetails.children.length > 0
                    ? `له أعقاب موثقة (${selectedNodeDetails.children.length} أبناء)`
                    : 'فرع ممتد'}
                </span>
              </div>

              {selectedNodeDetails.isMartyr && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 text-xs font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-rose-600" />
                  مُسجل في قائمة الشهداء الأبرار بالمشجر التاريخي 🕊️
                </div>
              )}

              {selectedNodeDetails.notes && (
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-700">
                  <span className="font-bold block mb-1">ملاحظات التوثيق:</span>
                  {selectedNodeDetails.notes}
                </div>
              )}

              {selectedNodeDetails.children.length > 0 && (
                <div>
                  <span className="font-bold text-xs text-stone-700 block mb-1.5">الأبناء المسجلون:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedNodeDetails.children.map((c) => (
                      <span
                        key={c.id}
                        className="bg-emerald-50 text-emerald-800 text-xs px-2.5 py-1 rounded-md border border-emerald-200"
                      >
                        {c.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setSelectedNodeDetails(null)}
              className="mt-6 w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold transition text-sm"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
