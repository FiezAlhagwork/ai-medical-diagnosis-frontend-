import { z } from "zod";
// import { fi } from "zod/locales";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

const baseSignUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z
    .string()
    .min(6, "Confirm password must be at least 6 characters"),
  gender: z.enum(["ذكر", "أنثى"]).optional(),
  age: z.coerce.number().min(1).max(120).optional(),
  province: z.string().nonempty("province is required").optional(),
  city: z.string().nonempty(" city is required").optional(),
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
