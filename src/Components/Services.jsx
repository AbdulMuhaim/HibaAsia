import React from "react";
import cardio from "../assets/HibaDepartments/cardiology.png";
import gynecology from "../assets/HibaDepartments/obstetric.png";
import dental from "../assets/HibaDepartments/dental.png";
import laboratory from "../assets/HibaDepartments/laboratory.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const services = [
  {
    icon: cardio,
    title: "Cardiology",
    description:
      "Our Cardiology Department offers a comprehensive range of services for both inpatients and outpatients. With a dedicated team...",
    link: "cardiology",
  },
  {
    icon: gynecology,
    title: "gynecology",
    description:
      "A woman's health undergoes significant changes throughout her life, requiring expert care at various stages such as puberty,...",
    link: "gynecology",
  },
  {
    icon: dental,
    title: "dental",
    description:
      "At Hiba Asia Dental Clinic, we believe that with the right care, your teeth can last a lifetime. Our team in Riyadh and across Saudi...",
    link: "dental",
  },
  {
    icon: laboratory,
    title: "laboratory",
    description:
      "Our Laboratory Department is committed to providing accurate and timely diagnostic services. Our state-of-the-art laboratories, staffed...",
    link: "laboratory",
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
