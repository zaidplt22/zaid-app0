import React, { useState, useRef, useEffect } from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Maximize2, 
  ChevronDown, 
  ChevronUp, 
  Info, 
  Award, 
  Sparkles, 
  Layers, 
  Filter, 
  Compass,
  ArrowDown
} from 'lucide-react';
import { PersonNode } from '../types';
import { normalizeArabic } from '../utils/genealogyParser';

interface InteractiveTreeProps {
  rootNode: PersonNode;
  onSelectNode: (node: PersonNode) => void;
  searchQuery: string;
  filterType: 'all' | 'martyrs' | 'no_offspring' | 'branch_heads';
}

export const InteractiveTree: React.FC<InteractiveTreeProps> = ({
  rootNode,
  onSelectNode,
  searchQuery,
  filterType,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<number>(0.95);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 30 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [collapsedNodes, setCollapsedNodes] = useState<Set<string>>(new Set());
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  // Toggle collapse
  const toggleCollapse = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsedNodes((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.15, 2.2));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.15, 0.4));
  const handleReset = () => {
    setZoom(0.95);
    setPan({ x: 0, y: 30 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only drag on canvas background
    if ((e.target as HTMLElement).closest('.tree-node-card')) return;
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

  const handleMouseUp = () => setIsDragging(false);

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 0.05 : -0.05;
    setZoom((z) => Math.min(Math.max(z + zoomFactor, 0.4), 2.2));
  };

  // Node matching search / filter
  const isNodeHighlighted = (node: PersonNode): boolean => {
    if (searchQuery.trim()) {
      const normalizedQuery = normalizeArabic(searchQuery);
      const normalizedName = normalizeArabic(node.name);
      const normalizedFullName = normalizeArabic(node.fullName || '');
      const normalizedNotes = normalizeArabic(node.notes || '');
      if (
        normalizedName.includes(normalizedQuery) ||
        normalizedFullName.includes(normalizedQuery) ||
        normalizedNotes.includes(normalizedQuery)
      ) {
        return true;
      }
    }

    if (filterType === 'martyrs' && node.isMartyr) return true;
    if (filterType === 'no_offspring' && node.noOffspring) return true;
    if (filterType === 'branch_heads' && node.isBranchHead) return true;

    return false;
  };

  // Recursive Tree Node Renderer
  const renderTreeNode = (node: PersonNode, level: number = 1): React.ReactNode => {
    const isCollapsed = collapsedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;
    const isHighlighted = isNodeHighlighted(node);
    const isSelected = selectedNodeId === node.id;

    // Determine visual styling based on strict rules:
    // 1. Martyrs in Burgundy/Red with 🕊️/🌟 badge
    // 2. No offspring in Yellow
    // 3. Branch heads with prominent Sub-header styling
    let cardClasses = 'bg-stone-900 border-amber-900/60 text-stone-100 hover:border-amber-500';
    let badgeText = null;
    let badgeBg = '';

    if (node.isMartyr) {
      // Burgundy / Deep Red for Martyr
      cardClasses =
        'bg-gradient-to-b from-rose-950 via-rose-900 to-rose-950 border-rose-600 text-rose-50 shadow-lg shadow-rose-950/60 ring-2 ring-rose-500/50';
      badgeText = 'شهيد 🕊️';
      badgeBg = 'bg-rose-900 text-rose-200 border border-rose-500/60';
    } else if (node.noOffspring) {
      // Yellow for No Offspring (لم يعقب)
      cardClasses =
        'bg-gradient-to-b from-yellow-950/90 via-stone-900 to-yellow-950/90 border-yellow-500 text-yellow-100 shadow-md shadow-yellow-950/40 ring-1 ring-yellow-400/40';
      badgeText = 'لم يعقب 🚫';
      badgeBg = 'bg-yellow-900/80 text-yellow-200 border border-yellow-500/50';
    } else if (node.isBranchHead) {
      // Sub-header / Branch Head styling
      cardClasses =
        'bg-gradient-to-b from-stone-900 via-amber-950/40 to-stone-900 border-amber-500/90 text-amber-50 shadow-xl shadow-amber-950/50 ring-1 ring-amber-500/40';
      if (level === 1) {
        badgeText = 'الأصل والجد الجامع 👑';
        badgeBg = 'bg-amber-900 text-amber-200 border border-amber-400/60';
      } else {
        badgeText = 'رأس فرع (أعقب)';
        badgeBg = 'bg-amber-950 text-amber-300 border border-amber-600/40';
      }
    } else if (node.hasOffspringNote) {
      badgeText = 'أعقب (له ذرية)';
      badgeBg = 'bg-emerald-950 text-emerald-300 border border-emerald-600/40';
    }

    return (
      <div key={node.id} className="flex flex-col items-center relative py-2">
        {/* Node Sub-header Banner if designated */}
        {node.isBranchHead && node.branchHeaderTitle && level > 1 && (
          <div className="mb-2 px-3 py-1 bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 border border-amber-600/50 rounded-full shadow-md text-xs font-scheherazade text-amber-300 flex items-center gap-1.5 z-10">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="font-bold">{node.branchHeaderTitle}</span>
          </div>
        )}

        {/* Node Card */}
        <div
          id={`node-${node.id}`}
          onClick={() => {
            setSelectedNodeId(node.id);
            onSelectNode(node);
          }}
          className={`tree-node-card group relative cursor-pointer px-4 py-3 rounded-xl border transition-all duration-200 flex flex-col items-center text-center w-52 sm:w-56 shadow-md select-none ${cardClasses} ${
            isHighlighted ? 'scale-105 ring-4 ring-amber-400 shadow-amber-500/50 z-20' : ''
          } ${isSelected ? 'ring-2 ring-cyan-400' : ''}`}
        >
          {/* Status Badge */}
          {badgeText && (
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium mb-1.5 flex items-center gap-1 ${badgeBg}`}>
              {badgeText}
            </span>
          )}

          {/* Person Name with Calligraphic Styling */}
          <div className="font-bold text-base sm:text-lg font-scheherazade leading-tight tracking-wide text-amber-100 group-hover:text-amber-300 transition">
            {node.name}
          </div>

          {/* Secondary Subtitle / Generation Tag */}
          <div className="text-[11px] text-stone-400 mt-1 flex items-center gap-1">
            <span>الجيل {node.generation}</span>
            {node.title && (
              <>
                <span>•</span>
                <span className="text-amber-400/90">{node.title}</span>
              </>
            )}
          </div>

          {/* Quick Note Excerpt */}
          {node.notes && (
            <p className="text-[10px] text-stone-400/90 mt-1 line-clamp-1 italic font-sans max-w-full px-1">
              {node.notes}
            </p>
          )}

          {/* Action indicator: Click for info */}
          <div className="mt-2 text-[10px] text-stone-500 flex items-center justify-between w-full pt-1 border-t border-stone-800/80">
            <span className="flex items-center gap-0.5 text-stone-400 group-hover:text-amber-300">
              <Info className="w-3 h-3" /> التفاصيل
            </span>
            {hasChildren && (
              <span className="text-stone-400 font-mono text-[10px]">
                {node.children.length} {node.children.length === 1 ? 'ابن' : 'أبناء'}
              </span>
            )}
          </div>

          {/* Collapse/Expand Child Branches Button */}
          {hasChildren && (
            <button
              onClick={(e) => toggleCollapse(node.id, e)}
              className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-stone-950 border border-amber-600/70 text-amber-300 flex items-center justify-center hover:bg-amber-900 hover:text-white transition shadow-md z-20"
              title={isCollapsed ? 'فتح تفرعات هذا الفرع' : 'طي تفرعات هذا الفرع'}
            >
              {isCollapsed ? (
                <span className="text-xs font-mono font-bold">+{node.children.length}</span>
              ) : (
                <ChevronUp className="w-3.5 h-3.5" />
              )}
            </button>
          )}
        </div>

        {/* Children Sub-tree with Vertical Connectors */}
        {hasChildren && !isCollapsed && (
          <div className="flex flex-col items-center w-full mt-5">
            {/* Main vertical connector down from parent */}
            <div className="w-0.5 h-6 bg-gradient-to-b from-amber-600/90 to-amber-700/60"></div>

            {/* Horizontal branch bar linking all siblings */}
            <div className="flex items-start justify-center relative w-full pt-4">
              {/* Horizontal Connecting Line */}
              {node.children.length > 1 && (
                <div
                  className="absolute top-0 h-0.5 bg-amber-700/60"
                  style={{
                    left: `calc(${100 / (node.children.length * 2)}%)`,
                    right: `calc(${100 / (node.children.length * 2)}%)`,
                  }}
                ></div>
              )}

              {/* Sibling Columns */}
              {node.children.map((child, idx) => (
                <div key={child.id} className="flex flex-col items-center px-3 sm:px-5 relative">
                  {/* Vertical connector down from horizontal line to child */}
                  <div className="w-0.5 h-4 bg-amber-700/60 absolute top-0 -mt-4"></div>
                  {renderTreeNode(child, level + 1)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full h-[calc(100vh-135px)] bg-stone-950 overflow-hidden flex flex-col select-none bg-parchment-pattern">
      {/* Legend & Controller Top Overlay */}
      <div className="absolute top-4 right-4 z-30 flex flex-wrap items-center gap-2 bg-stone-900/95 backdrop-blur-md p-2 rounded-xl border border-stone-800 shadow-xl">
        <div className="flex items-center gap-3 text-xs px-2 text-stone-300 border-l border-stone-700 pl-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-800 border border-rose-500"></span>
            <span className="font-medium text-rose-200">شهيد (🕊️ قرمزي)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-yellow-600 border border-yellow-400"></span>
            <span className="font-medium text-yellow-200">لم يعقب (🚫 أصفر)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-amber-700 border border-amber-400"></span>
            <span className="font-medium text-amber-200">رأس فرع (أعقب)</span>
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleZoomIn}
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition"
            title="تكبير (Zoom In)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition"
            title="تصغير (Zoom Out)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition"
            title="إعادة ضبط الرؤية"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-mono text-stone-400 px-1">
            {Math.round(zoom * 100)}%
          </span>
        </div>
      </div>

      {/* Generation Level Indicator Guide on the Left */}
      <div className="hidden lg:flex flex-col gap-8 absolute right-4 top-24 z-20 pointer-events-none opacity-40 hover:opacity-100 transition duration-300">
        <div className="bg-stone-900/90 text-stone-400 border border-stone-800 px-3 py-1 rounded-lg text-xs font-cairo">
          الجيل الأول (الجد الجامع)
        </div>
        <div className="bg-stone-900/90 text-stone-400 border border-stone-800 px-3 py-1 rounded-lg text-xs font-cairo">
          الجيل الثاني (رؤوس الفروع)
        </div>
        <div className="bg-stone-900/90 text-stone-400 border border-stone-800 px-3 py-1 rounded-lg text-xs font-cairo">
          الجيل الثالث (الأبناء)
        </div>
        <div className="bg-stone-900/90 text-stone-400 border border-stone-800 px-3 py-1 rounded-lg text-xs font-cairo">
          الجيل الرابع (الأحفاد)
        </div>
      </div>

      {/* Canvas Area with Drag and Zoom */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        className={`w-full flex-1 overflow-auto flex items-start justify-center cursor-grab active:cursor-grabbing p-10 ${
          isDragging ? 'cursor-grabbing' : ''
        }`}
      >
        <div
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: 'top center',
            transition: isDragging ? 'none' : 'transform 0.15s ease-out',
          }}
          className="min-w-max flex flex-col items-center"
        >
          {renderTreeNode(rootNode, 1)}
        </div>
      </div>

      {/* Footer helper hint */}
      <div className="bg-stone-950/90 border-t border-stone-800/80 px-4 py-2 text-xs text-stone-400 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-amber-500" />
          <span>اسحب للتنقل في المشجر • استخدم عجلة الفأرة للتكبير والتصغير • انقر على أي شخص لمعرفة نسبه الكامل وملاحظاته التوثيقية</span>
        </div>
        <div className="text-[11px] text-stone-500 font-mono">
          Traditional Islamic Genealogical Tree Visualizer
        </div>
      </div>
    </div>
  );
};
