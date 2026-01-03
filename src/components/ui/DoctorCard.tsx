import { FaStar } from "react-icons/fa";
import { CiLocationOn, CiStethoscope } from "react-icons/ci";
import { Link } from "react-router-dom";
import Button from "./Button";
import type { DoctorCardProps } from "../../types";
import { useTranslation } from "react-i18next";

const DoctorCard = ({ item }: DoctorCardProps) => {
  const { image, name, province, rating, id, specialty } = item;
  const { t } = useTranslation("doctor");
  return (
    <div className="group h-full bg-white rounded-4xl border border-gray-100   overflow-hidden   transition-all duration-300 ease-out flex flex-col ">
      <div className=" relative h-72 bg-gray-50 overflow-hidden ">
        <img
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 "
          src={image}
          alt=""
        />
        <div className=" absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1 z-10">
          <FaStar className="text-yellow-500" />
          <span className="text-xs font-bold text-slate-800 pt-0.5">
            {rating}
          </span>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="flex flex-col grow text-center px-8 pb-5">
        <div className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10  text-primary  text-[12px] font-bold tracking-wide ">
            <CiStethoscope className="text-primary" size={16} />
            {specialty}
          </span>
        </div>
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 mt-3">
          د. {name}
        </h3>
        <p className="flex justify-center items-center text-[15px] text-slate-500 my-3">
          <CiLocationOn size={15} className="mt-1 me-1" />
          {province}
        </p>
        <Link to={`/doctor/${id}`}>
          <Button>{t("view_more")}</Button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
