import { useState } from "react";
import headerImage from "../assets/WhatsApp_Image_2024-05-14_at_23.42.18-removebg-preview.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Whatsapp from "./Whatsapp";
import SocialMedias from "./SocialMedias";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const toggleLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const headerMenuOptions = [
    {
      name: "headerMenuOptions1",
      url: "/",
    },
    {
      name: "headerMenuOptions2",
      url: "/about",
    },
    {
      name: "headerMenuOptions3",
      url: "/doctors",
    },
    {
      name: "headerMenuOptions4",
      url: "",
    },
    {
      name: "headerMenuOptions5",
      url: "",
    },
    {
      name: "headerMenuOptions6",
      url: "/contact",
    },
  ];

  return (
    <>
      <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-center pb-3">
        {/* Hamburger menu for mobile */}
        <div className="lg:hidden flex justify-between w-full py-5 px-2">
          <div
            onClick={() => setMobileMenu(!mobileMenu)}
            className="cursor-pointer"
          >
            <RxHamburgerMenu
              size={25}
              color="black"
              className="border-black hover:border-2"
            />
          </div>
        </div>

        {/* Menu list for desktop and mobile menu options */}
        {mobileMenu && (
          <div className="w-full flex flex-col items-center">
            {headerMenuOptions.map((option, index) => (
              <h1
                key={index}
                onClick={() => {
                  navigate(option.url);
                  setMobileMenu(false);
                }}
                className="font-bold bg-slate-300 w-full text-center border text-medium xl:text-lg 2xl:text-2xl opacity-60 cursor-pointer transition-opacity duration-300 hover:opacity-100 py-4"
              >
                {t(option.name)}
              </h1>
            ))}
          </div>
        )}

        {!mobileMenu && (
          <div
            className="hidden lg:flex md:gap-5 xl:gap-10 h-16 justify-between items-center mx-2"
            style={{ fontFamily: "Avenir Next, Sofia Pro" }}
          >
            {headerMenuOptions.map((option, index) => (
              <div key={index}>
                <h1
                  onClick={() => navigate(option.url)}
                  className="font-bold text-medium 2xl:text-2xl opacity-60 cursor-pointer transition-opacity duration-300 hover:opacity-100"
                >
                {t(option.name)}
                </h1>
              </div>
            ))}
          </div>
        )}

        {/* Contact buttons */}
        <div className="flex sm:flex-row mx-5 gap-20 md:gap-8 xl:gap-14 py-2 justify-end my-3 md:my-0 md:justify-normal">
          <a className="flex items-center gap-2" href="tel:+9660545961777">
            <button className="bg-white text-black 2xl:p-2 p-1 border-sky-800 border-2 xl:text-xl 2xl:text-3xl rounded-full transition duration-300 transform">
              <IoIosCall />
            </button>
            <div>
              <p className="font-medium text-sm md:text-base 2xl:text-lg opacity-85">
                {t('mobile')}
              </p>
              <p className="font-Avenir text-xs sm:text-sm 2xl:text-base opacity-90">
                0545961777
              </p>
            </div>
          </a>
          <a
            className="flex items-center gap-2"
            href="mailto:info@hibaasia.care"
          >
            <button className="bg-white text-black border-sky-800 border-2 2xl:p-2 p-1 xl:text-xl 2xl:text-3xl rounded-full font-bold transition duration-300 transform">
              <MdEmail />
            </button>
            <div>
              <p className="font-medium opacity-85 text-sm 2xl:text-lg md:text-base">
              {t('mail')}
              </p>
              <p className="font-Avenir text-xs sm:text-sm 2xl:text-base opacity-90">
                info@hibaasia.care
              </p>
            </div>
          </a>
        </div>

        <div className=" w-1/2 md:w-auto flex-col justify-center items-center">
          <div className="flex items-center justify-center">
            <img
              src={headerImage}
              alt="Logo"
              className="min-h-[2rem] max-w-[8rem] sm:max-w-[12rem] md:max-h-[3rem] md:max-w-[16rem] 2xl:max-h-[5rem] mt-2"
            />
          </div>
        </div>

        {/* options bar under header closed*/}

        <div className={`flex absolute ${isArabic? 'lg:left-10 left-4' : 'lg:right-10 right-4'} top-4 lg:top-28 font-Avenir items-center justify-center`}>
          <button
            onClick={() => toggleLanguage("en")}
            className={`sm:px-3 sm:py-2 p-1 static-button inline-block text-xs sm:text-sm 2xl:text-lg  ${
              language === "en"
                ? "bg-white text-black rounded-l-xl"
                : "text-white bg-sky-800 rounded-r-xl"
            }`}
            // style={{ direction: "ltr", textAlign: "left" }}
          >
            {t("button_english")}
          </button>
          <button
            onClick={() => toggleLanguage("ar")}
            className={`sm:px-3 sm:py-2 text-xs p-1 static-button inline-block sm:text-sm 2xl:text-lg  ${
              language === "ar"
                ? "bg-white text-black rounded-l-xl"
                : "text-white bg-sky-800 rounded-r-xl"
            }`}
            // style={{ direction: "ltr", textAlign: "left" }}
          >
            {t("button_arabic")}
          </button>
        </div>

        <Whatsapp />
        <SocialMedias />

        {location.pathname === "/" ? (
          ""
        ) : (
          <IoArrowBackCircleSharp
            onClick={() => navigate(-1)}
            className="absolute xl:text-5xl text-4xl  transition-transform hover:scale-105 text-white top-36 left-4 cursor-pointer"
          />
        )}
      </div>
    </>
  );
}

export default Header;
