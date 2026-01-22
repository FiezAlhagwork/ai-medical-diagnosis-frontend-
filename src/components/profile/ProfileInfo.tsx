import DoctorStatCard from "../../components/ui/DoctorStatCard";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateFromToWithGsap, animateWithGsap } from "../../utils/animations";
import { useAuth } from "../../context/AuthContext";


const ProfileInfo = () => {
    const { t } = useTranslation("profile")
    const { loading, user } = useAuth()
    const infoRef = useRef<HTMLDivElement | null>(null);
    useGSAP(() => {
        if (!infoRef.current) return
        const cards = infoRef.current?.children;
        const elements = Array.from(cards) as HTMLElement[];

        animateWithGsap("#infoTab", {
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
            }
        );
    }, [])


    const stats = [
        {
            id: "phone",
            label: t("phone"),
            value: user?.phone,
            icon: BsTelephone,
            bgColor: "bg-indigo-50",
            textColor: "text-indigo-600",
        },
        {
            id: "email",
            label: t("email"),
            value: user?.email,
            icon: AiOutlineMail,
            bgColor: "bg-emerald-50",
            textColor: "text-emerald-600",
        },
        {
            id: "location",
            label: t("location"),
            value: `${user?.province} , ${user?.city}`,
            icon: CiLocationOn,
            bgColor: "bg-amber-50",
            textColor: "text-amber-600",
        },

        {
            id: "date",
            label: t("date"),
            value: user?.age,
            icon: MdOutlineDateRange,
            bgColor: "bg-red-50",
            textColor: "text-red-500",
        },
    ];

    if (loading) return <p className="text-2xl mt-10 flex items-center text-black">loading...</p>

    return (
        <>
            <h2 id="infoTab" className="text-xl font-bold my-3 opacity-0 translate-y-20">{t("personalInfo")}</h2>
            <div ref={infoRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" >
                {stats.map((item) => {
                    return (
                        <DoctorStatCard
                            Icon={item.icon}
                            bgColor={item.bgColor}
                            label={item.label}
                            textColor={item.textColor}
                            value={item.value}
                        />
                    );
                })}
            </div>
        </>
    )
}

export default ProfileInfo