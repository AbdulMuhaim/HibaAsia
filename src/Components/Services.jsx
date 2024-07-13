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
    description: "Our Laboratory Department is committed to providing accurate and timely diagnostic services. Our..."
  },
  {
    title: "X Ray",
    icon: xrayImg,
    link: "xray",
    description: "At Hiba Asia, we prioritize your health with state-of-the-art X-ray imaging services. Our team across..."
  },
  {
    title: "Ultrasound",
    icon: ultrasoundImg,
    link: "ultrasound",
    description: "Dedicated to offering high-quality imaging services, the Ultrasound Department at Hiba Asia assists..."
  },
  {
    title: "Pharmacy",
    icon: pharmacyImg,
    link: "pharmacy",
    description: "Our Pharmacy Department goes beyond dispensing medications. We are dedicated to providing..."
  },
];

const Services = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();


  return (
    <section className="text-center py-20">
      <h1 className="text-3xl font-semibold mb-4 uppercase opacity-90">
        {t('Services')}
      </h1>
      <p className="opacity-85 mb-12">
        {t('serviceDescription')}
      </p>
      <div className="flex flex-wrap justify-center gap-1">
        {services.map((service, index) => (
          <div
            key={index}
            className=" rounded-lg p-2 w-72 transform transition-transform hover:scale-105"
          >
            <img
              className="mx-auto mb-4 h-32"
              src={service.icon}
              alt={`${service.title} Icon`}
            />

            <h2 className="font-semibold mb-2 uppercase opacity-85">
              {service.title}
            </h2>
            <p
              className="text-gray-600 mb-5 opacity-80 text-sm"
              style={{ lineHeight: "25px" }}
            >
              {service.description}
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
    </section>
  );
};

export default Services;
