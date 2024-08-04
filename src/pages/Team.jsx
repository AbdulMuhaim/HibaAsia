import presidentImage from "../assets/Founder.jpg";
import visionHeaderImage from "../assets/jpeg-optimizer_group-medical-professionals-icu-ready-coronavirus-patients.jpg";
import mdImage from "../assets/700x700-4.jpg";
import ceoImage from "../assets/700X700-2.jpg";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Team() {
  const headerBgImage = `url(${visionHeaderImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className="flex items-center justify-center h-60"
        style={{
          backgroundImage: headerBgImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col">
          <h1 className="text-5xl p-5  text-white uppercase">
            {t("Our Team")}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t("Home")}{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">{t("Team")}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 gap-10  max-w-[1315px] border-b-2 p-3 sm:py-20 sm:px-28">
          <div className="w-full">
            <img src={presidentImage} className="rounded-xl" alt="" />
          </div>

          <div className="w-full flex flex-col items-center justify-center mx-auto">
            <div className="w-full h-full">
              <h1 className="text-4xl font-bold uppercase mb-6">{t('Founder')}</h1>
              <h2 className="font-semibold mb-2">{t('Abdullah Mohammed Vellengara')}</h2>
              <div className="w-full">
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-5">{t('founderPara1')}
            </li>
            <li className="mb-5">{t('founderPara2')}
            </li>
            <li className="">{t('founderPara3')}
            </li>
          </ul>

          </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 gap-10 border-b-2  max-w-[1315px] sm:py-20 p-3 sm:px-28">
          <div className="w-full flex flex-col items-center justify-center mx-auto">
            <div className="w-full h-full">
              <h1 className=" text-4xl   font-bold uppercase mb-6">{t('Managing Director')}</h1>
              <h2 className="font-semibold mb-2">{t('Fahad Ibnu Abdullah')}</h2>
              <div className="w-full">
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-5">{t('mdPara1')}
            </li>
            <li className="">{t('mdPara2')}
            </li>
          </ul>

          </div>

            </div>
          </div>

          <div className="w-full">
            <img src={mdImage} className="rounded-xl" alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 gap-10 border-b-2  max-w-[1315px] p-3 sm:py-20 sm:px-28">
          <div className="w-full">
            <img src={ceoImage} className="rounded-xl" alt="" />
          </div>

          <div className="w-full flex flex-col items-center justify-center mx-auto">
            <div></div>
            <div className="w-full h-full ">
              <h1 className="text-4xl  font-bold uppercase mb-6">{t('CEO')}</h1>
              <h2 className="font-semibold mb-2">{t('Mohammed Kunhi')}</h2>

              <div className="w-full">
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-5">{t('ceoPara1')}
            </li>
            <li className="">{t('ceoPara2')}
            </li>
          </ul>

          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
