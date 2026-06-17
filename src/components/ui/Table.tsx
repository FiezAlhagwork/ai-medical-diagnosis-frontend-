import { useEffect, useState } from "react";
import moment from "moment";
import { getAllDiagnosis } from "../../services/Diagnosis";
import Loading from "./Loading";
import type { Diagnosis } from "../../types/Diagnosis";


export default function Table() {
    const [diagnosis, setDiagnosis] = useState<Diagnosis[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const fetchDiagnoses = async () => {
        setIsLoading(true);
        try {
            const res = await getAllDiagnosis();
            if (res.data && !res.error) {
                setDiagnosis(res.data);
            }
            console.log(res.data);


        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchDiagnoses()
    }, [])


    return (
        <div className="overflow-x-auto mt-12   ">
            <h2 className="text-2xl font-semibold mb-6 ">أحدث التشخيصات</h2>
            {isLoading ? (
                <Loading message="جاري تحميل التشخيصات" />
            ) : (
                <table border={1} className="min-w-full  border-[0.3px] border-gray-200  bg-white shadow-lg  p-5">
                    <thead className="bg-gray-100  ">
                        <tr className="">
                            <th className="px-4 py-4 text-right text-sm font-medium text-gray-700">الأعراض الرئيسية</th>
                            <th className="px-4 py-4 text-right text-sm font-medium text-gray-700">الاختصاص</th>
                            <th className="px-4 py-4 text-right text-sm font-medium text-gray-700">الشدة</th>
                            <th className="px-4 py-4 text-right text-sm font-medium text-gray-700">التاريخ</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {diagnosis.map((d, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                                {/* <td className="px-4 py-2 text-right text-gray-800">{d.userId.name == null ? "fiez alhag" : d.userId.name}</td> */}
                                <td className="px-4 py-2 text-right text-gray-800">{d.symptomsText}</td>
                                <td className="px-4 py-2 text-right text-gray-500">{d.matchedSpecialty}</td>
                                <td className="px-4 py-2 text-right">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-semibold ${d.severity === "عالي"
                                            ? "bg-red-100 text-red-700"
                                            : d.severity === "متوسط"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-green-100 text-green-700"
                                            }`}
                                    >
                                        {d.severity}
                                    </span>
                                </td>
                                <td className="px-4 py-2 text-right text-gray-600">
                                    {moment(d.createdAt).format("YYYY/MM/DD")}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
