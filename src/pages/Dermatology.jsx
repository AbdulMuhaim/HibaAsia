import img from "../assets/cute-woman-lying-procedure-rejuvenation-skin.jpg";
import headerBgImage from "../assets/girl-receiving-facial-treatment-beauty-salon.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrRashaMohamed from "../assets/HibaDoctors/11. Dr. Rasha Mohamed.jpg";
import DrAbdullahBayazeed from "../assets/HibaDoctors/22. Dr. Abdullah Bayazeed.jpg";
import DoctorCard from "../Components/DoctorCard";
import { useTranslation } from "react-i18next";



function Dermatology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const { t } = useTranslation();

  const doctors = [
    { name: "Hana Aimora", image: DrRashaMohamed, department: "Dermatology" },
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
            {t('Dermatology')}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t('Home')}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">{t('Dermatology')}</p>
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
          <h1 className=" text-4xl font-bold mb-6 uppercase">
          {t('Dermatology')}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
          {t('dermatologyPara1')}
          </p>
          <p className="president-message max-w-4xl">
          {t('dermatologyPara2')}
          </p>
          <div className="w-full">
          <h2 className="text-2xl font-bold  my-7">
          {t('servicesInclude')}:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">{t('dermatologyService1')}
            </li>
            <li className="mb-2">{t('dermatologyService1')}</li>
            <li className="mb-2">{t('dermatologyService2')}</li>
            <li className="mb-2">{t('dermatologyService3')}</li>
            <li className="mb-2">{t('dermatologyService4')}</li>
            <li className="mb-2">{t('dermatologyService5')}</li>
          </ul>
          </div>

        </div>
      </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-3 py-14 px-3 max-w-[1315px]">
          <h1 className="text-3xl font-bold text-center">
            {t('Meet Our Expert Dermatologists')}
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

export default Dermatology;
