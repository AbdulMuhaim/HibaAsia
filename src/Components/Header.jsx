import { useEffect, useState } from "react";
import headerImage from "../assets/WhatsApp_Image_2024-05-14_at_23.42.18-removebg-preview.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Whatsapp from "./Whatsapp";
import SocialMedias from "./SocialMedias";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
  };

  console.log(location);

  useEffect(() => {
    // Function to check screen size and update mobileMenu state
    const checkScreenSize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setMobileMenu(true);
      } else {
        setMobileMenu(false);
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
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
      <div className="w-full h-auto flex sm:justify-center justify-evenly items-center">
        {/* options bar under header */}
        {mobileMenu ? (
          <div className="p-2 w-1/2">
            <RxHamburgerMenu
              size={25}
              color="white"
              className="cursor-pointer hover:border-2"
            />
          </div>
        ) : (
          // Menu list
          <div
            className="w-4/5 h-16 flex justify-between items-center px-5"
            style={{ fontFamily: "Avenir Next or Sofia Pro" }}
          >
            {headerMenuOptions.map((option, index) => (
              <div key={index}>
                <h1
                  onClick={() => navigate(option.url)}
                  className="font-bold text-medium xl:text-lg opacity-60 cursor-pointer transition-opacity duration-300 hover:opacity-100"
                >
                  {option.name}
                </h1>
              </div>
            ))}
          </div>
        )}

        <div className="w-1/2 md:w-auto flex-col justify-center items-center py-2">
          <div className="flex items-center justify-center">
            <img
              src={headerImage}
              alt=""
              className="md:p-0 md:my-2 min-h-[3rem] max-w-[8rem]  md:max-h-[5rem] md:max-w-[12rem] min-w-[5rem] mx-auto md:mx-0 "
            />
          </div>
        </div>

        {/* options bar under header closed*/}

        <div className={`flex absolute top-32 right-10 text-sm sm:text-base font-Avenir  items-center justify-center`}>
          <button
            onClick={toggleLanguage}
            className={`sm:px-3 sm:py-2 px-1 py-1 rounded-l-full ${
              language === "en"
                ? "bg-white text-black"
                : "text-white bg-sky-800"
            }`}
          >
            English
          </button>
          <button
            onClick={toggleLanguage}
            className={`sm:px-3 sm:py-2 px-1 py-1 rounded-r-full ${
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
            className="absolute xl:text-5xl text-4xl  transition-transform hover:scale-105 text-white top-32 left-4 cursor-pointer"
          />
        )}
      </div>

      {/* <div className="border-t-2 border-gray-300 bg-sky-800">
<h1 className="border text-white p-3">Home</h1>
<h1 className="border text-white p-3">About</h1>
<h1 className="border text-white p-3">Doctors</h1>
<h1 className="border text-white p-3">Services</h1>
<h1 className="border text-white p-3">Gallery</h1>
<h1 className="border text-white p-3">Contact</h1>
  </div> */}
    </>
  );
}

export default Header;
