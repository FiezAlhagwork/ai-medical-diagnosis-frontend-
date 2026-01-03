import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import { animateFromToWithGsap } from "../../utils/animations";
import Title from "../ui/Title";
import { CiHeart } from "react-icons/ci";
import { FiLayers } from "react-icons/fi";
import { LuBaby, LuBrain, LuEar } from "react-icons/lu";
import { RiToothLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { LiaBoneSolid } from "react-icons/lia";
import SpecialtyCard from "../ui/SpecialtyCard";

const SpecialtySection = () => {
  const { t } = useTranslation("landing");

  const containerSpecialtyRef = useRef<HTMLDivElement | null>(null);

  const specialtyData = [
    {
      id: 1,
      name: t("browse_by_specialty.cardiology"),
      icon: <CiHeart size={35} />,
      styleCustom: "bg-rose-50 text-rose-500 group-hover:bg-rose-500",
    },
    {
      id: 2,
      name: t("browse_by_specialty.pediatrics"),
      icon: <LuBaby size={35} />,
      styleCustom: "bg-sky-50 text-sky-500 group-hover:bg-sky-500",
    },
    {
      id: 3,
      name: t("browse_by_specialty.skin_diseases"),
      icon: <FiLayers size={35} />,
      styleCustom: "bg-teal-50 text-teal-500 group-hover:bg-teal-500",
    },
    {
      id: 4,
      name: t("browse_by_specialty.ears_and_nose"),
      icon: <LuEar size={35} />,
      styleCustom: "bg-amber-50 text-amber-500 group-hover:bg-amber-500",
    },
    {
      id: 5,
      name: t("browse_by_specialty.dentistry"),
      icon: <RiToothLine size={35} />,
      styleCustom: "bg-blue-50 text-blue-500 group-hover:bg-blue-500",
    },
    {
      id: 6,
      name: t("browse_by_specialty.ophthalmology"),
      icon: <IoEyeOutline size={35} />,
      styleCustom: "bg-emerald-50 text-emerald-500 group-hover:bg-emerald-500",
    },
    {
      id: 7,
      name: t("browse_by_specialty.bones_and_joints"),
      icon: <LiaBoneSolid size={35} />,
      styleCustom: "bg-orange-50 text-orange-500 group-hover:bg-orange-500",
    },
    {
      id: 8,
      name: t("browse_by_specialty.neurology"),
      icon: <LuBrain size={35} />,
      styleCustom: "bg-violet-50 text-violet-500 group-hover:bg-violet-500  ",
    },
  ];

  useGSAP(() => {
    const cards = containerSpecialtyRef.current?.children;
    if (!cards) return;
    const elements = Array.from(cards) as HTMLElement[];
    animateFromToWithGsap(
      elements,
      { opacity: 0, y: 80 },
      {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "power3.inOut",
        stagger: 0.5,
      }
    );
  }, []);

  return (
    <section className="relative z-10  bg-gray-50 py-16 md:py-20 ">
      <div className="container_custom px-4 relative  ">
        <Title
          icons={<CiHeart size={33} />}
          title={t("browse_by_specialty.browse_by_specialty")}
        />
        <div
          ref={containerSpecialtyRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {specialtyData.map((item) => {
            return (
              <SpecialtyCard
                item={item}
                browseDoctor={t("browse_by_specialty.browse_doctors")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialtySection;
