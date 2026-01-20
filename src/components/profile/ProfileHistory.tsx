import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { animateFromToWithGsap, animateWithGsap } from "../../utils/animations";
import DiagnosisCard from "../ui/DiagnosisCard";
import { useTranslation } from "react-i18next";

const ProfileHistory = () => {
    const { t } = useTranslation("profile")
    const historyRef = useRef<HTMLDivElement | null>(null);
    useGSAP(() => {
        if (!historyRef.current) return
        const items = historyRef.current.children;
        const elements = Array.from(items) as HTMLElement[];
        animateWithGsap("#historyTab", {
            opacity: 1,
            y: 0,
        })
        animateFromToWithGsap(
            elements,
            { opacity: 0, y: 80 },
            {
                opacity: 1,
                y: 0,
                ease: "power1.inOut",
                stagger: 0.2,
            }
        );

    }, [])


    const Diagnosis = [
        { id: "1", confidence: "75%", possible_condition: "نقص تروية عضلة القلب", createdAt: "22/10/2022" },
        { id: "2", confidence: "69%", possible_condition: "نقص تروية عضلة القلب", createdAt: "22/10/2022" },
        { id: "3", confidence: "85%", possible_condition: "نقص تروية عضلة القلب", createdAt: "22/10/2022" },
        { id: "4", confidence: "85%", possible_condition: "نقص تروية عضلة القلب", createdAt: "22/10/2022" },
        { id: "5", confidence: "85%", possible_condition: "نقص تروية عضلة القلب", createdAt: "22/10/2022" },
        { id: "6", confidence: "85%", possible_condition: "نقص تروية عضلة القلب", createdAt: "22/10/2022" },
    ]

    return (
        <>
            <h2 id="historyTab" className="text-xl font-bold my-3 opacity-0 translate-y-20">{t("diagnosisHistory")}</h2>
            <div ref={historyRef} className="grid grid-cols-1 gap-4" >
                {
                    Diagnosis.map((item) => {
                        return (
                            <DiagnosisCard
                                _id={item.id}
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