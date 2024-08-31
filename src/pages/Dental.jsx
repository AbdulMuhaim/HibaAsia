import img from "../assets/smiling-female-patient-sitting-chair-showing-thumb-up-dental-clinic.jpg";
import headerBgImage from "../assets/dentist-examining-patient-s-teeth.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrAbdulAzeezalZahrani from "../assets/HibaDoctors/23. Dr. Abdul Azeez al Zahrani.jpg";
import DrShahadBinMahfouz from "../assets/HibaDoctors/24. Dr. Shahad Bin Mahfouz.jpg";
import DrNoufQasem from "../assets/HibaDoctors/25. Dr. Nouf Qasem.jpg";
import DrJensonJohn from "../assets/HibaDoctors/26. Dr. Jenson John.jpg";
import DrLintuMol from "../assets/HibaDoctors/27. Dr. Lintu Mol.jpg";
import DrMaryamAhmed from "../assets/HibaDoctors/28. Dr. Maryam Ahmed.jpg";
import DrElhamyFawzyMohamedAbed from "../assets/HibaDoctors/30. Dr. Elhamy Fawzy Mohamed Abed.jpg";

import DoctorCard from "../Components/DoctorCard";
import { useTranslation } from "react-i18next";

function Dental() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const { t } = useTranslation();

  const doctors = [
    {
      name: "Elhamy Fawzy Mohamed Abed",
      image: DrElhamyFawzyMohamedAbed,
      department: "Dentist",
    },
    {
      name: "Abdul Aziz AlZahrani",
      image: DrAbdulAzeezalZahrani,
      department: "Dentist",
    },
    {
      name: "Shahad Bin Mehfouz",
      image: DrShahadBinMahfouz,
      department: "Dentist",
    },
    { name: "Nouf Qasem Mohammed", image: DrNoufQasem, department: "Dentist" },
    { name: "Jenson John", image: DrJensonJohn, department: "Dentist" },
    { name: "Lintu Mol", image: DrLintuMol, department: "Dentist" },
    { name: "Maryam Ahmed", image: DrMaryamAhmed, department: "Dentist" },
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
          <h1 className="text-5xl p-5 text-white uppercase">{t("Dental")}</h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer text-lg" onClick={() => navigate("/")}>
              {t("Home")}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer text-lg">{t("Dental")}</p>
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
                {t("Dental")}
              </h1>
            </div>

            <p className="president-message max-w-4xl">{t("dentalPara1")}</p>
            <p className="president-message max-w-4xl">{t("dentalPara2")}</p>
            <div className="w-full">
              <h2 className="text-2xl font-bold my-7 ">
                {t("servicesInclude")}:
              </h2>
              <ul className="list-disc list-inside president-message max-w-4xl ">
                <li className="mb-2">{t("dentalService1")}</li>
                <li className="mb-2">{t("dentalService2")}</li>
                <li className="mb-2">{t("dentalService3")}</li>
                <li className="mb-2">{t("dentalService4")}</li>
                <li className="mb-2">{t("dentalService5")}</li>
                <li className="mb-2">{t("dentalService6")}</li>
              </ul>
              <h2 className="text-2xl font-bold my-7 ">
                {t("Specialized Care")}:
              </h2>
              <ul className="list-disc list-inside president-message max-w-4xl">
                <li className="mb-2">{t("dentalCare1")}</li>
                <li className="mb-2">{t("dentalCare2")}</li>
                <li className="mb-2">{t("dentalCare3")}</li>
                <li className="mb-2">{t("dentalCare4")}</li>
                <li className="mb-2">{t("dentalCare5")}</li>
                <li className="mb-2">{t("dentalCare6")}</li>
                <li className="mb-2">{t("dentalCare7")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-3 py-14 px-3 max-w-[1315px]">
          <h1 className="text-3xl font-bold text-center">
            {t("Meet Our Expert Dentists")}
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

export default Dental;
