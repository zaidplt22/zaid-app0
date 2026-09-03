export interface CodedEntry {
  code: string;
  name: string;
  raw?: string;
  isMartyr?: boolean;
  noOffspring?: boolean;
  hasDaughters?: boolean;
  notes?: string | null;
}

export interface CodedSection {
  id: string;
  mainBranch: string;
  sectionTitle: string;
  parentCode: string;
  parentName: string;
  entries: CodedEntry[];
}

export const parsedCodedSections: CodedSection[] = [
  {
    "id": "sec-1",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "31/1",
        "name": "محسن",
        "raw": "محسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "31/2",
        "name": "فاضل",
        "raw": "فاضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "31/3",
        "name": "رضوان",
        "raw": "رضوان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "31/4",
        "name": "عمر",
        "raw": "عمر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "31/5",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "31/1",
        "name": "محسن بن أحمد الجنيد بن محمد جمال الدين بن عبد الرحمن بن أحمد بن عبد الله الحضرمي",
        "raw": "محسن بن أحمد الجنيد بن محمد جمال الدين بن عبد الرحمن بن أحمد بن عبد الله الحضرمي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "32/1",
        "name": "عبَّاد",
        "raw": "عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "32/2",
        "name": "عطاء",
        "raw": "عطاء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "32/1",
        "name": "عبَّاد بن محسن بن أحمد الجنيد بن محمد جمال الدين",
        "raw": "عبَّاد بن محسن بن أحمد الجنيد بن محمد جمال الدين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "33/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "33/2",
        "name": "حسن",
        "raw": "حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "33/3",
        "name": "جيلان",
        "raw": "جيلان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-2",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "40/1",
        "name": "محمد بن ناجي بن حسن بن عثمان بن سعيد بن عبد الله",
        "raw": "محمد بن ناجي بن حسن بن عثمان بن سعيد بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "جميل",
        "raw": "جميل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "عبد الوهاب",
        "raw": "عبد الوهاب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/6",
        "name": "فهد",
        "raw": "فهد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/7",
        "name": "شكري",
        "raw": "شكري",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/8",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/9",
        "name": "بلال",
        "raw": "بلال",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد بن محمد بن ناجي",
        "raw": "محمد بن محمد بن ناجي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "عصام",
        "raw": "عصام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "عدنان",
        "raw": "عدنان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "يوسف",
        "raw": "يوسف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/4",
        "name": "رضوان",
        "raw": "رضوان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/5",
        "name": "صدام",
        "raw": "صدام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/6",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/7",
        "name": "أسامة",
        "raw": "أسامة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/8",
        "name": "زكريا",
        "raw": "زكريا",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "43/9",
        "name": "أنس",
        "raw": "أنس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "أحمد بن محمد بن ناجي",
        "raw": "أحمد بن محمد بن ناجي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "مطهر",
        "raw": "مطهر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "مرتضى",
        "raw": "مرتضى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "جميل بن محمد بن ناجي",
        "raw": "جميل بن محمد بن ناجي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "مراد",
        "raw": "مراد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "جمال",
        "raw": "جمال",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "عبد الوهاب بن محمد بن ناجي بن حسن",
        "raw": "عبد الوهاب بن محمد بن ناجي بن حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "عمرو",
        "raw": "عمرو",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "عمار",
        "raw": "عمار",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/4",
        "name": "عامر",
        "raw": "عامر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "عبد الرحمن بن محمد بن ناجي بن حسن",
        "raw": "عبد الرحمن بن محمد بن ناجي بن حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/6",
        "name": "فهد بن محمد بن ناجي بن حسن",
        "raw": "فهد بن محمد بن ناجي بن حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "مهند",
        "raw": "مهند",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد الله بن ناجي بن حسن بن عثمان بن سعيد بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "عبد الله بن ناجي بن حسن بن عثمان بن سعيد بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "نعمان",
        "raw": "نعمان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "نعمان بن عبد الله بن ناجي بن حسن",
        "raw": "نعمان بن عبد الله بن ناجي بن حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "حاشد",
        "raw": "حاشد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "أربد",
        "raw": "أربد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "عبَّاد",
        "raw": "عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "علي بن عبد الله بن ناجي بن حسن",
        "raw": "علي بن عبد الله بن ناجي بن حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "محمد بن حسن بن عثمان بن سعيد بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "محمد بن حسن بن عثمان بن سعيد بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "عثمان بن حسن بن عثمان بن سعيد بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "عثمان بن حسن بن عثمان بن سعيد بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد القوي",
        "raw": "عبد القوي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد السلام",
        "raw": "عبد السلام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عبد الرؤوف",
        "raw": "عبد الرؤوف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد القوي بن عثمان  بن حسن",
        "raw": "عبد القوي بن عثمان  بن حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "أحمد بن عبد القوي بن عثمان  بن حسن",
        "raw": "أحمد بن عبد القوي بن عثمان  بن حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "مازن",
        "raw": "مازن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "محمد بن عبد القوي بن عثمان بن حسن",
        "raw": "محمد بن عبد القوي بن عثمان بن حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "إياد",
        "raw": "إياد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "عصام",
        "raw": "عصام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/4",
        "name": "عدنان",
        "raw": "عدنان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد السلام بن عثمان بن حسن",
        "raw": "عبد السلام بن عثمان بن حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عبد الرؤوف بن عثمان بن حسن",
        "raw": "عبد الرؤوف بن عثمان بن حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "عبد الجليل بن عبد الوهاب بن عبد الواحد بن قحطان بن ناجي بن عبد الله بن محمد بن عبد الله بن عبَّاد... وأعقب:",
        "raw": "عبد الجليل بن عبد الوهاب بن عبد الواحد بن قحطان بن ناجي بن عبد الله بن محمد بن عبد الله بن عبَّاد... وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "يحي",
        "raw": "يحي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "ابراهيم",
        "raw": "ابراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "يحي بن عبد الجليل بن عبد الوهاب..وأعقب:",
        "raw": "يحي بن عبد الجليل بن عبد الوهاب..وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد العزيز",
        "raw": "عبد العزيز",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "عبد الوهاب",
        "raw": "عبد الوهاب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "إبراهيم بن عبد الجليل بن عبد الوهاب..",
        "raw": "إبراهيم بن عبد الجليل بن عبد الوهاب..",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "حسن بن عبد الملك بن سعيد بن قحطان بن ناجي بن عبد الله بن محمد بن عبد الله بن عبَّاد..",
        "raw": "حسن بن عبد الملك بن سعيد بن قحطان بن ناجي بن عبد الله بن محمد بن عبد الله بن عبَّاد..",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد الوهاب",
        "raw": "عبد الوهاب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "محمود",
        "raw": "محمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الله بن حسن بن عبد الملك.. وأعقب:",
        "raw": "عبد الله بن حسن بن عبد الملك.. وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "أحمد حسن بن عبد الملك",
        "raw": "أحمد حسن بن عبد الملك",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "36/2",
        "name": "منصر  اعقب بنات",
        "raw": "منصر  اعقب بنات",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": true,
        "notes": "أعقب بنات"
      },
      {
        "code": "36/3",
        "name": "محمد  لم يعقب",
        "raw": "محمد  لم يعقب",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "35/3",
        "name": "حيدر لم يعقب",
        "raw": "حيدر لم يعقب",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "39/1",
        "name": "محمد بن عبد الغني بن محمد بن عبد اللطيف بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد...",
        "raw": "محمد بن عبد الغني بن محمد بن عبد اللطيف بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد...",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "هاشم بن عبد الخالق بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد..",
        "raw": "هاشم بن عبد الخالق بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد..",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبد العزيز بن عبد الخالق بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عباد",
        "raw": "عبد العزيز بن عبد الخالق بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عباد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "عبد السلام بن عبد الخالق بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "عبد السلام بن عبد الخالق بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/2",
        "name": "عبد الباري بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عباد",
        "raw": "عبد الباري بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عباد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "يحي",
        "raw": "يحي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/4",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/5",
        "name": "عدنان",
        "raw": "عدنان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/6",
        "name": "عمر",
        "raw": "عمر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/7",
        "name": "حسين",
        "raw": "حسين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "أحمد بن عبد الباري بن عبد الوهاب بن عيدروس ....  وأعقب:",
        "raw": "أحمد بن عبد الباري بن عبد الوهاب بن عيدروس ....  وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "يحي",
        "raw": "يحي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "محمد بن عبد الباري بن عبد الوهاب بن عيدروس... وأعقب :",
        "raw": "محمد بن عبد الباري بن عبد الوهاب بن عيدروس... وأعقب :",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "الحمزة",
        "raw": "الحمزة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/4",
        "name": "مصطفى بن عبد الباري بن عبد الوهاب بن عيدروس...  وأعقب :",
        "raw": "مصطفى بن عبد الباري بن عبد الوهاب بن عيدروس...  وأعقب :",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "مهند",
        "raw": "مهند",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/5",
        "name": "عدنان بن عبد الباري بن عبد الوهاب بن عيدروس... وأعقب:",
        "raw": "عدنان بن عبد الباري بن عبد الوهاب بن عيدروس... وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/3",
        "name": "محمد بن عبد الوهاب بن عيدروس..",
        "raw": "محمد بن عبد الوهاب بن عيدروس..",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد الصمد",
        "raw": "عبد الصمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد الصمد بن محمد بن عبد الوهاب بن عيدروس... وأعقب :",
        "raw": "عبد الصمد بن محمد بن عبد الوهاب بن عيدروس... وأعقب :",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "فاروق",
        "raw": "فاروق",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "36/1",
        "name": "سعيد بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "سعيد بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/2",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/3",
        "name": "هاشم",
        "raw": "هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/1",
        "name": "عبد الله بن سعيد بن عيدروس...",
        "raw": "عبد الله بن سعيد بن عيدروس...",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد الرحيم",
        "raw": "عبد الرحيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد الرحيم بن عبد الله بن سعيد بن عيدروس... وأعقب :",
        "raw": "عبد الرحيم بن عبد الله بن سعيد بن عيدروس... وأعقب :",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/2",
        "name": "إبراهيم بن سعيد بن عيدروس...",
        "raw": "إبراهيم بن سعيد بن عيدروس...",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد الله بن إبراهيم بن سعيد بن عيدروس... وأعقب:",
        "raw": "عبد الله بن إبراهيم بن سعيد بن عيدروس... وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "عيدروس",
        "raw": "عيدروس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "مراد",
        "raw": "مراد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/3",
        "name": "هاشم  بن سعيد بن عيدروس...",
        "raw": "هاشم  بن سعيد بن عيدروس...",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد السلام",
        "raw": "عبد السلام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد السلام بن هاشم  بن سعيد بن عيدروس",
        "raw": "عبد السلام بن هاشم  بن سعيد بن عيدروس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "زكريا",
        "raw": "زكريا",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "منير",
        "raw": "منير",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/5",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-3",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "38/1",
        "name": "صالح",
        "raw": "صالح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبد الجليل",
        "raw": "عبد الجليل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "إسماعيل",
        "raw": "إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/4",
        "name": "عبد الحق",
        "raw": "عبد الحق",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "صالح بن هاشم بن محمد بن علي....",
        "raw": "صالح بن هاشم بن محمد بن علي....",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد",
        "raw": "محمد لا شيء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "سعيد",
        "raw": "سعيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "عبد الباسط",
        "raw": "عبد الباسط",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/5",
        "name": "عبد الصمد",
        "raw": "عبد الصمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/6",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "أمين بن صالح بن هاشم... وأعقب:",
        "raw": "أمين بن صالح بن هاشم... وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "مهدي",
        "raw": "مهدي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "ماجد",
        "raw": "ماجد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "مهدي بن أمين بن صالح بن هاشم...  وأعقب:",
        "raw": "مهدي بن أمين بن صالح بن هاشم...  وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد بن أمين بن صالح بن هاشم",
        "raw": "محمد بن أمين بن صالح بن هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "ماجد بن أمين بن صالح بن هاشم",
        "raw": "ماجد بن أمين بن صالح بن هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "سعيد بن صالح بن هاشم",
        "raw": "سعيد بن صالح بن هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "هائل",
        "raw": "هائل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "هاشم",
        "raw": "هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد بن سعيد بن صالح بن هاشم",
        "raw": "محمد بن سعيد بن صالح بن هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "هائل بن سعيد بن صالح بن هاشم",
        "raw": "هائل بن سعيد بن صالح بن هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "هاشم  بن سعيد بن صالح بن هاشم",
        "raw": "هاشم  بن سعيد بن صالح بن هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "عبد الباسط  بن صالح بن هاشم...",
        "raw": "عبد الباسط  بن صالح بن هاشم...",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الحكيم",
        "raw": "عبد الحكيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/5",
        "name": "عبد الصمد بن صالح بن هاشم....",
        "raw": "عبد الصمد بن صالح بن هاشم....",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "مروان",
        "raw": "مروان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "أسامة",
        "raw": "أسامة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "مروان بن عبد الصمد بن صالح بن هاشم...",
        "raw": "مروان بن عبد الصمد بن صالح بن هاشم...",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "اسامة بن عبد الصمد بن صالح بن هاشم....",
        "raw": "اسامة بن عبد الصمد بن صالح بن هاشم....",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/6",
        "name": "عبد الرحمن بن صالح بن هاشم",
        "raw": "عبد الرحمن بن صالح بن هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبد الجليل بن هاشم بن محمد بن علي",
        "raw": "عبد الجليل بن هاشم بن محمد بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "عبد العزيز",
        "raw": "عبد العزيز",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "معمر",
        "raw": "معمر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/5",
        "name": "محمود",
        "raw": "محمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "عبد العزيز بن عبد الجليل بن هاشم",
        "raw": "عبد العزيز بن عبد الجليل بن هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "هيثم",
        "raw": "هيثم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "قصي",
        "raw": "قصي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "عبد الله بن عبد الجليل بن هاشم بن محمد بن علي...  وأعقب :",
        "raw": "عبد الله بن عبد الجليل بن هاشم بن محمد بن علي...  وأعقب :",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "فواز",
        "raw": "فواز",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "محمد بن عبد الجليل بن هاشم بن محمد بن علي... وأعقب:",
        "raw": "محمد بن عبد الجليل بن هاشم بن محمد بن علي... وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "مروان",
        "raw": "مروان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "إسماعيل بن هاشم بن محمد بن علي...",
        "raw": "إسماعيل بن هاشم بن محمد بن علي...",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "جميل",
        "raw": "جميل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "عبد الخالق",
        "raw": "عبد الخالق",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/5",
        "name": "هاشم",
        "raw": "هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/6",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "مصطفى بن إسماعيل بن هاشم",
        "raw": "مصطفى بن إسماعيل بن هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "جميل بن إسماعيل بن هاشم",
        "raw": "جميل بن إسماعيل بن هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عدي",
        "raw": "عدي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "قصي",
        "raw": "قصي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبد الحق بن هاشم بن محمد بن علي...",
        "raw": "عبد الحق بن هاشم بن محمد بن علي...",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "عبد الحكيم",
        "raw": "عبد الحكيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد بن عبد الحق بن هاشم",
        "raw": "محمد بن عبد الحق بن هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "علاء",
        "raw": "علاء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "ماجد",
        "raw": "ماجد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "أمجد",
        "raw": "أمجد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "أحمد  بن عبد الحق بن هاشم",
        "raw": "أحمد  بن عبد الحق بن هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "عبد الحكيم بن عبد الحق بن هاشم",
        "raw": "عبد الحكيم بن عبد الحق بن هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-4",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "38/1",
        "name": "عبد الكريم",
        "raw": "عبد الكريم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبد العزيز",
        "raw": "عبد العزيز",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد الكريم بن غالب بن محمد بن علي",
        "raw": "عبد الكريم بن غالب بن محمد بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "محمود",
        "raw": "محمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "عبد الباري",
        "raw": "عبد الباري",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/5",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/6",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/7",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "إبراهيم بن عبد الكريم بن غالب بن محمد بن علي",
        "raw": "إبراهيم بن عبد الكريم بن غالب بن محمد بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الفتاح",
        "raw": "عبد الفتاح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "علي بن عبد الكريم بن غالب بن محمد بن علي",
        "raw": "علي بن عبد الكريم بن غالب بن محمد بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "محمود بن عبد الكريم بن غالب بن محمد بن علي",
        "raw": "محمود بن عبد الكريم بن غالب بن محمد بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "فكري",
        "raw": "فكري",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "شكري",
        "raw": "شكري",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "فهمي",
        "raw": "فهمي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "عبد الباري بن عبد الكريم بن غالب بن محمد بن علي",
        "raw": "عبد الباري بن عبد الكريم بن غالب بن محمد بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد العزيز",
        "raw": "عبد العزيز",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمود",
        "raw": "محمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "مختار",
        "raw": "مختار",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "رمزي",
        "raw": "رمزي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/5",
        "name": "عبد الله بن عبد الكريم بن غالب بن محمد بن علي",
        "raw": "عبد الله بن عبد الكريم بن غالب بن محمد بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/6",
        "name": "عبد الرحمن بن عبد الكريم بن غالب بن محمد بن علي",
        "raw": "عبد الرحمن بن عبد الكريم بن غالب بن محمد بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "فؤاد",
        "raw": "فؤاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/7",
        "name": "محمد بن عبد الكريم بن غالب بن محمد بن علي",
        "raw": "محمد بن عبد الكريم بن غالب بن محمد بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبد العزيز بن غالب بن محمد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "عبد العزيز بن غالب بن محمد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد بن عبد العزيز بن غالب بن محمد بن علي",
        "raw": "محمد بن عبد العزيز بن غالب بن محمد بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "طاهر",
        "raw": "طاهر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الرحمن بن محمد بن عبد العزيز بن غالب بن محمد بن علي",
        "raw": "عبد الرحمن بن محمد بن عبد العزيز بن غالب بن محمد بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "أيمن",
        "raw": "أيمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "مالك",
        "raw": "مالك",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد الله بن محمد بن عبد العزيز بن غالب بن محمد بن علي",
        "raw": "عبد الله بن محمد بن عبد العزيز بن غالب بن محمد بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/3",
        "name": "قاسم بن محمد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد...",
        "raw": "قاسم بن محمد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد...",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "شرف",
        "raw": "شرف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "شرف بن قاسم بن محمد بن علي",
        "raw": "شرف بن قاسم بن محمد بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "عبد الباقي",
        "raw": "عبد الباقي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد بن شرف بن قاسم بن محمد بن علي",
        "raw": "محمد بن شرف بن قاسم بن محمد بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الهادي",
        "raw": "عبد الهادي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "أنور",
        "raw": "أنور",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "عبد الباقي بن شرف بن قاسم بن محمد بن علي",
        "raw": "عبد الباقي بن شرف بن قاسم بن محمد بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "علي بن إبراهيم بن هائل بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "علي بن إبراهيم بن هائل بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "جميل",
        "raw": "جميل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الله بن علي بن إبراهيم بن هائل بن حميد... وأعقب:",
        "raw": "عبد الله بن علي بن إبراهيم بن هائل بن حميد... وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "محمد بن إبراهيم بن هائل بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "محمد بن إبراهيم بن هائل بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "خالد",
        "raw": "خالد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد الناصر",
        "raw": "عبد الناصر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "مؤيد",
        "raw": "مؤيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "مختار",
        "raw": "مختار",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "مرتضى",
        "raw": "مرتضى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "خالد بن محمد بن إبراهيم بن هائل بن حميد",
        "raw": "خالد بن محمد بن إبراهيم بن هائل بن حميد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد الملك بن عبد الرحمن بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "عبد الملك بن عبد الرحمن بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "علي بن عبد الملك بن عبد الرحمن بن حميد",
        "raw": "علي بن عبد الملك بن عبد الرحمن بن حميد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "حسين",
        "raw": "حسين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "زيد",
        "raw": "زيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "جلال",
        "raw": "جلال",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبد الرقيب بن عبد الرحمن بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "عبد الرقيب بن عبد الرحمن بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "محفوظ",
        "raw": "محفوظ",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "عبد الله  بن عبد الرقيب بن عبد الرحمن بن حميد",
        "raw": "عبد الله  بن عبد الرقيب بن عبد الرحمن بن حميد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "فهد",
        "raw": "فهد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "مؤيد",
        "raw": "مؤيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "مرتضى",
        "raw": "مرتضى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "محفوظ بن عبد الرقيب بن عبد الرحمن بن حميد",
        "raw": "محفوظ بن عبد الرقيب بن عبد الرحمن بن حميد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "هزاع بن عبد الرحمن بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "هزاع بن عبد الرحمن بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "حمود",
        "raw": "حمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "حمود  بن هزاع بن عبد الرحمن بن حميد",
        "raw": "حمود  بن هزاع بن عبد الرحمن بن حميد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "بسام",
        "raw": "بسام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "مروان",
        "raw": "مروان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "إبراهيم بن هائل بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "إبراهيم بن هائل بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-5",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب سلطان بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "parentCode": "",
    "parentName": "أعقاب سلطان بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "entries": [
      {
        "code": "37/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/2",
        "name": "سيف",
        "raw": "سيف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/3",
        "name": "غالب",
        "raw": "غالب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/1",
        "name": "عبد الله بن سلطان بن علي",
        "raw": "عبد الله بن سلطان بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "ناجي ليس له عقب",
        "raw": "ناجي ليس له عقب",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "37/2",
        "name": "سيف بن سلطان بن علي",
        "raw": "سيف بن سلطان بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبده",
        "raw": "عبده",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "علي بن سيف بن سلطان بن علي",
        "raw": "علي بن سيف بن سلطان بن علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "منصور",
        "raw": "منصور",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "سعيد",
        "raw": "سعيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/5",
        "name": "عبد العزيز",
        "raw": "عبد العزيز",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/6",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/7",
        "name": "محمود",
        "raw": "محمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/8",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد  بن علي بن سيف بن سلطان",
        "raw": "محمد  بن علي بن سيف بن سلطان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد العزيز",
        "raw": "عبد العزيز",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عبد الإله",
        "raw": "عبد الإله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "هاشم",
        "raw": "هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "محمود",
        "raw": "محمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "منصور بن علي بن سيف بن سلطان (أعقب بنات)",
        "raw": "منصور بن علي بن سيف بن سلطان (أعقب بنات)",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": true,
        "notes": "أعقب بنات"
      },
      {
        "code": "39/3",
        "name": "أحمد بن علي بن سيف بن سلطان",
        "raw": "أحمد بن علي بن سيف بن سلطان (لم يعقب)",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "39/4",
        "name": "سعيد بن علي بن سيف بن سلطان",
        "raw": "سعيد بن علي بن سيف بن سلطان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الصمد",
        "raw": "عبد الصمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمود",
        "raw": "محمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "زايد",
        "raw": "زايد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/5",
        "name": "عبد العزيز بن علي بن سيف بن سلطان",
        "raw": "عبد العزيز بن علي بن سيف بن سلطان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "فواز",
        "raw": "فواز",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/6",
        "name": "أمين  بن علي بن سيف بن سلطان",
        "raw": "أمين  بن علي بن سيف بن سلطان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "مهدي",
        "raw": "مهدي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "محمود",
        "raw": "محمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/7",
        "name": "محمود بن علي بن سيف بن سلطان (أعقب بنات)",
        "raw": "محمود بن علي بن سيف بن سلطان (أعقب بنات)",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": true,
        "notes": "أعقب بنات"
      },
      {
        "code": "39/8",
        "name": "عبد الرحمن بن علي بن سيف بن سلطان",
        "raw": "عبد الرحمن بن علي بن سيف بن سلطان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمود",
        "raw": "محمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبد ه بن سيف بن سلطان",
        "raw": "عبد ه بن سيف بن سلطان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "يحي",
        "raw": "يحي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "يحي بن عبد ه بن سيف بن سلطان",
        "raw": "يحي بن عبد ه بن سيف بن سلطان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "أمين بن يحي بن عبد ه بن سيف بن سلطان..... وأعقب:",
        "raw": "أمين بن يحي بن عبد ه بن سيف بن سلطان..... وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "أحمد بن عبده بن سيف بن سلطان",
        "raw": "أحمد بن عبده بن سيف بن سلطان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "وليد",
        "raw": "وليد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "خليل",
        "raw": "خليل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "معاذ",
        "raw": "معاذ",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "مؤيد",
        "raw": "مؤيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "خليل بن أحمد بن عبده بن سيف بن سلطان",
        "raw": "خليل بن أحمد بن عبده بن سيف بن سلطان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "معاذ بن أحمد بن عبد ه بن سيف بن سلطان",
        "raw": "معاذ بن أحمد بن عبد ه بن سيف بن سلطان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/3",
        "name": "غالب بن سلطان بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "غالب بن سلطان بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد الغني",
        "raw": "عبد الغني",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبده",
        "raw": "عبده",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "حميد",
        "raw": "حميد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد الغني بن غالب بن  سلطان (أعقب بنات)",
        "raw": "عبد الغني بن غالب بن  سلطان (أعقب بنات)",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": true,
        "notes": "أعقب بنات"
      },
      {
        "code": "38/2",
        "name": "عبده بن غالب بن  سلطان (أعقب بنات)",
        "raw": "عبده بن غالب بن  سلطان (أعقب بنات)",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": true,
        "notes": "أعقب بنات"
      },
      {
        "code": "38/3",
        "name": "حميد بن غالب بن  سلطان بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "حميد بن غالب بن  سلطان بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "عبده",
        "raw": "عبده",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "أحمد بن حميد بن غالب بن  سلطان",
        "raw": "أحمد بن حميد بن غالب بن  سلطان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الرحمن بن احمد بن حميد بن غالب بن  سلطان",
        "raw": "عبد الرحمن بن احمد بن حميد بن غالب بن  سلطان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "مؤيد",
        "raw": "مؤيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "عبده بن حميد بن غالب بن  سلطان (أعقب بنات)",
        "raw": "عبده بن حميد بن غالب بن  سلطان (أعقب بنات)",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": true,
        "notes": "أعقب بنات"
      },
      {
        "code": "39/1",
        "name": "عبد الوهاب بن هزاع  بن أحمد  بن منصور بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "عبد الوهاب بن هزاع  بن أحمد  بن منصور بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "علي بن هزاع  بن أحمد  بن منصور بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "علي بن هزاع  بن أحمد  بن منصور بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد بن عبد الحميد بن  سعيد بن عبد الملك بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "محمد بن عبد الحميد بن  سعيد بن عبد الملك بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمود",
        "raw": "محمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الله بن محمد بن عبد الحميد بن  سعيد بن عبد الملك",
        "raw": "عبد الله بن محمد بن عبد الحميد بن  سعيد بن عبد الملك",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "مراد",
        "raw": "مراد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "عبد السلام",
        "raw": "عبد السلام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمود بن محمد بن عبد الحميد بن  سعيد بن عبد الملك",
        "raw": "محمود بن محمد بن عبد الحميد بن  سعيد بن عبد الملك",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "محمد بن محمد بن عبد الحميد بن سعيد بن عبد الملك ..... وأعقب:",
        "raw": "محمد بن محمد بن عبد الحميد بن سعيد بن عبد الملك ..... وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "أيمن",
        "raw": "أيمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "عبد الرحمن بن محمد بن عبد الحميد بن  سعيد بن عبد الملك",
        "raw": "عبد الرحمن بن محمد بن عبد الحميد بن  سعيد بن عبد الملك",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "منصور بن عبد الحميد بن  سعيد بن عبد الملك بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "raw": "منصور بن عبد الحميد بن  سعيد بن عبد الملك بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الباسط",
        "raw": "عبد الباسط",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد الحكيم",
        "raw": "عبد الحكيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الباسط  بن  منصور بن عبد الحميد بن  سعيد بن عبد الملك",
        "raw": "عبد الباسط  بن  منصور بن عبد الحميد بن  سعيد بن عبد الملك",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد الحكيم بن  منصور بن عبد الحميد بن  سعيد بن عبد الملك",
        "raw": "عبد الحكيم بن  منصور بن عبد الحميد بن  سعيد بن عبد الملك",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "أسامة",
        "raw": "أسامة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "36/6",
        "name": "منصور  بن علي بن عبد الله بن محمد بن عبد الله بن عباد",
        "raw": "منصور  بن علي بن عبد الله بن محمد بن عبد الله بن عباد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "36/7",
        "name": "عبد الملك  بن علي بن عبد الله بن محمد بن عبد الله بن عباد",
        "raw": "عبد الملك  بن علي بن عبد الله بن محمد بن عبد الله بن عباد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-6",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "37/1",
        "name": "منصور  بن علي بن غالب بن عبد القوي علي بن عبد الله بن حسن بن عبَّاد",
        "raw": "منصور  بن علي بن غالب بن عبد القوي علي بن عبد الله بن حسن بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عصام",
        "raw": "عصام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "36/1",
        "name": "محمد بن عبد الجبار  بن علي بن عبد الله بن حسن بن عبَّاد",
        "raw": "محمد بن عبد الجبار  بن علي بن عبد الله بن حسن بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/1",
        "name": "إسماعيل",
        "raw": "إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/2",
        "name": "غالب",
        "raw": "غالب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/3",
        "name": "سيف",
        "raw": "سيف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-7",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "38/1",
        "name": "أحمد بن محمد بن حيدر بن حسن بن علي  بن إسماعيل بن عبد الله بن عبَّاد",
        "raw": "أحمد بن محمد بن حيدر بن حسن بن علي  بن إسماعيل بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "حمود",
        "raw": "حمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "عبد الوهاب",
        "raw": "عبد الوهاب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "سعيد",
        "raw": "سعيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد بن احمد بن محمد بن حيدر",
        "raw": "محمد بن احمد بن محمد بن حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "خالد",
        "raw": "خالد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "حسين",
        "raw": "حسين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "معاذ",
        "raw": "معاذ",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "خالد بن محمد بن احمد بن محمد بن  حيدر",
        "raw": "خالد بن محمد بن احمد بن محمد بن  حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "حسين بن محمد بن أحمد بن محمد بن  حيدر",
        "raw": "حسين بن محمد بن أحمد بن محمد بن  حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "معاذ بن محمد بن احمد بن محمد بن  حيدر",
        "raw": "معاذ بن محمد بن احمد بن محمد بن  حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "حمود احمد بن محمد بن  حيدر",
        "raw": "حمود احمد بن محمد بن  حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد المولى",
        "raw": "عبد المولى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد الكافي",
        "raw": "عبد الكافي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "كمال",
        "raw": "كمال",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد المولى بن حمود احمد بن محمد بن  حيدر",
        "raw": "عبد المولى بن حمود احمد بن محمد بن  حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "عبد الوهاب احمد بن محمد بن  حيدر",
        "raw": "عبد الوهاب احمد بن محمد بن  حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عامر",
        "raw": "عامر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "علوان",
        "raw": "علوان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "علاء",
        "raw": "علاء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عامر بن عبد الوهاب احمد بن محمد بن  حيدر",
        "raw": "عامر بن عبد الوهاب احمد بن محمد بن  حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "حسين",
        "raw": "حسين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "سعيد احمد بن محمد بن  حيدر",
        "raw": "سعيد احمد بن محمد بن  حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "هيثم",
        "raw": "هيثم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "عبد الرحمن بن إسماعيل بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد",
        "raw": "عبد الرحمن بن إسماعيل بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد الملك",
        "raw": "عبد الملك",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "محمد بن إسماعيل بن عبد الله بن أحمد بن حسن بن علي  بن إسماعيل بن عبد الله بن عبَّاد",
        "raw": "محمد بن إسماعيل بن عبد الله بن أحمد بن حسن بن علي  بن إسماعيل بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "توفيق",
        "raw": "توفيق",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "محمود - متوفى",
        "raw": "محمود - متوفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "توفيق بن محمد بن إسماعيل",
        "raw": "توفيق بن محمد بن إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد الله بن محمد بن إسماعيل",
        "raw": "عبد الله بن محمد بن إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "مروان",
        "raw": "مروان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "محمود",
        "raw": "محمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "سعيد بن إسماعيل بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد",
        "raw": "سعيد بن إسماعيل بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محفوظ",
        "raw": "محفوظ",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "هاشم",
        "raw": "هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "جيلان",
        "raw": "جيلان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "عدنان",
        "raw": "عدنان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي  بن إسماعيل بن عبد الله بن عبَّاد",
        "raw": "أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي  بن إسماعيل بن عبد الله بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد السلام",
        "raw": "عبد السلام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "سعيد",
        "raw": "سعيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عبد العليم",
        "raw": "عبد العليم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "حميد",
        "raw": "حميد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد السلام بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
        "raw": "عبد السلام بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "رياض",
        "raw": "رياض",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "سمير",
        "raw": "سمير",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "سعيد بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
        "raw": "سعيد بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عبد العليم  بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي  بن إسماعيل بن عبد الله بن عباد",
        "raw": "عبد العليم  بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي  بن إسماعيل بن عبد الله بن عباد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "فارس",
        "raw": "فارس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "مروان",
        "raw": "مروان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "حميد بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي  بن إسماعيل بن عبد الله بن عباد",
        "raw": "حميد بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي  بن إسماعيل بن عبد الله بن عباد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "محمد بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي  بن إسماعيل بن عبد الله بن عباد",
        "raw": "محمد بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي  بن إسماعيل بن عبد الله بن عباد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "عبد الوهاب بن محمد بن عبد الله بن أحمد بن حسن بن علي  بن إسماعيل بن عبد الله بن عباد",
        "raw": "عبد الوهاب بن محمد بن عبد الله بن أحمد بن حسن بن علي  بن إسماعيل بن عبد الله بن عباد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "نبيل",
        "raw": "نبيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "مهيوب بن سلطان بن مهيوب بن عبادي بن علي بن إسماعيل بن عبد الله بن عباد",
        "raw": "مهيوب بن سلطان بن مهيوب بن عبادي بن علي بن إسماعيل بن عبد الله بن عباد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "يوسف",
        "raw": "يوسف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "حسين",
        "raw": "حسين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/5",
        "name": "سلطان",
        "raw": "سلطان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/6",
        "name": "حسن",
        "raw": "حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "يوسف بن مهيوب بن سلطان الجنيد",
        "raw": "يوسف بن مهيوب بن سلطان الجنيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "نبيل",
        "raw": "نبيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "نادر",
        "raw": "نادر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "نضال",
        "raw": "نضال",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "نزار",
        "raw": "نزار",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "ناصر",
        "raw": "ناصر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/6",
        "name": "نجيب",
        "raw": "نجيب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "نبيل بن يوسف بن مهيوب",
        "raw": "نبيل بن يوسف بن مهيوب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "نادر",
        "raw": "نادر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "تيسير",
        "raw": "تيسير",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "منذر",
        "raw": "منذر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "فجر",
        "raw": "فجر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "نادر بن يوسف بن مهيوب",
        "raw": "نادر بن يوسف بن مهيوب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "جعفر",
        "raw": "جعفر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "نصر",
        "raw": "نصر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "أواب",
        "raw": "أواب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "مآب",
        "raw": "مآب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "نضال بن يوسف بن مهيوب",
        "raw": "نضال بن يوسف بن مهيوب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "نادر بن نبيل بن يوسف بن مهيوب",
        "raw": "نادر بن نبيل بن يوسف بن مهيوب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "البراء",
        "raw": "البراء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "فجر",
        "raw": "فجر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "آسر",
        "raw": "آسر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "منذر بن نبيل بن يوسف بن مهيوب بن سلطان",
        "raw": "منذر بن نبيل بن يوسف بن مهيوب بن سلطان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "نبيل",
        "raw": "نبيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "زين الاسلام",
        "raw": "زين الاسلام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/4",
        "name": "أميرالدين",
        "raw": "أميرالدين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/2",
        "name": "عبد الرب بن مهيوب بن عبادي بن علي  بن إسماعيل بن عبد الله بن عباد",
        "raw": "عبد الرب بن مهيوب بن عبادي بن علي  بن إسماعيل بن عبد الله بن عباد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "سعيد",
        "raw": "سعيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "سعيد بن عبد الرب",
        "raw": "سعيد بن عبد الرب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-8",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "37/1",
        "name": "إسماعيل بن حسن بن إسماعيل بن  عباس بن علي  بن جيلان بن عبَّاد",
        "raw": "إسماعيل بن حسن بن إسماعيل بن  عباس بن علي  بن جيلان بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "محمد بن إسماعيل بن حسن بن إسماعيل",
        "raw": "محمد بن إسماعيل بن حسن بن إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "إسماعيل",
        "raw": "إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "سعيد",
        "raw": "سعيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "عبد الكريم",
        "raw": "عبد الكريم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "أحمد بن محمد بن إسماعيل بن حسن بن إسماعيل",
        "raw": "أحمد بن محمد بن إسماعيل بن حسن بن إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد بن أحمد بن  محمد بن إسماعيل",
        "raw": "محمد بن أحمد بن  محمد بن إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الخالق",
        "raw": "عبد الخالق",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "خليل",
        "raw": "خليل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "مراد",
        "raw": "مراد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "وليد",
        "raw": "وليد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الخالق  بن محمد بن أحمد بن  محمد بن إسماعيل",
        "raw": "عبد الخالق  بن محمد بن أحمد بن  محمد بن إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "علاء",
        "raw": "علاء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "مصطفى ( شهيد)",
        "raw": "مصطفى ( شهيد)",
        "isMartyr": true,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": "شهيد"
      },
      {
        "code": "42/3",
        "name": "زيد",
        "raw": "زيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "إسماعيل بن محمد بن إسماعيل بن حسن بن إسماعيل",
        "raw": "إسماعيل بن محمد بن إسماعيل بن حسن بن إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الرحمن بن  إسماعيل بن  محمد بن إسماعيل",
        "raw": "عبد الرحمن بن  إسماعيل بن  محمد بن إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "ماجد",
        "raw": "ماجد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "وليد",
        "raw": "وليد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد بن عبد الرحمن بن  إسماعيل",
        "raw": "محمد بن عبد الرحمن بن  إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "سعيد بن محمد بن إسماعيل بن حسن بن إسماعيل",
        "raw": "سعيد بن محمد بن إسماعيل بن حسن بن إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد الله",
        "raw": "عبد الله ( لم يعقب )",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "40/1",
        "name": "محمد بن سعيد  بن  محمد بن إسماعيل",
        "raw": "محمد بن سعيد  بن  محمد بن إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الرؤوف",
        "raw": "عبد الرؤوف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "سلطان",
        "raw": "سلطان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "وهيب",
        "raw": "وهيب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الرؤوف بن محمد بن سعيد  بن  محمد بن إسماعيل",
        "raw": "عبد الرؤوف بن محمد بن سعيد  بن  محمد بن إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "ذياب",
        "raw": "ذياب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "سلطان بن  محمد بن سعيد  بن  محمد بن إسماعيل",
        "raw": "سلطان بن  محمد بن سعيد  بن  محمد بن إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "زايد",
        "raw": "زايد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "عبد الكريم بن  محمد بن إسماعيل بن حسن بن إسماعيل",
        "raw": "عبد الكريم بن  محمد بن إسماعيل بن حسن بن إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "سعيد",
        "raw": "سعيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "هزاع  ( ولا عقب له )",
        "raw": "هزاع  ( ولا عقب له )",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "40/1",
        "name": "سعيد بن عبد الكريم بن  محمد بن إسماعيل",
        "raw": "سعيد بن عبد الكريم بن  محمد بن إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "فيصل",
        "raw": "فيصل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "قاسم",
        "raw": "قاسم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "عارف",
        "raw": "عارف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "سمير",
        "raw": "سمير",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/6",
        "name": "عبد الكافي",
        "raw": "عبد الكافي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/7",
        "name": "يوسف",
        "raw": "يوسف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/8",
        "name": "داؤود",
        "raw": "داؤود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "قاسم بن سعيد بن عبد الكريم بن محمد بن إسماعيل",
        "raw": "قاسم بن سعيد بن عبد الكريم بن محمد بن إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "مولاي علي",
        "raw": "مولاي علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "أحمد بن منصور بن حسن بن إسماعيل بن  عباس",
        "raw": "أحمد بن منصور بن حسن بن إسماعيل بن  عباس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "عبد الله بن أحمد بن منصور بن حسن بن إسماعيل بن عباس",
        "raw": "عبد الله بن أحمد بن منصور بن حسن بن إسماعيل بن عباس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "يوسف",
        "raw": "يوسف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "مؤيد",
        "raw": "مؤيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عمر",
        "raw": "عمر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبد الجليل بن أحمد بن منصور بن حسن بن إسماعيل بن عباس",
        "raw": "عبد الجليل بن أحمد بن منصور بن حسن بن إسماعيل بن عباس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "عبد الكريم",
        "raw": "عبد الكريم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "يحي",
        "raw": "يحي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد بن عبد الجليل بن أحمد بن منصور بن حسن بن إسماعيل بن عباس",
        "raw": "محمد بن عبد الجليل بن أحمد بن منصور بن حسن بن إسماعيل بن عباس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "وائل",
        "raw": "وائل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "عبد الكريم بن عبد الجليل بن أحمد بن منصور",
        "raw": "عبد الكريم بن عبد الجليل بن أحمد بن منصور",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "أحمد بن عبد الجليل بن أحمد بن منصور",
        "raw": "أحمد بن عبد الجليل بن أحمد بن منصور",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "جمال",
        "raw": "جمال",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "يحي عبد الجليل بن أحمد بن منصور",
        "raw": "يحي عبد الجليل بن أحمد بن منصور",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "يوسف",
        "raw": "يوسف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "موسى",
        "raw": "موسى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/3",
        "name": "محمد بن منصور بن حسن بن إسماعيل بن  عباس",
        "raw": "محمد بن منصور بن حسن بن إسماعيل بن  عباس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "علي بن هزاع بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان بن عبَّاد",
        "raw": "علي بن هزاع بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان بن عبَّاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "جلال",
        "raw": "جلال",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "يعقوب",
        "raw": "يعقوب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "حسن",
        "raw": "حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "حسين",
        "raw": "حسين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "يونس",
        "raw": "يونس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "أحمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي  بن جيلان بن عباد",
        "raw": "أحمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي  بن جيلان بن عباد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "ابراهيم",
        "raw": "ابراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "حمود",
        "raw": "حمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "عبد الحكيم",
        "raw": "عبد الحكيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "إبراهيم بن أحمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
        "raw": "إبراهيم بن أحمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "وائل",
        "raw": "وائل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "محمد بن عبد الوهاب بن حسن بن إسماعيل بن  عباس بن علي  بن جيلان",
        "raw": "محمد بن عبد الوهاب بن حسن بن إسماعيل بن  عباس بن علي  بن جيلان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "عبد الباري",
        "raw": "عبد الباري",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "عبد الباري بن محمد بن عبد الوهاب بن حسن بن إسماعيل بن  عباس بن علي  بن جيلان",
        "raw": "عبد الباري بن محمد بن عبد الوهاب بن حسن بن إسماعيل بن  عباس بن علي  بن جيلان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "علي بن محمد بن عبد الوهاب بن حسن بن إسماعيل بن  عباس بن علي  بن جيلان",
        "raw": "علي بن محمد بن عبد الوهاب بن حسن بن إسماعيل بن  عباس بن علي  بن جيلان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "أسامة",
        "raw": "أسامة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "يونس",
        "raw": "يونس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "عبد الله بن محمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
        "raw": "عبد الله بن محمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "احمد",
        "raw": "احمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/3",
        "name": "محمد بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
        "raw": "محمد بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد الواسع",
        "raw": "عبد الواسع",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد الواسع بن محمد بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
        "raw": "عبد الواسع بن محمد بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "ماجد",
        "raw": "ماجد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "أمين بن عبد الواسع بن محمد بن حسن",
        "raw": "أمين بن عبد الواسع بن محمد بن حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "أسامة",
        "raw": "أسامة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "مهدي",
        "raw": "مهدي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "مروان",
        "raw": "مروان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "محمد بن عبد الواسع بن محمد بن حسن",
        "raw": "محمد بن عبد الواسع بن محمد بن حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "حسن",
        "raw": "حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "يعقوب",
        "raw": "يعقوب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "علي بن محمد بن حسن بن إسماعيل بن  عباس بن علي بن جيلان",
        "raw": "علي بن محمد بن حسن بن إسماعيل بن  عباس بن علي بن جيلان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-9",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "40/1",
        "name": "أحمد بن محمد بن فاضل",
        "raw": "أحمد بن محمد بن فاضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "فاضل",
        "raw": "فاضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد بن أحمد بن محمد بن فاضل",
        "raw": "محمد بن أحمد بن محمد بن فاضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "أحمد بن عبد العزيز بن فاضل",
        "raw": "أحمد بن عبد العزيز بن فاضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "يوسف",
        "raw": "يوسف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "خليل",
        "raw": "خليل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "صفوان",
        "raw": "صفوان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "عمار",
        "raw": "عمار",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/6",
        "name": "عمرو",
        "raw": "عمرو",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "علي بن عبد العزيز بن فاضل",
        "raw": "علي بن عبد العزيز بن فاضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "الحسين",
        "raw": "الحسين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "أسامة",
        "raw": "أسامة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "مروان",
        "raw": "مروان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد بن عبد العزيز بن فاضل",
        "raw": "محمد بن عبد العزيز بن فاضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عبد السلام بن مهيوب بن فاضل",
        "raw": "عبد السلام بن مهيوب بن فاضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "رضا",
        "raw": "رضا",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "مرتضى",
        "raw": "مرتضى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "وجيه بن مهيوب بن فاضل",
        "raw": "وجيه بن مهيوب بن فاضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "معمر بن مهيوب بن فاضل",
        "raw": "معمر بن مهيوب بن فاضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "حيدر",
        "raw": "حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "نوري بن مهيوب بن فاضل",
        "raw": "نوري بن مهيوب بن فاضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "هاشم بن عبد الرحمن بن فاضل",
        "raw": "هاشم بن عبد الرحمن بن فاضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "مهند",
        "raw": "مهند",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "محمود بن عبد الرحمن بن فاضل",
        "raw": "محمود بن عبد الرحمن بن فاضل (شهيد)",
        "isMartyr": true,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": "شهيد"
      },
      {
        "code": "41/1",
        "name": "جمال",
        "raw": "جمال",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "عارف بن حمود بن فاضل",
        "raw": "عارف بن حمود بن فاضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "رياض بن حمود بن فاضل",
        "raw": "رياض بن حمود بن فاضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-10",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "39/1",
        "name": "أمين بن محمد بن سعيد بن  حيدر محمد",
        "raw": "أمين بن محمد بن سعيد بن  حيدر محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "محسن بن محمد بن سعيد بن حيدر",
        "raw": "محسن بن محمد بن سعيد بن حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "فضل",
        "raw": "فضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-11",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "40/1",
        "name": "عبد الجليل بن محيا بن أحمد بن محسن بن  حيدر",
        "raw": "عبد الجليل بن محيا بن أحمد بن محسن بن  حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد بن عبد الجليل بن محيا",
        "raw": "محمد بن عبد الجليل بن محيا",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "مبروك",
        "raw": "مبروك",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "علي بن محيا بن أحمد بن محسن بن حيدر",
        "raw": "علي بن محيا بن أحمد بن محسن بن حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الله بن علي بن محيا يد",
        "raw": "عبد الله بن علي بن محيا يد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "عبد الرحمن بن علي بن محيا",
        "raw": "عبد الرحمن بن علي بن محيا",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-12",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "40/1",
        "name": "سعيد بن أحمد بن عبد الرحمن بن محسن بن  حيدر",
        "raw": "سعيد بن أحمد بن عبد الرحمن بن محسن بن  حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "عبد الحكيم",
        "raw": "عبد الحكيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "خالد",
        "raw": "خالد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "عمر",
        "raw": "عمر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/6",
        "name": "صلاح",
        "raw": "صلاح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/7",
        "name": "موسى",
        "raw": "موسى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد بن سعيد بن أحمد بن عبد الرحمن",
        "raw": "محمد بن سعيد بن أحمد بن عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "عبد الحكيم بن سعيد بن أحمد",
        "raw": "عبد الحكيم بن سعيد بن أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "أيمن",
        "raw": "أيمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "خالد بن سعيد بن أحمد بن عبد الرحمن",
        "raw": "خالد بن سعيد بن أحمد بن عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "عمر بن سعيد بن أحمد بن عبد الرحمن",
        "raw": "عمر بن سعيد بن أحمد بن عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "الحمزة",
        "raw": "الحمزة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "أحمد بن سعيد بن أحمد بن عبد الرحمن",
        "raw": "أحمد بن سعيد بن أحمد بن عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد الجليل بن أحمد بن عبد الرحمن",
        "raw": "عبد الجليل بن أحمد بن عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عبد الله بن أحمد بن عبد الرحمن",
        "raw": "عبد الله بن أحمد بن عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "سلمان",
        "raw": "سلمان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "عبد الكريم بن أحمد بن عبد الرحمن",
        "raw": "عبد الكريم بن أحمد بن عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "زكريا",
        "raw": "زكريا",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "أسامة",
        "raw": "أسامة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-13",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "39/1",
        "name": "محمد بن محمد بن عبد الغني بن حيدر",
        "raw": "محمد بن محمد بن عبد الغني بن حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "مروان",
        "raw": "مروان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "يوسف",
        "raw": "يوسف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-14",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "39/1",
        "name": "محمد بن عبد الرقيب بن محسن بن علي بن عبد الله بن علي بن جيلان",
        "raw": "محمد بن عبد الرقيب بن محسن بن علي بن عبد الله بن علي بن جيلان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "محي الدين",
        "raw": "محي الدين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "عدنان",
        "raw": "عدنان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "عايد",
        "raw": "عايد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "حسيب",
        "raw": "حسيب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الله بن محمد بن عبد الرقيب بن محسن",
        "raw": "عبد الله بن محمد بن عبد الرقيب بن محسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "صفوان",
        "raw": "صفوان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "صخر",
        "raw": "صخر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "محمود",
        "raw": "محمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "عمر",
        "raw": "عمر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "عدنان بن  محمد بن عبد الرقيب بن محسن",
        "raw": "عدنان بن  محمد بن عبد الرقيب بن محسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "قاسم بن عبد الرقيب بن محسن",
        "raw": "قاسم بن عبد الرقيب بن محسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "أنيس",
        "raw": "أنيس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "حافظ",
        "raw": "حافظ",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "رياض",
        "raw": "رياض",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "مراد",
        "raw": "مراد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "أنس",
        "raw": "أنس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "أنيس بن قاسم بن عبد الرقيب",
        "raw": "أنيس بن قاسم بن عبد الرقيب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "باسم",
        "raw": "باسم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "بسام",
        "raw": "بسام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "حافظ بن قاسم بن عبد الرقيب",
        "raw": "حافظ بن قاسم بن عبد الرقيب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "رياض بن قاسم بن عبد الرقيب",
        "raw": "رياض بن قاسم بن عبد الرقيب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عمرو",
        "raw": "عمرو",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "مراد بن قاسم بن عبد الرقيب",
        "raw": "مراد بن قاسم بن عبد الرقيب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "عبد الهادي بن عبد الرقيب بن محسن",
        "raw": "عبد الهادي بن عبد الرقيب بن محسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "رمزي",
        "raw": "رمزي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "رضوان",
        "raw": "رضوان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "أسامة",
        "raw": "أسامة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/6",
        "name": "أنس",
        "raw": "أنس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/7",
        "name": "معاذ",
        "raw": "معاذ",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "رمزي بن عبد الهادي بن عبد الرقيب",
        "raw": "رمزي بن عبد الهادي بن عبد الرقيب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "ضياء",
        "raw": "ضياء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-15",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "39/1",
        "name": "أحمد بن عبد اللطيف بن محسن",
        "raw": "أحمد بن عبد اللطيف بن محسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عادل",
        "raw": "عادل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عادل بن أحمد بن عبد اللطيف بن محسن",
        "raw": "عادل بن أحمد بن عبد اللطيف بن محسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "طه بن عبد اللطيف بن محسن",
        "raw": "طه بن عبد اللطيف بن محسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "بسام",
        "raw": "بسام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "جلال",
        "raw": "جلال",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "رضوان",
        "raw": "رضوان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "إدريس",
        "raw": "إدريس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/6",
        "name": "بليغ",
        "raw": "بليغ",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/7",
        "name": "اسامة",
        "raw": "اسامة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "بسام بن طه بن عبد اللطيف",
        "raw": "بسام بن طه بن عبد اللطيف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "طاهر",
        "raw": "طاهر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "عبد العزيز بن عبد اللطيف بن محسن",
        "raw": "عبد العزيز بن عبد اللطيف بن محسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "بندر",
        "raw": "بندر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "بلال",
        "raw": "بلال",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عمار",
        "raw": "عمار",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "مشعل",
        "raw": "مشعل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/6",
        "name": "عمرو",
        "raw": "عمرو",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "علي بن عبد اللطيف بن محسن",
        "raw": "علي بن عبد اللطيف بن محسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "ماجد",
        "raw": "ماجد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "أمجد",
        "raw": "أمجد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-16",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "40/1",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "جواد",
        "raw": "جواد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "فارس",
        "raw": "فارس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "مالك",
        "raw": "مالك",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/6",
        "name": "هيثم",
        "raw": "هيثم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الرحمن بن عبد الله بن عبد الخبير",
        "raw": "عبد الرحمن بن عبد الله بن عبد الخبير",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "أنيس",
        "raw": "أنيس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-17",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "38/1",
        "name": "مهيوب واعقب بنتا ،  ولم يعقب  من الذكور",
        "raw": "مهيوب واعقب بنتا ،  ولم يعقب  من الذكور",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      }
    ]
  },
  {
    "id": "sec-18",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "39/1",
        "name": "إسماعيل بن عبد الله بن جيلان بن  حيدر",
        "raw": "إسماعيل بن عبد الله بن جيلان بن  حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "سعيد",
        "raw": "سعيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "يحي",
        "raw": "يحي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "احمد بن جيلان بن حيدر",
        "raw": "احمد بن جيلان بن حيدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "عبد الوهاب",
        "raw": "عبد الوهاب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "إسماعيل",
        "raw": "إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-19",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "32/2",
        "name": "عطاء بن محسن بن أحمد الجنيد بن محمد جمال الدين بن عبد الرحمن النقل بن أحمد بن عبد الله الحضرمي",
        "raw": "عطاء بن محسن بن أحمد الجنيد بن محمد جمال الدين بن عبد الرحمن النقل بن أحمد بن عبد الله الحضرمي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-20",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "38/1",
        "name": "سعيد بن سيف بن غالب",
        "raw": "سعيد بن سيف بن غالب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "أحمد بن سعيد بن سيف بن غالب",
        "raw": "أحمد بن سعيد بن سيف بن غالب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "خالد",
        "raw": "خالد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "فؤاد",
        "raw": "فؤاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عادل",
        "raw": "عادل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "عصام",
        "raw": "عصام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "خالد بن أحمد بن سعيد بن سيف بن غالب",
        "raw": "خالد بن أحمد بن سعيد بن سيف بن غالب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "عبد الله بن سعيد بن سيف بن غالب",
        "raw": "عبد الله بن سعيد بن سيف بن غالب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "محمد بن سعيد بن سيف بن غالب",
        "raw": "محمد بن سعيد بن سيف بن غالب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "سيف",
        "raw": "سيف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "حسين",
        "raw": "حسين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "علي بن سعيد بن سيف ( لم يعقب)",
        "raw": "علي بن سعيد بن سيف ( لم يعقب)",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "39/5",
        "name": "عبد الوهاب بن سعيد بن سيف",
        "raw": "عبد الوهاب بن سعيد بن سيف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "حسن بن سيف بن غالب",
        "raw": "حسن بن سيف بن غالب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-21",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "39/1",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "إبراهيم بن أحمد بن عبد الكريم",
        "raw": "إبراهيم بن أحمد بن عبد الكريم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "نجيب",
        "raw": "نجيب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "عمر",
        "raw": "عمر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/6",
        "name": "ضياء",
        "raw": "ضياء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/7",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد بن إبراهيم بن أحمد بن عبد الكريم",
        "raw": "محمد بن إبراهيم بن أحمد بن عبد الكريم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "أمين بن إبراهيم بن أحمد بن عبد الكريم",
        "raw": "أمين بن إبراهيم بن أحمد بن عبد الكريم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "أنور",
        "raw": "أنور",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "ضياء",
        "raw": "ضياء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "مروان",
        "raw": "مروان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عبد الله بن إبراهيم بن أحمد بن عبد الكريم",
        "raw": "عبد الله بن إبراهيم بن أحمد بن عبد الكريم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "ضياء",
        "raw": "ضياء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "نجيب بن إبراهيم بن أحمد بن عبد الكريم",
        "raw": "نجيب بن إبراهيم بن أحمد بن عبد الكريم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "أحمد بن أحمد بن عبد الكريم",
        "raw": "أحمد بن أحمد بن عبد الكريم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد الغني",
        "raw": "عبد الغني",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "مفضل",
        "raw": "مفضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "سامي",
        "raw": "سامي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الرحمن بن احمد بن احمد بن عبد الكريم",
        "raw": "عبد الرحمن بن احمد بن احمد بن عبد الكريم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-22",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "فؤاد",
        "raw": "فؤاد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد بن عبد الوهاب",
        "raw": "محمد بن عبد الوهاب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "حسام",
        "raw": "حسام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "بسام",
        "raw": "بسام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "سيف",
        "raw": "سيف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "حسان",
        "raw": "حسان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "فؤاد بن عبد الوهاب",
        "raw": "فؤاد بن عبد الوهاب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "تركي",
        "raw": "تركي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "سعيد بن محمد بن علي بن محمد بن محمد بن حسان بن محمد بن عطاء",
        "raw": "سعيد بن محمد بن علي بن محمد بن محمد بن حسان بن محمد بن عطاء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد متوفى ولا عقب له",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "40/2",
        "name": "حاتم",
        "raw": "حاتم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "عمر",
        "raw": "عمر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "حاتم بن سعيد بن محمد",
        "raw": "حاتم بن سعيد بن محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "سيف",
        "raw": "سيف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عمر بن سعيد بن محمد",
        "raw": "عمر بن سعيد بن محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "34/3",
        "name": "إبراهيم بن محمد بن عطاء بن محسن بن أحمد الجنيد بن محمد جمال الدين",
        "raw": "إبراهيم بن محمد بن عطاء بن محسن بن أحمد الجنيد بن محمد جمال الدين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "35/1",
        "name": "راجح",
        "raw": "راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "35/2",
        "name": "محسن",
        "raw": "محسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "محمد بن عبد الله بن سيف بن راجح بن إبراهيم بن محمد بن عطاء",
        "raw": "محمد بن عبد الله بن سيف بن راجح بن إبراهيم بن محمد بن عطاء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عقيل مات و لا عقب له",
        "raw": "عقيل مات و لا عقب له",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "38/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "سامي",
        "raw": "سامي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/4",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "36/2",
        "name": "سعيد بن راجح بن إبراهيم بن محمد بن عطاء",
        "raw": "سعيد بن راجح بن إبراهيم بن محمد بن عطاء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "36/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/1",
        "name": "عبد الله بن سعيد بن راجح بن إبراهيم بن محمد بن عطاء",
        "raw": "عبد الله بن سعيد بن راجح بن إبراهيم بن محمد بن عطاء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "حسن",
        "raw": "حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبد الكريم",
        "raw": "عبد الكريم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "سعيد",
        "raw": "سعيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "حسن بن عبد الله بن سعيد بن راجح",
        "raw": "حسن بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "سعيد",
        "raw": "سعيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "عبد الله بن حسن بن عبد الله بن سعيد بن راجح",
        "raw": "عبد الله بن حسن بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عادل",
        "raw": "عادل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "شكري",
        "raw": "شكري",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "هيثم",
        "raw": "هيثم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "معتوق",
        "raw": "معتوق",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "أحمد بن حسن بن عبد الله بن سعيد بن راجح",
        "raw": "أحمد بن حسن بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "مهيوب",
        "raw": "مهيوب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "الجنيد",
        "raw": "الجنيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "سعيد بن حسن بن عبد الله بن سعيد بن راجح",
        "raw": "سعيد بن حسن بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عمر",
        "raw": "عمر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبد الكريم بن عبد الله بن سعيد بن راجح",
        "raw": "عبد الكريم بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "عبد الخالق",
        "raw": "عبد الخالق",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/5",
        "name": "شمسان ( مات ولا عقب له )",
        "raw": "شمسان ( مات ولا عقب له )",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "39/1",
        "name": "عبد الرحمن بن عبد الكريم بن عبد الله بن سعيد بن راجح",
        "raw": "عبد الرحمن بن عبد الكريم بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "أحمد متوفى",
        "raw": "أحمد متوفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "زكريا",
        "raw": "زكريا",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "أسامة",
        "raw": "أسامة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "إسحاق",
        "raw": "إسحاق",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "يعقوب",
        "raw": "يعقوب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "إبراهيم بن عبد الكريم بن عبد الله بن سعيد بن راجح",
        "raw": "إبراهيم بن عبد الكريم بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "ماهر",
        "raw": "ماهر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عدنان",
        "raw": "عدنان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "بليغ",
        "raw": "بليغ",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "متعب",
        "raw": "متعب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "أحمد بن عبد الكريم بن عبد الله بن سعيد بن راجح",
        "raw": "أحمد بن عبد الكريم بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "الجنيد",
        "raw": "الجنيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "هيثم",
        "raw": "هيثم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "موسى",
        "raw": "موسى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "عبد الخالق بن عبد الكريم بن عبد الله بن سعيد بن راجح",
        "raw": "عبد الخالق بن عبد الكريم بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "جمال",
        "raw": "جمال",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "سعيد بن عبد الله بن سعيد بن راجح",
        "raw": "سعيد بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "عبد الوهاب",
        "raw": "عبد الوهاب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
        "raw": "عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمود",
        "raw": "محمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد العزيز",
        "raw": "عبد العزيز",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "عدنان",
        "raw": "عدنان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "زكريا",
        "raw": "زكريا",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمود بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
        "raw": "محمود بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "عدنان",
        "raw": "عدنان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد العزيز بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
        "raw": "عبد العزيز بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "محمد بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
        "raw": "محمد بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "سعيد",
        "raw": "سعيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "عدنان بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
        "raw": "عدنان بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "زكريا بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
        "raw": "زكريا بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/2",
        "name": "محمد بن سعيد بن راجح",
        "raw": "محمد بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "عبد الله بن محمد بن سعيد بن راجح",
        "raw": "عبد الله بن محمد بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد بن عبد الله بن محمد بن سعيد بن راجح",
        "raw": "محمد بن عبد الله بن محمد بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "صادق",
        "raw": "صادق",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الرحمن بن محمد بن عبد الله بن محمد بن سعيد بن راجح",
        "raw": "عبد الرحمن بن محمد بن عبد الله بن محمد بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "صادق بن محمد بن عبد الله بن محمد بن سعيد بن راجح",
        "raw": "صادق بن محمد بن عبد الله بن محمد بن سعيد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "علوي",
        "raw": "علوي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "زكريا",
        "raw": "زكريا",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "36/3",
        "name": "مهيوب بن راجح بن ابراهيم بن محمد بن عطاء",
        "raw": "مهيوب بن راجح بن ابراهيم بن محمد بن عطاء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/1",
        "name": "سعيد",
        "raw": "سعيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/1",
        "name": "سعيد بن مهيوب بن راجح",
        "raw": "سعيد بن مهيوب بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "معاذ",
        "raw": "معاذ",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "مختار",
        "raw": "مختار",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/2",
        "name": "محمد بن بن مهيوب بن راجح",
        "raw": "محمد بن بن مهيوب بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "النونو",
        "raw": "النونو",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "أمين بن محمد بن بن مهيوب بن راجح",
        "raw": "أمين بن محمد بن بن مهيوب بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "راجح",
        "raw": "راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "النونو بن محمد بن بن مهيوب بن راجح",
        "raw": "النونو بن محمد بن بن مهيوب بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "أحمد بن محمد بن مهيوب بن راجح",
        "raw": "أحمد بن محمد بن مهيوب بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/1",
        "name": "حمادي بن أحمد بن راجح",
        "raw": "حمادي بن أحمد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبد الكريم",
        "raw": "عبد الكريم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "37/1",
        "name": "محمد بن حمادي  بن أحمد بن راجح",
        "raw": "محمد بن حمادي  بن أحمد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "يوسف",
        "raw": "يوسف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/4",
        "name": "وليد",
        "raw": "وليد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/5",
        "name": "مراد",
        "raw": "مراد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/6",
        "name": "عبد الهادي",
        "raw": "عبد الهادي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "أمين بن محمد بن حمادي بن أحمد بن راجح",
        "raw": "أمين بن محمد بن حمادي بن أحمد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "سعيد",
        "raw": "سعيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "مصطفى بن محمد بن حمادي بن أحمد بن راجح",
        "raw": "مصطفى بن محمد بن حمادي بن أحمد بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عقلان",
        "raw": "عقلان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "يوسف بن محمد بن حمادي بن أحمد  بن راجح",
        "raw": "يوسف بن محمد بن حمادي بن أحمد  بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "عبد الحكيم",
        "raw": "عبد الحكيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "مروان",
        "raw": "مروان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبد الكريم بن حمادي بن أحمد  بن راجح",
        "raw": "عبد الكريم بن حمادي بن أحمد  بن راجح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "عفيف متوفى",
        "raw": "عفيف متوفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "رياض",
        "raw": "رياض",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "وسيم",
        "raw": "وسيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "أكرم",
        "raw": "أكرم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-23",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "38/1",
        "name": "عبد الواسع بن عبد الغني بن حيدر بن سعيد بن يحيى بن علوان بن عطاء",
        "raw": "عبد الواسع بن عبد الغني بن حيدر بن سعيد بن يحيى بن علوان بن عطاء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "مقبل",
        "raw": "مقبل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "مهيوب",
        "raw": "مهيوب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "حسن",
        "raw": "حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/5",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "مقبل بن عبد الواسع",
        "raw": "مقبل بن عبد الواسع",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد العزيز",
        "raw": "عبد العزيز",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "أمين بن مقبل بن عبد الواسع",
        "raw": "أمين بن مقبل بن عبد الواسع",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد العزيز بن مقبل بن عبد الواسع",
        "raw": "عبد العزيز بن مقبل بن عبد الواسع",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "نايف",
        "raw": "نايف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "محمد بن مقبل بن عبد الواسع",
        "raw": "محمد بن مقبل بن عبد الواسع",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "مهيوب بن عبد الواسع بن عبد الغني بن حيدر بن سعيد بن يحي بن علوان بن عطاء",
        "raw": "مهيوب بن عبد الواسع بن عبد الغني بن حيدر بن سعيد بن يحي بن علوان بن عطاء",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "سعيد",
        "raw": "سعيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "سعيد بن مهيوب بن عبد الواسع",
        "raw": "سعيد بن مهيوب بن عبد الواسع",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمود",
        "raw": "محمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "رضوان",
        "raw": "رضوان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "عدنان",
        "raw": "عدنان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "أسامة",
        "raw": "أسامة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "صلاح",
        "raw": "صلاح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/6",
        "name": "مختار",
        "raw": "مختار",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/7",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "حسن بن عبد الواسع",
        "raw": "حسن بن عبد الواسع",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد بن حسن بن عبد الواسع",
        "raw": "محمد بن حسن بن عبد الواسع",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "جمال",
        "raw": "جمال",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "هيثم",
        "raw": "هيثم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "محمد بن عبد الواسع",
        "raw": "محمد بن عبد الواسع",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد بن محمد بن عبد الواسع",
        "raw": "محمد بن محمد بن عبد الواسع",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد العزيز",
        "raw": "عبد العزيز",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "خالد",
        "raw": "خالد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "عمار",
        "raw": "عمار",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "يعقوب",
        "raw": "يعقوب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "عيسى",
        "raw": "عيسى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/5",
        "name": "أحمد بن عبد الواسع",
        "raw": "أحمد بن عبد الواسع",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "أمين بن أحمد بن عبد الواسع",
        "raw": "أمين بن أحمد بن عبد الواسع",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد بن أحمد بن عبد الواسع",
        "raw": "محمد بن أحمد بن عبد الواسع",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-24",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "42/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "صالح",
        "raw": "صالح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "أحمد بن قاسم بن صالح بن مثنى",
        "raw": "أحمد بن قاسم بن صالح بن مثنى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "عبد الله بن قاسم بن صالح بن مثنى",
        "raw": "عبد الله بن قاسم بن صالح بن مثنى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "صالح بن قاسم بن صالح بن مثنى",
        "raw": "صالح بن قاسم بن صالح بن مثنى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-25",
    "mainBranch": "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "42/1",
        "name": "فواز",
        "raw": "فواز",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "عمار",
        "raw": "عمار",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "صلاح",
        "raw": "صلاح",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/4",
        "name": "فهد  لا عقب له",
        "raw": "فهد (شهيد) لا عقب له",
        "isMartyr": true,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "شهيد"
      },
      {
        "code": "42/1",
        "name": "فواز بن عبده بن حسن",
        "raw": "فواز بن عبده بن حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "43/1",
        "name": "هاشم",
        "raw": "هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "عمار بن عبده بن حسن",
        "raw": "عمار بن عبده بن حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "43/1",
        "name": "علاء الدين",
        "raw": "علاء الدين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "43/2",
        "name": "لقمان",
        "raw": "لقمان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "صلاح بن عبده بن حسن",
        "raw": "صلاح بن عبده بن حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "43/1",
        "name": "فهد",
        "raw": "فهد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-26",
    "mainBranch": "عمود النسب الشريف وسلسلة شارح البحر",
    "sectionTitle": "27 / 1 - شارح البحر  //",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "28/1",
        "name": "الشيخ/ محمد [ لا نعلم له عقب  ]",
        "raw": "الشيخ/ محمد [ لا نعلم له عقب  ]",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "28/2",
        "name": "الشيخ/ عبيد [ لا نعلم له عقب  ]",
        "raw": "الشيخ/ عبيد [ لا نعلم له عقب  ]",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "28/3",
        "name": "الشيخ/ عبد الرحمن ساكن النقل بن أحمد شارح البحر بن عبد الله الحضرمي.",
        "raw": "الشيخ/ عبد الرحمن ساكن النقل بن أحمد شارح البحر بن عبد الله الحضرمي.",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-27",
    "mainBranch": "عمود النسب الشريف وسلسلة شارح البحر",
    "sectionTitle": "اعقاب الشيخ  عبد الرحمن ساكن النقل بن شارح البحر أحمد بن عبد الله الحضرمي",
    "parentCode": "",
    "parentName": "اعقاب الشيخ  عبد الرحمن ساكن النقل بن شارح البحر أحمد بن عبد الله الحضرمي",
    "entries": [
      {
        "code": "29/1",
        "name": "الشيخ / لطف الله ( اسكندر ) بن عبد الرحمن ساكن النقل بن أحمد بن عبد الله الحضرمي [ ولا نعلم له عقب ].",
        "raw": "الشيخ / لطف الله ( اسكندر ) بن عبد الرحمن ساكن النقل بن أحمد بن عبد الله الحضرمي [ ولا نعلم له عقب ].",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "29/2",
        "name": "الشيخ / عبد الله بن عبد الرحمن النقل بن شارح البحر أحمد بن عبد الله الحضرمي",
        "raw": "الشيخ / عبد الله بن عبد الرحمن النقل بن شارح البحر أحمد بن عبد الله الحضرمي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "29/3",
        "name": "الشيخ / أحمد بن عبد الرحمن النقل بن شارح البحر أحمد الحضرمي",
        "raw": "الشيخ / أحمد بن عبد الرحمن النقل بن شارح البحر أحمد الحضرمي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "30/1",
        "name": "الجنيد",
        "raw": "الجنيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "30/2",
        "name": "عمر",
        "raw": "عمر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "30/1",
        "name": "الجنيد بن أحمد بن عبد الرحمن النقل بن شارح البحر الحضرمي (عقبه في جبل حبشي)",
        "raw": "الجنيد بن أحمد بن عبد الرحمن النقل بن شارح البحر الحضرمي (عقبه في جبل حبشي)",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "30/2",
        "name": "عمر بن أحمد بن عبد الرحمن النقل بن شارح البحر الحضرمي (",
        "raw": "عمر بن أحمد بن عبد الرحمن النقل بن شارح البحر الحضرمي (",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "29/4",
        "name": "الشيخ محمد جمال الدين بن عبد الرحمن النقل بن أحمد شارح البحر بن عبد الله الحضرمي (أبو الجنيد)",
        "raw": "الشيخ محمد جمال الدين بن عبد الرحمن النقل بن أحمد شارح البحر بن عبد الله الحضرمي (أبو الجنيد)",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "31/1",
        "name": "بشر الجنيد",
        "raw": "بشر الجنيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "31/2",
        "name": "أحمد الجنيد",
        "raw": "أحمد الجنيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "31/3",
        "name": "عبد الرحمن الجنيد",
        "raw": "عبد الرحمن الجنيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-28",
    "mainBranch": "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "31/1",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "31/2",
        "name": "العيدروس",
        "raw": "العيدروس",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "31/3",
        "name": "فاضل",
        "raw": "فاضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-29",
    "mainBranch": "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "32/1",
        "name": "عبَّاد",
        "raw": "عبَّاد(×)",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "32/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "32/3",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "32/4",
        "name": "إسماعيل",
        "raw": "إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "32/5",
        "name": "بشر",
        "raw": "بشر(×)",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "32/6",
        "name": "حاجب",
        "raw": "حاجب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "32/7",
        "name": "مالك",
        "raw": "مالك (×)",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      }
    ]
  },
  {
    "id": "sec-30",
    "mainBranch": "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "36/1",
        "name": "فاضل",
        "raw": "فاضل(×)",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "36/2",
        "name": "علي",
        "raw": "علي (×)",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "36/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "36/4",
        "name": "عبد الملك",
        "raw": "عبد الملك",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "36/5",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "36/6",
        "name": "الجنيد",
        "raw": "الجنيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "36/7",
        "name": "عثمان",
        "raw": "عثمان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "36/8",
        "name": "فضل",
        "raw": "فضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "36/9",
        "name": "منصور",
        "raw": "منصور (×)",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      }
    ]
  },
  {
    "id": "sec-31",
    "mainBranch": "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "37/1",
        "name": "علي بن محمد بن أحمد بن عثمان",
        "raw": "علي بن محمد بن أحمد بن عثمان (×)",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "38/1",
        "name": "إبراهيم بن عبد الوهاب بن محمد بن أحمد بن عثمان",
        "raw": "إبراهيم بن عبد الوهاب بن محمد بن أحمد بن عثمان (×)",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "40/1",
        "name": "عبد الرحمن بن عبد الله بن عبد الغني بن عبد الوهاب",
        "raw": "عبد الرحمن بن عبد الله بن عبد الغني بن عبد الوهاب(×)",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "40/2",
        "name": "محمد بن عبد الله بن عبد الغني بن عبد الوهاب",
        "raw": "محمد بن عبد الله بن عبد الغني بن عبد الوهاب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الوهاب",
        "raw": "عبد الوهاب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "عبد السلام",
        "raw": "عبد السلام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "خالد",
        "raw": "خالد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/6",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الوهاب بن محمد بن عبد الله",
        "raw": "عبد الوهاب بن محمد بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "الحمزة",
        "raw": "الحمزة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "عبد السلام بن محمد بن عبد الله",
        "raw": "عبد السلام بن محمد بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "الرضا",
        "raw": "الرضا",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "أحمد بن محمد بن عبد الله",
        "raw": "أحمد بن محمد بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "صدام",
        "raw": "صدام ( شهيد )",
        "isMartyr": true,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": "شهيد"
      },
      {
        "code": "42/2",
        "name": "عدنان",
        "raw": "عدنان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/4",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "علي بن محمد بن عبد الله",
        "raw": "علي بن محمد بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "الحسين",
        "raw": "الحسين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "زيد",
        "raw": "زيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "خالد بن محمد بن عبد الله",
        "raw": "خالد بن محمد بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "زيد",
        "raw": "زيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/6",
        "name": "محمد بن محمد بن عبد الله",
        "raw": "محمد بن محمد بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عبد القادر بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
        "raw": "عبد القادر بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الحكيم",
        "raw": "عبد الحكيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "محمود",
        "raw": "محمود",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "عبد الإله",
        "raw": "عبد الإله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "الحسين",
        "raw": "الحسين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "المرتضى",
        "raw": "المرتضى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/6",
        "name": "المؤيد",
        "raw": "المؤيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الحكيم بن عبد القادر بن عبد الله",
        "raw": "عبد الحكيم بن عبد القادر بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "المطهر",
        "raw": "المطهر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "جوهر",
        "raw": "جوهر (شهيد)",
        "isMartyr": true,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": "شهيد"
      },
      {
        "code": "42/4",
        "name": "أحمد",
        "raw": "أحمد (شهيد)",
        "isMartyr": true,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": "شهيد"
      },
      {
        "code": "42/5",
        "name": "الحمزة",
        "raw": "الحمزة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "مطهر بن عبد الحكيم بن عبد القادر",
        "raw": "مطهر بن عبد الحكيم بن عبد القادر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "43/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "محمد بن عبد الحكيم بن عبد القادر",
        "raw": "محمد بن عبد الحكيم بن عبد القادر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "43/1",
        "name": "جوهر",
        "raw": "جوهر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "محمود بن عبد القادر بن عبد الله",
        "raw": "محمود بن عبد القادر بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/4",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "عبد الإله بن عبد القادر بن عبد الله",
        "raw": "عبد الإله بن عبد القادر بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "زيد",
        "raw": "زيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/4",
        "name": "إسماعيل",
        "raw": "إسماعيل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/5",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/6",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "زيد بن عبد الإله بن عبد القادر",
        "raw": "زيد بن عبد الإله بن عبد القادر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "43/1",
        "name": "الحسين",
        "raw": "الحسين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "الحسين بن عبد القادر بن عبد الله",
        "raw": "الحسين بن عبد القادر بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "المرتضى بن عبد القادر بن عبد الله",
        "raw": "المرتضى بن عبد القادر بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/6",
        "name": "المؤيد بن عبد القادر بن عبد الله",
        "raw": "المؤيد بن عبد القادر بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "زيد",
        "raw": "زيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "سعيد بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
        "raw": "سعيد بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "نبيل",
        "raw": "نبيل ( × )",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "فهد",
        "raw": "فهد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "بسام",
        "raw": "بسام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "مرتضى",
        "raw": "مرتضى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/6",
        "name": "مطهر",
        "raw": "مطهر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/7",
        "name": "صدام",
        "raw": "صدام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/8",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "أمين بن سعيد بن عبد الله",
        "raw": "أمين بن سعيد بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "الحمزة",
        "raw": "الحمزة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "فهد بن سعيد بن عبد الله",
        "raw": "فهد بن سعيد بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "بسام بن سعيد بن عبد الله",
        "raw": "بسام بن سعيد بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/8",
        "name": "محمد بن سعيد بن عبد الله",
        "raw": "محمد بن سعيد بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "علي بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
        "raw": "علي بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "عبد الغني",
        "raw": "عبد الغني",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "عدنان",
        "raw": "عدنان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "زيد",
        "raw": "زيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الرحمن بن علي بن عبد الله",
        "raw": "عبد الرحمن بن علي بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "عبد الغني  بن علي بن عبد الله",
        "raw": "عبد الغني  بن علي بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "أحمد بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
        "raw": "أحمد بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "هاني",
        "raw": "هاني",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "هاني بن أحمد بن عبد الله",
        "raw": "هاني بن أحمد بن عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "سيف بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
        "raw": "سيف بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد بن سيف بن عبد الغني بن عبد الوهاب",
        "raw": "محمد بن سيف بن عبد الغني بن عبد الوهاب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الوهاب",
        "raw": "عبد الوهاب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن (شهيد)",
        "isMartyr": true,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": "شهيد"
      },
      {
        "code": "41/5",
        "name": "عبد الرؤوف",
        "raw": "عبد الرؤوف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الوهاب بن محمد بن سيف",
        "raw": "عبد الوهاب بن محمد بن سيف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "محمد بن محمد بن سيف",
        "raw": "محمد بن محمد بن سيف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "الحمزة",
        "raw": "الحمزة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "أحمد بن محمد بن سيف",
        "raw": "أحمد بن محمد بن سيف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-32",
    "mainBranch": "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب  محمد بن عبد المعطي بن محمد بن محمد بن أحمد بن عثمان",
    "parentCode": "",
    "parentName": "أعقاب  محمد بن عبد المعطي بن محمد بن محمد بن أحمد بن عثمان",
    "entries": [
      {
        "code": "40/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "عبد المعطي",
        "raw": "عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "عبد السلام",
        "raw": "عبد السلام",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/6",
        "name": "عز الدين",
        "raw": "عز الدين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/7",
        "name": "عبد الرؤوف",
        "raw": "عبد الرؤوف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/8",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/9",
        "name": "نجيب",
        "raw": "نجيب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "أحمد بن  محمد بن عبد المعطي بن محمد بن محمد بن أحمد بن عثمان",
        "raw": "أحمد بن  محمد بن عبد المعطي بن محمد بن محمد بن أحمد بن عثمان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "رشيد",
        "raw": "رشيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد بن  محمد بن عبد المعطي",
        "raw": "محمد بن  محمد بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الوهاب",
        "raw": "عبد الوهاب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "عبد الخالق",
        "raw": "عبد الخالق",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "حسين",
        "raw": "حسين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "صادق",
        "raw": "صادق",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الوهاب بن محمد بن  محمد بن عبد المعطي",
        "raw": "عبد الوهاب بن محمد بن  محمد بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "مصطفى بن محمد بن  محمد بن عبد المعطي",
        "raw": "مصطفى بن محمد بن  محمد بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "عبد الخالق بن  محمد بن  محمد بن عبد المعطي",
        "raw": "عبد الخالق بن  محمد بن  محمد بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "حسين",
        "raw": "حسين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "حسين بن محمد بن  محمد بن عبد المعطي (وأعقب",
        "raw": "حسين بن محمد بن  محمد بن عبد المعطي (وأعقب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "صادق بن  محمد بن  محمد بن عبد المعطي (وأعقب",
        "raw": "صادق بن  محمد بن  محمد بن عبد المعطي (وأعقب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "محمد)",
        "raw": "محمد)",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "إبراهيم بن  محمد بن عبد المعطي",
        "raw": "إبراهيم بن  محمد بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "مختار",
        "raw": "مختار",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "نبيل",
        "raw": "نبيل (شهيد)",
        "isMartyr": true,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": "شهيد"
      },
      {
        "code": "41/5",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/6",
        "name": "سمير",
        "raw": "سمير",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/7",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "عبد الرحمن بن ابراهيم بن  محمد بن عبد المعطي",
        "raw": "عبد الرحمن بن ابراهيم بن  محمد بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "زين العابدين",
        "raw": "زين العابدين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "مختار بن ابراهيم  بن  محمد بن عبد المعطي",
        "raw": "مختار بن ابراهيم  بن  محمد بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "عمر",
        "raw": "عمر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "بدر",
        "raw": "بدر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "محمد",
        "raw": "محمد (شهيد)",
        "isMartyr": true,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": "شهيد"
      },
      {
        "code": "42/4",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "أمين بن ابراهيم بن  محمد بن عبد المعطي",
        "raw": "أمين بن ابراهيم بن  محمد بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "الحمزة",
        "raw": "الحمزة",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "محمد بن إبراهيم بن  محمد بن عبد المعطي",
        "raw": "محمد بن إبراهيم بن  محمد بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "الشهيد نبيل بن ابراهيم بن  محمد بن عبد المعطي",
        "raw": "الشهيد نبيل بن ابراهيم بن  محمد بن عبد المعطي",
        "isMartyr": true,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": "شهيد"
      },
      {
        "code": "42/1",
        "name": "المطهر",
        "raw": "المطهر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/6",
        "name": "سمير بن ابراهيم بن  محمد بن عبد المعطي",
        "raw": "سمير بن ابراهيم بن  محمد بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/1",
        "name": "الهزبر",
        "raw": "الهزبر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "42/3",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/7",
        "name": "مصطفى بن ابراهيم بن  محمد بن عبد المعطي (وأعقب",
        "raw": "مصطفى بن ابراهيم بن  محمد بن عبد المعطي (وأعقب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "عبد المعطي بن  محمد بن عبد المعطي (وأعقب",
        "raw": "عبد المعطي بن  محمد بن عبد المعطي (وأعقب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "عبد السلام بن  محمد بن عبد المعطي (وأعقب",
        "raw": "عبد السلام بن  محمد بن عبد المعطي (وأعقب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/6",
        "name": "عز الدين بن  محمد بن عبد المعطي",
        "raw": "عز الدين بن  محمد بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/7",
        "name": "عبد الرؤوف بن  محمد بن عبد المعطي",
        "raw": "عبد الرؤوف بن  محمد بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/8",
        "name": "أمين بن  محمد بن عبد المعطي",
        "raw": "أمين بن  محمد بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/9",
        "name": "نجيب بن  محمد بن عبد المعطي",
        "raw": "نجيب بن  محمد بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-33",
    "mainBranch": "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "40/1",
        "name": "عبد العزيز بن يحي بن عبد المعطي",
        "raw": "عبد العزيز بن يحي بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "أمين",
        "raw": "أمين",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "عمر",
        "raw": "عمر",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "أمين بن عبد العزيز بن يحي بن عبد المعطي وأعقب:",
        "raw": "أمين بن عبد العزيز بن يحي بن عبد المعطي وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "عمر بن عبد العزيز بن يحي بن عبد المعطي وأعقب:",
        "raw": "عمر بن عبد العزيز بن يحي بن عبد المعطي وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "محمد بن عبد العزيز بن يحي بن عبد المعطي وأعقب:",
        "raw": "محمد بن عبد العزيز بن يحي بن عبد المعطي وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "أحمد بن يحي بن عبد المعطي",
        "raw": "أحمد بن يحي بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "عدنان",
        "raw": "عدنان",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "عبد الملك",
        "raw": "عبد الملك",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "فضل",
        "raw": "فضل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "سهل",
        "raw": "سهل",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/6",
        "name": "عبد الله",
        "raw": "عبد الله",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "محمد بن أحمد بن يحي بن عبد المعطي (وأعقب: علوي, عيدروس, معاذ)",
        "raw": "محمد بن أحمد بن يحي بن عبد المعطي (وأعقب: علوي, عيدروس, معاذ)",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "علي بن يحي بن عبد المعطي",
        "raw": "علي بن يحي بن عبد المعطي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/1",
        "name": "مصطفى",
        "raw": "مصطفى",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "مختار",
        "raw": "مختار",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/3",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/4",
        "name": "صادق",
        "raw": "صادق",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "زيد",
        "raw": "زيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/6",
        "name": "يوسف",
        "raw": "يوسف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/7",
        "name": "عبد الوهاب",
        "raw": "عبد الوهاب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/8",
        "name": "خالد",
        "raw": "خالد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/2",
        "name": "مختار بن علي بن يحي بن عبد المعطي (وأعقب: محمد, عمر, علي)",
        "raw": "مختار بن علي بن يحي بن عبد المعطي (وأعقب: محمد, عمر, علي)",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "41/5",
        "name": "زيد بن علي بن يحي بن عبد المعطي (وأعقب: مطهر)",
        "raw": "زيد بن علي بن يحي بن عبد المعطي (وأعقب: مطهر)",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "عبد الرحمن بن  يحي بن عبد المعطي (أعقب",
        "raw": "عبد الرحمن بن  يحي بن عبد المعطي (أعقب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/5",
        "name": "عبد الوهاب بن يحي بن عبد المعطي (أعقب",
        "raw": "عبد الوهاب بن يحي بن عبد المعطي (أعقب",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/6",
        "name": "محمد بن يحي بن عبد المعطي (أعقب:",
        "raw": "محمد بن يحي بن عبد المعطي (أعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/7",
        "name": "عبد الجبار بن يحي بن عبد المعطي (أعقب:",
        "raw": "عبد الجبار بن يحي بن عبد المعطي (أعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-34",
    "mainBranch": "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "40/1",
        "name": "إبراهيم",
        "raw": "إبراهيم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "إبراهيم بن احمد بن عبد المعطي وأعقب:",
        "raw": "إبراهيم بن احمد بن عبد المعطي وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "محمد بن احمد بن عبد المعطي وأعقب:",
        "raw": "محمد بن احمد بن عبد المعطي وأعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-35",
    "mainBranch": "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "40/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "حسن",
        "raw": "حسن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "هاشم",
        "raw": "هاشم",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "عبد العزيز",
        "raw": "عبد العزيز",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "محمد بن عبد الجليل بن عبد المعطي (أعقب: عبد الفتاح -> هشام, عدنان, أحمد)",
        "raw": "محمد بن عبد الجليل بن عبد المعطي (أعقب: عبد الفتاح -> هشام, عدنان, أحمد)",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-36",
    "mainBranch": "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "40/1",
        "name": "علي",
        "raw": "علي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد العزيز",
        "raw": "عبد العزيز",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/3",
        "name": "عبد الله",
        "raw": "عبد الله (×)",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "40/4",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/1",
        "name": "علي بن محمد بن شرف (أعقب:",
        "raw": "علي بن محمد بن شرف (أعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/2",
        "name": "عبد العزيز بن محمد بن شرف (أعقب:",
        "raw": "عبد العزيز بن محمد بن شرف (أعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "40/4",
        "name": "محمد بن محمد بن شرف (أعقب:",
        "raw": "محمد بن محمد بن شرف (أعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-37",
    "mainBranch": "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "39/1",
        "name": "محمد الكبير",
        "raw": "محمد الكبير",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "يحي",
        "raw": "يحي",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "محمد الصغير",
        "raw": "محمد الصغير",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/4",
        "name": "عبد الحفيظ",
        "raw": "عبد الحفيظ(×)",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      },
      {
        "code": "39/1",
        "name": "محمد الكبير (أعقب:",
        "raw": "محمد الكبير (أعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "يحي بن حزام (أعقب:",
        "raw": "يحي بن حزام (أعقب:",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "محمد الصغير (أعقب: أحمد [-> محمد], عبد العزيز, وجيه, عبد الإله, عبد الرحمن, فاضل, عدنان)",
        "raw": "محمد الصغير (أعقب: أحمد [-> محمد], عبد العزيز, وجيه, عبد الإله, عبد الرحمن, فاضل, عدنان)",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-38",
    "mainBranch": "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "39/1",
        "name": "محمد",
        "raw": "محمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/2",
        "name": "عبد الرحمن",
        "raw": "عبد الرحمن",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "أحمد",
        "raw": "أحمد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/1",
        "name": "محمد بن وجيه وأعقب: (وجيه -> سمير; جمال -> جميل [-> سيف], محمد [-> عبد الرؤوف, جمال], محمود [-> جمال]; عبد الحكيم -> زكريا [شهيد], علي; جميل -> محمد; هشام -> كريم, محمد, مصطفى; فوزي -> أشرف, وجيه الدين, محمد; ماجد ; محمد -> أحمد, عبد الله)",
        "raw": "محمد بن وجيه وأعقب: (وجيه -> سمير; جمال -> جميل [-> سيف], محمد [-> عبد الرؤوف, جمال], محمود [-> جمال]; عبد الحكيم -> زكريا [شهيد], علي; جميل -> محمد; هشام -> كريم, محمد, مصطفى; فوزي -> أشرف, وجيه الدين, محمد; ماجد (×); محمد -> أحمد, عبد الله)",
        "isMartyr": true,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "شهيد"
      },
      {
        "code": "39/2",
        "name": "أحمد بن وجيه وأعقب: (عبد الإله -> محمد, أحمد, مجد; عبد الملك -> وجيه, حسين, بشير, مالك, أحمد; فضل -> حمزة)",
        "raw": "أحمد بن وجيه وأعقب: (عبد الإله -> محمد, أحمد, مجد; عبد الملك -> وجيه, حسين, بشير, مالك, أحمد; فضل -> حمزة)",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "39/3",
        "name": "عبد الرحمن بن وجيه (أعقب: هيثم)",
        "raw": "عبد الرحمن بن وجيه (أعقب: هيثم)",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      }
    ]
  },
  {
    "id": "sec-39",
    "mainBranch": "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "38/1",
        "name": "محمد.",
        "raw": "محمد.",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبداللطيف",
        "raw": "عبداللطيف",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "سعيد",
        "raw": "سعيد",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/1",
        "name": "محمد بن عبدالواسع وأعقب: (",
        "raw": "محمد بن عبدالواسع وأعقب: (",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/2",
        "name": "عبد اللطيف بن عبد الواسع (أعقب: محمد بن قائد -> محمود [-> عبد الوهاب, أحمد (-> عبد الله), محمد, المتوكل, عبد الله], يونس [-> محمد, شهاب])",
        "raw": "عبد اللطيف بن عبد الواسع (أعقب: محمد بن قائد -> محمود [-> عبد الوهاب, أحمد (-> عبد الله), محمد, المتوكل, عبد الله], يونس [-> محمد, شهاب])",
        "isMartyr": false,
        "noOffspring": false,
        "hasDaughters": false,
        "notes": null
      },
      {
        "code": "38/3",
        "name": "سعيد بن عبد الواسع (أعقب: قاسم -> عبد الجليل [-> عبد الرحمن, عمار (-> محمد, علي), مبارك, أمين], محمد [-> باسم (-> حسين, علي, بدر الدين), إبراهيم, عبد الوهاب, محمد], أحمد [-> عبد الرحمن (-> محمد), محمد, عبد الملك], عبد الله [-> أمجد, مجد, قاسم]; إبراهيم -> مصطفى [شهيد -> زيد, حسين], عبد الملك [-> محمد], عبد الرحمن [-> مصطفى, مرتضى, إبراهيم]; أحمد )",
        "raw": "سعيد بن عبد الواسع (أعقب: قاسم -> عبد الجليل [-> عبد الرحمن, عمار (-> محمد, علي), مبارك, أمين], محمد [-> باسم (-> حسين, علي, بدر الدين), إبراهيم, عبد الوهاب, محمد], أحمد [-> عبد الرحمن (-> محمد), محمد, عبد الملك], عبد الله [-> أمجد, مجد, قاسم]; إبراهيم -> مصطفى [شهيد -> زيد, حسين], عبد الملك [-> محمد], عبد الرحمن [-> مصطفى, مرتضى, إبراهيم]; أحمد (×))",
        "isMartyr": true,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "شهيد"
      }
    ]
  },
  {
    "id": "sec-40",
    "mainBranch": "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "37/1",
        "name": "عبد المجيد (أعقب: بشر -> عبد القادر [-> محمد -> عبد الوهاب (-> الحسين, الحسن, مصطفى), عبد الرحمن (-> محمد, السجاد, أبو طالب, أحمد, زيد, المرتضى)], عبد الشافي , عبد الله [-> إبراهيم (-> عبد الرحمن [-> كمال], محمد [شهيد], خليل, فؤاد, بشر, وسيم), حمود (-> ماجد), أحمد , محمد (-> أحمد, أمجد)])",
        "raw": "عبد المجيد (أعقب: بشر -> عبد القادر [-> محمد -> عبد الوهاب (-> الحسين, الحسن, مصطفى), عبد الرحمن (-> محمد, السجاد, أبو طالب, أحمد, زيد, المرتضى)], عبد الشافي (×), عبد الله [-> إبراهيم (-> عبد الرحمن [-> كمال], محمد [شهيد], خليل, فؤاد, بشر, وسيم), حمود (-> ماجد), أحمد (×), محمد (-> أحمد, أمجد)])",
        "isMartyr": true,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "شهيد"
      },
      {
        "code": "37/2",
        "name": "عبد اللطيف (أعقب: أحمد -> عبد الإله ; محمد -> عبد الرب [-> قاسم (-> محمد, فؤاد [-> أحمد, محمد, رياض])], عبد الغني [-> أحمد -> صادق (-> وليد, محمد), عبد الرؤوف (-> أحمد)], عبد الواحد [-> عبد الغفار , محمد (-> منير, زياد, عبد الحكيم )])",
        "raw": "عبد اللطيف (أعقب: أحمد -> عبد الإله (×); محمد -> عبد الرب [-> قاسم (-> محمد, فؤاد [-> أحمد, محمد, رياض])], عبد الغني [-> أحمد -> صادق (-> وليد, محمد), عبد الرؤوف (-> أحمد)], عبد الواحد [-> عبد الغفار (×), محمد (-> منير, زياد, عبد الحكيم (×))])",
        "isMartyr": false,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "لم يعقب"
      }
    ]
  },
  {
    "id": "sec-41",
    "mainBranch": "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين",
    "sectionTitle": "أعقاب",
    "parentCode": "",
    "parentName": "أعقاب",
    "entries": [
      {
        "code": "37/1",
        "name": "عبد الواحد (أعقب: سيف -> سعيد [-> محمد, عبد الله (-> بسام شهيد), عبد السلام], محمد [-> مصطفى , عبد الرحمن (-> أحمد, محمد), عبد الحكيم (-> أحمد, جوهر)], عبد الغني [-> أمين, محمد, محمود], عبد الكريم ; عبد المجيد -> سعيد , أحمد [-> محمد (-> عبد العزيز [-> معتز], محمد), سعيد (-> محمد, نبيل, فؤاد, أمين)], حسن [-> عبد الكريم (-> عبد الله [-> جميل, معمر], محمد, فؤاد), عبده, عبد الوهاب, محمد (-> إبراهيم, عبد الرحمن)]; عبد الإله; عبد الله ; علي )",
        "raw": "عبد الواحد (أعقب: سيف -> سعيد [-> محمد, عبد الله (-> بسام شهيد), عبد السلام], محمد [-> مصطفى (×), عبد الرحمن (-> أحمد, محمد), عبد الحكيم (-> أحمد, جوهر)], عبد الغني [-> أمين, محمد, محمود], عبد الكريم (×); عبد المجيد -> سعيد (×), أحمد [-> محمد (-> عبد العزيز [-> معتز], محمد), سعيد (-> محمد, نبيل, فؤاد, أمين)], حسن [-> عبد الكريم (-> عبد الله [-> جميل, معمر], محمد, فؤاد), عبده, عبد الوهاب, محمد (-> إبراهيم, عبد الرحمن)]; عبد الإله; عبد الله (×); علي (×))",
        "isMartyr": true,
        "noOffspring": true,
        "hasDaughters": false,
        "notes": "شهيد"
      }
    ]
  }
];
