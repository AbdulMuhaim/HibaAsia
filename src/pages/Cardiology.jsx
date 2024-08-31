import img from "../assets/person-holding-anatomic-heart-model-educational-purpose.jpg";
import headerBgImage from "../assets/doctor-examination-young-man-with-stethoscope-hospital.jpg";
import { useNavigate } from "react-router-dom";
import DrSherifHelmy from "../assets/HibaDoctors/09. Dr. Sherif Helmy.jpg";
import { useEffect } from "react";
import DoctorCard from "../Components/DoctorCard";
import { useTranslation } from "react-i18next";

function Cardiology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const { t } = useTranslation();

  const doctors = [
    {
      name: "Mohamad Sherif Helmy",
      image: DrSherifHelmy,
      department: "Cardiology",
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
            {t("Cardiology")}
          </h1>
          <div className="flex items-center space-x-4 2xl:text-lg text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t("Home")}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">{t("Cardiology")}</p>
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
                {t("Cardiology")}
              </h1>
            </div>

            <p className="president-message max-w-4xl">
              {t("cardiologyPara1")}
            </p>
            <div className="w-full">
              <h2 className="text-2xl font-bold  my-7">
                {t("servicesInclude")}:
              </h2>
              <ul className="list-disc list-inside president-message max-w-4xl">
                <li className="mb-2">{t("cardioService1")}</li>
                <li className="mb-2">{t("cardioService2")}</li>
                <li className="mb-2">{t("cardioService3")}</li>
                <li className="mb-2">{t("cardioService4")}</li>
                <li className="mb-2">{t("cardioService5")}</li>
                <li className="mb-2">{t("cardioService6")}</li>
                <li className="mb-2">{t("cardioService7")}</li>
                <li className="mb-2">{t("cardioService8")}</li>
                <li className="mb-2">{t("cardioService9")}</li>
                <li className="mb-2">{t("cardioService10")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-3 py-14 px-3 max-w-[1315px]">
          <h1 className="text-3xl font-bold text-center">
            {t("Meet Our Expert Cardiologists")}
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

export default Cardiology;
