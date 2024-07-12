import img from "../assets/smiling-female-patient-sitting-chair-showing-thumb-up-dental-clinic.jpg";
import headerBgImage from "../assets/dentist-examining-patient-s-teeth.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrAbdulAzeezalZahrani from "../assets/HibaDoctors/23. Dr. Abdul Azeez al Zahrani.jpg";
import DrShahadBinMahfouz from "../assets/HibaDoctors/24. Dr. Shahad Bin Mahfouz.jpg";
import DrNoufQasem from "../assets/HibaDoctors/25. Dr. Nouf Qasem.jpg";
import DrJensonJohn from "../assets/HibaDoctors/26. Dr. Jenson John.jpg";
import DrLintuMol from "../assets/HibaDoctors/27. Dr. Lintu Mol.jpg";
import DrMaryamAhmed from "../assets/HibaDoctors/28. Dr. Maryam Ahmed.jpg";
import DoctorCard from "../Components/DoctorCard";

function Dental() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;

  const doctors = [
    {
        name: "Abdul Aziz AlZahrani",
        image: DrAbdulAzeezalZahrani,
        department: "Dentist",
      },
      {
        name: "Shahad Bin Mehfouz",
        image: DrShahadBinMahfouz,
        department: "Dentist",
      },
      { name: "Nouf Qasem Mohammed", image: DrNoufQasem, department: "Dentist" },
      { name: "Jenson John", image: DrJensonJohn, department: "Dentist" },
      { name: "Lintu Mol", image: DrLintuMol, department: "Dentist" },
      { name: "Maryam Ahmed", image: DrMaryamAhmed, department: "Dentist" },
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
        Dental
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer text-lg" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer text-lg">Dental</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto">
          <div className="w-full">
          <h1 className=" text-4xl font-bold mb-6 uppercase">
            Dental{" "}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
            At Hiba Asia Dental Clinic, we believe that with the right care,
            your teeth can last a lifetime. Our team in Riyadh and across Saudi
            Arabia offers comprehensive dental services, ensuring your oral
            health is always our top priority. From routine cleanings and
            check-ups to advanced procedures, we provide personalized,
            state-of-the-art care in a friendly and professional environment.
          </p>
          <p className="president-message max-w-4xl">
            Our skilled dentists also offer specialized services for adults,
            geriatrics, and those with special needs, including anesthesia
            options for a comfortable experience.
          </p>
          <div className="w-full">
          <h2 className="text-2xl font-bold my-7 ">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl ">
            <li className="mb-2">Teeth Cleanings & Whitening</li>
            <li className="mb-2">Extractions & Fillings</li>
            <li className="mb-2">Veneers & Crowns</li>
            <li className="mb-2">Root Canal Treatment</li>
            <li className="mb-2">Braces/Invisalign</li>
            <li className="mb-2">Bonding & Dentures</li>
          </ul>
          <h2 className="text-2xl font-bold my-7 ">
            Specialized Care:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">Orthodontics</li>
            <li className="mb-2">Oral & Maxillofacial Surgery</li>
            <li className="mb-2">Implantology</li>
            <li className="mb-2">Periodontics</li>
            <li className="mb-2">Endodontics</li>
            <li className="mb-2">Bonding & Dentures</li>
            <li className="mb-2">Pediatric Dentistry</li>
            <li className="mb-2">Prosthetic & Cosmetic Dentistry</li>
          </ul>
          </div>

        </div>
      </div>
        <div className="mt-3 py-14 px-3">
          <h1 className="text-3xl font-bold text-center">
            Meet Our Expert Dentists
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

export default Dental;
