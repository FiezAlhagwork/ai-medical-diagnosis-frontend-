/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SymptomsSchema, type SymptomsType } from "../../schema";
import { useTranslation } from "react-i18next";
import type { Lang } from "../../types";
import SymptomsTextarea from "../../components/symptoms/SymptomsTextarea";
import QuickSymptomsSelector from "../../components/symptoms/QuickSymptomsSelector";
import DurationSelector from "../../components/symptoms/DurationSelector";
import SeveritySelector from "../../components/symptoms/SeveritySelector";
import Button from "../../components/ui/Button";
import { createDiagnosis } from "../../services/Diagnosis";
import { useNavigate } from "react-router-dom";
import { useDiagnosis } from "../../context/DiagnosisContext";
import { LuActivity } from "react-icons/lu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";




const SymptomsPage = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false)
  const { t, i18n } = useTranslation("symptoms");

  // تمرير الصفحة لأعلى عند ظهور شاشة التحميل
  useEffect(() => {
    if (loading) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [loading]);

  useGSAP(() => {
    gsap.fromTo("#progress", {
      width: 0,
      duration: 5,
      delay: 1,
      ease: "back.inOut"
    }, { width: "77%" })
  }, [loading])
  const lang: Lang = i18n.language.startsWith("ar") ? "ar" : "en";
  const navigate = useNavigate()
  const { setDiagnosis } = useDiagnosis();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SymptomsSchema),
    defaultValues: {
      quickSymptoms: [],
    },
    mode: "onChange"
  });
  const selectedDuration = watch("duration");
  const selectedSeverity = watch("severity");
  const symptomsText = watch("symptomsText") || "";
  /* ========================= Handlers ========================= */


  const toggleQuickSymptom = (symptom: string) => {
    const updated = selectedSymptoms.includes(symptom) ? selectedSymptoms.filter((s) => s !== symptom) : [...selectedSymptoms, symptom];
    setSelectedSymptoms(updated);
    setValue("quickSymptoms", updated, { shouldValidate: true });
  };

  const onSubmit = async (data: SymptomsType) => {
    if (loading) return

    try {
      setLoading(true)
      const res = await createDiagnosis(data);
      if (res.data && !res.error) {
        setDiagnosis(res)
        navigate(`/diagnosis/${res.data._id}`)
      }


    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Something went wrong";

      // عرض الرسالة على مستوى root form
      setError("root", {
        type: "server",
        message,
      });
    } finally {
      setLoading(false)
    }
  };


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-hero">
        <div
          className="text-center"
        >
          <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 animate-pulse">
            <LuActivity className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold   mb-2">جاري تحليل الأعراض</h2>
          <p className=" font-semibold mb-4">قد يستغرق التحليل بضع ثوانٍ...</p>


          <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
            <div
              id="progress"
              className="h-full bg-emerald-600 rounded-full transition-all duration-500"

            />
          </div>

        </div>
      </div>
    );
  }
  return (
    <main className=" mt-36 mb-10  " >
      <div className="container_custom ">
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-center text-3xl  md:text-5xl font-bold"> {t("symptoms.title")}</h1>

          {/* ===================== Symptoms Text ===================== */}
          <SymptomsTextarea register={register("symptomsText")} errors={errors.symptomsText} symptomsText={symptomsText} />
          <QuickSymptomsSelector value={selectedSymptoms} onToggle={toggleQuickSymptom} errors={errors.quickSymptoms} />


          <div className="flex flex-col md:flex-row gap-4 mt-6 mb-8 " >
            <DurationSelector value={selectedDuration} onSelect={(v) => setValue("duration", v, { shouldValidate: true, shouldDirty: true, })} errors={errors.duration} lang={lang} />

            <SeveritySelector value={selectedSeverity} onSelect={(v) => setValue("severity", v, { shouldValidate: true, shouldDirty: true })} errors={errors.severity} />
          </div>

          <div className="flex items-center gap-4">

            <Button
              type="submit"       >
              {t("symptoms.submit")}
            </Button>

            <Button
              type="button"
              variant="outline" classNameButton="border border-primary"          >
              {t("symptoms.cancel")}
            </Button>

          </div>
          {errors.root && <p className="text-red-500 text-sm">{errors.root.message}</p>}
        </form>
      </div >
    </main >
  );
};

export default SymptomsPage;
