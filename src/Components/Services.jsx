import React from "react";
import cardio from "../assets/HibaDepartments/cardiology.png";
import gynecology from "../assets/HibaDepartments/obstetric.png";
import dental from "../assets/HibaDepartments/dental.png";
import laboratory from "../assets/HibaDepartments/laboratory.png";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: cardio,
    title: "Cardiology",
    description:
      "Our Cardiology Department renders an extensive range of services for inpatients and outpatients. We have the right medical exper...",
    link: "cardiology",
  },
  {
    icon: gynecology,
    title: "gynecology",
    description:
      "Welcome to the Division of Urology in Hiba Asia, committed to excellence in patient care and basic research. In the various urol...",
    link: "gynecology",
  },
  {
    icon: dental,
    title: "dental",
    description:
      "Hiba Asia’s Dermatology Department provides expert cosmetic care to patients. Abeer’s dermatologists in Saudi Arabia are specialized...",
    link: "dental",
  },
  {
    icon: laboratory,
    title: "laboratory",
    description:
      "Hiba Asia’s board-certified dentists recognize the continually changing healthcare landscape and are capable of delivering time...",
    link: "laboratory",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="text-center py-20">
      <h1 className="text-3xl font-semibold mb-4 uppercase opacity-90">
        Services
      </h1>
      <p className="opacity-85 mb-12">
        Enjoy the benefits of integrated multi-specialty healthcare with us{" "}
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
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
