import React from "react";
import laboratoryImg from "../assets/HibaDepartments/laboratory.png";
import xrayImg from "../assets/HibaDepartments/xray.png";
import ultrasoundImg from "../assets/HibaDepartments/ultrasound.png";
import pharmacyImg from "../assets/HibaDepartments/pharmacy.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const services = [
  {
    title: "Laboratory",
    icon: laboratoryImg,
    link: "laboratory",
    description: "serviceDescription1"
  },
  {
    title: "X Ray",
    icon: xrayImg,
    link: "xray",
    description: "serviceDescription2"
  },
  {
    title: "Ultrasound",
    icon: ultrasoundImg,
    link: "ultrasound",
    description: "serviceDescription3"
  },
  {
    title: "Pharmacy",
    icon: pharmacyImg,
    link: "pharmacy",
    description: "serviceDescription4"
  },
];

const Services = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();


  return (
    <section className="text-center py-20 flex justify-center items-center">
      <div className="max-w-[1150px]">

      <h1 className="text-2xl md:text-3xl font-semibold mb-4 uppercase opacity-90">
        {t('Services')}
      </h1>
      <p className="opacity-70 px-8 mb-12">
        {t('serviceDescription')}
      </p>
      <div className="flex flex-wrap justify-center gap-1 ">
        {services.map((service, index) => (
          <div
            key={index}
            className=" rounded-lg p-2 transform transition-transform hover:scale-105"
          >
            <img
              className="mx-auto mb-4 h-32"
              src={service.icon}
              alt={`${service.title} Icon`}
            />

            <h2 className="font-semibold mb-2 uppercase opacity-85">
              {t(service.title)}
            </h2>
            <p
              className="text-gray-600 mb-5 opacity-80 text-sm max-w-md md:max-w-[265px]"
              style={{ lineHeight: "25px" }}
            >
              {t(service.description)}...
            </p>
            <button
              className="bg-[#1e478e] text-white w-32 hover:bg-white hover:text-[#1e478e] text-xs uppercase px-6 py-4 border-2 border-[#1e478e] rounded shadow-lg transition duration-700 ease-in-out overflow-hidden"
              onClick={() => navigate(service.link)}
            >
              {t('readMoreButton')}
            </button>
          </div>
        ))}
      </div>
      </div>

    </section>
  );
};

export default Services;
