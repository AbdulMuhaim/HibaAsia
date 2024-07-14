import img from "../assets/stethoscope-pills-with-medicine-blister-white-background.jpg";
import headerBgImage from "../assets/medium-shot-doctor-talking-patient.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrMurtaza from "../assets/HibaDoctors/13. Dr. Murtaza.jpg";
import DrAbdirizak from "../assets/HibaDoctors/20. Dr. Abdirizak.jpg";
import DrJavedIqbal from "../assets/HibaDoctors/14. Dr. Javed Iqbal.jpg";
import DrBahaIbrahim from "../assets/HibaDoctors/15. Dr. Baha Ibrahim.jpg";
import DrFathimathuZuhra from "../assets/HibaDoctors/16. Dr. Fathimathu Zuhra.jpg";
import DrAminaKhan from "../assets/HibaDoctors/17. Dr. Amina Khan.jpg";
import DrKhaleel from "../assets/HibaDoctors/18. Dr. Khaleel.jpg";
import DrIramQadirReshi from "../assets/HibaDoctors/19. Dr. Iram Qadir Reshi.jpg";
import DrKatherIbrahim from "../assets/HibaDoctors/21. dr. Kather Ibrahim.jpg";
import DoctorCard from "../Components/DoctorCard";

function General() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;

  const doctors = [
    {
      name: "Murtaza Bakhsh",
      image: DrMurtaza,
      department: "General Physician",
    },
    {
      name: "Abdirizak",
      image: DrAbdirizak,
      department: "General Physician",
    },
    {
      name: "Javed Iqbal",
      image: DrJavedIqbal,
      department: "General Physician",
    },
    {
      name: "Baha Ibrahim",
      image: DrBahaIbrahim,
      department: "General Physician",
    },
    {
      name: "Fathimathu Zuhra",
      image: DrFathimathuZuhra,
      department: "General Physician",
    },
    {
      name: "Amina Khan Shafi",
      image: DrAminaKhan,
      department: "General Physician",
    },
    { name: "Khaleel", image: DrKhaleel, department: "General Physician" },
    {
      name: "Iram Qadir Reshi",
      image: DrIramQadirReshi,
      department: "General Physician",
    },
    {
      name: "Kather Ibrahim",
      image: DrKatherIbrahim,
      department: "General Physician",
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
            General Medicine
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer ">General Medicine</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
      <div className="grid lg:grid-cols-2 max-w-[1315px] gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto ">
          <div className="w-full">
            <h1 className="text-left text-4xl font-bold  mb-6 uppercase">
              General Medicine{" "}
            </h1>
          </div>

          <p className="president-message max-w-4xl">
            At Hiba Asia, our General Medicine Department is dedicated to
            providing comprehensive and high-quality care for a wide range of
            medical conditions. Our team of expert physicians is committed to
            diagnosing, treating, and managing both acute and chronic illnesses,
            ensuring personalized care for each patient.
          </p>
          <p className="president-message max-w-4xl">
            We offer a full spectrum of general medical services, including
            preventive care, routine check-ups, and management of complex health
            issues. Our interdisciplinary approach ensures that patients receive
            holistic care tailored to their individual needs.
          </p>
          <div className="w-full">
            <h2 className="text-2xl font-bold my-7 ">Our Services Include:</h2>
            <ul className="list-disc list-inside president-message max-w-4xl">
              <li className="mb-2">Preventive Health Screenings</li>
              <li className="mb-2">Chronic Disease Management</li>
              <li className="mb-2">Acute Illness Treatment</li>
              <li className="mb-2">Geriatric Care</li>
              <li className="mb-2">Women’s Health</li>
              <li className="mb-2">Immunizations</li>
              <li className="mb-2">Nutritional Counseling</li>
              <li className="mb-2">Mental Health Support</li>
            </ul>
          </div>
        </div>
      </div>
      </div>

      <div className="flex justify-center">
      <div className="mt-3 py-14 px-3 max-w-[1315px]">
        <h1 className="text-3xl font-bold text-center">
          Meet Our Expert General Medicine Specialists
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

export default General;
