export interface SequentialChildEntry {
  code: string;
  name: string;
  generation: number;
  isMartyr?: boolean;
  noOffspring?: boolean;
  hasDaughters?: boolean;
  hasChildrenFollowup?: boolean;
  notes?: string;
}

export interface SequentialBranchBlock {
  id: string;
  mainBranch: string;
  fatherCode: string;
  fatherName: string;
  fatherFullName: string;
  generation: number;
  children: SequentialChildEntry[];
}

export const sequentialLineageBlocks: SequentialBranchBlock[] = [
  {
    "id": "seq-block-1",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "أحمد الجنيد بن محمد جمال الدين",
    "fatherFullName": "أعقاب: أحمد الجنيد بن محمد جمال الدين",
    "generation": 30,
    "children": [
      {
        "code": "31/1",
        "name": "محسن",
        "generation": 31
      },
      {
        "code": "31/2",
        "name": "فاضل",
        "generation": 31
      },
      {
        "code": "31/3",
        "name": "رضوان",
        "generation": 31
      },
      {
        "code": "31/4",
        "name": "عمر",
        "generation": 31
      },
      {
        "code": "31/5",
        "name": "عبد الله",
        "generation": 31
      }
    ]
  },
  {
    "id": "seq-block-2",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "31/1",
    "fatherName": "محسن بن أحمد الجنيد بن محمد جمال الدين بن عبد الرحمن بن أحمد بن عبد الله الحضرمي",
    "fatherFullName": "أعقاب: محسن بن أحمد الجنيد بن محمد جمال الدين بن عبد الرحمن بن أحمد بن عبد الله الحضرمي",
    "generation": 31,
    "children": [
      {
        "code": "32/1",
        "name": "عبَّاد",
        "generation": 32
      },
      {
        "code": "32/2",
        "name": "عطاء",
        "generation": 32
      }
    ]
  },
  {
    "id": "seq-block-3",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "32/1",
    "fatherName": "عبَّاد بن محسن بن أحمد الجنيد بن محمد جمال الدين",
    "fatherFullName": "أعقاب: عبَّاد بن محسن بن أحمد الجنيد بن محمد جمال الدين",
    "generation": 32,
    "children": [
      {
        "code": "33/1",
        "name": "عبد الله",
        "generation": 33
      },
      {
        "code": "33/2",
        "name": "حسن",
        "generation": 33
      },
      {
        "code": "33/3",
        "name": "جيلان",
        "generation": 33
      }
    ]
  },
  {
    "id": "seq-block-4",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-5",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن ناجي بن حسن بن عثمان بن سعيد بن عبد الله",
    "fatherFullName": "أعقاب: محمد بن ناجي بن حسن بن عثمان بن سعيد بن عبد الله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "جميل",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "عبد الوهاب",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "فهد",
        "generation": 41
      },
      {
        "code": "41/7",
        "name": "شكري",
        "generation": 41
      },
      {
        "code": "41/8",
        "name": "أمين",
        "generation": 41
      },
      {
        "code": "41/9",
        "name": "بلال",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-6",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "محمد بن محمد بن ناجي",
    "fatherFullName": "أعقاب: محمد بن محمد بن ناجي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "عصام",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "عدنان",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "يوسف",
        "generation": 42
      },
      {
        "code": "42/4",
        "name": "رضوان",
        "generation": 42
      },
      {
        "code": "42/5",
        "name": "صدام",
        "generation": 42
      },
      {
        "code": "42/6",
        "name": "أحمد",
        "generation": 42
      },
      {
        "code": "42/7",
        "name": "أسامة",
        "generation": 42
      },
      {
        "code": "42/8",
        "name": "زكريا",
        "generation": 42
      },
      {
        "code": "43/9",
        "name": "أنس",
        "generation": 43
      }
    ]
  },
  {
    "id": "seq-block-7",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "أحمد بن محمد بن ناجي",
    "fatherFullName": "أعقاب: أحمد بن محمد بن ناجي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "مطهر",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "أمين",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "مرتضى",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-8",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "جميل بن محمد بن ناجي",
    "fatherFullName": "أعقاب: جميل بن محمد بن ناجي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "مراد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "جمال",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-9",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "عبد الوهاب بن محمد بن ناجي بن حسن",
    "fatherFullName": "أعقاب: عبد الوهاب بن محمد بن ناجي بن حسن",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "عمرو",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "عمار",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/4",
        "name": "عامر",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-10",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/5",
    "fatherName": "عبد الرحمن بن محمد بن ناجي بن حسن",
    "fatherFullName": "عبد الرحمن بن محمد بن ناجي بن حسن",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-11",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/6",
    "fatherName": "فهد بن محمد بن ناجي بن حسن",
    "fatherFullName": "أعقاب: فهد بن محمد بن ناجي بن حسن",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "مهند",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-12",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد الله بن ناجي بن حسن بن عثمان بن سعيد بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: عبد الله بن ناجي بن حسن بن عثمان بن سعيد بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "نعمان",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "علي",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-13",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "نعمان بن عبد الله بن ناجي بن حسن",
    "fatherFullName": "أعقاب: نعمان بن عبد الله بن ناجي بن حسن",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "حاشد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "أربد",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "عبَّاد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-14",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "علي بن عبد الله بن ناجي بن حسن",
    "fatherFullName": "أعقاب: علي بن عبد الله بن ناجي بن حسن",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-15",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "محمد بن حسن بن عثمان بن سعيد بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: محمد بن حسن بن عثمان بن سعيد بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "(أعقاب بنات)",
        "generation": 40,
        "hasDaughters": true
      }
    ]
  },
  {
    "id": "seq-block-16",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عثمان بن حسن بن عثمان بن سعيد بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: عثمان بن حسن بن عثمان بن سعيد بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد القوي",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد السلام",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الرؤوف",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-17",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد القوي بن عثمان بن حسن",
    "fatherFullName": "أعقاب: عبد القوي بن عثمان بن حسن",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-18",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "أحمد بن عبد القوي بن عثمان بن حسن",
    "fatherFullName": "أعقاب: أحمد بن عبد القوي بن عثمان بن حسن",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "مازن",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-19",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "محمد بن عبد القوي بن عثمان بن حسن",
    "fatherFullName": "أعقاب: محمد بن عبد القوي بن عثمان بن حسن",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "إياد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "عصام",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "أحمد",
        "generation": 42
      },
      {
        "code": "42/4",
        "name": "عدنان",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-20",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد السلام بن عثمان بن حسن",
    "fatherFullName": "عبد السلام بن عثمان بن حسن",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-21",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد الرؤوف بن عثمان بن حسن",
    "fatherFullName": "عبد الرؤوف بن عثمان بن حسن",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-22",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الجليل بن عبد الوهاب بن عبد الواحد بن قحطان بن ناجي بن عبد الله بن محمد بن عبد الله بن عبَّاد...",
    "fatherFullName": "أعقاب: عبد الجليل بن عبد الوهاب بن عبد الواحد بن قحطان بن ناجي بن عبد الله بن محمد بن عبد الله بن عبَّاد...",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "يحي",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "ابراهيم",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-23",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "يحي بن عبد الجليل بن عبد الوهاب..",
    "fatherFullName": "أعقاب: يحي بن عبد الجليل بن عبد الوهاب..",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد العزيز",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد الوهاب",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-24",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "إبراهيم بن عبد الجليل بن عبد الوهاب..",
    "fatherFullName": "أعقاب: إبراهيم بن عبد الجليل بن عبد الوهاب..",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-25",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "حسن بن عبد الملك بن سعيد بن قحطان بن ناجي بن عبد الله بن محمد بن عبد الله بن عبَّاد..",
    "fatherFullName": "أعقاب: حسن بن عبد الملك بن سعيد بن قحطان بن ناجي بن عبد الله بن محمد بن عبد الله بن عبَّاد..",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الوهاب",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "محمود",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-26",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الله بن حسن بن عبد الملك..",
    "fatherFullName": "أعقاب: عبد الله بن حسن بن عبد الملك..",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-27",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "أحمد حسن بن عبد الملك",
    "fatherFullName": "أعقاب: أحمد حسن بن عبد الملك",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "إبراهيم ــ",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-28",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/2",
    "fatherName": "منصر",
    "fatherFullName": "أعقاب: منصر",
    "generation": 36,
    "children": [
      {
        "code": "36/3",
        "name": "محمد",
        "generation": 36,
        "noOffspring": true
      },
      {
        "code": "35/3",
        "name": "حيدر",
        "generation": 35,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-29",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن عبد الغني بن محمد بن عبد اللطيف بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد...",
    "fatherFullName": "أعقاب: محمد بن عبد الغني بن محمد بن عبد اللطيف بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد...",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "مصطفى",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-30",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "هاشم بن عبد الخالق بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد..",
    "fatherFullName": "أعقاب: هاشم بن عبد الخالق بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد..",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-31",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبد العزيز بن عبد الخالق بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عباد",
    "fatherFullName": "عبد العزيز بن عبد الخالق بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عباد",
    "generation": 38,
    "children": []
  },
  {
    "id": "seq-block-32",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/3",
    "fatherName": "عبد السلام بن عبد الخالق بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "عبد السلام بن عبد الخالق بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 38,
    "children": []
  },
  {
    "id": "seq-block-33",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "عبد الباري بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عباد",
    "fatherFullName": "أعقاب: عبد الباري بن عبد الوهاب بن عيدروس بن عبد الله بن محمد بن عبد الله بن عباد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "أحمد",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "محمد",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "يحي",
        "generation": 38
      },
      {
        "code": "38/4",
        "name": "مصطفى",
        "generation": 38
      },
      {
        "code": "38/5",
        "name": "عدنان",
        "generation": 38
      },
      {
        "code": "38/6",
        "name": "عمر",
        "generation": 38
      },
      {
        "code": "38/7",
        "name": "حسين",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-34",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "أحمد بن عبد الباري بن عبد الوهاب بن عيدروس ....",
    "fatherFullName": "أعقاب: أحمد بن عبد الباري بن عبد الوهاب بن عيدروس ....",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "مصطفى",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "يحي",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-35",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "محمد بن عبد الباري بن عبد الوهاب بن عيدروس...",
    "fatherFullName": "أعقاب: محمد بن عبد الباري بن عبد الوهاب بن عيدروس...",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "إبراهيم",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "الحمزة",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-36",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/4",
    "fatherName": "مصطفى بن عبد الباري بن عبد الوهاب بن عيدروس...",
    "fatherFullName": "أعقاب: مصطفى بن عبد الباري بن عبد الوهاب بن عيدروس...",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "مهند",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-37",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/5",
    "fatherName": "عدنان بن عبد الباري بن عبد الوهاب بن عيدروس...",
    "fatherFullName": "أعقاب: عدنان بن عبد الباري بن عبد الوهاب بن عيدروس...",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-38",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/3",
    "fatherName": "محمد بن عبد الوهاب بن عيدروس..",
    "fatherFullName": "أعقاب: محمد بن عبد الوهاب بن عيدروس..",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الصمد",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-39",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الصمد بن محمد بن عبد الوهاب بن عيدروس...",
    "fatherFullName": "أعقاب: عبد الصمد بن محمد بن عبد الوهاب بن عيدروس...",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "فاروق",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-40",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/1",
    "fatherName": "سعيد بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: سعيد بن عيدروس بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "عبد الله",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "إبراهيم",
        "generation": 37
      },
      {
        "code": "37/3",
        "name": "هاشم",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-41",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "عبد الله بن سعيد بن عيدروس...",
    "fatherFullName": "أعقاب: عبد الله بن سعيد بن عيدروس...",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الرحيم",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-42",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الرحيم بن عبد الله بن سعيد بن عيدروس...",
    "fatherFullName": "أعقاب: عبد الرحيم بن عبد الله بن سعيد بن عيدروس...",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "محمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-43",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "إبراهيم بن سعيد بن عيدروس...",
    "fatherFullName": "أعقاب: إبراهيم بن سعيد بن عيدروس...",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الله",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-44",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الله بن إبراهيم بن سعيد بن عيدروس...",
    "fatherFullName": "أعقاب: عبد الله بن إبراهيم بن سعيد بن عيدروس...",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "مصطفى",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عيدروس",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "مراد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-45",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/3",
    "fatherName": "هاشم بن سعيد بن عيدروس...",
    "fatherFullName": "أعقاب: هاشم بن سعيد بن عيدروس...",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد السلام",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-46",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد السلام بن هاشم بن سعيد بن عيدروس",
    "fatherFullName": "أعقاب: عبد السلام بن هاشم بن سعيد بن عيدروس",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "زكريا",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "منير",
        "generation": 39
      },
      {
        "code": "39/5",
        "name": "مصطفى ــ",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-47",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "هاشم بن محمد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد....",
    "fatherFullName": "أعقاب: هاشم بن محمد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد....",
    "generation": 30,
    "children": [
      {
        "code": "38/1",
        "name": "صالح",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبد الجليل",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "إسماعيل",
        "generation": 38
      },
      {
        "code": "38/4",
        "name": "عبد الحق",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-48",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "صالح بن هاشم بن محمد بن علي....",
    "fatherFullName": "أعقاب: صالح بن هاشم بن محمد بن علي....",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد لا شيء",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "أمين",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "سعيد",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "عبد الباسط",
        "generation": 39
      },
      {
        "code": "39/5",
        "name": "عبد الصمد",
        "generation": 39
      },
      {
        "code": "39/6",
        "name": "عبد الرحمن",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-49",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "أمين بن صالح بن هاشم...",
    "fatherFullName": "أعقاب: أمين بن صالح بن هاشم...",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "مهدي",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "ماجد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-50",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "مهدي بن أمين بن صالح بن هاشم...",
    "fatherFullName": "أعقاب: مهدي بن أمين بن صالح بن هاشم...",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-51",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن أمين بن صالح بن هاشم",
    "fatherFullName": "محمد بن أمين بن صالح بن هاشم",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-52",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "ماجد بن أمين بن صالح بن هاشم",
    "fatherFullName": "ماجد بن أمين بن صالح بن هاشم",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-53",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "سعيد بن صالح بن هاشم",
    "fatherFullName": "أعقاب: سعيد بن صالح بن هاشم",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "هائل",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "هاشم",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-54",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن سعيد بن صالح بن هاشم",
    "fatherFullName": "أعقاب: محمد بن سعيد بن صالح بن هاشم",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "مصطفى",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-55",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "هائل بن سعيد بن صالح بن هاشم",
    "fatherFullName": "هائل بن سعيد بن صالح بن هاشم",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-56",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "هاشم بن سعيد بن صالح بن هاشم",
    "fatherFullName": "هاشم بن سعيد بن صالح بن هاشم",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-57",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/4",
    "fatherName": "عبد الباسط بن صالح بن هاشم...",
    "fatherFullName": "أعقاب: عبد الباسط بن صالح بن هاشم...",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الحكيم",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-58",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/5",
    "fatherName": "عبد الصمد بن صالح بن هاشم....",
    "fatherFullName": "أعقاب: عبد الصمد بن صالح بن هاشم....",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "مروان",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "أسامة",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-59",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "مروان بن عبد الصمد بن صالح بن هاشم...",
    "fatherFullName": "مروان بن عبد الصمد بن صالح بن هاشم...",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-60",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "اسامة بن عبد الصمد بن صالح بن هاشم....",
    "fatherFullName": "اسامة بن عبد الصمد بن صالح بن هاشم....",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-61",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/6",
    "fatherName": "عبد الرحمن بن صالح بن هاشم",
    "fatherFullName": "أعقاب: عبد الرحمن بن صالح بن هاشم",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-62",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبد الجليل بن هاشم بن محمد بن علي",
    "fatherFullName": "أعقاب: عبد الجليل بن هاشم بن محمد بن علي",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد العزيز",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الله",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "معمر",
        "generation": 39
      },
      {
        "code": "39/5",
        "name": "محمود",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-63",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد العزيز بن عبد الجليل بن هاشم",
    "fatherFullName": "أعقاب: عبد العزيز بن عبد الجليل بن هاشم",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "هيثم",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "قصي",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-64",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الله بن عبد الجليل بن هاشم بن محمد بن علي...",
    "fatherFullName": "أعقاب: عبد الله بن عبد الجليل بن هاشم بن محمد بن علي...",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "فواز",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-65",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "محمد بن عبد الجليل بن هاشم بن محمد بن علي...",
    "fatherFullName": "أعقاب: محمد بن عبد الجليل بن هاشم بن محمد بن علي...",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "مروان",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-66",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/3",
    "fatherName": "إسماعيل بن هاشم بن محمد بن علي...",
    "fatherFullName": "أعقاب: إسماعيل بن هاشم بن محمد بن علي...",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "مصطفى",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "جميل",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الخالق",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/5",
        "name": "هاشم",
        "generation": 39
      },
      {
        "code": "39/6",
        "name": "أمين",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-67",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "مصطفى بن إسماعيل بن هاشم",
    "fatherFullName": "مصطفى بن إسماعيل بن هاشم",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-68",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "جميل بن إسماعيل بن هاشم",
    "fatherFullName": "أعقاب: جميل بن إسماعيل بن هاشم",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عدي",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "قصي",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-69",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبد الحق بن هاشم بن محمد بن علي...",
    "fatherFullName": "أعقاب: عبد الحق بن هاشم بن محمد بن علي...",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الحكيم",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-70",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن عبد الحق بن هاشم",
    "fatherFullName": "أعقاب: محمد بن عبد الحق بن هاشم",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "علاء",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "ماجد",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "أمجد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-71",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "أحمد بن عبد الحق بن هاشم",
    "fatherFullName": "أحمد بن عبد الحق بن هاشم",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-72",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد الحكيم بن عبد الحق بن هاشم",
    "fatherFullName": "عبد الحكيم بن عبد الحق بن هاشم",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-73",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "غالب بن محمد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: غالب بن محمد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 30,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الكريم",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبد العزيز",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-74",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الكريم بن غالب بن محمد بن علي",
    "fatherFullName": "أعقاب: عبد الكريم بن غالب بن محمد بن علي",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "إبراهيم",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "علي",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "محمود",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "عبد الباري",
        "generation": 39
      },
      {
        "code": "39/5",
        "name": "عبد الله",
        "generation": 39
      },
      {
        "code": "39/6",
        "name": "عبد الرحمن",
        "generation": 39
      },
      {
        "code": "39/7",
        "name": "محمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-75",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "إبراهيم بن عبد الكريم بن غالب بن محمد بن علي",
    "fatherFullName": "أعقاب: إبراهيم بن عبد الكريم بن غالب بن محمد بن علي",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الفتاح",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-76",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "علي بن عبد الكريم بن غالب بن محمد بن علي",
    "fatherFullName": "أعقاب: علي بن عبد الكريم بن غالب بن محمد بن علي",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أحمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-77",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "محمود بن عبد الكريم بن غالب بن محمد بن علي",
    "fatherFullName": "أعقاب: محمود بن عبد الكريم بن غالب بن محمد بن علي",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "فكري",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "شكري",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "فهمي",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-78",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/4",
    "fatherName": "عبد الباري بن عبد الكريم بن غالب بن محمد بن علي",
    "fatherFullName": "أعقاب: عبد الباري بن عبد الكريم بن غالب بن محمد بن علي",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد العزيز",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمود",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "مختار",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "رمزي",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-79",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/5",
    "fatherName": "عبد الله بن عبد الكريم بن غالب بن محمد بن علي",
    "fatherFullName": "عبد الله بن عبد الكريم بن غالب بن محمد بن علي",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-80",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/6",
    "fatherName": "عبد الرحمن بن عبد الكريم بن غالب بن محمد بن علي",
    "fatherFullName": "أعقاب: عبد الرحمن بن عبد الكريم بن غالب بن محمد بن علي",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "فؤاد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-81",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/7",
    "fatherName": "محمد بن عبد الكريم بن غالب بن محمد بن علي",
    "fatherFullName": "محمد بن عبد الكريم بن غالب بن محمد بن علي",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-82",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبد العزيز بن غالب بن محمد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: عبد العزيز بن غالب بن محمد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-83",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن عبد العزيز بن غالب بن محمد بن علي",
    "fatherFullName": "أعقاب: محمد بن عبد العزيز بن غالب بن محمد بن علي",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الرحمن",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "طاهر",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "أمين",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-84",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الرحمن بن محمد بن عبد العزيز بن غالب بن محمد بن علي",
    "fatherFullName": "أعقاب: عبد الرحمن بن محمد بن عبد العزيز بن غالب بن محمد بن علي",
    "generation": 40,
    "children": [
      {
        "code": "40/1",
        "name": "أيمن",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "مالك",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-85",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد الله بن محمد بن عبد العزيز بن غالب بن محمد بن علي",
    "fatherFullName": "عبد الله بن محمد بن عبد العزيز بن غالب بن محمد بن علي",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-86",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/3",
    "fatherName": "قاسم بن محمد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد...",
    "fatherFullName": "أعقاب: قاسم بن محمد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد...",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "شرف",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-87",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "شرف بن قاسم بن محمد بن علي",
    "fatherFullName": "أعقاب: شرف بن قاسم بن محمد بن علي",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الباقي",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-88",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن شرف بن قاسم بن محمد بن علي",
    "fatherFullName": "أعقاب: محمد بن شرف بن قاسم بن محمد بن علي",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الهادي",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "أنور",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الرحمن",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-89",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الباقي بن شرف بن قاسم بن محمد بن علي",
    "fatherFullName": "عبد الباقي بن شرف بن قاسم بن محمد بن علي",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-90",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "علي بن إبراهيم بن هائل بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: علي بن إبراهيم بن هائل بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "جميل",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-91",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الله بن علي بن إبراهيم بن هائل بن حميد...",
    "fatherFullName": "أعقاب: عبد الله بن علي بن إبراهيم بن هائل بن حميد...",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-92",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "محمد بن إبراهيم بن هائل بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: محمد بن إبراهيم بن هائل بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "خالد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الناصر",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "مؤيد",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "مختار",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "مرتضى",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-93",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "خالد بن محمد بن إبراهيم بن هائل بن حميد",
    "fatherFullName": "أعقاب: خالد بن محمد بن إبراهيم بن هائل بن حميد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-94",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الملك بن عبد الرحمن بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: عبد الملك بن عبد الرحمن بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "علي",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-95",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "علي بن عبد الملك بن عبد الرحمن بن حميد",
    "fatherFullName": "أعقاب: علي بن عبد الملك بن عبد الرحمن بن حميد",
    "generation": 39,
    "children": [
      {
        "code": "39/1",
        "name": "حسين",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "زيد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "جلال",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-96",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبد الرقيب بن عبد الرحمن بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: عبد الرقيب بن عبد الرحمن بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الله",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "محفوظ",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-97",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الله بن عبد الرقيب بن عبد الرحمن بن حميد",
    "fatherFullName": "أعقاب: عبد الله بن عبد الرقيب بن عبد الرحمن بن حميد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "فهد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "مؤيد",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "مرتضى",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-98",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "محفوظ بن عبد الرقيب بن عبد الرحمن بن حميد",
    "fatherFullName": "أعقاب: محفوظ بن عبد الرقيب بن عبد الرحمن بن حميد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-99",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/3",
    "fatherName": "هزاع بن عبد الرحمن بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: هزاع بن عبد الرحمن بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "حمود",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-100",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "حمود بن هزاع بن عبد الرحمن بن حميد",
    "fatherFullName": "أعقاب: حمود بن هزاع بن عبد الرحمن بن حميد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "بسام",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "مروان",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-101",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "إبراهيم بن هائل بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: إبراهيم بن هائل بن حميد بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "علي",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "محمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-102",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "سلطان بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: سلطان بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 30,
    "children": [
      {
        "code": "37/1",
        "name": "عبد الله",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "سيف",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "غالب",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-103",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "عبد الله بن سلطان بن علي",
    "fatherFullName": "أعقاب: عبد الله بن سلطان بن علي",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "ناجي",
        "generation": 38,
        "noOffspring": true,
        "hasChildrenFollowup": true
      }
    ]
  },
  {
    "id": "seq-block-104",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "سيف بن سلطان بن علي",
    "fatherFullName": "أعقاب: سيف بن سلطان بن علي",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "علي",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبد ه",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-105",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "علي بن سيف بن سلطان بن علي",
    "fatherFullName": "أعقاب: علي بن سيف بن سلطان بن علي",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "منصور",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "سعيد",
        "generation": 39
      },
      {
        "code": "39/5",
        "name": "عبد العزيز",
        "generation": 39
      },
      {
        "code": "39/6",
        "name": "أمين",
        "generation": 39
      },
      {
        "code": "39/7",
        "name": "محمود",
        "generation": 39
      },
      {
        "code": "39/8",
        "name": "عبد الرحمن",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-106",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن علي بن سيف بن سلطان",
    "fatherFullName": "أعقاب: محمد بن علي بن سيف بن سلطان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد العزيز",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الإله",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "هاشم",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "محمود",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-107",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "منصور بن علي بن سيف بن سلطان",
    "fatherFullName": "أعقاب: منصور بن علي بن سيف بن سلطان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "(أعقاب بنات)",
        "generation": 40,
        "hasDaughters": true
      }
    ]
  },
  {
    "id": "seq-block-108",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "أحمد بن علي بن سيف بن سلطان",
    "fatherFullName": "أعقاب: أحمد بن علي بن سيف بن سلطان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "(لا عقب له)",
        "generation": 40,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-109",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/4",
    "fatherName": "سعيد بن علي بن سيف بن سلطان",
    "fatherFullName": "أعقاب: سعيد بن علي بن سيف بن سلطان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الصمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمود",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "زايد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-110",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/5",
    "fatherName": "عبد العزيز بن علي بن سيف بن سلطان",
    "fatherFullName": "أعقاب: عبد العزيز بن علي بن سيف بن سلطان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "فواز",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-111",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/6",
    "fatherName": "أمين بن علي بن سيف بن سلطان",
    "fatherFullName": "أعقاب: أمين بن علي بن سيف بن سلطان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "مهدي",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "محمود",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-112",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/7",
    "fatherName": "محمود بن علي بن سيف بن سلطان",
    "fatherFullName": "أعقاب: محمود بن علي بن سيف بن سلطان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "(أعقاب بنات)",
        "generation": 40,
        "hasDaughters": true
      }
    ]
  },
  {
    "id": "seq-block-113",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/8",
    "fatherName": "عبد الرحمن بن علي بن سيف بن سلطان",
    "fatherFullName": "أعقاب: عبد الرحمن بن علي بن سيف بن سلطان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمود",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-114",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبد ه بن سيف بن سلطان",
    "fatherFullName": "أعقاب: عبد ه بن سيف بن سلطان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "يحي",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-115",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "يحي بن عبد ه بن بن سيف بن سلطان",
    "fatherFullName": "أعقاب: يحي بن عبد ه بن بن سيف بن سلطان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أمين",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "أحمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-116",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أمين بن يحي بن عبد ه بن بن سيف بن سلطان.....",
    "fatherFullName": "أعقاب: أمين بن يحي بن عبد ه بن بن سيف بن سلطان.....",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-117",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "أحمد بن عبده بن سيف بن سلطان",
    "fatherFullName": "أعقاب: أحمد بن عبده بن سيف بن سلطان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "وليد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "خليل",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "معاذ",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "مؤيد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-118",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "خليل بن أحمد بن عبده بن سيف بن سلطان",
    "fatherFullName": "خليل بن أحمد بن عبده بن سيف بن سلطان",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-119",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "معاذ بن أحمد بن عبد ه بن بن سيف بن سلطان",
    "fatherFullName": "معاذ بن أحمد بن عبد ه بن بن سيف بن سلطان",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-120",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "غالب بن سلطان بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: غالب بن سلطان بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الغني",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبده",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "حميد",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-121",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الغني بن غالب بن سلطان",
    "fatherFullName": "أعقاب: عبد الغني بن غالب بن سلطان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "(أعقاب بنات)",
        "generation": 39,
        "hasDaughters": true
      }
    ]
  },
  {
    "id": "seq-block-122",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبده بن غالب بن سلطان",
    "fatherFullName": "أعقاب: عبده بن غالب بن سلطان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "(أعقاب بنات)",
        "generation": 39,
        "hasDaughters": true
      }
    ]
  },
  {
    "id": "seq-block-123",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/3",
    "fatherName": "حميد بن غالب بن سلطان بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: حميد بن غالب بن سلطان بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبده",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-124",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "أحمد بن حميد بن غالب بن سلطان",
    "fatherFullName": "أعقاب: أحمد بن حميد بن غالب بن سلطان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الرحمن",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الله",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-125",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الرحمن بن احمد بن حميد بن غالب بن سلطان",
    "fatherFullName": "أعقاب: عبد الرحمن بن احمد بن حميد بن غالب بن سلطان",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "مؤيد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-126",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبده بن حميد بن غالب بن سلطان",
    "fatherFullName": "أعقاب: عبده بن حميد بن غالب بن سلطان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "(أعقاب بنات)",
        "generation": 40,
        "hasDaughters": true
      }
    ]
  },
  {
    "id": "seq-block-127",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الوهاب بن هزاع بن أحمد بن منصور بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "عبد الوهاب بن هزاع بن أحمد بن منصور بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-128",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "علي بن هزاع بن أحمد بن منصور بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: علي بن هزاع بن أحمد بن منصور بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-129",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن عبد الحميد بن سعيد بن عبد الملك بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: محمد بن عبد الحميد بن سعيد بن عبد الملك بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمود",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "عبد الرحمن",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-130",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الله بن محمد بن عبد الحميد بن سعيد بن عبد الملك",
    "fatherFullName": "أعقاب: عبد الله بن محمد بن عبد الحميد بن سعيد بن عبد الملك",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "مراد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد السلام",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد الرحمن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-131",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمود بن محمد بن عبد الحميد بن سعيد بن عبد الملك",
    "fatherFullName": "أعقاب: محمود بن محمد بن عبد الحميد بن سعيد بن عبد الملك",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-132",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "محمد بن محمد بن عبد الحميد بن سعيد بن عبد الملك .....",
    "fatherFullName": "أعقاب: محمد بن محمد بن عبد الحميد بن سعيد بن عبد الملك .....",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أيمن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-133",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "عبد الرحمن بن محمد بن عبد الحميد بن سعيد بن عبد الملك",
    "fatherFullName": "عبد الرحمن بن محمد بن عبد الحميد بن سعيد بن عبد الملك",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-134",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "منصور بن عبد الحميد بن سعيد بن عبد الملك بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: منصور بن عبد الحميد بن سعيد بن عبد الملك بن علي بن عبد الله بن محمد بن عبد الله بن عبَّاد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الباسط",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الحكيم",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "مصطفى",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-135",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الباسط بن منصور بن عبد الحميد بن سعيد بن عبد الملك",
    "fatherFullName": "أعقاب: عبد الباسط بن منصور بن عبد الحميد بن سعيد بن عبد الملك",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-136",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد الحكيم بن منصور بن عبد الحميد بن سعيد بن عبد الملك",
    "fatherFullName": "أعقاب: عبد الحكيم بن منصور بن عبد الحميد بن سعيد بن عبد الملك",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أسامة",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-137",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/6",
    "fatherName": "منصور بن علي بن عبد الله بن محمد بن عبد الله بن عباد",
    "fatherFullName": "منصور بن علي بن عبد الله بن محمد بن عبد الله بن عباد",
    "generation": 36,
    "children": []
  },
  {
    "id": "seq-block-138",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/7",
    "fatherName": "عبد الملك بن علي بن عبد الله بن محمد بن عبد الله بن عباد",
    "fatherFullName": "عبد الملك بن علي بن عبد الله بن محمد بن عبد الله بن عباد",
    "generation": 36,
    "children": []
  },
  {
    "id": "seq-block-139",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "حسن بن عبَّاد بن محسن بن أحمد الجنيد بن محمد جمال الدين",
    "fatherFullName": "حسن بن عبَّاد بن محسن بن أحمد الجنيد بن محمد جمال الدين",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-140",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "منصور بن علي بن غالب بن عبد القوي علي بن عبد الله بن حسن بن عبَّاد",
    "fatherFullName": "أعقاب: منصور بن علي بن غالب بن عبد القوي علي بن عبد الله بن حسن بن عبَّاد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عصام",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-141",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/1",
    "fatherName": "محمد بن عبد الجبار بن علي بن عبد الله بن حسن بن عبَّاد",
    "fatherFullName": "أعقاب: محمد بن عبد الجبار بن علي بن عبد الله بن حسن بن عبَّاد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "إسماعيل",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "غالب",
        "generation": 37
      },
      {
        "code": "37/3",
        "name": "سيف",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-142",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد بن محسن بن أحمد الجنيد بن محمد جمال الدين",
    "fatherFullName": "حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد بن محسن بن أحمد الجنيد بن محمد جمال الدين",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-143",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "أحمد بن محمد بن حيدر بن حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: أحمد بن محمد بن حيدر بن حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "حمود",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الوهاب",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "سعيد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-144",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن احمد بن محمد بن حيدر",
    "fatherFullName": "أعقاب: محمد بن احمد بن محمد بن حيدر",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "خالد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "حسين",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "معاذ",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-145",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "خالد بن محمد بن احمد بن محمد بن حيدر",
    "fatherFullName": "أعقاب: خالد بن محمد بن احمد بن محمد بن حيدر",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-146",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "حسين بن محمد بن أحمد بن محمد بن حيدر",
    "fatherFullName": "حسين بن محمد بن أحمد بن محمد بن حيدر",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-147",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "معاذ بن محمد بن احمد بن محمد بن حيدر",
    "fatherFullName": "معاذ بن محمد بن احمد بن محمد بن حيدر",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-148",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "حمود احمد بن محمد بن حيدر",
    "fatherFullName": "أعقاب: حمود احمد بن محمد بن حيدر",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد المولى",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الكافي",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "كمال",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-149",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد المولى بن حمود احمد بن محمد بن حيدر",
    "fatherFullName": "أعقاب: عبد المولى بن حمود احمد بن محمد بن حيدر",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "مصطفى",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-150",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد الوهاب احمد بن محمد بن حيدر",
    "fatherFullName": "أعقاب: عبد الوهاب احمد بن محمد بن حيدر",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عامر",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "علوان",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "علاء",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-151",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عامر بن عبد الوهاب احمد بن محمد بن حيدر",
    "fatherFullName": "أعقاب: عامر بن عبد الوهاب احمد بن محمد بن حيدر",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "حسين",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-152",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/4",
    "fatherName": "سعيد احمد بن محمد بن حيدر",
    "fatherFullName": "أعقاب: سعيد احمد بن محمد بن حيدر",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "هيثم",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "أحمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-153",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الرحمن بن إسماعيل بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: عبد الرحمن بن إسماعيل بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الملك",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-154",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "محمد بن إسماعيل بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: محمد بن إسماعيل بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "توفيق",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "محمود",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-155",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "توفيق بن محمد بن إسماعيل",
    "fatherFullName": "توفيق بن محمد بن إسماعيل",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-156",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد الله بن محمد بن إسماعيل",
    "fatherFullName": "أعقاب: عبد الله بن محمد بن إسماعيل",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "مروان",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمود",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-157",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "سعيد بن إسماعيل بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: سعيد بن إسماعيل بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محفوظ",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "هاشم",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "جيلان",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "عدنان",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-158",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد",
    "fatherFullName": "أعقاب: أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عبَّاد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد السلام",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "سعيد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد العليم",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "حميد",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-159",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد السلام بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
    "fatherFullName": "أعقاب: عبد السلام بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "رياض",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "سمير",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-160",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "سعيد بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
    "fatherFullName": "سعيد بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-161",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد العليم بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
    "fatherFullName": "أعقاب: عبد العليم بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "فارس",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "مروان",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-162",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "حميد بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
    "fatherFullName": "حميد بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-163",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/5",
    "fatherName": "محمد بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
    "fatherFullName": "محمد بن أحمد بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-164",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الوهاب بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
    "fatherFullName": "أعقاب: عبد الوهاب بن محمد بن عبد الله بن أحمد بن حسن بن علي بن إسماعيل بن عبد الله بن عباد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "نبيل",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "علي",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-165",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "مهيوب بن سلطان بن مهيوب بن عبادي بن علي بن إسماعيل بن عبد الله بن عباد",
    "fatherFullName": "أعقاب: مهيوب بن سلطان بن مهيوب بن عبادي بن علي بن إسماعيل بن عبد الله بن عباد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "يوسف",
        "generation": 39,
        "hasChildrenFollowup": true
      },
      {
        "code": "39/2",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "حسين",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "علي",
        "generation": 39
      },
      {
        "code": "39/5",
        "name": "سلطان",
        "generation": 39
      },
      {
        "code": "39/6",
        "name": "حسن",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-165-1",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "يوسف بن مهيوب بن سلطان الجنيد",
    "fatherFullName": "أعقاب: يوسف بن مهيوب بن سلطان الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "نبيل",
        "generation": 40,
        "hasChildrenFollowup": true
      },
      {
        "code": "40/2",
        "name": "نادر",
        "generation": 40,
        "hasChildrenFollowup": true
      },
      {
        "code": "40/3",
        "name": "نضال",
        "generation": 40,
        "hasChildrenFollowup": true
      },
      {
        "code": "40/4",
        "name": "نزار",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "ناصر",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "نجيب",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-165-2",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "نبيل بن يوسف بن مهيوب",
    "fatherFullName": "أعقاب: نبيل بن يوسف بن مهيوب",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "نادر",
        "generation": 41,
        "hasChildrenFollowup": true
      },
      {
        "code": "41/2",
        "name": "تيسير",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "منذر",
        "generation": 41,
        "hasChildrenFollowup": true
      },
      {
        "code": "41/4",
        "name": "فجر",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-165-3",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "نادر بن يوسف بن مهيوب",
    "fatherFullName": "أعقاب: نادر بن يوسف بن مهيوب",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "جعفر",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "نصر",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "أواب",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "مآب",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-165-4",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "نضال بن يوسف بن مهيوب",
    "fatherFullName": "أعقاب: نضال بن يوسف بن مهيوب",
    "generation": 40,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-165-5",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "نادر بن نبيل بن يوسف بن مهيوب",
    "fatherFullName": "أعقاب: نادر بن نبيل بن يوسف بن مهيوب",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "البراء",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "فجر",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "آسر",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-165-6",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "منذر بن نبيل بن يوسف بن مهيوب بن سلطان",
    "fatherFullName": "أعقاب: منذر بن نبيل بن يوسف بن مهيوب بن سلطان",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "نبيل",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "زين الاسلام",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/4",
        "name": "أميرالدين",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-166",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "عبد الرب بن مهيوب بن عبادي بن علي بن إسماعيل بن عبد الله بن عباد",
    "fatherFullName": "أعقاب: عبد الرب بن مهيوب بن عبادي بن علي بن إسماعيل بن عبد الله بن عباد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "سعيد",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-167",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "سعيد بن عبد الرب",
    "fatherFullName": "سعيد بن عبد الرب",
    "generation": 38,
    "children": []
  },
  {
    "id": "seq-block-168",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "جيلان بن عبَّاد بن محسن بن أحمد الجنيد بن محمد جمال الدين",
    "fatherFullName": "جيلان بن عبَّاد بن محسن بن أحمد الجنيد بن محمد جمال الدين",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-169",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "إسماعيل بن حسن بن إسماعيل بن عباس بن علي بن جيلان بن عبَّاد",
    "fatherFullName": "أعقاب: إسماعيل بن حسن بن إسماعيل بن عباس بن علي بن جيلان بن عبَّاد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "محمد",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-170",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "محمد بن إسماعيل بن حسن بن إسماعيل",
    "fatherFullName": "أعقاب: محمد بن إسماعيل بن حسن بن إسماعيل",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "إسماعيل",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "سعيد",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "عبد الكريم",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-171",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "أحمد بن محمد بن إسماعيل بن حسن بن إسماعيل",
    "fatherFullName": "أعقاب: أحمد بن محمد بن إسماعيل بن حسن بن إسماعيل",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-172",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن أحمد بن محمد بن إسماعيل",
    "fatherFullName": "أعقاب: محمد بن أحمد بن محمد بن إسماعيل",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الخالق",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "خليل",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "مراد",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "وليد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-173",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الخالق بن محمد بن أحمد بن محمد بن إسماعيل",
    "fatherFullName": "أعقاب: عبد الخالق بن محمد بن أحمد بن محمد بن إسماعيل",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "علاء",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "مصطفى",
        "generation": 42,
        "isMartyr": true
      },
      {
        "code": "42/3",
        "name": "زيد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-174",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "إسماعيل بن محمد بن إسماعيل بن حسن بن إسماعيل",
    "fatherFullName": "أعقاب: إسماعيل بن محمد بن إسماعيل بن حسن بن إسماعيل",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الرحمن",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-175",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الرحمن بن إسماعيل بن محمد بن إسماعيل",
    "fatherFullName": "أعقاب: عبد الرحمن بن إسماعيل بن محمد بن إسماعيل",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "ماجد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "وليد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-176",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "محمد بن عبد الرحمن بن إسماعيل",
    "fatherFullName": "أعقاب: محمد بن عبد الرحمن بن إسماعيل",
    "generation": 41,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-177",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "سعيد بن محمد بن إسماعيل بن حسن بن إسماعيل",
    "fatherFullName": "أعقاب: سعيد بن محمد بن إسماعيل بن حسن بن إسماعيل",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الله",
        "generation": 40,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-178",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن سعيد بن محمد بن إسماعيل",
    "fatherFullName": "أعقاب: محمد بن سعيد بن محمد بن إسماعيل",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرؤوف",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "سلطان",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "وهيب",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-179",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الرؤوف بن محمد بن سعيد بن محمد بن إسماعيل",
    "fatherFullName": "أعقاب: عبد الرؤوف بن محمد بن سعيد بن محمد بن إسماعيل",
    "generation": 41,
    "children": [
      {
        "code": "41/1",
        "name": "ذياب",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-180",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "سلطان بن محمد بن سعيد بن محمد بن إسماعيل",
    "fatherFullName": "أعقاب: سلطان بن محمد بن سعيد بن محمد بن إسماعيل",
    "generation": 41,
    "children": [
      {
        "code": "41/1",
        "name": "زايد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-181",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/4",
    "fatherName": "عبد الكريم بن محمد بن إسماعيل بن حسن بن إسماعيل",
    "fatherFullName": "أعقاب: عبد الكريم بن محمد بن إسماعيل بن حسن بن إسماعيل",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "سعيد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "هزاع",
        "generation": 40,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-182",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "سعيد بن عبد الكريم بن محمد بن إسماعيل",
    "fatherFullName": "أعقاب: سعيد بن عبد الكريم بن محمد بن إسماعيل",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "فيصل",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "قاسم",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عارف",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "سمير",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "عبد الكافي",
        "generation": 41
      },
      {
        "code": "41/7",
        "name": "يوسف",
        "generation": 41
      },
      {
        "code": "41/8",
        "name": "داؤود",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-183",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "قاسم بن سعيد بن عبد الكريم بن محمد بن إسماعيل",
    "fatherFullName": "أعقاب: قاسم بن سعيد بن عبد الكريم بن محمد بن إسماعيل",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "مولاي علي",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-184",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "أحمد بن منصور بن حسن بن إسماعيل بن عباس",
    "fatherFullName": "أعقاب: أحمد بن منصور بن حسن بن إسماعيل بن عباس",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الله",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-185",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الله بن أحمد بن منصور بن حسن بن إسماعيل بن عباس",
    "fatherFullName": "أعقاب: عبد الله بن أحمد بن منصور بن حسن بن إسماعيل بن عباس",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "يوسف",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "مؤيد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عمر",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-186",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبد الجليل بن أحمد بن منصور بن حسن بن إسماعيل بن عباس",
    "fatherFullName": "أعقاب: عبد الجليل بن أحمد بن منصور بن حسن بن إسماعيل بن عباس",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الكريم",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "يحي",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-187",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن عبد الجليل بن أحمد بن منصور بن حسن بن إسماعيل بن عباس",
    "fatherFullName": "أعقاب: محمد بن عبد الجليل بن أحمد بن منصور بن حسن بن إسماعيل بن عباس",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "وائل",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-188",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الكريم بن عبد الجليل بن أحمد بن منصور",
    "fatherFullName": "أعقاب: عبد الكريم بن عبد الجليل بن أحمد بن منصور",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "مصطفى",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-189",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "أحمد بن عبد الجليل بن أحمد بن منصور",
    "fatherFullName": "أعقاب: أحمد بن عبد الجليل بن أحمد بن منصور",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "جمال",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-190",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/4",
    "fatherName": "يحي عبد الجليل بن أحمد بن منصور",
    "fatherFullName": "أعقاب: يحي عبد الجليل بن أحمد بن منصور",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "يوسف",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "علي",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "موسى",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-191",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/3",
    "fatherName": "محمد بن منصور بن حسن بن إسماعيل بن عباس",
    "fatherFullName": "محمد بن منصور بن حسن بن إسماعيل بن عباس",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-192",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "علي بن هزاع بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان بن عبَّاد",
    "fatherFullName": "أعقاب: علي بن هزاع بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان بن عبَّاد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "جلال",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "يعقوب",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "حسن",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "حسين",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "يونس وذكرنا ذلك للتنبيه..",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-193",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "أحمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان بن عباد",
    "fatherFullName": "أعقاب: أحمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان بن عباد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "ابراهيم",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "حمود",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "عبد الحكيم",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-194",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "إبراهيم بن أحمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "fatherFullName": "أعقاب: إبراهيم بن أحمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "وائل",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-195",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/3",
    "fatherName": "محمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "fatherFullName": "أعقاب: محمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الباري",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "علي",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الله",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-196",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الباري بن محمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "fatherFullName": "عبد الباري بن محمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-197",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "علي بن محمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "fatherFullName": "أعقاب: علي بن محمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أسامة",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "يونس",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-198",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد الله بن محمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "fatherFullName": "أعقاب: عبد الله بن محمد بن عبد الوهاب بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "احمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-199",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/3",
    "fatherName": "محمد بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "fatherFullName": "أعقاب: محمد بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الواسع",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "علي",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-200",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الواسع بن محمد بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "fatherFullName": "أعقاب: عبد الواسع بن محمد بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "أمين",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الرحمن",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "ماجد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-201",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "أمين بن عبد الواسع بن محمد بن حسن",
    "fatherFullName": "أعقاب: أمين بن عبد الواسع بن محمد بن حسن",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "أسامة",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "مهدي",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "مروان",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-202",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "محمد بن عبد الواسع بن محمد بن حسن",
    "fatherFullName": "أعقاب: محمد بن عبد الواسع بن محمد بن حسن",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "حسن",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "يعقوب",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-203",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "علي بن محمد بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "fatherFullName": "أعقاب: علي بن محمد بن حسن بن إسماعيل بن عباس بن علي بن جيلان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "إبراهيم",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-204",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "فاضل بن عبد الله بن حيدر بن عبد الله بن علي بن جيلان بن عبَّاد",
    "fatherFullName": "فاضل بن عبد الله بن حيدر بن عبد الله بن علي بن جيلان بن عبَّاد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-205",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أحمد بن محمد بن فاضل",
    "fatherFullName": "أعقاب: أحمد بن محمد بن فاضل",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "فاضل",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-206",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "محمد بن أحمد بن محمد بن فاضل",
    "fatherFullName": "أعقاب: محمد بن أحمد بن محمد بن فاضل",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "إبراهيم",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-207",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "أحمد بن عبد العزيز بن فاضل",
    "fatherFullName": "أعقاب: أحمد بن عبد العزيز بن فاضل",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "يوسف",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "خليل",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "صفوان",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "عمار",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "عمرو",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-208",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "علي بن عبد العزيز بن فاضل",
    "fatherFullName": "أعقاب: علي بن عبد العزيز بن فاضل",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "الحسين",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "أسامة",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "مروان",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-209",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن عبد العزيز بن فاضل",
    "fatherFullName": "محمد بن عبد العزيز بن فاضل",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-210",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد السلام بن مهيوب بن فاضل",
    "fatherFullName": "أعقاب: عبد السلام بن مهيوب بن فاضل",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "رضا",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "مرتضى",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-211",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "وجيه بن مهيوب بن فاضل",
    "fatherFullName": "أعقاب: وجيه بن مهيوب بن فاضل",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-212",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "معمر بن مهيوب بن فاضل",
    "fatherFullName": "أعقاب: معمر بن مهيوب بن فاضل",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "حيدر",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-213",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "نوري بن مهيوب بن فاضل",
    "fatherFullName": "أعقاب: نوري بن مهيوب بن فاضل",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الله",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-214",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "هاشم بن عبد الرحمن بن فاضل",
    "fatherFullName": "أعقاب: هاشم بن عبد الرحمن بن فاضل",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "مهند",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-215",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "محمود بن عبد الرحمن بن فاضل (شهيد)",
    "fatherFullName": "أعقاب: محمود بن عبد الرحمن بن فاضل (شهيد)",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "جمال",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-216",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/5",
    "fatherName": "عارف بن حمود بن فاضل",
    "fatherFullName": "عارف بن حمود بن فاضل",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-217",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/5",
    "fatherName": "رياض بن حمود بن فاضل",
    "fatherFullName": "أعقاب: رياض بن حمود بن فاضل",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-218",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "محمد بن سعيد بن  حيدر بن عبد الله بن علي بن جيلان بن عبَّاد",
    "fatherFullName": "محمد بن سعيد بن  حيدر بن عبد الله بن علي بن جيلان بن عبَّاد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-219",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "أمين بن محمد بن سعيد بن حيدر محمد",
    "fatherFullName": "أعقاب: أمين بن محمد بن سعيد بن حيدر محمد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-220",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "محسن بن محمد بن سعيد بن حيدر",
    "fatherFullName": "أعقاب: محسن بن محمد بن سعيد بن حيدر",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "فضل",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-221",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "محسن بن حيدر بن عبد الله بن علي بن جيلان بن عبَّاد",
    "fatherFullName": "محسن بن حيدر بن عبد الله بن علي بن جيلان بن عبَّاد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-222",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الجليل بن محيا بن أحمد بن محسن بن حيدر",
    "fatherFullName": "أعقاب: عبد الجليل بن محيا بن أحمد بن محسن بن حيدر",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-223",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "محمد بن عبد الجليل بن محيا",
    "fatherFullName": "أعقاب: محمد بن عبد الجليل بن محيا",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "مبروك",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-224",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "علي بن محيا بن أحمد بن محسن بن حيدر",
    "fatherFullName": "أعقاب: علي بن محيا بن أحمد بن محسن بن حيدر",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الله",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "أمين",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-225",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الله بن علي بن محيا يد",
    "fatherFullName": "عبد الله بن علي بن محيا يد",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-226",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "عبد الرحمن بن علي بن محيا",
    "fatherFullName": "أعقاب: عبد الرحمن بن علي بن محيا",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "علي",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-227",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبد الرحمن بن محسن بن حيدر بن عبد الله بن علي  بن جيلان بن عبَّاد",
    "fatherFullName": "عبد الرحمن بن محسن بن حيدر بن عبد الله بن علي  بن جيلان بن عبَّاد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-228",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "سعيد بن أحمد بن عبد الرحمن بن محسن بن حيدر",
    "fatherFullName": "أعقاب: سعيد بن أحمد بن عبد الرحمن بن محسن بن حيدر",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد الحكيم",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "خالد",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "عمر",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "صلاح",
        "generation": 41
      },
      {
        "code": "41/7",
        "name": "موسى",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-229",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "محمد بن سعيد بن أحمد بن عبد الرحمن",
    "fatherFullName": "محمد بن سعيد بن أحمد بن عبد الرحمن",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-230",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "عبد الحكيم بن سعيد بن أحمد",
    "fatherFullName": "أعقاب: عبد الحكيم بن سعيد بن أحمد",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "أيمن",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-231",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "خالد بن سعيد بن أحمد بن عبد الرحمن",
    "fatherFullName": "خالد بن سعيد بن أحمد بن عبد الرحمن",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-232",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "عمر بن سعيد بن أحمد بن عبد الرحمن",
    "fatherFullName": "أعقاب: عمر بن سعيد بن أحمد بن عبد الرحمن",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "الحمزة",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-233",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/5",
    "fatherName": "أحمد بن سعيد بن أحمد بن عبد الرحمن",
    "fatherFullName": "أحمد بن سعيد بن أحمد بن عبد الرحمن",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-234",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد الجليل بن أحمد بن عبد الرحمن",
    "fatherFullName": "عبد الجليل بن أحمد بن عبد الرحمن",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-235",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد الله بن أحمد بن عبد الرحمن",
    "fatherFullName": "أعقاب: عبد الله بن أحمد بن عبد الرحمن",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "سلمان",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-236",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "عبد الكريم بن أحمد بن عبد الرحمن",
    "fatherFullName": "أعقاب: عبد الكريم بن أحمد بن عبد الرحمن",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "زكريا",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "أسامة",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-237",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبد الغني بن حيدر بن عبد الله بن علي بن جيلان بن عبَّاد",
    "fatherFullName": "عبد الغني بن حيدر بن عبد الله بن علي بن جيلان بن عبَّاد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-238",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن محمد بن عبد الغني بن حيدر",
    "fatherFullName": "أعقاب: محمد بن محمد بن عبد الغني بن حيدر",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "مروان",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "يوسف",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-239",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "علي بن عبد الله بن علي بن جيلان بن عبَّاد",
    "fatherFullName": "علي بن عبد الله بن علي بن جيلان بن عبَّاد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-240",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن عبد الرقيب بن محسن بن علي بن عبد الله بن علي بن جيلان",
    "fatherFullName": "أعقاب: محمد بن عبد الرقيب بن محسن بن علي بن عبد الله بن علي بن جيلان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "محي الدين",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "عدنان",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "عايد",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "حسيب",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-241",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الله بن محمد بن عبد الرقيب بن محسن",
    "fatherFullName": "أعقاب: عبد الله بن محمد بن عبد الرقيب بن محسن",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "صفوان",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "صخر",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "محمود",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "عمر",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-242",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "عدنان بن محمد بن عبد الرقيب بن محسن",
    "fatherFullName": "أعقاب: عدنان بن محمد بن عبد الرقيب بن محسن",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-243",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "قاسم بن عبد الرقيب بن محسن",
    "fatherFullName": "أعقاب: قاسم بن عبد الرقيب بن محسن",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أنيس",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "حافظ",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "رياض",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "مراد",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "أنس",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-244",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أنيس بن قاسم بن عبد الرقيب",
    "fatherFullName": "أعقاب: أنيس بن قاسم بن عبد الرقيب",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "باسم",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "بسام",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-245",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "حافظ بن قاسم بن عبد الرقيب",
    "fatherFullName": "أعقاب: حافظ بن قاسم بن عبد الرقيب",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-246",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "رياض بن قاسم بن عبد الرقيب",
    "fatherFullName": "أعقاب: رياض بن قاسم بن عبد الرقيب",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عمرو",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-247",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "مراد بن قاسم بن عبد الرقيب",
    "fatherFullName": "أعقاب: مراد بن قاسم بن عبد الرقيب",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-248",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد الهادي بن عبد الرقيب بن محسن",
    "fatherFullName": "أعقاب: عبد الهادي بن عبد الرقيب بن محسن",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "رمزي",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "رضوان",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "أسامة",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "أنس",
        "generation": 40
      },
      {
        "code": "40/7",
        "name": "معاذ",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-249",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "رمزي بن عبد الهادي بن عبد الرقيب",
    "fatherFullName": "أعقاب: رمزي بن عبد الهادي بن عبد الرقيب",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "ضياء",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-250",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبد اللطيف بن محسن بن علي بن عبد الله بن علي بن جيلان بن عبَّاد",
    "fatherFullName": "عبد اللطيف بن محسن بن علي بن عبد الله بن علي بن جيلان بن عبَّاد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-251",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "أحمد بن عبد اللطيف بن محسن",
    "fatherFullName": "أعقاب: أحمد بن عبد اللطيف بن محسن",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عادل",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-252",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عادل بن أحمد بن عبد اللطيف بن محسن",
    "fatherFullName": "عادل بن أحمد بن عبد اللطيف بن محسن",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-253",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "طه بن عبد اللطيف بن محسن",
    "fatherFullName": "أعقاب: طه بن عبد اللطيف بن محسن",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "بسام",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "جلال",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "رضوان",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "إدريس",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "بليغ",
        "generation": 40
      },
      {
        "code": "40/7",
        "name": "اسامة",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-254",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "بسام بن طه بن عبد اللطيف",
    "fatherFullName": "أعقاب: بسام بن طه بن عبد اللطيف",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "طاهر",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-255",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد العزيز بن عبد اللطيف بن محسن",
    "fatherFullName": "أعقاب: عبد العزيز بن عبد اللطيف بن محسن",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "بندر",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "بلال",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عمار",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "مشعل",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "عمرو",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-256",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/4",
    "fatherName": "علي بن عبد اللطيف بن محسن",
    "fatherFullName": "أعقاب: علي بن عبد اللطيف بن محسن",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "مصطفى",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "ماجد",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "أمجد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-257",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبد الله بن عبد الخبير بن محسن بن علي بن عبد الله بن علي  بن جيلان بن عبَّاد",
    "fatherFullName": "أعقاب: عبد الله بن عبد الخبير بن محسن بن علي بن عبد الله بن علي  بن جيلان بن عبَّاد",
    "generation": 30,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الرحمن",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "جواد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "فارس",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "مالك",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "هيثم",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-258",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الرحمن بن عبد الله بن عبد الخبير",
    "fatherFullName": "أعقاب: عبد الرحمن بن عبد الله بن عبد الخبير",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أنيس",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-259",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبد الولي بن علي بن عبد الله بن علي بن جيلان بن عبَّاد",
    "fatherFullName": "عبد الولي بن علي بن عبد الله بن علي بن جيلان بن عبَّاد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-260",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "مهيوب",
    "fatherFullName": "مهيوب",
    "generation": 38,
    "children": []
  },
  {
    "id": "seq-block-261",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "جيلان بن  حيدر بن عبد الله بن علي  بن جيلان بن عبًّاد",
    "fatherFullName": "جيلان بن  حيدر بن عبد الله بن علي  بن جيلان بن عبًّاد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-262",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "إسماعيل بن عبد الله بن جيلان بن حيدر",
    "fatherFullName": "أعقاب: إسماعيل بن عبد الله بن جيلان بن حيدر",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "سعيد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "يحي",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-263",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "احمد بن جيلان بن حيدر",
    "fatherFullName": "أعقاب: احمد بن جيلان بن حيدر",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الوهاب",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "إسماعيل",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-264",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "محسن عبد الله بن عبَّاد",
    "fatherFullName": "محسن عبد الله بن عبَّاد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-265",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "32/2",
    "fatherName": "عطاء بن محسن بن أحمد الجنيد بن محمد جمال الدين بن عبد الرحمن النقل بن أحمد بن عبد الله الحضرمي",
    "fatherFullName": "عطاء بن محسن بن أحمد الجنيد بن محمد جمال الدين بن عبد الرحمن النقل بن أحمد بن عبد الله الحضرمي",
    "generation": 32,
    "children": []
  },
  {
    "id": "seq-block-266",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "سيف بن غالب بن فاضل بن يحي بن محمد بن عطاء",
    "fatherFullName": "سيف بن غالب بن فاضل بن يحي بن محمد بن عطاء",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-267",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "سعيد بن سيف بن غالب",
    "fatherFullName": "سعيد بن سيف بن غالب",
    "generation": 38,
    "children": []
  },
  {
    "id": "seq-block-268",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "أحمد بن سعيد بن سيف بن غالب",
    "fatherFullName": "أعقاب: أحمد بن سعيد بن سيف بن غالب",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "خالد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "فؤاد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عادل",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "عصام",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-269",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "خالد بن أحمد بن سعيد بن سيف بن غالب",
    "fatherFullName": "أعقاب: خالد بن أحمد بن سعيد بن سيف بن غالب",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-270",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الله بن سعيد بن سيف بن غالب",
    "fatherFullName": "أعقاب: عبد الله بن سعيد بن سيف بن غالب",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-271",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "محمد بن سعيد بن سيف بن غالب",
    "fatherFullName": "أعقاب: محمد بن سعيد بن سيف بن غالب",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "سيف",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "حسين",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-272",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/4",
    "fatherName": "علي بن سعيد بن سيف ( لم يعقب)",
    "fatherFullName": "علي بن سعيد بن سيف ( لم يعقب)",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-273",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/5",
    "fatherName": "عبد الوهاب بن سعيد بن سيف",
    "fatherFullName": "عبد الوهاب بن سعيد بن سيف",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-274",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "حسن بن سيف بن غالب",
    "fatherFullName": "أعقاب: حسن بن سيف بن غالب",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-275",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "أحمد بن عبد الكريم بن محسن بن أنعم بن حسان بن محمد بن عطاء",
    "fatherFullName": "أعقاب: أحمد بن عبد الكريم بن محسن بن أنعم بن حسان بن محمد بن عطاء",
    "generation": 30,
    "children": [
      {
        "code": "39/1",
        "name": "إبراهيم",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-276",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "إبراهيم بن أحمد بن عبد الكريم",
    "fatherFullName": "أعقاب: إبراهيم بن أحمد بن عبد الكريم",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "أمين",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "نجيب",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "عمر",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "ضياء",
        "generation": 40
      },
      {
        "code": "40/7",
        "name": "عبد الرحمن",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-277",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن إبراهيم بن أحمد بن عبد الكريم",
    "fatherFullName": "أعقاب: محمد بن إبراهيم بن أحمد بن عبد الكريم",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-278",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "أمين بن إبراهيم بن أحمد بن عبد الكريم",
    "fatherFullName": "أعقاب: أمين بن إبراهيم بن أحمد بن عبد الكريم",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أنور",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "ضياء",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "مروان",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-279",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد الله بن إبراهيم بن أحمد بن عبد الكريم",
    "fatherFullName": "أعقاب: عبد الله بن إبراهيم بن أحمد بن عبد الكريم",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "ضياء",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-280",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "نجيب بن إبراهيم بن أحمد بن عبد الكريم",
    "fatherFullName": "نجيب بن إبراهيم بن أحمد بن عبد الكريم",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-281",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "أحمد بن أحمد بن عبد الكريم",
    "fatherFullName": "أعقاب: أحمد بن أحمد بن عبد الكريم",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الرحمن",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الغني",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "مفضل",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "سامي",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-282",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الرحمن بن احمد بن احمد بن عبد الكريم",
    "fatherFullName": "عبد الرحمن بن احمد بن احمد بن عبد الكريم",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-283",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبد الوهاب بن محمد بن علي بن محمد بن محمد بن حسان بن محمد بن عطاء",
    "fatherFullName": "أعقاب: عبد الوهاب بن محمد بن علي بن محمد بن محمد بن حسان بن محمد بن عطاء",
    "generation": 30,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "فؤاد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-284",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن عبد الوهاب",
    "fatherFullName": "أعقاب: محمد بن عبد الوهاب",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "حسام",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "بسام",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "سيف",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "حسان",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-285",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "فؤاد بن عبد الوهاب",
    "fatherFullName": "أعقاب: فؤاد بن عبد الوهاب",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "تركي",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-286",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "سعيد بن محمد بن علي بن محمد بن محمد بن حسان بن محمد بن عطاء",
    "fatherFullName": "أعقاب: سعيد بن محمد بن علي بن محمد بن محمد بن حسان بن محمد بن عطاء",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد ولا عقب له",
        "generation": 40,
        "noOffspring": true
      },
      {
        "code": "40/2",
        "name": "حاتم",
        "generation": 40
      },
      {
        "code": "39/3",
        "name": "عمر",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-287",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "حاتم بن سعيد بن محمد",
    "fatherFullName": "أعقاب: حاتم بن سعيد بن محمد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "سيف",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-288",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عمر بن سعيد بن محمد",
    "fatherFullName": "أعقاب: عمر بن سعيد بن محمد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "40/2",
        "name": "علي",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-289",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "34/3",
    "fatherName": "إبراهيم بن محمد بن عطاء بن محسن بن أحمد الجنيد بن محمد جمال الدين",
    "fatherFullName": "أعقاب: إبراهيم بن محمد بن عطاء بن محسن بن أحمد الجنيد بن محمد جمال الدين",
    "generation": 34,
    "children": [
      {
        "code": "35/1",
        "name": "راجح",
        "generation": 35
      },
      {
        "code": "35/2",
        "name": "محسن",
        "generation": 35
      }
    ]
  },
  {
    "id": "seq-block-290",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "محمد بن عبد الله بن سيف بن راجح بن إبراهيم بن محمد بن عطاء",
    "fatherFullName": "أعقاب: محمد بن عبد الله بن سيف بن راجح بن إبراهيم بن محمد بن عطاء",
    "generation": 38,
    "children": [
      {
        "code": "38/1",
        "name": "عقيل مات و",
        "generation": 38,
        "noOffspring": true
      },
      {
        "code": "38/2",
        "name": "محمد",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "سامي",
        "generation": 38
      },
      {
        "code": "38/4",
        "name": "عبد الرحمن",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-291",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/2",
    "fatherName": "سعيد بن راجح بن إبراهيم بن محمد بن عطاء",
    "fatherFullName": "أعقاب: سعيد بن راجح بن إبراهيم بن محمد بن عطاء",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "عبد الله",
        "generation": 37
      },
      {
        "code": "36/2",
        "name": "محمد",
        "generation": 36
      }
    ]
  },
  {
    "id": "seq-block-292",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "عبد الله بن سعيد بن راجح بن إبراهيم بن محمد بن عطاء",
    "fatherFullName": "أعقاب: عبد الله بن سعيد بن راجح بن إبراهيم بن محمد بن عطاء",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "حسن",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبد الكريم",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "سعيد",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-293",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "حسن بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "أعقاب: حسن بن عبد الله بن سعيد بن راجح",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الله",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "سعيد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-294",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الله بن حسن بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "أعقاب: عبد الله بن حسن بن عبد الله بن سعيد بن راجح",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عادل",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "شكري",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "هيثم",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "معتوق",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-295",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "أحمد بن حسن بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "أعقاب: أحمد بن حسن بن عبد الله بن سعيد بن راجح",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "مهيوب",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "الجنيد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الرحمن",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-296",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "سعيد بن حسن بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "أعقاب: سعيد بن حسن بن عبد الله بن سعيد بن راجح",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عمر",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-297",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبد الكريم بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "أعقاب: عبد الكريم بن عبد الله بن سعيد بن راجح",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الرحمن",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "إبراهيم",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "عبد الخالق",
        "generation": 39
      },
      {
        "code": "39/5",
        "name": "شمسان",
        "generation": 39,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-298",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الرحمن بن عبد الكريم بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "أعقاب: عبد الرحمن بن عبد الكريم بن عبد الله بن سعيد بن راجح",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "زكريا",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "أسامة",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "إسحاق",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "يعقوب",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-299",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "إبراهيم بن عبد الكريم بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "أعقاب: إبراهيم بن عبد الكريم بن عبد الله بن سعيد بن راجح",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "ماهر",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عدنان",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "بليغ",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "متعب",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-300",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "أحمد بن عبد الكريم بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "أعقاب: أحمد بن عبد الكريم بن عبد الله بن سعيد بن راجح",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "الجنيد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "هيثم",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "موسى",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-301",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/4",
    "fatherName": "عبد الخالق بن عبد الكريم بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "أعقاب: عبد الخالق بن عبد الكريم بن عبد الله بن سعيد بن راجح",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "جمال",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-302",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/3",
    "fatherName": "سعيد بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "أعقاب: سعيد بن عبد الله بن سعيد بن راجح",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الوهاب",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-303",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "أعقاب: عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمود",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد العزيز",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "عدنان",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "زكريا",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-304",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمود بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "أعقاب: محمود بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عدنان",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-305",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد العزيز بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "عبد العزيز بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-306",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "محمد بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "أعقاب: محمد بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "سعيد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-307",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "عدنان بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "عدنان بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-308",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/5",
    "fatherName": "زكريا بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
    "fatherFullName": "زكريا بن عبد الوهاب بن سعيد بن عبد الله بن سعيد بن راجح",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-309",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "محمد بن سعيد بن راجح",
    "fatherFullName": "أعقاب: محمد بن سعيد بن راجح",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الله",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-310",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الله بن محمد بن سعيد بن راجح",
    "fatherFullName": "أعقاب: عبد الله بن محمد بن سعيد بن راجح",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-311",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن عبد الله بن محمد بن سعيد بن راجح",
    "fatherFullName": "أعقاب: محمد بن عبد الله بن محمد بن سعيد بن راجح",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الرحمن",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "صادق",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-312",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الرحمن بن محمد بن عبد الله بن محمد بن سعيد بن راجح",
    "fatherFullName": "أعقاب: عبد الرحمن بن محمد بن عبد الله بن محمد بن سعيد بن راجح",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-313",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "صادق بن محمد بن عبد الله بن محمد بن سعيد بن راجح",
    "fatherFullName": "أعقاب: صادق بن محمد بن عبد الله بن محمد بن سعيد بن راجح",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "علوي",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "زكريا",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-314",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/3",
    "fatherName": "مهيوب بن راجح بن ابراهيم بن محمد بن عطاء",
    "fatherFullName": "أعقاب: مهيوب بن راجح بن ابراهيم بن محمد بن عطاء",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "سعيد",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "محمد",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-315",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "سعيد بن مهيوب بن راجح",
    "fatherFullName": "أعقاب: سعيد بن مهيوب بن راجح",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "معاذ",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "محمد",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "مختار",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-316",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "محمد بن بن مهيوب بن راجح",
    "fatherFullName": "أعقاب: محمد بن بن مهيوب بن راجح",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "أمين",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "النونو",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "أحمد",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-317",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "أمين بن محمد بن بن مهيوب بن راجح",
    "fatherFullName": "أعقاب: أمين بن محمد بن بن مهيوب بن راجح",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "راجح",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-318",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "النونو بن محمد بن بن مهيوب بن راجح",
    "fatherFullName": "النونو بن محمد بن بن مهيوب بن راجح",
    "generation": 38,
    "children": []
  },
  {
    "id": "seq-block-319",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/3",
    "fatherName": "أحمد بن محمد بن مهيوب بن راجح",
    "fatherFullName": "أحمد بن محمد بن مهيوب بن راجح",
    "generation": 38,
    "children": []
  },
  {
    "id": "seq-block-320",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "حمادي بن أحمد بن راجح",
    "fatherFullName": "أعقاب: حمادي بن أحمد بن راجح",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "محمد",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبد الكريم",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-321",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "محمد بن حمادي بن أحمد بن راجح",
    "fatherFullName": "أعقاب: محمد بن حمادي بن أحمد بن راجح",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "أمين",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "مصطفى",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "يوسف",
        "generation": 38
      },
      {
        "code": "38/4",
        "name": "وليد",
        "generation": 38
      },
      {
        "code": "38/5",
        "name": "مراد",
        "generation": 38
      },
      {
        "code": "38/6",
        "name": "عبد الهادي",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-322",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "أمين بن محمد بن حمادي بن أحمد بن راجح",
    "fatherFullName": "أعقاب: أمين بن محمد بن حمادي بن أحمد بن راجح",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "سعيد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "مصطفى",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-323",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "مصطفى بن محمد بن حمادي بن أحمد بن راجح",
    "fatherFullName": "أعقاب: مصطفى بن محمد بن حمادي بن أحمد بن راجح",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عقلان",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-324",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "يوسف بن محمد بن حمادي بن أحمد بن راجح",
    "fatherFullName": "أعقاب: يوسف بن محمد بن حمادي بن أحمد بن راجح",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الحكيم",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "مروان",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-325",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبد الكريم بن حمادي بن أحمد بن راجح",
    "fatherFullName": "أعقاب: عبد الكريم بن حمادي بن أحمد بن راجح",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عفيف",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "رياض",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "وسيم",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "أكرم",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-326",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "محسن بن إبراهيم بن محمد بن عطاء  بن محسن بن أحمد بن محمد جمال الدين الجنيد",
    "fatherFullName": "محسن بن إبراهيم بن محمد بن عطاء  بن محسن بن أحمد بن محمد جمال الدين الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-327",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "جيلان بن محمد بن عطاء بن محسن بن أحمد الجنيد بن محمد جمال الدين",
    "fatherFullName": "جيلان بن محمد بن عطاء بن محسن بن أحمد الجنيد بن محمد جمال الدين",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-328",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "علوان بن عطاء بن محسن بن أحمد الجنيد بن محمد جمال الدين",
    "fatherFullName": "علوان بن عطاء بن محسن بن أحمد الجنيد بن محمد جمال الدين",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-329",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الواسع بن عبد الغني بن حيدر بن سعيد بن يحيى بن علوان بن عطاء",
    "fatherFullName": "أعقاب: عبد الواسع بن عبد الغني بن حيدر بن سعيد بن يحيى بن علوان بن عطاء",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "مقبل",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "مهيوب",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "حسن",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/5",
        "name": "أحمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-330",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "مقبل بن عبد الواسع",
    "fatherFullName": "أعقاب: مقبل بن عبد الواسع",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أمين",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد العزيز",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-331",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أمين بن مقبل بن عبد الواسع",
    "fatherFullName": "أمين بن مقبل بن عبد الواسع",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-332",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد العزيز بن مقبل بن عبد الواسع",
    "fatherFullName": "أعقاب: عبد العزيز بن مقبل بن عبد الواسع",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "نايف",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-333",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "محمد بن مقبل بن عبد الواسع",
    "fatherFullName": "محمد بن مقبل بن عبد الواسع",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-334",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "مهيوب بن عبد الواسع بن عبد الغني بن حيدر بن سعيد بن يحي بن علوان بن عطاء",
    "fatherFullName": "أعقاب: مهيوب بن عبد الواسع بن عبد الغني بن حيدر بن سعيد بن يحي بن علوان بن عطاء",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "سعيد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-335",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "سعيد بن مهيوب بن عبد الواسع",
    "fatherFullName": "أعقاب: سعيد بن مهيوب بن عبد الواسع",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمود",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "رضوان",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عدنان",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "أسامة",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "صلاح",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "مختار",
        "generation": 41
      },
      {
        "code": "41/7",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-336",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "حسن بن عبد الواسع",
    "fatherFullName": "أعقاب: حسن بن عبد الواسع",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-337",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن حسن بن عبد الواسع",
    "fatherFullName": "أعقاب: محمد بن حسن بن عبد الواسع",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "جمال",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "هيثم",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-338",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/4",
    "fatherName": "محمد بن عبد الواسع",
    "fatherFullName": "أعقاب: محمد بن عبد الواسع",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-339",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن محمد بن عبد الواسع",
    "fatherFullName": "أعقاب: محمد بن محمد بن عبد الواسع",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد العزيز",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "خالد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عمار",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "يعقوب",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "عيسى",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-340",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/5",
    "fatherName": "أحمد بن عبد الواسع",
    "fatherFullName": "أعقاب: أحمد بن عبد الواسع",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أمين",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-341",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أمين بن أحمد بن عبد الواسع",
    "fatherFullName": "أمين بن أحمد بن عبد الواسع",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-342",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن أحمد بن عبد الواسع",
    "fatherFullName": "محمد بن أحمد بن عبد الواسع",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-343",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "فاضل بن أحمد الجنيد بن محمد جمال الدين [ قدس ]",
    "fatherFullName": "فاضل بن أحمد الجنيد بن محمد جمال الدين [ قدس ]",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-344",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "رضوان بن أحمد الجنيد بن محمد جمال الدين [ الحشاء والضالع ] ولم يتم موافاتنا بأي معلوما]",
    "fatherFullName": "رضوان بن أحمد الجنيد بن محمد جمال الدين [ الحشاء والضالع ] ولم يتم موافاتنا بأي معلوما]",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-345",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عمر بن أحمد الجنيد بن محمد جمال الدين",
    "fatherFullName": "عمر بن أحمد الجنيد بن محمد جمال الدين",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-346",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "قاسم بن صالح بن مثنى بن قاسم بن صالح بن حسن بن عبد الله بن صالح بن رضوان بن أحمد بن عمر بن أحمد الجنيد بن محمد جمال الدين",
    "fatherFullName": "أعقاب: قاسم بن صالح بن مثنى بن قاسم بن صالح بن حسن بن عبد الله بن صالح بن رضوان بن أحمد بن عمر بن أحمد الجنيد بن محمد جمال الدين",
    "generation": 30,
    "children": [
      {
        "code": "42/1",
        "name": "أحمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "عبد الله",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "صالح",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-347",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "42/1",
    "fatherName": "أحمد بن قاسم بن صالح بن مثنى",
    "fatherFullName": "أحمد بن قاسم بن صالح بن مثنى",
    "generation": 42,
    "children": []
  },
  {
    "id": "seq-block-348",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "42/2",
    "fatherName": "عبد الله بن قاسم بن صالح بن مثنى",
    "fatherFullName": "عبد الله بن قاسم بن صالح بن مثنى",
    "generation": 42,
    "children": []
  },
  {
    "id": "seq-block-349",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "42/3",
    "fatherName": "صالح بن قاسم بن صالح بن مثنى",
    "fatherFullName": "صالح بن قاسم بن صالح بن مثنى",
    "generation": 42,
    "children": []
  },
  {
    "id": "seq-block-350",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبده بن حسن بن محمد بن صلاح بن علي بن مقبل بن عبد الله بن صالح بن رضوان بن أحمد بن عمر بن أحمد الجنيد بن محمد جمال الدين",
    "fatherFullName": "أعقاب: عبده بن حسن بن محمد بن صلاح بن علي بن مقبل بن عبد الله بن صالح بن رضوان بن أحمد بن عمر بن أحمد الجنيد بن محمد جمال الدين",
    "generation": 30,
    "children": [
      {
        "code": "42/1",
        "name": "فواز",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "عمار",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "صلاح",
        "generation": 42
      },
      {
        "code": "42/4",
        "name": "فهد",
        "generation": 42,
        "isMartyr": true,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-351",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "42/1",
    "fatherName": "فواز بن عبده بن حسن",
    "fatherFullName": "أعقاب: فواز بن عبده بن حسن",
    "generation": 42,
    "children": [
      {
        "code": "43/1",
        "name": "هاشم",
        "generation": 43
      }
    ]
  },
  {
    "id": "seq-block-352",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "42/2",
    "fatherName": "عمار بن عبده بن حسن",
    "fatherFullName": "أعقاب: عمار بن عبده بن حسن",
    "generation": 42,
    "children": [
      {
        "code": "43/1",
        "name": "علاء الدين",
        "generation": 43
      },
      {
        "code": "43/2",
        "name": "لقمان",
        "generation": 43
      }
    ]
  },
  {
    "id": "seq-block-353",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "42/3",
    "fatherName": "صلاح بن عبده بن حسن",
    "fatherFullName": "أعقاب: صلاح بن عبده بن حسن",
    "generation": 42,
    "children": [
      {
        "code": "43/1",
        "name": "فهد",
        "generation": 43
      }
    ]
  },
  {
    "id": "seq-block-354",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبد الله بن أحمد الجنيد بن محمد جمال الدين[ الضالع والحشاء وقدس ] ولم يتم موافاتنا بأي معلومات",
    "fatherFullName": "عبد الله بن أحمد الجنيد بن محمد جمال الدين[ الضالع والحشاء وقدس ] ولم يتم موافاتنا بأي معلومات",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-355",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "27/1",
    "fatherName": "شارح البحر",
    "fatherFullName": "أعقاب: شارح البحر",
    "generation": 27,
    "children": [
      {
        "code": "28/1",
        "name": "الشيخ محمد",
        "generation": 28,
        "noOffspring": true,
        "hasChildrenFollowup": true
      },
      {
        "code": "28/2",
        "name": "الشيخ عبيد",
        "generation": 28,
        "noOffspring": true,
        "hasChildrenFollowup": true
      },
      {
        "code": "28/3",
        "name": "الشيخ عبد الرحمن ساكن النقل بن أحمد شارح البحر بن عبد الله الحضرمي",
        "generation": 28,
        "hasChildrenFollowup": true
      }
    ]
  },
  {
    "id": "seq-block-356",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "28/3",
    "fatherName": "الشيخ عبد الرحمن ساكن النقل بن شارح البحر أحمد بن عبد الله الحضرمي",
    "fatherFullName": "أعقاب: الشيخ عبد الرحمن ساكن النقل بن شارح البحر أحمد بن عبد الله الحضرمي",
    "generation": 28,
    "children": [
      {
        "code": "29/1",
        "name": "الشيخ لطف الله ( الملقب اسكندر ) بن عبد الرحمن ساكن النقل بن أحمد بن عبد الله الحضرمي",
        "generation": 29,
        "noOffspring": true,
        "hasChildrenFollowup": true
      },
      {
        "code": "29/2",
        "name": "الشيخ عبد الله بن عبد الرحمن النقل بن شارح البحر أحمد بن عبد الله الحضرمي",
        "generation": 29,
        "noOffspring": true,
        "hasChildrenFollowup": true
      },
      {
        "code": "29/3",
        "name": "الشيخ أحمد بن عبد الرحمن النقل بن شارح البحر أحمد الحضرمي",
        "generation": 29,
        "hasChildrenFollowup": true
      },
      {
        "code": "29/4",
        "name": "الشيخ محمد جمال الدين بن عبد الرحمن النقل بن أحمد شارح البحر بن عبد الله الحضرمي",
        "generation": 29,
        "hasChildrenFollowup": true
      }
    ]
  },
  {
    "id": "seq-block-357",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "29/3",
    "fatherName": "الشيخ أحمد بن عبد الرحمن النقل بن شارح البحر أحمد الحضرمي",
    "fatherFullName": "أعقاب: الشيخ أحمد بن عبد الرحمن النقل بن شارح البحر أحمد الحضرمي",
    "generation": 29,
    "children": [
      {
        "code": "30/1",
        "name": "الجنيد",
        "generation": 30
      },
      {
        "code": "30/2",
        "name": "عمر",
        "generation": 30
      }
    ]
  },
  {
    "id": "seq-block-358",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "30/1",
    "fatherName": "الجنيد بن أحمد بن عبد الرحمن النقل بن شارح البحر الحضرمي [عقبه في جبل حبشي]",
    "fatherFullName": "الجنيد بن أحمد بن عبد الرحمن النقل بن شارح البحر الحضرمي [عقبه في جبل حبشي]",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-359",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "30/2",
    "fatherName": "عمر بن أحمد بن عبد الرحمن النقل بن شارح البحر الحضرمي",
    "fatherFullName": "أعقاب: عمر بن أحمد بن عبد الرحمن النقل بن شارح البحر الحضرمي",
    "generation": 30,
    "children": [
      {
        "code": "31/1",
        "name": "أحمد",
        "generation": 31
      }
    ]
  },
  {
    "id": "seq-block-360",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "29/4",
    "fatherName": "الشيخ محمد جمال الدين بن عبد الرحمن النقل بن أحمد شارح البحر بن عبد الله الحضرمي",
    "fatherFullName": "أعقاب: الشيخ محمد جمال الدين بن عبد الرحمن النقل بن أحمد شارح البحر بن عبد الله الحضرمي",
    "generation": 29,
    "children": [
      {
        "code": "31/1",
        "name": "بشر الجنيد",
        "generation": 31
      },
      {
        "code": "31/2",
        "name": "أحمد الجنيد",
        "generation": 31
      },
      {
        "code": "31/3",
        "name": "عبد الرحمن الجنيد أعقاب بشر الجنيد بن محمد جمال الدين بن عبد الرحمن صاحب النقل بن شارح البحر أحمد بن عبد الله الحضرمي . أعقاب أحمد الجنيد بن محمد جمال الدين بن عبد الرحمن صاحب النقل بن شارح البحر أحمد بن عبد الله الحضرمي .",
        "generation": 31
      }
    ]
  },
  {
    "id": "seq-block-361",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبد الرحمن الجنيد بن محمد جمال الدين بن عبد الرحمن ساكن النقل بن شارح البحر أحمد بن عبد الله  الحضرمي.. .",
    "fatherFullName": "أعقاب: عبد الرحمن الجنيد بن محمد جمال الدين بن عبد الرحمن ساكن النقل بن شارح البحر أحمد بن عبد الله  الحضرمي.. .",
    "generation": 30,
    "children": [
      {
        "code": "31/1",
        "name": "إبراهيم",
        "generation": 31
      },
      {
        "code": "31/2",
        "name": "العيدروس",
        "generation": 31
      },
      {
        "code": "31/3",
        "name": "فاضل",
        "generation": 31
      }
    ]
  },
  {
    "id": "seq-block-362",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": [
      {
        "code": "32/1",
        "name": "عبَّاد",
        "generation": 32,
        "noOffspring": true
      },
      {
        "code": "32/2",
        "name": "محمد",
        "generation": 32
      },
      {
        "code": "32/3",
        "name": "علي",
        "generation": 32
      },
      {
        "code": "32/4",
        "name": "إسماعيل",
        "generation": 32
      },
      {
        "code": "32/5",
        "name": "بشر",
        "generation": 32,
        "noOffspring": true
      },
      {
        "code": "32/6",
        "name": "حاجب",
        "generation": 32
      },
      {
        "code": "32/7",
        "name": "مالك",
        "generation": 32,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-363",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "محمد بن إبراهيم",
    "fatherFullName": "محمد بن إبراهيم",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-364",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": [
      {
        "code": "36/1",
        "name": "فاضل",
        "generation": 36,
        "noOffspring": true
      },
      {
        "code": "36/2",
        "name": "علي",
        "generation": 36,
        "noOffspring": true
      },
      {
        "code": "36/3",
        "name": "محمد",
        "generation": 36
      },
      {
        "code": "36/4",
        "name": "عبد الملك",
        "generation": 36
      },
      {
        "code": "36/5",
        "name": "عبد الله",
        "generation": 36
      },
      {
        "code": "36/6",
        "name": "الجنيد",
        "generation": 36
      },
      {
        "code": "36/7",
        "name": "عثمان",
        "generation": 36
      },
      {
        "code": "36/8",
        "name": "فضل",
        "generation": 36
      },
      {
        "code": "36/9",
        "name": "منصور",
        "generation": 36,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-365",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "محمد بن أحمد بن عثمان بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "محمد بن أحمد بن عثمان بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-366",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "علي بن محمد بن أحمد بن عثمان (×)",
    "fatherFullName": "علي بن محمد بن أحمد بن عثمان (×)",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-367",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "إبراهيم بن عبد الوهاب بن محمد بن أحمد بن عثمان (×)",
    "fatherFullName": "إبراهيم بن عبد الوهاب بن محمد بن أحمد بن عثمان (×)",
    "generation": 38,
    "children": []
  },
  {
    "id": "seq-block-368",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الرحمن بن عبد الله بن عبد الغني بن عبد الوهاب(×)",
    "fatherFullName": "عبد الرحمن بن عبد الله بن عبد الغني بن عبد الوهاب(×)",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-369",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن عبد الله بن عبد الغني بن عبد الوهاب",
    "fatherFullName": "أعقاب: محمد بن عبد الله بن عبد الغني بن عبد الوهاب",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الوهاب",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد السلام",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "علي",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "خالد",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-370",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الوهاب بن محمد بن عبد الله",
    "fatherFullName": "أعقاب: عبد الوهاب بن محمد بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "الحمزة",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-371",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "عبد السلام بن محمد بن عبد الله",
    "fatherFullName": "أعقاب: عبد السلام بن محمد بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "الرضا",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-372",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "أحمد بن محمد بن عبد الله",
    "fatherFullName": "أعقاب: أحمد بن محمد بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "صدام",
        "generation": 42,
        "isMartyr": true
      },
      {
        "code": "42/2",
        "name": "عدنان",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/4",
        "name": "علي",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-373",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "علي بن محمد بن عبد الله",
    "fatherFullName": "أعقاب: علي بن محمد بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "الحسين",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "زيد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-374",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/5",
    "fatherName": "خالد بن محمد بن عبد الله",
    "fatherFullName": "أعقاب: خالد بن محمد بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "زيد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-375",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/6",
    "fatherName": "محمد بن محمد بن عبد الله",
    "fatherFullName": "محمد بن محمد بن عبد الله",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-376",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد القادر بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد القادر بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الحكيم",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمود",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد الإله",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "الحسين",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "المرتضى",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "المؤيد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-377",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الحكيم بن عبد القادر بن عبد الله",
    "fatherFullName": "أعقاب: عبد الحكيم بن عبد القادر بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "المطهر",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "جوهر",
        "generation": 42,
        "isMartyr": true
      },
      {
        "code": "42/4",
        "name": "أحمد",
        "generation": 42,
        "isMartyr": true
      },
      {
        "code": "42/5",
        "name": "الحمزة",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-378",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "42/1",
    "fatherName": "مطهر بن عبد الحكيم بن عبد القادر",
    "fatherFullName": "أعقاب: مطهر بن عبد الحكيم بن عبد القادر",
    "generation": 42,
    "children": [
      {
        "code": "43/1",
        "name": "محمد",
        "generation": 43
      }
    ]
  },
  {
    "id": "seq-block-379",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "42/1",
    "fatherName": "محمد بن عبد الحكيم بن عبد القادر",
    "fatherFullName": "أعقاب: محمد بن عبد الحكيم بن عبد القادر",
    "generation": 42,
    "children": [
      {
        "code": "43/1",
        "name": "جوهر",
        "generation": 43
      }
    ]
  },
  {
    "id": "seq-block-380",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "محمود بن عبد القادر بن عبد الله",
    "fatherFullName": "أعقاب: محمود بن عبد القادر بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "أحمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "عبد الله",
        "generation": 42
      },
      {
        "code": "42/4",
        "name": "مصطفى",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-381",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "عبد الإله بن عبد القادر بن عبد الله",
    "fatherFullName": "أعقاب: عبد الإله بن عبد القادر بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "زيد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "إبراهيم",
        "generation": 42
      },
      {
        "code": "42/4",
        "name": "إسماعيل",
        "generation": 42
      },
      {
        "code": "42/5",
        "name": "علي",
        "generation": 42
      },
      {
        "code": "42/6",
        "name": "أحمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-382",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "42/3",
    "fatherName": "زيد بن عبد الإله بن عبد القادر",
    "fatherFullName": "أعقاب: زيد بن عبد الإله بن عبد القادر",
    "generation": 42,
    "children": [
      {
        "code": "43/1",
        "name": "الحسين",
        "generation": 43
      }
    ]
  },
  {
    "id": "seq-block-383",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "الحسين بن عبد القادر بن عبد الله",
    "fatherFullName": "أعقاب: الحسين بن عبد القادر بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "علي",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-384",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/5",
    "fatherName": "المرتضى بن عبد القادر بن عبد الله",
    "fatherFullName": "أعقاب: المرتضى بن عبد القادر بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-385",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/6",
    "fatherName": "المؤيد بن عبد القادر بن عبد الله",
    "fatherFullName": "أعقاب: المؤيد بن عبد القادر بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "زيد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-386",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "سعيد بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: سعيد بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أمين",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "نبيل",
        "generation": 41,
        "noOffspring": true
      },
      {
        "code": "41/3",
        "name": "فهد",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "بسام",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "مرتضى",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "مطهر",
        "generation": 41
      },
      {
        "code": "41/7",
        "name": "صدام",
        "generation": 41
      },
      {
        "code": "41/8",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-387",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "أمين بن سعيد بن عبد الله",
    "fatherFullName": "أعقاب: أمين بن سعيد بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "الحمزة",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-388",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "فهد بن سعيد بن عبد الله",
    "fatherFullName": "أعقاب: فهد بن سعيد بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "أحمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-389",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "بسام بن سعيد بن عبد الله",
    "fatherFullName": "بسام بن سعيد بن عبد الله",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-390",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/8",
    "fatherName": "محمد بن سعيد بن عبد الله",
    "fatherFullName": "أعقاب: محمد بن سعيد بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "إبراهيم",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-391",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/5",
    "fatherName": "علي بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: علي بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد الغني",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "عدنان",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "زيد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-392",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الرحمن بن علي بن عبد الله",
    "fatherFullName": "أعقاب: عبد الرحمن بن علي بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "أحمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-393",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "عبد الغني بن علي بن عبد الله",
    "fatherFullName": "أعقاب: عبد الغني بن علي بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "عبد الله",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-394",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/5",
    "fatherName": "أحمد بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: أحمد بن عبد الله بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "هاني",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد الله",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-395",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "هاني بن أحمد بن عبد الله",
    "fatherFullName": "أعقاب: هاني بن أحمد بن عبد الله",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "أحمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-396",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "سيف بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: سيف بن عبد الغني بن عبد الوهاب بن محمد بن أحمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-397",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن سيف بن عبد الغني بن عبد الوهاب",
    "fatherFullName": "أعقاب: محمد بن سيف بن عبد الغني بن عبد الوهاب",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الوهاب",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "عبد الرحمن",
        "generation": 41,
        "isMartyr": true
      },
      {
        "code": "41/5",
        "name": "عبد الرؤوف",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-398",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الوهاب بن محمد بن سيف",
    "fatherFullName": "أعقاب: عبد الوهاب بن محمد بن سيف",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-399",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "محمد بن محمد بن سيف",
    "fatherFullName": "أعقاب: محمد بن محمد بن سيف",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "الحمزة",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-400",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "أحمد بن محمد بن سيف",
    "fatherFullName": "أحمد بن محمد بن سيف",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-401",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "محمد بن محمد بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "محمد بن محمد بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-402",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "محمد بن عبد المعطي بن محمد بن محمد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: محمد بن عبد المعطي بن محمد بن محمد بن أحمد بن عثمان",
    "generation": 30,
    "children": [
      {
        "code": "40/1",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "إبراهيم",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "عبد المعطي",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "عبد السلام",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "عز الدين",
        "generation": 40
      },
      {
        "code": "40/7",
        "name": "عبد الرؤوف",
        "generation": 40
      },
      {
        "code": "40/8",
        "name": "أمين",
        "generation": 40
      },
      {
        "code": "40/9",
        "name": "نجيب",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-403",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أحمد بن محمد بن عبد المعطي بن محمد بن محمد بن أحمد بن عثمان",
    "fatherFullName": "أحمد بن محمد بن عبد المعطي بن محمد بن محمد بن أحمد بن عثمان",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-404",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "رشيد",
    "fatherFullName": "أعقاب: رشيد",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "أحمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-405",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن محمد بن عبد المعطي",
    "fatherFullName": "أعقاب: محمد بن محمد بن عبد المعطي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الوهاب",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "مصطفى",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد الخالق",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "حسين",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "صادق",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-406",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الوهاب بن محمد بن محمد بن عبد المعطي",
    "fatherFullName": "أعقاب: عبد الوهاب بن محمد بن محمد بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "أحمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-407",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "مصطفى بن محمد بن محمد بن عبد المعطي",
    "fatherFullName": "أعقاب: مصطفى بن محمد بن محمد بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "أحمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-408",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "عبد الخالق بن محمد بن محمد بن عبد المعطي",
    "fatherFullName": "أعقاب: عبد الخالق بن محمد بن محمد بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "مصطفى",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "حسين",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-409",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "حسين بن محمد بن محمد بن عبد المعطي",
    "fatherFullName": "حسين بن محمد بن محمد بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-410",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/5",
    "fatherName": "صادق بن محمد بن محمد بن عبد المعطي",
    "fatherFullName": "أعقاب: صادق بن محمد بن محمد بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-411",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "إبراهيم بن محمد بن عبد المعطي",
    "fatherFullName": "أعقاب: إبراهيم بن محمد بن عبد المعطي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "مختار",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "أمين",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "نبيل",
        "generation": 41,
        "isMartyr": true
      },
      {
        "code": "41/5",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "سمير",
        "generation": 41
      },
      {
        "code": "41/7",
        "name": "مصطفى",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-412",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الرحمن بن ابراهيم بن محمد بن عبد المعطي",
    "fatherFullName": "أعقاب: عبد الرحمن بن ابراهيم بن محمد بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "أحمد",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "زين العابدين",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-413",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "مختار بن ابراهيم بن محمد بن عبد المعطي",
    "fatherFullName": "أعقاب: مختار بن ابراهيم بن محمد بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "عمر",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "بدر",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "محمد",
        "generation": 42,
        "isMartyr": true
      },
      {
        "code": "42/4",
        "name": "إبراهيم",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-414",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "أمين بن ابراهيم بن محمد بن عبد المعطي",
    "fatherFullName": "أعقاب: أمين بن ابراهيم بن محمد بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "إبراهيم",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "الحمزة",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-415",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "محمد بن إبراهيم بن محمد بن عبد المعطي",
    "fatherFullName": "أعقاب: محمد بن إبراهيم بن محمد بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "إبراهيم",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "أحمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-416",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/5",
    "fatherName": "الشهيد نبيل بن ابراهيم بن محمد بن عبد المعطي",
    "fatherFullName": "أعقاب: الشهيد نبيل بن ابراهيم بن محمد بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "المطهر",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-417",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/6",
    "fatherName": "سمير بن ابراهيم بن محمد بن عبد المعطي",
    "fatherFullName": "أعقاب: سمير بن ابراهيم بن محمد بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "الهزبر",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "إبراهيم",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-418",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/6",
    "fatherName": "مصطفى بن ابراهيم بن محمد بن عبد المعطي",
    "fatherFullName": "مصطفى بن ابراهيم بن محمد بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-419",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "عبد المعطي بن محمد بن عبد المعطي",
    "fatherFullName": "أعقاب: عبد المعطي بن محمد بن عبد المعطي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-420",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/5",
    "fatherName": "عبد السلام بن محمد بن عبد المعطي",
    "fatherFullName": "أعقاب: عبد السلام بن محمد بن عبد المعطي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "تامر",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": ") )",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-421",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/6",
    "fatherName": "عز الدين بن محمد بن عبد المعطي",
    "fatherFullName": "عز الدين بن محمد بن عبد المعطي",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-422",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/7",
    "fatherName": "عبد الرؤوف بن محمد بن عبد المعطي",
    "fatherFullName": "عبد الرؤوف بن محمد بن عبد المعطي",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-423",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/8",
    "fatherName": "أمين بن محمد بن عبد المعطي",
    "fatherFullName": "أمين بن محمد بن عبد المعطي",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-424",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/9",
    "fatherName": "نجيب بن محمد بن عبد المعطي",
    "fatherFullName": "نجيب بن محمد بن عبد المعطي",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-425",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "يحي بن عبد المعطي بن",
    "fatherFullName": "يحي بن عبد المعطي بن",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-426",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد العزيز بن يحي بن عبد المعطي",
    "fatherFullName": "أعقاب: عبد العزيز بن يحي بن عبد المعطي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أمين",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عمر",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-427",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "أمين بن عبد العزيز بن يحي بن عبد المعطي",
    "fatherFullName": "أعقاب: أمين بن عبد العزيز بن يحي بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "مهدي",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-428",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "42/1",
    "fatherName": "عمر بن عبد العزيز بن يحي بن عبد المعطي",
    "fatherFullName": "أعقاب: عمر بن عبد العزيز بن يحي بن عبد المعطي",
    "generation": 42,
    "children": [
      {
        "code": "42/1",
        "name": "مبارك",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "مبروك",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-429",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "محمد بن عبد العزيز بن يحي بن عبد المعطي",
    "fatherFullName": "أعقاب: محمد بن عبد العزيز بن يحي بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "وسام",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-430",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "أحمد بن يحي بن عبد المعطي",
    "fatherFullName": "أعقاب: أحمد بن يحي بن عبد المعطي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عدنان",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد الملك",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "فضل",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "سهل",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "عبد الله",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-431",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "محمد بن أحمد بن يحي بن عبد المعطي",
    "fatherFullName": "أعقاب: محمد بن أحمد بن يحي بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "علوي",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "عيدروس",
        "generation": 42
      },
      {
        "code": "42/4",
        "name": "معاذ",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-432",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "عدنان بن أحمد بن يحي بن عبد المعطي",
    "fatherFullName": "عدنان بن أحمد بن يحي بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-433",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "عبد الملك بن أحمد بن يحي بن عبد المعطي",
    "fatherFullName": "عبد الملك بن أحمد بن يحي بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-434",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "فضل بن أحمد بن يحي بن عبد المعطي",
    "fatherFullName": "فضل بن أحمد بن يحي بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-435",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/5",
    "fatherName": "سهل بن أحمد بن يحي بن عبد المعطي",
    "fatherFullName": "سهل بن أحمد بن يحي بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-436",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/6",
    "fatherName": "عبد الله بن أحمد بن يحي بن عبد المعطي",
    "fatherFullName": "عبد الله بن أحمد بن يحي بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-437",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "علي بن يحي بن عبد المعطي",
    "fatherFullName": "أعقاب: علي بن يحي بن عبد المعطي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "مصطفى",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "مختار",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "صادق",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "زيد",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "يوسف",
        "generation": 41
      },
      {
        "code": "41/7",
        "name": "عبد الوهاب",
        "generation": 41
      },
      {
        "code": "41/8",
        "name": "خالد >>",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-438",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "مصطفى بن علي بن يحي بن عبد المعطي",
    "fatherFullName": "مصطفى بن علي بن يحي بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-439",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "مختار بن علي بن يحي بن عبد المعطي",
    "fatherFullName": "أعقاب: مختار بن علي بن يحي بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "عمر",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "علي",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-440",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "عبد الرحمن بن علي بن يحي بن",
    "fatherFullName": "عبد الرحمن بن علي بن يحي بن",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-441",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "صادق بن علي بن يحي بن عبد المعطي",
    "fatherFullName": "صادق بن علي بن يحي بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-442",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "42/5",
    "fatherName": "زيد بن علي بن يحي بن عبد المعطي",
    "fatherFullName": "أعقاب: زيد بن علي بن يحي بن عبد المعطي",
    "generation": 42,
    "children": [
      {
        "code": "43/1",
        "name": "أحمد",
        "generation": 43
      },
      {
        "code": "43/2",
        "name": "حمزة",
        "generation": 43
      },
      {
        "code": "43/3",
        "name": "علي",
        "generation": 43
      },
      {
        "code": "43/4",
        "name": "عبد الله",
        "generation": 43
      },
      {
        "code": "43/5",
        "name": "يحيى",
        "generation": 43
      }
    ]
  },
  {
    "id": "seq-block-443",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/6",
    "fatherName": "يوسف بن علي بن يحي بن عبد المعطي",
    "fatherFullName": "يوسف بن علي بن يحي بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-444",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/7",
    "fatherName": "عبد الوهاب بن علي بن يحي بن عبد المعطي",
    "fatherFullName": "عبد الوهاب بن علي بن يحي بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-445",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/8",
    "fatherName": "خالد بن علي بن يحي بن عبد المعطي",
    "fatherFullName": "خالد بن علي بن يحي بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-446",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "عبد الرحمن بن يحي بن عبد المعطي",
    "fatherFullName": "أعقاب: عبد الرحمن بن يحي بن عبد المعطي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أسامة",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "بسام",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-447",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "أسامة بن عبد الرحمن بن يحي بن عبد المعطي",
    "fatherFullName": "أسامة بن عبد الرحمن بن يحي بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-448",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "بسام بن عبد الرحمن بن يحي بن عبد المعطي",
    "fatherFullName": "بسام بن عبد الرحمن بن يحي بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-449",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/5",
    "fatherName": "عبد الوهاب بن يحي بن عبد المعطي",
    "fatherFullName": "أعقاب: عبد الوهاب بن يحي بن عبد المعطي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عمار",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-450",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عمار بن عبد الوهاب بن يحي بن عبد المعطي",
    "fatherFullName": "عمار بن عبد الوهاب بن يحي بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-451",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/6",
    "fatherName": "محمد بن يحي بن عبد المعطي",
    "fatherFullName": "أعقاب: محمد بن يحي بن عبد المعطي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الناصر",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عمار",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد الهادي",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "عبد المعطي",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "أبو طالب",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-452",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الناصر بن محمد بن يحي بن عبد المعطي",
    "fatherFullName": "أعقاب: عبد الناصر بن محمد بن يحي بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "جمال",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "مطهر",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-453",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "عمار بن محمد بن يحي بن عبد المعطي",
    "fatherFullName": "أعقاب: عمار بن محمد بن يحي بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "زيد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-454",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/7",
    "fatherName": "عبد الجبار بن يحي بن عبد المعطي",
    "fatherFullName": "أعقاب: عبد الجبار بن يحي بن عبد المعطي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "أمين >",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-455",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "محمد بن عبد الجبار بن يحي بن عبد المعطي",
    "fatherFullName": "محمد بن عبد الجبار بن يحي بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-456",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "أمين بن عبد الجبار بن يحي بن عبد المعطي",
    "fatherFullName": "أمين بن عبد الجبار بن يحي بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-457",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "أحمد بن عبد المعطي بن الحاج محمد بن محمد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: أحمد بن عبد المعطي بن الحاج محمد بن محمد بن أحمد بن عثمان",
    "generation": 30,
    "children": [
      {
        "code": "40/1",
        "name": "إبراهيم",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-458",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "إبراهيم بن احمد بن عبد المعطي",
    "fatherFullName": "أعقاب: إبراهيم بن احمد بن عبد المعطي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "فؤاد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "محمد",
        "generation": 41,
        "noOffspring": true
      },
      {
        "code": "41/6",
        "name": "فكري",
        "generation": 41
      },
      {
        "code": "41/7",
        "name": "عفيف",
        "generation": 41
      },
      {
        "code": "41/8",
        "name": "مراد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-459",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الرحمن بن إبراهيم بن احمد بن عبد المعطي",
    "fatherFullName": "أعقاب: عبد الرحمن بن إبراهيم بن احمد بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "إبراهيم",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "أحمد",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/4",
        "name": "هيثم",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-460",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "فؤاد بن إبراهيم بن احمد بن عبد المعطي",
    "fatherFullName": "أعقاب: فؤاد بن إبراهيم بن احمد بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "أحمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-461",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "فكري بن إبراهيم بن احمد بن عبد المعطي",
    "fatherFullName": "فكري بن إبراهيم بن احمد بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-462",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "عفيف بن إبراهيم بن احمد بن عبد المعطي",
    "fatherFullName": "أعقاب: عفيف بن إبراهيم بن احمد بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "إبراهيم",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-463",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/5",
    "fatherName": "مراد بن إبراهيم بن احمد بن عبد المعطي",
    "fatherFullName": "مراد بن إبراهيم بن احمد بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-464",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن احمد بن عبد المعطي",
    "fatherFullName": "أعقاب: محمد بن احمد بن عبد المعطي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد الصمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد المعطي",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "رأفت",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-465",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الرحمن بن محمد بن أحمد بن عبد المعطي",
    "fatherFullName": "أعقاب: عبد الرحمن بن محمد بن أحمد بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "أحمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-466",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "عبد الصمد بن محمد بن أحمد بن عبد المعطي",
    "fatherFullName": "عبد الصمد بن محمد بن أحمد بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-467",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "عبد المعطي بن محمد بن أحمد بن عبد المعطي",
    "fatherFullName": "أعقاب: عبد المعطي بن محمد بن أحمد بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "أحمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-468",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "رأفت بن محمد بن أحمد بن عبد المعطي",
    "fatherFullName": "رأفت بن محمد بن أحمد بن عبد المعطي",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-469",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبد الجليل  بن عبد المعطي بن الحاج محمد بن محمد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد الجليل  بن عبد المعطي بن الحاج محمد بن محمد بن أحمد بن عثمان",
    "generation": 30,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "حسن",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "هاشم",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "عبد العزيز",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-470",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن عبد الجليل بن عبد المعطي",
    "fatherFullName": "أعقاب: محمد بن عبد الجليل بن عبد المعطي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الفتاح",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عدنان",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-471",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الفتاح بن محمد بن عبد الجليل بن عبد المعطي",
    "fatherFullName": "أعقاب: عبد الفتاح بن محمد بن عبد الجليل بن عبد المعطي",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "هشام",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-472",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "حسن بن عبد الجليل بن عبد المعطي",
    "fatherFullName": "حسن بن عبد الجليل بن عبد المعطي",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-473",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "هاشم بن عبد الجليل بن عبد المعطي",
    "fatherFullName": "هاشم بن عبد الجليل بن عبد المعطي",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-474",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد العزيز بن عبد الجليل بن عبد المعطي",
    "fatherFullName": "عبد العزيز بن عبد الجليل بن عبد المعطي",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-475",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "محمد بن شرف بن محمد بن محمد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: محمد بن شرف بن محمد بن محمد بن أحمد بن عثمان",
    "generation": 30,
    "children": [
      {
        "code": "40/1",
        "name": "علي",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد العزيز",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الله",
        "generation": 40,
        "noOffspring": true
      },
      {
        "code": "40/4",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-476",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "علي بن محمد بن شرف",
    "fatherFullName": "أعقاب: علي بن محمد بن شرف",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد القوي",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "إبراهيم",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "جميل",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "مصطفى",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "صادق",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-477",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد القوي بن علي بن محمد بن شرف",
    "fatherFullName": "أعقاب: عبد القوي بن علي بن محمد بن شرف",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "أحمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-478",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "إبراهيم بن علي بن محمد بن شرف",
    "fatherFullName": "أعقاب: إبراهيم بن علي بن محمد بن شرف",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "أحمد",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "عبد الله",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-479",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "جميل بن علي بن محمد بن شرف",
    "fatherFullName": "أعقاب: جميل بن علي بن محمد بن شرف",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "الهتار",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "جمال",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "مصطفى",
        "generation": 42
      },
      {
        "code": "42/4",
        "name": "علوي",
        "generation": 42
      },
      {
        "code": "42/5",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/6",
        "name": "أحمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-480",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "مصطفى بن علي بن محمد بن شرف",
    "fatherFullName": "أعقاب: مصطفى بن علي بن محمد بن شرف",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "مهند",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-481",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد العزيز بن محمد بن شرف",
    "fatherFullName": "أعقاب: عبد العزيز بن محمد بن شرف",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "فاضل",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عصام",
        "generation": 41,
        "noOffspring": true
      },
      {
        "code": "41/3",
        "name": "عدنان",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "عمر",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-482",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "محمد بن محمد بن شرف",
    "fatherFullName": "أعقاب: محمد بن محمد بن شرف",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "شرف",
        "generation": 41,
        "noOffspring": true
      },
      {
        "code": "41/2",
        "name": "عبد الرحمن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-483",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "حزام بن محمد بن محمد بن أحمد بن عثمان",
    "fatherFullName": "حزام بن محمد بن محمد بن أحمد بن عثمان",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-484",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/3",
    "fatherName": "حزام بن محمد بن محمد بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: حزام بن محمد بن محمد بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد الكبير",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "يحي",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "محمد الصغير",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "عبد الحفيظ",
        "generation": 39,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-485",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد الكبير بن حزام بن محمد بن محمد بن أحمد بن عثمان",
    "fatherFullName": "محمد الكبير بن حزام بن محمد بن محمد بن أحمد بن عثمان",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-486",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن عبد المجيد بن محمد الكبير بن حزام",
    "fatherFullName": "أعقاب: محمد بن عبد المجيد بن محمد الكبير بن حزام",
    "generation": 40,
    "children": [
      {
        "code": "42/1",
        "name": "توفيق",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "أحمد",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "إبراهيم",
        "generation": 42
      },
      {
        "code": "42/4",
        "name": "عاصم",
        "generation": 42
      },
      {
        "code": "42/5",
        "name": "زيد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-487",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "42/1",
    "fatherName": "توفيق",
    "fatherFullName": "أعقاب: توفيق",
    "generation": 42,
    "children": [
      {
        "code": "43/1",
        "name": "زكريا",
        "generation": 43
      },
      {
        "code": "43/2",
        "name": "محمد",
        "generation": 43
      }
    ]
  },
  {
    "id": "seq-block-488",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "يحي بن حزام الكبير",
    "fatherFullName": "أعقاب: يحي بن حزام الكبير",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "إبراهيم",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الله",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-489",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "إبراهيم بن يحي بن حزام الكبير",
    "fatherFullName": "أعقاب: إبراهيم بن يحي بن حزام الكبير",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد الباسط",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد الحكيم",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "محمود",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-490",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الرحمن بن إبراهيم بن يحي بن حزام",
    "fatherFullName": "أعقاب: عبد الرحمن بن إبراهيم بن يحي بن حزام",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-491",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "عبد الباسط بن إبراهيم بن يحي بن حزام",
    "fatherFullName": "عبد الباسط بن إبراهيم بن يحي بن حزام",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-492",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "عبد الحكيم بن إبراهيم بن يحي بن حزام",
    "fatherFullName": "أعقاب: عبد الحكيم بن إبراهيم بن يحي بن حزام",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "أيمن",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "جواد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-493",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "محمود بن ابراهيم بن يحي بن حزام",
    "fatherFullName": "محمود بن ابراهيم بن يحي بن حزام",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-494",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد الله بن يحي بن حزام",
    "fatherFullName": "أعقاب: عبد الله بن يحي بن حزام",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد الحافظ",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "يوسف",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-495",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "محمد بن عبد الله بن يحي بن حزام",
    "fatherFullName": "أعقاب: محمد بن عبد الله بن يحي بن حزام",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "ماجد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "رشيد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-496",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "عبد الحافظ بن عبد الله بن يحي بن حزام",
    "fatherFullName": "عبد الحافظ بن عبد الله بن يحي بن حزام",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-497",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "يوسف بن عبد الله بن يحي بن حزام",
    "fatherFullName": "أعقاب: يوسف بن عبد الله بن يحي بن حزام",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-498",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "محمد بن محمد الصغير بن حزام",
    "fatherFullName": "أعقاب: محمد بن محمد الصغير بن حزام",
    "generation": 39,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد العزيز",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "وجيه",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "عبد الإله",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "فاضل",
        "generation": 41
      },
      {
        "code": "41/7",
        "name": "عدنان",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-499",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "أحمد بن محمد بن محمد الصغير بن حزام",
    "fatherFullName": "أعقاب: أحمد بن محمد بن محمد الصغير بن حزام",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-500",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "عبد العزيز بن محمد بن محمد الصغير بن حزام",
    "fatherFullName": "عبد العزيز بن محمد بن محمد الصغير بن حزام",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-501",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "وجيه بن محمد بن محمد الصغير بن حزام",
    "fatherFullName": "وجيه بن محمد بن محمد الصغير بن حزام",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-502",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "عبد الإله بن محمد بن محمد الصغير بن حزام",
    "fatherFullName": "عبد الإله بن محمد بن محمد الصغير بن حزام",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-503",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/5",
    "fatherName": "عبد الرحمن بن محمد بن محمد الصغير بن حزام",
    "fatherFullName": "عبد الرحمن بن محمد بن محمد الصغير بن حزام",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-504",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/6",
    "fatherName": "فاضل بن محمد بن محمد الصغير بن حزام",
    "fatherFullName": "فاضل بن محمد بن محمد الصغير بن حزام",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-505",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/7",
    "fatherName": "عدنان بن محمد بن محمد الصغير بن حزام",
    "fatherFullName": "عدنان بن محمد بن محمد الصغير بن حزام",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-506",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "وجيه بن محمد بن محمد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: وجيه بن محمد بن محمد بن أحمد بن عثمان",
    "generation": 30,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الرحمن",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "أحمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-507",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن وجيه",
    "fatherFullName": "أعقاب: محمد بن وجيه",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "وجيه",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "جمال",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبدالحكيم",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "جميل",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "هشام",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "فوزي",
        "generation": 40
      },
      {
        "code": "40/7",
        "name": "ماجد",
        "generation": 40
      },
      {
        "code": "40/8",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-508",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "وجيه بن محمد بن وجيه",
    "fatherFullName": "أعقاب: وجيه بن محمد بن وجيه",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "سمير",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-509",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "جمال بن محمد بن وجيه",
    "fatherFullName": "أعقاب: جمال بن محمد بن وجيه",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "جميل",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "محمود",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-510",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "جميل بن جمال بن محمد بن وجيه",
    "fatherFullName": "أعقاب: جميل بن جمال بن محمد بن وجيه",
    "generation": 41,
    "children": [
      {
        "code": "41/1",
        "name": "سيف",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-511",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "محمد بن جمال بن محمد بن وجيه",
    "fatherFullName": "أعقاب: محمد بن جمال بن محمد بن وجيه",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "عبدالرؤوف",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "جمال",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-512",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "محمود بن جمال بن محمد بن وجيه",
    "fatherFullName": "أعقاب: محمود بن جمال بن محمد بن وجيه",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "جمال",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-513",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبدالحكيم بن محمد بن وجيه",
    "fatherFullName": "أعقاب: عبدالحكيم بن محمد بن وجيه",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "زكريا",
        "generation": 41,
        "isMartyr": true
      },
      {
        "code": "41/2",
        "name": "علي",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-514",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "جميل بن محمد بن وجيه",
    "fatherFullName": "أعقاب: جميل بن محمد بن وجيه",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-515",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/5",
    "fatherName": "هشام بن محمد بن وجيه",
    "fatherFullName": "أعقاب: هشام بن محمد بن وجيه",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "كريم",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "مصطفى",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-516",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/6",
    "fatherName": "فوزي بن محمد بن وجيه",
    "fatherFullName": "أعقاب: فوزي بن محمد بن وجيه",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أشرف",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "وجيه الدين",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-517",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/7",
    "fatherName": "ماجد بن محمد بن وجيه",
    "fatherFullName": "ماجد بن محمد بن وجيه",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-518",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/8",
    "fatherName": "محمد بن محمد بن وجيه",
    "fatherFullName": "أعقاب: محمد بن محمد بن وجيه",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبدالله",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-519",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "أحمد بن وجيه",
    "fatherFullName": "أعقاب: أحمد بن وجيه",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبدالإله",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبدالملك",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "فضل",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-520",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبدالإله بن أحمد بن وجيه",
    "fatherFullName": "أعقاب: عبدالإله بن أحمد بن وجيه",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "مجد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-521",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبدالملك بن أحمد بن وجيه",
    "fatherFullName": "أعقاب: عبدالملك بن أحمد بن وجيه",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "وجيه",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "حسين",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "بشير",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "مالك",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-522",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "فضل بن أحمد بن وجيه",
    "fatherFullName": "أعقاب: فضل بن أحمد بن وجيه",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "حمزة",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-523",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبدالرحمن بن وجيه",
    "fatherFullName": "أعقاب: عبدالرحمن بن وجيه",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "هيثم",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-524",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "فاضل بن محمد بن محمد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: فاضل بن محمد بن محمد بن أحمد بن عثمان",
    "generation": 30,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الجليل قبول",
        "generation": 39,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-525",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبد الواسع بن الجنيد بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبدالرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الواسع بن الجنيد بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبدالرحمن الجنيد",
    "generation": 30,
    "children": [
      {
        "code": "38/1",
        "name": "محمد.",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبداللطيف",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "سعيد",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-526",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "محمد بن عبدالواسع بن الجنيد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: محمد بن عبدالواسع بن الجنيد بن أحمد بن عثمان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبدالوهاب.",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الحميد",
        "generation": 39,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-527",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبدالوهاب بن محمد بن عبدالواسع بن الجنيد بن أحمد بن عثمان",
    "fatherFullName": "عبدالوهاب بن محمد بن عبدالواسع بن الجنيد بن أحمد بن عثمان",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-528",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبدالله بن عبدالوهاب بن محمد بن عبدالواسع",
    "fatherFullName": "أعقاب: عبدالله بن عبدالوهاب بن محمد بن عبدالواسع",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبدالرحمن.",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "أنس",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "علوي.",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "مبارك.",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-529",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبدالرحمن بن عبدالله بن عبدالوهاب",
    "fatherFullName": "أعقاب: عبدالرحمن بن عبدالله بن عبدالوهاب",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد.",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "عبدالوهاب",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "احمد.",
        "generation": 42
      },
      {
        "code": "42/4",
        "name": "حسين",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-530",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "أنس بن عبدالله بن عبدالوهاب",
    "fatherFullName": "أعقاب: أنس بن عبدالله بن عبدالوهاب",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "عبدالله",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-531",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "علوي بن عبدالله بن عبدالوهاب",
    "fatherFullName": "أعقاب: علوي بن عبدالله بن عبدالوهاب",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "جوهر.",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "زيد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-532",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "مبارك بن عبدالله بن عبدالوهاب",
    "fatherFullName": "أعقاب: مبارك بن عبدالله بن عبدالوهاب",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "علي",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-533",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/5",
    "fatherName": "محمد بن عبدالله بن عبدالوهاب",
    "fatherFullName": "أعقاب: محمد بن عبدالله بن عبدالوهاب",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "عبدالوهاب",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-534",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن عبدالوهاب بن محمد بن عبدالواسع",
    "fatherFullName": "أعقاب: محمد بن عبدالوهاب بن محمد بن عبدالواسع",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبدالحكيم.",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-535",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبدالحكيم بن محمد بن عبدالوهاب",
    "fatherFullName": "أعقاب: عبدالحكيم بن محمد بن عبدالوهاب",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "سجاد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-536",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "محمد بن محمد بن عبدالوهاب",
    "fatherFullName": "محمد بن محمد بن عبدالوهاب",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-537",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "أحمد بن عبدالوهاب بن محمد بن عبدالواسع",
    "fatherFullName": "أعقاب: أحمد بن عبدالوهاب بن محمد بن عبدالواسع",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "فضل",
        "generation": 41,
        "isMartyr": true
      },
      {
        "code": "41/2",
        "name": "الجنيد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "جعفر.",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "ابراهيم",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-538",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "فضل بن أحمد بن عبدالوهاب",
    "fatherFullName": "فضل بن أحمد بن عبدالوهاب",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-539",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "الجنيد بن أحمد بن عبدالوهاب",
    "fatherFullName": "أعقاب: الجنيد بن أحمد بن عبدالوهاب",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "فضل",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-540",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "جعفر بن أحمد بن عبدالوهاب",
    "fatherFullName": "جعفر بن أحمد بن عبدالوهاب",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-541",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "ابراهيم بن أحمد بن عبدالوهاب",
    "fatherFullName": "ابراهيم بن أحمد بن عبدالوهاب",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-542",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "عبدالسلام بن عبدالوهاب بن محمد بن عبدالواسع",
    "fatherFullName": "أعقاب: عبدالسلام بن عبدالوهاب بن محمد بن عبدالواسع",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد.",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبدالله",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "ياسين",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-543",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "أحمد بن محمد بن عبدالواسع بن الجنيد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: أحمد بن محمد بن عبدالواسع بن الجنيد بن أحمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أمين.",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبدالودود",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-544",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أمين بن أحمد بن محمد بن عبدالواسع",
    "fatherFullName": "أعقاب: أمين بن أحمد بن محمد بن عبدالواسع",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد.",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "حسين",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "مرتضى.",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "عباس",
        "generation": 41,
        "isMartyr": true
      },
      {
        "code": "41/5",
        "name": "حمزة.",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "رضا",
        "generation": 41
      },
      {
        "code": "41/7",
        "name": "عقيل.",
        "generation": 41
      },
      {
        "code": "41/8",
        "name": "مهدي",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-545",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "محمد بن أمين بن أحمد بن محمد",
    "fatherFullName": "أعقاب: محمد بن أمين بن أحمد بن محمد",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "عبدالوهاب.",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "احمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-546",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "حسين بن أمين بن أحمد بن محمد",
    "fatherFullName": "أعقاب: حسين بن أمين بن أحمد بن محمد",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "علي.",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-547",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "مرتضى بن أمين بن أحمد بن محمد",
    "fatherFullName": "أعقاب: مرتضى بن أمين بن أحمد بن محمد",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "أمين.",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-548",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/5",
    "fatherName": "حمزة بن أمين بن أحمد بن محمد",
    "fatherFullName": "أعقاب: حمزة بن أمين بن أحمد بن محمد",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "عباس",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-549",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/6",
    "fatherName": "رضا بن أمين بن أحمد بن محمد",
    "fatherFullName": "أعقاب: رضا بن أمين بن أحمد بن محمد",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد.",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "علي",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-550",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبدالودود بن أحمد بن محمد بن عبدالواسع",
    "fatherFullName": "أعقاب: عبدالودود بن أحمد بن محمد بن عبدالواسع",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد.",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "احمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عمار",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-551",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبداللطيف بن عبدالواسع بن الجنيد بن أحمد بن عثمان",
    "fatherFullName": "عبداللطيف بن عبدالواسع بن الجنيد بن أحمد بن عثمان",
    "generation": 38,
    "children": []
  },
  {
    "id": "seq-block-552",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن قائد بن عبداللطيف بن عبدالواسع بن الجنيد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: محمد بن قائد بن عبداللطيف بن عبدالواسع بن الجنيد بن أحمد بن عثمان",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمود",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "يونس",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-553",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "محمود بن محمد بن قائد بن عبداللطيف",
    "fatherFullName": "أعقاب: محمود بن محمد بن قائد بن عبداللطيف",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "عبدالوهاب",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "أحمد",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/4",
        "name": "المتوكل",
        "generation": 42
      },
      {
        "code": "42/5",
        "name": "عبدالله",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-554",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "42/1",
    "fatherName": "عبدالوهاب بن محمود بن محمد بن قائد",
    "fatherFullName": "عبدالوهاب بن محمود بن محمد بن قائد",
    "generation": 42,
    "children": []
  },
  {
    "id": "seq-block-555",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "42/2",
    "fatherName": "احمد بن محمود بن محمد بن قائد",
    "fatherFullName": "أعقاب: احمد بن محمود بن محمد بن قائد",
    "generation": 42,
    "children": [
      {
        "code": "43/1",
        "name": "عبدالله",
        "generation": 43
      }
    ]
  },
  {
    "id": "seq-block-556",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "يونس بن محمد بن قائد د",
    "fatherFullName": "أعقاب: يونس بن محمد بن قائد د",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "شهاب",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-557",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/3",
    "fatherName": "سعيد بن عبدالواسع بن الجنيد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: سعيد بن عبدالواسع بن الجنيد بن أحمد بن عثمان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "قاسم",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "إبراهيم",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "أحمد",
        "generation": 39,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-558",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "قاسم بن سعيد بن عبدالواسع",
    "fatherFullName": "أعقاب: قاسم بن سعيد بن عبدالواسع",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبدالجليل",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "عبدالله",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-559",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبدالجليل بن قاسم بن سعيد",
    "fatherFullName": "أعقاب: عبدالجليل بن قاسم بن سعيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبدالرحمن",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عمار",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "مبارك.",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "أمين",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-560",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "عمار بن عبدالجليل بن قاسم بن سعيد",
    "fatherFullName": "أعقاب: عمار بن عبدالجليل بن قاسم بن سعيد",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "علي",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-561",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن قاسم بن سعيد",
    "fatherFullName": "أعقاب: محمد بن قاسم بن سعيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "باسم",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "إبراهيم",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد الوهاب",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-562",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "باسم بن محمد بن قاسم بن سعيد",
    "fatherFullName": "أعقاب: باسم بن محمد بن قاسم بن سعيد",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "حسين",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "علي",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "بدر الدين",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-563",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "أحمد بن قاسم بن سعيد",
    "fatherFullName": "أعقاب: أحمد بن قاسم بن سعيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبدالرحمن",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبدالملك",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-564",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبدالرحمن بن احمد بن قاسم بن سعيد",
    "fatherFullName": "أعقاب: عبدالرحمن بن احمد بن قاسم بن سعيد",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-565",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "عبدالله بن قاسم بن سعيد",
    "fatherFullName": "أعقاب: عبدالله بن قاسم بن سعيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أمجد.",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "مجد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "قاسم",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-566",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "إبراهيم بن سعيد بن عبدالواسع بن الجنيد بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: إبراهيم بن سعيد بن عبدالواسع بن الجنيد بن أحمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "مصطفى",
        "generation": 40,
        "isMartyr": true
      },
      {
        "code": "40/2",
        "name": "عبدالملك",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبدالرحمن",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-567",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "مصطفى بن ابراهيم بن سعيد",
    "fatherFullName": "أعقاب: مصطفى بن ابراهيم بن سعيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "زيد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "حسين",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-568",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبدالملك بن ابراهيم بن سعيد",
    "fatherFullName": "أعقاب: عبدالملك بن ابراهيم بن سعيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-569",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبدالرحمن بن ابراهيم بن سعيد",
    "fatherFullName": "أعقاب: عبدالرحمن بن ابراهيم بن سعيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "مصطفى.",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "مرتضى",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "إبراهيم",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-570",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبد الملك بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الملك بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": [
      {
        "code": "37/1",
        "name": "عبد المجيد",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "عبداللطيف",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-571",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "عبد المجيد بن عبد الملك بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبدالرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد المجيد بن عبد الملك بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبدالرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "بشر",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبدلله",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-572",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "بشر بن عبد المجيد بن عبد الملك بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: بشر بن عبد المجيد بن عبد الملك بن أحمد بن عثمان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبدالقادر",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الشافي",
        "generation": 39,
        "noOffspring": true
      },
      {
        "code": "39/3",
        "name": "عبدالله",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-573",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الوهاب بن محمد بن عبد القادر بن بشر بن عبد المجيد بن عبد الملك بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد الوهاب بن محمد بن عبد القادر بن بشر بن عبد المجيد بن عبد الملك بن أحمد بن عثمان",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "الحسين",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "الحسن",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "مصطفى",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-574",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "عبد الرحمن بن محمد بن عبد القادر بن بشر بن عبد المجيد بن عبد الملك بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد الرحمن بن محمد بن عبد القادر بن بشر بن عبد المجيد بن عبد الملك بن أحمد بن عثمان",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "السجاد",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "ابوطالب.",
        "generation": 42
      },
      {
        "code": "42/4",
        "name": "احمد",
        "generation": 42
      },
      {
        "code": "42/5",
        "name": "زيد",
        "generation": 42
      },
      {
        "code": "42/6",
        "name": "ا لمرتضى",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-575",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد الله بن بشر بن عبدالمجيد بن عبدالملك بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد الله بن بشر بن عبدالمجيد بن عبدالملك بن أحمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "إبراهيم.",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "حمود",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "أحمد",
        "generation": 40,
        "noOffspring": true
      },
      {
        "code": "40/4",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-576",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "إبراهيم بن عبد الله بن بشر بن عبد المجيد بن عبد الملك بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: إبراهيم بن عبد الله بن بشر بن عبد المجيد بن عبد الملك بن أحمد بن عثمان",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن.",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41,
        "isMartyr": true
      },
      {
        "code": "41/3",
        "name": "خليل",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "فؤاد",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "بشر",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "وسيم",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-577",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الرحمن بن ابراهيم بن عبدالله بن بشر",
    "fatherFullName": "أعقاب: عبد الرحمن بن ابراهيم بن عبدالله بن بشر",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "كمال",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-578",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "حمود بن عبد الله بن بشر بن عبد المجيد بن عبد الملك بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: حمود بن عبد الله بن بشر بن عبد المجيد بن عبد الملك بن أحمد بن عثمان",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "ماجد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-579",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "محمد عبد الله بن بشر بن عبد المجيد بن عبد الملك بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: محمد عبد الله بن بشر بن عبد المجيد بن عبد الملك بن أحمد بن عثمان",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "احمد.",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "امجد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-580",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "عبداللطيف بن عبد الملك بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبداللطيف بن عبد الملك بن أحمد بن عثمان",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "احمد",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "محم",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-581",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "احمد بن عبداللطيف بن عبدالملك بن احمد بن عثمان",
    "fatherFullName": "أعقاب: احمد بن عبداللطيف بن عبدالملك بن احمد بن عثمان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبدالإله شرد من المنطقة ولا نعلم له اثر.",
        "generation": 39,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-582",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "محمد بن عبداللطيف بن عبدالملك بن احمد بن عثمان",
    "fatherFullName": "أعقاب: محمد بن عبداللطيف بن عبدالملك بن احمد بن عثمان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبدالرب",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبدالغني",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبدالواحد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-583",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "قاسم بن عبدالرب بن محمد بن عبداللطيف بن عبدالملك بن احمد بن عثمان",
    "fatherFullName": "أعقاب: قاسم بن عبدالرب بن محمد بن عبداللطيف بن عبدالملك بن احمد بن عثمان",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "فؤاد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-584",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "صادق بن أحمد بن عبدالغني بن محمد بن عبداللطيف بن عبد الملك بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: صادق بن أحمد بن عبدالغني بن محمد بن عبداللطيف بن عبد الملك بن أحمد بن عثمان",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "وليد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-585",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "عبد الرؤوف بن أحمد بن عبد الغني بن محمد بن عبداللطيف بن عبد الملك بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد الرؤوف بن أحمد بن عبد الغني بن محمد بن عبداللطيف بن عبد الملك بن أحمد بن عثمان",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "أحمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-586",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبدالواحد بن محمد بن عبداللطيف بن عبدالملك بن احمد بن عثمان",
    "fatherFullName": "أعقاب: عبدالواحد بن محمد بن عبداللطيف بن عبدالملك بن احمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبدالغفار",
        "generation": 40,
        "noOffspring": true
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-587",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن عبدالواحد بن محمد بن عبداللطيف بن عبدالملك بن احمد بن عثمان",
    "fatherFullName": "أعقاب: محمد بن عبدالواحد بن محمد بن عبداللطيف بن عبدالملك بن احمد بن عثمان",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "منير",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "زياد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبدالحكيم هناك روايات واخبار بان المذكور لديه ولد سكن مع امه منذ صغره في مديرية بني حشيش صنعاء.",
        "generation": 41,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-588",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "قاسم بن عبد الرب بن محمد بن عبد اللطيف بن عبد الملك بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: قاسم بن عبد الرب بن محمد بن عبد اللطيف بن عبد الملك بن أحمد بن عثمان",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "فؤاد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-589",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "محمد بن قاسم بن عبد الرب بن محمد بن عبداللطيف بن عبد الملك بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: محمد بن قاسم بن عبد الرب بن محمد بن عبداللطيف بن عبد الملك بن أحمد بن عثمان",
    "generation": 41,
    "children": [
      {
        "code": "42/3",
        "name": "افادنا اخوه فؤاد بأنه ساكن مع اسرته في عدن ولديه 8 اولاد لا يعلم اسمائهم .",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-590",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "فؤاد بن قاسم بن عبدالرب بن محمد بن عبد اللطيف بن عبد الملك بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: فؤاد بن قاسم بن عبدالرب بن محمد بن عبد اللطيف بن عبد الملك بن أحمد بن عثمان",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "احمد.",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/3",
        "name": "رياض",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-591",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبد الواحد بن عبد الله بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الواحد بن عبد الله بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": [
      {
        "code": "37/1",
        "name": "عبد الواحد",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "عبد اللطيف",
        "generation": 37
      },
      {
        "code": "37/3",
        "name": "عبد الحميد >>",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-592",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "عبد الواحد بن عبد الله بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد الواحد بن عبد الله بن أحمد بن عثمان",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "سيف",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبد المجيد",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "عبد الإله",
        "generation": 38
      },
      {
        "code": "38/4",
        "name": "عبد الله",
        "generation": 38,
        "noOffspring": true
      },
      {
        "code": "38/4",
        "name": "علي",
        "generation": 38,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-593",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "سيف بن عبد الواحد بن عبد الله بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: سيف بن عبد الواحد بن عبد الله بن أحمد بن عثمان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "سعيد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الغني",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الكريم",
        "generation": 39,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-594",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "سعيد بن سيف بن عبد الواحد بن عبد الله بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: سعيد بن سيف بن عبد الواحد بن عبد الله بن أحمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد السلام",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-595",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن سعيد بن سيف",
    "fatherFullName": "أعقاب: محمد بن سعيد بن سيف",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "العيدروس",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-596",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد الله بن سعيد بن سيف",
    "fatherFullName": "أعقاب: عبد الله بن سعيد بن سيف",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "بسام",
        "generation": 41,
        "isMartyr": true
      }
    ]
  },
  {
    "id": "seq-block-597",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد السلام بن سعيد بن سيف",
    "fatherFullName": "عبد السلام بن سعيد بن سيف",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-598",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "محمد بن سيف بن عبد الواحد",
    "fatherFullName": "أعقاب: محمد بن سيف بن عبد الواحد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "مصطفى",
        "generation": 40,
        "noOffspring": true
      },
      {
        "code": "40/2",
        "name": "عبد الرحمن",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الحكيم",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-599",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الرحمن بن محمد بن سيف بن عبد الواحد",
    "fatherFullName": "أعقاب: عبد الرحمن بن محمد بن سيف بن عبد الواحد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-600",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الحكيم بن محمد بن سيف بن عبد الواحد",
    "fatherFullName": "أعقاب: عبد الحكيم بن محمد بن سيف بن عبد الواحد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "جوهر",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-601",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الغني بن سيف بن عبد الواحد",
    "fatherFullName": "أعقاب: عبد الغني بن سيف بن عبد الواحد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أمين",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "محمود",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-602",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أمين بن عبد الغني بن سيف",
    "fatherFullName": "أعقاب: أمين بن عبد الغني بن سيف",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الغني",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-603",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن عبد الغني بن سيف",
    "fatherFullName": "أعقاب: محمد بن عبد الغني بن سيف",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الغني",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-604",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبد المجيد بن عبد الواحد بن عبد الله بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد المجيد بن عبد الواحد بن عبد الله بن أحمد بن عثمان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "سعيد",
        "generation": 39,
        "noOffspring": true
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "حسن",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-605",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "أحمد بن عبد المجيد بن عبد الواحد بن عبد الله بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: أحمد بن عبد المجيد بن عبد الواحد بن عبد الله بن أحمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "سعيد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-606",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن أحمد بن عبد المجيد",
    "fatherFullName": "أعقاب: محمد بن أحمد بن عبد المجيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد العزيز",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد الرحمن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-607",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد العزيز بن محمد بن أحمد بن عبد المجيد",
    "fatherFullName": "أعقاب: عبد العزيز بن محمد بن أحمد بن عبد المجيد",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "معتز",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-608",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "محمد بن محمد بن أحمد بن عبد المجيد",
    "fatherFullName": "محمد بن محمد بن أحمد بن عبد المجيد",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-609",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "سعيد بن أحمد بن عبد المجيد",
    "fatherFullName": "أعقاب: سعيد بن أحمد بن عبد المجيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "نبيل",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "فؤاد",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "أمين",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-610",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "محمد بن سعيد بن أحمد بن عبد المجيد",
    "fatherFullName": "محمد بن سعيد بن أحمد بن عبد المجيد",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-611",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "حسن بن عبد المجيد بن عبد الواحد بن عبد الله بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: حسن بن عبد المجيد بن عبد الواحد بن عبد الله بن أحمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الكريم",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبده",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الوهاب",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-612",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الكريم بن حسن بن عبد المجيد",
    "fatherFullName": "أعقاب: عبد الكريم بن حسن بن عبد المجيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الله",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "فؤاد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-613",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الله بن عبد الكريم بن حسن",
    "fatherFullName": "أعقاب: عبد الله بن عبد الكريم بن حسن",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "جميل",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "معمر",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-614",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "محمد بن عبد الكريم بن حسن",
    "fatherFullName": "محمد بن عبد الكريم بن حسن",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-615",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "فؤاد بن عبد الكريم بن حسن",
    "fatherFullName": "أعقاب: فؤاد بن عبد الكريم بن حسن",
    "generation": 41,
    "children": [
      {
        "code": "42/3",
        "name": ">",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-616",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبده بن حسن بن عبد المجيد",
    "fatherFullName": "عبده بن حسن بن عبد المجيد",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-617",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد الوهاب بن حسن بن عبد المجيد",
    "fatherFullName": "عبد الوهاب بن حسن بن عبد المجيد",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-618",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "محمد بن حسن بن عبد المجيد",
    "fatherFullName": "أعقاب: محمد بن حسن بن عبد المجيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "إبراهيم",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد الرحمن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-619",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/3",
    "fatherName": "عبد الإله بن عبد الواحد بن عبد الله بن أحمد بن عثمان",
    "fatherFullName": "عبد الإله بن عبد الواحد بن عبد الله بن أحمد بن عثمان",
    "generation": 38,
    "children": []
  },
  {
    "id": "seq-block-620",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "بن عبد الإله بن عبد الواحد بن عبد الله بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "بن عبد الإله بن عبد الواحد بن عبد الله بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-621",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "بن بن عبد الإله بن عبد الواحد بن عبد الله بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "بن بن عبد الإله بن عبد الواحد بن عبد الله بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-622",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-623",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/5",
    "fatherName": "عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "أحمد",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-624",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "سرور",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبد الكريم",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "يحي",
        "generation": 38
      },
      {
        "code": "38/4",
        "name": "أحمد",
        "generation": 38,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-625",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الله",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الوهاب",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-626",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الله بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الله بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "إبراهيم",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "أمين",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "رشاد 1",
        "generation": 40,
        "noOffspring": true
      },
      {
        "code": "40/4",
        "name": "فؤاد",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "عدنان",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "الجنيد",
        "generation": 40
      },
      {
        "code": "40/7",
        "name": "رشاد الثاني",
        "generation": 40
      },
      {
        "code": "40/8",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-627",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "إبراهيم بن عبد الله بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: إبراهيم بن عبد الله بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "فواز",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "فؤاد",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "عمر",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "أمين",
        "generation": 41
      },
      {
        "code": "41/7",
        "name": "علي",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-628",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الرحمن بن ابراهيم بن عبد الله بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الرحمن بن ابراهيم بن عبد الله بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "السجاد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-629",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "أمين بن عبد الله بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: أمين بن عبد الله بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عمار",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عمرو",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "منذر",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "لؤي",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-630",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "فؤاد بن عبد الله بن سرور أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: فؤاد بن عبد الله بن سرور أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "المتوكل",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-631",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "أحمد بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: أحمد بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الملك",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "فضل",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "معاذ",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-632",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد الملك بن أحمد بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الملك بن أحمد بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الله",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-633",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "فضل بن أحمد بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: فضل بن أحمد بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-634",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "معاذ بن أحمد بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: معاذ بن أحمد بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-635",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد الوهاب بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الوهاب بن سرور بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "علي",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد القوي",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "السقاف",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "عمر",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "علوي",
        "generation": 40
      },
      {
        "code": "40/7",
        "name": "حسن",
        "generation": 40
      },
      {
        "code": "40/8",
        "name": "زيد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-636",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الغني",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الرقيب",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الوهاب",
        "generation": 39
      },
      {
        "code": "39/1",
        "name": "عبد الباري",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-637",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الغني بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الغني بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الرؤوف",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "نبيل",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الحكيم",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "أكرم",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "مختار",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "بسام",
        "generation": 40
      },
      {
        "code": "40/7",
        "name": "عمر",
        "generation": 40
      },
      {
        "code": "40/8",
        "name": "صلاح",
        "generation": 40
      },
      {
        "code": "40/9",
        "name": "اسامة",
        "generation": 40
      },
      {
        "code": "40/10",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-638",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الرؤوف بن عبد الغني بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الرؤوف بن عبد الغني بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-639",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "نبيل بن عبد الغني بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: نبيل بن عبد الغني بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-640",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد الحكيم بن عبد الغني بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "عبد الحكيم بن عبد الغني بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-641",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "أكرم بن عبد الغني بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: أكرم بن عبد الغني بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الكريم",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-642",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الرقيب بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الرقيب بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "رفيق",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "طاهر",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "حمزة",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-643",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "رفيق بن عبد الرقيب بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: رفيق بن عبد الرقيب بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-644",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد الوهاب بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الوهاب بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الكريم",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "الامام",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-645",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الباري بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الباري بن عبد الكريم بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "فتح",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الوهاب",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "بدر",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-646",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "يحي بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: يحي بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الواسع",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-647",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الواسع بن يحي بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الواسع بن يحي بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أمين",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-648",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أمين بن عبد الواسع بن يحي بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: أمين بن عبد الواسع بن يحي بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "نادر",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-649",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن عبد الواسع بن يحي بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: محمد بن عبد الواسع بن يحي بن أحمد بن عثمان بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "إبراهيم",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "أمين",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "جمال",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-650",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "فضل بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "فضل بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-651",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/7",
    "fatherName": "فضل بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: فضل بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "محمد",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "عبد الرحمن",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-652",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "محمد بن فضل بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: محمد بن فضل بن أحمد بن عثمان بن محمد بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الشافي",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-653",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الشافي بن محمد بن فضل بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد الشافي بن محمد بن فضل بن أحمد بن عثمان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد القوي",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-654",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد القوي بن عبد الشافي بن محمد بن فضل بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد القوي بن عبد الشافي بن محمد بن فضل بن أحمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "ماجد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "غمدان",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "معاذ",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-655",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن عبد القوي بن عبد الشافي بن محمد بن فضل بن أحمد بن عثمان",
    "fatherFullName": "محمد بن عبد القوي بن عبد الشافي بن محمد بن فضل بن أحمد بن عثمان",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-656",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "ماجد بن عبد القوي بن عبد الشافي بن محمد بن فضل بن أحمد بن عثمان",
    "fatherFullName": "ماجد بن عبد القوي بن عبد الشافي بن محمد بن فضل بن أحمد بن عثمان",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-657",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "عبد الرحمن بن فضل بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد الرحمن بن فضل بن أحمد بن عثمان",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "محمد",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-658",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "محمد بن عبد الرحمن بن فضل بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: محمد بن عبد الرحمن بن فضل بن أحمد بن عثمان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "إبراهيم",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-659",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "إبراهيم بن محمد بن عبد الرحمن بن محمد بن فضل بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: إبراهيم بن محمد بن عبد الرحمن بن محمد بن فضل بن أحمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عباس",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الرحمن",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "عبد الملك",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-660",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عباس بن إبراهيم بن محمد بن عبد الرحمن بن محمد بن فضل بن أحمد بن عثمان",
    "fatherFullName": "عباس بن إبراهيم بن محمد بن عبد الرحمن بن محمد بن فضل بن أحمد بن عثمان",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-661",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد الرحمن بن إبراهيم بن محمد بن عبد الرحمن بن محمد بن فضل بن أحمد بن عثمان",
    "fatherFullName": "عبد الرحمن بن إبراهيم بن محمد بن عبد الرحمن بن محمد بن فضل بن أحمد بن عثمان",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-662",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "أحمد بن إبراهيم بن محمد بن عبد الرحمن بن محمد بن فضل بن أحمد بن عثمان",
    "fatherFullName": "أحمد بن إبراهيم بن محمد بن عبد الرحمن بن محمد بن فضل بن أحمد بن عثمان",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-663",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "عبد الملك بن إبراهيم بن محمد بن عبد الرحمن بن محمد بن فضل بن أحمد بن عثمان",
    "fatherFullName": "عبد الملك بن إبراهيم بن محمد بن عبد الرحمن بن محمد بن فضل بن أحمد بن عثمان",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-664",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-665",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "33/2",
    "fatherName": "إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 33,
    "children": [
      {
        "code": "34/1",
        "name": "عبد الرحمن",
        "generation": 34
      }
    ]
  },
  {
    "id": "seq-block-666",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "34/2",
    "fatherName": "عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 34,
    "children": [
      {
        "code": "35/1",
        "name": "عبد الكريم.",
        "generation": 35
      }
    ]
  },
  {
    "id": "seq-block-667",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "35/2",
    "fatherName": "عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 35,
    "children": [
      {
        "code": "36/1",
        "name": "أحمد",
        "generation": 36
      }
    ]
  },
  {
    "id": "seq-block-668",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/1",
    "fatherName": "أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "جعفر",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "أحمد",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-669",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "محمد",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبد القادر",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-670",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "محمد بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: محمد بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد السلام",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الرزاق",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-671",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد السلام بن محمد بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد السلام بن محمد بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أمين",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "معمر",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-672",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أمين بن عبد السلام بن محمد بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أمين بن عبد السلام بن محمد بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-673",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "معمر بن عبد السلام بن محمد بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: معمر بن عبد السلام بن محمد بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أمين",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-674",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الرزاق بن محمد بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الرزاق بن محمد بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمود",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-675",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمود بن عبد الرزاق بن محمد بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: محمود بن عبد الرزاق بن محمد بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-676",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبد القادر بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن ابراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد القادر بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن ابراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-677",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن عبد القادر بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: محمد بن عبد القادر بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "نجيب",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "توفيق",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-678",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "نجيب بن محمد بن عبد القادر بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "نجيب بن محمد بن عبد القادر بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-679",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "توفيق بن محمد بن عبد القادر بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "توفيق بن محمد بن عبد القادر بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-680",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "أحمد بن عبد القادر بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أحمد بن عبد القادر بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-681",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "بن أحمد بن عبد القادر بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "بن أحمد بن عبد القادر بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-682",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "بن أحمد بن عبد القادر بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "بن أحمد بن عبد القادر بن جعفر بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-683",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "قاسم",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الكريم",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الملك",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-684",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "قاسم بن أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: قاسم بن أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد العزيز",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الفتاح",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الوهاب",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "عبد الرحمن",
        "generation": 40
      },
      {
        "code": "39/5",
        "name": "أحمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-685",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد العزيز بن قاسم بن أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد العزيز بن قاسم بن أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "مروان",
        "generation": 41
      },
      {
        "code": "40/2",
        "name": "عمر",
        "generation": 40
      },
      {
        "code": "41/3",
        "name": "طه",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "أنور",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "طلال",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/7",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-686",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد الفتاح بن قاسم بن أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الفتاح بن قاسم بن أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "وليد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "أمجد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-687",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد الوهاب بن قاسم بن أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الوهاب بن قاسم بن أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "ماجد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "مصطفى",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد المغني",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-688",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "عبد الرحمن بن قاسم بن أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الرحمن بن قاسم بن أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عدنان",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد الباسط",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-689",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/5",
    "fatherName": "أحمد بن قاسم بن أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: أحمد بن قاسم بن أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "يونس",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "نوفل",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "نشوان",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "عبد الله",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "عبد الكريم",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-690",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد الكريم بن أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الكريم بن أحمد بن أحمد بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "فؤاد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "جميل",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الباري",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "جلال",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "باسم",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "عبد السلام",
        "generation": 40
      },
      {
        "code": "40/7",
        "name": "سمير",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-691",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/4",
    "fatherName": "عبد الملك بن أحمد بن أحمد. بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "عبد الملك بن أحمد بن أحمد. بن أحمد بن عبد الكريم بن عبد الرحمن بن إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-692",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-693",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/1",
    "fatherName": "عبد الله بن أمير بن محمد بن الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الله بن أمير بن محمد بن الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "قاسم",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "عبد السلام",
        "generation": 37
      },
      {
        "code": "37/3",
        "name": "أحمد",
        "generation": 37
      },
      {
        "code": "37/4",
        "name": "محمد",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-694",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "قاسم بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: قاسم بن عبد الله بن أمير",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "محمد",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبد الجليل",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "محيا",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-695",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "محمد بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: محمد بن قاسم بن عبد الله بن أمير",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "إبراهيم",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-696",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "إبراهيم بن محمد بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: إبراهيم بن محمد بن قاسم بن عبد الله بن أمير",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الجبار",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الحميد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "علي",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "محمد",
        "generation": 40,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-697",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الجبار بن إبراهيم بن محمد بن قاسم بن",
    "fatherFullName": "أعقاب: عبد الجبار بن إبراهيم بن محمد بن قاسم بن",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "حمدي",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عزيز",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "زين العابدين",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-698",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "حمدي بن عبد الجبار بن إبراهيم",
    "fatherFullName": "أعقاب: حمدي بن عبد الجبار بن إبراهيم",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "إبراهيم",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-699",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "محمد بن عبد الجبار بن إبراهيم",
    "fatherFullName": "أعقاب: محمد بن عبد الجبار بن إبراهيم",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "أحمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-700",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عزيز بن عبد الجبار بن إبراهيم",
    "fatherFullName": "عزيز بن عبد الجبار بن إبراهيم",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-701",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "زين العابدين بن عبد الجبار بن إبراهيم",
    "fatherFullName": "أعقاب: زين العابدين بن عبد الجبار بن إبراهيم",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "علي",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-702",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد الحميد بن إبراهيم بن محمد بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: عبد الحميد بن إبراهيم بن محمد بن قاسم بن عبد الله بن أمير",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "فؤاد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد الباري",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "محمود",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "أمين",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "الجنيد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-703",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "فؤاد بن عبد الحميد بن إبراهيم",
    "fatherFullName": "أعقاب: فؤاد بن عبد الحميد بن إبراهيم",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "حمزة",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-704",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "عبد الباري بن عبد الحميد بن إبراهيم",
    "fatherFullName": "عبد الباري بن عبد الحميد بن إبراهيم",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-705",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "محمود بن عبد الحميد بن إبراهيم",
    "fatherFullName": "محمود بن عبد الحميد بن إبراهيم",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-706",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "أمين بن عبد الحميد بن إبراهيم",
    "fatherFullName": "أمين بن عبد الحميد بن إبراهيم",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-707",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/5",
    "fatherName": "محمد بن عبد الحميد بن إبراهيم",
    "fatherFullName": "محمد بن عبد الحميد بن إبراهيم",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-708",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/6",
    "fatherName": "الجنيد بن عبد الحميد بن إبراهيم",
    "fatherFullName": "أعقاب: الجنيد بن عبد الحميد بن إبراهيم",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "عبد المعطي",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "ليث",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-709",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "علي بن إبراهيم بن محمد بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: علي بن إبراهيم بن محمد بن قاسم بن عبد الله بن أمير",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "منصور",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عمر",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "حسين",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-710",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "منصور بن علي بن إبراهيم",
    "fatherFullName": "منصور بن علي بن إبراهيم",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-711",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/2",
    "fatherName": "عبد الرحمن بن علي بن إبراهيم",
    "fatherFullName": "عبد الرحمن بن علي بن إبراهيم",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-712",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/3",
    "fatherName": "عمر بن علي بن إبراهيم",
    "fatherFullName": "عمر بن علي بن إبراهيم",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-713",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/4",
    "fatherName": "حسين بن علي بن إبراهيم",
    "fatherFullName": "حسين بن علي بن إبراهيم",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-714",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/5",
    "fatherName": "محمد بن علي بن إبراهيم",
    "fatherFullName": "محمد بن علي بن إبراهيم",
    "generation": 41,
    "children": []
  },
  {
    "id": "seq-block-715",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الجليل بن قاسم بن عبد الله بن أمير بن محمد بن الحسين بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الجليل بن قاسم بن عبد الله بن أمير بن محمد بن الحسين بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الرحمن",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "عبد الكافي",
        "generation": 39
      },
      {
        "code": "39/5",
        "name": "محمد الثاني",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-716",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "أحمد بن عبد الجليل بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: أحمد بن عبد الجليل بن قاسم بن عبد الله بن أمير",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "سلطان",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "جميل",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "سليمان",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "طه",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "حسين",
        "generation": 40
      },
      {
        "code": "40/7",
        "name": "عبد الجبار",
        "generation": 40
      },
      {
        "code": "40/8",
        "name": "مصطفى",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-717",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن أحمد بن عبد الجايل",
    "fatherFullName": "محمد بن أحمد بن عبد الجايل",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-718",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "سلطان بن أحمد بن عبد الجليل",
    "fatherFullName": "سلطان بن أحمد بن عبد الجليل",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-719",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "جميل بن أحمد بن عبد الجليل",
    "fatherFullName": "جميل بن أحمد بن عبد الجليل",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-720",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "سليمان بن أحمد بن عبد الجليل",
    "fatherFullName": "سليمان بن أحمد بن عبد الجليل",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-721",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/5",
    "fatherName": "طه بن أحمد بن عبد الجليل",
    "fatherFullName": "طه بن أحمد بن عبد الجليل",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-722",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/6",
    "fatherName": "حسين بن أحمد بن عبد الجليل",
    "fatherFullName": "حسين بن أحمد بن عبد الجليل",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-723",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/7",
    "fatherName": "عبد الجبار بن أحمد بن عبد الجليل",
    "fatherFullName": "عبد الجبار بن أحمد بن عبد الجليل",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-724",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/8",
    "fatherName": "مصطفى بن أحمد بن عبد الجليل",
    "fatherFullName": "مصطفى بن أحمد بن عبد الجليل",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-725",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "محمد عبد الجليل بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: محمد عبد الجليل بن قاسم بن عبد الله بن أمير",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الباسط",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عدنان",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "عبد المعين",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-726",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن محمد عبد الجليل بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "محمد بن محمد عبد الجليل بن قاسم بن عبد الله بن أمير",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-727",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد الباسط بن محمد عبد الجليل بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "عبد الباسط بن محمد عبد الجليل بن قاسم بن عبد الله بن أمير",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-728",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عدنان بن محمد عبد الجليل بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "عدنان بن محمد عبد الجليل بن قاسم بن عبد الله بن أمير",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-729",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "عبد المعين بن محمد عبد الجليل بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "عبد المعين بن محمد عبد الجليل بن قاسم بن عبد الله بن أمير",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-730",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد الرحمن عبد الجليل بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: عبد الرحمن عبد الجليل بن قاسم بن عبد الله بن أمير",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الصبور",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-731",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن عبد الرحمن عبد الجليل بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "محمد بن عبد الرحمن عبد الجليل بن قاسم بن عبد الله بن أمير",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-732",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد الصبور بن عبد الرحمن عبد الجليل بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "عبد الصبور بن عبد الرحمن عبد الجليل بن قاسم بن عبد الله بن أمير",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-733",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "محيا بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: محيا بن قاسم بن عبد الله بن أمير",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الباقي",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الوهاب",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-734",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "أحمد بن محيا بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: أحمد بن محيا بن قاسم بن عبد الله بن أمير",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الرحمن",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "يوسف",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "حسين",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-735",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الباقي بن محيا بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: عبد الباقي بن محيا بن قاسم بن عبد الله بن أمير",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "مصطفى",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-736",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد الوهاب بن محيا بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: عبد الوهاب بن محيا بن قاسم بن عبد الله بن أمير",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أحمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-737",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أحمد بن عبد الوهاب بن محيا بن قاسم بن عبد الله بن أمير",
    "fatherFullName": "أحمد بن عبد الوهاب بن محيا بن قاسم بن عبد الله بن أمير",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-738",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "عبد السلام بن عبد الله بن أمير بن محمد بن الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد السلام بن عبد الله بن أمير بن محمد بن الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "محمد",
        "generation": 38
      },
      {
        "code": "2/38",
        "name": "هزاع",
        "generation": 38
      },
      {
        "code": "3/38",
        "name": "صالح",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-739",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "محمد بن عبد السلام بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: محمد بن عبد السلام بن عبد الله بن أمير",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الكريم",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "حمود",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "سلطان",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-740",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الكريم بن محمد بن عبد السلام",
    "fatherFullName": "أعقاب: عبد الكريم بن محمد بن عبد السلام",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "مصطفى",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد القاهر",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "شاكر",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "ذاكر",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-741",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن عبد الكريم بن محمد بن عبد السلام",
    "fatherFullName": "أعقاب: محمد بن عبد الكريم بن محمد بن عبد السلام",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "منير",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عاصم",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-742",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "مصطفى بن عبد الكريم بن محمد بن عبد السلام",
    "fatherFullName": "أعقاب: مصطفى بن عبد الكريم بن محمد بن عبد السلام",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "خليل",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-743",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "أحمد بن محمد بن عبد السلام بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: أحمد بن محمد بن عبد السلام بن عبد الله بن أمير",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "صادق",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد المعطي",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "خالد",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "عبد الناصر",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "معتصم",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "وليد",
        "generation": 40
      },
      {
        "code": "40/7",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-744",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "صادق بن أحمد بن محمد بن عبد السلام",
    "fatherFullName": "أعقاب: صادق بن أحمد بن محمد بن عبد السلام",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "حمزة",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-745",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "حمود بن محمد بن عبد السلام بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: حمود بن محمد بن عبد السلام بن عبد الله بن أمير",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد السميع",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الناصر",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عفيف",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "برهان",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-746",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد السميع بن حمود بن محمد بن عبد السلام",
    "fatherFullName": "عبد السميع بن حمود بن محمد بن عبد السلام",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-747",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "سلطان بن محمد بن عبد السلام بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: سلطان بن محمد بن عبد السلام بن عبد الله بن أمير",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الخالق",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "هاني",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "رشيد",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "ربيع",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-748",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الخالق بن سلطان بن محمد بن عبد السلام بن عبد الله بن أمير",
    "fatherFullName": "عبد الخالق بن سلطان بن محمد بن عبد السلام بن عبد الله بن أمير",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-749",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الوهاب بن سعيد بن أحمد بن عبد الله بن أمير بن محمد بن الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الوهاب بن سعيد بن أحمد بن عبد الله بن أمير بن محمد بن الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبدالله",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "إبراهيم",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-750",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن عبد الوهاب بن سعيد بن أحمد بن عبد الله بن أمير",
    "fatherFullName": "محمد بن عبد الوهاب بن سعيد بن أحمد بن عبد الله بن أمير",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-751",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "2/40",
    "fatherName": "عبدالله بن عبدالوهاب بن سعيد بن أحمد بن عبدالله بن أمير",
    "fatherFullName": "عبدالله بن عبدالوهاب بن سعيد بن أحمد بن عبدالله بن أمير",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-752",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/4",
    "fatherName": "محمد بن عبد الله بن أمير بن محمد بن الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: محمد بن عبد الله بن أمير بن محمد بن الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "صالح",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "محمد",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "عبدالغني",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-753",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "صالح بن محمد بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: صالح بن محمد بن عبد الله بن أمير",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "2/39",
        "name": "عبداللطيف",
        "generation": 39
      },
      {
        "code": "3/39",
        "name": "عبدالجليل",
        "generation": 39,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-754",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن صالح بن محمد بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: محمد بن صالح بن محمد بن عبد الله بن أمير",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد القادر",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "منصور",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-755",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد القادر بن محمد بن صالح بن محمد بن عبد الله بن أمير",
    "fatherFullName": "أعقاب: عبد القادر بن محمد بن صالح بن محمد بن عبد الله بن أمير",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "أمير",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-756",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "2/39",
    "fatherName": "عبداللطيف بن صالح بن محمد بن عبدالله بن أمير",
    "fatherFullName": "أعقاب: عبداللطيف بن صالح بن محمد بن عبدالله بن أمير",
    "generation": 39,
    "children": [
      {
        "code": "1/40",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "2/40",
        "name": "أمين",
        "generation": 40
      },
      {
        "code": "3/40",
        "name": "منير",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-757",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "2/38",
    "fatherName": "محمد بن محمد بن عبدالله بن أمير",
    "fatherFullName": "أعقاب: محمد بن محمد بن عبدالله بن أمير",
    "generation": 38,
    "children": [
      {
        "code": "1/39",
        "name": "عبدالجليل",
        "generation": 39
      },
      {
        "code": "2/39",
        "name": "عبدالعزيز",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-758",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "1/39",
    "fatherName": "عبدالجليل محمد بن محمد بن عبدالله بن أمير",
    "fatherFullName": "عبدالجليل محمد بن محمد بن عبدالله بن أمير",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-759",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "3/38",
    "fatherName": "عبدالغني بن محمد بن عبدالله بن أمير",
    "fatherFullName": "أعقاب: عبدالغني بن محمد بن عبدالله بن أمير",
    "generation": 38,
    "children": [
      {
        "code": "1/39",
        "name": "محمود الفرع الثاني",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-760",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "34/2",
    "fatherName": "الهزبر بن الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: الهزبر بن الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 34,
    "children": [
      {
        "code": "35/1",
        "name": "عبد القادر",
        "generation": 35
      },
      {
        "code": "2/35",
        "name": "عبدالله",
        "generation": 35,
        "noOffspring": true
      },
      {
        "code": "3/35",
        "name": "عقلان",
        "generation": 35,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-761",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "35/1",
    "fatherName": "عبد القادر بن هزبر بن الحسين بن محمد إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد القادر بن هزبر بن الحسين بن محمد إبراهيم بن عبد الرحمن الجنيد",
    "generation": 35,
    "children": [
      {
        "code": "36/1",
        "name": "محمد",
        "generation": 36
      },
      {
        "code": "36/2",
        "name": "عبدالصمد",
        "generation": 36
      }
    ]
  },
  {
    "id": "seq-block-762",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/1",
    "fatherName": "محمد بن عبد القادر بن الهزبر بن الحسين بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: محمد بن عبد القادر بن الهزبر بن الحسين بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "إبراهيم",
        "generation": 37
      },
      {
        "code": "2/37",
        "name": "محمد",
        "generation": 37
      },
      {
        "code": "3/37",
        "name": "يحيى",
        "generation": 37,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-763",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "إبراهيم بن محمد بن عبد القادر بن محمد بن الهزبر",
    "fatherFullName": "أعقاب: إبراهيم بن محمد بن عبد القادر بن محمد بن الهزبر",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "أحمد",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبد الجليل",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "عبد الرحمن",
        "generation": 38
      },
      {
        "code": "4/38",
        "name": "محمد",
        "generation": 38,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-764",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "أحمد بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: أحمد بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الصمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد القادر",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الغني",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "سلطان",
        "generation": 39
      },
      {
        "code": "39/5",
        "name": "عبد الرحمن",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-765",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الصمد بن أحمد بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: عبد الصمد بن أحمد بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "حسين",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "خليل",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "طه",
        "generation": 40
      },
      {
        "code": "1/40",
        "name": "حسين بن عبدالصمد بن أحمد بن إبراهيم بن محمد بن عبدالقادر بن الهزبر",
        "generation": 40,
        "hasChildrenFollowup": true
      },
      {
        "code": "1/41",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "2/40",
        "name": "ـ خليل عبد الصمد بن أحمد بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
        "generation": 40,
        "hasChildrenFollowup": true
      },
      {
        "code": "1/41",
        "name": "عبدالصمد",
        "generation": 41
      },
      {
        "code": "2/41",
        "name": "ــ محمد",
        "generation": 41
      },
      {
        "code": "3/40",
        "name": "ــ طه عبد الصمد بن أحمد بن إبراهيم بن محمد بن عبدالقادر بن الهزبر",
        "generation": 40,
        "hasChildrenFollowup": true
      },
      {
        "code": "1/41",
        "name": "ــ محمد",
        "generation": 41
      },
      {
        "code": "2/41",
        "name": "ــ الهزبر",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-766",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد القادر بن أحمد بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: عبد القادر بن أحمد بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الهادي",
        "generation": 40,
        "isMartyr": true
      }
    ]
  },
  {
    "id": "seq-block-767",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد الغني بن أحمد بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: عبد الغني بن أحمد بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "بشار",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-768",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/4",
    "fatherName": "سلطان بن أحمد بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: سلطان بن أحمد بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "هزبر",
        "generation": 40,
        "isMartyr": true
      },
      {
        "code": "40/2",
        "name": "نذير",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "مطهر",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "احمد",
        "generation": 40
      },
      {
        "code": "1/40",
        "name": "ــ هزبر بن سلطان بن احمد بن ابراهيم بن محمد بن عبدالقادر بن الهزبر",
        "generation": 40,
        "hasChildrenFollowup": true
      },
      {
        "code": "1/41",
        "name": "هادي",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-769",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/5",
    "fatherName": "عبد الرحمن بن أحمد بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: عبد الرحمن بن أحمد بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عصام",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "أبوطالب",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "حمزة",
        "generation": 40
      },
      {
        "code": "2/40",
        "name": "ــ أبوطالب بن عبدالرحمن بن أحمد بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
        "generation": 40,
        "hasChildrenFollowup": true
      },
      {
        "code": "1/41",
        "name": "ــ علي",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-770",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبد الجليل بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: عبد الجليل بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد العزيز",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الرزاق",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "5/39",
        "name": "مختار",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-771",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "1/39",
    "fatherName": "عبد العزيز بن عبد الجليل بن ابراهيم بن محمدبن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: عبد العزيز بن عبد الجليل بن ابراهيم بن محمدبن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "1/40",
        "name": "إدريس",
        "generation": 40
      },
      {
        "code": "2/40",
        "name": "موسى",
        "generation": 40
      },
      {
        "code": "3/40",
        "name": "هارون",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-772",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "1/40",
    "fatherName": "إدريس بن عبد العزيز بن عبد الجليل بن إبراهيم بن محمد بن عبدالقادر بن الهزبر",
    "fatherFullName": "أعقاب: إدريس بن عبد العزيز بن عبد الجليل بن إبراهيم بن محمد بن عبدالقادر بن الهزبر",
    "generation": 40,
    "children": [
      {
        "code": "1/41",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "2/41",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "3/41",
        "name": "حمزة",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-773",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "2/40",
    "fatherName": "موسى بن عبد العزيز بن عبد الجليل بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: موسى بن عبد العزيز بن عبد الجليل بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 40,
    "children": [
      {
        "code": "1/41",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "2/41",
        "name": "عمرو",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-774",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "3/40",
    "fatherName": "هارون بن عبد العزيز بن عبد الجليل بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: هارون بن عبد العزيز بن عبد الجليل بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 40,
    "children": [
      {
        "code": "1/41",
        "name": "عبدالعزيز",
        "generation": 41
      },
      {
        "code": "2/41",
        "name": "عبد السلام",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-775",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "2/39",
    "fatherName": "محمد بن عبد الجليل بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: محمد بن عبد الجليل بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "1/40",
        "name": "وليد",
        "generation": 40
      },
      {
        "code": "2/40",
        "name": "شهاب",
        "generation": 40
      },
      {
        "code": "3/40",
        "name": "ماجد",
        "generation": 40
      },
      {
        "code": "4/40",
        "name": "أمير",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-776",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "3/39",
    "fatherName": "عبدالرزاق عبدالجليل بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: عبدالرزاق عبدالجليل بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "1/40",
        "name": "أدهم",
        "generation": 40
      },
      {
        "code": "2/40",
        "name": "أمجد",
        "generation": 40
      },
      {
        "code": "3/40",
        "name": "حسين",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-777",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "4/39",
    "fatherName": "أحمد بن عبد الجليل بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: أحمد بن عبد الجليل بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "1/40",
        "name": "مهيب",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-778",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "5/39",
    "fatherName": "مختار بن عبد الجليل بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "مختار بن عبد الجليل بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-779",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/3",
    "fatherName": "عبد الرحمن بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: عبد الرحمن بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الغني",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "محمود",
        "generation": 39
      },
      {
        "code": "3/39",
        "name": "أحمد",
        "generation": 39,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-780",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الغني بن عبد الرحمن بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: عبد الغني بن عبد الرحمن بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "جميل",
        "generation": 40,
        "noOffspring": true
      },
      {
        "code": "40/2",
        "name": "رشاد",
        "generation": 40,
        "isMartyr": true
      },
      {
        "code": "40/3",
        "name": "مأمون",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-781",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "رشاد بن عبد الغني بن عبد الرحمن بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: رشاد بن عبد الغني بن عبد الرحمن بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 40,
    "children": [
      {
        "code": "1/41",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-782",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "مأمون بن عبد الغني بن عبدالرحمن بن إبرهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: مأمون بن عبد الغني بن عبدالرحمن بن إبرهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 40,
    "children": [
      {
        "code": "1/41",
        "name": "رشاد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-783",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "محمود بن عبد الرحمن بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: محمود بن عبد الرحمن بن إبراهيم بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "حسين",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "حسن",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-784",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/2",
    "fatherName": "عبدالصمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: عبدالصمد بن عبد القادر بن الهزبر",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "محمد",
        "generation": 37,
        "noOffspring": true
      },
      {
        "code": "37/2",
        "name": "أحمد",
        "generation": 37,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-785",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "محمد بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: محمد بن محمد بن عبد القادر بن الهزبر",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبدالوهاب",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبدالغني",
        "generation": 38
      },
      {
        "code": "3/38",
        "name": "يحيى",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-786",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "1/38",
    "fatherName": "عبد الوهاب بن محمد بن محمد بن عبدالقادر بن الهزبر",
    "fatherFullName": "عبد الوهاب بن محمد بن محمد بن عبدالقادر بن الهزبر",
    "generation": 38,
    "children": []
  },
  {
    "id": "seq-block-787",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "1/39",
    "fatherName": "أحمد",
    "fatherFullName": "أعقاب: أحمد",
    "generation": 39,
    "children": [
      {
        "code": "1/40",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-788",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "2/38",
    "fatherName": "عبد الغني بن محمد بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: عبد الغني بن محمد بن محمد بن عبد القادر بن الهزبر",
    "generation": 38,
    "children": [
      {
        "code": "1/39",
        "name": "عبد الرقيب",
        "generation": 39
      },
      {
        "code": "2/39",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "3/39",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "4/39",
        "name": "عبد الودود",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-789",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "1/39",
    "fatherName": "عبد الرقيب بن عبد الغني بن محمد بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: عبد الرقيب بن عبد الغني بن محمد بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "1/40",
        "name": "بدر",
        "generation": 40,
        "isMartyr": true
      },
      {
        "code": "2/40",
        "name": "حمزة",
        "generation": 40
      },
      {
        "code": "3/40",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "4/40",
        "name": "عبد الغني",
        "generation": 40
      },
      {
        "code": "5/40",
        "name": "أحمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-790",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "2/39",
    "fatherName": "محمد بن عبد الغني بن محمد بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: محمد بن عبد الغني بن محمد بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "1/40",
        "name": "هشام",
        "generation": 40
      },
      {
        "code": "2/40",
        "name": "مصطفى",
        "generation": 40
      },
      {
        "code": "3/40",
        "name": "حسين",
        "generation": 40
      },
      {
        "code": "4/40",
        "name": "عقيل",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-791",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "3/39",
    "fatherName": "أحمد بن عبدالغني بن محمد بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أحمد بن عبدالغني بن محمد بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-792",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "4/39",
    "fatherName": "عبد الودود بن عبد الغني بن محمد بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: عبد الودود بن عبد الغني بن محمد بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "1/40",
        "name": "مصطفى",
        "generation": 40
      },
      {
        "code": "2/40",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-793",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "3/38",
    "fatherName": "يحيى بن محمد بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: يحيى بن محمد بن محمد بن عبد القادر بن الهزبر",
    "generation": 38,
    "children": [
      {
        "code": "1/39",
        "name": "عبدالله",
        "generation": 39
      },
      {
        "code": "2/39",
        "name": "عبد الباسط",
        "generation": 39
      },
      {
        "code": "3/39",
        "name": "عبد المعطي",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-794",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "1/39",
    "fatherName": "عبد الله بن يحيى بن محمد بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: عبد الله بن يحيى بن محمد بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "1/40",
        "name": "ماجد",
        "generation": 40
      },
      {
        "code": "2/40",
        "name": "عماد",
        "generation": 40
      },
      {
        "code": "3/40",
        "name": "هيثم",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "أكرم",
        "generation": 40
      },
      {
        "code": "5/40",
        "name": "حسين",
        "generation": 40
      },
      {
        "code": "6/40",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-795",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "1/40",
    "fatherName": "ماجدبن عبدالله بن يحيى",
    "fatherFullName": "أعقاب: ماجدبن عبدالله بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "1/41",
        "name": "عمار",
        "generation": 41
      },
      {
        "code": "2/41",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-796",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "2/39",
    "fatherName": "عبد الباسط بن يحيى بن محمد بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "أعقاب: عبد الباسط بن يحيى بن محمد بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": [
      {
        "code": "1/40",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "2/40",
        "name": "أحمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-797",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "3/39",
    "fatherName": "عبد المعطي بن يحيى بن محمد بن محمد بن عبد القادر بن الهزبر",
    "fatherFullName": "عبد المعطي بن يحيى بن محمد بن محمد بن عبد القادر بن الهزبر",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-798",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-799",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "33/1",
    "fatherName": "الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 33,
    "children": [
      {
        "code": "34/1",
        "name": "محمد",
        "generation": 34
      },
      {
        "code": "34/2",
        "name": "الحسن",
        "generation": 34
      }
    ]
  },
  {
    "id": "seq-block-800",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "34/1",
    "fatherName": "محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 34,
    "children": [
      {
        "code": "36/1",
        "name": "بشر",
        "generation": 36
      },
      {
        "code": "36/2",
        "name": "علي",
        "generation": 36
      }
    ]
  },
  {
    "id": "seq-block-801",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/1",
    "fatherName": "بشر بن محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "بشر بن محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": []
  },
  {
    "id": "seq-block-802",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "أحمد",
    "fatherFullName": "أحمد",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-803",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الوهاب",
    "fatherFullName": "أعقاب: عبد الوهاب",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الكريم",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-804",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الكريم بن عبد الوهاب بن أحمد بن بشر بن محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الكريم بن عبد الوهاب بن أحمد بن بشر بن محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "فهد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-805",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أحمد بن عبد الكريم بن عبد الوهاب بن أحمد بن بشر بن محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أحمد بن عبد الكريم بن عبد الوهاب بن أحمد بن بشر بن محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": []
  },
  {
    "id": "seq-block-806",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "41/1",
    "fatherName": "عبد الرحمن",
    "fatherFullName": "أعقاب: عبد الرحمن",
    "generation": 41,
    "children": [
      {
        "code": "42/1",
        "name": "أحمد",
        "generation": 42
      },
      {
        "code": "42/2",
        "name": "محمد",
        "generation": 42
      }
    ]
  },
  {
    "id": "seq-block-807",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن عبد الكريم بن عبد الوهاب بن أحمد بن بشر بن محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: محمد بن عبد الكريم بن عبد الوهاب بن أحمد بن بشر بن محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "مصطفى",
        "generation": 41,
        "isMartyr": true
      },
      {
        "code": "41/3",
        "name": "جميل",
        "generation": 41,
        "isMartyr": true
      },
      {
        "code": "41/4",
        "name": "أمير",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "إلياس",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "عزت",
        "generation": 41,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-808",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد الله بن عبد الكريم بن عبد الوهاب بن أحمد بن بشر بن محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الله بن عبد الكريم بن عبد الوهاب بن أحمد بن بشر بن محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "الحسين",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "صادق",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "عاصم",
        "generation": 41
      },
      {
        "code": "41/5",
        "name": "هيثم",
        "generation": 41
      },
      {
        "code": "41/6",
        "name": "خليل",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-809",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "فهد بن عبد الكريم بن عبد الوهاب بن أحمد بن بشر بن محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: فهد بن عبد الكريم بن عبد الوهاب بن أحمد بن بشر بن محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عصام",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-810",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/2",
    "fatherName": "سعيد بن علي بن محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "سعيد بن علي بن محمد بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": []
  },
  {
    "id": "seq-block-811",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/1",
    "fatherName": "عبد الله بن عبد الله بن الحسن بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الله بن عبد الله بن الحسن بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "قاسم",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "عبيد",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-812",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "قاسم بن عبد الله بن عبد الله بن الحسن بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: قاسم بن عبد الله بن عبد الله بن الحسن بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الله",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "محمد",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "يحي",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-813",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الله بن قاسم بن عبد الله بن عبد الله بن الحسن بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الله بن قاسم بن عبد الله بن عبد الله بن الحسن بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الرحمن",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الإله",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "فهمي",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-814",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الرحمن بن عبد الله بن قاسم",
    "fatherFullName": "أعقاب: عبد الرحمن بن عبد الله بن قاسم",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أكرم",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-815",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "محمد بن قاسم بن عبد الله بن عبد الله بن الحسن بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: محمد بن قاسم بن عبد الله بن عبد الله بن الحسن بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الرحمن",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد المغني",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-816",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "أحمد بن محمد بن قاسم",
    "fatherFullName": "أعقاب: أحمد بن محمد بن قاسم",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "إبراهيم",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الحكيم",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-817",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "إبراهيم بن أحمد بن محمد بن قاسم",
    "fatherFullName": "أعقاب: إبراهيم بن أحمد بن محمد بن قاسم",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "حسين",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-818",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن أحمد بن محمد بن قاسم",
    "fatherFullName": "أعقاب: محمد بن أحمد بن محمد بن قاسم",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "علي",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد المعطي",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "زين العابدين",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-819",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الرحمن بن محمد بن قاسم بن عبد الله",
    "fatherFullName": "أعقاب: عبد الرحمن بن محمد بن قاسم بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "يوسف",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-820",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد المغني بن محمد بن قاسم بن عبد الله",
    "fatherFullName": "أعقاب: عبد المغني بن محمد بن قاسم بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "مأمون",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-821",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/3",
    "fatherName": "يحي بن قاسم بن عبد الله بن عبد الله بن الحسن بن الحسن بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: يحي بن قاسم بن عبد الله بن عبد الله بن الحسن بن الحسن بن محمد بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الغني",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الله",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "علي",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "قاسم",
        "generation": 39
      },
      {
        "code": "39/5",
        "name": "عبد الرحمن",
        "generation": 39
      },
      {
        "code": "39/6",
        "name": "محمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-822",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الغني بن يحي بن قاسم بن عبد الله",
    "fatherFullName": "أعقاب: عبد الغني بن يحي بن قاسم بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمود",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عدنان",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الله",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-823",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الله بن يحي بن قاسم بن عبد الله",
    "fatherFullName": "أعقاب: عبد الله بن يحي بن قاسم بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "موسى",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "فواز",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الحكيم",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-824",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "علي بن يحي بن قاسم بن عبد الله",
    "fatherFullName": "أعقاب: علي بن يحي بن قاسم بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "بدر",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "سليمان",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-825",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/4",
    "fatherName": "قاسم بن يحي بن قاسم بن عبد الله",
    "fatherFullName": "أعقاب: قاسم بن يحي بن قاسم بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "نشوان",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "بلال",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-826",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/5",
    "fatherName": "عبد الرحمن بن يحي بن قاسم بن عبد الله",
    "fatherFullName": "أعقاب: عبد الرحمن بن يحي بن قاسم بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "خليفة",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-827",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/6",
    "fatherName": "محمد بن يحي بن قاسم بن عبد الله",
    "fatherFullName": "أعقاب: محمد بن يحي بن قاسم بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "وسيم",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الرحمن",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-828",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "منصور بن عبيد بن عبد الله بن عبد الله بن الحسن بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: منصور بن عبيد بن عبد الله بن عبد الله بن الحسن بن الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "فاضل",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبده",
        "generation": 39,
        "noOffspring": true
      },
      {
        "code": "39/3",
        "name": "أحمد",
        "generation": 39,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-829",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "فاضل بن منصور بن عبيد بن عبد الله",
    "fatherFullName": "أعقاب: فاضل بن منصور بن عبيد بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "مهيوب",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الحق",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "علي",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "عبد العزيز",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "عبد الرحمن",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-830",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن فاضل بن منصور بن عبيد",
    "fatherFullName": "أعقاب: محمد بن فاضل بن منصور بن عبيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "فاضل",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-831",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "مهيوب بن فاضل بن منصور بن عبيد",
    "fatherFullName": "أعقاب: مهيوب بن فاضل بن منصور بن عبيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "40/2",
        "name": "علي",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-832",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد الحق بن فاضل بن منصور بن عبيد",
    "fatherFullName": "أعقاب: عبد الحق بن فاضل بن منصور بن عبيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "علي",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-833",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "علي بن فاضل بن منصور بن عبيد",
    "fatherFullName": "أعقاب: علي بن فاضل بن منصور بن عبيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-834",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/5",
    "fatherName": "عبد العزيز بن فاضل بن منصور بن عبيد",
    "fatherFullName": "أعقاب: عبد العزيز بن فاضل بن منصور بن عبيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "يوسف",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عمر",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-835",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/6",
    "fatherName": "عبد الرحمن بن فاضل بن منصور بن عبيد",
    "fatherFullName": "أعقاب: عبد الرحمن بن فاضل بن منصور بن عبيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أكرم",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "حسين",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "حسن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-836",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عثمان بن الحسن بن بشر بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "عثمان بن الحسن بن بشر بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-837",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "34/1",
    "fatherName": "عثمان بن الحسن بن بشر بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عثمان بن الحسن بن بشر بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 34,
    "children": [
      {
        "code": "35/1",
        "name": "أحمد",
        "generation": 35
      }
    ]
  },
  {
    "id": "seq-block-838",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "35/1",
    "fatherName": "أحمد بن عثمان بن الحسن بن بشر بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: أحمد بن عثمان بن الحسن بن بشر بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 35,
    "children": [
      {
        "code": "36/1",
        "name": "علي",
        "generation": 36
      },
      {
        "code": "36/2",
        "name": "عبد الله",
        "generation": 36
      }
    ]
  },
  {
    "id": "seq-block-839",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/1",
    "fatherName": "علي بن أحمد بن عثمان بن الحسن",
    "fatherFullName": "أعقاب: علي بن أحمد بن عثمان بن الحسن",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "عبد الله",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "محمد",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-840",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "عبد الله بن علي بن أحمد بن عثمان بن الحسن",
    "fatherFullName": "أعقاب: عبد الله بن علي بن أحمد بن عثمان بن الحسن",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الإله",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "يحيى",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "عبد المجيد",
        "generation": 38
      },
      {
        "code": "38/4",
        "name": "عبد الملك",
        "generation": 38,
        "noOffspring": true
      },
      {
        "code": "38/5",
        "name": "حسن",
        "generation": 38,
        "noOffspring": true
      },
      {
        "code": "38/6",
        "name": "الجنيد",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-841",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الإله بن عبد الله بن علي بن أحمد بن عثمان بن الحسن",
    "fatherFullName": "أعقاب: عبد الإله بن عبد الله بن علي بن أحمد بن عثمان بن الحسن",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الرحمن",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الوهاب",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الغني",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-842",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الرحمن بن عبد الإله بن عبد الله",
    "fatherFullName": "أعقاب: عبد الرحمن بن عبد الإله بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40,
        "isMartyr": true
      },
      {
        "code": "40/2",
        "name": "عبده",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الغني",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "عبد الجليل",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "عبد المجيد",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "منير",
        "generation": 40
      },
      {
        "code": "40/7",
        "name": "جميل",
        "generation": 40
      },
      {
        "code": "40/8",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/9",
        "name": "عبد الوهاب",
        "generation": 40
      },
      {
        "code": "40/10",
        "name": "يوسف",
        "generation": 40
      },
      {
        "code": "40/11",
        "name": "عادل",
        "generation": 40,
        "isMartyr": true
      }
    ]
  },
  {
    "id": "seq-block-843",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبده بن عبد الرحمن بن عبد الإله",
    "fatherFullName": "أعقاب: عبده بن عبد الرحمن بن عبد الإله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الملك",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد الرحمن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-844",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد الغني بن عبد الرحمن بن عبد الإله",
    "fatherFullName": "أعقاب: عبد الغني بن عبد الرحمن بن عبد الإله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-845",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "عبد الجليل بن عبد الرحمن بن عبد الإله",
    "fatherFullName": "أعقاب: عبد الجليل بن عبد الرحمن بن عبد الإله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-846",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/5",
    "fatherName": "عبد المجيد بن عبد الرحمن بن عبد الإله",
    "fatherFullName": "أعقاب: عبد المجيد بن عبد الرحمن بن عبد الإله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-847",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/6",
    "fatherName": "منير بن عبد الرحمن بن عبد الإله",
    "fatherFullName": "أعقاب: منير بن عبد الرحمن بن عبد الإله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-848",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/7",
    "fatherName": "جميل بن عبد الرحمن بن عبد الإله",
    "fatherFullName": "أعقاب: جميل بن عبد الرحمن بن عبد الإله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-849",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/8",
    "fatherName": "أحمد بن عبد الرحمن بن عبد الإله",
    "fatherFullName": "أعقاب: أحمد بن عبد الرحمن بن عبد الإله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-850",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/9",
    "fatherName": "عبد الوهاب بن عبد الرحمن بن عبد الإله",
    "fatherFullName": "أعقاب: عبد الوهاب بن عبد الرحمن بن عبد الإله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-851",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/10",
    "fatherName": "يوسف بن عبد الرحمن بن عبد الإله",
    "fatherFullName": "أعقاب: يوسف بن عبد الرحمن بن عبد الإله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "يعقوب",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-852",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/11",
    "fatherName": "عادل بن عبد الرحمن بن عبد الإله",
    "fatherFullName": "أعقاب: عادل بن عبد الرحمن بن عبد الإله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-853",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الوهاب بن عبد الإله بن عبد الله بن علي بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد الوهاب بن عبد الإله بن عبد الله بن علي بن أحمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد القوي",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "عبد الرحمن",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "عبد الحكيم",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-854",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن عبد الوهاب بن عبد الإله بن عبد الله",
    "fatherFullName": "أعقاب: محمد بن عبد الوهاب بن عبد الإله بن عبد الله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد الوهاب",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "عبد الإله",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "عبد العزيز",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-855",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد الله بن عبد الوهاب بن عبد الإله بن عبد الله",
    "fatherFullName": "أعقاب: عبد الله بن عبد الوهاب بن عبد الإله بن عبد الله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الوهاب",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد الملك",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "حمزة",
        "generation": 41
      },
      {
        "code": "41/4",
        "name": "هشام",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-856",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد القوي بن عبد الوهاب بن عبد الإله بن عبد الله",
    "fatherFullName": "أعقاب: عبد القوي بن عبد الوهاب بن عبد الإله بن عبد الله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الوهاب",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "مجد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-857",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "عبد الرحمن بن عبد الوهاب بن عبد الإله بن عبد الله",
    "fatherFullName": "أعقاب: عبد الرحمن بن عبد الوهاب بن عبد الإله بن عبد الله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الوهاب",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-858",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/5",
    "fatherName": "عبد الحكيم بن عبد الوهاب بن عبد الإله بن عبد الله",
    "fatherFullName": "أعقاب: عبد الحكيم بن عبد الوهاب بن عبد الإله بن عبد الله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أسامة",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-859",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد الغني بن عبد الإله بن عبد الله بن علي بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد الغني بن عبد الإله بن عبد الله بن علي بن أحمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الوهاب",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "يوسف",
        "generation": 40
      },
      {
        "code": "40/5",
        "name": "عبد الإله",
        "generation": 40
      },
      {
        "code": "40/6",
        "name": "عبد الحميد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-860",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أحمد بن عبد الغني بن عبد الإله بن عبد الله",
    "fatherFullName": "أعقاب: أحمد بن عبد الغني بن عبد الإله بن عبد الله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "معاذ",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-861",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن عبد الغني بن عبد الإله بن عبد الله",
    "fatherFullName": "أعقاب: محمد بن عبد الغني بن عبد الإله بن عبد الله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الغني",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-862",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد الوهاب بن عبد الغني بن عبد الإله بن عبد الله",
    "fatherFullName": "أعقاب: عبد الوهاب بن عبد الغني بن عبد الإله بن عبد الله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أسامة",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد الغني",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-863",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "يوسف بن عبد الغني بن عبد الإله بن عبد الله",
    "fatherFullName": "أعقاب: يوسف بن عبد الغني بن عبد الإله بن عبد الله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "يونس",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-864",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/5",
    "fatherName": "عبد الإله بن عبد الغني بن عبد الإله بن عبد الله",
    "fatherFullName": "أعقاب: عبد الإله بن عبد الغني بن عبد الإله بن عبد الله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الغني",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-865",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/6",
    "fatherName": "عبد الحميد بن عبد الغني بن عبد الإله بن عبد الله",
    "fatherFullName": "أعقاب: عبد الحميد بن عبد الغني بن عبد الإله بن عبد الله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الغني",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-866",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "يحيى بن عبد الله بن علي بن أحمد بن عثمان بن الحسن",
    "fatherFullName": "أعقاب: يحيى بن عبد الله بن علي بن أحمد بن عثمان بن الحسن",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الله",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "generation": 39,
        "noOffspring": true
      },
      {
        "code": "39/3",
        "name": "عبد الرحمن",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/5",
        "name": "عبد المجيد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-867",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الله بن يحيى بن عبد الله بن علي بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد الله بن يحيى بن عبد الله بن علي بن أحمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "يحيى",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الرحمن",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "أحمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-868",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "يحيى بن عبد الله بن يحيى",
    "fatherFullName": "أعقاب: يحيى بن عبد الله بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الله",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/3",
        "name": "إبراهيم",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-869",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد الرحمن بن عبد الله بن يحيى",
    "fatherFullName": "أعقاب: عبد الرحمن بن عبد الله بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-870",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "محمد بن عبد الله بن يحيى",
    "fatherFullName": "أعقاب: محمد بن عبد الله بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الله",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "يحيى",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-871",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "أحمد بن عبد الله بن يحيى",
    "fatherFullName": "أعقاب: أحمد بن عبد الله بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الله",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-872",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد الرحمن بن يحيى بن عبد الله بن علي بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد الرحمن بن يحيى بن عبد الله بن علي بن أحمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "يحيى",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-873",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أحمد بن عبد الرحمن بن يحيى",
    "fatherFullName": "أعقاب: أحمد بن عبد الرحمن بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "يحيى",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-874",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "يحيى بن عبد الرحمن بن يحيى",
    "fatherFullName": "أعقاب: يحيى بن عبد الرحمن بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-875",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد الله بن عبد الرحمن بن يحيى",
    "fatherFullName": "أعقاب: عبد الله بن عبد الرحمن بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "يحيى",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-876",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "محمد بن عبد الرحمن بن يحيى",
    "fatherFullName": "أعقاب: محمد بن عبد الرحمن بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-877",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/4",
    "fatherName": "محمد بن يحيى بن عبد الله بن علي بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: محمد بن يحيى بن عبد الله بن علي بن أحمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "يحيى",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "عبد الرحمن",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "أحمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-878",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "يحيى بن محمد بن يحيى",
    "fatherFullName": "أعقاب: يحيى بن محمد بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "عبد الله",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-879",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد الله بن محمد بن يحيى",
    "fatherFullName": "أعقاب: عبد الله بن محمد بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "41/2",
        "name": "يحيى",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-880",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "عبد الرحمن بن محمد بن يحيى",
    "fatherFullName": "أعقاب: عبد الرحمن بن محمد بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-881",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "أحمد بن محمد بن يحيى",
    "fatherFullName": "أعقاب: أحمد بن محمد بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-882",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/5",
    "fatherName": "عبد المجيد بن يحيى بن عبد الله بن علي بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد المجيد بن يحيى بن عبد الله بن علي بن أحمد بن عثمان",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "يحيى",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "عبد الله",
        "generation": 40
      },
      {
        "code": "40/3",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/4",
        "name": "أحمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-883",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "يحيى بن عبد المجيد بن يحيى",
    "fatherFullName": "أعقاب: يحيى بن عبد المجيد بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد المجيد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-884",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "عبد الله بن عبد المجيد بن يحيى",
    "fatherFullName": "أعقاب: عبد الله بن عبد المجيد بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد المجيد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-885",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/3",
    "fatherName": "محمد بن عبد المجيد بن يحيى",
    "fatherFullName": "أعقاب: محمد بن عبد المجيد بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد المجيد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-886",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/4",
    "fatherName": "أحمد بن عبد المجيد بن يحيى",
    "fatherFullName": "أعقاب: أحمد بن عبد المجيد بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد المجيد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-887",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/3",
    "fatherName": "عبد المجيد بن عبد الله بن علي بن أحمد بن عثمان بن الحسن",
    "fatherFullName": "أعقاب: عبد المجيد بن عبد الله بن علي بن أحمد بن عثمان بن الحسن",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الله",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الرحمن",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "محمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-888",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الله بن عبد المجيد بن عبد الله",
    "fatherFullName": "أعقاب: عبد الله بن عبد المجيد بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد المجيد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-889",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد المجيد بن عبد الله بن عبد المجيد",
    "fatherFullName": "أعقاب: عبد المجيد بن عبد الله بن عبد المجيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الله",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-890",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن عبد الله بن عبد المجيد",
    "fatherFullName": "أعقاب: محمد بن عبد الله بن عبد المجيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الله",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-891",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "أحمد بن عبد المجيد بن عبد الله",
    "fatherFullName": "أعقاب: أحمد بن عبد المجيد بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد المجيد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-892",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد المجيد بن أحمد بن عبد المجيد",
    "fatherFullName": "أعقاب: عبد المجيد بن أحمد بن عبد المجيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-893",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن أحمد بن عبد المجيد",
    "fatherFullName": "أعقاب: محمد بن أحمد بن عبد المجيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-894",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد الرحمن بن عبد المجيد بن عبد الله",
    "fatherFullName": "أعقاب: عبد الرحمن بن عبد المجيد بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد المجيد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-895",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد المجيد بن عبد الرحمن بن عبد المجيد",
    "fatherFullName": "أعقاب: عبد المجيد بن عبد الرحمن بن عبد المجيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-896",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/4",
    "fatherName": "محمد بن عبد المجيد بن عبد الله",
    "fatherFullName": "أعقاب: محمد بن عبد المجيد بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد المجيد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-897",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد المجيد بن محمد بن عبد المجيد",
    "fatherFullName": "أعقاب: عبد المجيد بن محمد بن عبد المجيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-898",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/6",
    "fatherName": "الجنيد بن عبد الله بن علي بن أحمد بن عثمان بن الحسن",
    "fatherFullName": "أعقاب: الجنيد بن عبد الله بن علي بن أحمد بن عثمان بن الحسن",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الله",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "أحمد",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عبد الرحمن",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-899",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الله بن الجنيد بن عبد الله",
    "fatherFullName": "أعقاب: عبد الله بن الجنيد بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "الجنيد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "محمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-900",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "الجنيد بن عبد الله بن الجنيد",
    "fatherFullName": "أعقاب: الجنيد بن عبد الله بن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الله",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-901",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "محمد بن عبد الله بن الجنيد",
    "fatherFullName": "أعقاب: محمد بن عبد الله بن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الله",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-902",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "أحمد بن الجنيد بن عبد الله",
    "fatherFullName": "أعقاب: أحمد بن الجنيد بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "الجنيد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-903",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "الجنيد بن أحمد بن الجنيد",
    "fatherFullName": "أعقاب: الجنيد بن أحمد بن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-904",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "عبد الرحمن بن الجنيد بن عبد الله",
    "fatherFullName": "أعقاب: عبد الرحمن بن الجنيد بن عبد الله",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "الجنيد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-905",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "الجنيد بن عبد الرحمن بن الجنيد",
    "fatherFullName": "أعقاب: الجنيد بن عبد الرحمن بن الجنيد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-906",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "محمد بن علي بن أحمد بن عثمان بن الحسن",
    "fatherFullName": "أعقاب: محمد بن علي بن أحمد بن عثمان بن الحسن",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "علي",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبد الله",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "أحمد",
        "generation": 38,
        "noOffspring": true
      },
      {
        "code": "38/4",
        "name": "يحيى",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-907",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "علي بن محمد بن علي بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: علي بن محمد بن علي بن أحمد بن عثمان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الله",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "أحمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-908",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن علي بن محمد",
    "fatherFullName": "أعقاب: محمد بن علي بن محمد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "علي",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "أحمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-909",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "علي بن محمد بن علي",
    "fatherFullName": "أعقاب: علي بن محمد بن علي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-910",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "أحمد بن محمد بن علي",
    "fatherFullName": "أعقاب: أحمد بن محمد بن علي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-911",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الله بن علي بن محمد",
    "fatherFullName": "أعقاب: عبد الله بن علي بن محمد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "علي",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-912",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "علي بن عبد الله بن علي",
    "fatherFullName": "أعقاب: علي بن عبد الله بن علي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الله",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-913",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "أحمد بن علي بن محمد",
    "fatherFullName": "أعقاب: أحمد بن علي بن محمد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "علي",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-914",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "علي بن أحمد بن علي",
    "fatherFullName": "أعقاب: علي بن أحمد بن علي",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-915",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبد الله بن محمد بن علي بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: عبد الله بن محمد بن علي بن أحمد بن عثمان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "علي",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "أحمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-916",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن عبد الله بن محمد",
    "fatherFullName": "أعقاب: محمد بن عبد الله بن محمد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الله",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-917",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الله بن محمد بن عبد الله",
    "fatherFullName": "أعقاب: عبد الله بن محمد بن عبد الله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-918",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "علي بن عبد الله بن محمد",
    "fatherFullName": "أعقاب: علي بن عبد الله بن محمد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الله",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-919",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الله بن علي بن عبد الله",
    "fatherFullName": "أعقاب: عبد الله بن علي بن عبد الله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "علي",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-920",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/3",
    "fatherName": "أحمد بن عبد الله بن محمد",
    "fatherFullName": "أعقاب: أحمد بن عبد الله بن محمد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "عبد الله",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-921",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "عبد الله بن أحمد بن عبد الله",
    "fatherFullName": "أعقاب: عبد الله بن أحمد بن عبد الله",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-922",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/4",
    "fatherName": "يحيى بن محمد بن علي بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: يحيى بن محمد بن علي بن أحمد بن عثمان",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الله",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-923",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن يحيى بن محمد",
    "fatherFullName": "أعقاب: محمد بن يحيى بن محمد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "يحيى",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-924",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "يحيى بن محمد بن يحيى",
    "fatherFullName": "أعقاب: يحيى بن محمد بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-925",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الله بن يحيى بن محمد",
    "fatherFullName": "أعقاب: عبد الله بن يحيى بن محمد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "يحيى",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-926",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "يحيى بن عبد الله بن يحيى",
    "fatherFullName": "أعقاب: يحيى بن عبد الله بن يحيى",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الله",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-927",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/2",
    "fatherName": "عبد الله بن أحمد بن عثمان بن الحسن",
    "fatherFullName": "أعقاب: عبد الله بن أحمد بن عثمان بن الحسن",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "أحمد",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "محمد",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-928",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "أحمد بن عبد الله بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: أحمد بن عبد الله بن أحمد بن عثمان",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الله",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "علي",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-929",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الله بن أحمد بن عبد الله",
    "fatherFullName": "أعقاب: عبد الله بن أحمد بن عبد الله",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "أحمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-930",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أحمد بن عبد الله بن أحمد",
    "fatherFullName": "أعقاب: أحمد بن عبد الله بن أحمد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الله",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-931",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "علي بن أحمد بن عبد الله",
    "fatherFullName": "أعقاب: علي بن أحمد بن عبد الله",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "أحمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-932",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أحمد بن علي بن أحمد",
    "fatherFullName": "أعقاب: أحمد بن علي بن أحمد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "علي",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-933",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "محمد بن عبد الله بن أحمد بن عثمان",
    "fatherFullName": "أعقاب: محمد بن عبد الله بن أحمد بن عثمان",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الله",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "أحمد",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-934",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الله بن محمد بن عبد الله",
    "fatherFullName": "أعقاب: عبد الله بن محمد بن عبد الله",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-935",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن عبد الله بن محمد",
    "fatherFullName": "أعقاب: محمد بن عبد الله بن محمد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الله",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-936",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "أحمد بن محمد بن عبد الله",
    "fatherFullName": "أعقاب: أحمد بن محمد بن عبد الله",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-937",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن أحمد بن محمد",
    "fatherFullName": "أعقاب: محمد بن أحمد بن محمد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-938",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "مالك بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "مالك بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-939",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "32/7",
    "fatherName": "مالك بن إبراهيم بن عبد الرحمن الجنيد (×)",
    "fatherFullName": "مالك بن إبراهيم بن عبد الرحمن الجنيد (×)",
    "generation": 32,
    "children": []
  },
  {
    "id": "seq-block-940",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "علي بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "علي بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-941",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "32/3",
    "fatherName": "علي بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: علي بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 32,
    "children": [
      {
        "code": "33/1",
        "name": "محمد",
        "generation": 33
      },
      {
        "code": "33/2",
        "name": "أحمد",
        "generation": 33
      }
    ]
  },
  {
    "id": "seq-block-942",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "33/1",
    "fatherName": "محمد بن علي بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: محمد بن علي بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 33,
    "children": [
      {
        "code": "34/1",
        "name": "علي",
        "generation": 34
      },
      {
        "code": "34/2",
        "name": "عبد الرحمن",
        "generation": 34
      }
    ]
  },
  {
    "id": "seq-block-943",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "34/1",
    "fatherName": "علي بن محمد بن علي بن إبراهيم",
    "fatherFullName": "أعقاب: علي بن محمد بن علي بن إبراهيم",
    "generation": 34,
    "children": [
      {
        "code": "35/1",
        "name": "محمد",
        "generation": 35
      },
      {
        "code": "35/2",
        "name": "يحيى",
        "generation": 35
      }
    ]
  },
  {
    "id": "seq-block-944",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "35/1",
    "fatherName": "محمد بن علي بن محمد بن علي",
    "fatherFullName": "أعقاب: محمد بن علي بن محمد بن علي",
    "generation": 35,
    "children": [
      {
        "code": "36/1",
        "name": "أحمد",
        "generation": 36
      },
      {
        "code": "36/2",
        "name": "عبد الله",
        "generation": 36
      }
    ]
  },
  {
    "id": "seq-block-945",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/1",
    "fatherName": "أحمد بن محمد بن علي بن محمد",
    "fatherFullName": "أعقاب: أحمد بن محمد بن علي بن محمد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "محمد",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "علي",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-946",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "محمد بن أحمد بن محمد بن علي",
    "fatherFullName": "أعقاب: محمد بن أحمد بن محمد بن علي",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "أحمد",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبد الله",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-947",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "أحمد بن محمد بن أحمد بن محمد",
    "fatherFullName": "أعقاب: أحمد بن محمد بن أحمد بن محمد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الرحمن",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-948",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن أحمد بن محمد بن أحمد",
    "fatherFullName": "أعقاب: محمد بن أحمد بن محمد بن أحمد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "علي",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-949",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أحمد بن محمد بن أحمد بن محمد",
    "fatherFullName": "أعقاب: أحمد بن محمد بن أحمد بن محمد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-950",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "علي بن محمد بن أحمد بن محمد",
    "fatherFullName": "أعقاب: علي بن محمد بن أحمد بن محمد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-951",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/2",
    "fatherName": "عبد الرحمن بن أحمد بن محمد بن أحمد",
    "fatherFullName": "أعقاب: عبد الرحمن بن أحمد بن محمد بن أحمد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "أحمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-952",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن عبد الرحمن بن أحمد",
    "fatherFullName": "أعقاب: محمد بن عبد الرحمن بن أحمد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-953",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "أحمد بن عبد الرحمن بن أحمد",
    "fatherFullName": "أعقاب: أحمد بن عبد الرحمن بن أحمد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-954",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "إسماعيل بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "إسماعيل بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-955",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "32/4",
    "fatherName": "إسماعيل بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: إسماعيل بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 32,
    "children": [
      {
        "code": "33/1",
        "name": "أحمد",
        "generation": 33
      },
      {
        "code": "33/2",
        "name": "محمد",
        "generation": 33
      }
    ]
  },
  {
    "id": "seq-block-956",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "33/1",
    "fatherName": "أحمد بن إسماعيل بن إبراهيم",
    "fatherFullName": "أعقاب: أحمد بن إسماعيل بن إبراهيم",
    "generation": 33,
    "children": [
      {
        "code": "34/1",
        "name": "إسماعيل",
        "generation": 34
      },
      {
        "code": "34/2",
        "name": "عبد الله",
        "generation": 34
      }
    ]
  },
  {
    "id": "seq-block-957",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "34/1",
    "fatherName": "إسماعيل بن أحمد بن إسماعيل",
    "fatherFullName": "أعقاب: إسماعيل بن أحمد بن إسماعيل",
    "generation": 34,
    "children": [
      {
        "code": "35/1",
        "name": "محمد",
        "generation": 35
      },
      {
        "code": "35/2",
        "name": "علي",
        "generation": 35
      }
    ]
  },
  {
    "id": "seq-block-958",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "35/1",
    "fatherName": "محمد بن إسماعيل بن أحمد",
    "fatherFullName": "أعقاب: محمد بن إسماعيل بن أحمد",
    "generation": 35,
    "children": [
      {
        "code": "36/1",
        "name": "أحمد",
        "generation": 36
      },
      {
        "code": "36/2",
        "name": "إسماعيل",
        "generation": 36
      }
    ]
  },
  {
    "id": "seq-block-959",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/1",
    "fatherName": "أحمد بن محمد بن إسماعيل",
    "fatherFullName": "أعقاب: أحمد بن محمد بن إسماعيل",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "محمد",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "عبد الله",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-960",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "محمد بن أحمد بن محمد",
    "fatherFullName": "أعقاب: محمد بن أحمد بن محمد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "أحمد",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "علي",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-961",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "أحمد بن محمد بن أحمد",
    "fatherFullName": "أعقاب: أحمد بن محمد بن أحمد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "محمد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الرحمن",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-962",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "محمد بن أحمد بن محمد",
    "fatherFullName": "أعقاب: محمد بن أحمد بن محمد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "أحمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "إسماعيل",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-963",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "أحمد بن محمد بن أحمد",
    "fatherFullName": "أعقاب: أحمد بن محمد بن أحمد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "محمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-964",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "إسماعيل بن محمد بن أحمد",
    "fatherFullName": "أعقاب: إسماعيل بن محمد بن أحمد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "أحمد",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-965",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبد الرحمن بن حسن بن حاجب بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "عبد الرحمن بن حسن بن حاجب بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-966",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "33/1",
    "fatherName": "حاجب بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: حاجب بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 33,
    "children": [
      {
        "code": "34/1",
        "name": "حسن",
        "generation": 34
      }
    ]
  },
  {
    "id": "seq-block-967",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "34/1",
    "fatherName": "حسن بن حاجب بن إبراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: حسن بن حاجب بن إبراهيم بن عبد الرحمن الجنيد",
    "generation": 34,
    "children": [
      {
        "code": "35/1",
        "name": "عبد الرحمن",
        "generation": 35
      }
    ]
  },
  {
    "id": "seq-block-968",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "35/1",
    "fatherName": "عبد الرحمن بن حسن بن حاجب بن إبراهيم",
    "fatherFullName": "أعقاب: عبد الرحمن بن حسن بن حاجب بن إبراهيم",
    "generation": 35,
    "children": [
      {
        "code": "36/1",
        "name": "محمد",
        "generation": 36
      },
      {
        "code": "36/2",
        "name": "أحمد",
        "generation": 36
      }
    ]
  },
  {
    "id": "seq-block-969",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/1",
    "fatherName": "محمد بن عبد الرحمن بن حسن بن حاجب",
    "fatherFullName": "أعقاب: محمد بن عبد الرحمن بن حسن بن حاجب",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "عبد الرحمن",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "علي",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-970",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "عبد الرحمن بن محمد بن عبد الرحمن",
    "fatherFullName": "أعقاب: عبد الرحمن بن محمد بن عبد الرحمن",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "محمد",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "أحمد",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-971",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "محمد بن عبد الرحمن بن محمد",
    "fatherFullName": "أعقاب: محمد بن عبد الرحمن بن محمد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الرحمن",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "عبد الله",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-972",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "عبد الرحمن بن محمد بن عبد الرحمن",
    "fatherFullName": "أعقاب: عبد الرحمن بن محمد بن عبد الرحمن",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "40/2",
        "name": "أحمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-973",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/1",
    "fatherName": "محمد بن عبد الرحمن بن محمد",
    "fatherFullName": "أعقاب: محمد بن عبد الرحمن بن محمد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-974",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "40/2",
    "fatherName": "أحمد بن عبد الرحمن بن محمد",
    "fatherFullName": "أعقاب: أحمد بن عبد الرحمن بن محمد",
    "generation": 40,
    "children": [
      {
        "code": "41/1",
        "name": "عبد الرحمن",
        "generation": 41
      }
    ]
  },
  {
    "id": "seq-block-975",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "العيدروس بن عبد الرحمن الجنيد",
    "fatherFullName": "العيدروس بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-976",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "31/2",
    "fatherName": "العيدروس بن عبد الرحمن الجنيد بن محمد جمال الدين",
    "fatherFullName": "أعقاب: العيدروس بن عبد الرحمن الجنيد بن محمد جمال الدين",
    "generation": 31,
    "children": [
      {
        "code": "32/1",
        "name": "عبد الرحمن",
        "generation": 32
      },
      {
        "code": "32/2",
        "name": "أحمد عقبه في تريم وحضرموت",
        "generation": 32
      }
    ]
  },
  {
    "id": "seq-block-977",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "فاضل بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-978",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "31/3",
    "fatherName": "فاضل بن عبد الرحمن الجنيد بن محمد جمال الدين",
    "fatherFullName": "أعقاب: فاضل بن عبد الرحمن الجنيد بن محمد جمال الدين",
    "generation": 31,
    "children": [
      {
        "code": "32/1",
        "name": "محمد",
        "generation": 32
      },
      {
        "code": "32/2",
        "name": "علي عقبه في قدس والحجرية",
        "generation": 32
      }
    ]
  },
  {
    "id": "seq-block-979",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-980",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "34/1",
    "fatherName": "عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 34,
    "children": [
      {
        "code": "35/1",
        "name": "قحطان",
        "generation": 35
      },
      {
        "code": "35/2",
        "name": "محسن",
        "generation": 35
      }
    ]
  },
  {
    "id": "seq-block-981",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "35/1",
    "fatherName": "قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 35,
    "children": [
      {
        "code": "36/1",
        "name": "مانع",
        "generation": 36
      }
    ]
  },
  {
    "id": "seq-block-982",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/1",
    "fatherName": "مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "علي",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "إبراهيم",
        "generation": 37
      },
      {
        "code": "37/3",
        "name": "عبده",
        "generation": 37
      },
      {
        "code": "37/4",
        "name": "محمود",
        "generation": 37
      },
      {
        "code": "37/5",
        "name": "محمد",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-983",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "علي بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: علي بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "أحمد",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عباس",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "محمد",
        "generation": 38
      },
      {
        "code": "38/4",
        "name": "يحي",
        "generation": 38
      },
      {
        "code": "37/5",
        "name": "مصطفى",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-984",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "أحمد بن علي بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: أحمد بن علي بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "بسام",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-985",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "بسام بن أحمد بن علي بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "بسام بن أحمد بن علي بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": []
  },
  {
    "id": "seq-block-986",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عباس بن علي بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عباس بن علي بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "بن",
        "generation": 39,
        "hasChildrenFollowup": true
      }
    ]
  },
  {
    "id": "seq-block-987",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/3",
    "fatherName": "محمد بن علي بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: محمد بن علي بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "بن",
        "generation": 39,
        "hasChildrenFollowup": true
      }
    ]
  },
  {
    "id": "seq-block-988",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/4",
    "fatherName": "يحي بن علي بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: يحي بن علي بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "الحسن",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-989",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/5",
    "fatherName": "مصطفى بن علي بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: مصطفى بن علي بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "بن",
        "generation": 39,
        "hasChildrenFollowup": true
      }
    ]
  },
  {
    "id": "seq-block-990",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "إبراهيم بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "إبراهيم بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-991",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/3",
    "fatherName": "عبده بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "عبده بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-992",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/4",
    "fatherName": "محمود بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "محمود بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-993",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/5",
    "fatherName": "محمد بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "محمد بن مانع بن قحطان بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-994",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "35/1",
    "fatherName": "محسن بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: محسن بن عبد الرحمن بن حسن بن حاجب بن ابراهيم بن عبد الرحمن الجنيد",
    "generation": 35,
    "children": [
      {
        "code": "37/1",
        "name": "بن",
        "generation": 37,
        "hasChildrenFollowup": true
      },
      {
        "code": "2/35",
        "name": "محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 35
      },
      {
        "code": "1/36",
        "name": "عثمان محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 36
      },
      {
        "code": "1/37",
        "name": "عبدالرب عثمان محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 37
      },
      {
        "code": "1/38",
        "name": "مهيوب",
        "generation": 38
      },
      {
        "code": "2/38",
        "name": "ابراهيم",
        "generation": 38
      },
      {
        "code": "3/38",
        "name": "هزاع",
        "generation": 38
      },
      {
        "code": "4/38",
        "name": "احمد",
        "generation": 38
      },
      {
        "code": "5/38",
        "name": "عبدالوهاب",
        "generation": 38
      },
      {
        "code": "3/38",
        "name": "هزاع بن عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 38
      },
      {
        "code": "1/38",
        "name": "احمد",
        "generation": 38
      },
      {
        "code": "2/38",
        "name": "حمود",
        "generation": 38
      },
      {
        "code": "3/38",
        "name": "قائد",
        "generation": 38
      },
      {
        "code": "3/39",
        "name": "احمد هزاع عبدالرب بن عثمان بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 39
      },
      {
        "code": "1/40",
        "name": "عبده",
        "generation": 40
      },
      {
        "code": "2/40",
        "name": "عوض",
        "generation": 40
      },
      {
        "code": "3/40",
        "name": "محمد",
        "generation": 40
      },
      {
        "code": "4/40",
        "name": "توفيق",
        "generation": 40
      },
      {
        "code": "1/40",
        "name": "عبده احمد هزاع عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 40
      },
      {
        "code": "1/41",
        "name": "سامي",
        "generation": 41
      },
      {
        "code": "2/41",
        "name": "اسامه",
        "generation": 41
      },
      {
        "code": "3/41",
        "name": "عبدالرحمن",
        "generation": 41
      },
      {
        "code": "2/40",
        "name": "عوض احمد هزاع عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 40
      },
      {
        "code": "1/41",
        "name": "محمد",
        "generation": 41
      },
      {
        "code": "2/41",
        "name": "احمد",
        "generation": 41
      },
      {
        "code": "3/41",
        "name": "عبدالله",
        "generation": 41
      },
      {
        "code": "4/41",
        "name": "عبدالرحمن",
        "generation": 41
      },
      {
        "code": "5/41",
        "name": "حامد",
        "generation": 41
      },
      {
        "code": "6/41",
        "name": "وجية",
        "generation": 41
      },
      {
        "code": "3/41",
        "name": "محمد احمد هزاع عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 41
      },
      {
        "code": "1/41",
        "name": "علي",
        "generation": 41
      },
      {
        "code": "2/41",
        "name": "ياسر",
        "generation": 41
      },
      {
        "code": "3/41",
        "name": "يوسف",
        "generation": 41
      },
      {
        "code": "4/40",
        "name": "توفيق احمد هزاع عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 40
      },
      {
        "code": "1/41",
        "name": "احمد",
        "generation": 41
      },
      {
        "code": "2/41",
        "name": "حمدي",
        "generation": 41
      },
      {
        "code": "1/41",
        "name": "سامي عبده احمد هزاع عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 41
      },
      {
        "code": "1/42",
        "name": "احمد",
        "generation": 42
      },
      {
        "code": "2/42",
        "name": "محمد",
        "generation": 42
      },
      {
        "code": "2/41",
        "name": "اسامه عبده احمد هزاع عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 41
      },
      {
        "code": "1/42",
        "name": "علي",
        "generation": 42
      },
      {
        "code": "3/41",
        "name": "عبدالرحمن عبده احمد هزاع عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 41
      },
      {
        "code": "1/42",
        "name": "عمرو",
        "generation": 42
      },
      {
        "code": "2/42",
        "name": "علي",
        "generation": 42
      },
      {
        "code": "1/41",
        "name": "علي محمد احمد هزاع عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب 0",
        "generation": 41
      },
      {
        "code": "2/41",
        "name": "ياسر محمد احمد هزاع عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 41
      },
      {
        "code": "1/42",
        "name": "عمار",
        "generation": 42
      },
      {
        "code": "2/40",
        "name": "عوض احمد هزاع عبده عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 40
      },
      {
        "code": "1/41",
        "name": "محمد عوض احمد هزاع عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 41
      },
      {
        "code": "1/42",
        "name": "الحسن 2",
        "generation": 42
      },
      {
        "code": "2/41",
        "name": "احمد عوض احمد هزاع عبده اعقب",
        "generation": 41
      },
      {
        "code": "1/42",
        "name": "حسين",
        "generation": 42
      },
      {
        "code": "3/41",
        "name": "عبدالرحمن عوض احمد هزاع عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 41
      },
      {
        "code": "1/42",
        "name": "مرتضى",
        "generation": 42
      },
      {
        "code": "4/41",
        "name": "عبدالله عوض احمد هزاع عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 41
      },
      {
        "code": "5/41",
        "name": "حامد عوض احمد هزاع عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 41
      },
      {
        "code": "6/41",
        "name": "وجية عوض احمد هزاع عبدالرب بن عثمان بن محسن بن عبدالرحمن بن حسن بن حاجب بن ابراهيم بن عبدالرحمن الجنيد اعقب",
        "generation": 41
      },
      {
        "code": "1/420",
        "name": "من فوق ابراهيم حاجب حسن حاجب أولاده بشر وحسين وقايد وناجي وماذكر هم اربعه أو خمسه ناجي جدنا أولاده بالترتيب صالح وسنان وحسن وعبدالرحمن ناجي جدنا أولاده محسن وقحطان محسن لديه ولد واحد عثمان عثمان لديه ولد واحد عبدالرب وعبدالرب لديه خمسه وهم مهيوب وابراهيم وهزاع واحمد وعبدالوهاب",
        "generation": 1
      }
    ]
  },
  {
    "id": "seq-block-995",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "",
    "fatherName": "فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "فاضل بن عبد الرحمن الجنيد",
    "generation": 30,
    "children": []
  },
  {
    "id": "seq-block-996",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "31/5",
    "fatherName": "فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: فاضل بن عبد الرحمن الجنيد",
    "generation": 31,
    "children": [
      {
        "code": "32/1",
        "name": "فضل",
        "generation": 32
      }
    ]
  },
  {
    "id": "seq-block-997",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "32/1",
    "fatherName": "فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 32,
    "children": [
      {
        "code": "33/1",
        "name": "علي",
        "generation": 33
      }
    ]
  },
  {
    "id": "seq-block-998",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "33/1",
    "fatherName": "علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 33,
    "children": [
      {
        "code": "34/1",
        "name": "صالح",
        "generation": 34
      }
    ]
  },
  {
    "id": "seq-block-999",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "34/1",
    "fatherName": "صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 34,
    "children": [
      {
        "code": "35/1",
        "name": "محمد",
        "generation": 35
      },
      {
        "code": "35/2",
        "name": "عبد الرحمن",
        "generation": 35
      },
      {
        "code": "35/3",
        "name": "احمد",
        "generation": 35
      }
    ]
  },
  {
    "id": "seq-block-1000",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "35/1",
    "fatherName": "محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 35,
    "children": [
      {
        "code": "36/1",
        "name": "سعيد",
        "generation": 36
      },
      {
        "code": "36/2",
        "name": "قاسم",
        "generation": 36
      },
      {
        "code": "36/3",
        "name": "قائد",
        "generation": 36
      },
      {
        "code": "36/4",
        "name": "إبراهيم",
        "generation": 36
      },
      {
        "code": "36/5",
        "name": "عبد الوهاب",
        "generation": 36
      },
      {
        "code": "36/6",
        "name": "عبد الهادي",
        "generation": 36
      }
    ]
  },
  {
    "id": "seq-block-1001",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/1",
    "fatherName": "سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "عبد الجليل",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "هاشم",
        "generation": 37
      },
      {
        "code": "37/3",
        "name": "عبد العزيز",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-1002",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "عبد الجليل بن سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الجليل بن سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الكريم",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبد الإله",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "محمد",
        "generation": 38
      },
      {
        "code": "38/4",
        "name": "احمد",
        "generation": 38
      },
      {
        "code": "38/5",
        "name": "صادق",
        "generation": 38
      },
      {
        "code": "38/6",
        "name": "منير",
        "generation": 38
      },
      {
        "code": "38/7",
        "name": "منير",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-1003",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الكريم بن عبد الجليل بن سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الكريم بن عبد الجليل بن سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "مصطفى",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "مراد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-1004",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "39/1",
    "fatherName": "مصطفى بن عبد الكريم بن عبد الجليل بن سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: مصطفى بن عبد الكريم بن عبد الجليل بن سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 39,
    "children": [
      {
        "code": "40/1",
        "name": "احمد",
        "generation": 40
      }
    ]
  },
  {
    "id": "seq-block-1005",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "عبد الإله بن عبد الجليل بن سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الإله بن عبد الجليل بن سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "حامد",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "شاكر",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "أمين",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "حمزة",
        "generation": 39
      },
      {
        "code": "39/5",
        "name": "محمد",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-1006",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/3",
    "fatherName": "محمد بن عبد الجليل بن سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: محمد بن عبد الجليل بن سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": [
      {
        "code": "39/1",
        "name": "عبد الله",
        "generation": 39
      },
      {
        "code": "39/2",
        "name": "مطهر",
        "generation": 39
      },
      {
        "code": "39/3",
        "name": "عمر",
        "generation": 39
      },
      {
        "code": "39/4",
        "name": "إبراهيم",
        "generation": 39
      }
    ]
  },
  {
    "id": "seq-block-1007",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "هاشم بن سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: هاشم بن سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "محمد",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "إبراهيم",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "عبد الباقي",
        "generation": 38
      },
      {
        "code": "38/4",
        "name": "أحمد",
        "generation": 38
      },
      {
        "code": "38/5",
        "name": "عبد العليم",
        "generation": 38
      },
      {
        "code": "38/6",
        "name": "رشيد",
        "generation": 38
      },
      {
        "code": "38/7",
        "name": "جلال",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-1008",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/3",
    "fatherName": "عبد العزيز بن سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد العزيز بن سعيد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "علي",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "محمد",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "عمر",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-1009",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/2",
    "fatherName": "قاسم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: قاسم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "هاشم",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "عبد الغني",
        "generation": 37
      },
      {
        "code": "37/3",
        "name": "عبد الفتاح",
        "generation": 37
      },
      {
        "code": "37/4",
        "name": "عبد العزيز",
        "generation": 37
      },
      {
        "code": "37/5",
        "name": "عبد السلام",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-1010",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "هاشم بن قاسم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: هاشم بن قاسم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الله",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-1011",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الله بن هاشم بن قاسم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "عبد الله بن هاشم بن قاسم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": []
  },
  {
    "id": "seq-block-1012",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "عبد الغني قاسم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "عبد الغني قاسم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-1013",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/3",
    "fatherName": "عبد الفتاح قاسم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الفتاح قاسم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "محمد",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "عبد الله",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-1014",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/4",
    "fatherName": "عبد العزيز قاسم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد العزيز قاسم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عمر",
        "generation": 38,
        "isMartyr": true
      }
    ]
  },
  {
    "id": "seq-block-1015",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/5",
    "fatherName": "عبد السلام قاسم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد السلام قاسم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "محمود",
        "generation": 38
      },
      {
        "code": "38/3",
        "name": "إبراهيم",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-1016",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/3",
    "fatherName": "قائد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: قائد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "عبد الصمد",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "عبد الولي",
        "generation": 37
      },
      {
        "code": "37/3",
        "name": "عبد الغني",
        "generation": 37,
        "noOffspring": true
      }
    ]
  },
  {
    "id": "seq-block-1017",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "عبد الصمد بن قائد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الصمد بن قائد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الكريم",
        "generation": 38
      },
      {
        "code": "38/2",
        "name": "أحمد",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-1018",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/1",
    "fatherName": "عبد الكريم بن عبد الصمد بن قائد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "عبد الكريم بن عبد الصمد بن قائد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": []
  },
  {
    "id": "seq-block-1019",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "38/2",
    "fatherName": "أحمد بن عبد الصمد بن قائد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أحمد بن عبد الصمد بن قائد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 38,
    "children": []
  },
  {
    "id": "seq-block-1020",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "عبد الولي بن قائد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الولي بن قائد بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "إبراهيم",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-1021",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/4",
    "fatherName": "إبراهيم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: إبراهيم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "عبد العزيز",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-1022",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "عبد العزيز بن إبراهيم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد العزيز بن إبراهيم بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "إبراهيم",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-1023",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/5",
    "fatherName": "عبد الوهاب بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "عبد الوهاب بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": []
  },
  {
    "id": "seq-block-1024",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/6",
    "fatherName": "عبد الهادي بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الهادي بن محمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "علي",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "عبد الودود",
        "generation": 37
      },
      {
        "code": "37/3",
        "name": "عبد العزيز",
        "generation": 37
      },
      {
        "code": "37/4",
        "name": "عبد الشكور",
        "generation": 37
      },
      {
        "code": "37/5",
        "name": "أحمد",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-1025",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "35/2",
    "fatherName": "عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 35,
    "children": [
      {
        "code": "36/1",
        "name": "عبد المجيد",
        "generation": 36
      },
      {
        "code": "36/2",
        "name": "عبد الملك",
        "generation": 36
      },
      {
        "code": "36/3",
        "name": "عبد الجبار",
        "generation": 36
      },
      {
        "code": "36/4",
        "name": "عبد القادر",
        "generation": 36
      }
    ]
  },
  {
    "id": "seq-block-1026",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/1",
    "fatherName": "عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "محمد",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "قاسم",
        "generation": 37
      },
      {
        "code": "37/3",
        "name": "عبد الله",
        "generation": 37
      },
      {
        "code": "37/4",
        "name": "عبد المعطي",
        "generation": 37
      },
      {
        "code": "37/5",
        "name": "عبد العليم",
        "generation": 37
      },
      {
        "code": "37/6",
        "name": "فهد",
        "generation": 37
      },
      {
        "code": "37/7",
        "name": "خالد",
        "generation": 37
      },
      {
        "code": "37/8",
        "name": "منير",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-1027",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "محمد بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "محمد بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-1028",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "قاسم بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "قاسم بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-1029",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/3",
    "fatherName": "عبد الله بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "عبد الله بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-1030",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/4",
    "fatherName": "عبد المعطي بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "عبد المعطي بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-1031",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/5",
    "fatherName": "عبد العليم بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "عبد العليم بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-1032",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/6",
    "fatherName": "فهد بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "فهد بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-1033",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/7",
    "fatherName": "خالد بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "خالد بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-1034",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/8",
    "fatherName": "منير بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "منير بن عبد المجيد بن عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-1035",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/2",
    "fatherName": "عبد الملك عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الملك عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "أحمد",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "عبد الفتاح",
        "generation": 37
      },
      {
        "code": "37/3",
        "name": "عبد الرزاق",
        "generation": 37
      },
      {
        "code": "37/4",
        "name": "عبد الرقيب",
        "generation": 37
      },
      {
        "code": "37/5",
        "name": "عبد السلام",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-1036",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/3",
    "fatherName": "عبد الجبار عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الجبار عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "جميل",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-1037",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/4",
    "fatherName": "عبد القادر عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد القادر عبد الرحمن بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "محمد",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "أحمد",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-1038",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "35/3",
    "fatherName": "أحمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: أحمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 35,
    "children": [
      {
        "code": "36/1",
        "name": "عبد الوهاب",
        "generation": 36
      }
    ]
  },
  {
    "id": "seq-block-1039",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "36/1",
    "fatherName": "عبد الوهاب بن احمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الوهاب بن احمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 36,
    "children": [
      {
        "code": "37/1",
        "name": "عبد الواحد",
        "generation": 37
      },
      {
        "code": "37/2",
        "name": "محمد",
        "generation": 37
      },
      {
        "code": "37/3",
        "name": "حزام",
        "generation": 37
      },
      {
        "code": "37/4",
        "name": "حمود",
        "generation": 37
      }
    ]
  },
  {
    "id": "seq-block-1040",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/1",
    "fatherName": "عبد الواحد بن عبد الوهاب بن احمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: عبد الواحد بن عبد الوهاب بن احمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عبد الرزاق",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-1041",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/2",
    "fatherName": "محمد بن عبد الوهاب بن أحمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "محمد بن عبد الوهاب بن أحمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": []
  },
  {
    "id": "seq-block-1042",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/3",
    "fatherName": "حزام بن عبد الوهاب بن أحمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: حزام بن عبد الوهاب بن أحمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "محمد",
        "generation": 38
      }
    ]
  },
  {
    "id": "seq-block-1043",
    "mainBranch": "أعقاب شارح البحر",
    "fatherCode": "37/4",
    "fatherName": "حمود بن عبد الوهاب بن احمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "fatherFullName": "أعقاب: حمود بن عبد الوهاب بن احمد بن صالح بن علي بن فضل بن فاضل بن عبد الرحمن الجنيد",
    "generation": 37,
    "children": [
      {
        "code": "38/1",
        "name": "عايض",
        "generation": 38
      }
    ]
  }
];
