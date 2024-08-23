// src/components/ResponsivePage.js
import "tailwindcss/tailwind.css";
import headerImage from "../assets/WhatsApp_Image_2024-05-14_at_23.42.18-removebg-preview.png";
import Curousel from "../Components/Curoussel";
import { useTranslation } from "react-i18next";
import border from "../assets/Ornamental vector Hiba2.png";

// import bgImage from "../assets/6027f7bf18f4aaf02e671e7a7b357289 - Copy.jpg"

const ResponsivePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-full relative">

            <Curousel />

        {/* Content Box for Medium and Larger Screens */}
        <div
          className="absolute hidden lg:flex left-1/2 transform -translate-x-1/2 -translate-y-52 w-[90%]  max-w-[1110px] bg-[#1e478e] text-white shadow-2xl"
          style={{ boxShadow: "0 12px 16px rgba(0, 0, 0, 0.2)" }}
        >
          <div className="flex w-[17%] justify-center items-center bg-white">
            <img src={headerImage} className="w-36  h-10" alt="" />
          </div>

          <div className="w-[83%]">
            {/* <div className="flex">
              <img src={border} alt="" className="h-7  overflow-hidden" />
              <img src={border} alt="" className="h-7  overflow-hidden " />
            </div> */}
            <div className="px-5 py-10">
              <p className="homeText">{t("cardAboveCarousel")}</p>
              <div className="flex justify-center] gap-4 mt-4 flex-wrap">
                <button className="cursor-default font-semibold">
                  {t("serviceSpan")}
                </button>
                <button className="border-2 text-xs rounded-3xl px-2 md:px-3 lg:px-5 py-1 md:py-2 hover:bg-white hover:text-[#1e478e] transition duration-300 ease-in-out">
                  {t("AL WAZEERIYAH")}
                </button>
                <button className="border-2 text-xs rounded-3xl px-2 md:px-3 lg:px-5 py-1 md:py-2 hover:bg-white hover:text-[#1e478e] transition duration-300 ease-in-out">
                  {t("AL ZAHRA")}
                </button>
                <button className="border-2 text-xs rounded-3xl px-2 md:px-3 lg:px-5 py-1 md:py-2 hover:bg-white hover:text-[#1e478e] transition duration-300 ease-in-out">
                  {t("AL SANABEL")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Box for Small Screens */}
        <div className="w-full lg:hidden flex  flex-col justify-center items-center h-auto bg-[#1e478e] text-white ">
          <div className="flex w-full justify-center h-40 items-center bg-white border-2 shadow-2xl">
            <img src={headerImage} className="w-[300px]" alt="" />
          </div>
          <div className="p-9 flex flex-col justify-center items-center h-full w-full">
            <p
              className="leading-loose mb-5 homeText max-w-[50rem]"
              style={{ textAlign: "center" }}
            >
              {t("cardAboveCarousel")}
            </p>
            <button className="cursor-default font-semibold ">
            {t("serviceSpan")}
            </button>
            <div className="flex justify-center mt-1 gap-3 flex-wrap max-w-[35rem]">
              <button className="border-2 text-xs rounded-3xl px-3  py-2  hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                {t("AL WAZEERIYAH")}
              </button>
              <button className="border-2 text-xs rounded-3xl px-3  py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                {t("AL ZAHRA")}
              </button>
              <button className="border-2 text-xs rounded-3xl px-3  py-2 hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out">
                {"AL SANABEL"}
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
