import { useTranslation } from "react-i18next";
import { CiUser } from "react-icons/ci";
import { VscHistory } from "react-icons/vsc";
import { CiSettings } from "react-icons/ci";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../utils/animations";
import ProfileInfo from "../../components/profile/ProfileInfo";
import ProfileHistory from "../../components/profile/ProfileHistory";
import ProfileCard from "../../components/profile/ProfileCard";


const Profile = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'history' | 'settings'>('info');
  const { t } = useTranslation("profile")
  const tabsRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <main className="min-h-screen  bg-gray-50/80  font-sans pb-20 ">
      <div className="relative h-[320px] bg-slate-100 overflow-hidden rounded-b-[3rem]">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[16px_16px]  opacity-40"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-white via-transparent to-transparent opacity-80"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container_custom mx-auto px-4 -mt-44 relative z-10">
        <ProfileCard />
        
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
          <ProfileInfo />
        }

        {activeTab === "history" &&
          <ProfileHistory />
        }

      </div>
    </main>
  )
}

export default Profile