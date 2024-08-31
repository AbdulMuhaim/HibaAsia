import img from "../assets/stethoscope-pills-with-medicine-blister-white-background.jpg";
import headerBgImage from "../assets/medium-shot-doctor-talking-patient.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrMurtaza from "../assets/HibaDoctors/13. Dr. Murtaza.jpg";
import DrAbdirizak from "../assets/HibaDoctors/20. Dr. Abdirizak.jpg";
import DrJavedIqbal from "../assets/HibaDoctors/14. Dr. Javed Iqbal.jpg";
import DrBahaIbrahim from "../assets/HibaDoctors/15. Dr. Baha Ibrahim.jpg";
import DrFathimathuZuhra from "../assets/HibaDoctors/16. Dr. Fathimathu Zuhra.jpg";
import DrAminaKhan from "../assets/HibaDoctors/17. Dr. Amina Khan.jpg";
import DrKhaleel from "../assets/HibaDoctors/18. Dr. Khaleel.jpg";
import DrIramQadirReshi from "../assets/HibaDoctors/19. Dr. Iram Qadir Reshi.jpg";
import DrKatherIbrahim from "../assets/HibaDoctors/21. dr. Kather Ibrahim.jpg";
import DoctorCard from "../Components/DoctorCard";
import { useTranslation } from "react-i18next";

function General() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const { t } = useTranslation();

  const doctors = [
    {
      name: "Murtaza Bakhsh",
      image: DrMurtaza,
      department: "General Physician",
    },
    {
      name: "Abdirizak",
      image: DrAbdirizak,
      department: "General Physician",
    },
    {
      name: "Javed Iqbal",
      image: DrJavedIqbal,
      department: "General Physician",
    },
    {
      name: "Baha Ibrahim",
      image: DrBahaIbrahim,
      department: "General Physician",
    },
    {
      name: "Fathimathu Zuhra",
      image: DrFathimathuZuhra,
      department: "General Physician",
    },
    {
      name: "Amina Khan Shafi",
      image: DrAminaKhan,
      department: "General Physician",
    },
    { name: "Khaleel", image: DrKhaleel, department: "General Physician" },
    {
      name: "Iram Qadir Reshi",
      image: DrIramQadirReshi,
      department: "General Physician",
    },
    {
      name: "Kather Ibrahim",
      image: DrKatherIbrahim,
      department: "General Physician",
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
          <h1 className="text-5xl p-5 text-white uppercase">
            {t('General Medicine')}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t('Home')}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer ">{t('General Medicine')}</p>
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
            <h1 className="text-4xl font-bold  mb-6 uppercase">
            {t('General Medicine')}
            </h1>
          </div>

          <p className="president-message max-w-4xl">
          {t('generalPara1')}:
          </p>
          <p className="president-message max-w-4xl">
          {t('generalPara2')}:
          </p>
          <div className="w-full">
            <h2 className="text-2xl font-bold my-7 ">{t('servicesInclude')}:</h2>
            <ul className="list-disc list-inside president-message max-w-4xl">
              <li className="mb-2">{t('generalService1')}</li>
              <li className="mb-2">{t('generalService2')}</li>
              <li className="mb-2">{t('generalService3')}</li>
              <li className="mb-2">{t('generalService4')}</li>
              <li className="mb-2">{t('generalService5')}</li>
              <li className="mb-2">{t('generalService6')}</li>
              <li className="mb-2">{t('generalService7')}</li>
              <li className="mb-2">{t('generalService8')}</li>
            </ul>
          </div>
        </div>
      </div>
      </div>

      <div className="flex justify-center">
      <div className="mt-3 py-14 px-3 max-w-[1315px]">
        <h1 className="text-3xl font-bold text-center">
          {t('Meet Our Expert General Medicine Specialists')}
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

export default General;
