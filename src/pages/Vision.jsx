import visionImage from "../assets/front-view-human-eye.jpg";
import missionImage from "../assets/3d-rendering-arrow-hitting-target (2).jpg";
import valuesImage from "../assets/colleagues-working-together-project.jpg";
import visionHeaderImage from "../assets/physician-consulting-his-patient-clinic.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Vision() {
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
            {t("MISSION & VISION")}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t("Home")}{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">{t("MISSION & VISION")}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 gap-10  max-w-[1315px] border-b-2 p-3 sm:py-20 sm:px-28">
          <div className="w-full">
            <img src={missionImage} className="rounded-xl" alt="" />
          </div>

          <div className="w-full flex flex-col items-center justify-center mx-auto">
            <div className="w-full h-full">
              <h1 className="text-4xl font-bold uppercase mb-6">{t('homeMissionTitle')}</h1>
              <p className="president-message">
              {t('missionText')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 gap-10 border-b-2  max-w-[1315px] sm:py-20 p-3 sm:px-28">
          <div className="w-full flex flex-col items-center justify-center mx-auto">
            <div className="w-full h-full">
              <h1 className=" text-4xl   font-bold uppercase mb-6">{t('homeVisionTitle')}</h1>
              <p className="president-message">
              {t('visionText')}
              </p>
            </div>
          </div>

          <div className="w-full">
            <img src={visionImage} className="rounded-xl" alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 gap-10 border-b-2  max-w-[1315px] p-3 sm:py-20 sm:px-28">
          <div className="w-full">
            <img src={valuesImage} className="rounded-xl" alt="" />
          </div>

          <div className="w-full flex flex-col items-center justify-center mx-auto">
            <div></div>
            <div className="w-full h-full ">
              <h1 className="text-4xl  font-bold uppercase mb-6">{t('homeValuesTitle')}</h1>

              <h2 className=" text-xl mb-3">{t('Compassion')}</h2>
              <p className="president-message mb-3">
              {t('CompassionText')}
              </p>

              <h2 className=" text-xl mb-3">{t('Patient-Centricity')}</h2>
              <p className=" president-message mb-3">
              {t('Patient-CentricityText')}
              </p>

              <h2 className=" text-xl mb-3">{t('Collaboration')}</h2>
              <p className=" president-message mb-3">
              {t('CollaborationText')}
              </p>

              <h2 className=" text-xl mb-3">Innovation</h2>
              <p className=" president-message mb-3">
              {t('InnovationText')}
              </p>

              <h2 className=" text-xl mb-3">{t('Integrity')}</h2>
              <p className=" president-message mb-3">
              {t('IntegrityText')}
              </p>

              <h2 className="text-xl mb-3">{t('Quality')}</h2>
              <p className=" president-message">
              {t('QualityText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
