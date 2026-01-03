import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "../ui/Title";
import MedicalSolutionCard from "../ui/MedicalSolutionCard";
import { IoStarOutline } from "react-icons/io5";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { CiMedicalClipboard, CiStethoscope } from "react-icons/ci";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { useGSAP } from "@gsap/react";
import { animateFromToWithGsap } from "../../utils/animations";

const MedicalSolutionSection = () => {
  const [activeMedicalSolutions, setActiveMedicalSolutions] =
    useState<number>(1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation("landing");
  const medicalSolutionsData = [
    {
      id: 1,
      icons: <BiSolidCalendarCheck size={29} />,
      title: t("medicalSolutions.book_appointments"),
      text: t("medicalSolutions.browse_doctors"),
      link: "/",
    },
    {
      id: 2,
      icons: <CiStethoscope size={29} />,
      title: t("medicalSolutions.remote_medical_consultation"),
      text: t("medicalSolutions.speak_to_your_doctor"),
      link: "/",
    },
    {
      id: 3,
      icons: <LiaCommentDotsSolid size={29} />,
      title: t("medicalSolutions.smart_assistant"),
      text: t("medicalSolutions.analyze_your_test_results"),
      link: "/",
    },
    {
      id: 4,
      icons: <CiMedicalClipboard size={29} />,
      title: t("medicalSolutions.electronic_medical_record"),
      text: t("medicalSolutions.medical_history"),
      link: "/",
    },
  ];

  useGSAP(() => {
    const cards = containerRef.current?.children;
    if (!cards) return;

    const elements = Array.from(cards) as HTMLElement[];

    animateFromToWithGsap(
      elements,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        stagger: 0.4,
      }
    );
  }, []);

  return (
    <section className="relative z-10  bg-gray-50 py-24 md:py-32 ">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50  rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-100/50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>
      </div>
      <div className="container_custom px-4 relative">
        <Title
          icons={<IoStarOutline size={27} />}
          title={t("medicalSolutions.integrated_medical_solutions")}
        />
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 md:mx-15"
        >
          {medicalSolutionsData.map((item) => {
            return (
              <MedicalSolutionCard
                item={item}
                activeMedicalSolutions={activeMedicalSolutions}
                setActiveMedicalSolutions={setActiveMedicalSolutions}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MedicalSolutionSection;
