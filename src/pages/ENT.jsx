import img from "../assets/physician-holding-otoscope-ear-consultation-patient-checkup-visit-woman-doctor-using-otology-instrument-examine-infection-give-medical-advice-senior-man.jpg";
import headerBgImage from "../assets/woman-patient-medical-office-doctor-medical-mask-lor-checks-woman-ears.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrShahin from "../assets/HibaDoctors/05. Dr. Shahin.jpg";
import DoctorCard from "../Components/DoctorCard";

function Ent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;

  const doctors = [
    { name: "Mahmoud Shahin", image: DrShahin, department: "ENT Specialist" },
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
        <h1 className="text-5xl p-5 text-white uppercase">
        ENT
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">ENT</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto">
          <div className="w-full">
            <h1 className=" text-4xl font-bold  mb-6 uppercase">ENT </h1>
          </div>

          <p className="president-message max-w-4xl">
            Our ENT Department offers comprehensive care for ear, nose, and
            throat conditions, integrated with advanced audiology services. Our
            audiology department provides thorough diagnostic services for
            hearing and balance assessments for patients of all ages.
          </p>
          <div className="w-full">
          <h2 className="text-2xl font-bold  my-7">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">General ENT Outpatient Care</li>
            <li className="mb-2">Pediatric ENT</li>
            <li className="mb-2">Middle Ear and Mastoid Disease</li>
            <li className="mb-2">Sinus Disease</li>
            <li className="mb-2">Sleep-Disordered Breathing</li>
            <li className="mb-2">Voice Problems</li>
            <li className="mb-2">Salivary Gland Problems</li>
          </ul>
          </div>

        </div>
      </div>
        <div className="mt-3 py-14 px-3">
          <h1 className="text-3xl font-bold text-center ">
            Meet Our Expert ENT Specialists
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))}
          </div>
      </div>
    </div>
  );
}

export default Ent;
