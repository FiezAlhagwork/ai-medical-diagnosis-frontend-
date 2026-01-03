import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FaClinicMedical } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { animateWithGsap, stateWithGsap } from "../../utils/animations";

const StatsSection = () => {
  const { t } = useTranslation("landing");
  const statsData = [
    {
      id: 1,
      icon: <BsPeopleFill size={25} />,
      color: "text-emerald-500",
      bgColor: "bg-emerald-100",
      number: "1,200",
      title: t("stats.registered_patient"),
    },
    {
      id: 2,
      icon: <BiSolidCalendarCheck size={25} />,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      number: "320",
      title: t("stats.successful_consultation"),
    },
    {
      id: 3,
      icon: <FaClinicMedical size={25} />,
      color: "text-amber-500",
      bgColor: "bg-amber-100",
      number: "95",
      title: t("stats.medical_partner"),
    },
    {
      id: 4,
      icon: <FaUserDoctor size={25} />,
      color: "text-violet-500",
      bgColor: "bg-violet-100 ",
      number: "450",
      title: t("stats.expert_doctor"),
    },
  ];

  useGSAP(() => {
    const counters = document.querySelectorAll(".counter");
    stateWithGsap("#Stats", counters, { duration: 2, ease: "power1.out" });

    animateWithGsap("#Stats", {
      y: 0,
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <section className="relative z-20 pt-5 pb-5 bg-linear-to-b from-blue-50/50 to-gray-50 ">
      <div className="container_custom px-4">
        <div
          id="Stats"
          className="-mt-13 md:-mt-16 relative bg-white  rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]  p-6 md:p-8 border border-gray-100 opacity-0 translate-y-20 "
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-8 divide-x-0 md:divide-x divide-gray-100  rtl:divide-x-reverse">
            {statsData.map((item) => {
              return (
                <div className="flex flex-col items-center justify-center text-center group ">
                  <div
                    className={`mb-4 p-3 md:p-4 rounded-2xl ${item.bgColor} ${item.color} text-v transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-semibold text-gray-900  mb-1 flex items-center gap-1">
                    <span
                      className="counter"
                      data-target={item.number.replace(/,/g, "")}
                    >
                      0
                    </span>
                    <span
                      className={`text-sm md:text-lg font-bold ${item.color} relative -top-2`}
                    >
                      +
                    </span>
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-gray-500 pt-3 capitalize tracking-wider ">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
