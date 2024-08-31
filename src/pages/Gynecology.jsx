import img from "../assets/physician-doing-medical-consultation-with-pregnant-woman-wearing-face-masks-woman-expecting-child-receiving-medical-advice-from-doctor-office-desk-covid-19-pandemic.jpg";
import headerBgImage from "../assets/gynecologist-offering-couple-ultrasound-pictures.jpg";
import { useNavigate } from "react-router-dom";
import DrAswaq from "../assets/HibaDoctors/01. Dr. Aswaq.jpg";
import DrAzza from "../assets/HibaDoctors/02. Dr. Azza.jpg";
import { useEffect } from "react";
import DoctorCard from "../Components/DoctorCard";
import { useTranslation } from "react-i18next";

function Gynecology() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const { t } = useTranslation();

  const doctors = [
    {
      name: "Aswaq Ahmed",
      image: DrAswaq,
      department: "Obstetric & Gynecology",
    },
    {
      name: "Azza Hussein Ahmed",
      image: DrAzza,
      department: "Obstetric & Gynecology",
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
        <h1 className="text-5xl p-5 text-center text-white uppercase">
        {t('Obstetric & Gynecology')}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t('Home')}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">{t('Obstetric & Gynecology')}</p>
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
          <h1 className="text-4xl  font-bold  mb-6 uppercase">
          {t('Obstetric & Gynecology')}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
          {t('gynecologyPara1')}
          </p>
          <p className="president-message max-w-4xl">
          {t('gynecologyPara2')}
          </p>
          <div className="w-full">

          <h2 className="text-2xl font-bold my-7">
          {t('servicesInclude')}:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">{t('gynecologyService1')}</li>
            <li className="mb-2">{t('gynecologyService2')}</li>
            <li className="mb-2">{t('gynecologyService3')}</li>
            <li className="mb-2">{t('gynecologyService4')}</li>
            <li className="mb-2">{t('gynecologyService5')}</li>
            <li className="mb-2">{t('gynecologyService6')}</li>
            <li className="mb-2">{t('gynecologyService7')}</li>
            <li className="mb-2">{t('gynecologyService8')}</li>
            <li className="mb-2">{t('gynecologyService9')}</li>
            <li className="mb-2">{t('gynecologyService10')}</li>
            <li className="mb-2">{t('gynecologyService11')}</li>
            <li className="mb-2">{t('gynecologyService12')}</li>
            <li className="mb-2">{t('gynecologyService13')}</li>
            <li className="mb-2">{t('gynecologyService14')}</li>
            <li className="mb-2">{t('gynecologyService15')}</li>
            <li className="mb-2">{t('gynecologyService16')}</li>
            <li className="mb-2">{t('gynecologyService17')}</li>
            <li className="mb-2">{t('gynecologyService18')}</li>
            <li className="mb-2">{t('gynecologyService19')}</li>
            <li className="mb-2">{t('gynecologyService20')}</li>
            <li className="mb-2">{t('gynecologyService21')}</li>
            <li className="mb-2">{t('gynecologyService22')}</li>
          </ul>
          </div>
        </div>
      </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-3 py-14 px-3 max-w-[1315px]">
          <h1 className="text-3xl font-bold text-center">
           {t('Meet Our Expert Obstetricians and Gynecologists')}
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

export default Gynecology;
