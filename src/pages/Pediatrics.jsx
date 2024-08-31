import img from "../assets/front-view-doctor-holding-baby.jpg";
import headerBgImage from "../assets/side-view-of-doctor-examining-cute-little-baby-boy-2023-11-27-05-27-26-utc.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrMohammedAnwar from "../assets/HibaDoctors/08. Dr. Mohammed Anwar.jpg";
import DoctorCard from "../Components/DoctorCard";
import { useTranslation } from "react-i18next";


function Pediatrics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const { t } = useTranslation();

  const doctors = [
    {
        name: "Muhammed Anwar",
        image: DrMohammedAnwar,
        department: "Pediatrics",
      },
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
          <h1 className="text-5xl p-5 backdrop-filter font-Tahoma text-white uppercase">
            {t('Pediatrics')}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t('Home')}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">{t('Pediatrics')}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
      <div className="grid lg:grid-cols-2 max-w-[1315px] gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto">
          <div className="w-full">
          <h1 className=" text-4xl font-bold  mb-6 uppercase">
          {t('Pediatrics')}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
          {t('pediatricPara1')}
          </p>
          <p className="president-message max-w-4xl">
          {t('pediatricPara2')}
          </p>
          <p className="president-message max-w-4xl">
          {t('pediatricPara3')}
          </p>
        </div>
      </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-3 py-14 px-3 max-w-[1315px]">
          <h1 className="text-3xl font-bold text-center">
            {t('Meet Our Expert Pediatricians')}
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

export default Pediatrics;
