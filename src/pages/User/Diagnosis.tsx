/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { GoPulse } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import Button from "../../components/ui/Button";
import { useDiagnosis } from "../../context/DiagnosisContext";
import { splitNextSteps } from "../../utils";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDiagnosisByID } from "../../services/Diagnosis";

const Diagnosis = () => {
  const { id } = useParams();
  const { diagnosis, setDiagnosis } = useDiagnosis();
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")


  useEffect(() => {

    const fetchDiagnosis = async () => {
      if (diagnosis || !id) return;

      try {
        setLoading(true);
        const res = await getDiagnosisByID(id);

        if (!res.error) {
          setDiagnosis(res); // 🔴 فقط الداتا
        } else {
          setError(res.message || "Failed to load diagnosis");
        }
      } catch (err: any) {
        setError(
          err?.response?.data?.message || "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDiagnosis();



  }, [id, diagnosis, setDiagnosis])


  if (loading) {
    return <p className="text-center mt-20">جاري تحميل التشخيص...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-20">
        {error}
      </p>
    );
  }

  if (!diagnosis) {
    return <p className="text-center text-3xl mt-20">
      لا يوجد تشخيص
    </p>;
  }

  return (
    <main className="mt-36 mb-10">
      <div className="container_custom ">
        <div className="text-center mt-10">
          <div className="bg-green-200 text-green-500 p-4 rounded-full w-fit mx-auto">
            <IoMdCheckmarkCircleOutline size={40} />
          </div>
          <h1 className="text-4xl font-semibold my-2">تقييمك</h1>
          <p className="text-gray-600 text-lg">بناءً على الأعراض التي قدمتها</p>
        </div>

        <div className="glass py-4 px-2 mt-6">
          <h3 className="flex items-center  gap-2 text-gray-700 text-xl font-semibold">
            <GoClock size={22} className="text-gray-400 mt-1" />
            الأعراض المبلغ عنها
          </h3>
          <div className=" ms-5 mt-3">
            <p className="text-lg font-semibold">{diagnosis.data.symptomsText}</p>
            <ul className="flex flex-wrap gap-3 mt-5">
              {diagnosis.data.quickSymptoms.map((item, idx) => {
                return (
                  <li className="bg-emerald-600 py-2 px-3 text-white  rounded-2xl font-medium" key={idx}>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="glass py-4 px-2 mt-10">
          <h3 className="flex items-center  gap-2 text-gray-700 text-xl font-semibold">
            <GoPulse size={25} className="text-primary mt-1" />
            ملخص التقييم
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-gray-600 text-lg ">الحالة المحتملة</p>
              <p className="text-lg font-semibold text-gray-800">
                بناءً على أعراضك،  تعاني من {diagnosis.data.possible_condition}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-lg ">الاختصاص المناسب</p>
              <p className="text-lg font-semibold">
                {diagnosis.data.matchedSpecialty}
              </p>
            </div>

            <div className="mt-4 px-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 text-lg">مستوى الثقة</span>
                <span className=" text-xl md:text-2xl font-semibold text-primary">{diagnosis.data.confidence}</span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                  style={{ width: `${diagnosis.data.confidence}` }}
                />
              </div>
            </div>

            <div className="">
              <p className=" text-gray-500  text-lg my-2">الإجراءات الموصى بها</p>
              <ul className="flex flex-col gap-2">
                {splitNextSteps(diagnosis.data.next_step).map((item, idx) => {
                  return (
                    <li key={idx} className="flex items-center gap-2 font-semibold">
                      <div className="bg-blue-50 text-blue-500 p-2  rounded-4xl ">
                        <IoMdCheckmarkCircleOutline size={18} />
                      </div>
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
              <p className="font-semibold text-lg text-red-600  mb-1">نصيحة مهمة</p>
              <p className="text-red-700 text-sm leading-relaxed">
                {diagnosis.data.advice}
              </p>
            </div>

          </div>
        </div>

        <div className="glass mt-12  ">
          <h3 className="flex items-center  gap-2 text-gray-700 text-xl font-semibold my-4">
            <BsFillPeopleFill size={26} className="text-emerald-600 mt-1" />
            المتخصصون المقترحون            </h3>
          <div className=" ">
            <h1 className=" text-lg font-semibold ">{diagnosis.data.matchedSpecialty}</h1>
            <p className="text-sm text-gray-500  my-3 ">للتقييم والعلاج العام</p>
          </div>
          <Button icon={<GoArrowRight size={22} className="mt-1.5" />}>عرض الاطباء</Button>
        </div>
      </div>
      <Link to="/symptoms">
        <Button>انشاء حالة جديدة </Button>
      </Link>
    </main>
  )
}

export default Diagnosis