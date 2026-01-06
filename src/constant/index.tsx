

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


export const SEVERITIES = ["low", "medium", "high"] as const;
export const SEVERITY_CONFIG = {
  low: {
    id: "low",
    order: 1,
    color: "emerald",
    activeClass: "bg-emerald-100 text-emerald-600 border-emerald-600",
    inactiveClass: "border-emerald-300 text-emerald-700",
  },
  medium: {
    id: "medium",
    order: 2,
    color: "orange",
    activeClass: "bg-orange-100 text-orange-600 border-orange-600",
    inactiveClass: "border-orange-300 text-orange-700",
  },
  high: {
    id: "high",
    order: 3,
    color: "red",
    activeClass: "bg-red-100 text-red-600 border-red-600",
    inactiveClass: "border-red-300 text-red-700",
  },
} as const;


export const QUICK_SYMPTOMS = [
  { id: "headache", order: 1 },
  { id: "fever", order: 2 },
  { id: "cough", order: 3 },
  { id: "sore_throat", order: 4 },
  { id: "runny_nose", order: 5 },
  { id: "shortness_of_breath", order: 6 },
  { id: "chest_pain", order: 7 },
  { id: "fatigue", order: 8 },
  { id: "muscle_pain", order: 9 },
  { id: "joint_pain", order: 10 },
  { id: "nausea", order: 11 },
  { id: "vomiting", order: 12 },
  { id: "diarrhea", order: 13 },
  { id: "abdominal_pain", order: 14 },
  { id: "loss_of_appetite", order: 15 },
  { id: "dizziness", order: 16 },
  { id: "fainting", order: 17 },
  { id: "blurred_vision", order: 18 },
  { id: "ear_pain", order: 19 },
  { id: "toothache", order: 20 },
  { id: "back_pain", order: 21 },
  { id: "neck_pain", order: 22 },
  { id: "rash", order: 23 },
  { id: "itching", order: 24 },
  { id: "swelling", order: 25 },
  { id: "weight_loss", order: 26 },
  { id: "weight_gain", order: 27 },
  { id: "night_sweats", order: 28 },
  { id: "chills", order: 29 },
  { id: "palpitations", order: 30 },
  { id: "anxiety", order: 31 },
  { id: "depression", order: 32 },
  { id: "sleep_disturbance", order: 33 },
  { id: "memory_problems", order: 34 },
  { id: "confusion", order: 35 },
  { id: "tremor", order: 36 },
  { id: "numbness", order: 37 },
  { id: "tingling", order: 38 },
  { id: "burning_urination", order: 39 },
  { id: "frequent_urination", order: 40 },
  { id: "blood_in_urine", order: 41 },
  { id: "constipation", order: 42 },
  { id: "heartburn", order: 43 },
  { id: "bloating", order: 44 },
  { id: "dry_mouth", order: 45 },
  { id: "excessive_thirst", order: 46 },
  { id: "hair_loss", order: 47 },
  { id: "skin_dryness", order: 48 },
  { id: "cold_intolerance", order: 49 },
  { id: "heat_intolerance", order: 50 },
] as const;

