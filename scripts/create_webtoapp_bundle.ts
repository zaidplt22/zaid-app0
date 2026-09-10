import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';
import { sequentialLineageBlocks } from '../src/data/sequentialLineageData';

async function createWebToAppBundle() {
  console.log('=== Step 1: Exporting full, updated app_data.json with all lineage edits ===');
  
  // 1. Serialize all 1068 blocks directly from source code
  const appDataJsonString = JSON.stringify(sequentialLineageBlocks, null, 2);
  const appDataPathPublic = path.resolve(process.cwd(), 'public/app_data.json');
  fs.writeFileSync(appDataPathPublic, appDataJsonString, 'utf-8');
  console.log(`Saved public/app_data.json (${sequentialLineageBlocks.length} blocks, ${(appDataJsonString.length / 1024).toFixed(1)} KB)`);

  // 2. Prepare webtoapp_bundle directory structure
  console.log('=== Step 2: Preparing clean webtoapp_bundle directory structure ===');
  const bundleDir = path.resolve(process.cwd(), 'webtoapp_bundle');
  if (fs.existsSync(bundleDir)) {
    fs.rmSync(bundleDir, { recursive: true, force: true });
  }
  fs.mkdirSync(bundleDir, { recursive: true });
  const bundleImagesDir = path.join(bundleDir, 'images');
  fs.mkdirSync(bundleImagesDir, { recursive: true });

  // 3. Copy dist/index.html to webtoapp_bundle/index.html and public/index.html
  const distHtmlPath = path.resolve(process.cwd(), 'dist/index.html');
  if (!fs.existsSync(distHtmlPath)) {
    throw new Error('dist/index.html not found! Please run vite build first.');
  }

  const indexHtmlContent = fs.readFileSync(distHtmlPath, 'utf-8');
  fs.writeFileSync(path.join(bundleDir, 'index.html'), indexHtmlContent, 'utf-8');
  fs.writeFileSync(path.resolve(process.cwd(), 'public/index.html'), indexHtmlContent, 'utf-8');
  console.log(`Copied index.html to webtoapp_bundle/ and public/ (${(indexHtmlContent.length / 1024).toFixed(1)} KB)`);

  // 4. Save app_data.json in webtoapp_bundle/
  fs.writeFileSync(path.join(bundleDir, 'app_data.json'), appDataJsonString, 'utf-8');
  console.log('Saved webtoapp_bundle/app_data.json');

  // 5. Copy manuscripts_data.json
  const manuscriptsSource = path.resolve(process.cwd(), 'public/manuscripts_data.json');
  if (fs.existsSync(manuscriptsSource)) {
    fs.copyFileSync(manuscriptsSource, path.join(bundleDir, 'manuscripts_data.json'));
    console.log('Copied manuscripts_data.json to webtoapp_bundle/');
  }

  // 6. Copy all 74 manuscript images
  const publicImagesDir = path.resolve(process.cwd(), 'public/images');
  let imageCount = 0;
  if (fs.existsSync(publicImagesDir)) {
    const files = fs.readdirSync(publicImagesDir);
    for (const f of files) {
      if (f.startsWith('manuscript-') && (f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.webp'))) {
        fs.copyFileSync(path.join(publicImagesDir, f), path.join(bundleImagesDir, f));
        imageCount++;
      }
    }
  }
  console.log(`Copied ${imageCount} verified manuscript images to webtoapp_bundle/images/`);

  // 7. Write clean README.txt
  const readmeContent = `======================================================================
موسوعة ومشجر آل الجنيد - من أعقاب شارح البحر الحضرمي
Sharh-AlBahr Complete webtoapp_bundle (Offline App & Essential Assets)
======================================================================

محتويات هذا المجلد (webtoapp_bundle):
----------------------------------------------------------------------
1. index.html:
   - تطبيق الموسوعة والمشجر الشامل المستقل بالكامل.
   - يتضمن كافة التعديلات، تنظيفات الأنساب، والواجهات الحديثة.
   - يعمل مباشرة بنقرة مزدوجة في أي متصفح دون اتصال بالإنترنت.

2. app_data.json:
   - قاعدة البيانات الكاملة لجميع السجلات والكتل المتسلسلة (${sequentialLineageBlocks.length} كتلة موثقة).
   - مطابقة 100% لآخر التحديثات والإصلاحات والتنقيحات.

3. manuscripts_data.json:
   - الفهرس الأرشيفي الشامل لجميع الوثائق والمخطوطات الـ 74.

4. images/:
   - مجلد الوثائق والمخطوطات الأصلية الـ 74 بدقة كاملة (manuscript-01.png إلى manuscript-74.png).

----------------------------------------------------------------------
طريقة الاستخدام مع WebToApp (webtoapp.com):
----------------------------------------------------------------------
1. ارفع محتويات هذا المجلد أو ملف webtoapp_bundle.zip إلى WebToApp.
2. اجعل صفحة البداية (Start Page): index.html
3. فعّل دعم الملفات المحلية (Local Files) والتخزين المحلي.
4. قم بإنشاء ملف تطبيق أندرويد (APK) لجهازك.
======================================================================
`;
  fs.writeFileSync(path.join(bundleDir, 'README.txt'), readmeContent, 'utf-8');

  // 8. Generate clean webtoapp_bundle.zip archive
  console.log('=== Step 3: Compressing webtoapp_bundle into webtoapp_bundle.zip ===');
  const zip = new JSZip();

  // Recursively add webtoapp_bundle files to root of zip
  function addDirectoryToZip(dirPath: string, zipFolder: JSZip) {
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        const subFolder = zipFolder.folder(item);
        if (subFolder) addDirectoryToZip(fullPath, subFolder);
      } else {
        const data = fs.readFileSync(fullPath);
        zipFolder.file(item, data);
      }
    }
  }

  addDirectoryToZip(bundleDir, zip);

  const zipBuffer = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 }
  });

  const zipTargetPath = path.resolve(process.cwd(), 'public/webtoapp_bundle.zip');
  fs.writeFileSync(zipTargetPath, zipBuffer);
  console.log(`Saved public/webtoapp_bundle.zip (${(zipBuffer.length / (1024 * 1024)).toFixed(2)} MB)`);

  // Also maintain alias Sharh-AlBahr-Full-Export-With-74-Images.zip for backwards compatibility with any existing link
  const aliasZipPath = path.resolve(process.cwd(), 'public/Sharh-AlBahr-Full-Export-With-74-Images.zip');
  fs.writeFileSync(aliasZipPath, zipBuffer);

  // Sync bundle to dist for preview/production serving
  const distBundleDir = path.resolve(process.cwd(), 'dist/webtoapp_bundle');
  if (fs.existsSync(distBundleDir)) fs.rmSync(distBundleDir, { recursive: true, force: true });
  fs.cpSync(bundleDir, distBundleDir, { recursive: true });

  fs.copyFileSync(zipTargetPath, path.resolve(process.cwd(), 'dist/webtoapp_bundle.zip'));
  fs.copyFileSync(aliasZipPath, path.resolve(process.cwd(), 'dist/Sharh-AlBahr-Full-Export-With-74-Images.zip'));
  fs.copyFileSync(appDataPathPublic, path.resolve(process.cwd(), 'dist/app_data.json'));

  console.log('=== WebToApp bundle export completed successfully! ===');
}

createWebToAppBundle().catch((err) => {
  console.error('Failed to create webtoapp bundle:', err);
  process.exit(1);
});
