import { PersonNode, DuplicateGroup, DuplicateOccurrence, TreeStats } from '../types';

/**
 * Normalizes an Arabic string for exact search & comparison while preserving original text:
 * 1. Treat "عبد القادر" and "عبدالقادر" as identical by ignoring whitespace after "عبد".
 * 2. Strip/ignore all Arabic diacritics/tashkeel (e.g. Damma, Fatha, Kasra, Tanween such as 'داً', 'دٌ', shaddah, sukun, tatweel).
 * 3. Normalize letter variants automatically (e.g. 'أ', 'إ', 'آ', 'ٱ' -> 'ا' and 'ة' -> 'ه' and 'ى', 'ئ' -> 'ي').
 */
export function normalizeArabicForSearch(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/\u0627\u064B/g, '') // alif with tanween fath
    .replace(/\u064B\u0627/g, '') // tanween fath with alif
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '') // Remove tashkeel/diacritics/tatweel
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/[ىئ]/g, 'ي')
    .replace(/عبد\s+/g, 'عبد') // ignore whitespace after 'عبد'
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Normalizes an Arabic string for exact search & comparison while preserving original text
 */
export function normalizeArabic(text: string): string {
  return normalizeArabicForSearch(text);
}

/**
 * Strips titles or status markers from name to find the core personal name for homonym matching
 */
export function getCoreName(rawName: string): string {
  if (!rawName) return '';
  let clean = rawName
    .replace(/^(السيد|الشيخ|الشريف|المرحوم|الأمير|القاضي|الحاج|الشهيد)\s+/g, '')
    .replace(/\(.*?\)/g, '')
    .replace(/\[.*?\]/g, '')
    .replace(/(شهيد|لم يعقب|أعقب|له أعقاب|الأكبر|الأصغر|الأوسط)/g, '')
    .trim();
  // If compound like "محمد بن علي", split by "بن" or take first token if single name
  const parts = clean.split(/\s+بن\s+/);
  return parts[0].trim();
}

/**
 * Traverses the tree and attaches full ancestral pedigree and parent IDs
 */
export function enrichTreeWithMetadata(
  node: PersonNode,
  currentGen: number = 1,
  ancestorNames: string[] = [],
  parentId?: string
): PersonNode {
  node.generation = currentGen;
  node.parentId = parentId;
  const currentChain = [...ancestorNames, node.name];
  node.ancestorChain = currentChain;

  if (node.children && node.children.length > 0) {
    node.children = node.children.map((child) =>
      enrichTreeWithMetadata(child, currentGen + 1, currentChain, node.id)
    );
  }

  // Safety check: if marked "لم يعقب", force children to be empty
  if (node.noOffspring) {
    node.children = [];
  }

  return node;
}

/**
 * Flattens the genealogical tree into an array of all persons
 */
export function flattenTree(root: PersonNode): PersonNode[] {
  const result: PersonNode[] = [];
  function traverse(node: PersonNode) {
    result.push(node);
    if (node.children && node.children.length > 0) {
      node.children.forEach(traverse);
    }
  }
  traverse(root);
  return result;
}

/**
 * Finds all duplicates / homonyms across the tree
 */
export function findDuplicateAndHomonymGroups(root: PersonNode): DuplicateGroup[] {
  const allNodes = flattenTree(root);
  const nameMap = new Map<string, DuplicateOccurrence[]>();

  allNodes.forEach((node) => {
    const core = getCoreName(node.name);
    if (!core || core.length < 2) return;

    const normalizedCore = normalizeArabic(core);
    const parentNode = node.parentId
      ? allNodes.find((n) => n.id === node.parentId)
      : undefined;

    const fullPedigree = (node.ancestorChain || [node.name]).slice().reverse().join(' بن ');
    const branchName = node.ancestorChain && node.ancestorChain.length > 1 ? node.ancestorChain[1] : 'الجد الجامع';

    const occurrence: DuplicateOccurrence = {
      nodeId: node.id,
      name: node.name,
      generation: node.generation,
      parentName: parentNode ? parentNode.name : '—',
      fullPedigree: fullPedigree,
      branchName: branchName,
      isMartyr: !!node.isMartyr,
      noOffspring: !!node.noOffspring,
      hasOffspringNote: !!node.hasOffspringNote,
      notes: node.notes,
    };

    if (!nameMap.has(normalizedCore)) {
      nameMap.set(normalizedCore, []);
    }
    nameMap.get(normalizedCore)!.push(occurrence);
  });

  const duplicateGroups: DuplicateGroup[] = [];
  nameMap.forEach((occurrences, key) => {
    if (occurrences.length > 1) {
      duplicateGroups.push({
        name: occurrences[0].name.split(' ')[0] || key,
        count: occurrences.length,
        occurrences: occurrences.sort((a, b) => a.generation - b.generation),
      });
    }
  });

  return duplicateGroups.sort((a, b) => b.count - a.count);
}

/**
 * Computes tree statistics
 */
export function computeTreeStats(root: PersonNode): TreeStats {
  const all = flattenTree(root);
  let maxGen = 1;
  let martyrs = 0;
  let noOffspring = 0;
  let hasOffspringNote = 0;
  let branchHeads = 0;

  all.forEach((n) => {
    if (n.generation > maxGen) maxGen = n.generation;
    if (n.isMartyr) martyrs++;
    if (n.noOffspring) noOffspring++;
    if (n.hasOffspringNote) hasOffspringNote++;
    if (n.isBranchHead) branchHeads++;
  });

  return {
    totalCount: all.length,
    generationsCount: maxGen,
    branchHeadsCount: branchHeads,
    martyrsCount: martyrs,
    noOffspringCount: noOffspring,
    hasOffspringNoteCount: hasOffspringNote,
    branchesCount: (root.children || []).length,
  };
}

export interface ParseValidationResult {
  root: PersonNode | null;
  errors: string[];
  warnings: string[];
  totalParsed: number;
}

/**
 * Robust, Zero-Hallucination Raw Text Parser
 * Parses indented text, bullet points, headers with "أعقب", "لم يعقب", "شهيد"
 */
export function parseRawGenealogyText(rawText: string): ParseValidationResult {
  const lines = rawText.split('\n');
  const errors: string[] = [];
  const warnings: string[] = [];

  interface RawLineItem {
    lineIndex: number;
    depth: number;
    text: string;
    isBranchHead: boolean;
    branchHeaderTitle?: string;
    isMartyr: boolean;
    noOffspring: boolean;
    hasOffspringNote: boolean;
    notes?: string;
    cleanName: string;
  }

  const items: RawLineItem[] = [];

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    if (!rawLine.trim() || rawLine.trim().startsWith('#') || rawLine.trim().startsWith('//')) {
      continue;
    }

    // Calculate indent depth (count leading spaces, tabs, or bullet level)
    const leadingSpaces = rawLine.search(/\S/);
    let depth = Math.floor(leadingSpaces / 2);

    let trimmed = rawLine.trim();

    // Check for bullet markers like -, *, •, 1., etc.
    const bulletMatch = trimmed.match(/^([-*•+]|\d+[\.\)])\s+/);
    if (bulletMatch) {
      trimmed = trimmed.substring(bulletMatch[0].length).trim();
    }

    // Check for markers: شهيد, لم يعقب, أعقب
    const isMartyr = /شهيد|الشهيد|استشهاد/i.test(trimmed);
    const noOffspring = /لم يعقب|انقرض|درج عقيما|عقيم/i.test(trimmed);
    const hasOffspringNote = /أعقب|له أعقاب|له ذرية|عقب/i.test(trimmed);
    const isBranchHead = /أعقب فلان|فرع|رأس فرع|آل\s+/i.test(trimmed) || trimmed.endsWith(':');

    // Extract notes if in brackets or after colon / dash
    let notes: string | undefined = undefined;
    const bracketMatch = trimmed.match(/[\(\[](.*?)[\)\]]/);
    if (bracketMatch) {
      notes = bracketMatch[1];
    }

    // Clean name
    let cleanName = trimmed
      .replace(/[\(\[].*?[\)\]]/g, '')
      .replace(/^(فرع|أعقب|السيد|الشيخ)\s+/g, (m) => m) // keep honorifics
      .replace(/[:\-]/g, '')
      .trim();

    if (!cleanName) {
      cleanName = trimmed;
    }

    // Validation rule check: A node cannot be both "لم يعقب" and "أعقب"
    if (noOffspring && hasOffspringNote) {
      warnings.push(`السطر ${i + 1}: تم الجمع بين 'لم يعقب' و 'أعقب' للاسم (${cleanName}). تم ترجيح 'لم يعقب' تطبيقاً للأصل التوثيقي.`);
    }

    items.push({
      lineIndex: i + 1,
      depth,
      text: trimmed,
      cleanName,
      isBranchHead,
      branchHeaderTitle: isBranchHead ? trimmed : undefined,
      isMartyr,
      noOffspring,
      hasOffspringNote: hasOffspringNote && !noOffspring,
      notes,
    });
  }

  if (items.length === 0) {
    return {
      root: null,
      errors: ['لم يتم العثور على أي بيانات نسَبية صالحة في النص المدخل.'],
      warnings: [],
      totalParsed: 0,
    };
  }

  // Build hierarchical tree
  let idCounter = 1;
  function createNodeFromItem(item: RawLineItem, gen: number): PersonNode {
    return {
      id: `parsed-node-${idCounter++}`,
      name: item.cleanName,
      fullName: item.text,
      isBranchHead: item.isBranchHead,
      branchHeaderTitle: item.branchHeaderTitle,
      isMartyr: item.isMartyr,
      noOffspring: item.noOffspring,
      hasOffspringNote: item.hasOffspringNote,
      notes: item.notes,
      generation: gen,
      children: [],
    };
  }

  // Use stack-based tree construction
  const rootItem = items[0];
  const rootNode = createNodeFromItem(rootItem, 1);
  rootNode.isBranchHead = true;
  rootNode.branchHeaderTitle = rootNode.branchHeaderTitle || 'الجد الجامع والأصل الأعلى';

  const stack: { node: PersonNode; depth: number }[] = [{ node: rootNode, depth: rootItem.depth }];

  for (let i = 1; i < items.length; i++) {
    const item = items[i];

    // Find parent in stack
    while (stack.length > 1 && stack[stack.length - 1].depth >= item.depth) {
      stack.pop();
    }

    const parentWrapper = stack[stack.length - 1];
    const parentNode = parentWrapper.node;

    // Check strict rule: If parent is marked "لم يعقب", we MUST NOT assign children
    if (parentNode.noOffspring) {
      errors.push(
        `خطأ توثيقي في السطر ${item.lineIndex}: حاول إسناد الابن (${item.cleanName}) إلى (${parentNode.name}) وهو مثبت بأنه 'لم يعقب'. تم حجب التفرع احتراماً للضوابط.`
      );
      continue;
    }

    const newNode = createNodeFromItem(item, parentNode.generation + 1);
    newNode.parentId = parentNode.id;
    parentNode.children.push(newNode);

    stack.push({ node: newNode, depth: item.depth });
  }

  const enrichedRoot = enrichTreeWithMetadata(rootNode, 1, []);
  const allParsed = flattenTree(enrichedRoot);

  return {
    root: enrichedRoot,
    errors,
    warnings,
    totalParsed: allParsed.length,
  };
}
