import { sequentialLineageBlocks, SequentialBranchBlock } from '../data/sequentialLineageData';
import { comprehensiveDocumentation } from '../data/comprehensiveDocumentation';
import { historicalManuscriptsList } from '../data/historicalManuscriptsData';
import { getActiveManuscriptImages } from './imageStorage';
import {
  buildBranchFullGenerationalBlocks,
  BranchHierarchyResult,
  buildBranchHierarchyTree,
  BranchHierarchyTreeNode,
  getIntermediateAncestors,
} from './branchLineageHelper';

export function exportLineageToPdf(): void {
  const doc = comprehensiveDocumentation;
  const manuscriptImages = getActiveManuscriptImages();

  let html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <title>وثيقة أعقاب شارح البحر الشريفة</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@400;600;700;900&display=swap');
    
    @page {
      size: A4;
      margin: 15mm 12mm 15mm 12mm;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: 'Amiri', 'Traditional Arabic', serif;
      direction: rtl;
      text-align: right;
      margin: 0;
      padding: 20px;
      color: #1c1917;
      background: #ffffff;
      line-height: 1.6;
      font-size: 14pt;
    }

    .header-banner {
      text-align: center;
      border-bottom: 3px double #065f46;
      padding-bottom: 15px;
      margin-bottom: 25px;
    }

    .basmalah {
      font-size: 18pt;
      color: #064e3b;
      margin-bottom: 10px;
      font-weight: bold;
    }

    .main-title {
      font-family: 'Cairo', sans-serif;
      font-size: 22pt;
      font-weight: 900;
      color: #065f46;
      margin: 5px 0;
    }

    .sub-title {
      font-family: 'Cairo', sans-serif;
      font-size: 13pt;
      color: #047857;
      margin: 0;
    }

    .section-container {
      margin-bottom: 30px;
    }

    .section-heading {
      font-family: 'Cairo', sans-serif;
      font-size: 16pt;
      font-weight: bold;
      color: #064e3b;
      background-color: #ecfdf5;
      border-right: 6px solid #059669;
      padding: 6px 14px;
      border-radius: 4px;
      margin-bottom: 12px;
    }

    .text-box {
      background: #fafaf9;
      border: 1px solid #e7e5e4;
      padding: 12px 16px;
      border-radius: 6px;
      font-size: 13pt;
      line-height: 1.8;
      margin-bottom: 10px;
    }

    .objectives-grid {
      display: block;
      margin-bottom: 15px;
    }

    .obj-item {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-right: 4px solid #0284c7;
      padding: 8px 12px;
      border-radius: 4px;
      margin-bottom: 8px;
      page-break-inside: avoid;
    }

    .obj-title {
      font-family: 'Cairo', sans-serif;
      font-weight: bold;
      color: #0369a1;
      font-size: 12.5pt;
    }

    .sources-list {
      margin-bottom: 15px;
    }

    .source-card {
      background: #fffbeb;
      border: 1px solid #fde68a;
      border-right: 4px solid #d97706;
      padding: 8px 12px;
      border-radius: 4px;
      margin-bottom: 8px;
      page-break-inside: avoid;
    }

    .source-title {
      font-family: 'Cairo', sans-serif;
      font-weight: bold;
      color: #b45309;
      font-size: 12pt;
    }

    .manuscript-card-pdf {
      background: #ffffff;
      border: 1.5px solid #d6d3d1;
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 14px;
      page-break-inside: avoid;
    }

    .manuscript-title-pdf {
      font-family: 'Cairo', sans-serif;
      font-size: 13pt;
      font-weight: bold;
      color: #064e3b;
      margin-bottom: 4px;
    }

    .manuscript-badge-pdf {
      display: inline-block;
      background: #042f24;
      color: #fef08a;
      font-size: 9.5pt;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: bold;
      margin-left: 6px;
    }

    .manuscript-proof-box {
      background: #fffbeb;
      border: 1px solid #fef08a;
      border-right: 3px solid #f59e0b;
      padding: 6px 10px;
      font-size: 11pt;
      color: #78350f;
      border-radius: 4px;
      margin-top: 6px;
    }

    /* Full Gallery in PDF */
    .gallery-images-pdf-grid {
      display: block;
      margin-top: 15px;
    }

    .gallery-image-item {
      text-align: center;
      margin-bottom: 25px;
      page-break-inside: avoid;
      background: #fdfbf7;
      border: 1px solid #e7e5e4;
      padding: 12px;
      border-radius: 8px;
    }

    .gallery-image-caption {
      font-family: 'Cairo', sans-serif;
      font-size: 12pt;
      font-weight: bold;
      color: #065f46;
      margin-top: 8px;
    }

    .gallery-image-filename {
      font-size: 10pt;
      color: #78716c;
      margin-top: 2px;
    }

    .gallery-full-img {
      max-width: 100%;
      height: auto;
      max-height: 800px;
      object-fit: contain;
      border: 1px solid #d6d3d1;
      border-radius: 6px;
      display: block;
      margin: 0 auto;
    }

    .page-break {
      page-break-before: always;
    }

    .pdf-cover-page {
      box-sizing: border-box;
      width: 100%;
      min-height: calc(100vh - 40px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      border: 4px double #92400e;
      outline: 2px solid #b45309;
      outline-offset: -10px;
      border-radius: 12px;
      padding: 40px 32px 32px 32px;
      background: #fdfbf7;
      margin: 0 0 35px 0;
      page-break-after: always;
      break-after: page;
      page-break-inside: avoid;
      break-inside: avoid;
      position: relative;
    }

    .pdf-credits-page {
      box-sizing: border-box;
      width: 100%;
      min-height: calc(100vh - 40px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 4px double #92400e;
      outline: 2px solid #b45309;
      outline-offset: -10px;
      border-radius: 12px;
      padding: 38px 32px 32px 32px;
      background: #fdfbf7;
      margin: 0 0 35px 0;
      page-break-after: always;
      break-after: page;
      page-break-inside: avoid;
      break-inside: avoid;
      position: relative;
    }

    .tree-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .block-card {
      border: 1px solid #d6d3d1;
      border-radius: 6px;
      padding: 10px 14px;
      background: #ffffff;
      page-break-inside: avoid;
      margin-bottom: 10px;
    }

    .father-header {
      font-family: 'Cairo', sans-serif;
      font-size: 13.5pt;
      font-weight: bold;
      color: #065f46;
      background: #f0fdf4;
      padding: 4px 10px;
      border-radius: 4px;
      border-right: 3px solid #10b981;
      margin-bottom: 6px;
    }

    .branch-tag {
      font-size: 9.5pt;
      color: #047857;
      margin-bottom: 4px;
      font-style: italic;
    }

    .children-container {
      margin-right: 15px;
    }

    .children-title {
      font-weight: bold;
      font-size: 11pt;
      color: #44403c;
      margin-bottom: 4px;
    }

    .child-row {
      font-size: 12pt;
      padding: 2px 0;
      border-bottom: 1px dotted #e7e5e4;
    }

    .child-code {
      font-family: 'Cairo', sans-serif;
      font-weight: bold;
      color: #047857;
      display: inline-block;
      min-width: 45px;
    }

    .badge-martyr {
      background: #fef2f2;
      color: #b91c1c;
      border: 1px solid #fecaca;
      padding: 1px 6px;
      border-radius: 4px;
      font-size: 9pt;
      font-weight: bold;
      margin-right: 5px;
    }

    .badge-no-offspring {
      background: #f3f4f6;
      color: #4b5563;
      border: 1px solid #e5e7eb;
      padding: 1px 6px;
      border-radius: 4px;
      font-size: 9pt;
      margin-right: 5px;
    }

    .badge-daughters {
      background: #fdf4ff;
      color: #a21caf;
      border: 1px solid #f5d0fe;
      padding: 1px 6px;
      border-radius: 4px;
      font-size: 9pt;
      margin-right: 5px;
    }

    @media print {
      body {
        padding: 0;
        margin: 0;
      }
      .pdf-cover-page {
        min-height: 260mm;
        height: 260mm;
        max-height: 260mm;
        padding: 36px 30px 28px 30px;
        margin: 0;
        page-break-after: always;
        break-after: page;
      }
      .pdf-credits-page {
        min-height: 260mm;
        height: 260mm;
        max-height: 260mm;
        padding: 36px 30px 28px 30px;
        margin: 0;
        page-break-after: always;
        break-after: page;
      }
    }
  </style>
</head>
<body>

  <!-- ========================================================================= -->
  <!-- PAGE 1: TITLE PAGE (صفحة الغلاف والعنوان) -->
  <!-- ========================================================================= -->
  <div class="pdf-cover-page">
    <div style="width: 100%; display: flex; flex-direction: column; align-items: center; text-align: center;">
      <div style="font-family: 'Amiri', serif; font-size: 20pt; color: #064e3b; margin-bottom: 20px; font-weight: bold; letter-spacing: 1px;">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </div>

      <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 28pt; font-weight: bold; color: #064e3b; line-height: 1.4; margin-bottom: 14px; max-width: 96%;">
        من أعقاب شارح البحر: أحمد بن عبد الله الحضرمي
      </div>

      <div style="font-family: 'Cairo', sans-serif; font-size: 22pt; font-weight: 800; color: #92400e; margin-bottom: 18px;">
        آل الجنيد في تعز
      </div>

      <div style="width: 200px; height: 3px; background: linear-gradient(to right, transparent, #b45309, transparent); margin: 6px auto 20px;"></div>

      <div style="font-family: 'Cairo', sans-serif; font-size: 15pt; color: #57534e; margin-bottom: 6px; font-weight: 600;">
        تأليف
      </div>

      <div style="font-family: 'Cairo', sans-serif; font-size: 25pt; font-weight: 900; color: #065f46; margin-bottom: 20px;">
        عبد الإله عبد القادر الجنيد
      </div>
    </div>

    <!-- Lineage Box -->
    <div style="width: 100%; padding: 20px 24px; background: #f0fdf4; border: 2px solid #86efac; border-radius: 10px; text-align: justify; box-shadow: inset 0 0 0 1px #bbf7d0;">
      <strong style="color: #064e3b; display: block; margin-bottom: 8px; font-family: 'Cairo', sans-serif; font-size: 14pt; text-align: center; border-bottom: 1.5px solid #86efac; padding-bottom: 6px;">
        عمود النسب الشريف المتصل:
      </strong>
      <div style="font-size: 12.5pt; line-height: 2.1; color: #14532d; font-family: 'Amiri', serif; font-weight: 600;">
        أحمد بن عبد الله الحضرمي بن محمد بن محمد بن علي بن القاسم بن أحمد الشيخ البركاني بن شارح البحر الشيخ سعيد بن أبي الأسرار علي بن إبراهيم السروري بن علي بن محمد بن الحسن بن المحسن بن يحيى الصوفي بن جعفر الزكي بن الإمام الهادي علي النقي بن الإمام الجواد محمد التقي بن الإمام علي الرضا بن الإمام موسى الكاظم بن الإمام جعفر الصادق بن الإمام محمد الباقر بن الإمام علي زين العابدين بن سيد شباب أهل الجنة وسبط رسول الله وسيد الشهداء الإمام الحسين بن الإمام علي بن أبي طالب سلام الله عليهم أجمعين
      </div>
    </div>
  </div>

  <div class="page-break"></div>

  <!-- ========================================================================= -->
  <!-- PAGE 2: ACKNOWLEDGMENTS & CREDITS (شكر وتقدير) -->
  <!-- ========================================================================= -->
  <div class="pdf-credits-page">
    <div style="text-align: center; border-bottom: 2.5px solid #059669; padding-bottom: 14px; margin-bottom: 18px;">
      <h2 style="font-family: 'Cairo', sans-serif; font-size: 24pt; font-weight: 900; color: #064e3b; margin: 0 0 8px 0;">
        شكر وتقدير:
      </h2>
      <p style="font-family: 'Amiri', serif; font-size: 15pt; color: #44403c; margin: 0; font-weight: bold;">
        نتقدم بالشكر والتقدير لكل من تعاون وساهم في إنجاز هذا العمل.
      </p>
    </div>

    <!-- Top Two Sections -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 18px;">
      <!-- Section 1: الإشراف والمراجعة -->
      <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-right: 6px solid #059669; padding: 16px 18px; border-radius: 8px;">
        <h3 style="font-family: 'Cairo', sans-serif; font-size: 14pt; font-weight: bold; color: #064e3b; margin: 0 0 10px 0; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 6px;">
          * الإشراف والمراجعة:
        </h3>
        <ul style="margin: 0; padding-right: 18px; font-size: 13pt; color: #1c1917; line-height: 2.1; font-family: 'Amiri', serif; font-weight: bold;">
          <li>السيد العلامة: محمد بن عبد الولي البركاني</li>
          <li>السيد العلامة: عدنان بن أحمد بن يحيى الجنيد</li>
          <li>السيد العارف: سعيد بن عبد الغني الجنيد</li>
        </ul>
      </div>

      <!-- Section 2: المعلومات والإنترنت -->
      <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-right: 6px solid #0284c7; padding: 16px 18px; border-radius: 8px;">
        <h3 style="font-family: 'Cairo', sans-serif; font-size: 14pt; font-weight: bold; color: #0369a1; margin: 0 0 10px 0; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 6px;">
          * المعلومات والإنترنت:
        </h3>
        <ul style="margin: 0; padding-right: 18px; font-size: 13pt; color: #1c1917; line-height: 2.1; font-family: 'Amiri', serif; font-weight: bold;">
          <li>علاء بن عبد العليم الجنيد</li>
          <li>زيد بن عبد الإله بن عبد القادر الجنيد</li>
        </ul>
      </div>
    </div>

    <!-- Section 3: مراجعة تسلسل المشجرات -->
    <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-right: 6px solid #d97706; padding: 18px 22px; border-radius: 8px; flex-grow: 1; display: flex; flex-direction: column; justify-content: flex-start;">
      <h3 style="font-family: 'Cairo', sans-serif; font-size: 14pt; font-weight: bold; color: #b45309; margin: 0 0 12px 0; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 6px;">
        * مراجعة تسلسل المشجرات:
      </h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px 24px; font-size: 13pt; color: #1c1917; line-height: 2.0; font-family: 'Amiri', serif; font-weight: bold;">
        <div>- فهد بن محمد بن ناجي الجنيد</div>
        <div>- أحمد بن محمد بن عبد الله الجنيد</div>
        <div>- عبد الوهاب بن محمد بن عبد القادر الجنيد</div>
        <div>- الشهيد: نبيل بن إبراهيم بن محمد الجنيد</div>
        <div>- حسين بن عبد الصمد بن أحمد الجنيد</div>
        <div>- الشاعر: محمد بن سعيد بن سيف الجنيد</div>
        <div>- د. هشام بن محمد بن وجيه الجنيد</div>
        <div>- فؤاد بن عبد الكريم بن أحمد الجنيد</div>
        <div>- عبد الله بن عبد الوهاب بن محمد الجنيد</div>
        <div>- أمين بن مقبل بن عبد الواسع الجنيد</div>
        <div>- منذر بن نبيل بن يوسف الجنيد</div>
        <div>- عدنان بن عبد الله بن سرور الجنيد</div>
        <div>- خالد بن عثمان البركاني</div>
        <div>- أمين البركاني</div>
      </div>
    </div>
  </div>

  <div class="page-break"></div>

  <!-- BANNER -->
  <div class="header-banner">
    <div class="basmalah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
    <h1 class="main-title">وثيقة نسب وأعقاب شارح البحر</h1>
    <p class="sub-title">آل الجنيد • آل البركاني • آل السروري (السادة الرضويون الحسينيون)</p>
  </div>

  <!-- 1. INTRODUCTION (المقدمة الكاملة) -->
  <div class="section-container">
    <div class="section-heading">١. المقدمة التوثيقية والمنهجية الكاملة</div>
    <div class="text-box" style="white-space: pre-line; line-height: 2;">
      ${doc.introduction.fullPrefaceText || doc.introduction.text}
    </div>
  </div>

  <!-- 2. OBJECTIVES (الأهداف) -->
  <div class="section-container">
    <div class="section-heading">٢. أهداف توثيق وحفظ المشجر الشريف</div>
    <div class="objectives-grid">
`;

  doc.objectives.items.forEach((item, idx) => {
    html += `
      <div class="obj-item">
        <div class="obj-title">${idx + 1}. ${item.title}</div>
        <div style="font-size: 11pt; color: #334155;">${item.description}</div>
      </div>
    `;
  });

  html += `
    </div>
  </div>

  <!-- 3. SOURCES & REFERENCES (المصادر والمراجع) -->
  <div class="section-container">
    <div class="section-heading">٣. المصادر والمراجع والوثائق الشرعية المعتمدة</div>
    <div class="sources-list">
  `;

  doc.sources.forEach((src, idx) => {
    html += `
      <div class="source-card">
        <div class="source-title">${idx + 1}. ${src.title} (${src.dateOrCentury})</div>
        <div style="font-size: 10.5pt; color: #78350f;">
          <strong>جهة التوثيق:</strong> ${src.authorOrCustodian} | <strong>الموضع:</strong> ${src.archiveLocation}
        </div>
        <div style="font-size: 11pt; color: #451a03; margin-top: 3px;">
          ${src.description}
        </div>
      </div>
    `;
  });

  html += `
    </div>
  </div>

  <!-- 4. HISTORICAL MANUSCRIPTS & DOCUMENTS TEXT (النصوص التوثيقية للمراجع التاريخية) -->
  <div class="section-container">
    <div class="section-heading">٤. النصوص والبيانات التوثيقية للمراجع التاريخية المحققة (63 مرجعاً)</div>
    <div class="manuscripts-list">
  `;

  historicalManuscriptsList.forEach((manuscript) => {
    html += `
      <div class="manuscript-card-pdf">
        <div class="manuscript-title-pdf">
          <span class="manuscript-badge-pdf">المرجع (${manuscript.referenceNumber})</span>
          ${manuscript.title}
        </div>
        <div style="font-size: 10pt; color: #57534e; margin-bottom: 6px;">
          <strong>التصنيف:</strong> ${manuscript.categoryLabel} | <strong>التاريخ:</strong> ${manuscript.dateOrEra} | <strong>الأرشيف:</strong> ${manuscript.archiveLocation}
        </div>
        <div style="font-size: 11pt; color: #1c1917; line-height: 1.6;">
          ${manuscript.description}
        </div>
        <div class="manuscript-proof-box">
          <strong>دلالة الإثبات النسبي والتاريخي:</strong> ${manuscript.proofSignificance}
        </div>
      </div>
    `;
  });

  html += `
    </div>
  </div>

  <!-- PAGE BREAK BEFORE IMAGE GALLERY -->
  <div class="page-break"></div>

  <!-- 5. UNIFIED HIGH-RESOLUTION MANUSCRIPT PHOTOS (معرض صور الوثائق والمخطوطات الأصلية) -->
  <div class="section-container">
    <div class="section-heading">٥. معرض وألبوم صور الوثائق والمخطوطات التاريخية الأصلية (${manuscriptImages.length} وثيقة)</div>
    <p style="font-size: 11pt; color: #57534e; margin-bottom: 20px;">
      يحتوي هذا المعرض على كافة الصور والمخطوطات الأصلية المعتمدة المرفقة بكامل الدقة والوضوح (100%) دون اقتطاع.
    </p>
    <div class="gallery-images-pdf-grid">
  `;

  manuscriptImages.forEach((img) => {
    if (img.imageUrl && img.imageUrl.trim().length > 0) {
      html += `
        <div class="gallery-image-item">
          <img src="${img.imageUrl}" alt="${img.title}" class="gallery-full-img" />
          <div class="gallery-image-caption">وثيقة (${img.imageIndex}): ${img.title}</div>
          <div class="gallery-image-filename">${img.fileName} • ${img.era} • ${img.archive}</div>
        </div>
      `;
    } else {
      html += `
        <div class="gallery-image-item" style="background: #fdfbf7; border: 2px solid #b45309; padding: 16px;">
          <div style="font-family: 'Cairo', sans-serif; font-size: 13pt; font-weight: bold; color: #78350f;">
            وثيقة أرشيفية معتمدة رقم (${img.imageIndex}): ${img.title}
          </div>
          <div style="font-size: 10pt; color: #57534e; margin: 6px 0;">
            <strong>التصنيف:</strong> ${img.categoryLabel} | <strong>الحقبة:</strong> ${img.era} | <strong>الأرشيف:</strong> ${img.archive}
          </div>
          <div style="font-size: 11pt; color: #1c1917; line-height: 1.6;">
            ${img.description}
          </div>
          <div style="font-size: 9.5pt; color: #065f46; margin-top: 6px; font-weight: bold;">
            أصل الوثيقة مسجل ومحفوظ في خزانة السجلات التاريخية لذرية شارح البحر
          </div>
        </div>
      `;
    }
  });

  html += `
    </div>
  </div>

  <!-- PAGE BREAK BEFORE TREE -->
  <div class="page-break"></div>

  <!-- 6. COMPLETE SEQUENTIAL LINEAGE TREE (المشجر الهرمي التتابعي الكامل) -->
  <div class="section-container">
    <div class="section-heading">٦. المشجر الهرمي التتابعي الموثق بالأكواد والأجيال</div>
    <div class="tree-grid">
  `;

  sequentialLineageBlocks.forEach((block, idx) => {
    const validChildren = block.children.filter(
      (c) => c.name && c.name.trim() !== '' && c.name.trim() !== '-' && !c.name.includes('لم تتم موافاتنا')
    );

    if (validChildren.length === 0) {
      html += `
        <div class="block-card">
          <div class="father-header">
            [${idx + 1}] ${block.fatherCode ? `${block.fatherCode} – ` : ''}${block.fatherName}
          </div>
          <div class="branch-tag">أعقاب شارح البحر</div>
        </div>
      `;
    } else {
      html += `
        <div class="block-card">
          <div class="father-header">
            [${idx + 1}] أعقاب: ${block.fatherCode ? `${block.fatherCode} – ` : ''}${block.fatherName}
          </div>
          <div class="branch-tag">أعقاب شارح البحر</div>
          <div class="children-container">
            <div class="children-title">وأعقب:</div>
      `;

      validChildren.forEach((c) => {
        let badges = '';
        if (c.isMartyr) badges += '<span class="badge-martyr">شهيد</span>';
        if (c.noOffspring) badges += '<span class="badge-no-offspring">لم يعقب</span>';
        if (c.hasDaughters) badges += '<span class="badge-daughters">أعقب بنات</span>';

        html += `
          <div class="child-row">
            <span class="child-code">${c.code}</span> – 
            <span class="child-name">${c.name}</span>
            ${badges}
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    }
  });

  html += `
    </div>
  </div>

  <script>
    window.onload = function() {
      window.print();
    };
  </script>
</body>
</html>
  `;

  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
  } else {
    // Fallback using iframe if popup is blocked
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const frameDoc = iframe.contentWindow?.document || iframe.contentDocument;
    if (frameDoc) {
      frameDoc.open();
      frameDoc.write(html);
      frameDoc.close();
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    }
  }
}

/**
 * FEATURE 2: DEDICATED BRANCH PDF GENERATOR
 * Generates a custom, trimmed PDF document containing ONLY:
 * Page 1: Standard styled Title Page ("من أعقاب شارح البحر... تأليف عبد الإله عبد القادر الجنيد")
 * Page 2: Standard formatted Acknowledgments Page ("شكر وتقدير")
 * Subsequent Pages: ONLY the extracted genealogy lineage and descendants of the selected branch
 * EXCLUSIONS: Strictly DOES NOT include Introduction, Objectives, Sources/References, or Documentary Gallery.
 */
export function exportBranchLineageToPdf(
  input: SequentialBranchBlock[] | BranchHierarchyResult | { allBlocks: SequentialBranchBlock[]; branchTitle: string; target: SequentialBranchBlock | null },
  maybeBranchTitle?: string,
  maybeTargetNode?: SequentialBranchBlock | null
): void {
  let branchBlocks: SequentialBranchBlock[];
  let branchTitle: string;
  let targetNode: SequentialBranchBlock | null | undefined;

  if (Array.isArray(input)) {
    branchBlocks = input;
    branchTitle = maybeBranchTitle || 'فرع محدد';
    targetNode = maybeTargetNode;
  } else if ('target' in input && input.target) {
    // Generate the strict sequential generational cascade starting from [الجيل 1] down to target and descendants
    branchBlocks = buildBranchFullGenerationalBlocks(input as BranchHierarchyResult);
    branchTitle = input.branchTitle || 'فرع محدد';
    targetNode = input.target;
  } else {
    branchBlocks = input.allBlocks;
    branchTitle = input.branchTitle || 'فرع محدد';
    targetNode = input.target;
  }

  const cleanTitle = branchTitle.replace(/^فرع:\s*/, '').trim();

  let html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <title>وثيقة نسب فرع: ${cleanTitle}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@400;600;700;900&display=swap');
    
    @page {
      size: A4;
      margin: 15mm 12mm 15mm 12mm;
      @bottom-right {
        content: counter(page);
        font-family: 'Cairo', sans-serif;
        font-size: 9pt;
        color: #78716c;
      }
      @bottom-left {
        content: "مشجر فرع: ${cleanTitle} • آل الجنيد";
        font-family: 'Cairo', sans-serif;
        font-size: 8pt;
        color: #78716c;
      }
    }

    body {
      font-family: 'Amiri', 'Traditional Arabic', serif;
      font-size: 13.5pt;
      line-height: 1.8;
      color: #1c1917;
      background-color: #ffffff;
      margin: 0;
      padding: 10px;
    }

    .header-banner {
      text-align: center;
      border-bottom: 2px solid #065f46;
      padding-bottom: 12px;
      margin-bottom: 16px;
    }

    .basmalah {
      font-size: 16pt;
      font-weight: bold;
      color: #064e3b;
      margin-bottom: 6px;
    }

    .main-title {
      font-family: 'Cairo', sans-serif;
      font-size: 20pt;
      font-weight: 900;
      color: #064e3b;
      margin: 4px 0;
    }

    .sub-title {
      font-size: 12pt;
      color: #78350f;
      font-weight: bold;
      margin: 4px 0;
    }

    .section-container {
      margin-bottom: 22px;
      page-break-inside: avoid;
    }

    .section-heading {
      font-family: 'Cairo', sans-serif;
      font-size: 14pt;
      font-weight: bold;
      color: #ffffff;
      background: #064e3b;
      padding: 6px 14px;
      border-radius: 6px;
      margin-bottom: 12px;
      border-right: 5px solid #d97706;
    }

    .page-break {
      page-break-before: always;
      break-before: page;
    }

    .pdf-cover-page {
      box-sizing: border-box;
      width: 100%;
      min-height: calc(100vh - 40px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      border: 4px double #92400e;
      outline: 2px solid #b45309;
      outline-offset: -10px;
      border-radius: 12px;
      padding: 40px 32px 32px 32px;
      background: #fdfbf7;
      margin: 0 0 35px 0;
      page-break-after: always;
      break-after: page;
      page-break-inside: avoid;
      break-inside: avoid;
      position: relative;
    }

    .pdf-credits-page {
      box-sizing: border-box;
      width: 100%;
      min-height: calc(100vh - 40px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 4px double #92400e;
      outline: 2px solid #b45309;
      outline-offset: -10px;
      border-radius: 12px;
      padding: 38px 32px 32px 32px;
      background: #fdfbf7;
      margin: 0 0 35px 0;
      page-break-after: always;
      break-after: page;
      page-break-inside: avoid;
      break-inside: avoid;
      position: relative;
    }

    .tree-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .block-card {
      border: 1px solid #d6d3d1;
      border-radius: 6px;
      padding: 10px 14px;
      background: #ffffff;
      page-break-inside: avoid;
      margin-bottom: 10px;
    }

    .father-header {
      font-family: 'Cairo', sans-serif;
      font-size: 13pt;
      font-weight: bold;
      color: #065f46;
      background: #f0fdf4;
      padding: 6px 12px;
      border-radius: 4px;
      border-right: 4px solid #10b981;
      margin-bottom: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 6px;
    }

    .father-header.target-header {
      background: #fefce8;
      border-right: 5px solid #d97706;
      color: #78350f;
    }

    .father-header.ancestor-header {
      background: #f0f9ff;
      border-right: 4px solid #0284c7;
      color: #0369a1;
    }

    .branch-tag {
      font-size: 9.5pt;
      color: #047857;
      margin-bottom: 4px;
      font-style: italic;
    }

    .children-container {
      margin-right: 15px;
    }

    .children-title {
      font-weight: bold;
      font-size: 11pt;
      color: #44403c;
      margin-bottom: 4px;
    }

    .child-row {
      font-size: 12pt;
      padding: 3px 0;
      border-bottom: 1px dotted #e7e5e4;
    }

    .child-code {
      font-family: 'Cairo', sans-serif;
      font-weight: bold;
      color: #047857;
      display: inline-block;
      min-width: 45px;
    }

    .badge-martyr {
      background: #fef2f2;
      color: #b91c1c;
      border: 1px solid #fecaca;
      padding: 1px 6px;
      border-radius: 4px;
      font-size: 9pt;
      font-weight: bold;
      margin-right: 5px;
    }

    .badge-no-offspring {
      background: #f3f4f6;
      color: #4b5563;
      border: 1px solid #e5e7eb;
      padding: 1px 6px;
      border-radius: 4px;
      font-size: 9pt;
      margin-right: 5px;
    }

    .badge-daughters {
      background: #fdf4ff;
      color: #a21caf;
      border: 1px solid #f5d0fe;
      padding: 1px 6px;
      border-radius: 4px;
      font-size: 9pt;
      margin-right: 5px;
    }

    .badge-role {
      font-family: 'Cairo', sans-serif;
      font-size: 8.5pt;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: bold;
    }

    .branch-summary-box {
      background: #f8fafc;
      border: 1.5px solid #cbd5e1;
      border-radius: 8px;
      padding: 14px 18px;
      margin-bottom: 18px;
      border-right: 6px solid #065f46;
    }

    @media print {
      body {
        padding: 0;
        margin: 0;
      }
      .pdf-cover-page {
        min-height: 260mm;
        height: 260mm;
        max-height: 260mm;
        padding: 36px 30px 28px 30px;
        margin: 0;
        page-break-after: always;
        break-after: page;
      }
      .pdf-credits-page {
        min-height: 260mm;
        height: 260mm;
        max-height: 260mm;
        padding: 36px 30px 28px 30px;
        margin: 0;
        page-break-after: always;
        break-after: page;
      }
    }
  </style>
</head>
<body>

  <!-- ========================================================================= -->
  <!-- PAGE 1: TITLE PAGE (صفحة الغلاف والعنوان) -->
  <!-- ========================================================================= -->
  <div class="pdf-cover-page">
    <div style="width: 100%; display: flex; flex-direction: column; align-items: center; text-align: center;">
      <div style="font-family: 'Amiri', serif; font-size: 20pt; color: #064e3b; margin-bottom: 20px; font-weight: bold; letter-spacing: 1px;">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </div>

      <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 28pt; font-weight: bold; color: #064e3b; line-height: 1.4; margin-bottom: 14px; max-width: 96%;">
        من أعقاب شارح البحر: أحمد بن عبد الله الحضرمي
      </div>

      <div style="font-family: 'Cairo', sans-serif; font-size: 22pt; font-weight: 800; color: #92400e; margin-bottom: 18px;">
        آل الجنيد في تعز
      </div>

      <div style="width: 200px; height: 3px; background: linear-gradient(to right, transparent, #b45309, transparent); margin: 6px auto 20px;"></div>

      <div style="font-family: 'Cairo', sans-serif; font-size: 15pt; color: #57534e; margin-bottom: 6px; font-weight: 600;">
        تأليف
      </div>

      <div style="font-family: 'Cairo', sans-serif; font-size: 25pt; font-weight: 900; color: #065f46; margin-bottom: 20px;">
        عبد الإله عبد القادر الجنيد
      </div>
    </div>

    <!-- Lineage Box -->
    <div style="width: 100%; padding: 20px 24px; background: #f0fdf4; border: 2px solid #86efac; border-radius: 10px; text-align: justify; box-shadow: inset 0 0 0 1px #bbf7d0;">
      <strong style="color: #064e3b; display: block; margin-bottom: 8px; font-family: 'Cairo', sans-serif; font-size: 14pt; text-align: center; border-bottom: 1.5px solid #86efac; padding-bottom: 6px;">
        عمود النسب الشريف المتصل:
      </strong>
      <div style="font-size: 12.5pt; line-height: 2.1; color: #14532d; font-family: 'Amiri', serif; font-weight: 600;">
        أحمد بن عبد الله الحضرمي بن محمد بن محمد بن علي بن القاسم بن أحمد الشيخ البركاني بن شارح البحر الشيخ سعيد بن أبي الأسرار علي بن إبراهيم السروري بن علي بن محمد بن الحسن بن المحسن بن يحيى الصوفي بن جعفر الزكي بن الإمام الهادي علي النقي بن الإمام الجواد محمد التقي بن الإمام علي الرضا بن الإمام موسى الكاظم بن الإمام جعفر الصادق بن الإمام محمد الباقر بن الإمام علي زين العابدين بن سيد شباب أهل الجنة وسبط رسول الله وسيد الشهداء الإمام الحسين بن الإمام علي بن أبي طالب سلام الله عليهم أجمعين
      </div>
    </div>
  </div>

  <div class="page-break"></div>

  <!-- ========================================================================= -->
  <!-- PAGE 2: ACKNOWLEDGMENTS & CREDITS (شكر وتقدير) -->
  <!-- ========================================================================= -->
  <div class="pdf-credits-page">
    <div style="text-align: center; border-bottom: 2.5px solid #059669; padding-bottom: 14px; margin-bottom: 18px;">
      <h2 style="font-family: 'Cairo', sans-serif; font-size: 24pt; font-weight: 900; color: #064e3b; margin: 0 0 8px 0;">
        شكر وتقدير:
      </h2>
      <p style="font-family: 'Amiri', serif; font-size: 15pt; color: #44403c; margin: 0; font-weight: bold;">
        نتقدم بالشكر والتقدير لكل من تعاون وساهم في إنجاز هذا العمل.
      </p>
    </div>

    <!-- Top Two Sections -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 18px;">
      <!-- Section 1: الإشراف والمراجعة -->
      <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-right: 6px solid #059669; padding: 16px 18px; border-radius: 8px;">
        <h3 style="font-family: 'Cairo', sans-serif; font-size: 14pt; font-weight: bold; color: #064e3b; margin: 0 0 10px 0; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 6px;">
          * الإشراف والمراجعة:
        </h3>
        <ul style="margin: 0; padding-right: 18px; font-size: 13pt; color: #1c1917; line-height: 2.1; font-family: 'Amiri', serif; font-weight: bold;">
          <li>السيد العلامة: محمد بن عبد الولي البركاني</li>
          <li>السيد العلامة: عدنان بن أحمد بن يحيى الجنيد</li>
          <li>السيد العارف: سعيد بن عبد الغني الجنيد</li>
        </ul>
      </div>

      <!-- Section 2: المعلومات والإنترنت -->
      <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-right: 6px solid #0284c7; padding: 16px 18px; border-radius: 8px;">
        <h3 style="font-family: 'Cairo', sans-serif; font-size: 14pt; font-weight: bold; color: #0369a1; margin: 0 0 10px 0; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 6px;">
          * المعلومات والإنترنت:
        </h3>
        <ul style="margin: 0; padding-right: 18px; font-size: 13pt; color: #1c1917; line-height: 2.1; font-family: 'Amiri', serif; font-weight: bold;">
          <li>علاء بن عبد العليم الجنيد</li>
          <li>زيد بن عبد الإله بن عبد القادر الجنيد</li>
        </ul>
      </div>
    </div>

    <!-- Section 3: مراجعة تسلسل المشجرات -->
    <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-right: 6px solid #d97706; padding: 18px 22px; border-radius: 8px; flex-grow: 1; display: flex; flex-direction: column; justify-content: flex-start;">
      <h3 style="font-family: 'Cairo', sans-serif; font-size: 14pt; font-weight: bold; color: #b45309; margin: 0 0 12px 0; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 6px;">
        * مراجعة تسلسل المشجرات:
      </h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px 24px; font-size: 13pt; color: #1c1917; line-height: 2.0; font-family: 'Amiri', serif; font-weight: bold;">
        <div>- فهد بن محمد بن ناجي الجنيد</div>
        <div>- أحمد بن محمد بن عبد الله الجنيد</div>
        <div>- عبد الوهاب بن محمد بن عبد القادر الجنيد</div>
        <div>- الشهيد: نبيل بن إبراهيم بن محمد الجنيد</div>
        <div>- حسين بن عبد الصمد بن أحمد الجنيد</div>
        <div>- الشاعر: محمد بن سعيد بن سيف الجنيد</div>
        <div>- د. هشام بن محمد بن وجيه الجنيد</div>
        <div>- فؤاد بن عبد الكريم بن أحمد الجنيد</div>
        <div>- عبد الله بن عبد الوهاب بن محمد الجنيد</div>
        <div>- أمين بن مقبل بن عبد الواسع الجنيد</div>
        <div>- منذر بن نبيل بن يوسف الجنيد</div>
        <div>- عدنان بن عبد الله بن سرور الجنيد</div>
        <div>- خالد بن عثمان البركاني</div>
        <div>- أمين البركاني</div>
      </div>
    </div>
  </div>

  <div class="page-break"></div>

  <!-- ========================================================================= -->
  <!-- SUBSEQUENT PAGES: SELECTED BRANCH LINEAGE & DESCENDANTS ONLY -->
  <!-- STRICT EXCLUSIONS: No Introduction, No Objectives, No Sources, No Gallery -->
  <!-- ========================================================================= -->
  <div class="header-banner">
    <div class="basmalah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
    <h1 class="main-title">مشجر وتفصيل نسب فرع: ${cleanTitle}</h1>
    <p class="sub-title">من أعقاب شارح البحر: أحمد بن عبد الله الحضرمي • آل الجنيد في تعز</p>
  </div>

  <div class="branch-summary-box">
    <div style="font-family: 'Cairo', sans-serif; font-weight: bold; font-size: 12pt; color: #064e3b; margin-bottom: 6px;">
      وثيقة المشجر المستخرج الخاص بالفرع والذرية المباركة:
    </div>
    <div style="font-size: 11pt; color: #334155; line-height: 1.8;">
      ${targetNode ? `<strong>الجد الجامع للفرع:</strong> ${targetNode.fatherName} <br/>` : ''}
      <strong>نطاق الوثيقة:</strong> تتضمن هذه الوثيقة المخصصة عمود النسب الشريف، وسلسلة الآباء والأجداد وصولاً إلى الجد الجامع للفرع، وكافة أعقابه وذريته الموثقة في مشجر شارح البحر.
      <br/>
      <strong>إجمالي الكتل النسبية الموثقة في هذا الفرع:</strong> ${branchBlocks.length} كتلة توثيقية.
    </div>
  </div>

  <div class="section-container">
    <div class="section-heading">تسلسل الأنساب والأعقاب والأبناء للفرع المحدد بالأكواد والأجيال</div>
    <div class="tree-grid">
  `;

  const targetId = targetNode?.id;
  const targetIndex = targetNode ? branchBlocks.findIndex((b) => b.id === targetId) : -1;

  branchBlocks.forEach((block, idx) => {
    const isTarget = targetId && block.id === targetId;
    const isAncestor = targetIndex !== -1 && idx < targetIndex;
    const isDescendant = targetIndex !== -1 && idx > targetIndex;

    let roleBadge = '';
    let headerClass = 'father-header';

    if (block.generation === 1) {
      roleBadge = `<span class="badge-role" style="background: #fef3c7; color: #78350f; border: 1px solid #fde68a; font-weight: bold;">👑 رأس السلسلة النبوية العلوية المطهرة</span>`;
      headerClass += ' ancestor-header';
    } else if (block.generation < 18) {
      roleBadge = `<span class="badge-role" style="background: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd;">⬆ عمود النسب الشريف المتصل</span>`;
      headerClass += ' ancestor-header';
    } else if (block.generation === 18) {
      roleBadge = `<span class="badge-role" style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; font-weight: bold;">⭐ سيدي شارح البحر الشيخ سعيد</span>`;
      headerClass += ' ancestor-header';
    } else if (block.generation < 25) {
      roleBadge = `<span class="badge-role" style="background: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd;">⬆ سلسلة الأجداد المحققة</span>`;
      headerClass += ' ancestor-header';
    } else if (block.generation === 25) {
      roleBadge = `<span class="badge-role" style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; font-weight: bold;">⭐ سيدي أحمد بن عبد الله الحضرمي</span>`;
      headerClass += ' ancestor-header';
    } else if (isTarget) {
      headerClass += ' target-header';
      roleBadge = `<span class="badge-role" style="background: #fef3c7; color: #92400e; border: 1px solid #fde68a; font-weight: bold;">🎯 الجد الجامع للفرع</span>`;
    } else if (isAncestor) {
      headerClass += ' ancestor-header';
      roleBadge = `<span class="badge-role" style="background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0;">⬆ سلسلة الآباء والأجداد</span>`;
    } else if (isDescendant) {
      roleBadge = `<span class="badge-role" style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0;">🌿 أعقاب وذرية الفرع</span>`;
    }

    const cleanFatherName = block.fatherName
      .replace(/^\[الجيل \d+\]\s*/, '')
      .replace(/^🎯\s*الجد الجامع للفرع:\s*/, '')
      .replace(/^أعقاب:\s*/, '');

    const validChildren = block.children.filter(
      (c) => c.name && c.name.trim() !== '' && c.name.trim() !== '-' && !c.name.includes('لم تتم موافاتنا')
    );

    if (validChildren.length === 0) {
      html += `
        <div class="block-card">
          <div class="${headerClass}">
            <div>
              <span>[${idx + 1}]</span>
              <span>[الجيل ${block.generation}] ${block.fatherCode ? `${block.fatherCode} – ` : ''}${isTarget ? '🎯 الجد الجامع للفرع: ' : ''}${cleanFatherName}</span>
            </div>
            <div>
              <span class="badge-role" style="background: #f1f5f9; color: #475569;">الجيل ${block.generation}</span>
              ${roleBadge}
            </div>
          </div>
          <div class="branch-tag">${block.mainBranch || 'أعقاب شارح البحر'}</div>
        </div>
      `;
    } else {
      html += `
        <div class="block-card">
          <div class="${headerClass}">
            <div>
              <span>[${idx + 1}]</span>
              <span>[الجيل ${block.generation}] ${block.fatherCode ? `${block.fatherCode} – ` : ''}${isTarget ? '🎯 الجد الجامع للفرع: ' : ''}${cleanFatherName}</span>
            </div>
            <div>
              <span class="badge-role" style="background: #f1f5f9; color: #475569;">الجيل ${block.generation}</span>
              ${roleBadge}
            </div>
          </div>
          <div class="branch-tag">${block.mainBranch || 'أعقاب شارح البحر'}</div>
          <div class="children-container">
            <div class="children-title">وأعقب (${validChildren.length}):</div>
      `;

      validChildren.forEach((c) => {
        let badge = '';
        if (c.isMartyr) badge = ' <span class="badge-martyr">🕊️ (شهيد)</span>';
        if (c.noOffspring) badge = ' <span class="badge-no-offspring">🚫 (لم يعقب)</span>';
        if (c.hasDaughters) badge = ' <span class="badge-daughters">🌸 (أعقب بنات)</span>';
        html += `
          <div class="child-row">
            • <span class="child-code">${c.code}</span> – ${c.name}${badge}
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    }
  });

  html += `
    </div>
  </div>

</body>
</html>
  `;

  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
  } else {
    // Fallback using iframe if popup is blocked
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const frameDoc = iframe.contentWindow?.document || iframe.contentDocument;
    if (frameDoc) {
      frameDoc.open();
      frameDoc.write(html);
      frameDoc.close();
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    }
  }
}

/**
 * Exports an elegant, publication-grade PDF containing the Visual Interactive Tree Chart
 * for the selected branch with dynamic auto-scaling and complete ancestor chain.
 */
export function exportBranchTreeDiagramToPdf(hierarchy: BranchHierarchyResult): void {
  const { target, descendants, ancestors, branchTitle } = hierarchy;
  if (!target) return;

  const cleanTitle = branchTitle.replace(/^فرع:\s*/, '').trim();

  // 1. Build branch tree
  const treeRoot = buildBranchHierarchyTree(target, descendants);

  // 2. Count nodes and max depth for dynamic auto-scaling
  let totalNodes = 0;
  let maxDepth = 0;
  function measureTree(node: BranchHierarchyTreeNode, depth = 1) {
    totalNodes++;
    if (depth > maxDepth) maxDepth = depth;
    node.children?.forEach((c) => measureTree(c, depth + 1));
  }
  measureTree(treeRoot);

  // Dynamic Auto-Scaling Parameters
  let cardWidth = 145; // px
  let fontSize = 9; // pt
  let padding = '6px 8px';
  let gap = 12; // px
  let stemH = 16; // px

  if (totalNodes > 60 || maxDepth > 6) {
    cardWidth = 96;
    fontSize = 7;
    padding = '3px 5px';
    gap = 6;
    stemH = 12;
  } else if (totalNodes > 30 || maxDepth > 4) {
    cardWidth = 118;
    fontSize = 8;
    padding = '4px 6px';
    gap = 8;
    stemH = 14;
  } else if (totalNodes <= 15) {
    cardWidth = 165;
    fontSize = 10.5;
    padding = '8px 12px';
    gap = 16;
    stemH = 20;
  }

  // Recursive HTML tree generator
  function renderNodeHtml(node: BranchHierarchyTreeNode, isRoot = false): string {
    const isTarget = isRoot || node.generation === target!.generation;
    const hasChildren = node.children && node.children.length > 0;

    let cardBg = '#ffffff';
    let cardBorder = '#10b981';
    let cardShadow = '0 1px 3px rgba(0,0,0,0.08)';
    let nameColor = '#0f172a';

    if (isTarget) {
      cardBg = '#fef3c7';
      cardBorder = '#d97706';
      nameColor = '#78350f';
    } else if (node.isMartyr) {
      cardBg = '#fff1f2';
      cardBorder = '#f43f5e';
      nameColor = '#881337';
    } else if (node.noOffspring) {
      cardBg = '#fefce8';
      cardBorder = '#eab308';
      nameColor = '#713f12';
    }

    let badgesHtml = '';
    if (isTarget) {
      badgesHtml += `<div style="font-size: 6.5pt; font-weight: bold; background: #d97706; color: #fff; padding: 1px 6px; border-radius: 999px; margin-bottom: 3px; display: inline-block;">🎯 الجد الجامع للفرع</div>`;
    }
    if (node.isMartyr) {
      badgesHtml += `<div style="font-size: 6pt; font-weight: bold; background: #e11d48; color: #fff; padding: 1px 5px; border-radius: 999px; margin-bottom: 2px; display: inline-block;">🕊️ شهيد</div>`;
    }
    if (node.noOffspring) {
      badgesHtml += `<div style="font-size: 6pt; font-weight: bold; background: #eab308; color: #000; padding: 1px 5px; border-radius: 999px; margin-bottom: 2px; display: inline-block;">🚫 لم يعقب</div>`;
    }

    let codeHtml = node.code
      ? `<span style="font-size: 6.5pt; font-family: monospace; background: #ecfdf5; color: #065f46; border: 0.5px solid #a7f3d0; padding: 1px 4px; border-radius: 3px; font-weight: bold;">${node.code}</span>`
      : '';
    let genHtml = `<span style="font-size: 6.5pt; font-family: sans-serif; background: #f1f5f9; color: #475569; border: 0.5px solid #cbd5e1; padding: 1px 4px; border-radius: 3px;">الجيل ${node.generation}</span>`;

    let nodeCard = `
      <div style="
        width: ${cardWidth}px;
        background: ${cardBg};
        border: 1.5px solid ${cardBorder};
        border-radius: 6px;
        padding: ${padding};
        text-align: center;
        box-shadow: ${cardShadow};
        position: relative;
        box-sizing: border-box;
      ">
        ${badgesHtml}
        <div style="font-size: ${fontSize}pt; font-weight: bold; color: ${nameColor}; line-height: 1.25; margin-bottom: 3px;">
          ${node.name}
        </div>
        <div style="display: flex; justify-content: center; gap: 4px; align-items: center; flex-wrap: wrap;">
          ${genHtml}
          ${codeHtml}
        </div>
      </div>
    `;

    if (!hasChildren) {
      return `
        <div style="display: flex; flex-direction: column; align-items: center;">
          ${nodeCard}
        </div>
      `;
    }

    // Children with connector lines
    const childrenCount = node.children.length;
    let childrenHtml = '';

    node.children.forEach((c, idx) => {
      const isFirst = idx === 0;
      const isLast = idx === childrenCount - 1;

      // Crossbar CSS
      let crossbarStyle = 'border-top: 2px solid #10b981;';
      if (childrenCount === 1) {
        crossbarStyle = 'display: none;';
      } else if (isFirst) {
        crossbarStyle += ' width: 50%; margin-left: auto;';
      } else if (isLast) {
        crossbarStyle += ' width: 50%; margin-right: auto;';
      } else {
        crossbarStyle += ' width: 100%;';
      }

      childrenHtml += `
        <div style="display: flex; flex-direction: column; align-items: center; padding: 0 ${gap / 2}px; position: relative;">
          ${childrenCount > 1 ? `<div style="position: absolute; top: 0; left: 0; right: 0; height: ${stemH}px; ${crossbarStyle}"></div>` : ''}
          <div style="width: 2px; height: ${stemH}px; background: #10b981; margin-bottom: 0;"></div>
          ${renderNodeHtml(c, false)}
        </div>
      `;
    });

    return `
      <div style="display: flex; flex-direction: column; align-items: center;">
        ${nodeCard}
        <div style="width: 2px; height: ${stemH}px; background: #10b981;"></div>
        <div style="display: flex; justify-content: center; align-items: flex-start;">
          ${childrenHtml}
        </div>
      </div>
    `;
  }

  // Render ancestral chain banner
  const intermediate = getIntermediateAncestors(target, ancestors);
  let intermediateChain = '';
  intermediate.forEach((im) => {
    intermediateChain += ` ← ${im.name} [الجيل ${im.generation}]`;
  });

  const doc = comprehensiveDocumentation;

  let html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <title>المخطط الشجري التفاعلي لفرع: ${cleanTitle}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@400;600;700;900&display=swap');

    @page {
      size: A4 landscape;
      margin: 12mm 10mm 12mm 10mm;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: 'Cairo', sans-serif;
      background: #ffffff;
      color: #0f172a;
      margin: 0;
      padding: 0;
      direction: rtl;
    }

    .pdf-cover-page {
      min-height: 180mm;
      height: 180mm;
      padding: 24px 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 6px double #065f46;
      border-radius: 12px;
      margin-bottom: 20px;
      page-break-after: always;
      break-after: page;
      background: #ffffff;
    }

    .pdf-credits-page {
      min-height: 180mm;
      height: 180mm;
      padding: 24px 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 4px solid #cbd5e1;
      border-radius: 12px;
      margin-bottom: 20px;
      page-break-after: always;
      break-after: page;
      background: #ffffff;
    }

    .tree-diagram-page {
      padding: 10px;
      width: 100%;
    }

    .header-banner {
      background: linear-gradient(135deg, #064e3b 0%, #065f46 60%, #047857 100%);
      color: #ffffff;
      padding: 14px 20px;
      border-radius: 10px;
      text-align: center;
      margin-bottom: 14px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .spine-banner {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-right: 5px solid #059669;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 8.5pt;
      color: #334155;
      margin-bottom: 14px;
      line-height: 1.6;
    }

    .stats-row {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
      justify-content: center;
    }

    .stat-pill {
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      border-radius: 6px;
      padding: 6px 14px;
      font-size: 8.5pt;
      font-weight: bold;
      color: #065f46;
    }

    @media print {
      body { padding: 0; margin: 0; }
    }
  </style>
</head>
<body>

  <!-- ========================================================================= -->
  <!-- PAGE 1: TITLE PAGE (صفحة الغلاف والعنوان) -->
  <!-- ========================================================================= -->
  <div class="pdf-cover-page">
    <div style="width: 100%; display: flex; flex-direction: column; align-items: center; text-align: center;">
      <div style="font-family: 'Amiri', serif; font-size: 18pt; color: #064e3b; margin-bottom: 12px; font-weight: bold;">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </div>

      <div style="font-family: 'Amiri', serif; font-size: 24pt; font-weight: bold; color: #064e3b; line-height: 1.3; margin-bottom: 10px;">
        من أعقاب شارح البحر: أحمد بن عبد الله الحضرمي
      </div>

      <div style="font-family: 'Cairo', sans-serif; font-size: 18pt; font-weight: 800; color: #92400e; margin-bottom: 12px;">
        وثيقة المخطط الشجري التفاعلي لنسب فرع:
      </div>

      <div style="background: #fef3c7; border: 2.5px solid #d97706; padding: 10px 24px; border-radius: 12px; display: inline-block; margin-bottom: 14px; box-shadow: 0 4px 6px rgba(217,119,6,0.15);">
        <div style="font-family: 'Cairo', sans-serif; font-size: 20pt; font-weight: 900; color: #78350f;">
          ${cleanTitle}
        </div>
      </div>

      <div style="font-family: 'Amiri', serif; font-size: 13pt; color: #4b5563; font-weight: bold; margin-bottom: 14px;">
        مخطط شجري تفاعلي متكامل • يوضح الأبناء والأحفاد والفروع الممتدة بدقة هندسية موثقة
      </div>
    </div>

    <!-- Metadata Table -->
    <div style="width: 85%; margin: 0 auto 10px auto; border-top: 1.5px solid #e2e8f0; border-bottom: 1.5px solid #e2e8f0; padding: 10px 0;">
      <table style="width: 100%; font-size: 10pt; border-collapse: collapse;">
        <tr>
          <td style="padding: 4px 8px; color: #064e3b; font-weight: bold; width: 22%;">الجد الجامع للفرع:</td>
          <td style="padding: 4px 8px; color: #1e293b; font-weight: 700;">${target.fatherName}</td>
        </tr>
        <tr>
          <td style="padding: 4px 8px; color: #064e3b; font-weight: bold;">جيل الفرع والمشجر:</td>
          <td style="padding: 4px 8px; color: #1e293b;">الجيل ${target.generation} (من نسل الإمام علي بن أبي طالب عليه السلام)</td>
        </tr>
        <tr>
          <td style="padding: 4px 8px; color: #064e3b; font-weight: bold;">كود رأس الفرع:</td>
          <td style="padding: 4px 8px; color: #1e293b; font-family: monospace; font-weight: bold;">${target.fatherCode || 'غير محدد'}</td>
        </tr>
        <tr>
          <td style="padding: 4px 8px; color: #064e3b; font-weight: bold;">المؤلف والباحث:</td>
          <td style="padding: 4px 8px; color: #1e293b;">عبد الإله عبد القادر الجنيد</td>
        </tr>
      </table>
    </div>

    <!-- Bottom verification seal -->
    <div style="width: 100%; display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px solid #cbd5e1; padding-top: 10px;">
      <div style="text-align: right; font-size: 8.5pt; color: #64748b;">
        <div>تاريخ استخراج الوثيقة: ${new Date().toLocaleDateString('ar-SA')} م</div>
        <div>نظام توثيق مشجر السادة الأشراف آل الجنيد باليمن</div>
      </div>
      <div style="text-align: center; border: 1.5px dashed #059669; padding: 6px 16px; border-radius: 8px; background: #ecfdf5;">
        <div style="font-size: 9pt; font-weight: bold; color: #065f46;">وثيقة معتمدة ومحققة</div>
        <div style="font-size: 7.5pt; color: #047857;">مخطط شجري تسلسلي</div>
      </div>
    </div>
  </div>

  <!-- ========================================================================= -->
  <!-- PAGE 2: CREDITS & ACKNOWLEDGMENTS (صفحة الشكر والتقدير) -->
  <!-- ========================================================================= -->
  <div class="pdf-credits-page">
    <div style="text-align: center; margin-bottom: 12px;">
      <div style="font-family: 'Amiri', serif; font-size: 16pt; color: #065f46; font-weight: bold;">
        شكر وتقدير وعرفان
      </div>
      <div style="font-size: 9.5pt; color: #475569; margin-top: 4px;">
        نتقدم بعظيم الشكر والامتنان لكل من ساهم في مراجعة وتوثيق هذا المشجر الشريف
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 14px;">
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px;">
        <div style="font-weight: bold; color: #064e3b; font-size: 10pt; margin-bottom: 8px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">
          ⚖️ الإشراف والمراجعة والتحقيق:
        </div>
        <ul style="margin: 0; padding-right: 18px; font-size: 9pt; color: #334155; line-height: 1.6;">
          <li>السيد العلامة: محمد بن عبد الولي البركاني</li>
          <li>السيد العلامة: عدنان بن أحمد بن يحيى الجنيد</li>
          <li>السيد العارف: سعيد بن عبد الغني الجنيد</li>
        </ul>
      </div>

      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px;">
        <div style="font-weight: bold; color: #064e3b; font-size: 10pt; margin-bottom: 8px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">
          💻 المعلومات والتقنية والإنترنت:
        </div>
        <ul style="margin: 0; padding-right: 18px; font-size: 9pt; color: #334155; line-height: 1.6;">
          <li>علاء بن عبد العليم الجنيد</li>
          <li>زيد بن عبد الإله بن عبد القادر الجنيد</li>
        </ul>
      </div>
    </div>

    <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; margin-bottom: 14px;">
      <div style="font-weight: bold; color: #064e3b; font-size: 10pt; margin-bottom: 8px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">
        📜 مراجعة تسلسل المشجرات والوثائق:
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <ul style="margin: 0; padding-right: 18px; font-size: 9pt; color: #334155; line-height: 1.6;">
          <li>فهد بن محمد بن ناجي الجنيد</li>
          <li>أحمد بن محمد بن عبد الله الجنيد</li>
          <li>عبد الوهاب بن محمد بن عبد القادر الجنيد</li>
          <li>الشهيد: نبيل بن إبراهيم بن محمد الجنيد</li>
          <li>حسين بن عبد الصمد بن أحمد الجنيد</li>
          <li>الشاعر: محمد بن سعيد بن سيف الجنيد</li>
          <li>د. هشام بن محمد بن وجيه الجنيد</li>
        </ul>
        <ul style="margin: 0; padding-right: 18px; font-size: 9pt; color: #334155; line-height: 1.6;">
          <li>فؤاد بن عبد الكريم بن أحمد الجنيد</li>
          <li>عبد الله بن عبد الوهاب بن محمد الجنيد</li>
          <li>أمين بن مقبل بن عبد الواسع الجنيد</li>
          <li>منذر بن نبيل بن يوسف الجنيد</li>
          <li>عدنان بن عبد الله بن سرور الجنيد</li>
          <li>خالد بن عثمان البركاني</li>
          <li>أمين البركاني</li>
        </ul>
      </div>
    </div>

    <div style="text-align: center; font-size: 8.5pt; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 8px;">
      جميع الحقوق محفوظة © وثيقة مشجر آل الجنيد في تعز • تحقيق وتوثيق: عبد الإله عبد القادر الجنيد
    </div>
  </div>

  <!-- ========================================================================= -->
  <!-- PAGE 3+: TREE DIAGRAM (المخطط الشجري التفاعلي) -->
  <!-- ========================================================================= -->
  <div class="tree-diagram-page">
    <div class="header-banner">
      <div style="font-family: 'Amiri', serif; font-size: 13pt; margin-bottom: 4px; font-weight: bold;">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </div>
      <div style="font-size: 16pt; font-weight: 900; letter-spacing: 0.5px;">
        المخطط الشجري لنسب: ${cleanTitle}
      </div>
      <div style="font-size: 9pt; opacity: 0.9; margin-top: 2px;">
        من أعقاب شارح البحر: أحمد بن عبد الله الحضرمي • آل الجنيد في تعز
      </div>
    </div>

    <div class="spine-banner">
      <strong style="color: #065f46;">سلسلة النسب الشريف المتصلة برأس هذا الفرع:</strong>
      <div style="margin-top: 4px; font-family: 'Cairo', sans-serif;">
        [الجيل 1] الإمام علي بن أبي طالب سلام الله عليهم أجمعين ← [الجيل 2] الإمام الحسين السبط ← ... ← [الجيل 18] شارح البحر الشيخ سعيد ← ... ← [الجيل 25] أحمد بن عبد الله الحضرمي${intermediateChain} ← 🎯 <strong>[الجيل ${target.generation}] ${target.fatherName}</strong>
      </div>
    </div>

    <div class="stats-row">
      <div class="stat-pill">👥 إجمالي أفراد الشجرة: ${totalNodes} فرداً</div>
      <div class="stat-pill">🌿 الأبناء المباشرين: ${treeRoot.children.length} أبناء</div>
      <div class="stat-pill">📜 عمق الأجيال: ${maxDepth} أجيال</div>
      <div class="stat-pill">🏷️ كود الفرع: ${target.fatherCode || 'غير محدد'}</div>
    </div>

    <!-- The Visual Tree Diagram -->
    <div style="display: flex; justify-content: center; align-items: flex-start; padding: 20px 0; overflow-x: auto;">
      ${renderNodeHtml(treeRoot, true)}
    </div>
  </div>

</body>
</html>
  `;

  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
  } else {
    // Fallback using iframe if popup is blocked
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const frameDoc = iframe.contentWindow?.document || iframe.contentDocument;
    if (frameDoc) {
      frameDoc.open();
      frameDoc.write(html);
      frameDoc.close();
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    }
  }
}

export function exportLineageToTxt(): void {
  const doc = comprehensiveDocumentation;
  let output = 'من أعقاب شارح البحر: أحمد بن عبد الله الحضرمي\n';
  output += 'آل الجنيد في تعز\n\n';
  output += 'تأليف:\nعبد الإله عبد القادر الجنيد\n\n';
  output += '===============================================================\n';
  output += 'شكر وتقدير:\n';
  output += 'نتقدم بالشكر والتقدير لكل من تعاون وساهم في إنجاز هذا العمل.\n\n';
  output += '* الإشراف والمراجعة:\n';
  output += '- السيد العلامة: محمد بن عبد الولي البركاني\n';
  output += '- السيد العلامة: عدنان بن أحمد بن يحيى الجنيد\n';
  output += '- السيد العارف: سعيد بن عبد الغني الجنيد\n\n';
  output += '* المعلومات والإنترنت:\n';
  output += '- علاء بن عبد العليم الجنيد\n';
  output += '- زيد بن عبد الإله بن عبد القادر الجنيد\n\n';
  output += '* مراجعة تسلسل المشجرات:\n';
  output += '- فهد بن محمد بن ناجي الجنيد\n';
  output += '- أحمد بن محمد بن عبد الله الجنيد\n';
  output += '- عبد الوهاب بن محمد بن عبد القادر الجنيد\n';
  output += '- الشهيد: نبيل بن إبراهيم بن محمد الجنيد\n';
  output += '- حسين بن عبد الصمد بن أحمد الجنيد\n';
  output += '- الشاعر: محمد بن سعيد بن سيف الجنيد\n';
  output += '- د. هشام بن محمد بن وجيه الجنيد\n';
  output += '- فؤاد بن عبد الكريم بن أحمد الجنيد\n';
  output += '- عبد الله بن عبد الوهاب بن محمد الجنيد\n';
  output += '- أمين بن مقبل بن عبد الواسع الجنيد\n';
  output += '- منذر بن نبيل بن يوسف الجنيد\n';
  output += '- عدنان بن عبد الله بن سرور الجنيد\n';
  output += '- خالد بن عثمان البركاني\n';
  output += '- أمين البركاني\n\n';
  output += '===============================================================\n';
  output += 'عمود النسب الشريف المتصل:\n';
  output += 'أحمد بن عبد الله الحضرمي بن محمد بن محمد بن علي بن القاسم بن أحمد الشيخ البركاني بن شارح البحر الشيخ سعيد بن أبي الأسرار علي بن إبراهيم السروري بن علي بن محمد بن الحسن بن المحسن بن يحيى الصوفي بن جعفر الزكي بن الإمام الهادي علي النقي بن الإمام الجواد محمد التقي بن الإمام علي الرضا بن الإمام موسى الكاظم بن الإمام جعفر الصادق بن الإمام محمد الباقر بن الإمام علي زين العابدين بن سيد شباب أهل الجنة وسبط رسول الله وسيد الشهداء الإمام الحسين بن الإمام علي بن أبي طالب سلام الله عليهم أجمعين\n';
  output += '===============================================================\n\n';

  output += 'المقدمة التوثيقية والمنهجية الكاملة:\n';
  output += '---------------------------------------------------------------\n';
  output += (doc.introduction.fullPrefaceText || doc.introduction.text) + '\n\n';
  output += '===============================================================\n';
  output += 'المشجر الهرمي التتابعي الموثق بالأكواد والأجيال:\n';
  output += '===============================================================\n\n';

  sequentialLineageBlocks.forEach((block, idx) => {
    const validChildren = block.children.filter(
      (c) => c.name && c.name.trim() !== '' && c.name.trim() !== '-' && !c.name.includes('لم تتم موافاتنا')
    );

    if (validChildren.length === 0) {
      output += `\n[${idx + 1}] ${block.fatherCode ? `${block.fatherCode} – ` : ''}${block.fatherName}\n`;
      output += `أعقاب شارح البحر\n`;
    } else {
      output += `\n[${idx + 1}] أعقاب: ${block.fatherCode ? `${block.fatherCode} – ` : ''}${block.fatherName}\n`;
      output += `أعقاب شارح البحر\n`;
      output += `وأعقب:\n`;

      validChildren.forEach((c) => {
        let suffix = '';
        if (c.isMartyr) suffix += ' (شهيد)';
        if (c.noOffspring) suffix += ' (لم يعقب)';
        if (c.hasDaughters) suffix += ' (أعقب بنات)';
        output += `   • ${c.code} – ${c.name}${suffix}\n`;
      });
    }
    output += '---------------------------------------------------------------\n';
  });

  const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sharh_al_bahr_lineage_complete.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportLineageToDoc(): void {
  const doc = comprehensiveDocumentation;
  const manuscriptImages = getActiveManuscriptImages();
  let html = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset="utf-8">
      <title>وثيقة أعقاب شارح البحر</title>
      <style>
        body { font-family: 'Traditional Arabic', 'Arial', sans-serif; direction: rtl; text-align: right; margin: 20px; line-height: 1.8; }
        h1 { color: #064e3b; text-align: center; font-size: 22pt; margin-bottom: 5px; }
        .subhead { color: #047857; text-align: center; font-size: 14pt; margin-bottom: 20px; }
        .preface-box { background: #fdfbf7; border: 1px solid #e7e5e4; padding: 15px; border-radius: 6px; margin-bottom: 25px; line-height: 2; font-size: 14pt; }
        .section-title { font-size: 16pt; font-weight: bold; color: #064e3b; border-bottom: 2px solid #059669; padding-bottom: 5px; margin-top: 25px; margin-bottom: 15px; }
        .block { margin-bottom: 16px; border-bottom: 1px solid #d1d5db; padding-bottom: 10px; page-break-inside: avoid; }
        .father-title { font-size: 15pt; font-weight: bold; color: #065f46; background-color: #ecfdf5; padding: 6px 12px; border-radius: 6px; }
        .branch-tag { color: #047857; font-size: 11pt; margin-top: 2px; margin-bottom: 4px; font-style: italic; }
        .children-list { margin-top: 8px; margin-right: 20px; }
        .child-item { font-size: 13pt; margin-bottom: 4px; }
        .badge-martyr { color: #b91c1c; font-weight: bold; }
        .badge-no-offspring { color: #4b5563; }
        .badge-daughters { color: #86198f; font-weight: bold; }
        .gallery-doc-item { text-align: center; margin-bottom: 20px; padding: 10px; background: #fafaf9; border: 1px solid #e7e5e4; }
      </style>
    </head>
    <body>
      <!-- TITLE PAGE -->
      <div style="text-align: center; margin-bottom: 40px; padding: 30px; border: 2px solid #b45309; background-color: #fdfbf7;">
        <div style="font-size: 16pt; margin-bottom: 15px;">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
        <h1 style="font-size: 24pt; color: #064e3b; margin-bottom: 8px;">من أعقاب شارح البحر: أحمد بن عبد الله الحضرمي</h1>
        <h2 style="font-size: 18pt; color: #92400e; margin-bottom: 20px;">آل الجنيد في تعز</h2>
        <div style="font-size: 13pt; color: #57534e;">تأليف</div>
        <div style="font-size: 20pt; font-weight: bold; color: #065f46; margin-bottom: 20px;">عبد الإله عبد القادر الجنيد</div>
        <div style="margin-top: 15px; padding: 10px; background: #f0fdf4; border: 1px solid #bbf7d0; font-size: 11pt; text-align: justify; line-height: 1.8;">
          <strong>عمود النسب الشريف المتصل:</strong><br/>
          أحمد بن عبد الله الحضرمي بن محمد بن محمد بن علي بن القاسم بن أحمد الشيخ البركاني بن شارح البحر الشيخ سعيد بن أبي الأسرار علي بن إبراهيم السروري بن علي بن محمد بن الحسن بن المحسن بن يحيى الصوفي بن جعفر الزكي بن الإمام الهادي علي النقي بن الإمام الجواد محمد التقي بن الإمام علي الرضا بن الإمام موسى الكاظم بن الإمام جعفر الصادق بن الإمام محمد الباقر بن الإمام علي زين العابدين بن سيد شباب أهل الجنة وسبط رسول الله وسيد الشهداء الإمام الحسين بن الإمام علي بن أبي طالب سلام الله عليهم أجمعين
        </div>
      </div>

      <!-- CREDITS PAGE -->
      <div style="margin-bottom: 40px; padding: 20px; border: 1px solid #d6d3d1; background-color: #ffffff;">
        <h2 style="text-align: center; color: #064e3b; font-size: 18pt; border-bottom: 2px solid #059669; padding-bottom: 8px;">شكر وتقدير:</h2>
        <p style="text-align: center; font-size: 13pt; margin-bottom: 20px;">نتقدم بالشكر والتقدير لكل من تعاون وساهم في إنجاز هذا العمل.</p>
        
        <div style="margin-bottom: 15px;">
          <h3 style="color: #064e3b; font-size: 13pt;">* الإشراف والمراجعة:</h3>
          <ul style="font-size: 12pt;">
            <li>السيد العلامة: محمد بن عبد الولي البركاني</li>
            <li>السيد العلامة: عدنان بن أحمد بن يحيى الجنيد</li>
            <li>السيد العارف: سعيد بن عبد الغني الجنيد</li>
          </ul>
        </div>

        <div style="margin-bottom: 15px;">
          <h3 style="color: #0369a1; font-size: 13pt;">* المعلومات والإنترنت:</h3>
          <ul style="font-size: 12pt;">
            <li>علاء بن عبد العليم الجنيد</li>
            <li>زيد بن عبد الإله بن عبد القادر الجنيد</li>
          </ul>
        </div>

        <div>
          <h3 style="color: #b45309; font-size: 13pt;">* مراجعة تسلسل المشجرات:</h3>
          <ul style="font-size: 12pt;">
            <li>فهد بن محمد بن ناجي الجنيد</li>
            <li>أحمد بن محمد بن عبد الله الجنيد</li>
            <li>عبد الوهاب بن محمد بن عبد القادر الجنيد</li>
            <li>الشهيد: نبيل بن إبراهيم بن محمد الجنيد</li>
            <li>حسين بن عبد الصمد بن أحمد الجنيد</li>
            <li>الشاعر: محمد بن سعيد بن سيف الجنيد</li>
            <li>د. هشام بن محمد بن وجيه الجنيد</li>
            <li>فؤاد بن عبد الكريم بن أحمد الجنيد</li>
            <li>عبد الله بن عبد الوهاب بن محمد الجنيد</li>
            <li>أمين بن مقبل بن عبد الواسع الجنيد</li>
            <li>منذر بن نبيل بن يوسف الجنيد</li>
            <li>عدنان بن عبد الله بن سرور الجنيد</li>
            <li>خالد بن عثمان البركاني</li>
            <li>أمين البركاني</li>
          </ul>
        </div>
      </div>

      <h1>وثيقة نسب وأعقاب شارح البحر</h1>
      <div class="subhead">آل الجنيد • آل البركاني • آل السروري — المشجر الهرمي التتابعي الكامل</div>
      
      <div class="section-title">١. المقدمة التوثيقية والمنهجية الكاملة</div>
      <div class="preface-box">
        ${(doc.introduction.fullPrefaceText || doc.introduction.text).replace(/\n/g, '<br/>')}
      </div>

      <div class="section-title">٢. المصادر والمراجع والوثائق الشرعية المعتمدة</div>
      <div style="margin-bottom: 20px;">
        ${doc.sources.map((s, i) => `
          <div style="background: #fffbeb; border: 1px solid #fef08a; padding: 10px; margin-bottom: 8px; border-radius: 5px;">
            <strong>[${i + 1}] ${s.title}</strong> (${s.dateOrCentury})<br/>
            <small style="color: #78350f;"><strong>جهة التوثيق:</strong> ${s.authorOrCustodian} | <strong>الموضع:</strong> ${s.archiveLocation}</small><br/>
            <span>${s.description}</span>
          </div>
        `).join('')}
      </div>

      <div class="section-title">٣. البيانات التوثيقية للمراجع التاريخية (63 مرجعاً)</div>
      <div style="margin-bottom: 25px;">
        ${historicalManuscriptsList.map((m) => `
          <div style="border: 1px solid #d1d5db; padding: 12px; margin-bottom: 12px; border-radius: 6px; background: #ffffff;">
            <div style="font-size: 14pt; font-weight: bold; color: #064e3b; margin-bottom: 5px;">
              [المرجع ${m.referenceNumber}] ${m.title}
            </div>
            <div style="font-size: 11pt; color: #4b5563; margin-bottom: 6px;">
              <strong>التصنيف:</strong> ${m.categoryLabel} | <strong>التاريخ:</strong> ${m.dateOrEra} | <strong>المحفوظ في:</strong> ${m.archiveLocation}
            </div>
            <div style="font-size: 12pt; color: #1f2937; margin-bottom: 6px;">
              ${m.description}
            </div>
            <div style="background: #fefce8; border-right: 4px solid #eab308; padding: 6px 10px; font-size: 11pt; color: #713f12;">
              <strong>دلالة الإثبات النسبي والتاريخي:</strong> ${m.proofSignificance}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="section-title">٤. معرض وألبوم صور الوثائق والمخطوطات الأصلية (${manuscriptImages.length} وثيقة)</div>
      <div style="margin-bottom: 25px;">
        ${manuscriptImages.map((img) => {
          if (img.imageUrl && img.imageUrl.trim().length > 0) {
            return `
              <div class="gallery-doc-item" style="text-align: center; margin-bottom: 20px; page-break-inside: avoid;">
                <img src="${img.imageUrl}" alt="${img.title}" style="max-height: 700px; max-width: 100%; border: 1px solid #d6d3d1; border-radius: 4px;" />
                <div style="font-weight: bold; color: #064e3b; margin-top: 5px;">وثيقة (${img.imageIndex}): ${img.title}</div>
                <div style="font-size: 9pt; color: #6b7280;">${img.fileName} • ${img.era} • ${img.archive}</div>
              </div>
            `;
          } else {
            return `
              <div style="background: #fdfbf7; border: 1px solid #b45309; padding: 12px; margin-bottom: 12px; border-radius: 6px;">
                <div style="font-weight: bold; color: #78350f; font-size: 12pt;">
                  وثيقة أرشيفية معتمدة رقم (${img.imageIndex}): ${img.title}
                </div>
                <div style="font-size: 10pt; color: #4b5563; margin: 4px 0;">
                  <strong>التصنيف:</strong> ${img.categoryLabel} | <strong>الحقبة:</strong> ${img.era} | <strong>الأرشيف:</strong> ${img.archive}
                </div>
                <div style="font-size: 11pt; color: #1f2937;">
                  ${img.description}
                </div>
              </div>
            `;
          }
        }).join('')}
      </div>

      <div class="section-title">٥. المشجر الهرمي التتابعي الموثق بالأكواد والأجيال</div>
  `;

  sequentialLineageBlocks.forEach((block, idx) => {
    const validChildren = block.children.filter(
      (c) => c.name && c.name.trim() !== '' && c.name.trim() !== '-' && !c.name.includes('لم تتم موافاتنا')
    );

    if (validChildren.length === 0) {
      html += `
        <div class="block">
          <div class="father-title">[${idx + 1}] ${block.fatherCode ? `${block.fatherCode} – ` : ''}${block.fatherName}</div>
          <div class="branch-tag">أعقاب شارح البحر</div>
        </div>
      `;
    } else {
      html += `
        <div class="block">
          <div class="father-title">[${idx + 1}] أعقاب: ${block.fatherCode ? `${block.fatherCode} – ` : ''}${block.fatherName}</div>
          <div class="branch-tag">أعقاب شارح البحر</div>
          <div class="children-list">
            <div><strong>وأعقب:</strong></div>
      `;

      validChildren.forEach((c) => {
        let badge = '';
        if (c.isMartyr) badge = ' <span class="badge-martyr">(شهيد)</span>';
        if (c.noOffspring) badge = ' <span class="badge-no-offspring">(لم يعقب)</span>';
        if (c.hasDaughters) badge = ' <span class="badge-daughters">(أعقب بنات)</span>';
        html += `<div class="child-item">• <strong>${c.code}</strong> – ${c.name}${badge}</div>`;
      });

      html += `
          </div>
        </div>
      `;
    }
  });

  html += `
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff' + html], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sharh_al_bahr_lineage_complete.doc';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
