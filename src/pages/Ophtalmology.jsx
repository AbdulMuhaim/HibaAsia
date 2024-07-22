import img from "../assets/sad-girl-has-eye-problems-portrait-upset-gloomy-european-woman-ophthalmologist-office-testing-vision-while-sitting-wearing-phoropter-regretting-that-she-spoilt-sight-near-computer.jpg";
import headerBgImage from "../assets/mother-with-little-son-glasses-store.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrTaha from "../assets/HibaDoctors/10. Dr. Taha.jpg";
import DoctorCard from "../Components/DoctorCard";
import { useTranslation } from "react-i18next";

function Ophtalmology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const { t } = useTranslation();

  const doctors = [
    { name: "Taha Abouelenin", image: DrTaha, department: "Ophthalmology" },

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
        {t('Ophthalmology')}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t('Home')}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">{t('Ophthalmology')}</p>
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
          <h1 className="text-4xl font-bold mb-6 uppercase">
          {t('Ophthalmology')}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
          {t('ophtalmologyPara1')}
          </p>
          <p className="president-message max-w-4xl">
          {t('ophtalmologyPara2')}
          </p>
          <div className="w-full">

          <h2 className="text-2xl font-bold my-7">
          {t('servicesInclude')}:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">{t('ophtalmologyService1')}</li>
            <li className="mb-2">{t('ophtalmologyService2')}</li>
            <li className="mb-2">{t('ophtalmologyService3')}</li>
            <li className="mb-2">{t('ophtalmologyService4')}</li>
            <li className="mb-2">{t('ophtalmologyService5')}</li>
            <li className="mb-2">{t('ophtalmologyService6')}</li>
            <li className="mb-2">{t('ophtalmologyService7')}</li>
            <li className="mb-2">{t('ophtalmologyService8')}</li>
            <li className="mb-2">{t('ophtalmologyService9')}</li>
          </ul>
          </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-3 py-14 px-3 max-w-[1315px]">
          <h1 className="text-3xl font-bold text-center">
          {t('Meet Our Expert Ophthalmologist')}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor}/>
            ))}
          </div>
          </div>
      </div>
    </div>
  );
}

export default Ophtalmology;
