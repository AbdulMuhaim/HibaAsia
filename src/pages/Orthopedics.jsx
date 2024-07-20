import img from "../assets/woman-doing-leg-exercises-hospital.jpg";
import headerBgImage from "../assets/doctor-helping-patient-with-fractured-leg.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrSamad from "../assets/HibaDoctors/06. Dr. Samad.jpg";
import DoctorCard from "../Components/DoctorCard";
import { useTranslation } from "react-i18next";

function Orthopedics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const { t } = useTranslation();

  const doctors = [
    { name: "Samad Moideen", image: DrSamad, department: "Orthopedics" },
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
        {t('Orthopedics')}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t('Home')}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">{t('Orthopedics')} </p>
          </div>
        </div>
      </div>


      <div className="flex justify-center">
      <div className="grid lg:grid-cols-2 gap-10 max-w-[1315px] border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto">
          <div className="w-full">
          <h1 className=" text-4xl  font-bold  mb-6 uppercase">
          {t('Orthopedics')}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
          {t('orthoPara1')}
          </p>
          <p className="president-message max-w-4xl">
          {t('orthoPara2')}
          </p>
          <p className="president-message max-w-4xl">
          {t('orthoPara3')}
          </p>
        </div>
      </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-3 py-14 px-3 max-w-[1315px]">
          <h1 className="text-3xl font-bold text-center ">
            {t('Meet Our Expert Orthopedic Specialists')}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))}
          </div>
          </div>
      </div>
    </div>
  );
}

export default Orthopedics;
