import img from "../assets/person-holding-anatomic-heart-model-educational-purpose.jpg";
import headerBgImage from "../assets/doctor-examination-young-man-with-stethoscope-hospital.jpg";
import { useNavigate } from "react-router-dom";
import DrSherifHelmy from "../assets/HibaDoctors/09. Dr. Sherif Helmy.jpg";
import { useEffect } from "react";
import DoctorCard from "../Components/DoctorCard";


function Cardiology() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;

  const doctors = [
    {
      name: "Mohamad Sherif Helmy",
      image: DrSherifHelmy,
      department: "Cardiologist",
    },
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
        Cardiology
          </h1>
          <div className="flex items-center space-x-4 2xl:text-lg text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">Cardiology</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto">
          <div className="w-full">
          <h1 className="text-4xl  font-bold  mb-6 uppercase">
            Cardiology
          </h1>
          </div>

          <p className="president-message max-w-4xl">
            Our Cardiology Department offers a comprehensive range of services
            for both inpatients and outpatients. With a dedicated team of highly
            skilled cardiologists and state-of-the-art facilities, we ensure
            that you receive the best possible care for your heart. Our
            commitment to excellence has earned us recognition as one of the top
            cardiac hospitals in Saudi Arabia, providing cutting-edge treatment
            for a wide array of cardiac conditions. Our services are provided by
            a team of the best cardiologists in Saudi Arabia, leveraging
            advanced facilities and both preventative and therapeutic treatment
            modalities.
          </p>
          <div className="w-full">

          <h2 className="text-2xl font-bold  my-7">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">24-Hour Blood Pressure Monitoring</li>
            <li className="mb-2">24-Hour E.C.G. (Holter Monitoring)</li>
            <li className="mb-2">Treadmill Test (Exercise Stress Test)</li>
            <li className="mb-2">Basic Lung Function Testing</li>
            <li className="mb-2">Echocardiogram (Stress Echocardiography)</li>
            <li className="mb-2">Full Respiratory Function Testing</li>
            <li className="mb-2">
              Single and Dual Chamber Defibrillator/Pacemaker Follow-Up
            </li>
            <li className="mb-2">Sleep Assessment</li>
            <li className="mb-2">Sphygmocor Pulse Pressure Monitoring</li>
            <li className="mb-2">Stress Testing (Exercise Tests)</li>
          </ul>
          </div>

        </div>
      </div>
      <div>
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
    </div>
  );
}

export default Cardiology;
