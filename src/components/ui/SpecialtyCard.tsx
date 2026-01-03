import { FaArrowLeftLong } from "react-icons/fa6";
import type { SpecialtyCardProps } from "../../types";
import { Link } from "react-router-dom";

const SpecialtyCard = ({item , browseDoctor}: SpecialtyCardProps) => {
const {icon , id ,name, styleCustom} = item
  return (
    <Link
      to=""
      key={id}
      className="group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-4xl bg-white border border-gray-100  transition-all duration-300 group-hover:border-violet-200  hover:shadow-xl group-hover:shadow-violet-100 dark:group-hover:shadow-none hover:-translate-y-1"
    >
      <div
        className={`w-20 h-20 mb-6 rounded-2xl flex items-center justify-center p-6 transition-all duration-500 ${styleCustom} group-hover:text-white group-hover:rotate-3 group-hover:scale-110 `}
      >
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800  mb-2 group-hover:text-gray-900 transition-colors">
        {name}
      </h3>
      <div className="flex items-center justify-center gap-3 text-xs font-semibold text-gray-400 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-gray-600 ">
        <span className="mb-1">{browseDoctor}</span>
        <FaArrowLeftLong size={15} />
      </div>
    </Link>
  );
};

export default SpecialtyCard;
