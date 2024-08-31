import img from "../assets/surgical-procedure-made-by-doctor-special-equipment.jpg";
import headerBgImage from "../assets/nurse-hand-taking-surgical-instrument-group-surgeons-background-operating-patient-surgical-theatre-steel-medical-instruments-ready-be-used-surgery-emergency-concept.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrMajedMouris from "../assets/HibaDoctors/07. Dr. Majed Mouris.jpg";
import DoctorCard from "../Components/DoctorCard";
import { useTranslation } from "react-i18next";

function Surgery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const { t } = useTranslation();

  const doctors = [
    { name: "Majed Mouris", image: DrMajedMouris, department: "Surgeon" },
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
          <h1 className="text-5xl p-5  text-white uppercase">
            {t('General Surgery')}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t('Home')}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">{t('General Surgery')}</p>
          </div>
        </div>
      </div>


      <div className="flex justify-center">
      <div className="grid lg:grid-cols-2 gap-10 max-w-[1315px] p-3 sm:py-20 border-b-2 sm:px-28">
        <div className="w-full">
          <img src="" className="rounded-xl object-cover" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto ">
          <div className="w-full">
          <h1 className=" text-4xl font-bold mb-6 uppercase">
          {t('General Surgery')}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
          {t('surgeryPara1')}
          </p>
          <p className="president-message max-w-4xl">
          {t('surgeryPara2')}
          </p>
          <div className="w-full">

          <h2 className="text-2xl font-bold my-7">
            {t('servicesInclude')} :
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">{t('surgeryService1')}</li>
            <li className="mb-2">{t('surgeryService2')}</li>
            <li className="mb-2">{t('surgeryService3')}</li>
            <li className="mb-2">{t('surgeryService4')}</li>
            <li className="mb-2">{t('surgeryService5')}</li>
            <li className="mb-2">{t('surgeryService6')}</li>
            <li className="mb-2">{t('surgeryService7')}</li>
            <li className="mb-2">{t('surgeryService8')}</li>
            <li className="mb-2">{t('surgeryService9')}</li>

          </ul>
          </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-3 py-14 px-3 max-w-[1315px]">
          <h1 className="text-3xl font-bold text-center">
           {t('Meet Our Expert Surgeons')}
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

export default Surgery;
