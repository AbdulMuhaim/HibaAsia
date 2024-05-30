import React from "react";
import Header from "../Components/Header";
import doctorsHeaderImage from "../assets/group-of-doctors-standing-in-hospital-on-medical-c-2023-11-27-05-18-43-utc.jpg";
import DoctorsList from "../Components/DoctorsList";

function Doctors() {
  const headerBgImage = `url(${doctorsHeaderImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;

  return (
    <div>
      <Header />

      <div
        className="flex items-center justify-center h-96"
        style={{
          backgroundImage: headerBgImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <h1 className="text-5xl p-5 backdrop-filter font-Tahoma backdrop-blur-md text-white">
          OUR DOCTORS
        </h1>
      </div>
      <DoctorsList />
    </div>
  );
}

export default Doctors;
