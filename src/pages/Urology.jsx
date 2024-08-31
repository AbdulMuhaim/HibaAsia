import img from "../assets/front-view-woman-having-ache.jpg";
import headerBgImage from "../assets/female-doctor-holding-human-kidney-model-her-hands-closeup-view.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrRamadan from "../assets/HibaDoctors/03. Dr. Ramadan.jpg";
import DoctorCard from "../Components/DoctorCard";
import { useTranslation } from "react-i18next";

function Urology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const { t } = useTranslation();

  const doctors = [
    { name: "Mohammed Ramadan Ahmad", image: DrRamadan, department: "Urology" },
];

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
        {t('Urology')}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer " onClick={() => navigate("/")}>
              {t('Home')}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer ">{t('Urology')}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
      <div className="grid lg:grid-cols-2 max-w-[1315px] gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto ">
          <div className="w-full">
          <h1 className=" text-4xl  font-bold  mb-6 uppercase">
            {t('Urology')}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
          {t('urologyPara1')}
          </p>
          <p className="president-message max-w-4xl">
          {t('urologyPara2')}
          </p>
        </div>
      </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-3 py-14 px-3 max-w-[1315px]">
          <h1 className="text-3xl font-bold text-center">
            {t('Meet Our Expert Urologists')}
          </h1>
          <div className="p-16 flex justify-center items-center">
            <div className="grid p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {doctors.map((doctor, index) => (
                <DoctorCard key={index} doctor={doctor} />
              ))}
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Urology;
