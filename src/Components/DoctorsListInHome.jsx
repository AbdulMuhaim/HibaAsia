import React from 'react'
import DrAswaq from "../assets/HibaDoctors/01. Dr. Aswaq.jpg";
import DrAzza from "../assets/HibaDoctors/02. Dr. Azza.jpg";
import DrSherifHelmy from "../assets/HibaDoctors/09. Dr. Sherif Helmy.jpg";
import DrMohammedAnwar from "../assets/HibaDoctors/08. Dr. Mohammed Anwar.jpg";
import DrSamad from "../assets/HibaDoctors/06. Dr. Samad.jpg";
import DrMajedMouris from "../assets/HibaDoctors/07. Dr. Majed Mouris.jpg";
import DrRashaMohamed from "../assets/HibaDoctors/11. Dr. Rasha Mohamed.jpg";
import { useTranslation } from 'react-i18next';
import headerImage from "../assets/WhatsApp_Image_2024-05-14_at_23.42.18-removebg-preview.png";
import { useNavigate } from 'react-router-dom';


function DoctorsListInHome() {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const doctors = [
        {
          name: "Aswaq Ahmed",
          image: DrAswaq,
          department: "Obstetric & Gynecology",
        },
        {
          name: "Azza Hussein Ahmed",
          image: DrAzza,
          department: "Obstetric & Gynecology",
        },
        {
          name: "Mohamad Sherif Helmy",
          image: DrSherifHelmy,
          department: "Cardiology",
        },
        {
          name: "Muhammed Anwar",
          image: DrMohammedAnwar,
          department: "Pediatrics",
        },
        {
          name: "Majed Mouris",
          image: DrMajedMouris,
          department: "General Surgery",
        },
        { name: "Samad Moideen", image: DrSamad, department: "Orthopedic" },
        { name: "Rasha Mohamed", image: DrRashaMohamed, department: "Dermatology" },
      ];


  return (
    <div className="mt-3 py-14 px-3 w-full">
    <h1 className="text-3xl font-semibold mb-4 text-center uppercase opacity-90">
      Our Doctors
    </h1>
    <div className="flex  justify-center items-center">
    <div className="grid w-[1200px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-10">
      {doctors.map((doctor, index) => (
        <div key={index} className="perspective-1000">
          <div className="relative h-[20rem] text-center transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
            {/* card front side */}
            <div className="absolute w-full h-full shadow-xl rounded-lg py-3 border bg-slate-50 backface-hidden  flex flex-col items-center justify-center">
              <div className="flex justify-center items-center">
                <img
                  src={doctor.image}
                  alt=""
                  className="w-full h-full max-w-[11rem] object-contain rounded-3xl"
                />
              </div>
              <div className="mt-2">
                <h2 className="font-semibold mt-2">
                  {t("Dr")} {t(doctor.name)}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  {t(doctor.department)}
                </p>
              </div>
            </div>

            {/* card backside */}
            <div className="absolute w-full h-full shadow-inner bg-gradient-to-br from-sky-200 to-white border rounded-lg p-5 backface-hidden transform rotate-y-180 flex flex-col items-center justify-center text-white">
              <div className="flex items-center justify-center">
                <div className="w-full h-[90%] flex justify-center items-center">
                  <img
                    src={doctor.image}
                    alt=""
                    className="w-full h-full max-w-[15rem] object-contain rounded-3xl mr-2"
                  />
                </div>
                <div className="mt-2">
                  <h2 className="font-semibold mt-2 text-black">
                    {t("Dr")} {t(doctor.name)}{" "}
                  </h2>
                  <p className="text-gray-600 mt-2 text-sm">
                    {t(doctor.department)}
                  </p>
                  <button className="bg-[#1e478e] text-white text-sm rounded-full px-3 py-2 mt-4">
                    {t("Connect")}
                  </button>
                  <div className="text-black flex justify-center items-center mr-1 mt-5 w-full">
                    <img
                      src={headerImage}
                      alt=""
                      className="max-w-[6rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="h-[20rem] flex items-center justify-center bg-slate-50 rounded-lg">
        <button
          onClick={() => navigate("/doctors")}
          className="rounded-full bg-white px-5 font-semibold transition-transform hover:scale-105 py-2 border-4 border-[#1e478e]"
        >
          {t("View All")}
        </button>
      </div>
    </div>
    </div>
  </div>   )
}

export default DoctorsListInHome