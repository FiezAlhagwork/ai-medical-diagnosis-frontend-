
import type { DoctorStatProps } from "../../types";

const DoctorStatCard = ({bgColor, Icon , label, textColor ,value }:DoctorStatProps) => {

  return (
    <div className="flex items-center gap-4 p-4 bg-white  rounded-2xl border border-gray-100  shadow-sm hover:shadow-md transition-shadow">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgColor}  ${textColor}`}>
      <Icon size={25} />
    </div>
    <div>
      <p className="text-xs font-semibold text-gray-400 mb-1">
        {label}
      </p>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
  </div>
  );
};

export default DoctorStatCard;
