import { z } from "zod";
// import { fi } from "zod/locales";

export const loginSchema = z.object({
  phone: z.string().regex(/^\+9639\d{8}$/, {
    message: "Phone number must be in international format (e.g. +9639XXXXXXX)",
  }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

const baseSignUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().regex(/^\+9639\d{8}$/, {
    message: "Phone number must be in international format (e.g. +9639XXXXXXX)",
  }),
  email: z.email().optional(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z
    .string()
    .min(6, "Confirm password must be at least 6 characters"),
  gender: z.enum(["ذكر", "أنثى"]),
  age: z.coerce.number().min(1).max(120),
  province: z.string().nonempty("province is required"),
  city: z.string().nonempty(" city is required"),
});

export const signUpSchema = baseSignUpSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
);

export type SignUpSchema = z.infer<typeof signUpSchema>;

export const SymptomsSchema = z.object({
  symptomsText: z
    .string("")
    .min(10, "يرجى كتابة وصف أوضح للأعراض")
    .max(500, "الوصف طويل جدًا"),
  quickSymptoms: z.array(z.string()).min(1, "يرجى اختيار عرض واحد على الأقل"),
  duration: z.enum(
    ["أقل من يوم", "1-3 أيام", "أسبوع", "أسبوعين", "شهر", "أكثر من شهر"],
    {
      error: "مدة الأعراض مطلوبة",
    }
  ),
  severity: z.enum(["low", "medium", "high"], {
    error: "يرجى اختيار شدة الأعراض",
  }),
});

export type SymptomsType = z.infer<typeof SymptomsSchema>;

export const DoctorSearchSchema = z.object({
  specialty: z.string().min(1, "يرجى اختيار التخصص"),
  province: z.string().optional(),
  city: z.string().optional(),
});

export type DoctorSearchType = z.infer<typeof DoctorSearchSchema>;