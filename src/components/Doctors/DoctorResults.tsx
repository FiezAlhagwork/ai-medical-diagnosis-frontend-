/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import type { DoctorResultsProps } from "../../types"
import { getDoctors } from "../../services/Doctor";
import DoctorCard from "../ui/DoctorCard";
import type { Doctor } from "../../types/Doctor";
import EmptyState from "../ui/EmptyState";
import { MdSearch } from "react-icons/md";
import Loading from "../ui/Loading";


const DoctorResults = ({ specialty, city, province }: DoctorResultsProps) => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("")

    const fetchDoctors = async () => {
        try {
            setLoading(true);
            setError("");
            setMessage("")

            const res = await getDoctors({
                specialty,
                city,
                province,
            });

            if (!res.error) {
                setDoctors(res.doctors);
                setMessage(res.message)
            }

        } catch (err: any) {
            setError(
                err?.response?.data?.message || "حدث خطأ غير متوقع"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDoctors()
    }, [specialty, city, province])



    if (loading) {
        return <Loading title="...جاري تحميل الأطباء" icon={MdSearch} />;
    }

    return (
        <div className="my-12">
            {error && (
                <p className="text-center text-red-500 mt-10">
                    {error}
                </p>
            )}

            {/* 🟢 في نتائج */}
            {!error && doctors.length > 0 && (
                <>
                    {message && (
                        <p className="text-center text-gray-500 mt-4">
                            {message}
                        </p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                        {doctors.map((item) => (
                            <DoctorCard key={item._id} item={item} />
                        ))}
                    </div>
                </>
            )}

            {/* 🟡 لا يوجد بيانات */}
            {!error && doctors.length === 0 && (
                <div className="text-center mt-12">

                    <EmptyState
                        icon={MdSearch}
                        title={message || "لا يوجد أطباء متاحون حاليًا"}
                        description="يمكنك المحاولة باختصاص آخر أو منطقة مختلفة"
                    />
                </div>
            )}
        </div>

    )
}

export default DoctorResults