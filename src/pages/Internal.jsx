import img from "../assets/side-view-man-experiencing-pain.jpg";
import headerBgImage from "../assets/three-cropped-doctors-analyzing-chest-x-ray-digital-pad.jpg";
import { useNavigate } from "react-router-dom";
import DrHussam from "../assets/HibaDoctors/04. Dr. Hussam.jpg";
import { useEffect } from "react";
import DoctorCard from "../Components/DoctorCard";
import { useTranslation } from "react-i18next";

function Internal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const { t } = useTranslation();

  const doctors = [
    { name: "Hussam Alagha", image: DrHussam, department: "Internist" },

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
          <h1 className="text-5xl text-center p-5 text-white uppercase">
            {t('Internal Medicine')}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t('Home')}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">{t('Internal Medicine')}</p>
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
          <h1 className="text-4xl  font-bold mb-6 uppercase">
          {t('Internal Medicine')}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
          {t('internalPara1')}
          </p>

        <div className="w-full ">
          <h2 className="text-2xl font-bold my-7">
          {t('servicesInclude')}:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">{t('internalService1')}</li>
            <li className="mb-2">
            {t('internalService2')}
            </li>
            <li className="mb-2">{t('internalService3')}</li>
            <li className="mb-2">{t('internalService4')}</li>
            <li className="mb-2">{t('internalService5')}</li>
            <li className="mb-2">{t('internalService6')}</li>
            <li className="mb-2">{t('internalService7')}</li>
            <li className="mb-2">{t('internalService8')}</li>
            <li className="mb-2">{t('internalService9')}</li>
            <li className="mb-2">{t('internalService10')}</li>
            <li className="mb-2">{t('internalService11')}</li>
          </ul>
          </div>


        </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-3 py-14 px-3 max-w-[1315px]">
          <h1 className="text-3xl font-bold text-center">
          {t('Meet Our Expert Internists')}
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

export default Internal;
