import { PersonNode } from '../types';

/**
 * شجرة نسب أعقاب شارح البحر كاملة ومحققة بدقة صفر-تخمين (Zero-Hallucination)
 * مستخرجة حرفياً من وثائق النسب دون أي زيادة أو إنقاص.
 */
export const sharhAlBahrTreeData: PersonNode = {
  id: 'node-root-ali-hadi',
  name: 'الإمام علي الهادي',
  title: 'الإمام العاشر من أئمة أهل البيت عليهم السلام',
  generation: 15,
  isBranchHead: true,
  branchHeaderTitle: 'عمود النسب الرضوي الشريف من الإمام علي وفاطمة الزهراء',
  notes: 'ينتهي إليه عمود النسب الرضوي الشريف من الإمام الحسين السبط بن علي بن أبي طالب والسيدة فاطمة الزهراء عليها السلام.',
  children: [
    {
      id: 'node-jaafar-zaki',
      name: 'السيد جعفر الزكي',
      generation: 16,
      children: [
        {
          id: 'node-yahya-sofi',
          name: 'السيد يحيى الصوفي',
          generation: 17,
          children: [
            {
              id: 'node-muhsin',
              name: 'السيد المحسن',
              generation: 18,
              children: [
                {
                  id: 'node-hassan',
                  name: 'السيد الحسن',
                  generation: 19,
                  children: [
                    {
                      id: 'node-mohammed-anc',
                      name: 'السيد محمد',
                      generation: 20,
                      children: [
                        {
                          id: 'node-ali-anc',
                          name: 'السيد علي',
                          generation: 21,
                          children: [
                            {
                              id: 'node-ibrahim-mosul',
                              name: 'السيد إبراهيم السروري',
                              title: 'المهاجر من الموصل إلى اليمن',
                              generation: 22,
                              notes: 'من أقدم السادة الرضويين المهاجرين إلى اليمن من الموصل بالعراق إلى مدينة جباء بمديرية المسراخ بمحافظة تعز أوائل القرن السادس الهجري.',
                              children: [
                                {
                                  id: 'node-abi-asrar-ali',
                                  name: 'سيدي أبو الأسرار علي بن إبراهيم السروري',
                                  title: 'قطب العارفين بجباء - الجد الجامع للسادة السرورية',
                                  generation: 23,
                                  isBranchHead: true,
                                  branchHeaderTitle: 'عمود السادة السرورية',
                                  children: [
                                    {
                                      id: 'node-sheikh-saeed-sharh',
                                      name: 'الشيخ سعيد السروري المكنى بـ "شارح البحر"',
                                      title: 'الابن السادس لسيدي أبي الأسرار',
                                      generation: 24,
                                      isBranchHead: true,
                                      branchHeaderTitle: 'أعقاب شارح البحر (سيدي الشيخ سعيد السروري)',
                                      notes: 'سكن في جزيرة ميون في البحر الأحمر المشرف على باب المندب وتوفي ودفن في جبل الشيخ سعيد المسمى باسمه في نفس الجزيرة.',
                                      children: [
                                        {
                                          id: 'node-barakat-saeed',
                                          name: 'السيد بركات بن الشيخ سعيد',
                                          generation: 25,
                                          children: [
                                            {
                                              id: 'node-ahmed-barakani',
                                              name: 'الشيخ أحمد البركاني',
                                              title: 'الجد الجامع للسادة آل البركاني',
                                              generation: 26,
                                              isBranchHead: true,
                                              branchHeaderTitle: 'أعقاب سيدي الشيخ أحمد البركاني',
                                              children: [
                                                {
                                                  id: 'node-qasim-ahmed',
                                                  name: 'السيد قاسم بن أحمد البركاني',
                                                  generation: 27,
                                                  children: [
                                                    {
                                                      id: 'node-ali-qasim',
                                                      name: 'السيد علي بن قاسم',
                                                      generation: 28,
                                                      children: [
                                                        {
                                                          id: 'node-abduljabbar-ali',
                                                          name: 'السيد عبد الجبار بن علي بن قاسم',
                                                          generation: 29,
                                                          children: [
                                                            {
                                                              id: 'node-mohammed-abduljabbar',
                                                              name: 'السيد محمد بن عبد الجبار',
                                                              generation: 30,
                                                              children: [
                                                                {
                                                                  id: 'node-abdullah-mohammed',
                                                                  name: 'السيد عبد الله بن محمد',
                                                                  generation: 31,
                                                                  children: [
                                                                    {
                                                                      id: 'node-ahmed-hadhrami',
                                                                      name: 'سيدي الشيخ أحمد بن عبد الله الحضرمي البركاني السروري',
                                                                      title: 'الجد الجامع لآل الحضرمي وآل الجنيد',
                                                                      generation: 32,
                                                                      isBranchHead: true,
                                                                      branchHeaderTitle: 'أعقاب سيدي أحمد بن عبد الله الحضرمي',
                                                                      notes: 'صاحب المقام والضريح المشهور برأس جبل العرمة (ذخر) بجبل حبشي.',
                                                                      children: [
                                                                        {
                                                                          id: 'node-mohammed-ahmed-hadhrami',
                                                                          name: 'الشيخ محمد بن أحمد الحضرمي',
                                                                          generation: 33,
                                                                          hasOffspringNote: false,
                                                                          notes: 'لا نعلم له عقب في هذه الوثيقة',
                                                                          children: []
                                                                        },
                                                                        {
                                                                          id: 'node-obaid-ahmed-hadhrami',
                                                                          name: 'سيدي الشيخ عبيد بن أحمد الحضرمي',
                                                                          title: 'صاحب المسجد والضريح بمركز الشيخ عبيد بماوية',
                                                                          generation: 33,
                                                                          notes: 'لا نعلم له عقب في هذه الوثيقة. مسجده وضريحه بمركز الشيخ عبيد بمديرية ماوية بمحافظة تعز.',
                                                                          children: []
                                                                        },
                                                                        {
                                                                          id: 'node-abdulrahman-sakin-naql',
                                                                          name: 'سيدي الشيخ عبد الرحمن ساكن النقل بن أحمد الحضرمي',
                                                                          title: 'صاحب الوقفية المحررة',
                                                                          generation: 33,
                                                                          isBranchHead: true,
                                                                          branchHeaderTitle: 'أعقاب سيدي الشيخ عبد الرحمن ساكن النقل',
                                                                          children: [
                                                                            {
                                                                              id: 'node-lutfallah-skandar',
                                                                              name: 'الشيخ لطف الله ( الملقب اسكندر ) بن عبد الرحمن ساكن النقل بن أحمد بن عبد الله الحضرمي',
                                                                              generation: 34,
                                                                              notes: 'ولا نعلم له عقب',
                                                                              children: []
                                                                            },
                                                                            {
                                                                              id: 'node-abdullah-abdulrahman-naql',
                                                                              name: 'الشيخ عبد الله بن عبد الرحمن النقل بن شارح البحر أحمد بن عبد الله الحضرمي',
                                                                              generation: 34,
                                                                              notes: 'وأعقب: لا نعلم له عقب',
                                                                              children: []
                                                                            },
                                                                            {
                                                                              id: 'node-ahmed-abdulrahman-naql',
                                                                              name: 'الشيخ أحمد بن عبد الرحمن النقل',
                                                                              generation: 34,
                                                                              isBranchHead: true,
                                                                              branchHeaderTitle: 'أعقاب الشيخ أحمد بن عبد الرحمن النقل',
                                                                              children: [
                                                                                {
                                                                                  id: 'node-junaid-ahmed-naql',
                                                                                  name: 'الشيخ الجنيد بن أحمد بن عبد الرحمن النقل',
                                                                                  generation: 35,
                                                                                  hasOffspringNote: true,
                                                                                  notes: 'عقبه في جبل حبشي',
                                                                                  children: []
                                                                                },
                                                                                {
                                                                                  id: 'node-omar-ahmed-naql',
                                                                                  name: 'الشيخ عمر بن أحمد بن عبد الرحمن النقل',
                                                                                  generation: 35,
                                                                                  isBranchHead: true,
                                                                                  branchHeaderTitle: 'أعقاب عمر بن أحمد بن عبد الرحمن النقل',
                                                                                  children: [
                                                                                    {
                                                                                      id: 'node-ahmed-omar-naql',
                                                                                      name: 'أحمد بن عمر بن أحمد بن عبد الرحمن النقل',
                                                                                      generation: 36,
                                                                                      hasOffspringNote: true,
                                                                                      notes: 'عقبه في الحشاء والضالع',
                                                                                      children: []
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              ]
                                                                            },
                                                                            {
                                                                              id: 'node-jamal-al-din-mohammed',
                                                                              name: 'سيدي الولي الصالح أبو الجنيد / الشيخ جمال الدين محمد بن عبد الرحمن النقل',
                                                                              title: 'الجد الجامع لآل الجنيد في الصراري وجبل صبر',
                                                                              generation: 34,
                                                                              isBranchHead: true,
                                                                              branchHeaderTitle: 'أعقاب سيدي جمال الدين محمد بن عبد الرحمن (أبو الجنيد)',
                                                                              children: [
                                                                                {
                                                                                  id: 'branch-bishr-al-junaid',
                                                                                  name: 'السيد بشر الجنيد بن محمد جمال الدين',
                                                                                  generation: 35,
                                                                                  hasOffspringNote: true,
                                                                                  notes: 'أعقب بشر الجنيد',
                                                                                  children: []
                                                                                },
                                                                                {
                                                                                  id: 'branch-ahmed-al-junaid',
                                                                                  name: 'السيد أحمد الجنيد بن محمد جمال الدين',
                                                                                  title: 'رأس الفرع الأول لآل الجنيد',
                                                                                  generation: 35,
                                                                                  isBranchHead: true,
                                                                                  branchHeaderTitle: 'الفرع الأول: أعقاب أحمد الجنيد بن محمد جمال الدين',
                                                                                  children: [
                                                                                    {
                                                                                      id: 'node-muhsin-ahmed-junaid',
                                                                                      name: 'محسن بن أحمد الجنيد بن محمد جمال الدين',
                                                                                      generation: 36,
                                                                                      isBranchHead: true,
                                                                                      branchHeaderTitle: 'أعقاب محسن بن أحمد الجنيد',
                                                                                      children: [
                                                                                        {
                                                                                          id: 'node-abbad-muhsin',
                                                                                          name: 'عبَّاد بن محسن بن أحمد الجنيد',
                                                                                          generation: 37,
                                                                                          isBranchHead: true,
                                                                                          branchHeaderTitle: 'أعقاب عبَّاد بن محسن بن أحمد الجنيد',
                                                                                          children: [
                                                                                            {
                                                                                              id: 'node-abdullah-abbad-branch',
                                                                                              name: 'عبد الله بن عبَّاد',
                                                                                              generation: 38,
                                                                                              isBranchHead: true,
                                                                                              branchHeaderTitle: 'أعقاب عبد الله بن محمد بن عبد الله بن عبَّاد',
                                                                                              children: [
                                                                                                {
                                                                                                  id: 'node-mohammed-naji-hassan',
                                                                                                  name: 'محمد بن ناجي بن حسن بن عثمان بن سعيد بن عبد الله',
                                                                                                  generation: 40,
                                                                                                  isBranchHead: true,
                                                                                                  branchHeaderTitle: 'أعقاب محمد بن ناجي بن حسن',
                                                                                                  children: [
                                                                                                    {
                                                                                                      id: 'node-m-m-naji',
                                                                                                      name: 'محمد بن محمد بن ناجي',
                                                                                                      generation: 41,
                                                                                                      children: [
                                                                                                        { id: 'node-issam-m-m', name: 'عصام', generation: 42, children: [] },
                                                                                                        { id: 'node-adnan-m-m', name: 'عدنان', generation: 42, children: [] },
                                                                                                        { id: 'node-youssef-m-m', name: 'يوسف', generation: 42, children: [] },
                                                                                                        { id: 'node-radwan-m-m', name: 'رضوان', generation: 42, children: [] },
                                                                                                        { id: 'node-saddam-m-m', name: 'صدام', generation: 42, children: [] },
                                                                                                        { id: 'node-ahmed-m-m', name: 'أحمد', generation: 42, children: [] },
                                                                                                        { id: 'node-osama-m-m', name: 'أسامة', generation: 42, children: [] },
                                                                                                        { id: 'node-zakaria-m-m', name: 'زكريا', generation: 42, children: [] },
                                                                                                        { id: 'node-anas-m-m', name: 'أنس', generation: 42, children: [] }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      id: 'node-ahmed-m-naji',
                                                                                                      name: 'أحمد بن محمد بن ناجي',
                                                                                                      generation: 41,
                                                                                                      children: [
                                                                                                        { id: 'node-mutahhar-ahmed-m', name: 'مطهر', generation: 42, children: [] },
                                                                                                        { id: 'node-amin-ahmed-m', name: 'أمين', generation: 42, children: [] },
                                                                                                        { id: 'node-murtadha-ahmed-m', name: 'مرتضى', generation: 42, children: [] }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      id: 'node-jamil-m-naji',
                                                                                                      name: 'جميل بن محمد بن ناجي',
                                                                                                      generation: 41,
                                                                                                      children: [
                                                                                                        { id: 'node-mourad-jamil', name: 'مراد', generation: 42, children: [] },
                                                                                                        { id: 'node-jamal-jamil', name: 'جمال', generation: 42, children: [] },
                                                                                                        { id: 'node-mohammed-jamil', name: 'محمد', generation: 42, children: [] }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      id: 'node-abdulwahab-m-naji',
                                                                                                      name: 'عبد الوهاب بن محمد بن ناجي بن حسن',
                                                                                                      generation: 41,
                                                                                                      children: [
                                                                                                        { id: 'node-amr-abdulwahab', name: 'عمرو', generation: 42, children: [] },
                                                                                                        { id: 'node-ammar-abdulwahab', name: 'عمار', generation: 42, children: [] },
                                                                                                        { id: 'node-mohammed-abdulwahab', name: 'محمد', generation: 42, children: [] },
                                                                                                        { id: 'node-aamer-abdulwahab', name: 'عامر', generation: 42, children: [] }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      id: 'node-abdulrahman-m-naji',
                                                                                                      name: 'عبد الرحمن بن محمد بن ناجي بن حسن',
                                                                                                      generation: 41,
                                                                                                      hasOffspringNote: true,
                                                                                                      children: []
                                                                                                    },
                                                                                                    {
                                                                                                      id: 'node-fahd-m-naji',
                                                                                                      name: 'فهد بن محمد بن ناجي بن حسن',
                                                                                                      generation: 41,
                                                                                                      children: [
                                                                                                        { id: 'node-mohanad-fahd', name: 'مهند', generation: 42, children: [] },
                                                                                                        { id: 'node-mohammed-fahd', name: 'محمد', generation: 42, children: [] }
                                                                                                      ]
                                                                                                    },
                                                                                                    { id: 'node-shukri-m-naji', name: 'شكري', generation: 41, children: [] },
                                                                                                    { id: 'node-amin-m-naji', name: 'أمين', generation: 41, children: [] },
                                                                                                    { id: 'node-bilal-m-naji', name: 'بلال', generation: 41, children: [] }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  id: 'node-abdullah-naji-hassan',
                                                                                                  name: 'عبد الله بن ناجي بن حسن بن عثمان بن سعيد بن عبد الله',
                                                                                                  generation: 40,
                                                                                                  children: [
                                                                                                    {
                                                                                                      id: 'node-noman-abdullah-naji',
                                                                                                      name: 'نعمان بن عبد الله بن ناجي بن حسن',
                                                                                                      generation: 41,
                                                                                                      children: [
                                                                                                        { id: 'node-hashid-noman', name: 'حاشد', generation: 42, children: [] },
                                                                                                        { id: 'node-arbad-noman', name: 'أربد', generation: 42, children: [] },
                                                                                                        { id: 'node-abbad-noman', name: 'عبَّاد', generation: 42, children: [] }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      id: 'node-ali-abdullah-naji',
                                                                                                      name: 'علي بن عبد الله بن ناجي بن حسن',
                                                                                                      generation: 41,
                                                                                                      children: [
                                                                                                        { id: 'node-mohammed-ali-abdullah', name: 'محمد', generation: 42, children: [] }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  id: 'node-mohammed-hassan-othman',
                                                                                                  name: 'محمد بن حسن بن عثمان بن سعيد بن عبد الله بن محمد',
                                                                                                  generation: 39,
                                                                                                  noOffspring: false,
                                                                                                  notes: 'وأعقب: بنات',
                                                                                                  children: []
                                                                                                },
                                                                                                {
                                                                                                  id: 'node-othman-hassan-othman',
                                                                                                  name: 'عثمان بن حسن بن عثمان بن سعيد بن عبد الله بن محمد',
                                                                                                  generation: 39,
                                                                                                  children: [
                                                                                                    {
                                                                                                      id: 'node-abdulqawi-othman',
                                                                                                      name: 'عبد القوي بن عثمان بن حسن',
                                                                                                      generation: 40,
                                                                                                      children: [
                                                                                                        {
                                                                                                          id: 'node-ahmed-abdulqawi',
                                                                                                          name: 'أحمد بن عبد القوي بن عثمان بن حسن',
                                                                                                          generation: 41,
                                                                                                          children: [
                                                                                                            { id: 'node-mazen-ahmed-abdulqawi', name: 'مازن', generation: 42, children: [] }
                                                                                                          ]
                                                                                                        },
                                                                                                        {
                                                                                                          id: 'node-mohammed-abdulqawi',
                                                                                                          name: 'محمد بن عبد القوي بن عثمان بن حسن',
                                                                                                          generation: 41,
                                                                                                          children: [
                                                                                                            { id: 'node-eyad-mohammed-qawi', name: 'إياد', generation: 42, children: [] },
                                                                                                            { id: 'node-issam-mohammed-qawi', name: 'عصام', generation: 42, children: [] },
                                                                                                            { id: 'node-ahmed-mohammed-qawi', name: 'أحمد', generation: 42, children: [] },
                                                                                                            { id: 'node-adnan-mohammed-qawi', name: 'عدنان', generation: 42, children: [] }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      id: 'node-abdulsalam-othman',
                                                                                                      name: 'عبد السلام بن عثمان بن حسن',
                                                                                                      generation: 40,
                                                                                                      notes: 'وأعقب: بنت',
                                                                                                      children: []
                                                                                                    },
                                                                                                    {
                                                                                                      id: 'node-abdulraouf-othman',
                                                                                                      name: 'عبد الرؤوف بن عثمان بن حسن',
                                                                                                      generation: 40,
                                                                                                      notes: 'وأعقب: غائب',
                                                                                                      children: []
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              id: 'node-hassan-abbad-branch',
                                                                                              name: 'حسن بن عبَّاد بن محسن بن أحمد الجنيد',
                                                                                              generation: 38,
                                                                                              isBranchHead: true,
                                                                                              branchHeaderTitle: 'أعقاب حسن بن عبَّاد بن محسن بن أحمد الجنيد',
                                                                                              children: [
                                                                                                {
                                                                                                  id: 'node-mansoor-ali-ghalib',
                                                                                                  name: 'منصور بن علي بن غالب بن عبد القوي علي بن عبد الله بن حسن بن عبَّاد',
                                                                                                  generation: 37,
                                                                                                  children: [
                                                                                                    { id: 'node-issam-mansoor', name: 'عصام', generation: 38, children: [] }
                                                                                                  ]
                                                                                                },
                                                                                                {
                                                                                                  id: 'node-mohammed-abduljabbar-hassan',
                                                                                                  name: 'محمد بن عبد الجبار بن علي بن عبد الله بن حسن بن عبَّاد',
                                                                                                  generation: 36,
                                                                                                  children: [
                                                                                                    { id: 'node-ismail-m-jabbar', name: 'إسماعيل', generation: 37, children: [] },
                                                                                                    { id: 'node-ghalib-m-jabbar', name: 'غالب', generation: 37, children: [] },
                                                                                                    { id: 'node-saif-m-jabbar', name: 'سيف', generation: 37, children: [] }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              id: 'node-jilan-abbad-branch',
                                                                                              name: 'جيلان بن عبَّاد بن محسن بن أحمد الجنيد',
                                                                                              generation: 38,
                                                                                              isBranchHead: true,
                                                                                              branchHeaderTitle: 'أعقاب جيلان بن عبَّاد بن محسن بن أحمد الجنيد',
                                                                                              children: [
                                                                                                {
                                                                                                  id: 'node-ismail-hassan-ismail-abbas',
                                                                                                  name: 'إسماعيل بن حسن بن إسماعيل بن عباس بن علي بن جيلان بن عبَّاد',
                                                                                                  generation: 37,
                                                                                                  children: [
                                                                                                    {
                                                                                                      id: 'node-mohammed-ismail-hassan',
                                                                                                      name: 'محمد بن إسماعيل بن حسن بن إسماعيل',
                                                                                                      generation: 38,
                                                                                                      children: [
                                                                                                        {
                                                                                                          id: 'node-ahmed-m-ismail',
                                                                                                          name: 'أحمد بن محمد بن إسماعيل بن حسن بن إسماعيل',
                                                                                                          generation: 39,
                                                                                                          children: [
                                                                                                            {
                                                                                                              id: 'node-mohammed-ahmed-m-ismail',
                                                                                                              name: 'محمد بن أحمد بن محمد بن إسماعيل',
                                                                                                              generation: 40,
                                                                                                              children: [
                                                                                                                {
                                                                                                                  id: 'node-abdulkhaliq-mohammed-ahmed',
                                                                                                                  name: 'عبد الخالق بن محمد بن أحمد بن محمد بن إسماعيل',
                                                                                                                  generation: 41,
                                                                                                                  children: [
                                                                                                                    { id: 'node-alaa-abdulkhaliq', name: 'علاء', generation: 42, children: [] },
                                                                                                                    { id: 'node-mustafa-abdulkhaliq-martyr', name: 'مصطفى', isMartyr: true, notes: 'شهيد', generation: 42, children: [] },
                                                                                                                    { id: 'node-zaid-abdulkhaliq', name: 'زيد', generation: 42, children: [] }
                                                                                                                  ]
                                                                                                                },
                                                                                                                { id: 'node-khalil-m-ahmed', name: 'خليل', generation: 41, children: [] },
                                                                                                                { id: 'node-mourad-m-ahmed', name: 'مراد', generation: 41, children: [] },
                                                                                                                { id: 'node-mohammed-m-ahmed', name: 'محمد', generation: 41, children: [] },
                                                                                                                { id: 'node-waleed-m-ahmed', name: 'وليد', generation: 41, children: [] }
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        },
                                                                                                        {
                                                                                                          id: 'node-saeed-m-ismail',
                                                                                                          name: 'سعيد بن محمد بن إسماعيل بن حسن بن إسماعيل',
                                                                                                          generation: 39,
                                                                                                          children: [
                                                                                                            {
                                                                                                              id: 'node-mohammed-saeed-m-ismail',
                                                                                                              name: 'محمد بن سعيد بن محمد بن إسماعيل',
                                                                                                              generation: 40,
                                                                                                              children: [
                                                                                                                {
                                                                                                                  id: 'node-abdulraouf-mohammed-saeed',
                                                                                                                  name: 'عبد الرؤوف بن محمد بن سعيد',
                                                                                                                  generation: 41,
                                                                                                                  children: [{ id: 'node-thiab-abdulraouf', name: 'ذياب', generation: 42, children: [] }]
                                                                                                                },
                                                                                                                {
                                                                                                                  id: 'node-sultan-mohammed-saeed',
                                                                                                                  name: 'سلطان بن محمد بن سعيد',
                                                                                                                  generation: 41,
                                                                                                                  children: [{ id: 'node-zayed-sultan', name: 'زايد', generation: 42, children: [] }]
                                                                                                                },
                                                                                                                { id: 'node-wohaib-mohammed-saeed', name: 'وهيب', generation: 41, children: [] }
                                                                                                              ]
                                                                                                            },
                                                                                                            {
                                                                                                              id: 'node-abdullah-saeed-m-ismail',
                                                                                                              name: 'عبد الله بن سعيد بن محمد',
                                                                                                              generation: 40,
                                                                                                              noOffspring: true,
                                                                                                              notes: 'لم يعقب',
                                                                                                              children: []
                                                                                                            }
                                                                                                          ]
                                                                                                        },
                                                                                                        {
                                                                                                          id: 'node-abdulkarim-m-ismail',
                                                                                                          name: 'عبد الكريم بن محمد بن إسماعيل بن حسن بن إسماعيل',
                                                                                                          generation: 39,
                                                                                                          children: [
                                                                                                            {
                                                                                                              id: 'node-saeed-abdulkarim-m',
                                                                                                              name: 'سعيد بن عبد الكريم بن محمد بن إسماعيل',
                                                                                                              generation: 40,
                                                                                                              children: [
                                                                                                                { id: 'node-faisal-saeed-k', name: 'فيصل', generation: 41, children: [] },
                                                                                                                {
                                                                                                                  id: 'node-qasim-saeed-k',
                                                                                                                  name: 'قاسم بن سعيد بن عبد الكريم',
                                                                                                                  generation: 41,
                                                                                                                  children: [{ id: 'node-mawlay-ali-qasim', name: 'مولاي علي', generation: 42, children: [] }]
                                                                                                                },
                                                                                                                { id: 'node-arif-saeed-k', name: 'عارف', generation: 41, children: [] },
                                                                                                                { id: 'node-samir-saeed-k', name: 'سمير', generation: 41, children: [] },
                                                                                                                { id: 'node-ahmed-saeed-k', name: 'أحمد', generation: 41, children: [] },
                                                                                                                { id: 'node-abdulkufi-saeed-k', name: 'عبد الكافي', generation: 41, children: [] },
                                                                                                                { id: 'node-youssef-saeed-k', name: 'يوسف', generation: 41, children: [] },
                                                                                                                { id: 'node-dawood-saeed-k', name: 'داؤود', generation: 41, children: [] }
                                                                                                              ]
                                                                                                            },
                                                                                                            {
                                                                                                              id: 'node-hazza-abdulkarim',
                                                                                                              name: 'هزاع بن عبد الكريم',
                                                                                                              generation: 40,
                                                                                                              noOffspring: true,
                                                                                                              notes: 'ولا عقب له',
                                                                                                              children: []
                                                                                                            }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            }
                                                                                          ]
                                                                                        },
                                                                                        {
                                                                                          id: 'node-ataa-muhsin',
                                                                                          name: 'عطاء بن محسن بن أحمد الجنيد بن محمد جمال الدين',
                                                                                          generation: 37,
                                                                                          isBranchHead: true,
                                                                                          branchHeaderTitle: 'أعقاب عطاء بن محسن بن أحمد الجنيد',
                                                                                          children: [
                                                                                            {
                                                                                              id: 'node-saif-ghalib-fadhel-ataa',
                                                                                              name: 'سيف بن غالب بن فاضل بن يحيى بن محمد بن عطاء',
                                                                                              generation: 38,
                                                                                              children: [
                                                                                                {
                                                                                                  id: 'node-saeed-saif-ghalib',
                                                                                                  name: 'سعيد بن سيف بن غالب',
                                                                                                  generation: 39,
                                                                                                  children: [
                                                                                                    {
                                                                                                      id: 'node-ahmed-saeed-saif',
                                                                                                      name: 'أحمد بن سعيد بن سيف بن غالب',
                                                                                                      generation: 40,
                                                                                                      children: [
                                                                                                        {
                                                                                                          id: 'node-khaled-ahmed-saeed',
                                                                                                          name: 'خالد بن أحمد بن سعيد بن سيف بن غالب',
                                                                                                          generation: 41,
                                                                                                          children: [{ id: 'node-m-khaled-ahmed-saeed', name: 'محمد', generation: 42, children: [] }]
                                                                                                        },
                                                                                                        { id: 'node-fouad-ahmed-saeed', name: 'فؤاد', generation: 41, children: [] },
                                                                                                        { id: 'node-adel-ahmed-saeed', name: 'عادل', generation: 41, children: [] },
                                                                                                        { id: 'node-issam-ahmed-saeed', name: 'عصام', generation: 41, children: [] }
                                                                                                      ]
                                                                                                    },
                                                                                                    {
                                                                                                      id: 'node-ali-saeed-saif',
                                                                                                      name: 'علي بن سعيد بن سيف',
                                                                                                      generation: 40,
                                                                                                      noOffspring: true,
                                                                                                      notes: 'لم يعقب',
                                                                                                      children: []
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            },
                                                                                            {
                                                                                              id: 'node-ibrahim-mohammed-ataa',
                                                                                              name: 'إبراهيم بن محمد بن عطاء بن محسن بن أحمد الجنيد',
                                                                                              generation: 38,
                                                                                              children: [
                                                                                                {
                                                                                                  id: 'node-rajih-ibrahim-ataa',
                                                                                                  name: 'راجح بن إبراهيم بن محمد بن عطاء',
                                                                                                  generation: 39,
                                                                                                  children: [
                                                                                                    {
                                                                                                      id: 'node-saeed-rajih-ibrahim',
                                                                                                      name: 'سعيد بن راجح بن إبراهيم بن محمد بن عطاء',
                                                                                                      generation: 40,
                                                                                                      children: [
                                                                                                        {
                                                                                                          id: 'node-abdullah-saeed-rajih',
                                                                                                          name: 'عبد الله بن سعيد بن راجح',
                                                                                                          generation: 41,
                                                                                                          children: [
                                                                                                            {
                                                                                                              id: 'node-hassan-abdullah-saeed-r',
                                                                                                              name: 'حسن بن عبد الله بن سعيد بن راجح',
                                                                                                              generation: 42,
                                                                                                              children: [
                                                                                                                { id: 'node-abdullah-hassan-r', name: 'عبد الله', generation: 43, children: [] },
                                                                                                                { id: 'node-ahmed-hassan-r', name: 'أحمد', generation: 43, children: [] },
                                                                                                                { id: 'node-saeed-hassan-r', name: 'سعيد', generation: 43, children: [] }
                                                                                                              ]
                                                                                                            },
                                                                                                            {
                                                                                                              id: 'node-abdulkarim-abdullah-saeed-r',
                                                                                                              name: 'عبد الكريم بن عبد الله بن سعيد بن راجح',
                                                                                                              generation: 42,
                                                                                                              children: [
                                                                                                                { id: 'node-abdulrahman-abdulkarim-r', name: 'عبد الرحمن', generation: 43, children: [] },
                                                                                                                { id: 'node-ibrahim-abdulkarim-r', name: 'إبراهيم', generation: 43, children: [] },
                                                                                                                { id: 'node-ahmed-abdulkarim-r', name: 'أحمد', generation: 43, children: [] },
                                                                                                                { id: 'node-abdulkhaliq-abdulkarim-r', name: 'عبد الخالق', generation: 43, children: [] },
                                                                                                                {
                                                                                                                  id: 'node-shamsan-abdulkarim-r',
                                                                                                                  name: 'شمسان بن عبد الكريم بن عبد الله',
                                                                                                                  generation: 43,
                                                                                                                  noOffspring: true,
                                                                                                                  notes: 'مات ولا عقب له',
                                                                                                                  children: []
                                                                                                                }
                                                                                                              ]
                                                                                                            }
                                                                                                          ]
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              ]
                                                                                            }
                                                                                          ]
                                                                                        }
                                                                                      ]
                                                                                    },
                                                                                    {
                                                                                      id: 'node-fadhel-ahmed-junaid',
                                                                                      name: 'فاضل بن أحمد الجنيد بن محمد جمال الدين (قدس)',
                                                                                      generation: 36,
                                                                                      notes: 'سكن قدس - لم يتم موافاتنا بتفصيل عقبه',
                                                                                      children: []
                                                                                    },
                                                                                    {
                                                                                      id: 'node-radwan-ahmed-junaid',
                                                                                      name: 'رضوان بن أحمد الجنيد بن محمد جمال الدين (الحشاء والضالع)',
                                                                                      generation: 36,
                                                                                      notes: 'سكن الحشاء والضالع - لم يتم موافاتنا بأي معلومات',
                                                                                      children: []
                                                                                    },
                                                                                    {
                                                                                      id: 'node-omar-ahmed-junaid',
                                                                                      name: 'عمر بن أحمد الجنيد بن محمد جمال الدين (الحشاء والضالع)',
                                                                                      generation: 36,
                                                                                      isBranchHead: true,
                                                                                      branchHeaderTitle: 'أعقاب عمر بن أحمد الجنيد بن محمد جمال الدين',
                                                                                      notes: 'الحشاء والضالع - مثبت منه عمود نسب الشيخ صالح وفواز الجنيد',
                                                                                      children: [
                                                                                        {
                                                                                          id: 'node-abdo-hassan-branch-omar',
                                                                                          name: 'عبده بن حسن بن محمد بن صلاح بن علي بن مقبل بن عبد الله بن صالح بن رضوان بن أحمد بن عمر بن أحمد الجنيد',
                                                                                          generation: 42,
                                                                                          children: [
                                                                                            {
                                                                                              id: 'node-fawwaz-abdo-hassan',
                                                                                              name: 'فواز بن عبده بن حسن',
                                                                                              generation: 43,
                                                                                              children: [{ id: 'node-hashem-fawwaz', name: 'هاشم', generation: 44, children: [] }]
                                                                                            },
                                                                                            {
                                                                                              id: 'node-ammar-abdo-hassan',
                                                                                              name: 'عمار بن عبده بن حسن',
                                                                                              generation: 43,
                                                                                              children: [
                                                                                                { id: 'node-alaa-ammar', name: 'علاء الدين', generation: 44, children: [] },
                                                                                                { id: 'node-luqman-ammar', name: 'لقمان', generation: 44, children: [] }
                                                                                              ]
                                                                                            },
                                                                                          {
                                                                                            id: 'node-salah-abdo-hassan',
                                                                                            name: 'صلاح بن عبده بن حسن',
                                                                                            generation: 43,
                                                                                            children: [{ id: 'node-fahd-salah', name: 'فهد', generation: 44, children: [] }]
                                                                                          },
                                                                                          {
                                                                                            id: 'node-fahd-abdo-hassan-martyr',
                                                                                            name: 'فهد بن عبده بن حسن',
                                                                                            generation: 43,
                                                                                            isMartyr: true,
                                                                                            noOffspring: true,
                                                                                            notes: 'شهيد - لا عقب له',
                                                                                            children: []
                                                                                          }
                                                                                        ]
                                                                                      }
                                                                                    ]
                                                                                  },
                                                                                  {
                                                                                    id: 'node-abdullah-ahmed-junaid',
                                                                                    name: 'عبد الله بن أحمد الجنيد بن محمد جمال الدين (الضالع والحشاء وقدس)',
                                                                                    generation: 36,
                                                                                    notes: 'الضالع والحشاء وقدس - لم يتم موافاتنا بأي معلومات',
                                                                                    children: []
                                                                                  }
                                                                                ]
                                                                              },
                                                                              {
                                                                                id: 'branch-abdulrahman-al-junaid',
                                                                                name: 'السيد عبد الرحمن الجنيد بن محمد جمال الدين (المكنى بالجنيد)',
                                                                                title: 'رأس الفرع الثاني لآل الجنيد',
                                                                                generation: 35,
                                                                                isBranchHead: true,
                                                                                branchHeaderTitle: 'الفرع الثاني: أعقاب عبد الرحمن الجنيد بن محمد جمال الدين',
                                                                                children: [
                                                                                  {
                                                                                    id: 'node-ibrahim-abdulrahman-junaid',
                                                                                    name: 'إبراهيم بن عبد الرحمن الجنيد',
                                                                                    generation: 36,
                                                                                    isBranchHead: true,
                                                                                    branchHeaderTitle: 'أعقاب إبراهيم بن عبد الرحمن الجنيد',
                                                                                    children: [
                                                                                      {
                                                                                        id: 'node-mohammed-ibrahim-junaid',
                                                                                        name: 'محمد بن إبراهيم بن عبد الرحمن الجنيد',
                                                                                        generation: 37,
                                                                                        isBranchHead: true,
                                                                                        branchHeaderTitle: 'أعقاب محمد بن إبراهيم بن عبد الرحمن الجنيد',
                                                                                        children: [
                                                                                          {
                                                                                            id: 'node-ahmed-othman-m-ibrahim',
                                                                                            name: 'أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد',
                                                                                            generation: 38,
                                                                                            isBranchHead: true,
                                                                                            branchHeaderTitle: 'أعقاب أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد',
                                                                                            children: [
                                                                                              {
                                                                                                id: 'node-mohammed-ahmed-othman',
                                                                                                name: 'محمد بن أحمد بن عثمان بن محمد بن إبراهيم',
                                                                                                generation: 39,
                                                                                                isBranchHead: true,
                                                                                                branchHeaderTitle: 'أعقاب محمد بن أحمد بن عثمان',
                                                                                                children: [
                                                                                                  {
                                                                                                    id: 'node-mohammed-abdullah-abdulghani',
                                                                                                    name: 'محمد بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان',
                                                                                                    generation: 40,
                                                                                                    children: [
                                                                                                      {
                                                                                                        id: 'node-abdulwahab-m-abdullah',
                                                                                                        name: 'عبد الوهاب بن محمد بن عبد الله',
                                                                                                        generation: 41,
                                                                                                        children: [
                                                                                                          { id: 'node-m-abdulwahab-m', name: 'محمد', generation: 42, children: [] },
                                                                                                          { id: 'node-hamza-abdulwahab-m', name: 'الحمزة', generation: 42, children: [] }
                                                                                                        ]
                                                                                                      },
                                                                                                      {
                                                                                                        id: 'node-abdulsalam-m-abdullah',
                                                                                                        name: 'عبد السلام بن محمد بن عبد الله',
                                                                                                        generation: 41,
                                                                                                        children: [
                                                                                                          { id: 'node-rida-abdulsalam-m', name: 'الرضا', generation: 42, children: [] },
                                                                                                          { id: 'node-m-abdulsalam-m', name: 'محمد', generation: 42, children: [] }
                                                                                                        ]
                                                                                                      },
                                                                                                      {
                                                                                                        id: 'node-ahmed-m-abdullah',
                                                                                                        name: 'أحمد بن محمد بن عبد الله',
                                                                                                        generation: 41,
                                                                                                        children: [
                                                                                                          { id: 'node-saddam-ahmed-m-martyr', name: 'صدام بن أحمد بن محمد', isMartyr: true, notes: 'شهيد', generation: 42, children: [] },
                                                                                                          { id: 'node-adnan-ahmed-m', name: 'عدنان', generation: 42, children: [] },
                                                                                                          { id: 'node-m-ahmed-m', name: 'محمد', generation: 42, children: [] },
                                                                                                          { id: 'node-ali-ahmed-m', name: 'علي', generation: 42, children: [] }
                                                                                                        ]
                                                                                                      }
                                                                                                    ]
                                                                                                  },
                                                                                                  {
                                                                                                    id: 'node-abdulqader-abdullah-abdulghani',
                                                                                                    name: 'عبد القادر بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان',
                                                                                                    generation: 40,
                                                                                                    children: [
                                                                                                      {
                                                                                                        id: 'node-abdulhakim-abdulqader',
                                                                                                        name: 'عبد الحكيم بن عبد القادر بن عبد الله',
                                                                                                        generation: 41,
                                                                                                        children: [
                                                                                                          {
                                                                                                            id: 'node-mutahhar-abdulhakim',
                                                                                                            name: 'مطهر بن عبد الحكيم بن عبد القادر',
                                                                                                            generation: 42,
                                                                                                            children: [{ id: 'node-m-mutahhar-abdulhakim', name: 'محمد', generation: 43, children: [] }]
                                                                                                          },
                                                                                                          {
                                                                                                            id: 'node-m-abdulhakim',
                                                                                                            name: 'محمد بن عبد الحكيم بن عبد القادر',
                                                                                                            generation: 42,
                                                                                                            children: [{ id: 'node-jawhar-m-abdulhakim', name: 'جوهر', generation: 43, children: [] }]
                                                                                                          },
                                                                                                          { id: 'node-jawhar-abdulhakim-martyr', name: 'جوهر بن عبد الحكيم', isMartyr: true, notes: 'شهيد', generation: 42, children: [] },
                                                                                                          { id: 'node-ahmed-abdulhakim-martyr', name: 'أحمد بن عبد الحكيم', isMartyr: true, notes: 'شهيد', generation: 42, children: [] },
                                                                                                          { id: 'node-hamza-abdulhakim', name: 'الحمزة', generation: 42, children: [] }
                                                                                                        ]
                                                                                                      },
                                                                                                      {
                                                                                                        id: 'node-abdulelah-abdulqader',
                                                                                                        name: 'عبد الإله بن عبد القادر بن عبد الله',
                                                                                                        generation: 41,
                                                                                                        children: [
                                                                                                          {
                                                                                                            id: 'node-zaid-abdulelah',
                                                                                                            name: 'زيد بن عبد الإله بن عبد القادر',
                                                                                                            generation: 42,
                                                                                                            children: [{ id: 'node-hussain-zaid-abdulelah', name: 'الحسين', generation: 43, children: [] }]
                                                                                                          },
                                                                                                          { id: 'node-m-abdulelah', name: 'محمد', generation: 42, children: [] },
                                                                                                          { id: 'node-ibrahim-abdulelah', name: 'إبراهيم', generation: 42, children: [] },
                                                                                                          { id: 'node-ismail-abdulelah', name: 'إسماعيل', generation: 42, children: [] },
                                                                                                          { id: 'node-ali-abdulelah', name: 'علي', generation: 42, children: [] },
                                                                                                          { id: 'node-ahmed-abdulelah', name: 'أحمد', generation: 42, children: [] }
                                                                                                        ]
                                                                                                      }
                                                                                                    ]
                                                                                                  }
                                                                                                ]
                                                                                              },
                                                                                              {
                                                                                                id: 'node-abdulmuti-m-m-ahmed',
                                                                                                name: 'محمد بن عبد المعطي بن محمد بن محمد بن أحمد بن عثمان',
                                                                                                generation: 40,
                                                                                                isBranchHead: true,
                                                                                                branchHeaderTitle: 'أعقاب محمد بن عبد المعطي',
                                                                                                children: [
                                                                                                  {
                                                                                                    id: 'node-ibrahim-m-abdulmuti',
                                                                                                    name: 'إبراهيم بن محمد بن عبد المعطي',
                                                                                                    generation: 41,
                                                                                                    children: [
                                                                                                      {
                                                                                                        id: 'node-abdulrahman-ibrahim-muti',
                                                                                                        name: 'عبد الرحمن بن إبراهيم بن محمد بن عبد المعطي',
                                                                                                        generation: 42,
                                                                                                        children: [
                                                                                                          { id: 'node-m-abdulrahman-muti', name: 'محمد', generation: 43, children: [] },
                                                                                                          { id: 'node-ahmed-abdulrahman-muti', name: 'أحمد', generation: 43, children: [] },
                                                                                                          { id: 'node-zain-abdulrahman-muti', name: 'زين العابدين', generation: 43, children: [] }
                                                                                                        ]
                                                                                                      },
                                                                                                      {
                                                                                                        id: 'node-mukhtar-ibrahim-muti',
                                                                                                        name: 'مختار بن إبراهيم بن محمد بن عبد المعطي',
                                                                                                        generation: 42,
                                                                                                        children: [
                                                                                                          { id: 'node-omar-mukhtar-muti', name: 'عمر', generation: 43, children: [] },
                                                                                                          { id: 'node-badr-mukhtar-muti', name: 'بدر', generation: 43, children: [] },
                                                                                                          { id: 'node-m-mukhtar-muti-martyr', name: 'محمد بن مختار', isMartyr: true, notes: 'شهيد', generation: 43, children: [] },
                                                                                                          { id: 'node-ibrahim-mukhtar-muti', name: 'إبراهيم', generation: 43, children: [] }
                                                                                                        ]
                                                                                                      },
                                                                                                      {
                                                                                                        id: 'node-nabil-ibrahim-muti-martyr',
                                                                                                        name: 'الشهيد نبيل بن إبراهيم بن محمد بن عبد المعطي',
                                                                                                        isMartyr: true,
                                                                                                        notes: 'شهيد',
                                                                                                        generation: 42,
                                                                                                        children: [{ id: 'node-mutahhar-nabil-muti', name: 'المطهر', generation: 43, children: [] }]
                                                                                                      }
                                                                                                    ]
                                                                                                  }
                                                                                                ]
                                                                                              }
                                                                                            ]
                                                                                          }
                                                                                        ]
                                                                                      },
                                                                                      {
                                                                                        id: 'node-ali-ibrahim-junaid',
                                                                                        name: 'علي بن إبراهيم بن عبد الرحمن الجنيد',
                                                                                        generation: 37,
                                                                                        isBranchHead: true,
                                                                                        branchHeaderTitle: 'أعقاب علي بن إبراهيم بن عبد الرحمن الجنيد',
                                                                                        children: [
                                                                                          {
                                                                                            id: 'node-munasser-ali-ibrahim',
                                                                                            name: 'منصر بن علي بن إبراهيم بن عبد الرحمن الجنيد',
                                                                                            generation: 38,
                                                                                            children: [
                                                                                              {
                                                                                                id: 'node-fadhel-ahmed-abdullah-munasser',
                                                                                                name: 'فاضل بن أحمد بن عبد الله بن منصر بن علي بن إبراهيم',
                                                                                                generation: 39,
                                                                                                children: [
                                                                                                  {
                                                                                                    id: 'node-ali-fadhel-munasser',
                                                                                                    name: 'علي بن فاضل بن أحمد بن عبد الله',
                                                                                                    generation: 40,
                                                                                                    children: [
                                                                                                      {
                                                                                                        id: 'node-mansoor-ahmed-ali-fadhel',
                                                                                                        name: 'منصور بن أحمد بن علي بن فاضل',
                                                                                                        generation: 41,
                                                                                                        children: [
                                                                                                          {
                                                                                                            id: 'node-abdulaziz-mansoor-martyr',
                                                                                                            name: 'عبد العزيز بن منصور بن أحمد',
                                                                                                            isMartyr: true,
                                                                                                            notes: 'شهيد',
                                                                                                            generation: 42,
                                                                                                            children: [{ id: 'node-m-abdulaziz-mansoor', name: 'محمد', generation: 43, children: [] }]
                                                                                                          },
                                                                                                          { id: 'node-abdulmuttalib-mansoor', name: 'عبد المطلب', generation: 42, children: [] },
                                                                                                          { id: 'node-akram-mansoor', name: 'أكرم', generation: 42, children: [] }
                                                                                                        ]
                                                                                                      },
                                                                                                      {
                                                                                                        id: 'node-yahya-abdulhamid-ali-fadhel',
                                                                                                        name: 'يحيى بن عبد الحميد بن علي بن فاضل',
                                                                                                        generation: 41,
                                                                                                        children: [
                                                                                                          {
                                                                                                            id: 'node-zaid-yahya-abdulhamid-martyr',
                                                                                                            name: 'زيد بن يحيى بن عبد الحميد',
                                                                                                            isMartyr: true,
                                                                                                            notes: 'شهيد',
                                                                                                            generation: 42,
                                                                                                            children: [
                                                                                                              { id: 'node-issa-zaid-martyr', name: 'عيسى', generation: 43, children: [] },
                                                                                                              { id: 'node-yahya-zaid-martyr', name: 'يحيى', generation: 43, children: [] }
                                                                                                            ]
                                                                                                          }
                                                                                                        ]
                                                                                                      }
                                                                                                    ]
                                                                                                  }
                                                                                                ]
                                                                                              }
                                                                                            ]
                                                                                          }
                                                                                        ]
                                                                                      }
                                                                                    ]
                                                                                  },
                                                                                  {
                                                                                    id: 'node-al-aidaroos-abdulrahman-junaid',
                                                                                    name: 'السيد العيدروس بن عبد الرحمن الجنيد',
                                                                                    generation: 36,
                                                                                    hasOffspringNote: true,
                                                                                    notes: 'أعقب العيدروس بن عبد الرحمن الجنيد',
                                                                                    children: []
                                                                                  },
                                                                                  {
                                                                                    id: 'node-fadhel-abdulrahman-junaid',
                                                                                    name: 'السيد فاضل بن عبد الرحمن الجنيد',
                                                                                    generation: 36,
                                                                                    isBranchHead: true,
                                                                                    branchHeaderTitle: 'أعقاب فاضل بن عبد الرحمن الجنيد',
                                                                                    children: [
                                                                                      {
                                                                                        id: 'node-fadhel-bin-fadhel-junaid',
                                                                                        name: 'فضل بن فاضل بن عبد الرحمن الجنيد',
                                                                                        generation: 37,
                                                                                        children: [
                                                                                          {
                                                                                            id: 'node-ali-fadhel-bin-fadhel',
                                                                                            name: 'علي بن فضل بن فاضل بن عبد الرحمن الجنيد',
                                                                                            generation: 38,
                                                                                            children: [
                                                                                              {
                                                                                                id: 'node-saleh-ali-fadhel',
                                                                                                name: 'صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد',
                                                                                                generation: 39,
                                                                                                children: [
                                                                                                  {
                                                                                                    id: 'node-mohammed-saleh-ali-fadhel',
                                                                                                    name: 'محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد',
                                                                                                    generation: 40,
                                                                                                    children: [
                                                                                                      {
                                                                                                        id: 'node-qasim-mohammed-saleh-fadhel',
                                                                                                        name: 'قاسم بن محمد بن صالح بن علي بن فضل بن فاضل',
                                                                                                        generation: 41,
                                                                                                        children: [
                                                                                                          {
                                                                                                            id: 'node-abdulaziz-qasim-fadhel',
                                                                                                            name: 'عبد العزيز بن قاسم بن محمد بن صالح',
                                                                                                            generation: 42,
                                                                                                            children: [
                                                                                                              {
                                                                                                                id: 'node-omar-abdulaziz-qasim-martyr',
                                                                                                                name: 'عمر بن عبد العزيز بن قاسم',
                                                                                                                isMartyr: true,
                                                                                                                notes: 'شهيد',
                                                                                                                generation: 43,
                                                                                                                children: []
                                                                                                              }
                                                                                                            ]
                                                                                                          }
                                                                                                        ]
                                                                                                      },
                                                                                                      {
                                                                                                        id: 'node-qaid-mohammed-saleh-fadhel',
                                                                                                        name: 'قائد بن محمد بن صالح بن علي بن فضل بن فاضل',
                                                                                                        generation: 41,
                                                                                                        children: [
                                                                                                          {
                                                                                                            id: 'node-abdulghani-qaid-mohammed',
                                                                                                            name: 'عبد الغني بن قائد بن محمد بن صالح',
                                                                                                            generation: 42,
                                                                                                            noOffspring: true,
                                                                                                            notes: 'لا عقب له',
                                                                                                            children: []
                                                                                                          }
                                                                                                        ]
                                                                                                      }
                                                                                                    ]
                                                                                                  }
                                                                                                ]
                                                                                              }
                                                                                            ]
                                                                                          }
                                                                                        ]
                                                                                      }
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              }
                                                                            ]
                                                                          }
                                                                        ]
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
