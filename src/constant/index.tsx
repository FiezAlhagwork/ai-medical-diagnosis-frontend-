/* eslint-disable react-refresh/only-export-components */
export const AvatarGroupData = [
  {
    id: 1,
    img: "./doctor1.jpg",
    className: "-ml-4",
  },
  {
    id: 2,
    img: "./doctor2.jpg",
    className: "-ml-4",
  },
  {
    id: 3,
    img: "./doctor1.jpg",
    className: "-ml-4",
  },
  {
    id: 4,
    img: "./doctor2.jpg",
    className: "-ml-4",
  },
  {
    id: 5,
    img: "./doctor1.jpg",
    className: "-ml-4",
  },
];

export const messagesAr: string[] = [
  " احصل على نصائح طبية مخصصة بناءً على حالتك الصحية",
  "أكتر من 10,000 مريض وثقوا فينا وإنت الدور الجاي",
  "طبّك أدق تشخيصك أسرع ونتيجتك أوضح. ",
];

export const messagesEn: string[] = [
  "Get personalized medical advice based on your health condition",
  "Trusted by over 10,000 patients  now it’s your turn",
  "Sharper diagnostics. Faster answers. Clearer results",
];

export const DURATION_LABELS = {
  ar: {
    "أقل من يوم": "أقل من يوم",
    "1-3 أيام": "1-3 أيام",
    "أسبوع": "أسبوع",
    "أسبوعين": "أسبوعين",
    "شهر": "شهر",
    "أكثر من شهر": "أكثر من شهر",
  },
  en: {
    "أقل من يوم": "Less than a day",
    "1-3 أيام": "1–3 days",
    "أسبوع": "One week",
    "أسبوعين": "Two weeks",
    "شهر": "One month",
    "أكثر من شهر": "More than a month",
  },
} as const;


export const DURATIONS = [
  "أقل من يوم",
  "1-3 أيام",
  "أسبوع",
  "أسبوعين",
  "شهر",
  "أكثر من شهر",
] as const;

