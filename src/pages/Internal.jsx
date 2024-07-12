import img from "../assets/side-view-man-experiencing-pain.jpg";
import headerBgImage from "../assets/three-cropped-doctors-analyzing-chest-x-ray-digital-pad.jpg";
import { useNavigate } from "react-router-dom";
import DrHussam from "../assets/HibaDoctors/04. Dr. Hussam.jpg";
import { useEffect } from "react";
import DoctorCard from "../Components/DoctorCard";

function Internal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;

  const doctors = [
    { name: "Hussam Alagha", image: DrHussam, department: "Internist" },

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
            Internal Medicine
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">Internal Medicine</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto">
          <div className="w-full">
          <h1 className="text-4xl font-bold mb-6 uppercase">
            Internal Medicine
          </h1>
          </div>

          <p className="president-message max-w-4xl">
            At Hiba Asia, our Internal Medicine Department is dedicated to
            providing top-tier healthcare services to adults, focusing on
            prevention, diagnosis, and treatment of a wide range of medical
            conditions. Our experienced team of internists is committed to
            offering personalized care tailored to your unique health needs.
          </p>
          <div>

          <h2 className="text-2xl font-bold my-7">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">Comprehensive Health Assessments</li>
            <li className="mb-2">
              Management of Chronic Conditions (Diabetes, Hypertension, etc.)
            </li>
            <li className="mb-2">Cardiovascular Health</li>
            <li className="mb-2">Gastrointestinal Health</li>
            <li className="mb-2">Respiratory Health</li>
            <li className="mb-2">Full Respiratory Function Testing</li>
            <li className="mb-2">
              Single and Dual Chamber Defibrillator/Pacemaker Follow-Up
            </li>
            <li className="mb-2">Endocrine Disorders</li>
            <li className="mb-2">Infectious Diseases</li>
            <li className="mb-2">Geriatric Care</li>
            <li className="mb-2">Preventive Medicine</li>
          </ul>
          </div>

        </div>
      </div>
        <div className="mt-3 py-14 px-3">
          <h1 className="text-3xl font-bold text-center">
            Meet Our Expert Cardiologists
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

export default Internal;
