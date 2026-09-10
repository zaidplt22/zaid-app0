import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  GitFork, 
  Search, 
  X, 
  ChevronDown, 
  Check, 
  Users, 
  Sparkles,
  Layers,
  Award
} from 'lucide-react';
import { 
  getBranchOptionItems, 
  extractShortBranchName, 
  BranchOptionItem,
  extractBranchHierarchy 
} from '../utils/branchLineageHelper';
import { normalizeArabicForSearch } from '../utils/genealogyParser';

interface BranchSearchSelectorProps {
  selectedBranch: string;
  setSelectedBranch: (branchId: string) => void;
  mobileMode?: boolean;
  className?: string;
}

export const BranchSearchSelector: React.FC<BranchSearchSelectorProps> = ({
  selectedBranch,
  setSelectedBranch,
  mobileMode = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // All available branch options from the sequential data
  const allBranches = useMemo(() => getBranchOptionItems(), []);

  // Quick prominent ancestors/branches
  const quickMajorBranches = useMemo(() => [
    { label: 'عبد القادر بن عبد الله', query: 'عبد القادر بن عبد الله' },
    { label: 'محسن بن أحمد الجنيد', query: 'محسن بن أحمد الجنيد' },
    { label: 'عمر بن أحمد الجنيد', query: 'عمر بن أحمد الجنيد' },
    { label: 'مهيوب بن سلطان', query: 'مهيوب بن سلطان' },
    { label: 'سعيد بن عبد الله', query: 'سعيد بن عبد الله' },
    { label: 'علي بن عبد الله', query: 'علي بن عبد الله' },
    { label: 'عثمان بن سعيد', query: 'عثمان بن سعيد' },
  ], []);

  // Filtered branches based on search
  const filteredBranches = useMemo(() => {
    const rawQ = searchTerm.trim();
    if (!rawQ) {
      // Return major/early generation branches first, or all
      return allBranches.slice(0, 100);
    }
    const q = normalizeArabicForSearch(rawQ);
    return allBranches.filter((b) => {
      const inName = normalizeArabicForSearch(b.name).includes(q);
      const inFullName = normalizeArabicForSearch(b.fullName).includes(q);
      const inCode = b.fatherCode.toLowerCase().includes(rawQ.toLowerCase());
      const inGen = `الجيل ${b.generation}`.includes(rawQ) || b.generation.toString() === rawQ;
      return inName || inFullName || inCode || inGen;
    });
  }, [allBranches, searchTerm]);

  // Find currently selected branch object
  const currentBranchInfo = useMemo(() => {
    if (selectedBranch === 'all') return null;
    const hierarchy = extractBranchHierarchy(selectedBranch);
    return hierarchy.target;
  }, [selectedBranch]);

  // Handle clicking outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  const handleSelect = (branchId: string) => {
    setSelectedBranch(branchId);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleQuickSelect = (query: string) => {
    const matched = allBranches.find((b) => b.fullName.includes(query) || b.name.includes(query));
    if (matched) {
      handleSelect(matched.id);
    } else {
      setSearchTerm(query);
    }
  };

  const currentDisplayName = currentBranchInfo 
    ? extractShortBranchName(currentBranchInfo.fatherName)
    : 'كل الفروع والأنساب';

  return (
    <div ref={containerRef} className={`relative font-cairo ${className} ${mobileMode ? 'w-full' : ''}`}>
      {/* Trigger Button */}
      <div className={`flex items-center gap-1.5 ${mobileMode ? 'w-full' : ''}`}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={
            mobileMode
              ? `w-full flex items-center justify-between gap-1.5 px-2.5 py-2 rounded-xl text-xs font-bold transition shadow-xs cursor-pointer border ${
                  selectedBranch !== 'all'
                    ? 'bg-[#064e3b] text-emerald-100 border-emerald-400 hover:bg-[#075e47]'
                    : 'bg-[#021812] text-stone-300 border-[#0d4f3d] hover:bg-[#07382c]'
                }`
              : `flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer border ${
                  selectedBranch !== 'all'
                    ? 'bg-[#064e3b] text-emerald-100 border-emerald-400 hover:bg-[#075e47]'
                    : 'bg-[#021812] text-emerald-300 border-[#0d4f3d] hover:bg-[#07382c]'
                }`
          }
          title={mobileMode ? "البحث عن فرع معين أو نسب معين" : "تصفية واستعراض الفروع والأنساب"}
        >
          {mobileMode ? (
            <>
              <div className="flex items-center gap-1.5 min-w-0">
                <GitFork className={`w-3.5 h-3.5 shrink-0 ${selectedBranch !== 'all' ? 'text-amber-400' : 'text-emerald-400'}`} />
                <span className="truncate text-right">
                  {selectedBranch !== 'all' ? `فرع: ${currentDisplayName}` : 'البحث عن فرع معين أو نسب معين'}
                </span>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 text-stone-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </>
          ) : (
            <>
              <GitFork className="w-4 h-4 text-emerald-400" />
              <span className="text-stone-400 font-normal">الفرع:</span>
              <span className="truncate max-w-[140px] sm:max-w-[200px] text-white font-bold">
                {selectedBranch !== 'all' ? `فرع: ${currentDisplayName}` : 'كل الفروع والأنساب'}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </>
          )}
        </button>

        {/* Quick Clear Button if branch is selected */}
        {selectedBranch !== 'all' && (
          <button
            type="button"
            onClick={() => handleSelect('all')}
            className="p-1.5 rounded-lg bg-stone-800/90 hover:bg-stone-700 text-stone-300 hover:text-white transition shrink-0 border border-stone-600/40"
            title="إلغاء التحديد وعرض كل الفروع"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Popover / Dropdown Menu */}
      {isOpen && (
        <div className={`absolute top-full mt-2 w-[92vw] sm:w-[420px] max-w-[95vw] bg-[#031d16] border border-[#0d5945] rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col text-stone-100 animate-in fade-in zoom-in-95 duration-150 ${
          mobileMode ? 'left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-0' : 'right-0 sm:left-auto'
        }`}>
          {/* Header */}
          <div className="p-3 border-b border-[#0b4838] bg-[#021812] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-white">مستكشف الفروع والأنساب التفاعلي</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-stone-400 hover:text-white rounded-md transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-2.5 bg-[#03221a] border-b border-[#0b4838]">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث بالاسم، الجد، أو الكود (مثال: عبد القادر بن عبد الله)..."
                className="w-full bg-[#021812] border border-[#0d5945] rounded-xl pl-3 pr-9 py-2 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-emerald-400"
              />
              <Search className="w-4 h-4 text-emerald-400 absolute right-3 top-2.5 pointer-events-none" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute left-2.5 top-2.5 text-stone-400 hover:text-white text-xs bg-stone-800 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Chips for famous/major branches */}
            <div className="mt-2 flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] text-stone-400">فروع بارزة:</span>
              {quickMajorBranches.map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => handleQuickSelect(chip.query)}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-[#0a382b] hover:bg-emerald-700 text-emerald-200 border border-emerald-600/30 transition cursor-pointer"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          {/* List of Branches */}
          <div className="max-h-[320px] overflow-y-auto p-1.5 space-y-1 divide-y divide-[#0a3a2d]/50">
            {/* "All Branches" Option */}
            <button
              type="button"
              onClick={() => handleSelect('all')}
              className={`w-full text-right p-2.5 rounded-xl flex items-center justify-between transition cursor-pointer ${
                selectedBranch === 'all'
                  ? 'bg-[#064e3b] text-white font-bold border border-emerald-500'
                  : 'hover:bg-[#062d22] text-stone-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-xs font-bold">كل الفروع والأنساب (المشجر كاملاً)</div>
                  <div className="text-[10px] text-stone-400">عرض كتاب شجرة شارح البحر بالكامل وتتابع الأجيال</div>
                </div>
              </div>
              {selectedBranch === 'all' && <Check className="w-4 h-4 text-emerald-400" />}
            </button>

            {/* Filtered Branch Items */}
            {filteredBranches.length === 0 ? (
              <div className="p-6 text-center text-xs text-stone-400 space-y-1">
                <p>لا توجد فروع مطابقة لعبارة البحث الحالية</p>
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="text-emerald-400 underline text-[11px]"
                >
                  مسح البحث وعرض كل الفروع
                </button>
              </div>
            ) : (
              filteredBranches.map((branch) => {
                const isSelected = selectedBranch === branch.id;
                return (
                  <button
                    key={branch.id}
                    type="button"
                    onClick={() => handleSelect(branch.id)}
                    className={`w-full text-right p-2.5 rounded-xl flex items-start justify-between gap-2 transition cursor-pointer ${
                      isSelected
                        ? 'bg-[#064e3b] text-white font-bold border border-emerald-500'
                        : 'hover:bg-[#062d22] text-stone-200'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-white">
                          {branch.name}
                        </span>
                        {branch.fatherCode && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#094132] text-emerald-300 font-mono">
                            {branch.fatherCode}
                          </span>
                        )}
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-stone-800 text-stone-300">
                          الجيل {branch.generation}
                        </span>
                      </div>
                      <div className="text-[11px] text-stone-400 truncate mt-0.5">
                        {branch.fullName}
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-emerald-300/80 mt-1">
                        {branch.childrenCount > 0 && (
                          <span>الأبناء المباشرون: {branch.childrenCount}</span>
                        )}
                        {branch.descendantsCount > 0 && (
                          <span>أعقاب الفرع الموثقة: {branch.descendantsCount} كتلة</span>
                        )}
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />}
                  </button>
                );
              })
            )}
          </div>

          {/* Footer note */}
          <div className="p-2 bg-[#021812] border-t border-[#0b4838] text-[10px] text-stone-400 text-center">
            اختيار أي فرع يستعرض سلسلة نسبه الشريفة وصولاً إلى شارح البحر، مع كافة أعقابه الموثقة وزر تحميل PDF مخصص له
          </div>
        </div>
      )}
    </div>
  );
};
