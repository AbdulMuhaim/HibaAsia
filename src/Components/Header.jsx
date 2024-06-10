import { useEffect, useState } from "react";
import headerImage from "../assets/WhatsApp_Image_2024-05-14_at_23.42.18-removebg-preview.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Whatsapp from "./Whatsapp";
import SocialMedias from "./SocialMedias";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
  };

  console.log(location);

  // useEffect(() => {
  //   // Function to check screen size and update mobileMenu state
  //   const checkScreenSize = () => {
  //     if (window.matchMedia("(max-width: 768px)").matches) {
  //       setMobileMenu(true);
  //     } else {
  //       setMobileMenu(false);
  //     }
  //   };

  //   // Initial check
  //   checkScreenSize();

  //   // Add event listener
  //   window.addEventListener("resize", checkScreenSize);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", checkScreenSize);
  //   };
  // }, []);

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
      url: "",
    },
    {
      name: "Gallery",
      url: "",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <>
<div className="w-full h-auto flex flex-col lg:flex-row justify-between items-center p-4">
      {/* Hamburger menu for mobile */}
      <div className="lg:hidden flex justify-between w-full ">
        <div onClick={() => setMobileMenu(!mobileMenu)} className="cursor-pointer">
          <RxHamburgerMenu size={25} color="black" className="border-black hover:border-2" />
        </div>
      </div>

      {/* Menu list for desktop and mobile menu options */}
      {mobileMenu && (
        <div className="w-full flex flex-col items-center my-8">
          {headerMenuOptions.map((option, index) => (
            <h1
              key={index}
              onClick={() => {
                navigate(option.url);
                setMobileMenu(false);
              }}
              className="font-bold bg-slate-300 w-full text-center border text-medium xl:text-lg 2xl:text-2xl opacity-60 cursor-pointer transition-opacity duration-300 hover:opacity-100 py-4"
            >
              {option.name}
            </h1>
          ))}
        </div>
      )}

      {!mobileMenu && (
        <div className="hidden lg:flex md:gap-5 xl:gap-20 h-16 justify-between items-center" style={{ fontFamily: 'Avenir Next, Sofia Pro' }}>
          {headerMenuOptions.map((option, index) => (
            <div key={index}>
              <h1
                onClick={() => navigate(option.url)}
                className="font-bold text-medium xl:text-lg 2xl:text-2xl opacity-60 cursor-pointer transition-opacity duration-300 hover:opacity-100"
              >
                {option.name}
              </h1>
            </div>
          ))}
        </div>
      )}

      {/* Contact buttons */}
      <div className="flex sm:flex-row mx-5 gap-20 md:gap-10 xl:gap-20 py-2 justify-end my-3 md:my-0 md:justify-normal">
        <a className="flex items-center gap-2" href="tel:+9660545961777">
          <button className="bg-white text-black p-1 sm:p-2 border-sky-800 border-4 xl:text-2xl rounded-full transition duration-300 transform">
            <IoIosCall />
          </button>
          <div>
            <p className="font-medium text-sm md:text-lg opacity-85">Talk to Us</p>
            <p className="font-Avenir text-sm sm:text-base opacity-90">0545961777</p>
          </div>
        </a>
        <a className="flex items-center gap-2" href="mailto:info@hibaasia.care">
          <button className="bg-white text-black border-sky-800 border-4 p-1 sm:p-2 xl:text-2xl rounded-full font-bold transition duration-300 transform">
            <MdEmail />
          </button>
          <div>
            <p className="font-medium opacity-85 text-sm  md:text-lg">Write to Us</p>
            <p className="font-Avenir text-sm sm:text-base opacity-90">info@hibaasia.care</p>
          </div>
        </a>
      </div>

      {/* Logo for larger screens */}
      <div className=" w-1/2 md:w-auto flex-col justify-center items-center py-2">
        <div className="flex items-center justify-center">
          <img
            src={headerImage}
            alt="Logo"
            className="md:p-0 md:my-2 min-h-[2rem] max-w-[8rem] sm:max-w-[12rem] md:max-h-[4rem] md:max-w-[16rem]"
          />
        </div>
      </div>

        {/* options bar under header closed*/}

        <div className={`flex absolute lg:top-36 lg:right-10 top-4 right-4 text-sm sm:text-base font-Avenir  items-center justify-center`}>
          <button
            onClick={toggleLanguage}
            className={`sm:px-3 sm:py-2 p-1 text-xs sm:text-base rounded-l-full ${
              language === "en"
                ? "bg-white text-black"
                : "text-white bg-sky-800"
            }`}
          >
            English
          </button>
          <button
            onClick={toggleLanguage}
            className={`sm:px-3 sm:py-2 text-xs p-1 sm:text-base rounded-r-full ${
              language === "ar"
                ? "bg-white text-black"
                : "text-white bg-sky-800"
            }`}
          >
            العربية
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
