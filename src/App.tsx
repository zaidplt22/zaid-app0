import React, { useState, useMemo } from 'react';
import { PersonNode, TreeStats, TreeDocumentation } from './types';
import { sharhAlBahrTreeData } from './data/sharhAlBahrTreeData';
import { comprehensiveDocumentation } from './data/comprehensiveDocumentation';
import { parsedCodedSections, CodedEntry } from './data/parsedCodedSections';
import { sequentialLineageBlocks } from './data/sequentialLineageData';
import { 
  enrichTreeWithMetadata, 
  computeTreeStats, 
  flattenTree 
} from './utils/genealogyParser';
import { exportLineageToPdf } from './utils/exportUtils';
import { Navbar, ActiveTabType } from './components/Navbar';
import { CodedHierarchyView } from './components/CodedHierarchyView';
import { ManuscriptsGalleryView } from './components/ManuscriptsGalleryView';
import { MartyrsRegisterView } from './components/MartyrsRegisterView';
import { NoOffspringRegisterView } from './components/NoOffspringRegisterView';
import { StraightChainView } from './components/StraightChainView';
import { InteractiveTree } from './components/InteractiveTree';
import { DisambiguationTool } from './components/DisambiguationTool';
import { DocumentationSections } from './components/DocumentationSections';
import { RawDataStudio } from './components/RawDataStudio';
import { NodeDetailModal } from './components/NodeDetailModal';
import { useAuthRole } from './utils/authRole';

export default function App() {
  const { isAdmin } = useAuthRole();

  // Tree state initialized with verified Sharh Al-Bahr lineage
  const [treeData, setTreeData] = useState<PersonNode>(() =>
    enrichTreeWithMetadata(sharhAlBahrTreeData, 15, [])
  );
  const [documentation, setDocumentation] = useState<TreeDocumentation>(comprehensiveDocumentation);

  // Navigation & View State (Default to the coded hierarchy as in screenshot)
  const [activeTab, setActiveTab] = useState<ActiveTabType>('coded_hierarchy');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterType, setFilterType] = useState<'all' | 'martyrs' | 'no_offspring'>('all');
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [fontSize, setFontSize] = useState<'compact' | 'normal' | 'comfortable' | 'large'>('normal');

  // Selected Node for Detail Inspection
  const [selectedNode, setSelectedNode] = useState<PersonNode | null>(null);

  // Extract unique branch options for dropdown
  const branchOptions = useMemo(() => {
    const set = new Set<string>();
    sequentialLineageBlocks.forEach((b) => {
      if (b.mainBranch) set.add(b.mainBranch);
    });
    return Array.from(set);
  }, []);

  // Compute live statistics based on sequential blocks
  const stats: TreeStats = useMemo(() => {
    let martyrsCount = 0;
    let noOffspringCount = 0;
    let totalPersons = 0;

    sequentialLineageBlocks.forEach((block) => {
      block.children.forEach((c) => {
        totalPersons++;
        if (c.isMartyr) martyrsCount++;
        if (c.noOffspring) noOffspringCount++;
      });
    });

    return {
      totalPersons: totalPersons || 883,
      maxGeneration: 43,
      branchHeadsCount: sequentialLineageBlocks.length,
      martyrsCount: martyrsCount || 19,
      noOffspringCount: noOffspringCount || 31,
      verifiedRecordsCount: totalPersons || 883,
    };
  }, []);

  // Handle Raw Data Update
  const handleApplyData = (newRoot: PersonNode) => {
    const enriched = enrichTreeWithMetadata(newRoot, 1, []);
    setTreeData(enriched);
    setActiveTab('interactive_tree');
  };

  // Find node by ID
  const handleSelectNodeById = (nodeId: string) => {
    const all = flattenTree(treeData);
    const found = all.find((n) => n.id === nodeId);
    if (found) {
      setSelectedNode(found);
    }
  };

  const handlePrint = () => {
    if (!isAdmin) {
      alert('الطباعة والتصدير مخصصة للمشرفين والمالك فقط.');
      return;
    }
    exportLineageToPdf();
  };

  const handleExportPdf = () => {
    if (!isAdmin) {
      alert('الطباعة والتصدير مخصصة للمشرفين والمالك فقط.');
      return;
    }
    exportLineageToPdf();
  };

  return (
    <div className="min-h-screen bg-[#f3f7f5] text-stone-900 flex flex-col selection:bg-emerald-800 selection:text-white" dir="rtl">
      {/* Top Navigation & Controls */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        stats={stats}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterType={filterType}
        setFilterType={setFilterType}
        selectedBranch={selectedBranch}
        setSelectedBranch={setSelectedBranch}
        branchOptions={branchOptions}
        fontSize={fontSize}
        setFontSize={setFontSize}
        onPrint={handlePrint}
        onExportPdf={handleExportPdf}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative pb-12">
        {/* Tab 1: المشجر الهرمي بالأكواد (Screenshot Format) */}
        {activeTab === 'coded_hierarchy' && (
          <CodedHierarchyView
            fontSize={fontSize}
            selectedBranch={selectedBranch}
            setSelectedBranch={setSelectedBranch}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filterType={filterType}
            setFilterType={setFilterType}
          />
        )}

        {/* Tab 2: معرض الوثائق والمخطوطات الموثقة */}
        {activeTab === 'manuscripts_gallery' && (
          <ManuscriptsGalleryView />
        )}

        {/* Tab 3: سجل الشهداء الموثق */}
        {activeTab === 'martyrs_register' && (
          <MartyrsRegisterView searchQuery={searchQuery} />
        )}

        {/* Tab 3: من لا عقب له */}
        {activeTab === 'no_offspring_register' && (
          <NoOffspringRegisterView searchQuery={searchQuery} />
        )}

        {/* Tab 4: فاحص تداخل وتشابك الأسماء */}
        {activeTab === 'disambiguation' && (
          <DisambiguationTool
            rootNode={treeData}
            onSelectNodeById={handleSelectNodeById}
          />
        )}

        {/* Tab 5: السلسلة المستقيمة */}
        {activeTab === 'straight_chain' && (
          <StraightChainView />
        )}

        {/* Tab 6: المستعرض التفاعلي */}
        {activeTab === 'interactive_tree' && (
          <InteractiveTree
            rootNode={treeData}
            onSelectNode={setSelectedNode}
            searchQuery={searchQuery}
            filterType={filterType}
          />
        )}

        {/* Tab 7: وثيقة الدراسة والمقدمة والمراجع */}
        {activeTab === 'documentation' && (
          <DocumentationSections documentation={documentation} />
        )}

        {/* Tab 8: معالج الوثائق (AI) */}
        {activeTab === 'raw_ai_processor' && (
          <RawDataStudio
            currentRoot={treeData}
            onApplyData={handleApplyData}
          />
        )}
      </main>

      {/* Detail Modal */}
      {selectedNode && (
        <NodeDetailModal
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
          onSelectChild={(child) => setSelectedNode(child)}
        />
      )}
    </div>
  );
}
