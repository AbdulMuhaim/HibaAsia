import img from "../assets/physician-holding-otoscope-ear-consultation-patient-checkup-visit-woman-doctor-using-otology-instrument-examine-infection-give-medical-advice-senior-man.jpg";
import headerBgImage from "../assets/woman-patient-medical-office-doctor-medical-mask-lor-checks-woman-ears.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrShahin from "../assets/HibaDoctors/05. Dr. Shahin.jpg";
import DoctorCard from "../Components/DoctorCard";
import { useTranslation } from "react-i18next";

function Ent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const { t } = useTranslation();

  const doctors = [
    { name: "Mahmoud Shahin", image: DrShahin, department: "ENT Specialist" },
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
        {t('ENT')}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t('Home')}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">{t('ENT')}</p>
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
            <h1 className=" text-4xl font-bold  mb-6 uppercase">{t('ENT')} </h1>
          </div>

          <p className="president-message max-w-4xl">
          {t('entPara1')}
          </p>
          <div className="w-full">
          <h2 className="text-2xl font-bold  my-7">
          {t('servicesInclude')}:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">{t('entService1')}</li>
            <li className="mb-2">{t('entService2')}</li>
            <li className="mb-2">{t('entService3')}</li>
            <li className="mb-2">{t('entService4')}</li>
            <li className="mb-2">{t('entService5')}</li>
            <li className="mb-2">{t('entService6')}</li>
            <li className="mb-2">{t('entService7')}</li>
          </ul>
          </div>

        </div>
      </div>
      </div>

      <div className="flex justify-center ">
        <div className="mt-3 py-14 px-3 max-w-[1315px]">
          <h1 className="text-3xl font-bold text-center ">
            {t("Meet Our Expert ENT Specialists")}
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

export default Ent;
