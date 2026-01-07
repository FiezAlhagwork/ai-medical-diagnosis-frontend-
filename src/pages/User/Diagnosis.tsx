import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoClock } from "react-icons/go";

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
              {formData.quickSymptoms.map((item , idx) => {
                return(
                  <li className="bg-emerald-600 py-2 px-3 text-white  rounded-2xl font-medium" key={idx}>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Diagnosis