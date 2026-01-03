import { FaUserDoctor } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { LiaHourglassStartSolid } from "react-icons/lia";
import { MdOutlinePersonSearch } from "react-icons/md";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AvatarGroup from "../ui/AvatarGroup";
import Button from "../ui/Button";
import TypewriteAr from "../ui/TypewriteAr";
import TypewriterEn from "../ui/TypewriterEn";
import { AvatarGroupData, messagesAr, messagesEn } from "../../constant";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../utils/animations";

const HeroSection = () => {
  const { t, i18n } = useTranslation("landing");

  useGSAP(() => {
    animateWithGsap("#hero-title", {
      y: 0,
      opacity: 1,
    });
    animateWithGsap("#hero-image", {
      y: 0,
      opacity: 1,
      delay: 0.1,
    });
    animateWithGsap("#Service_evaluation", {
      x: 0,
      opacity: 1,
      delay: 0.2,
    });
    animateWithGsap("#Certified_doctors", {
      x: 0,
      opacity: 1,
      delay: 0.2,
    });
  }, []);

  return (
    <section className=" w-full min-h-screen px-4 md:px-6 flex   bg-linear-to-b from-white  to-blue-50/50 pt-[100px] pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container_custom h-full  flex flex-col lg:flex-row justify-between  gap-10 lg:gap-16 relative z-10 ">
        {/* Start Hero title */}
        <div
          id="hero-title"
          className="w-full h-full pt-13 max-md:text-center order-2 lg:order-1  opacity-0 translate-y-20 "
        >
          <div className="inline-flex items-center border border-gray-200 py-2.5 px-5 rounded-full gap-2 shadow-lg   ">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-bold text-gray-500 capitalize">
              {t("hero.your_healthy_future_starts_here")}
            </span>
          </div>
          <div className="pt-7 pb-4 flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold  capitalize  pb-3  sm:ltr:text-5xl ltr:font-medium  ">
              {t("hero.Medical_advice")}
            </h1>
            {/* <br /> */}
            <span className="text-primary text-4xl sm:text-5xl md:text-6xl font-semibold   sm:ltr:text-5xl ltr:font-medium ">
              {t("hero.With_the_touch_of_a_button")}
            </span>

            <p className="text-gray-400 md:text-xl text-sm py-6 ltr:md:text-lg">
              {t("hero.Let_artificial_intelligence")}
            </p>

            <div className=" h-12 ">
              {i18n.language === "ar" ? (
                <TypewriteAr messages={messagesAr} delay={1.5} />
              ) : (
                <TypewriterEn messages={messagesEn} delay={1.5} />
              )}
            </div>

            {/* Actions  */}
            <div className="flex flex-col md:flex-row w-full md:items-center   gap-3 pt-1  ">
              <Link to="/login">
                <Button
                  classNameButton="px-9 py-3  "
                  icon={<LiaHourglassStartSolid size={22} />}
                >
                  {t("hero.Start_diagnosis")}
                </Button>
              </Link>
              <Link to="/doctors">
                <Button
                  variant="outline"
                  classNameButton="px-9 py-3 "
                  icon={<MdOutlinePersonSearch size={22} />}
                >
                  {t("hero.I_looked_for_a_doctor")}
                </Button>
              </Link>
            </div>

            {/* Avatar Group  */}
            <div className="flex items-center   pt-4 ps-4 ">
              <AvatarGroup AvatarGroupList={AvatarGroupData} />

              <p className="text-gray-500 text-sm ms-5 ">
                <Trans
                  i18nKey="hero.over_patients"
                  components={{
                    strong: (
                      <span className="text-md  text-black font-medium" />
                    ),
                  }}
                >
                  Over <br>+10,000</br> patients trust us
                </Trans>
              </p>
            </div>
          </div>
        </div>
        {/* End Hero title */}
        {/* start Hero Image */}
        <div className="w-full md:pt-13  relative  order-1 lg:order-2">
          <div className="relative  flex justify-center items-center aspect-video">
            <span className="blob absolute  inset-0 mt-4 m-auto h-64 w-64 sm:w-96 sm:h-96  md:h-[450px] md:w-[450px] drop-shadow-2xl z-0"></span>

            <div
              id="hero-image"
              className="absolute inset-0 top-16  md:bottom-0  flex justify-center items-center z-10   opacity-0 translate-y-20 "
            >
              <img
                src="/doctor-hero.png"
                alt=""
                className="relative z-10 w-[75%] sm:w-[60%]  md:w-[75%] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              />
            </div>

            <div
              id="Service_evaluation"
              className="absolute  z-11 bg-white p-4  flex items-center shadow-2xl rounded-lg gap-4  top-16  md:right-6 right-0  opacity-0 translate-x-16    "
            >
              {/* icons */}
              <div className="bg-yellow-300 rounded-full text-yellow-600 p-2  ">
                <IoStar size={21} />
              </div>
              <div className="flex flex-col gap-1  ">
                <span className="text-gray-500 text-xs ">
                  {t("hero.Service_evaluation")}
                </span>
                <span className="text-black text-md font-semibold">
                  {t("hero.Excellent")}
                </span>
              </div>
            </div>
            <div
              id="Certified_doctors"
              className="absolute  z-11 bg-white p-4  flex items-center shadow-2xl rounded-lg gap-4 top-60   md:-left-8 left-0  -translate-x-20 opacity-0   "
            >
              <div className="bg-blue-100 rounded-full text-blue-600 p-2  ">
                <FaUserDoctor size={21} />
              </div>
              <div className="flex flex-col gap-1  ">
                <span className="text-black text-md font-semibold">
                  {t("hero.Certified_doctors")}{" "}
                </span>
                <span className="text-gray-500 text-xs  flex items-center gap-2">
                  <span className=" p-0.5 w-2 h-2 bg-green-500  rounded-full"></span>
                  {t("hero.Available_now")}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* END Hero image */}
      </div>
    </section>
  );
};

export default HeroSection;
