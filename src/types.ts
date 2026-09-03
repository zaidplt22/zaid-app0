export interface PersonNode {
  id: string;
  name: string;
  fullName?: string;
  title?: string;
  isBranchHead?: boolean;
  branchHeaderTitle?: string;
  hasOffspringNote?: boolean; // "أعقب" / "له أعقاب"
  isMartyr?: boolean; // "شهيد" (Burgundy/Red with 🕊️ / 🌟)
  noOffspring?: boolean; // "لم يعقب" (Yellow, strictly no child nodes)
  notes?: string;
  generation: number;
  parentId?: string;
  children: PersonNode[];
  ancestorChain?: string[];
  documentRefs?: string[];
  historicalEra?: string;
  isCollapsed?: boolean;
}

export interface TreeDocumentation {
  introduction: {
    title: string;
    subtitle: string;
    text: string;
    fullPrefaceText?: string;
    historicalContext: string;
    methodology: string;
    preservationNote: string;
  };
  objectives: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
      icon: string;
    }[];
  };
  sources: {
    id: string;
    title: string;
    type: 'manuscript' | 'deed' | 'registry' | 'oral_archive' | 'book';
    authorOrCustodian: string;
    dateOrCentury: string;
    archiveLocation: string;
    description: string;
    verificationStatus: 'محقق وموثق' | 'مخطوط أصلي' | 'سجل وقفي رسمي' | 'شهادة تواتر';
  }[];
}

export interface DuplicateOccurrence {
  nodeId: string;
  name: string;
  generation: number;
  parentName: string;
  fullPedigree: string;
  branchName: string;
  isMartyr: boolean;
  noOffspring: boolean;
  hasOffspringNote: boolean;
  notes?: string;
}

export interface DuplicateGroup {
  name: string;
  count: number;
  occurrences: DuplicateOccurrence[];
}

export interface TreeStats {
  totalCount: number;
  generationsCount: number;
  branchHeadsCount: number;
  martyrsCount: number;
  noOffspringCount: number;
  hasOffspringNoteCount: number;
  branchesCount: number;
}
