// src/components/ResponsivePage.js
import React from "react";
import "tailwindcss/tailwind.css";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import Image5 from "../assets/image5.jpg";
import Image6 from "../assets/image6.jpg";
import headerImage from "../assets/WhatsApp_Image_2024-05-14_at_23.42.18-removebg-preview.png";
import Curousel from "../Components/Curoussel";
import { useTranslation } from "react-i18next";
import border from "../assets/Ornamental vector Hiba2.png"
const headerBgImage = `url(${border}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;


// import bgImage from "../assets/6027f7bf18f4aaf02e671e7a7b357289 - Copy.jpg"

const ResponsivePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="w-full h-full relative">
        <div className="flex flex-row items-center md:items-start">
          {/* First Image */}
          <div className="w-[68%] h-[600px]">
            <Curousel />
            {/* <img src={Image1} className="w-full h-full object-cover" alt="First"/> */}
          </div>

          {/* Middle Printed Border */}
          <div className="w-[5%] h-[600px] opacity-70">
            <div className="border-pattern h-full w-full"></div>
          </div>

          {/* Static Image Section */}
          <div className="w-[28%] h-[600px] flex justify-center items-center p-5">
            <img src={headerImage} alt="Static" className="object-cover" />
          </div>
        </div>

        {/* Content Box for Medium and Larger Screens */}
        <div className="absolute hidden lg:flex left-1/2 transform -translate-x-1/2 -translate-y-44 w-[90%]  max-w-[1110px] bg-[#1e478e] text-white shadow-2xl">
          <div className="flex w-[17%] justify-center items-center bg-white">
            <img src={headerImage} className="w-36  h-10" alt="" />
          </div>

          <div className="w-[83%]">

          <div className="px-5 py-10">
            <p className="homeText">{t("cardAboveCarousel")}</p>
            <div className="flex justify-center] gap-4 mt-4 flex-wrap">
              <button className="cursor-default font-semibold">
                {t('serviceSpan')}
              </button>
              <button className="border-2 text-xs rounded-3xl px-2 md:px-3 lg:px-5 py-1 md:py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                {t("AL WAZEERIYAH")}
              </button>
              <button className="border-2 text-xs rounded-3xl px-2 md:px-3 lg:px-5 py-1 md:py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                {t('AL ZAHRA')}
              </button>
              <button className="border-2 text-xs rounded-3xl px-2 md:px-3 lg:px-5 py-1 md:py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                {('AL SANABEL')}
              </button>
            </div>
          </div>
          </div>
        </div>

        {/* Additional Box for Small Screens */}
        <div className="w-full lg:hidden flex  flex-col justify-center items-center h-auto bg-[#1e478e] text-white ">
          <div className="flex w-full justify-center h-40 items-center bg-white border-2 shadow-2xl">
            <img src={headerImage} className="w-1/2  h-20" alt="" />
          </div>
          <div className="p-10 flex flex-col justify-center items-center h-full w-full">
            <p
              className="leading-loose mb-5 homeText max-w-[50rem]"
              style={{ textAlign: "center" }}
            >
              Hiba Asia Medical Group has transformed the healthcare domain in
              Saudi Arabia, Qatar, UAE, Oman, Kuwait & India. We own and manage
              20 healthcare facilities, including the best hospital in Saudi
              Arabia and other high-end medical centers, becoming one of the
              most successful healthcare providers in the GCC. With a team of
              the best doctors in Saudi Arabia, world-class medical
              professionals, nurses, and hospital management staff, our
              leadership extends to all aspects of the healthcare spectrum.
            </p>
            <button className="cursor-default font-semibold ">
              OUR SERVICE SPAN ACROSS KSA
            </button>
            <div className="flex justify-center mt-4 gap-3 flex-wrap max-w-[35rem]">
            <button className="border-2 text-xs rounded-3xl px-3  py-2  hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                {t("AL WAZEERIYAH")}
              </button>
              <button className="border-2 text-xs rounded-3xl px-3  py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                {t('AL ZAHRA')}
              </button>
              <button className="border-2 text-xs rounded-3xl px-3  py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                {('AL SANABEL')}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1e478e] h-24 hidden lg:block"></div>
    </>
  );
};

export default ResponsivePage;
