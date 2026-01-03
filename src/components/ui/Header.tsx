import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "./Button";
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import i18next from "i18next";
import { useGSAP } from "@gsap/react";
import { RiHome9Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { VscWholeWord } from "react-icons/vsc";
import { LuContactRound } from "react-icons/lu";
import gsap from "gsap";

const Header = () => {
  const [activeLink, setActiveLink] = useState<string>("/");
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { t: tAuth } = useTranslation("auth");
  const { t: tNav } = useTranslation("nav");

  useGSAP(() => {
    if (openMenu) {
      gsap.to(".menu", {
        x: 0,
        duration: 0.45,
        ease: "power3.out",
      });

      gsap.to(".Overlay", {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });
    } else {
      gsap.to(".menu", {
        x: i18next.language === "ar" ? "100%" : "-100%",
        duration: 0.45,
        ease: "power3.in",
      });
      gsap.to(".Overlay", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
      });
    }
  }, [openMenu]);

  const navLinks = [
    { path: "/", label: tNav("nav.home"), icon: <RiHome9Line size={20} /> },
    {
      path: "/services",
      label: tNav("nav.services"),
      icon: <FaStar size={20} />,
    },
    {
      path: "/doctors",
      label: tNav("nav.doctors"),
      icon: <FaUserDoctor size={20} />,
    },
    {
      path: "/WhoAreWe",
      label: tNav("nav.WhoAreWe"),
      icon: <VscWholeWord size={20} />,
    },
    {
      path: "/contact",
      label: tNav("nav.contact"),
      icon: <LuContactRound size={20} />,
    },
  ];

  return (
    <header className=" w-full border-b border-gray-200 bg-white  z-50 py-3 shadow-sm fixed top-0 left-0">
      {/* Desktop Screen */}
      <div className="container_custom  flex justify-between items-center h-16">
        {/* logo */}
        <Link to="/" className="flex items-center gap-3 text-primary text-2xl font-semibold ">
          <img
            src="/logo.png"
            alt="logo"
            className="h-13 w-13 md:w-15 md:h-15"
          />
          <p>الحكيم</p>
        </Link>

        {/* link Desktop */}
        <nav className="hidden md:flex items-center gap-6 ms-11">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`text-gray-500 hover:text-primary transition-color duration-75  text-md pb-1 hover:border-b-2 hover:border-primary  ${
                activeLink === item.path
                  ? "text-primary border-b-2 border-primary text-md"
                  : ""
              }`}
              onClick={() => {
                setActiveLink(item.path);
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <ToggleButton />
          <Link to="/login">
            <Button classNameButton="px-7 py-2">{tAuth("auth.login")}</Button>
          </Link>
          <Link to="/signup">
            <button className=" cursor-pointer w-full text-sm font-medium py-2 px-7  rounded-md border-2 border-primary  hover:bg-primary hover:text-white duration-75 transition-all text-primary shadow-lg ">
              {tAuth("auth.signUp")}
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-2">
          <ToggleButton />
          <button
            className=" hover:text-primary transition-all duration-75 cursor-pointer"
            onClick={() => setOpenMenu(true)}
          >
            <HiMenuAlt3 size={25} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 opacity-0 pointer-events-none md:hidden Overlay"
        onClick={() => setOpenMenu(false)}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className="fixed top-0 h-full w-96 bg-white shadow-lg md:hidden p-5 flex flex-col gap-6 menu pt-7"
        style={{
          insetInlineStart: 0,
          transform: `translateX(${
            i18next.language === "ar" ? "100%" : "-100%"
          })`,
        }}
      >
        {/* Top Section */}
        <div className="flex justify-between items-center pb-5 border-b-2  border-gray-100">
          <Link to="/" className="">
            <img src="./logo.png" alt="logo" className="h-11 w-12 " />
          </Link>
          <button className="text-gray-500 " onClick={() => setOpenMenu(false)}>
            <IoClose size={25} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col   border-s-4 border-gray-200 ">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => {
                setOpenMenu(false);
                setActiveLink(item.path);
              }}
              className={`text-md text-gray-700 pr-3 group py-4  flex items-center gap-4 ${
                activeLink === item.path
                  ? "bg-gray-100 text-primary font-extrabold "
                  : "hover:bg-gray-100"
              } `}
            >
              <span
                className={`text-gray-500 ps-2 ${
                  activeLink === item.path ? "text-primary font-bold" : ""
                }`}
              >
                {" "}
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className=" flex flex-col gap-3 pt-10 border-t-2  border-gray-100">
          <Link to="/login" onClick={() => setOpenMenu(false)}>
            <Button>{tAuth("auth.login")}</Button>
          </Link>
          <Link to="/signup" onClick={() => setOpenMenu(false)}>
            <Button variant="outline" classNameButton="py-2 px-7">
              {tAuth("auth.signUp")}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
