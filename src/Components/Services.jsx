import React from "react";
import cardio from "../assets/cardiology.png";
import dermatology from "../assets/dermatology.png";
import dental from "../assets/dental.png";
import urology from "../assets/urology.png";

const services = [
  {
    icon: cardio,
    title: "Cardiology",
    description:
      "Our Cardiology Department renders an extensive range of services for inpatients and outpatients. We have the right medical exper...",
  },
  {
    icon: urology,
    title: "Urology",
    description:
      "Welcome to the Division of Urology in Hiba Asia, committed to excellence in patient care and basic research. In the various urol...",
  },
  {
    icon: dermatology,
    title: "Dermatology",
    description:
      "Hiba Asia’s Dermatology Department provides expert cosmetic care to patients. Abeer’s dermatologists in Saudi Arabia are specialized...",
  },
  {
    icon: dental,
    title: "Division of Dentistry",
    description:
      "Hiba Asia’s board-certified dentists recognize the continually changing healthcare landscape and are capable of delivering time...",
  },
];

const Services = () => {
  return (
    <section className="text-center py-20">
      <h1 className="text-3xl font-semibold mb-4 uppercase opacity-90">
        Services
      </h1>
      <p className="opacity-85 mb-12">
        We offer multi-speciality healthcare services under one roof
      </p>
      <div className="flex flex-wrap justify-center gap-1">
        {services.map((service, index) => (
          <div
            key={index}
            className=" rounded-lg p-2 w-72 transform transition-transform hover:scale-105"
          >
            <img
              className="mx-auto mb-4 w-28 h-28"
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
            <button className="bg-sky-800 text-white w-32 hover:bg-white hover:text-sky-800 text-xs uppercase px-6 py-4 border-2 border-sky-800 rounded shadow-lg transition duration-700 ease-in-out overflow-hidden">
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
