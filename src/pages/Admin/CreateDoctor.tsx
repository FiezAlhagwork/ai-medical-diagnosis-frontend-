import { useEffect, useId, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Resolver, type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { DoctorCreateSchema, type DoctorCreateType } from "../../schema";
import TextField from "../../components/ui/TextField";
import SelectField from "../../components/ui/SelectField";
import Button from "../../components/ui/Button";
import { cities, specialties, provinces } from "../../constant";
import { createDoctor } from "../../services/Doctor";


const steps = [
    { id: 1, label: "المعلومات الأساسية" },
    { id: 2, label: "الموقع" },
    { id: 3, label: "التواصل" },
    { id: 4, label: "السعر" },
    { id: 5, label: "الوسائط" },
] as const;

// الحقول الخاصة بكل خطوة لاستخدامها في trigger
const stepFields: (keyof DoctorCreateType | string)[][] = [
    ["name", "specialty", "experienceYears", "age", "languages", "education.university"],
    ["province", "city", "clinicAddress"],
    [
        "contact.phone",
        "contact.email",
        "contact.socialLinks.facebook",
        "contact.socialLinks.instagram",
        "contact.socialLinks.linkedin",
        "contact.socialLinks.portfolio",
    ],
    ["price"],
    ["image"],
];



const CreateDoctor = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
    const [imageName, setImageName] = useState<string | null>(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const imageInputId = useId();

    const { register, handleSubmit, trigger, formState, setValue, setError } = useForm<DoctorCreateType>({
        resolver: zodResolver(DoctorCreateSchema) as Resolver<DoctorCreateType>,
        mode: "onBlur",
        defaultValues: {
            contact: {
                socialLinks: {
                    facebook: "",
                    instagram: "",
                    linkedin: "",
                    portfolio: "",
                },
            },
        },
    });

    const { errors, isSubmitting } = formState;
    const navigate = useNavigate();

    const isLastStep = currentStep === steps.length - 1;

    useEffect(() => {
        return () => {
            if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
        };
    }, [imagePreviewUrl]);

    const setSelectedImage = (file: File | null) => {
        if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);

        if (!file) {
            setImagePreviewUrl(null);
            setImageName(null);
            setValue("image", null as unknown as DoctorCreateType["image"], {
                shouldDirty: true,
                shouldValidate: true,
            });
            return;
        }

        setImageName(file.name);
        setImagePreviewUrl(URL.createObjectURL(file));
        setValue("image", file as unknown as DoctorCreateType["image"], {
            shouldDirty: true,
            shouldValidate: true,
        });
    };

    const handleNext = async () => {
        const currentFields = stepFields[currentStep];
        const isValid = await trigger(currentFields as (keyof DoctorCreateType)[], {
            shouldFocus: true,
        });
        if (!isValid) return;
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const onSubmit: SubmitHandler<DoctorCreateType> = async (data: DoctorCreateType) => {
        try {
            // إنشاء FormData
            const formData = new FormData();

            // إضافة الحقول النصية
            formData.append("name", data.name);
            formData.append("specialty", data.specialty);
            formData.append("experienceYears", data.experienceYears.toString());
            formData.append("age", data.age.toString());
            formData.append("languages", data.languages);
            formData.append("province", data.province);
            formData.append("city", data.city);
            formData.append("clinicAddress", data.clinicAddress);
            formData.append("price", data.price);

            // إضافة معلومات التواصل
            formData.append("contact[phone]", data.contact.phone);
            formData.append("contact[email]", data.contact.email);
            formData.append("education[university]", data.education.university)
            // إضافة روابط التواصل الاجتماعي (إذا كانت موجودة)
            if (data.contact.socialLinks?.facebook) {
                formData.append("contact[socialLinks][facebook]", data.contact.socialLinks.facebook);
            }
            if (data.contact.socialLinks?.instagram) {
                formData.append("contact[socialLinks][instagram]", data.contact.socialLinks.instagram);
            }
            if (data.contact.socialLinks?.linkedin) {
                formData.append("contact[socialLinks][linkedin]", data.contact.socialLinks.linkedin);
            }
            if (data.contact.socialLinks?.portfolio) {
                formData.append("contact[socialLinks][portfolio]", data.contact.socialLinks.portfolio);
            }

            // إضافة الصورة إذا كانت موجودة
            if (data.image && data.image instanceof File) {
                formData.append("file", data.image);
            }

            // إرسال البيانات
            const response = await createDoctor(formData);

            if (response.doctor && !response.error) {
                // نجح الإنشاء - التنقل إلى صفحة الطبيب أو قائمة الأطباء
                navigate(`/admin/doctors`);
            }
        } catch (error: unknown) {
            const message =
                (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
                "حدث خطأ أثناء إنشاء الطبيب، يرجى المحاولة مرة أخرى";

            setError("root", {
                type: "server",
                message,
            });
        }
    };

    return (
        <main className="py-4 overflow-auto">
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                    إنشاء حساب طبيب جديد
                </h1>
                <p className="text-sm text-slate-500">
                    قم بإدخال بيانات الطبيب عبر الخطوات التالية، ثم تأكيد الإنشاء.
                </p>
            </div>

            {/* Stepper */}
            <div className="mb-8">
                <div className="flex items-center justify-between gap-2">
                    {steps.map((step, index) => {
                        const isActive = index === currentStep;
                        const isCompleted = index < currentStep;
                        return (
                            <div key={step.id} className="flex-1 flex items-center">
                                <div className="flex flex-col items-center gap-1">
                                    <div
                                        className={`flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold border 
                    ${isCompleted
                                                ? "bg-primary text-white border-primary"
                                                : ""
                                            }
                    ${isActive && !isCompleted
                                                ? "bg-blue-50 text-primary border-primary"
                                                : ""
                                            }
                    ${!isActive && !isCompleted
                                                ? "bg-white text-slate-500 border-slate-300"
                                                : ""
                                            }
                  `}
                                    >
                                        {step.id}
                                    </div>
                                    <span className="hidden md:block text-[11px] text-slate-500">
                                        {step.label}
                                    </span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="flex-1 h-[2px] mx-2 bg-slate-200 md:mx-3" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Step 1 – Basic Info */}
                {currentStep === 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextField
                            label="اسم الطبيب"
                            registration={register("name")}
                            error={errors.name}
                        />
                        <SelectField
                            label="التخصص"
                            options={specialties}
                            registration={register("specialty")}
                            error={errors.specialty}
                        />
                        <TextField
                            label="سنوات الخبرة"
                            type="number"
                            registration={register("experienceYears")}
                            error={errors.experienceYears}
                        />
                        <TextField
                            label="العمر"
                            type="number"
                            registration={register("age")}
                            error={errors.age}
                        />
                        <TextField
                            label="اللغات (مثال: العربية، الإنكليزية)"
                            registration={register("languages")}
                            error={errors.languages}
                        />
                        <TextField
                            label="الجامعة"
                            registration={register("education.university")}
                            error={errors.education?.university}
                        />
                    </div>
                )}

                {/* Step 2 – Location */}
                {currentStep === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <SelectField
                            label="المحافظة"
                            options={provinces}
                            registration={register("province")}
                            error={errors.province}
                        />
                        <SelectField
                            label="المدينة"
                            options={cities}
                            registration={register("city")}
                            error={errors.city}
                        />
                        <div className="md:col-span-2">
                            <TextField
                                label="عنوان العيادة"
                                registration={register("clinicAddress")}
                                error={errors.clinicAddress}
                            />
                        </div>
                    </div>
                )}

                {/* Step 3 – Contact */}
                {currentStep === 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextField
                            label="رقم الهاتف"
                            registration={register("contact.phone")}
                            error={errors.contact?.phone}
                        />
                        <TextField
                            label="البريد الإلكتروني"
                            registration={register("contact.email")}
                            error={errors.contact?.email}
                        />
                        <TextField
                            label="Facebook (اختياري)"
                            registration={register("contact.socialLinks.facebook")}
                            error={errors.contact?.socialLinks?.facebook}
                        />
                        <TextField
                            label="Instagram (اختياري)"
                            registration={register("contact.socialLinks.instagram")}
                            error={errors.contact?.socialLinks?.instagram}
                        />
                        <TextField
                            label="LinkedIn (اختياري)"
                            registration={register("contact.socialLinks.linkedin")}
                            error={errors.contact?.socialLinks?.linkedin}
                        />
                        <TextField
                            label="Portfolio (اختياري)"
                            registration={register("contact.socialLinks.portfolio")}
                            error={errors.contact?.socialLinks?.portfolio}
                        />
                    </div>
                )}

                {/* Step 4 – Pricing */}
                {currentStep === 3 && (
                    <div className="max-w-md">
                        <TextField
                            label="سعر الكشف"
                            registration={register("price")}
                            error={errors.price}
                        />
                    </div>
                )}

                {/* Step 5 – Media */}
                {currentStep === 4 && (
                    <div className="space-y-3 max-w-md">
                        <div className="flex items-center justify-between gap-3">
                            <label
                                htmlFor={imageInputId}
                                className="text-[15px] font-medium text-slate-900"
                            >
                                صورة الطبيب <span className="text-slate-400">(اختياري)</span>
                            </label>
                            {imagePreviewUrl && (
                                <button
                                    type="button"
                                    onClick={() => setSelectedImage(null)}
                                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline underline-offset-4"
                                >
                                    إزالة الصورة
                                </button>
                            )}
                        </div>

                        <div
                            className={`rounded-xl border bg-white p-4 transition 
                                ${errors.image ? "border-red-300" : "border-slate-200"}
                                ${isDragOver ? "ring-2 ring-primary/30 border-primary/40" : ""}
                            `}
                            onDragEnter={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setIsDragOver(true);
                            }}
                            onDragOver={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setIsDragOver(true);
                            }}
                            onDragLeave={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setIsDragOver(false);
                            }}
                            onDrop={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setIsDragOver(false);
                                const file = e.dataTransfer.files?.[0];
                                if (file) setSelectedImage(file);
                            }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 w-16 h-16 rounded-lg bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center">
                                    {imagePreviewUrl ? (
                                        <img
                                            src={imagePreviewUrl}
                                            alt="معاينة صورة الطبيب"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-slate-200" />
                                    )}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-slate-900">
                                        {imagePreviewUrl ? "تم اختيار صورة" : "اسحب الصورة وأفلِتها هنا"}
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">
                                        أو اختر ملفًا من جهازك. يفضّل JPG/PNG وبحجم مناسب.
                                    </p>
                                    {imageName && (
                                        <p className="text-xs text-slate-700 mt-2 truncate">
                                            {imageName}
                                        </p>
                                    )}

                                    <div className="mt-3 flex items-center gap-2">
                                        <label
                                            htmlFor={imageInputId}
                                            className="inline-flex items-center justify-center rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700 cursor-pointer"
                                        >
                                            اختيار صورة
                                        </label>
                                        {imagePreviewUrl && (
                                            <button
                                                type="button"
                                                onClick={() => setSelectedImage(null)}
                                                className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                                            >
                                                إزالة
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <input
                                id={imageInputId}
                                type="file"
                                accept="image/*"
                                className="sr-only"
                                {...register("image", {
                                    onChange: (e) => {
                                        const file = (e.target as HTMLInputElement).files?.[0] ?? null;
                                        setSelectedImage(file);
                                    },
                                })}
                            />
                        </div>

                        {errors.image && (
                            <p className="text-xs text-red-500">
                                حقل الصورة غير صالح، حاول مرة أخرى
                            </p>
                        )}
                    </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 gap-4">
                    <Button
                        type="button"
                        variant="outline"
                        classNameButton="w-auto px-6"
                        onClick={handleBack}
                        disabled={currentStep === 0 || isSubmitting}
                    >
                        رجوع
                    </Button>

                    {!isLastStep && (
                        <Button
                            type="button"
                            classNameButton="w-auto px-6"
                            onClick={handleNext}
                            disabled={isSubmitting}
                        >
                            التالي
                        </Button>
                    )}

                    {isLastStep && (
                        <Button
                            type="submit"
                            classNameButton="w-auto px-6"
                            isLoading={isSubmitting}
                        >
                            إنشاء الطبيب
                        </Button>
                    )}
                </div>
                {errors.root && (
                    <p className="text-xs text-red-500 mt-2 text-center">
                        {errors.root.message}
                    </p>
                )}
            </form>
        </main>
    );
};

export default CreateDoctor;