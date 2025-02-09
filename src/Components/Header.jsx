import { useEffect, useRef, useState } from "react";
import headerImage from "../assets/WhatsApp_Image_2024-05-14_at_23.42.18-removebg-preview.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Whatsapp from "./Whatsapp";
import SocialMedias from "./SocialMedias";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { FaCaretDown } from "react-icons/fa";
import ScrollToTop from "./ScrollTopButton";
const saudiFlag =
  "https://cdn.britannica.com/79/5779-050-46C999AF/Flag-Saudi-Arabia.jpg";
const ukFlag =
  "https://i.pinimg.com/originals/da/ab/37/daab37fd372ddb4949adebcd73166a20.png";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  // const toggleLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  //   setLanguage(lng);
  // };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const headerMenuOptions = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Doctors",
      url: "/doctors",
    },
    {
      name: "Services",
      url: "services",
    },
    {
      name: "Team",
      url: "team",
    },
    {
      name: "Gallery",
      url: "gallery",
    },
    {
      name: "Branches",
      url: "/branches",
    },
    {
      name: "Other Business",
      url: "otherbusiness"
    },
  ];

  return (
    <>
      <div className="w-full h-auto flex border-t-4 border-[#1e478e] sm:flex-col lg:flex-row justify-center items-center py-3">
        {/* hiba icon */}
        <div className={` ${isArabic ? "lg:pl-64 pl-14" : "lg:pr-64 pr-14"}`}>
          <div className="flex items-center">
            <img
              src={headerImage}
              alt="Logo"
              className="min-h-[2rem] max-w-[10rem] sm:max-w-[12rem] md:max-h-[4.5rem] md:max-w-[25rem]"
            />
          </div>
        </div>

        {/* Contact buttons */}
        <div className="flex sm:flex-row mx-5 py-2 my-5 md:my-0 md:justify-normal ">
          <a
            className={`sm:flex items-center hidden gap-2 border-gray-400 href="tel:+9660545961777 ${
              isArabic ? "border-l pl-9" : "border-r border-black pr-9"
            }`}
          >
            <button
              className={`bg-white text-black p-3 border-opacity-80 border-[#1e478e] border-2 xl:text-2xl rounded-full transition duration-300 transform`}
            >
              <IoIosCall className="text-[#1e478e]" />
            </button>

            <div>
              <p
                className="opacity-60 text-xs mb-1 font-medium"
                style={{
                  letterSpacing: "0.03rem",
                  wordSpacing: "0.05rem",
                  whiteSpace: "nowrap",
                }}
              >
                {t("mobile")}
              </p>
              <p className="font-Avenir text-sm opacity-90">0545961777</p>
            </div>
          </a>
          <a
            className={`sm:flex items-center hidden px-9 border-gray-400 gap-2 href="mailto:info@hibaasia.care ${
              isArabic ? "border-l  " : "border-r border-black"
            }`}
          >
            <button className="bg-white text-black border-[#1e478e] border-opacity-80 border-2 p-3 xl:text-2xl rounded-full font-bold transition duration-300 transform">
              <MdEmail className="text-[#1e478e] opacity-" />
            </button>
            <div>
              <p
                className=" opacity-60 text-xs mb-1 font-medium"
                style={{ letterSpacing: "0.03rem", wordSpacing: "0.05rem" }}
              >
                {t("mail")}
              </p>
              <p className="text-sm opacity-90">info@hibaasia.care</p>
            </div>
          </a>

          <div
            ref={dropdownRef}
            className={`relative flex text-left justify-center items-center font-thin text-xs ${
              isArabic ? "sm:pr-9" : "sm:pl-9"
            }`}
          >
            <div
              onClick={toggleDropdown}
              className="flex items-center bg-white w-28 hover:bg-gray-100 border border-gray-400 rounded-md shadow-sm px-2 py-2 cursor-pointer"
            >
              <img
                src={language === "en" ? ukFlag : saudiFlag}
                alt="flag"
                className={`h-4 w-5 ${language === "en" ? "mr-1" : "ml-1"}`}
              />
              <div
                className={` flex w-full justify-between items-center overflow-hidden`}
              >
                <span>{language === "en" ? "English" : "العربية"}</span>
                <FaCaretDown className="text-gray-600 pointer-events-none" />
              </div>
            </div>
            {dropdownOpen && (
              <div className="absolute mt-[100px] max-w-[7rem] w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                <div
                  onClick={() => handleLanguageChange("en")}
                  className="flex items-center  py-2 cursor-pointer hover:bg-gray-100"
                >
                  <img src={ukFlag} alt="USA Flag" className="h-4 w-5 mx-2" />
                  <span>English</span>
                </div>
                <div
                  onClick={() => handleLanguageChange("ar")}
                  className="flex items-center  py-2 cursor-pointer hover:bg-gray-100"
                >
                  <img
                    src={saudiFlag}
                    alt="Saudi Flag"
                    className="h-4 w-5 mx-2"
                  />
                  <span>العربية</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* options bar under header closed*/}

        <Whatsapp />
        <SocialMedias />
        <ScrollToTop />


        {location.pathname === "/" ? (
          ""
        ) : (
          <IoArrowBackCircleSharp
            onClick={() => navigate(-1)}
            className="absolute text-4xl 2xl:text-5xl transition-transform hover:scale-105 text-white md:top-60 sm:top-64 lg:top-44 top-48 left-2 cursor-pointer"
          />
        )}
      </div>

      <div
        className="flex-col font-thin bg-[#1e478e] flex text-white h-[68px] w-full items-center text-xs justify-center"
        style={{ letterSpacing: "1px", wordSpacing: "3px" }}
      >
        {/* Hamburger menu for mobile */}
        <div className="lg:hidden flex justify-end w-full py-4 px-8 ">
          <div
            onClick={() => setMobileMenu(!mobileMenu)}
            className="cursor-pointer "
          >
            <RxHamburgerMenu
              size={25}
              color="white"
              className="border-white hover:border-2"
            />
          </div>
        </div>

        {/* Menu list for desktop and mobile menu options */}


        {!mobileMenu && (
          <div className="w-[780px] hidden lg:flex justify-center items-center mx-2 h-full">
            {headerMenuOptions.map((option, index) => (
              <div
                key={index}
                className="hover:bg-[#203d6f] flex justify-center w-1/4 h-full items-center"
              >
                <h1
                  onClick={() => navigate(option.url)}
                  className="text-medium text-center cursor-pointer transition-opacity duration-300 "
                >
                  {t(option.name)}
                </h1>
              </div>
            ))}
          </div>
        )}

        
      </div>

      {mobileMenu && (
          <div className="w-full  flex flex-col items-center px-4 bg-[#1e478e] ">
            {headerMenuOptions.map((option, index) => (
              <h1
                key={index}
                onClick={() => {
                  navigate(option.url);

                  setMobileMenu(false);
                }}
                className="bg-[#1e478e] w-full text-center hover:bg-white hover:text-[#1e478e] text-white border-slate-500 border-y president-message cursor-pointer duration-300 py-3"
              >
                {t(option.name)}
              </h1>
            ))}
          </div>
        )}
      

      {isScrolled && (
        <div
          className={`w-full h-auto lg:flex hidden ${
            isScrolled ? "scrolled" : ""
          }  sm:flex-col lg:flex-row justify-center gap-20  border-b border-gray-300 items-center py-3 fixed top-0 left-0 z-50 bg-white transition-all duration-300`}
        >
          <div className="flex items-center">
            <img
              src={headerImage}
              alt="Logo"
              className="min-h-[2rem] max-w-[10rem] sm:max-w-[12rem] md:max-h-[4.5rem] md:max-w-[25rem]"
            />
          </div>{" "}
          <div
            className="w-[780px] hidden lg:flex justify-center items-center font-thin text-xs mx-2 h-full"
            style={{ letterSpacing: "1px", wordSpacing: "3px" }}
          >
            {headerMenuOptions.map((option, index) => (
              <div
                key={index}
                className=" flex justify-center w-full h-full items-center"
              >
                <h1
                  onClick={() => navigate(option.url)}
                  className="text-medium cursor-pointer hover:font-semibold transition-opacity duration-300 "
                >
                  {t(option.name)}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
