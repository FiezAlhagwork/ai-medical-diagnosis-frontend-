/* eslint-disable react-hooks/incompatible-library */
import { useState } from "react";
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




const SymptomsPage = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const { t, i18n } = useTranslation("symptoms");
  const lang: Lang = i18n.language.startsWith("ar") ? "ar" : "en";
  const {
    register,
    handleSubmit,
    setValue,
    watch,
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
  const symptomsText = watch("symptomsText") || ""
  /* ========================= Handlers ========================= */
  const toggleQuickSymptom = (symptom: string) => {
    const updated = selectedSymptoms.includes(symptom) ? selectedSymptoms.filter((s) => s !== symptom) : [...selectedSymptoms, symptom];
    setSelectedSymptoms(updated);
    setValue("quickSymptoms", updated, { shouldValidate: true });
  };

  const onSubmit = (data: SymptomsType) => {
    console.log("Symptoms Payload 👉", data);
  };



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
        </form>
      </div >
    </main >
  );
};

export default SymptomsPage;
