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
          <div className="w-[27%] h-[600px] flex justify-center items-center p-5">
            <img src={headerImage} alt="Static" className="object-cover" />
          </div>
        </div>

        {/* Content Box for Medium and Larger Screens */}
        <div className="absolute hidden md:flex left-1/2 transform -translate-x-1/2 -translate-y-56 w-[90%]  max-w-[1110px] bg-sky-800 text-white shadow-lg">
          <div className="flex w-[17%] justify-center items-center bg-white">
            <img src={headerImage} className="w-36  h-10" alt="" />
          </div>

          <div className="w-[83%] px-8 py-8">
            <p className="leading-loose">{t("cardAboveCarousel")}</p>
            <div className="flex justify-between mt-4 flex-wrap">
              <button className="cursor-default font-semibold">
                OUR SERVICE SPAN ACROSS
              </button>
              <button className="border-2 text-sm rounded-3xl px-4 md:px-6 lg:px-8 py-1 md:py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                KSA
              </button>
              <button className="border-2 text-sm rounded-3xl px-4 md:px-6 lg:px-8 py-1 md:py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                UAE
              </button>
              <button className="border-2 text-sm rounded-3xl px-4 md:px-6 lg:px-8 py-1 md:py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                OMAN
              </button>
              <button className="border-2 text-sm rounded-3xl px-4 md:px-6 lg:px-8 py-1 md:py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                KUWAIT
              </button>
              <button className="border-2 text-sm rounded-3xl px-4 md:px-6 lg:px-8 py-1 md:py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                INDIA
              </button>
            </div>
          </div>
        </div>

        {/* Additional Box for Small Screens */}
        <div className="w-full md:hidden flex justify-center items-center flex-col h-auto  bg-sky-800 text-white shadow-lg">
          <div className="flex w-full justify-center h-40 items-center bg-white border-4 border-sky-800">
            <img src={headerImage} className="w-1/2  h-20" alt="" />
          </div>
          <div className="p-10 flex flex-col justify-center items-center">
            <p className="leading-loose mb-5 text-lg md:text-base max-w-[37rem]" style={{textAlign:"center"}}>
              Hiba Asia Medical Group has transformed the healthcare domain in Saudi
              Arabia, Qatar, UAE, Oman, Kuwait & India. We own and manage 20
              healthcare facilities, including the best hospital in Saudi Arabia
              and other high-end medical centers, becoming one of the most
              successful healthcare providers in the GCC. With a team of the
              best doctors in Saudi Arabia, world-class medical professionals,
              nurses, and hospital management staff, our leadership extends to
              all aspects of the healthcare spectrum.
            </p>
            <button className="cursor-default font-semibold text-xl md:text-base">
              OUR SERVICE SPAN ACROSS
            </button>
            <div className="flex justify-center mt-4 gap-5 flex-wrap max-w-[35rem]">
            <button className="border-2 md:text-sm rounded-3xl px-8 md:px-6 lg:px-8 py-2 md:py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                KSA
              </button>
              <button className="border-2 md:text-sm rounded-3xl px-8 md:px-6 lg:px-8 py-2 md:py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                UAE
              </button>
              <button className="border-2 md:text-sm rounded-3xl px-8 md:px-6 lg:px-8 py-2 md:py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                OMAN
              </button>
              <button className="border-2 md:text-sm rounded-3xl px-8 md:px-6 lg:px-8 py-2 md:py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                KUWAIT
              </button>
              <button className="border-2 md:text-sm rounded-3xl px-8 md:px-6 lg:px-8 py-2 md:py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                INDIA
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sky-900 h-24 hidden md:block"></div>
    </>
  );
};

export default ResponsivePage;
