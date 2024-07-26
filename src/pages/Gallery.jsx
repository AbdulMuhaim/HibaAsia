import img from "../assets/physician-holding-otoscope-ear-consultation-patient-checkup-visit-woman-doctor-using-otology-instrument-examine-infection-give-medical-advice-senior-man.jpg";
import headerBgImage from "../assets/woman-patient-medical-office-doctor-medical-mask-lor-checks-woman-ears.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Gallery() {
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
        <h1 className="text-5xl p-5 text-white uppercase">
        {t('Gallery')}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t('Home')}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">{t('Gallery')}</p>
          </div>
        </div>
      </div>

<div className="min-h-80 flex justify-center items-center">
<h1 className="text-2xl">progressing...</h1>
</div>

    </div>
  );
}

export default Gallery;
