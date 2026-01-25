/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DoctorSearchSchema, type DoctorSearchType } from "../../schema";
import SelectField from "../../components/ui/SelectField";
import Button from "../../components/ui/Button";
import DoctorResults from "../../components/Doctors/DoctorResults";
import { CiStethoscope } from "react-icons/ci";
import type { GetDoctorsParams } from "../../types/Doctor";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { cities, provinces } from "../../constant";

const Doctors = () => {
  const [searchParams, setSearchParams] = useState<GetDoctorsParams | null>(null);
  const { t } = useTranslation("doctor")
  const [searchParamsUrl] = useSearchParams();
  const specialtyFromUrl = searchParamsUrl.get("specialty");

  useEffect(() => {
    if (specialtyFromUrl) {
      setSearchParams({
        specialty: specialtyFromUrl,
        city: undefined,
        province: undefined,
      });
    }
  }, [specialtyFromUrl]);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DoctorSearchType>({
    resolver: zodResolver(DoctorSearchSchema),
    defaultValues: {
      specialty: "",
      province: "",
      city: "",
    },
  });

  const specialties = [
    "القلب والاوعية الدموية",
    "طب أسنان",
    "طب أطفال",
    "طب عام",
    "أنف وأذن وحنجرة",
    "امراض الجهاز التنفسي",
    "طوارئ",
    "أمراض الدم والأورام",
    "جراحة الكلى والمسالك البولية",
    "أمراض معدية",
    "جراحة عامة",
    "تغذية",
    "غدد صماء",
    "باطنية",
    "جراحة العظام والمفاصل",
    "معالج نفسي",
    "كلى",
    "دماغ وأعصاب",
    "روماتيزم ومفاصل",
    "جلدية وتناسلية",
    "صدرية",
    "جراحة دماغ وأعصاب وعمود فقري",
    "جراحة الأوعية الدموية",
    "سمع ونطق",
  ]



  const onSubmit = (data: DoctorSearchType) => {
    setSearchParams({
      specialty: data.specialty,
      city: data.city || undefined,
      province: data.province || undefined,
    });
  };

  return (
    <main className="mt-36 mb-10">
      <div className="container_custom">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CiStethoscope size={40} className="text-primary" />
            <h1 className="text-3xl md:text-5xl font-bold">
              {t("searchDoctors.title")}
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            {t("searchDoctors.subtitle")}
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="glass p-6 md:p-8 rounded-2xl mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SelectField
              label={`${t("searchDoctors.specialty")} *`}
              options={specialties}
              error={errors.specialty}
              registration={register("specialty")}
            />
            <SelectField
              label={`${t("searchDoctors.province")}`}
              options={provinces}
              error={errors.province}
              registration={register("province")}
            />
            <SelectField
              label={`${t("searchDoctors.city")}`}
              options={cities}
              error={errors.city}
              registration={register("city")}
            />
          </div>

          <div className="mt-6">
            <Button type="submit">
              {t("searchDoctors.searchButton")}
            </Button>
          </div>

          {errors.root && (
            <p className="text-red-500 text-sm mt-4">{errors.root.message}</p>
          )}
        </form>

        {searchParams && (
          <DoctorResults
            specialty={searchParams.specialty}
            city={searchParams.city}
            province={searchParams.province}
          />
        )}

        {!searchParams && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {t("searchDoctors.selectSpecialtyHint")}
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Doctors;
