import React from "react";
import Header from "../Components/Header";
import doctorsHeaderImage from "../assets/group-of-doctors-standing-in-hospital-on-medical-c-2023-11-27-05-18-43-utc.jpg";
import DoctorsList from "../Components/DoctorsList";
import SocialMedias from "../Components/SocialMedias";
import Whatsapp from "../Components/Whatsapp";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Doctors() {
  const headerBgImage = `url(${doctorsHeaderImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const navigate = useNavigate()

  return (
    <div>
      <Header />
      <SocialMedias />
      <Whatsapp />

      <div
        className="flex items-center justify-center h-96"
        style={{
          backgroundImage: headerBgImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >

        <div className="flex flex-col">
        <h1 className="text-5xl p-5 backdrop-filter font-Tahoma backdrop-blur-md textu text-white">
          OUR DOCTORS
        </h1>
        <div className="flex items-center space-x-4 text-white justify-center">
        <p className="cursor-pointer" onClick={()=>navigate('/')}>Home </p>
        <p className="text-xl">/</p>
        <p className="cursor-pointer">Doctors</p>
        </div>
        </div>

      </div>
      <DoctorsList />
    </div>
  );
}

export default Doctors;
