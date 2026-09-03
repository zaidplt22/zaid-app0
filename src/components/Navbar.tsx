import React, { useState } from 'react';
import { 
  GitFork, 
  Search, 
  Layers, 
  ShieldAlert, 
  Sparkles, 
  BookOpen, 
  ScrollText, 
  Copy, 
  FileSpreadsheet, 
  Printer, 
  CheckCircle2, 
  Flame, 
  Ban,
  Database,
  Download,
  Share2,
  FileText,
  UserCheck,
  Eye,
  Link,
  Award,
  ChevronDown,
  Smartphone,
  Lock,
  Unlock,
  KeyRound,
  X
} from 'lucide-react';
import { TreeStats } from '../types';
import { OfflineAppModal } from './OfflineAppModal';
import { BranchSearchSelector } from './BranchSearchSelector';
import { extractBranchHierarchy } from '../utils/branchLineageHelper';
import { exportBranchLineageToPdf, exportBranchTreeDiagramToPdf } from '../utils/exportUtils';
import { useAuthRole } from '../utils/authRole';

export type ActiveTabType = 
  | 'coded_hierarchy'
  | 'manuscripts_gallery'
  | 'martyrs_register'
  | 'no_offspring_register'
  | 'disambiguation'
  | 'straight_chain'
  | 'interactive_tree'
  | 'documentation'
  | 'raw_ai_processor';

interface NavbarProps {
  activeTab: ActiveTabType;
  setActiveTab: (tab: ActiveTabType) => void;
  stats: TreeStats;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterType: 'all' | 'martyrs' | 'no_offspring';
  setFilterType: (filter: 'all' | 'martyrs' | 'no_offspring') => void;
  selectedBranch: string;
  setSelectedBranch: (branch: string) => void;
  branchOptions: string[];
  fontSize: 'compact' | 'normal' | 'comfortable' | 'large';
  setFontSize: (size: 'compact' | 'normal' | 'comfortable' | 'large') => void;
  onPrint: () => void;
  onExportPdf: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  stats,
  searchQuery,
  setSearchQuery,
  filterType,
  setFilterType,
  selectedBranch,
  setSelectedBranch,
  branchOptions,
  fontSize,
  setFontSize,
  onPrint,
  onExportPdf,
}) => {
  const { isAdmin, authenticateWithPin, lockToVisitor } = useAuthRole();
  const [showOfflineModal, setShowOfflineModal] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');

  const handleDownloadApk = (e: React.MouseEvent) => {
    // 1. Trigger direct download for geneology-app.apk
    const link = document.createElement('a');
    link.href = '/geneology-app.apk';
    link.download = 'geneology-app.apk';
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Open offline app options and installation modal
    setShowOfflineModal(true);
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authenticateWithPin(pinInput)) {
      setShowPinModal(false);
      setPinInput('');
      setPinError('');
    } else {
      setPinError('رمز المرور غير صحيح. حاول مجدداً.');
    }
  };

  return (
    <>
      <OfflineAppModal isOpen={showOfflineModal} onClose={() => setShowOfflineModal(false)} />

      {/* Admin Authentication PIN Modal */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs" dir="rtl">
          <div className="bg-[#1c1917] border-2 border-emerald-600/80 rounded-2xl max-w-sm w-full p-6 shadow-2xl relative text-stone-100">
            <button
              onClick={() => {
                setShowPinModal(false);
                setPinError('');
                setPinInput('');
              }}
              className="absolute top-4 left-4 p-1.5 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 transition"
              aria-label="إغلاق"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 mb-4 text-emerald-400">
              <KeyRound className="w-6 h-6" />
              <h3 className="font-bold font-cairo text-base text-white">تسجيل دخول المشرف / المالك</h3>
            </div>

            <p className="text-xs text-stone-300 mb-4 leading-relaxed">
              يرجى إدخال رمز المرور السري الخاص بالمشرف لإلغاء قفل خيارات التحميل والطباعة.
            </p>

            <form onSubmit={handlePinSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    setPinError('');
                  }}
                  placeholder="أدخل رمز المرور..."
                  autoFocus
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-center text-lg tracking-widest focus:outline-hidden focus:border-emerald-500"
                />
                {pinError && (
                  <p className="text-rose-400 text-xs mt-1.5 text-center font-medium">{pinError}</p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-sm cursor-pointer"
                >
                  تأكيد الدخول
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPinModal(false);
                    setPinError('');
                    setPinInput('');
                  }}
                  className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-medium transition cursor-pointer"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <header id="app-header" className="sticky top-0 z-50 bg-[#04281f] text-white border-b border-[#0d4f3e] shadow-lg font-cairo">
        {/* Top Banner (As in Screenshot 1) */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Brand Title and Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#094d3c] flex items-center justify-center text-emerald-300 border border-emerald-500/30 shadow-xs">
              <ScrollText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#0a4637] text-emerald-300 border border-emerald-600/40 font-semibold">
                  آل الجنيد • آل البركاني • آل السروري
                </span>
                <h1 className="text-base sm:text-xl font-bold font-scheherazade text-white">
                  وثيقة أعقاب شارح البحر
                </h1>
              </div>
              <p className="text-[11px] text-emerald-200/80 mt-0.5 hidden sm:block">
                تحقيق الأنساب الشريفة وسجلات الشهداء والمراجع التاريخية والنسب الشريف المتصل
              </p>
            </div>
          </div>

          {/* Action Buttons & Role Status */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {/* Admin Controls & Status */}
            {isAdmin ? (
              <div className="flex items-center gap-1.5 bg-emerald-900/70 border border-emerald-500/50 text-emerald-200 text-xs px-2.5 py-1 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-semibold hidden md:inline">وضع المشرف (صلاحيات كاملة)</span>
                <button
                  type="button"
                  onClick={() => lockToVisitor()}
                  className="text-[10px] bg-emerald-800 hover:bg-emerald-700 text-stone-100 px-2 py-0.5 rounded transition cursor-pointer"
                  title="التحويل لوضع الزائر لتجربة حماية المستند ومنع التصدير"
                >
                  معاينة كزائر
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowPinModal(true)}
                className="p-1.5 rounded-lg bg-[#0a4637]/60 hover:bg-[#0e5c49] text-emerald-300/80 hover:text-emerald-200 border border-emerald-700/30 transition cursor-pointer"
                title="تسجيل دخول المشرف / المالك"
              >
                <Lock className="w-4 h-4" />
              </button>
            )}

            {/* Gated Admin Download/Export Buttons (Strictly hidden for public visitors) */}
            {isAdmin && (
              <>
                <button
                  onClick={handleDownloadApk}
                  id="download-android-apk-btn"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-sm border border-emerald-400/50 cursor-pointer"
                  title="تحميل تطبيق الأندرويد أو نسخة الأوفلاين الشاملة"
                >
                  <Smartphone className="w-3.5 h-3.5 text-emerald-100" />
                  <span className="whitespace-nowrap">تحميل التطبيق (Android APK)</span>
                </button>

                <button
                  onClick={onExportPdf}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f59e0b] hover:bg-[#d97706] text-stone-950 text-xs font-bold transition shadow-xs cursor-pointer"
                  title="تصدير بصيغة PDF"
                >
                  <FileText className="w-3.5 h-3.5 text-stone-950" />
                  <span>PDF</span>
                </button>

                <button
                  onClick={() => {
                    import('../utils/exportUtils').then(m => m.exportLineageToDoc());
                  }}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xs font-bold transition shadow-xs cursor-pointer"
                  title="تصدير بصيغة Word (Docx/Doc)"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-white" />
                  <span>Word</span>
                </button>

                <button
                  onClick={() => {
                    import('../utils/exportUtils').then(m => m.exportLineageToTxt());
                  }}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#10b981] hover:bg-[#059669] text-white text-xs font-bold transition shadow-xs cursor-pointer"
                  title="تصدير نص كامل TXT"
                >
                  <Download className="w-3.5 h-3.5 text-white" />
                  <span>TXT</span>
                </button>

                <button
                  onClick={onPrint}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#d97706]/90 hover:bg-[#b45309] text-stone-950 text-xs font-bold transition shadow-xs cursor-pointer"
                  title="طباعة المشجر"
                >
                  <Printer className="w-3.5 h-3.5 text-stone-950" />
                  <span className="hidden sm:inline">طباعة</span>
                </button>
              </>
            )}

            {/* Share Button (Publicly accessible) */}
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'وثيقة أعقاب شارح البحر',
                    url: window.location.href,
                  }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('تم نسخ رابط المشجر بنجاح!');
                }
              }}
              className="p-1.5 rounded-lg bg-[#0a4637] hover:bg-[#0e5c49] text-emerald-200 border border-emerald-600/30 transition cursor-pointer"
              title="مشاركة المشجر"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

      {/* Main Tabs Navigation (As in Screenshot 2) */}
      <div className="bg-[#053227] border-t border-[#0e5442] px-3 sm:px-6 py-1.5">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-1 text-xs">
          {/* Tab 1: المشجر الهرمي بالأكواد */}
          <button
            onClick={() => setActiveTab('coded_hierarchy')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold whitespace-nowrap transition ${
              activeTab === 'coded_hierarchy'
                ? 'bg-[#021f17] text-emerald-300 border border-emerald-500 shadow-xs'
                : 'text-stone-300 hover:text-white hover:bg-[#0a4436]'
            }`}
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>المشجر الهرمي بالأكواد</span>
          </button>

          {/* Tab 2: الوثائق والمخطوطات الموثقة */}
          <button
            onClick={() => setActiveTab('manuscripts_gallery')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold whitespace-nowrap transition ${
              activeTab === 'manuscripts_gallery'
                ? 'bg-[#021f17] text-amber-300 border border-amber-500 shadow-xs'
                : 'text-amber-200/90 hover:text-amber-100 hover:bg-[#0a4436]'
            }`}
          >
            <ScrollText className="w-4 h-4 text-amber-400" />
            <span>الوثائق والمخطوطات الموثقة</span>
          </button>

          {/* Tab 2: سجل الشهداء الموثق */}
          <button
            onClick={() => setActiveTab('martyrs_register')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold whitespace-nowrap transition ${
              activeTab === 'martyrs_register'
                ? 'bg-rose-950 text-rose-200 border border-rose-600 shadow-xs'
                : 'text-rose-300 hover:text-rose-100 hover:bg-rose-950/40 border border-rose-900/40'
            }`}
          >
            <Award className="w-4 h-4 text-rose-400" />
            <span>سجل الشهداء الموثق ({stats.martyrsCount || 24})</span>
          </button>

          {/* Tab 3: من لا عقب له */}
          <button
            onClick={() => setActiveTab('no_offspring_register')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold whitespace-nowrap transition ${
              activeTab === 'no_offspring_register'
                ? 'bg-amber-950 text-amber-200 border border-amber-500 shadow-xs'
                : 'text-amber-300 hover:text-amber-100 hover:bg-amber-950/40 border border-amber-900/40'
            }`}
          >
            <Ban className="w-4 h-4 text-amber-400" />
            <span>من لا عقب له ({stats.noOffspringCount || 36})</span>
          </button>

          {/* Tab 4: فاحص تداخل وتشابك الأسماء */}
          <button
            onClick={() => setActiveTab('disambiguation')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold whitespace-nowrap transition ${
              activeTab === 'disambiguation'
                ? 'bg-[#021f17] text-emerald-300 border border-emerald-500 shadow-xs'
                : 'text-stone-300 hover:text-white hover:bg-[#0a4436]'
            }`}
          >
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>فاحص تداخل وتشابك الأسماء</span>
          </button>

          {/* Tab 5: السلسلة المستقيمة */}
          <button
            onClick={() => setActiveTab('straight_chain')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold whitespace-nowrap transition ${
              activeTab === 'straight_chain'
                ? 'bg-[#021f17] text-emerald-300 border border-emerald-500 shadow-xs'
                : 'text-stone-300 hover:text-white hover:bg-[#0a4436]'
            }`}
          >
            <Link className="w-4 h-4 text-emerald-400" />
            <span>السلسلة المستقيمة</span>
          </button>

          {/* Tab 6: المستعرض التفاعلي */}
          <button
            onClick={() => setActiveTab('interactive_tree')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold whitespace-nowrap transition ${
              activeTab === 'interactive_tree'
                ? 'bg-[#021f17] text-emerald-300 border border-emerald-500 shadow-xs'
                : 'text-stone-300 hover:text-white hover:bg-[#0a4436]'
            }`}
          >
            <Eye className="w-4 h-4 text-emerald-400" />
            <span>المستعرض التفاعلي</span>
          </button>

          {/* Tab 7: وثيقة الدراسة والمقدمة والمراجع */}
          <button
            onClick={() => setActiveTab('documentation')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold whitespace-nowrap transition ${
              activeTab === 'documentation'
                ? 'bg-[#021f17] text-emerald-300 border border-emerald-500 shadow-xs'
                : 'text-stone-300 hover:text-white hover:bg-[#0a4436]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>وثيقة الدراسة والمقدمة والمراجع (8)</span>
          </button>

          {/* Tab 8: معالج الوثائق (AI) */}
          <button
            onClick={() => setActiveTab('raw_ai_processor')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold whitespace-nowrap transition ${
              activeTab === 'raw_ai_processor'
                ? 'bg-amber-600 text-white border border-amber-400 shadow-xs'
                : 'text-amber-300 hover:text-white hover:bg-amber-900/40 border border-amber-700/30'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>معالج الوثائق (AI)</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar Row (As in Screenshot 2) */}
      <div className="bg-[#03221a] border-t border-[#093d30] px-3 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto space-y-2">
          {/* Search Input Box */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="بحث سريع في الشجرة..."
              className="w-full bg-[#021812] border border-[#0e5c46] rounded-xl pl-4 pr-10 py-2 text-xs sm:text-sm text-stone-100 placeholder-stone-400 focus:outline-none focus:border-emerald-400 shadow-inner"
            />
            <Search className="w-4 h-4 text-emerald-400 absolute right-3.5 top-3 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-3 top-2.5 text-stone-400 hover:text-white text-xs bg-stone-800 rounded-full w-5 h-5 flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sub-Filters Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Branch Selector & Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Interactive Branch Search & Selector */}
              <BranchSearchSelector
                selectedBranch={selectedBranch}
                setSelectedBranch={setSelectedBranch}
              />

              {/* Dedicated Branch PDF Export Buttons (Visible only to Admin/Owner when a branch is selected) */}
              {isAdmin && selectedBranch !== 'all' && (
                <>
                  <button
                    type="button"
                    id="navbar-branch-pdf-btn"
                    onClick={() => {
                      const hierarchy = extractBranchHierarchy(selectedBranch);
                      exportBranchLineageToPdf(hierarchy);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 text-xs font-bold transition shadow-xs cursor-pointer border border-amber-400"
                    title="تحميل مستند PDF تسلسل هرمي لهذا الفرع"
                  >
                    <Download className="w-3.5 h-3.5 text-stone-950" />
                    <span>تحميل PDF (تسلسل هرمي)</span>
                  </button>

                  <button
                    type="button"
                    id="navbar-branch-tree-pdf-btn"
                    onClick={() => {
                      const hierarchy = extractBranchHierarchy(selectedBranch);
                      exportBranchTreeDiagramToPdf(hierarchy);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-stone-950 text-xs font-bold transition shadow-xs cursor-pointer border border-emerald-400"
                    title="تحميل مستند PDF مخطط شجري تفاعلي لهذا الفرع"
                  >
                    <Download className="w-3.5 h-3.5 text-stone-950" />
                    <span>تحميل PDF (مخطط شجري تفاعلي)</span>
                  </button>
                </>
              )}

              {/* Status Filter Buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-3 py-1 rounded-lg font-bold transition ${
                    filterType === 'all'
                      ? 'bg-stone-900 text-white border border-stone-600 shadow-xs'
                      : 'bg-[#021812] text-stone-300 hover:bg-[#07382c] border border-transparent'
                  }`}
                >
                  الكل
                </button>

                <button
                  onClick={() => setFilterType('martyrs')}
                  className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1 transition ${
                    filterType === 'martyrs'
                      ? 'bg-rose-950 text-rose-200 border border-rose-500 shadow-xs'
                      : 'bg-rose-950/40 text-rose-300 hover:bg-rose-900/60 border border-rose-800/40'
                  }`}
                >
                  <span>🕊️</span>
                  <span>الشهداء فقط</span>
                </button>

                <button
                  onClick={() => setFilterType('no_offspring')}
                  className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1 transition ${
                    filterType === 'no_offspring'
                      ? 'bg-amber-950 text-amber-200 border border-amber-500 shadow-xs'
                      : 'bg-amber-950/40 text-amber-300 hover:bg-amber-900/60 border border-amber-800/40'
                  }`}
                >
                  <span>🚫</span>
                  <span>من لا عقب له (×)</span>
                </button>
              </div>
            </div>

            {/* Font Size Selector */}
            <div className="flex items-center gap-1 bg-[#021812] border border-[#0d4f3d] rounded-lg p-0.5">
              <span className="text-stone-400 px-2">حجم النص:</span>
              <button
                onClick={() => setFontSize('compact')}
                className={`px-2 py-0.5 rounded text-[11px] transition ${
                  fontSize === 'compact' ? 'bg-emerald-800 text-white font-bold' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                مدمج (صغير)
              </button>
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-0.5 rounded text-[11px] transition ${
                  fontSize === 'normal' ? 'bg-emerald-800 text-white font-bold' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                متناسق
              </button>
              <button
                onClick={() => setFontSize('comfortable')}
                className={`px-2 py-0.5 rounded text-[11px] transition ${
                  fontSize === 'comfortable' ? 'bg-emerald-800 text-white font-bold' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                مريح
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-0.5 rounded text-[11px] transition ${
                  fontSize === 'large' ? 'bg-emerald-800 text-white font-bold' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                كبير
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};
