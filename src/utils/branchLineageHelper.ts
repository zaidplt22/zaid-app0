import { sequentialLineageBlocks, SequentialBranchBlock } from '../data/sequentialLineageData';

export interface BranchOptionItem {
  id: string;
  name: string;
  fullName: string;
  fatherCode: string;
  generation: number;
  childrenCount: number;
  descendantsCount: number;
  mainBranch: string;
}

export interface BranchHierarchyResult {
  ancestors: SequentialBranchBlock[];
  target: SequentialBranchBlock | null;
  descendants: SequentialBranchBlock[];
  allBlocks: SequentialBranchBlock[];
  branchTitle: string;
  targetShortName: string;
}

/**
 * Clean and extract a readable short name from a full patronymic string.
 * Example: "عبد القادر بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان"
 * Returns: "عبد القادر بن عبد الله"
 */
export function extractShortBranchName(fullName: string): string {
  if (!fullName) return '';
  const cleaned = fullName
    .replace(/^أعقاب:\s*/, '')
    .replace(/\s*\(×\)\s*$/, '')
    .trim();

  const parts = cleaned.split(/\s+بن\s+/);
  if (parts.length >= 2) {
    return `${parts[0]} بن ${parts[1]}`;
  }
  return cleaned;
}

/**
 * Precomputes and returns a rich list of selectable branch nodes and ancestors.
 */
let cachedBranchOptions: BranchOptionItem[] | null = null;

export function getBranchOptionItems(): BranchOptionItem[] {
  if (cachedBranchOptions) return cachedBranchOptions;

  const items: BranchOptionItem[] = [];

  sequentialLineageBlocks.forEach((block, idx) => {
    // We include blocks that represent branch heads or have children, or are significant ancestors
    const shortName = extractShortBranchName(block.fatherName);

    // Count direct and indirect descendants
    let descendantsCount = 0;
    for (let j = idx + 1; j < sequentialLineageBlocks.length; j++) {
      if (sequentialLineageBlocks[j].generation > block.generation) {
        descendantsCount++;
      } else {
        break;
      }
    }

    // Include if it has children or descendants or is an early generation
    if (block.children.length > 0 || descendantsCount > 0 || block.generation <= 38) {
      items.push({
        id: block.id,
        name: shortName,
        fullName: block.fatherName,
        fatherCode: block.fatherCode,
        generation: block.generation,
        childrenCount: block.children.length,
        descendantsCount,
        mainBranch: block.mainBranch,
      });
    }
  });

  cachedBranchOptions = items;
  return items;
}

/**
 * Extracts ONLY the ancestors chain, the target selected node, and ALL its descendants.
 */
export function extractBranchHierarchy(selectedBranchId: string): BranchHierarchyResult {
  if (!selectedBranchId || selectedBranchId === 'all') {
    return {
      ancestors: [],
      target: null,
      descendants: [],
      allBlocks: sequentialLineageBlocks,
      branchTitle: 'كل الفروع والأنساب',
      targetShortName: 'كل الفروع والأنساب',
    };
  }

  // Find target block by ID, or by partial name/code match
  const selIdx = sequentialLineageBlocks.findIndex(
    (b) => b.id === selectedBranchId || b.fatherName.includes(selectedBranchId)
  );

  if (selIdx === -1) {
    return {
      ancestors: [],
      target: null,
      descendants: [],
      allBlocks: sequentialLineageBlocks,
      branchTitle: 'كل الفروع والأنساب',
      targetShortName: 'كل الفروع والأنساب',
    };
  }

  const target = sequentialLineageBlocks[selIdx];
  const targetGen = target.generation;
  const targetShortName = extractShortBranchName(target.fatherName);

  // 1. Descendants: all following contiguous blocks with generation > target.generation
  const descendants: SequentialBranchBlock[] = [];
  for (let i = selIdx + 1; i < sequentialLineageBlocks.length; i++) {
    const b = sequentialLineageBlocks[i];
    if (b.generation > targetGen) {
      descendants.push(b);
    } else {
      break;
    }
  }

  // 2. Ancestors: walk backwards from selIdx - 1 to 0
  const ancestors: SequentialBranchBlock[] = [];
  let currGen = targetGen;
  for (let i = selIdx - 1; i >= 0; i--) {
    const b = sequentialLineageBlocks[i];
    // Must have strictly lower generation, must have children, and not be childless (×)
    if (
      b.generation < currGen &&
      !b.fatherName.includes('(×)') &&
      b.children.length > 0
    ) {
      ancestors.push(b);
      currGen = b.generation;
      if (b.generation <= 27) {
        break;
      }
    }
  }
  ancestors.reverse();

  const allBlocks = [...ancestors, target, ...descendants];
  const branchTitle = `فرع: ${target.fatherName}`;

  return {
    ancestors,
    target,
    descendants,
    allBlocks,
    branchTitle,
    targetShortName,
  };
}

/**
 * EXACT UPWARD ANCESTRAL LINEAGE STRING as strictly mandated by the directive:
 */
export const EXACT_UPWARD_ANCESTRAL_STRING =
  'أحمد بن عبد الله الحضرمي بن محمد بن محمد بن علي بن القاسم بن أحمد الشيخ البركاني بن شارح البحر الشيخ سعيد بن أبي الأسرار علي بن إبراهيم السروري بن علي بن محمد بن الحسن بن المحسن بن يحيى الصوفي بن جعفر الزكي بن الإمام الهادي علي النقي بن الإمام الجواد محمد التقي بن الإمام علي الرضا بن الإمام موسى الكاظم بن الإمام جعفر الصادق بن الإمام محمد الباقر بن الإمام علي زين العابدين بن سيد شباب أهل الجنة وسبط رسول الله وسيد الشهداء الإمام الحسين بن الإمام علي بن أبي طالب سلام الله عليهم أجمعين';

export interface UpwardAncestorNode {
  generation: number;
  name: string;
  title?: string;
  isHolyImam?: boolean;
  notes?: string;
}

/**
 * Verified noble chain nodes from Imam Ali down through Sharh Al-Bahr to Ahmad bin Abdullah Al-Hadrami.
 */
export const NOBLE_ANCESTOR_SPINE: UpwardAncestorNode[] = [
  { generation: 1, name: 'الإمام علي بن أبي طالب (سلام الله عليهم أجمعين)', title: 'أمير المؤمنين وسيد الوصيين', isHolyImam: true },
  { generation: 2, name: 'سيد شباب أهل الجنة وسبط رسول الله وسيد الشهداء الإمام الحسين', title: 'سبط رسول الله ﷺ وسيد الشهداء', isHolyImam: true },
  { generation: 3, name: 'الإمام علي زين العابدين', title: 'السجاد - زين العابدين (ع)', isHolyImam: true },
  { generation: 4, name: 'الإمام محمد الباقر', title: 'باقر علم النبيين (ع)', isHolyImam: true },
  { generation: 5, name: 'الإمام جعفر الصادق', title: 'صادق العترة الطاهرة (ع)', isHolyImam: true },
  { generation: 6, name: 'الإمام موسى الكاظم', title: 'باب الحوائج (ع)', isHolyImam: true },
  { generation: 7, name: 'الإمام علي الرضا', title: 'عالم آل محمد وثامن الأئمة (ع)', isHolyImam: true },
  { generation: 8, name: 'الإمام الجواد محمد التقي', title: 'باب المراد والتاسع من الأئمة (ع)', isHolyImam: true },
  { generation: 9, name: 'الإمام الهادي علي النقي', title: 'الإمام العاشر (ع)', isHolyImam: true },
  { generation: 10, name: 'السيد جعفر الزكي', title: 'ابن الإمام الهادي عليه السلام' },
  { generation: 11, name: 'السيد يحيى الصوفي' },
  { generation: 12, name: 'السيد المحسن' },
  { generation: 13, name: 'السيد الحسن' },
  { generation: 14, name: 'السيد محمد' },
  { generation: 15, name: 'السيد علي' },
  { generation: 16, name: 'السيد إبراهيم السروري', title: 'المهاجر إلى اليمن بجباء' },
  { generation: 17, name: 'سيدي أبو الأسرار علي بن إبراهيم السروري', title: 'قطب العارفين بجباء' },
  { generation: 18, name: 'شارح البحر الشيخ سعيد', title: 'الجد الجامع لآل البركاني وآل الجنيد' },
  { generation: 19, name: 'أحمد الشيخ البركاني', title: 'الجد الجامع للسادة آل البركاني' },
  { generation: 20, name: 'السيد القاسم بن أحمد الشيخ البركاني' },
  { generation: 21, name: 'السيد علي بن القاسم' },
  { generation: 22, name: 'السيد محمد بن علي' },
  { generation: 23, name: 'السيد محمد بن محمد' },
  { generation: 24, name: 'السيد عبد الله بن محمد' },
  { generation: 25, name: 'أحمد بن عبد الله الحضرمي', title: 'صاحب المقام بذخر - رأس المشجر' },
];

/**
 * Extracts intermediate ancestors connecting Ahmad bin Abdullah Al-Hadrami down to the target branch.
 * Accurately restores all intermediate generations: e.g. أحمد بن عثمان -> محمد -> عبد الوهاب -> عبد الغني -> عبد الله -> عبد القادر
 */
export function getIntermediateAncestors(
  target: SequentialBranchBlock,
  ancestorBlocks: SequentialBranchBlock[]
): UpwardAncestorNode[] {
  const result: UpwardAncestorNode[] = [];

  // 1. From ancestor blocks in the document
  ancestorBlocks.forEach((ab) => {
    const cleanName = ab.fatherName
      .replace(/^أعقاب:\s*/, '')
      .replace(/\s*\([^)]*\)\s*$/, '')
      .trim();

    // Extract first 2-3 words (e.g. "أحمد بن عثمان", "الشيخ محمد جمال الدين بن عبد الرحمن النقل")
    const parts = cleanName.split(/\s+بن\s+/);
    let short = parts[0];
    if (parts.length >= 2) {
      if (parts[0] === 'أحمد' && parts[1] === 'عثمان') {
        short = 'أحمد بن عثمان';
      } else if (parts[0].includes('جمال الدين') || cleanName.includes('جمال الدين')) {
        short = 'الشيخ محمد جمال الدين بن عبد الرحمن النقل';
      } else {
        short = `${parts[0]} بن ${parts[1]}`;
      }
    }

    if (!short.includes('شارح البحر') && !short.includes('الحضرمي')) {
      result.push({
        generation: ab.generation,
        name: short,
        title: ab.fatherCode ? `كود: ${ab.fatherCode}` : undefined,
      });
    }
  });

  // 2. Parse the patronymic chain from target.fatherName
  const cleanTargetName = target.fatherName
    .replace(/^أعقاب:\s*/, '')
    .replace(/\s*\([^)]*\)\s*$/, '')
    .trim();

  const targetTokens = cleanTargetName
    .split(/\s+بن\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  // If target has extended chain, e.g.:
  // ['عبد القادر', 'عبد الله', 'عبد الغني', 'عبد الوهاب', 'محمد', 'أحمد', 'عثمان']
  if (targetTokens.length > 2) {
    // Combine أحمد and عثمان if at the end
    const ancestorsInTarget: string[] = [];
    for (let i = 1; i < targetTokens.length; i++) {
      if (targetTokens[i] === 'أحمد' && i + 1 < targetTokens.length && targetTokens[i + 1] === 'عثمان') {
        ancestorsInTarget.push('أحمد بن عثمان');
        i++;
      } else {
        ancestorsInTarget.push(targetTokens[i]);
      }
    }

    // ancestorsInTarget: ['عبد الله', 'عبد الغني', 'عبد الوهاب', 'محمد', 'أحمد بن عثمان']
    // Reverse to get chronological order (oldest first):
    // ['أحمد بن عثمان', 'محمد', 'عبد الوهاب', 'عبد الغني', 'عبد الله']
    const chronological = [...ancestorsInTarget].reverse();

    // Map each to its exact generation leading up to target.generation
    chronological.forEach((name, idx) => {
      const gen = target.generation - (chronological.length - idx);
      const existingIdx = result.findIndex(
        (r) => r.name === name || (name.includes('أحمد بن عثمان') && r.name.includes('أحمد بن عثمان'))
      );
      if (existingIdx !== -1) {
        result[existingIdx].name = name;
        result[existingIdx].generation = gen;
      } else {
        result.push({
          generation: gen,
          name,
        });
      }
    });
  }

  // Deduplicate and sort by generation
  const seen = new Set<string>();
  const filtered: UpwardAncestorNode[] = [];
  result.forEach((r) => {
    if (!seen.has(r.name)) {
      seen.add(r.name);
      filtered.push(r);
    }
  });

  return filtered.sort((a, b) => a.generation - b.generation);
}

/**
 * Builds a nested hierarchical tree for the target branch and all its descendant blocks.
 */
export interface BranchHierarchyTreeNode {
  id: string;
  name: string;
  fullName?: string;
  code?: string;
  generation: number;
  isMartyr?: boolean;
  noOffspring?: boolean;
  notes?: string;
  hasChildrenFollowup?: boolean;
  children: BranchHierarchyTreeNode[];
}

export function buildBranchHierarchyTree(
  target: SequentialBranchBlock,
  descendantBlocks: SequentialBranchBlock[]
): BranchHierarchyTreeNode {
  // Helper to normalize name tokens for matching (strip 'ال' prefix, diacritics, normalize letters)
  const cleanToken = (name: string) =>
    name
      .replace(/^ال/, '')
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/[ىئ]/g, 'ي')
      .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
      .trim();

  // Find corresponding descendant block for a child under a specific parent
  const findChildBlock = (childName: string, parentName: string, expectedGen: number) => {
    const cClean = cleanToken(childName);
    const pClean = cleanToken(parentName);

    return descendantBlocks.find((b) => {
      if (b.generation !== expectedGen) return false;
      const parts = b.fatherName.split(/\s+بن\s+/).map((p) => cleanToken(p.trim()));
      if (parts.length < 2) {
        return parts[0] === cClean || parts[0].includes(cClean) || cClean.includes(parts[0]);
      }
      const fatherFirst = parts[0];
      const fatherSecond = parts[1];

      const nameMatch = fatherFirst === cClean || fatherFirst.includes(cClean) || cClean.includes(fatherFirst);
      const parentMatch = fatherSecond === pClean || fatherSecond.includes(pClean) || pClean.includes(fatherSecond);

      return nameMatch && parentMatch;
    });
  };

  const buildNode = (
    c: any,
    parentName: string,
    currentGen: number
  ): BranchHierarchyTreeNode => {
    const childGen = c.generation || currentGen + 1;
    const matchedBlock = findChildBlock(c.name, parentName, childGen);

    const subChildren: BranchHierarchyTreeNode[] = matchedBlock
      ? matchedBlock.children.map((sc: any) => buildNode(sc, c.name, matchedBlock.generation))
      : [];

    return {
      id: `node-${c.code || Math.random().toString(36).substr(2, 6)}-${c.name}`,
      name: c.name,
      code: c.code,
      generation: childGen,
      isMartyr: Boolean(c.isMartyr),
      noOffspring: Boolean(c.noOffspring),
      notes: c.notes,
      hasChildrenFollowup: Boolean(c.hasChildrenFollowup) || subChildren.length > 0,
      children: subChildren,
    };
  };

  const targetFirst = target.fatherName.split(/\s+بن\s+/)[0].trim();
  const rootChildren = target.children.map((c) => buildNode(c, targetFirst, target.generation));

  return {
    id: `root-${target.id}`,
    name: extractShortBranchName(target.fatherName),
    fullName: target.fatherName,
    code: target.fatherCode,
    generation: target.generation,
    children: rootChildren,
  };
}

/**
 * Builds the complete cascading hierarchical tree starting from [الجيل 1] الإمام علي بن أبي طالب
 * down through the Holy Imams and Noble Ancestors, Sharh Al-Bahr (Gen 18), Ahmad Al-Hadrami (Gen 25),
 * intermediate grandfathers, down to the target branch head and all its descendants.
 */
export function buildBranchHierarchyTreeStartingFromImamAli(
  target: SequentialBranchBlock,
  descendantBlocks: SequentialBranchBlock[],
  ancestorBlocks: SequentialBranchBlock[]
): BranchHierarchyTreeNode {
  // 1. Build the subtree rooted at target with all its descendants
  const targetSubtree = buildBranchHierarchyTree(target, descendantBlocks);

  // 2. Get intermediate ancestors between Ahmad Al-Hadrami (Gen 25) and target
  const intermediate = getIntermediateAncestors(target, ancestorBlocks);

  // 3. Chain backward from targetSubtree up to Ahmad Al-Hadrami
  let currentTop: BranchHierarchyTreeNode = targetSubtree;

  // Link intermediate ancestors in reverse order (closest to target first)
  for (let i = intermediate.length - 1; i >= 0; i--) {
    const im = intermediate[i];
    currentTop = {
      id: `anc-tree-node-${im.generation}-${im.name}`,
      name: im.name,
      fullName: im.title ? `${im.name} (${im.title})` : im.name,
      generation: im.generation,
      notes: im.title,
      hasChildrenFollowup: true,
      children: [currentTop],
    };
  }

  // Node for Ahmad bin Abdullah Al-Hadrami (Gen 25)
  currentTop = {
    id: 'anc-tree-node-25-hadrami',
    name: 'أحمد بن عبد الله الحضرمي',
    fullName: 'السيد الشريف أحمد بن عبد الله الحضرمي (صاحب المقام بذخر)',
    generation: 25,
    notes: 'صاحب المقام بذخر - رأس المشجر في تعز',
    hasChildrenFollowup: true,
    children: [currentTop],
  };

  // 4. Link upper noble ancestors from Gen 24 down to Gen 1
  for (let i = NOBLE_ANCESTOR_SPINE.length - 2; i >= 0; i--) {
    const anc = NOBLE_ANCESTOR_SPINE[i];
    currentTop = {
      id: `anc-tree-node-${anc.generation}`,
      name: anc.name,
      fullName: anc.title ? `${anc.name} (${anc.title})` : anc.name,
      generation: anc.generation,
      notes: anc.title,
      hasChildrenFollowup: true,
      children: [currentTop],
    };
  }

  return currentTop;
}

/**
 * Builds the complete sequential generational blocks (node-by-node with "وأعقب:")
 * starting from [الجيل 1] الإمام علي بن أبي طالب (سلام الله عليهم أجمعين)
 * through all generations down to Ahmad bin Abdullah Al-Hadrami (Gen 25),
 * intermediate ancestors, down to the selected branch and its descendants.
 */
export function buildBranchFullGenerationalBlocks(
  hierarchy: BranchHierarchyResult
): SequentialBranchBlock[] {
  const { target, descendants, ancestors } = hierarchy;
  if (!target) return hierarchy.allBlocks;

  const result: SequentialBranchBlock[] = [];

  // 1. Upper Noble Ancestral Blocks: Gen 1 to Gen 24
  for (let i = 0; i < NOBLE_ANCESTOR_SPINE.length - 1; i++) {
    const curr = NOBLE_ANCESTOR_SPINE[i];
    const next = NOBLE_ANCESTOR_SPINE[i + 1];

    let branchLabel = 'السلسلة النبوية العلوية المباركة';
    if (curr.generation >= 18) branchLabel = 'أعقاب سيدي شارح البحر الشيخ سعيد';

    result.push({
      id: `gen-block-${curr.generation}`,
      mainBranch: branchLabel,
      fatherCode: '',
      fatherName: `[الجيل ${curr.generation}] ${curr.name}`,
      fatherFullName: curr.title ? `${curr.name} (${curr.title})` : curr.name,
      generation: curr.generation,
      children: [
        {
          code: `${next.generation}/1`,
          name: next.name,
          generation: next.generation,
          notes: next.title,
        },
      ],
    });
  }

  // 2. Gen 25: Ahmad bin Abdullah Al-Hadrami
  const intermediate = getIntermediateAncestors(target, ancestors);
  const nextAfter25 = intermediate.length > 0 ? intermediate[0].name : target.fatherName;
  const nextGenAfter25 = intermediate.length > 0 ? intermediate[0].generation : target.generation;

  result.push({
    id: 'gen-block-25',
    mainBranch: 'أعقاب سيدي أحمد بن عبد الله الحضرمي',
    fatherCode: '',
    fatherName: '[الجيل 25] أحمد بن عبد الله الحضرمي',
    fatherFullName: 'السيد أحمد بن عبد الله الحضرمي (صاحب المقام بذخر)',
    generation: 25,
    children: [
      {
        code: `${nextGenAfter25}/1`,
        name: nextAfter25,
        generation: nextGenAfter25,
      },
    ],
  });

  // 3. Intermediate Ancestor Blocks
  for (let i = 0; i < intermediate.length; i++) {
    const im = intermediate[i];
    const nextName = i + 1 < intermediate.length ? intermediate[i + 1].name : target.fatherName;
    const nextGen = i + 1 < intermediate.length ? intermediate[i + 1].generation : target.generation;

    result.push({
      id: `gen-block-intermediate-${im.generation}-${i}`,
      mainBranch: 'سلسلة الآباء والأجداد المتصلة بالفرع',
      fatherCode: '',
      fatherName: `[الجيل ${im.generation}] ${im.name}`,
      fatherFullName: im.title ? `${im.name} (${im.title})` : im.name,
      generation: im.generation,
      children: [
        {
          code: `${nextGen}/1`,
          name: nextName,
          generation: nextGen,
        },
      ],
    });
  }

  // 4. Target Branch Block (الجد الجامع للفرع)
  result.push({
    ...target,
    fatherName: `[الجيل ${target.generation}] 🎯 الجد الجامع للفرع: ${target.fatherName}`,
  });

  // 5. Descendant Blocks
  descendants.forEach((d) => {
    result.push({
      ...d,
      fatherName: `[الجيل ${d.generation}] ${d.fatherName}`,
    });
  });

  return result;
}
