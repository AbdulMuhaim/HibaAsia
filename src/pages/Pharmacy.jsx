import img from "../assets/pharmacist-work.jpg";
import headerBgImage from "../assets/high-angle-medical-desk-composition.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Pharmacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const { t } = useTranslation();

  return (
    <div>
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
          <h1 className="text-5xl p-5 text-white uppercase">{t('Pharmacy')}</h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer " onClick={() => navigate("/")}>
              {t('Home')}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer ">{t('Pharmacy')}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="grid lg:grid-cols-2 gap-10 max-w-[1315px] p-3 sm:py-20 sm:px-28">
          <div className="w-full">
            <img src={img} className="rounded-xl" alt="" />
          </div>

          <div className="w-full flex flex-col items-center justify-center mx-auto ">
            <div className="w-full">
              <h1 className=" text-4xl  font-bold  mb-4 uppercase">
              {t('Pharmacy')}
              </h1>
            </div>

            <p className="president-message max-w-4xl">
            {t('pharmacyPara1')}
            </p>
            <p className="president-message max-w-4xl">
            {t('pharmacyPara2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pharmacy;
