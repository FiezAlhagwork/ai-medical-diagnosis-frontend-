import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { animateFromToWithGsap, animateWithGsap } from "../../utils/animations";
import DiagnosisCard from "../ui/DiagnosisCard";
import { useTranslation } from "react-i18next";
import type { DiagnosisData } from "../../types/Diagnosis";
import { getAllDiagnosis } from "../../services/Diagnosis";




const ProfileHistory = () => {
    const { t } = useTranslation("profile")
    const [diagnosis, setDiagnosis] = useState<DiagnosisData[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const historyRef = useRef<HTMLDivElement | null>(null);

    const fetchDiagnoses = async () => {
        setIsLoading(true);
        try {
            const res = await getAllDiagnosis();
            if (res.data && !res.error) {
                setDiagnosis(res.data);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchDiagnoses()
    }, [])

    useGSAP(() => {
        if (!historyRef.current || diagnosis.length === 0) return;
        const cards = historyRef.current?.children;
        const elements = Array.from(cards) as HTMLElement[];

        animateWithGsap("#historyTab", {
            opacity: 1,
            y: 0,
        })
        animateFromToWithGsap(elements,
            { opacity: 0, y: 80 },
            {
                opacity: 1,
                y: 0,
                ease: "power1.inOut",
                stagger: 0.2,
            },

        );
    }, [diagnosis])




    if (isLoading) return <p className="text-5xl flex justify-center items-center h-screen">Loading...</p>

    return (
        <>
            <h2 id="historyTab" className="text-xl font-bold my-3 opacity-0 translate-y-20 ">{t("diagnosisHistory")}</h2>
            <div ref={historyRef} className="grid grid-cols-1 gap-4" >
                {
                    diagnosis.map((item) => {
                        return (
                            <DiagnosisCard
                                _id={item._id}
                                confidence={item.confidence}
                                createdAt={item.createdAt}
                                possible_condition={item.possible_condition} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProfileHistory