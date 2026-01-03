import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { MdLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-20 pb-8 rounded-t-[3rem]">
      <div className="container_custom px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Logo + Description */}
          <div className="lg:col-span-4 space-y-6">
            <div className=" flex gap-3  items-center text-white text-3xl font-semibold ">
            <img src="/logo.png" className="w-13 h-13" />
            <p >الحكيم</p>
            </div>

            <p className="text-[16px] leading-relaxed text-gray-400 ">
              {t("your_first_platform")}
            </p>

            <div className="text-[14px] text-gray-400 space-y-1 flex flex-col items-start">
              <p className=" inline-flex justify-center items-center gap-2 ">
                <MdLocalPhone size={15} className="text-primary" />
                 0997013656
              </p>
              <p className=" inline-flex justify-center items-center gap-2 ">
                <MdOutlineEmail size={15} className="text-primary" />
                fiez.tech.alhag@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <a
                className="bg-slate-800/50 p-3 rounded-3xl border border-slate-700/50 backdrop-blur-sm hover:bg-primary transition-all duration-300 hover:scale-125"
                href="#"
              >
                <FaFacebookF />
              </a>
              <a
                className="bg-slate-800/50 p-3 rounded-3xl border border-slate-700/50 backdrop-blur-sm hover:bg-primary transition-all duration-300 hover:scale-125"
                href="#"
              >
                <FaInstagram />
              </a>
              <a
                className="bg-slate-800/50 p-3 rounded-3xl border border-slate-700/50 backdrop-blur-sm hover:bg-primary transition-all duration-300 hover:scale-125"
                href="#"
              >
                <FaTwitter />
              </a>
              <a
                className="bg-slate-800/50 p-3 rounded-3xl border border-slate-700/50 backdrop-blur-sm hover:bg-primary transition-all duration-300 hover:scale-125"
                href="#"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* روابط مهمة */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-semibold mb-4">{t("links")}</h4>
            <ul className="space-y-3 text-sm flex flex-col">
              <li className="hover:text-primary/80 transition inline-flex gap-1 items-center text-gray-500">
                <GoDotFill />
                <Link to="/">{t("home")}</Link>
              </li>
              <li className="hover:text-primary/80 transition inline-flex gap-1 items-center text-gray-500">
                <GoDotFill />
                <Link to="/" className="hover:text-white transition">
                  {t("about_the_platform")}
                </Link>
              </li>
              <li className="hover:text-primary/80 transition inline-flex gap-1 items-center text-gray-500">
                <GoDotFill />
                <Link to="/doctors" className="hover:text-white transition">
                  {t("doctors")}
                </Link>
              </li>
              <li className="hover:text-primary/80 transition inline-flex gap-1 items-center text-gray-500">
                <GoDotFill />
                <Link to="/" className="hover:text-white transition">
                  {t("medical_blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* للمرضى */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">
              {t("for_patients")}
            </h4>
            <ul className="space-y-3 text-sm flex flex-col ">
              <li className="hover:text-primary/80 transition inline-flex gap-1 items-center text-gray-500">
                <GoDotFill />
                <Link to="/">{t("book_an_appointment")}</Link>
              </li>
              <li className="hover:text-primary/80 transition inline-flex gap-1 items-center text-gray-500">
                <GoDotFill />
                <Link to="/">{t("frequently_asked_questions")}</Link>
              </li>
              <li className="hover:text-primary/80 transition inline-flex gap-1 items-center text-gray-500">
                <GoDotFill />
                <Link to="/login">{t("login")}</Link>
              </li>

              <li className="hover:text-primary/80 transition inline-flex gap-1 items-center text-gray-500">
                <GoDotFill />
                <Link to="/signUp">{t("signUp")}</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 bg-slate-800/50 p-6 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
            <h4 className="text-white font-semibold mb-4">
              {t("subscribe_medical")}
            </h4>

            <p className="text-sm mb-4">{t("health_tips_and_articles")}</p>

            <form className="flex flex-col  gap-3">
              <input
                type="email"
                placeholder={t("email")}
                className="px-4 py-3 rounded-xl bg-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition"
              >
                {t("subscription")}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-[14px] text-slate-400 flex justify-between">
          <p>
            {" "}
            © {new Date().getFullYear()}  جميع الحقوق محفوظة. تم التطوير الحكيم
            بواسطة فريق DEEP CODE
          </p>
          <div className=" flex gap-3">
            <Link to="/" className="hover:text-white transition-all">سياسة الخصوصية</Link>
            <Link to="/" className="hover:text-white transition-all">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
