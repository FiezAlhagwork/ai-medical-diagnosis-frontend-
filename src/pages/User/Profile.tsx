import { useTranslation } from "react-i18next";
import Button from "../../components/ui/Button"
import { FaRegEdit } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { VscHistory } from "react-icons/vsc";
import { CiSettings } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { animateFromToWithGsap, animateWithGsap } from "../../utils/animations";
import DoctorStatCard from "../../components/ui/DoctorStatCard";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { BiHistory } from "react-icons/bi";
const Profile = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'history' | 'settings'>('info');
  const { t } = useTranslation("profile")
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);
  const historyRef = useRef<HTMLDivElement | null>(null);

  const animatedTabs = useRef<Set<string>>(new Set());


  const tabs = [
    { id: 'info', label: t('personalInfo'), icon: <CiUser size={21} /> },
    { id: 'history', label: t('diagnosisHistory'), icon: <VscHistory size={21} /> },
    { id: 'settings', label: t('settings'), icon: <CiSettings size={21} /> },
  ];

  useGSAP(() => {
    if (!tabsRef.current) return
    animateWithGsap(tabsRef.current, {
      opacity: 1,
      y: 0,

    })
  }, [])


  useGSAP(() => {
    if (activeTab === "info" && infoRef.current) {

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
    }

    if (activeTab === "history" && historyRef.current) {
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
    }
  }, [activeTab])



  const stats = [
    {
      id: "phone",
      label: t("phone"),
      value: `0997013656`,
      icon: BsTelephone,
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
    },
    {
      id: "email",
      label: t("email"),
      value: `fiezalhag@gmail.com`,
      icon: AiOutlineMail,
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      id: "location",
      label: t("location"),
      value: "دمشق ,الشعلان",
      icon: CiLocationOn,
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
    },

    {
      id: "date",
      label: t("date"),
      value: "22/10/2022",
      icon: MdOutlineDateRange,
      bgColor: "bg-red-50",
      textColor: "text-red-500",
    },
  ];


  const Diagnosis = [
    { id: 1, confidence: "75%", possible_condition: "نقص تروية عضلة القلب", createdAt: "22/10/2022" },
    { id: 2, confidence: "69%", possible_condition: "نقص تروية عضلة القلب", createdAt: "22/10/2022" },
    { id: 3, confidence: "85%", possible_condition: "نقص تروية عضلة القلب", createdAt: "22/10/2022" },
    { id: 4, confidence: "85%", possible_condition: "نقص تروية عضلة القلب", createdAt: "22/10/2022" },
    { id: 5, confidence: "85%", possible_condition: "نقص تروية عضلة القلب", createdAt: "22/10/2022" },
    { id: 6, confidence: "85%", possible_condition: "نقص تروية عضلة القلب", createdAt: "22/10/2022" },
  ]



  return (
    <main className="min-h-screen  bg-gray-50/80  font-sans pb-20 ">
      <div className="relative h-[320px] bg-slate-100 overflow-hidden rounded-b-[3rem]">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[16px_16px]  opacity-40"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-white via-transparent to-transparent opacity-80"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container_custom mx-auto px-4 -mt-44 relative z-10">
        {/* card profile */}
        <h1 className="text-center text-3xl  md:text-5xl font-bold">ملفي الشخصي</h1>
        <div className="bg-white flex flex-col md:flex-row items-center text-center  gap-4 mt-20 py-10 shadow-lg rounded-3xl">
          <div className="w-20 h-20 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center text-3xl font-bold md:ms-9">
            F
          </div>
          <div className="text-center md:text-start flex-1 md:ms-3 ">
            <h2 className="text-2xl  font-semibold  ">
              Fiez Alhag
            </h2>
            <p className=" text-gray-500">
              fiezalhag@gmail.com
            </p>
          </div>
          <div className="md:pe-7">
            <Button icon={<FaRegEdit size={22} />} variant="primary">
              تعديل الملف
            </Button>
          </div>
        </div>

        <div ref={tabsRef} className="flex gap-2 mb-6  pb-2 mt-8 opacity-0 translate-y-20 w-full max-md:justify-center" >
          {tabs.map((item) => {
            return (
              <button key={item.id} onClick={() => { setActiveTab(item.id as typeof activeTab) }} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border shadow-md border-gray-200 font-medium transition-all whitespace-nowrap ${activeTab === item.id
                ? "bg-primary text-white shadow-md"
                : ""}`}>
                {item.icon}
                <span className=" hidden md:inline">{item.label}</span>
              </button>
            )
          })}
        </div>

        {activeTab === "info" &&
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
        }

        {activeTab === "history" &&
          <>
            <h2 id="historyTab" className="text-xl font-bold my-3 opacity-0 translate-y-20">{t("diagnosisHistory")}</h2>
            <div ref={historyRef} className="grid grid-cols-1 gap-4" >
              {
                Diagnosis.map((item) => {
                  return (
                    <div key={item.id} className="flex items-center justify-between bg-white w-full py-4 px-5 rounded-2xl shadow-md hover:shadow-xl hover:bg-gray-200 transition-colors cursor-pointer">
                      <div className="flex flex-row ">
                        <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-4xl flex justify-center items-center me-4 " >
                          <BiHistory size={25} />
                        </div>
                        <div>

                          <h1 className="text-lg font-semibold mb-1 ">{item.possible_condition}</h1>
                          <span className="text-[14px] text-gray-500">{item.createdAt}</span>

                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-between text-[13px]">
                        <span className="ms-1.5">{item.confidence}</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </>
        }

      </div>
    </main>
  )
}

export default Profile