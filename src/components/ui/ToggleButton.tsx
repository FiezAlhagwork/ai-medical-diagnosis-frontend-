import i18n from "i18next";
import { CiGlobe } from "react-icons/ci";

const ToggleButton = () => {
  
  const current = i18n.language || localStorage.getItem("i18nextLng") || "ar";
  const toggle = () => {
    const newLang = current === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang).then(() => {
      document.documentElement.lang = newLang;
      if (i18n.language === "ar") {
        document.documentElement.classList.add("font-ar");
        document.documentElement.classList.remove("font-en");
      } else {
        document.documentElement.classList.add("font-en");
        document.documentElement.classList.remove("font-ar");
      }
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
      localStorage.setItem("i18nextLng", newLang);
    });
  };


  return (
    <button
      onClick={toggle}
      className="hover:bg-primary w-fit outline-none rounded-xl py-2 px-2 hover:text-white duration-200 text-gray-600"
    >
      <CiGlobe size={23} />
    </button>
  );
};

export default ToggleButton;
