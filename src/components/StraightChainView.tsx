import React from 'react';
import { Link2, ShieldCheck, Star, ChevronDown } from 'lucide-react';

export const StraightChainView: React.FC = () => {
  const chain = [
    { gen: 1, title: 'أمير المؤمنين وسيد الوصيين', name: 'علي بن أبي طالب (عليه السلام)', note: 'زوج سيدة نساء العالمين فاطمة الزهراء عليها السلام' },
    { gen: 2, title: 'سيد الشهداء وريحانة رسول الله', name: 'الحسين السبط (عليه السلام)', note: 'شهيد كربلاء' },
    { gen: 3, title: 'زين العابدين وسيد الساجدين', name: 'علي بن الحسين (عليه السلام)', note: 'الإمام السجاد' },
    { gen: 4, title: 'باقر علوم الأولين والآخرين', name: 'محمد بن علي الباقر (عليه السلام)', note: 'الإمام الخامس' },
    { gen: 5, title: 'إمام المذهب وجامع العلوم', name: 'جعفر بن محمد الصادق (عليه السلام)', note: 'الإمام السادس' },
    { gen: 6, title: 'كاظم الغيظ وباب الحوائج', name: 'موسى بن جعفر الكاظم (عليه السلام)', note: 'الإمام السابع' },
    { gen: 7, title: 'عالم آل محمد وغريب طوس', name: 'علي بن موسى الرضا (عليه السلام)', note: 'الإمام الثامن' },
    { gen: 8, title: 'باب المراد', name: 'محمد بن علي الجواد (عليه السلام)', note: 'الإمام التاسع' },
    { gen: 9, title: 'الهادي النقي', name: 'علي بن محمد الهادي (عليه السلام)', note: 'الإمام العاشر' },
    { gen: 10, title: 'السيد الشريف', name: 'جعفر الزكي بن الإمام علي الهادي', note: 'المعروف بالزكي' },
    { gen: 11, title: 'السيد العارف', name: 'يحيى الصوفي بن جعفر الزكي', note: 'صاحب الزهد والتصوف' },
    { gen: 12, title: 'السيد', name: 'المحسن بن يحيى الصوفي', note: '' },
    { gen: 13, title: 'السيد', name: 'الحسن بن المحسن', note: '' },
    { gen: 14, title: 'السيد', name: 'محمد بن الحسن', note: '' },
    { gen: 15, title: 'السيد', name: 'علي بن محمد', note: '' },
    { gen: 16, title: 'العارف بالله شيخ الأولياء', name: 'إبراهيم السروري بن علي', note: 'جد آل السروري' },
    { gen: 17, title: 'أبو الأسرار والأنوار', name: 'الشيخ سعيد بن إبراهيم السروري', note: 'صاحب المقامات' },
    { gen: 18, title: 'الشيخ الجليل', name: 'بركات بن الشيخ سعيد', note: '' },
    { gen: 19, title: 'الشيخ العارف', name: 'أحمد البركاني بن بركات', note: 'جد آل البركاني' },
    { gen: 20, title: 'الشيخ', name: 'القاسم بن أحمد البركاني', note: '' },
    { gen: 21, title: 'الشيخ', name: 'علي بن القاسم', note: '' },
    { gen: 22, title: 'الشيخ', name: 'محمد بن علي', note: '' },
    { gen: 23, title: 'الشيخ', name: 'محمد بن محمد', note: '' },
    { gen: 24, title: 'الشيخ الجليل', name: 'عبد الله الحضرمي بن محمد', note: 'والد شارح البحر' },
    { 
      gen: 25, 
      title: 'الجد الجامع ورأس النسب الشريف', 
      name: 'سيدي الشيخ أحمد بن عبد الله الحضرمي البركاني السروري (شارح البحر)', 
      note: 'قطب الزمان وشارح العلوم الشرعية والبحرية - الجد الجامع لفروع آل الجنيد وآل البركاني وآل السروري' 
    },
    { gen: 26, title: 'السيد', name: 'محمد جمال الدين بن شارح البحر', note: 'والد الفرعين الرئيسيين' },
    { gen: 27, title: 'رأسا الفرعين', name: 'الفرع الأول: أحمد الجنيد | الفرع الثاني: عبد الرحمن الجنيد', note: 'منهما تفرعت كافة بطون وأفخاذ العشيرة الشريفة' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-3 sm:px-6 py-6 space-y-6 font-cairo text-stone-900">
      {/* Banner */}
      <div className="bg-[#052e23] border border-emerald-800 text-white rounded-2xl p-5 shadow-md text-center space-y-2">
        <div className="inline-flex items-center justify-center p-2 rounded-xl bg-emerald-900 text-amber-300 border border-emerald-600/50">
          <Link2 className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold font-scheherazade text-amber-200">
          السلسلة المستقيمة وعمود النسب النبوي المتصل
        </h2>
        <p className="text-xs text-emerald-200">
          النسب الشريف المتصل من سيد الشهداء الإمام الحسين وأمير المؤمنين علي بن أبي طالب والسيدة فاطمة الزهراء (عليهم السلام) إلى شارح البحر وذريته
        </p>
      </div>

      {/* Vertical Connected Chain */}
      <div className="relative border-r-2 border-emerald-600 mr-4 sm:mr-8 pr-6 space-y-6">
        {chain.map((item, idx) => {
          const isHighlight = item.gen === 1 || item.gen === 2 || item.gen === 25 || item.gen === 27;

          return (
            <div key={`chain-${idx}`} className="relative group">
              {/* Connector Node Dot */}
              <div
                className={`absolute -right-[31px] top-3 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  isHighlight
                    ? 'bg-amber-400 border-amber-600 shadow-md ring-4 ring-emerald-900/30'
                    : 'bg-emerald-700 border-emerald-300'
                }`}
              >
                {isHighlight && <div className="w-1.5 h-1.5 rounded-full bg-stone-900"></div>}
              </div>

              {/* Card */}
              <div
                className={`p-4 rounded-xl border transition ${
                  isHighlight
                    ? 'bg-[#093d30] border-emerald-600 text-white shadow-md'
                    : 'bg-white border-stone-200 text-stone-900 hover:border-emerald-400 hover:bg-emerald-50/40 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                      isHighlight
                        ? 'bg-amber-400/20 text-amber-200 border border-amber-400/40'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    الجيل: {item.gen}
                  </span>
                  <span className={`text-xs font-semibold ${isHighlight ? 'text-emerald-200' : 'text-stone-500'}`}>
                    {item.title}
                  </span>
                </div>

                <h3 className={`text-base sm:text-lg font-bold font-scheherazade ${isHighlight ? 'text-amber-300' : 'text-stone-900'}`}>
                  {item.name}
                </h3>

                {item.note && (
                  <p className={`text-xs mt-1.5 ${isHighlight ? 'text-emerald-100/90' : 'text-stone-600'}`}>
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
