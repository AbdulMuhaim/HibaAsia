import img from "../assets/surgical-procedure-made-by-doctor-special-equipment.jpg";
import headerBgImage from "../assets/nurse-hand-taking-surgical-instrument-group-surgeons-background-operating-patient-surgical-theatre-steel-medical-instruments-ready-be-used-surgery-emergency-concept.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrMajedMouris from "../assets/HibaDoctors/07. Dr. Majed Mouris.jpg";
import DoctorCard from "../Components/DoctorCard";

function Surgery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const doctors = [
    { name: "Majed Mouris", image: DrMajedMouris, department: "Surgeon" },
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
          <h1 className="text-5xl p-5  text-white uppercase">
            General Surgery{" "}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">General Surgery</p>
          </div>
        </div>
      </div>


      <div className="flex justify-center">
      <div className="grid lg:grid-cols-2 gap-10 max-w-[1315px] p-3 sm:py-20 border-b-2 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl object-cover" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto ">
          <div className="w-full">
          <h1 className=" text-4xl font-bold mb-6 uppercase">
            General Surgery{" "}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
            The General Surgery Department at Hiba Asia is committed to
            providing exceptional surgical care. Our team of highly skilled
            surgeons, supported by advanced technology and comprehensive care
            protocols, ensures that you receive the highest standard of
            treatment for a wide range of surgical conditions.
          </p>
          <p className="president-message max-w-4xl">
            At Hiba Asia, we understand the importance of precision and care in
            surgical procedures. The General Surgery Department is dedicated to
            providing you with the best possible outcomes through meticulous
            surgical practices and compassionate care. Trust Hiba Asia for all
            your surgical needs, where your health and recovery are our utmost
            priorities.
          </p>
          <div className="w-full">

          <h2 className="text-2xl font-bold my-7">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">Appendectomy</li>
            <li className="mb-2">Hernia Repair</li>
            <li className="mb-2">Gallbladder Surgery</li>
            <li className="mb-2">Thyroid Surgery</li>
            <li className="mb-2">Breast Surgery</li>
            <li className="mb-2">Colorectal Surgery</li>
            <li className="mb-2">Gastrointestinal Surgery</li>
            <li className="mb-2">Skin and Soft Tissue Surgery</li>
            <li className="mb-2">Emergency Surgery</li>
          </ul>
          </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-3 py-14 px-3 max-w-[1315px]">
          <h1 className="text-3xl font-bold text-center">
            Meet Our Expert Surgeons
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))}
          </div>
          </div>
      </div>
    </div>
  );
}

export default Surgery;
