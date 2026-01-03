import type { MedicalSolutionCardProps } from "../../types";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useTranslation } from "react-i18next";


const MedicalSolutionCard = ({
  item,
  setActiveMedicalSolutions,
  activeMedicalSolutions,
}: MedicalSolutionCardProps) => {
  const { t,i18n } = useTranslation("landing");
  const { id, icons, text, title } = item;


  return (
    <div
      className={`card group relative p-8 md:p-10 rounded-4xl border  border-white transition-all duration-300 flex flex-col gap-6
                  hover:border-primary shadow-lg  ${
                    activeMedicalSolutions === id ? "bg-[#1C64F2]" : "bg-white"
                  }`}
      onClick={() => {
        setActiveMedicalSolutions(id);
      }}
    >
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110
                     backdrop-blur-sm ${
                       activeMedicalSolutions === id
                         ? "bg-primary text-white"
                         : "bg-blue-100 text-primary"
                     }  
                  `}
      >
        {icons}
      </div>
      <div className="flex flex-col gap-3">
        <h3
          className={`text-2xl font-semibold ${
            activeMedicalSolutions === id ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-md leading-relaxed  ${
            activeMedicalSolutions === id ? "text-white" : "text-gray-500"
          }`}
        >
          {text}
        </p>
      </div>
      <Link
        to="/"
        className="  flex items-center justify-center gap-2 text-md font-bold cursor-pointer w-fit"
      >
        <span
          className={` ${
            activeMedicalSolutions === id ? "text-white" : "text-primary"
          }`}
        >
          {t("medicalSolutions.find_out_more")}
        </span>
        <GoArrowLeft
          size={25}
          className={`mt-1  transition-all duration-150 ${
            activeMedicalSolutions === id ? "text-white" : "text-primary"
          } ${
            i18n.language === "ar"
              ? "rotate-0 group-hover:-translate-x-3"
              : " rotate-180 group-hover:translate-x-3"
          } `}
        />
      </Link>
    </div>
  );
};

export default MedicalSolutionCard;
