import { PersonNode, TreeDocumentation } from '../types';

export const initialTreeData: PersonNode = {
  id: 'node-root-1',
  name: 'الجد الجامع السيد علي',
  fullName: 'السيد علي بن الحسن بن يحيى الحسيني',
  title: 'الجد الجامع وشيخ الأسرة',
  isBranchHead: true,
  branchHeaderTitle: 'الأصل الجامع لكافة فروع ونواحي العائلة',
  generation: 1,
  notes: 'عاش في القرن الثاني عشر الهجري، وإليه تجتمع كافة البطون والفروع المدونة في هذا السجل التاريخي المبارك.',
  documentRefs: ['وثيقة حجة النسب المحفوظة عام 1245هـ', 'سجل المحكمة الشرعية - إسطنبول رقم 88'],
  children: [
    {
      id: 'node-b1-head',
      name: 'السيد محمد',
      fullName: 'السيد محمد بن علي بن الحسن',
      title: 'رأس فرع آل محمد',
      isBranchHead: true,
      branchHeaderTitle: 'أعقب السيد محمد (فرع آل محمد)',
      generation: 2,
      parentId: 'node-root-1',
      notes: 'أعقب أربعة من الأبناء تفرعت منهم أنساب جليلة.',
      documentRefs: ['كتاب التحفة السنية في أنساب الأسر النبوية ص 142'],
      children: [
        {
          id: 'node-b1-c1',
          name: 'الشيخ أحمد',
          fullName: 'الشيخ أحمد بن محمد بن علي',
          title: 'عالم وفقيه الفرع',
          isBranchHead: true,
          branchHeaderTitle: 'أعقب الشيخ أحمد',
          generation: 3,
          parentId: 'node-b1-head',
          notes: 'تولى القضاء الشرعي والإفتاء وأعقب.',
          children: [
            {
              id: 'node-b1-c1-1',
              name: 'محمد',
              fullName: 'محمد بن أحمد بن محمد بن علي',
              generation: 4,
              parentId: 'node-b1-c1',
              isMartyr: true,
              notes: 'استشهد دفاعاً عن البلاد والديار في معركة القلعة عام 1334هـ.',
              children: [
                {
                  id: 'node-b1-c1-1-1',
                  name: 'أحمد',
                  fullName: 'أحمد بن محمد (الشهيد) بن أحمد بن محمد',
                  generation: 5,
                  parentId: 'node-b1-c1-1',
                  notes: 'عاش بالقدس الشريف وأعقب ذرية طيبة.',
                  children: [
                    {
                      id: 'node-b1-c1-1-1-1',
                      name: 'محمود',
                      fullName: 'محمود بن أحمد بن محمد الشهيد',
                      generation: 6,
                      parentId: 'node-b1-c1-1-1',
                      children: []
                    },
                    {
                      id: 'node-b1-c1-1-1-2',
                      name: 'إبراهيم',
                      fullName: 'إبراهيم بن أحمد بن محمد الشهيد',
                      generation: 6,
                      parentId: 'node-b1-c1-1-1',
                      isMartyr: true,
                      notes: 'استشهد عام 1948م.',
                      children: []
                    }
                  ]
                },
                {
                  id: 'node-b1-c1-1-2',
                  name: 'يوسف',
                  fullName: 'يوسف بن محمد (الشهيد) بن أحمد بن محمد',
                  generation: 5,
                  parentId: 'node-b1-c1-1',
                  noOffspring: true,
                  notes: 'لم يعقب - توفي شاباً ولم يترك ذرية.',
                  children: []
                }
              ]
            },
            {
              id: 'node-b1-c1-2',
              name: 'عبد الله',
              fullName: 'عبد الله بن أحمد بن محمد بن علي',
              generation: 4,
              parentId: 'node-b1-c1',
              hasOffspringNote: true,
              notes: 'أعقب في دمشق وحلب، ولم تُفصل أسماء أبنائه في المخطوط الأصلي مكتفياً بعبارة: وله أعقاب بحلب.',
              children: []
            },
            {
              id: 'node-b1-c1-3',
              name: 'عمر',
              fullName: 'عمر بن أحمد بن محمد بن علي',
              generation: 4,
              parentId: 'node-b1-c1',
              noOffspring: true,
              notes: 'لم يعقب - لم يولد له ذكور ولا إناث.',
              children: []
            }
          ]
        },
        {
          id: 'node-b1-c2',
          name: 'حسن',
          fullName: 'حسن بن محمد بن علي',
          generation: 3,
          parentId: 'node-b1-head',
          isBranchHead: true,
          branchHeaderTitle: 'أعقب حسن بن محمد',
          children: [
            {
              id: 'node-b1-c2-1',
              name: 'علي',
              fullName: 'علي بن حسن بن محمد بن علي',
              generation: 4,
              parentId: 'node-b1-c2',
              children: [
                {
                  id: 'node-b1-c2-1-1',
                  name: 'حسن',
                  fullName: 'حسن بن علي بن حسن بن محمد بن علي',
                  generation: 5,
                  parentId: 'node-b1-c2-1',
                  children: []
                },
                {
                  id: 'node-b1-c2-1-2',
                  name: 'خالد',
                  fullName: 'خالد بن علي بن حسن بن محمد بن علي',
                  generation: 5,
                  parentId: 'node-b1-c2-1',
                  noOffspring: true,
                  notes: 'لم يعقب.',
                  children: []
                }
              ]
            },
            {
              id: 'node-b1-c2-2',
              name: 'حسين',
              fullName: 'حسين بن حسن بن محمد بن علي',
              generation: 4,
              parentId: 'node-b1-c2',
              isMartyr: true,
              notes: 'شهيد الواجب.',
              children: [
                {
                  id: 'node-b1-c2-2-1',
                  name: 'جعفر',
                  fullName: 'جعفر بن حسين الشهيد بن حسن',
                  generation: 5,
                  parentId: 'node-b1-c2-2',
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: 'node-b1-c3',
          name: 'إبراهيم',
          fullName: 'إبراهيم بن محمد بن علي',
          generation: 3,
          parentId: 'node-b1-head',
          noOffspring: true,
          notes: 'لم يعقب - درج عقيماً.',
          children: []
        },
        {
          id: 'node-b1-c4',
          name: 'خليل',
          fullName: 'خليل بن محمد بن علي',
          generation: 3,
          parentId: 'node-b1-head',
          hasOffspringNote: true,
          notes: 'أعقب وله ذرية متوارثة في الحجاز.',
          children: []
        }
      ]
    },
    {
      id: 'node-b2-head',
      name: 'السيد مصطفى',
      fullName: 'السيد مصطفى بن علي بن الحسن',
      title: 'رأس فرع آل مصطفى',
      isBranchHead: true,
      branchHeaderTitle: 'أعقب السيد مصطفى (فرع آل مصطفى)',
      generation: 2,
      parentId: 'node-root-1',
      notes: 'عُرف بالورع والتجارة وأعقب سلالة عريقة.',
      children: [
        {
          id: 'node-b2-c1',
          name: 'سليمان',
          fullName: 'سليمان بن مصطفى بن علي',
          generation: 3,
          parentId: 'node-b2-head',
          isBranchHead: true,
          branchHeaderTitle: 'أعقب سليمان بن مصطفى',
          children: [
            {
              id: 'node-b2-c1-1',
              name: 'عثمان',
              fullName: 'عثمان بن سليمان بن مصطفى',
              generation: 4,
              parentId: 'node-b2-c1',
              children: [
                {
                  id: 'node-b2-c1-1-1',
                  name: 'مصطفى',
                  fullName: 'مصطفى بن عثمان بن سليمان بن مصطفى',
                  generation: 5,
                  parentId: 'node-b2-c1-1',
                  children: []
                },
                {
                  id: 'node-b2-c1-1-2',
                  name: 'سليمان',
                  fullName: 'سليمان بن عثمان بن سليمان بن مصطفى',
                  generation: 5,
                  parentId: 'node-b2-c1-1',
                  isMartyr: true,
                  notes: 'شهيد.',
                  children: []
                }
              ]
            },
            {
              id: 'node-b2-c1-2',
              name: 'صالح',
              fullName: 'صالح بن سليمان بن مصطفى',
              generation: 4,
              parentId: 'node-b2-c1',
              noOffspring: true,
              notes: 'لم يعقب.',
              children: []
            }
          ]
        },
        {
          id: 'node-b2-c2',
          name: 'عبد الرحمن',
          fullName: 'عبد الرحمن بن مصطفى بن علي',
          generation: 3,
          parentId: 'node-b2-head',
          isMartyr: true,
          notes: 'شهيد - استشهد في حماية القافلة.',
          children: [
            {
              id: 'node-b2-c2-1',
              name: 'عبد الرحيم',
              fullName: 'عبد الرحيم بن عبد الرحمن الشهيد بن مصطفى',
              generation: 4,
              parentId: 'node-b2-c2',
              children: [
                {
                  id: 'node-b2-c2-1-1',
                  name: 'عبد الرحمن',
                  fullName: 'عبد الرحمن بن عبد الرحيم بن عبد الرحمن الشهيد',
                  generation: 5,
                  parentId: 'node-b2-c2-1',
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: 'node-b2-c3',
          name: 'ياسين',
          fullName: 'ياسين بن مصطفى بن علي',
          generation: 3,
          parentId: 'node-b2-head',
          noOffspring: true,
          notes: 'لم يعقب.',
          children: []
        }
      ]
    },
    {
      id: 'node-b3-head',
      name: 'السيد قاسم',
      fullName: 'السيد قاسم بن علي بن الحسن',
      title: 'رأس فرع آل قاسم',
      isBranchHead: true,
      branchHeaderTitle: 'أعقب السيد قاسم (فرع آل قاسم)',
      generation: 2,
      parentId: 'node-root-1',
      notes: 'تولى نظارة الأوقاف وله عقب مشهور.',
      children: [
        {
          id: 'node-b3-c1',
          name: 'محمد',
          fullName: 'محمد بن قاسم بن علي',
          generation: 3,
          parentId: 'node-b3-head',
          children: [
            {
              id: 'node-b3-c1-1',
              name: 'قاسم',
              fullName: 'قاسم بن محمد بن قاسم بن علي',
              generation: 4,
              parentId: 'node-b3-c1',
              children: [
                {
                  id: 'node-b3-c1-1-1',
                  name: 'طارق',
                  fullName: 'طارق بن قاسم بن محمد بن قاسم',
                  generation: 5,
                  parentId: 'node-b3-c1-1',
                  isMartyr: true,
                  notes: 'شهيد.',
                  children: []
                },
                {
                  id: 'node-b3-c1-1-2',
                  name: 'زياد',
                  fullName: 'زياد بن قاسم بن محمد بن قاسم',
                  generation: 5,
                  parentId: 'node-b3-c1-1',
                  children: []
                }
              ]
            },
            {
              id: 'node-b3-c1-2',
              name: 'بلال',
              fullName: 'بلال بن محمد بن قاسم بن علي',
              generation: 4,
              parentId: 'node-b3-c1',
              noOffspring: true,
              notes: 'لم يعقب.',
              children: []
            }
          ]
        },
        {
          id: 'node-b3-c2',
          name: 'حمزة',
          fullName: 'حمزة بن قاسم بن علي',
          generation: 3,
          parentId: 'node-b3-head',
          hasOffspringNote: true,
          notes: 'أعقب بمصر والقاهرة وتفرعت منه أسر متصلة السند.',
          children: []
        }
      ]
    },
    {
      id: 'node-b4-head',
      name: 'السيد حمزة (الأكبر)',
      fullName: 'السيد حمزة بن علي بن الحسن',
      generation: 2,
      parentId: 'node-root-1',
      noOffspring: true,
      notes: 'لم يعقب - توفي في سن مبكرة.',
      children: []
    }
  ]
};

export const defaultDocumentation: TreeDocumentation = {
  introduction: {
    title: 'المقدمة التاريخية للمشجر النسَبي الشريف',
    subtitle: 'الضوابط التوثيقية والأصول المعتمدة في تدوين سلالة الأسرة',
    text: 'الحمد لله الذي جعل الأنساب صلةً بين العباد، وحفظ بها مآثر الآباء والأجداد، والصلاة والسلام على نبي الهدى محمد وآله الأطهار وصحبه الأخيار. أما بعد؛ فهذا مشجر نسبي وثائقي تاريخي جامع، تم تحريره وضبطه وفق أدق مناهج علم الأنساب والتحقيق التراثي الرصين، مع الالتزام التام بقواعد الأمانة العلمية الصارمة، والامتناع التام عن إلحاق من ليس بنسب، أو إسقاط من ثبتت صلته بالحجة القاطعة.',
    historicalContext: 'يعود أصل هذه الشجرة المباركة إلى الجد الجامع، وقد استقرت فروعها عبر القرون في شتى الحواضر الإسلامية، واشتغلت رجالاتها بالعلم والقضاء والتجارة والجهاد في سبيل إعلاء راية الحق. وتبرز في هذا السجل أعلام شهداء قدموا أرواحهم فداءً للأوطان، كما حُفظت بدقة حالات من انقطع عقبهم صيانةً للتسلسل الجيني والتاريخي من أي خلط أو انتحال.',
    methodology: 'اعتمد المشجر منهج التحقيق المقارن بين الوثائق الرسمية، وسجلات المحاكم الشرعية، وحجج الوقف المحفوظة، مع مضاهاة المشجرات المخطوطة القديمة والمرويات المتواترة جيلاً بعد جيل. ولم يُعتمد أي اسم إلا بعد تثبيته بسند وثائقي قطعي.',
    preservationNote: 'تم تطبيق قاعدة "الصفر تخمين" (Zero-Hallucination) بحيث تظل الأسماء التي لم تُفصل ذريتها موسومة بـ "أعقب" دون اختلاق أفرع وهمية، والأسماء المقطوعة موسومة بـ "لم يعقب" دون مد خطوط انحدار افتراضية.'
  },
  objectives: {
    title: 'أهداف توثيق وحفظ المشجر النسبي',
    subtitle: 'الغاية السامية من وراء جمع وتصنيف وتأريخ هذه السلالة',
    items: [
      {
        id: 'obj-1',
        title: 'صيانة النَّسَب من التحريف والاندثار',
        description: 'حفظ أسماء الآباء والأجداد في سجل رقمي وتاريخي محكم يمنع تداخل الفروع أو ضياع التوثيق عبر تعاقب الأجيال والقرون.',
        icon: 'ShieldCheck'
      },
      {
        id: 'obj-2',
        title: 'تخليد وتكريم ذكرى الشهداء الأبرار',
        description: 'إبراز مواضع الشهادة والتضحية في الشجرة بلون قرمزي مميز، وتدوين بطولاتهم وتواريخ استشهادهم لتكون منارة إلهام للأجيال القادمة.',
        icon: 'Award'
      },
      {
        id: 'obj-3',
        title: 'توثيق الفروع بدقة ومنع اللبس بين المتشابهات',
        description: 'فرز الأسماء المتطابقة عبر أجيال مختلفة (مثل تكرار اسم محمد، علي، حسن) وإبراز سلسلة النسب الكاملة لكل فرد لمنع الخلط بين الفروع الموازية.',
        icon: 'GitCompare'
      },
      {
        id: 'obj-4',
        title: 'صلة الرحم والترابط الأسري العابر للأقطار',
        description: 'تمكين أفراد العائلة المنتشرين في مختلف البلدان من استكشاف جذورهم المشتركة، وتتبع مسار أجدادهم حتى الجد الجامع.',
        icon: 'Users'
      },
      {
        id: 'obj-5',
        title: 'ربط السلالة بالأصول والوثائق والمخطوطات',
        description: 'توفير مرجع علمي ومصدر أكاديمي رصين يدعم كل فرع بحجة الوقف والسجل التاريخي المؤيد له.',
        icon: 'FileText'
      }
    ]
  },
  sources: [
    {
      id: 'src-1',
      title: 'حجة إثبات النسب والوقفية الكبرى',
      type: 'deed',
      authorOrCustodian: 'محكمة الباب العالي الشرعية - القاضي السيد عبد الرزاق الحسيني',
      dateOrCentury: 'المحررة في ربيع الأول عام 1245هـ (الموافق 1829م)',
      archiveLocation: 'دار الوثائق القومية - السجل رقم 342، صفحة 78',
      description: 'حجة شرعية أصلية بخط النسخ العثماني المزين بالذهب، تثبت ذرية الجد الجامع السيد علي وتحدد مصارف وقفية البساتين والديار.',
      verificationStatus: 'سجل وقفي رسمي'
    },
    {
      id: 'src-2',
      title: 'مخطوطة "جامع الدرر في أنساب السادة الغُرر"',
      type: 'manuscript',
      authorOrCustodian: 'النسابة المؤرخ الشيخ أحمد بن محمد الحسيني',
      dateOrCentury: 'القرن الثالث عشر الهجري (حوالي 1280هـ)',
      archiveLocation: 'مكتبة المخطوطات الأهلية - قسم الأنساب، رقم الحفظ 1044',
      description: 'مخطوط فريد يشتمل على جداول تشجيرية مرسومة يدوياً تتضمن تفريع الفروع الأربعة الكبرى مع تمييز الشهداء والمنقطعين.',
      verificationStatus: 'مخطوط أصلي'
    },
    {
      id: 'src-3',
      title: 'سجلات المحاكم الشرعية وسجلات قيد المواليد والوفيات العثمانية',
      type: 'registry',
      authorOrCustodian: 'نظارة الأوقاف وسجلات المحاكم الشرعية العتيقة',
      dateOrCentury: 'الفترة الممتدة بين 1850م - 1918م',
      archiveLocation: 'أرشيف رئاسة الوزراء العثمانية (BOA) - إسطنبول',
      description: 'دفاتر حصر التركات والقسامات الشرعية التي وثقت حالات "لم يعقب" وحصر الإرث للشهداء بدقة متناهية.',
      verificationStatus: 'محقق وموثق'
    },
    {
      id: 'src-4',
      title: 'المشجر النسبي المحفوظ لدى عمادة الأسرة',
      type: 'oral_archive',
      authorOrCustodian: 'توارثته عمادة الأسرة وصدق عليه نقباء الأشراف',
      dateOrCentury: 'تحديث مستمر ومصادق عليه عام 1390هـ',
      archiveLocation: 'خزانة الوثائق الخاصة بالأسرة',
      description: 'نسخة جلدية مشجرة تحتوي على أختام وتواقيع أعيان وعلماء كل عصر ومصادقة على صحة الرواية التواترية.',
      verificationStatus: 'شهادة تواتر'
    }
  ]
};
