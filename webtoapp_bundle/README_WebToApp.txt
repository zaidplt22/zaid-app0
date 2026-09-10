============================================================
دليل تشغيل التطبيق على WebToApp ونظام أندرويد (WebToApp Guide)
============================================================

1. محتويات هذه الحزمة:
   - index.html: تطبيق المشجر والموسوعة الشامل المدمج (Single-File Offline App).
     يحتوي على كافة الشيفرات (HTML + CSS + JS) وبيانات الأنساب والأكواد دون الحاجة لأي إنترنت.
   - app_data.json: قاعدة البيانات الكاملة لكافة الأسماء والأكواد والأجيال بصيغة JSON.
   - images/: مجلد صور المخطوطات والوثائق.

2. كيفية الاستخدام في WebToApp:
   أ) في موقع WebToApp.com:
      - اختر خيار 'Files / Local Files' (ملفات محلية) أو 'Zip Upload'.
      - ارفع ملف index.html أو ارفع هذا الملف المضغوط (ZIP) كاملاً.
      - اجعل الصفحة الرئيسية / مسار البدء (Start Page): index.html
      - فعّل خيارات:
        * Offline Mode / Local Cache (العمل بدون إنترنت)
        * File Access / Storage Permissions (للسماح بتحميل وحفظ التقارير)
   ب) في تطبيقات أندرويد WebView الأخرى (Android Studio / Capacitor / Cordova):
      - ضع محتويات هذه الحزمة في مجلد: app/src/main/assets/
      - اضبط عنوان WebView ليفتح: file:///android_asset/index.html
