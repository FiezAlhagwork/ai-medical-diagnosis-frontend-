/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { CiCircleCheck, CiClock2, CiStethoscope } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Button from "../../components/ui/Button";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { CiPhone } from "react-icons/ci";
import { LuGraduationCap } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa";
import { MdEmail, MdMessage } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import DoctorStatCard from "../../components/ui/DoctorStatCard";
import { useTranslation } from "react-i18next";
import { PiCertificate } from "react-icons/pi";
import { useEffect, useState, useCallback } from "react";
import { getDoctorById } from "../../services/Doctor";
import Loading from "../../components/ui/Loading";
import type { Doctor } from "../../types/Doctor";
import EmptyState from "../../components/ui/EmptyState";

const DoctorProfile = () => {
  const { id } = useParams();
  const { t } = useTranslation("doctor");
  const [loading, setLoading] = useState<boolean>(false)
  const [doctorData, setDoctorData] = useState<Doctor | null>(null)
  const [error, setError] = useState<string>("")

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await getDoctorById(id)
      if (!res.error && res.doctor) {
        setDoctorData(res.doctor)
      }
    } catch (error: any) {
      setError(
        error?.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }, [id])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const stats = doctorData ? [
    {
      id: "experience",
      label: t("experience"),
      value: doctorData.age ? `${doctorData.age} ${t("years")}` : "غير محدد",
      icon: LuGraduationCap,
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
    },
    {
      id: "price",
      label: t("price"),
      value: doctorData.price ? `${doctorData.price} ${t("currency")}` : "غير محدد",
      icon: FaDollarSign,
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      id: "languages",
      label: t("languages"),
      value: doctorData.languages && doctorData.languages.length > 0 ? doctorData.languages.join(", ") : "غير محدد",
      icon: MdMessage,
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
    },
    {
      id: "address",
      label: t("address"),
      value: doctorData.city && doctorData.province ? `${doctorData.city}, ${doctorData.province}` : doctorData.province || "غير محدد",
      icon: LuMapPin,
      bgColor: "bg-blue-50",
      textColor: "text-blue-500",
    },
    {
      id: "email",
      label: t("email"),
      value: doctorData.contact.email || "غير محدد",
      icon: MdEmail,
      bgColor: "bg-red-50",
      textColor: "text-red-500",
    },
    {
      id: "certificate",
      label: t("certificate"),
      value: doctorData.education?.university || "غير محدد",
      icon: PiCertificate,
      bgColor: "bg-green-50",
      textColor: "text-green-500",
    },
  ] : [];

  // معالجة حالة التحميل
  if (loading) {
    return <Loading fullScreen={true} />;
  }

  // معالجة حالة الخطأ
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-hero">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
            <CiClock2 className="w-10 h-10 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">حدث خطأ</h2>
          <p className="font-semibold text-gray-600 mb-4">{error}</p>
          <Button onClick={fetchData}>إعادة المحاولة</Button>
        </div>
      </div>


    );
  }

  // معالجة حالة عدم وجود بيانات
  if (!doctorData) {
    return (

      <EmptyState icon={CiStethoscope} title="الطبيب غير موجود" description="لم نتمكن من العثور على بيانات هذا الطبيب" className="h-screen" />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/80 font-sans pb-20">
      <div className="relative h-[320px] bg-slate-100 overflow-hidden rounded-b-[3rem]">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[16px_16px] opacity-40"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-white via-transparent to-transparent opacity-80"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-50/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container_custom mx-auto px-4 -mt-48 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-300/60 border border-gray-100/80 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start backdrop-blur-sm">
          <div className="relative shrink-0">
            <img
              alt={`د. ${doctorData.name}`}
              className="relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-4xl border-[6px] border-white shadow-2xl shadow-gray-300"
              src={doctorData.image?.url || "/default-doctor.jpg"}
              onError={(e) => {
                e.currentTarget.src = "/default-doctor.jpg";
              }}
            />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white  px-4 py-1.5 rounded-full shadow-md border border-gray-100  flex items-center gap-1.5 text-xs font-semibold  whitespace-nowrap z-10">
              <CiCircleCheck size={18} className="text-blue-600 " />
              <span>{t("verified_account")}</span>
            </div>
          </div>

          <div className="flex-1 text-center md:text-right w-full md:mt-4">
            <div className="flex flex-col md:flex-row justify-between items-start mb-5">
              <div className="flex flex-col items-center w-full md:items-start">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                  د. {doctorData.name}
                </h1>
                <div className="mt-6 flex items-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-blue-600 text-[16px] font-bold tracking-wide">
                    <CiStethoscope className="text-blue-600" size={22} />
                    {doctorData.specialty}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6 md:mt-0 mx-auto md:mx-0 bg-gray-50/80 border border-gray-100 px-5 py-3 rounded-2xl">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <FaStar size={20} className="text-yellow-500" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900 leading-none mb-0.5">
                    {doctorData.rating.toFixed(1)}
                  </p>
                  <p className="text-xs font-bold text-gray-500">تقييمات</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button icon={<BiSolidCalendarCheck />}>
                {t("book_an_appointment")}
              </Button>
              {doctorData.contact.phone && (
                <Button
                  icon={<CiPhone />}
                  variant="outline"
                >
                  {t("call_the_clinic")}
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((item) => (
                <DoctorStatCard
                  key={item.id}
                  Icon={item.icon}
                  bgColor={item.bgColor}
                  label={item.label}
                  textColor={item.textColor}
                  value={item.value}
                />
              ))}
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="p-6 bg-gray-50 rounded-2xl  border border-dashed border-gray-300 flex justify-center flex-col items-center">
                <CiClock2 size={25} className="text-gray-500 my-5 " />
                <p className="text-gray-500 text-sm">
                  لم يتم تحديد أوقات العمل بعد
                </p>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                  <LuMapPin size={25} className="text-gray-500" />
                </div>
                <h4 className="font-bold text-gray-800 mb-3">عنوان العيادة</h4>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {doctorData.clinicAddress || "العنوان غير متوفر حالياً"}
                </p>
                <div className="w-full h-40 bg-slate-100 rounded-2xl overflow-hidden relative border border-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs font-bold flex-col gap-2">
                    <LuMapPin />
                    الخريطة غير متاحة
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
