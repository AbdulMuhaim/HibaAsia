import React, { useEffect } from "react";
import headerBgImage from "../assets/jpeg-optimizer_business-concept-with-team-close-up.jpg";
import image1 from "../assets/cleanwave-dish-soap-with-fresh-kitchen-items-clean-dishes_1264082-223105.avif";
import image2 from "../assets/closeup-electronic-circuit-board-with-cpu-microchip-electronic-components-background_1387-743.jpg";
import image3 from "../assets/photo-automobile-production-line-welding-car-body-modern-car-assembly-plant-auto-industry-interior-hightech-factory-modern-production_645730-185.jpg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function OtherBusiness() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const { t } = useTranslation();

  const cardData = [
    {
      image: image2,
      title: "Al Hannawi Hardwares",
    },
    {
      image: image1,
      title:
        "Al Hannavi Trading For Food, Non Food & Cleaning Material (Wholesale)",
    },
    {
      image: image3,
      title: "Al Hannawi Manufacturing Unit",
    },
  ];

  return (
    <>
      <div
        className="flex items-center justify-center h-60"
        style={{
          backgroundImage: headerImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col">
          <h1 className="text-5xl text-center p-5 text-white uppercase">
            {t("Other Business")}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t("Home")}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">{t("Other Business")}</p>
          </div>
        </div>
      </div>

      <div className=" flex justify-center">
        <div className="flex-col p-10 sm:p-20 w-full flex justify-center items-center gap-5 max-w-[1315px]">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col p-3 bg-slate-300 shadow-md hover:shodow-lg rounded-2xl w-full"
            >
              <div className="flex items-center">
                <img
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-gray-800 text-blue-400 bg-gray-900"
                  src={card.image}
                  alt={card.title}
                />

                <div className="flex flex-col ml-3 ">
                  <p className="text-sm sm:text-base font-semibold md:text-md  text-center ">
                    {card.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OtherBusiness;