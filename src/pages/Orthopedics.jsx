import img from "../assets/woman-doing-leg-exercises-hospital.jpg";
import headerBgImage from "../assets/doctor-helping-patient-with-fractured-leg.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrSamad from "../assets/HibaDoctors/06. Dr. Samad.jpg";
import DoctorCard from "../Components/DoctorCard";

function Orthopedics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;

  const doctors = [
    { name: "Samad Moideen", image: DrSamad, department: "Orthopedics" },
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
        Orthopedics
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">Orthopedics </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto">
          <div className="w-full">
          <h1 className=" text-4xl  font-bold  mb-6 uppercase">
            Orthopedics{" "}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
            At Hiba Asia, our Orthopedics Department strives to be the premier
            choice for orthopedic treatment, trauma management, and
            rehabilitation services. Annually, we perform a substantial number
            of trauma and elective orthopedic surgeries, providing exceptional
            care for patients with bone, joint, and related musculoskeletal
            injuries from diagnosis through to surgery and other treatment
            modalities.
          </p>
          <p className="president-message max-w-4xl">
            Our dedicated interdisciplinary team of caregivers supports patients
            with conditions such as muscle strains, swollen or achy joints, and
            broken bones. We offer comprehensive solutions for a wide range of
            sports and work-related injuries, catering to both acute and chronic
            cases. Our specialized services include Joint Replacement, Sports
            Medicine, Physical Rehabilitation, Hand Surgery, Spine Treatment,
            Trauma Care, and Rheumatology.
          </p>
          <p className="president-message max-w-4xl">
            At Hiba Asia, we are committed to providing advanced, high-quality
            care to ensure the best possible outcomes for our patients. Our
            state-of-the-art facilities and expert medical team make us a
            trusted destination for orthopedic health.
          </p>
        </div>
      </div>
        <div className="mt-3 py-14 px-3">
          <h1 className="text-3xl font-bold text-center ">
            Meet Our Expert Orthopedic Specialists
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

export default Orthopedics;
