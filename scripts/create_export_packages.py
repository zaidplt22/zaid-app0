import os
import zipfile
import shutil
import json

print("=== Starting export package creation ===")

# Ensure directories exist
os.makedirs('webtoapp_bundle/images', exist_ok=True)
os.makedirs('public/images', exist_ok=True)

# Copy dist/index.html to multiple standard public destinations
if os.path.exists('dist/index.html'):
    shutil.copyfile('dist/index.html', 'webtoapp_bundle/index.html')
    shutil.copyfile('dist/index.html', 'webtoapp_bundle/genealogy-app.html')
    shutil.copyfile('dist/index.html', 'public/index.html')
    shutil.copyfile('dist/index.html', 'public/genealogy-app.html')
    shutil.copyfile('dist/index.html', 'public/Sharh-AlBahr-Offline-App.html')
    shutil.copyfile('dist/index.html', 'public/Sharh-AlBahr-Offline-Book.html')
    shutil.copyfile('dist/index.html', 'public/Sharh-AlBahr-Genealogy.html')
    shutil.copyfile('dist/index.html', 'Sharh-AlBahr-SingleFile-App.html')

if os.path.exists('public/app_data.json'):
    shutil.copyfile('public/app_data.json', 'webtoapp_bundle/app_data.json')

if os.path.exists('public/manuscripts_data.json'):
    shutil.copyfile('public/manuscripts_data.json', 'webtoapp_bundle/manuscripts_data.json')

if os.path.exists('app-favicon.ico'):
    shutil.copyfile('app-favicon.ico', 'webtoapp_bundle/favicon.ico')

# Copy all 74 images into webtoapp_bundle/images/
image_count = 0
if os.path.exists('public/images'):
    for img_file in sorted(os.listdir('public/images')):
        if img_file.startswith('manuscript-') and img_file.endswith(('.png', '.jpg', '.webp')):
            src_img = os.path.join('public/images', img_file)
            if os.path.isfile(src_img):
                shutil.copyfile(src_img, os.path.join('webtoapp_bundle/images', img_file))
                image_count += 1

print(f"Copied {image_count} manuscript images into webtoapp_bundle/images/")

readme_full = '''======================================================================
حزمة التصدير الكاملة لموسوعة ومشجر آل الجنيد - من أعقاب شارح البحر الحضرمي
Sharh-AlBahr Complete Export Package (Offline App + 74 Documents + Data)
======================================================================

محتويات هذه الحزمة المستقلة:
----------------------------------------------------------------------
1. index.html & genealogy-app.html:
   - تطبيق الموسوعة والمشجر الشامل المستقل بالكامل (Single-File Offline App).
   - يحتوي على كافة الشيفرات البرمجية، التصميم المتجاوب، قاعدة البيانات، والوثائق الـ 74.
   - يعمل مباشرة عند النقر عليه مرتين في أي متصفح (Chrome, Safari, Firefox, Edge)
     على الحاسوب أو الهاتف بدون الحاجة لأي اتصال بالإنترنت أو خادم.

2. images/ (مجلد الصور والوثائق الـ 74):
   - يحتوي على جميع وثائق ومخطوطات الأنساب الـ 74 بدقة عالية (manuscript-01.png إلى manuscript-74.png).
   - مربوطة بمسارات نسبية مع index.html (images/manuscript-XX.png).

3. app_data.json:
   - قاعدة البيانات الهيكلية الكاملة لجميع الأسماء، الأكواد، الأجيال، والكتل المتسلسلة (بصيغة JSON).

4. manuscripts_data.json:
   - فهرس وأرشيف توثيق الوثائق الـ 74 مع العناوين، العصور، جهات الحفظ، والأوصاف التوثيقية.

----------------------------------------------------------------------
كيفية التشغيل والاستخدام:
----------------------------------------------------------------------
أ) التشغيل المباشر على الحاسوب أو الهاتف (Offline Browsing):
   1. فك ضغط هذا الملف المضغوط (Extract All).
   2. انقر نقراً مزدوجاً على ملف index.html.
   3. ستفتح الموسوعة والمشجر فوراً وتظهر جميع الوثائق والصور الـ 74 تلقائياً دون أي إنترنت.

ب) رفع الحزمة على WebToApp لإنشاء تطبيق أندرويد (APK):
   1. توجه إلى موقع https://webtoapp.com
   2. اختر "Local Files / Zip Upload" وارفع هذا الملف المضغوط كاملاً.
   3. عيّن صفحة البداية (Start Page): index.html
   4. فعّل وضع عدم الاتصال (Offline Cache) وصلاحيات التخزين (Storage).
   5. حمّل تطبيق APK الجاهز لهاتفك.

ج) الاستخدام في تطبيقات أندرويد الأصلية (Android Studio / WebView / Capacitor):
   1. ضع محتويات هذه الحزمة في مسار: app/src/main/assets/
   2. اضبط عنوان WebView ليفتح: file:///android_asset/index.html
======================================================================
'''

with open('webtoapp_bundle/README.txt', 'w', encoding='utf-8') as f:
    f.write(readme_full)

with open('webtoapp_bundle/README_WebToApp.txt', 'w', encoding='utf-8') as f:
    f.write(readme_full)

# 1. Create Primary Full Export ZIP: Sharh-AlBahr-Full-Export-With-74-Images.zip
zip_full_path = 'public/Sharh-AlBahr-Full-Export-With-74-Images.zip'
with zipfile.ZipFile(zip_full_path, 'w', zipfile.ZIP_DEFLATED) as z:
    for root, dirs, files in os.walk('webtoapp_bundle'):
        for f in files:
            full_p = os.path.join(root, f)
            arc_p = os.path.relpath(full_p, 'webtoapp_bundle')
            z.write(full_p, arc_p)

# Create compatibility aliases
shutil.copyfile(zip_full_path, 'public/Sharh-AlBahr-WebToApp-Ready.zip')
shutil.copyfile(zip_full_path, 'public/Sharh-AlBahr-Complete-Package.zip')
shutil.copyfile(zip_full_path, 'Sharh-AlBahr-Full-Export-With-74-Images.zip')
shutil.copyfile(zip_full_path, 'Sharh-AlBahr-WebToApp-Ready.zip')

print(f"Created Full Project ZIP: {zip_full_path} ({os.path.getsize(zip_full_path)} bytes)")

# 2. Create Standalone Images Only ZIP: Sharh-AlBahr-74-Images-Only.zip
zip_images_path = 'public/Sharh-AlBahr-74-Images-Only.zip'
with zipfile.ZipFile(zip_images_path, 'w', zipfile.ZIP_DEFLATED) as z:
    if os.path.exists('public/images'):
        for f in sorted(os.listdir('public/images')):
            full_p = os.path.join('public/images', f)
            if os.path.isfile(full_p):
                z.write(full_p, os.path.join('images', f))
    if os.path.exists('public/manuscripts_data.json'):
        z.write('public/manuscripts_data.json', 'manuscripts_data.json')
    readme_images = "مجلد صور ومخطوطات آل شارح البحر الـ 74 المعتمدة مع ملف الفهرس manuscripts_data.json."
    z.writestr('README_IMAGES.txt', readme_images.encode('utf-8'))

shutil.copyfile(zip_images_path, 'Sharh-AlBahr-74-Images-Only.zip')
print(f"Created Images Only ZIP: {zip_images_path} ({os.path.getsize(zip_images_path)} bytes)")

# 3. Create Full Source Code ZIP: Sharh-AlBahr-Complete-SourceCode.zip
zip_source_path = 'public/Sharh-AlBahr-Complete-SourceCode.zip'
exclude_dirs = {'node_modules', '.git', 'dist', '.cache', 'webtoapp_bundle'}
with zipfile.ZipFile(zip_source_path, 'w', zipfile.ZIP_DEFLATED) as z:
    for root, dirs, files in os.walk('.'):
        dirs[:] = [d for d in dirs if d not in exclude_dirs and not d.startswith('.')]
        for f in files:
            if f.endswith('.zip'):
                continue
            full_p = os.path.join(root, f)
            arc_p = os.path.normpath(full_p)
            z.write(full_p, arc_p)

shutil.copyfile(zip_source_path, 'Sharh-AlBahr-Complete-SourceCode.zip')
print(f"Created Source Code ZIP: {zip_source_path} ({os.path.getsize(zip_source_path)} bytes)")

print("=== All export packages generated successfully ===")
