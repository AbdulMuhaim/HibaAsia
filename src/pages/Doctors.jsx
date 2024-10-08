
import { useTranslation } from "react-i18next";
import doctorsHeaderImage from "../assets/group-of-doctors-standing-in-hospital-on-medical-c-2023-11-27-05-18-43-utc.jpg";
import DoctorsList from "../Components/DoctorsList";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Doctors() {
  const headerBgImage = `url(${doctorsHeaderImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const navigate = useNavigate()
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
        <h1 className="text-5xl p-5 text-white">
          {t('OUR DOCTORS')}
        </h1>
        
        <div className="flex items-center space-x-4 text-white justify-center">
        <p className="cursor-pointer " onClick={()=>navigate('/')}>{t('Home')}</p>
        <p className="text-xl">/</p>
        <p className="cursor-pointer ">{t('Doctors')}</p>
        </div>
        </div>

      </div>
      <DoctorsList />
    </div>
  );
}

export default Doctors;
