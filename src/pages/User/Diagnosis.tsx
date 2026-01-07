import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { GoPulse } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import Button from "../../components/ui/Button";

const formData = {
  _id: "69258995db65510376baa0c5",
  symptomsText: "ألم شديد في الصدر وضيق في التنفس عند المشي",
  quickSymptoms: ["تعب عام", "خفقان"],
  duration: "أكثر من شهر",
  matchedSpecialty: "القلب والاوعية الدموية",
  confidence: "90%",
  severity: "عالي",
  next_step: "إجراء تخطيط للقلب (ECG)، فحوصات دم للقلب (مثل التروبونين)، أشعة للصدر، ومراجعة طبيب قلب.",
  advice: "التوجه فوراً لأقرب قسم طوارئ أو استشارة طبيب قلب بشكل عاجل. تجنب أي مجهود بدني.",
  possible_condition: "نقص تروية عضلة القلب",

}

const splitNextSteps = (text: string) => {
  if (!text) return [];

  return text
    .split("،")
    .map(step => step.trim())
    .filter(Boolean);
};

const Diagnosis = () => {
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
            <p className="text-lg font-semibold">{formData.symptomsText}</p>
            <ul className="flex flex-wrap gap-3 mt-5">
              {formData.quickSymptoms.map((item, idx) => {
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
                بناءً على أعراضك،  تعاني من {formData.possible_condition}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-lg ">الاختصاص المناسب</p>
              <p className="text-lg font-semibold">
                {formData.matchedSpecialty}
              </p>
            </div>

            <div className="mt-4 px-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 text-lg">مستوى الثقة</span>
                <span className=" text-xl md:text-2xl font-semibold text-primary">{formData.confidence}</span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                  style={{ width: `${formData.confidence}` }}
                />
              </div>
            </div>

            <div className="">
              <p className=" text-gray-500  text-lg my-2">الإجراءات الموصى بها</p>
              <ul className="flex flex-col gap-2">
                {splitNextSteps(formData.next_step).map((item, idx) => {
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
                {formData.advice}
              </p>
            </div>

          </div>
        </div>

        <div className="glass mt-12  ">
          <h3 className="flex items-center  gap-2 text-gray-700 text-xl font-semibold my-4">
            <BsFillPeopleFill size={26} className="text-emerald-600 mt-1" />
            المتخصصون المقترحون            </h3>
          <div className=" ">
            <h1 className=" text-lg font-semibold ">{formData.matchedSpecialty}</h1>
            <p className="text-sm text-gray-500  my-3 ">للتقييم والعلاج العام</p>
          </div>
          <Button icon={<GoArrowRight size={22} className="mt-1.5" />}>عرض الاطباء</Button>
        </div>
      </div>
    </main>
  )
}

export default Diagnosis