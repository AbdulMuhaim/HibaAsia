import img from "../assets/physician-doing-medical-consultation-with-pregnant-woman-wearing-face-masks-woman-expecting-child-receiving-medical-advice-from-doctor-office-desk-covid-19-pandemic.jpg";
import headerBgImage from "../assets/gynecologist-offering-couple-ultrasound-pictures.jpg";
import { useNavigate } from "react-router-dom";
import DrAswaq from "../assets/HibaDoctors/01. Dr. Aswaq.jpg";
import DrAzza from "../assets/HibaDoctors/02. Dr. Azza.jpg";
import { useEffect } from "react";
import DoctorCard from "../Components/DoctorCard";

function Gynecology() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;

  const doctors = [
    {
      name: "Aswaq Ahmed",
      image: DrAswaq,
      department: "Obstetrics & Gynecology",
    },
    {
      name: "Azza Hussein Ahmed",
      image: DrAzza,
      department: "Obstetrics & Gynecology",
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
        OBSTETRIC & Gynecology Department
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">Obstetric & Gynecology</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto">
          <div className="w-full">
          <h1 className="text-center text-4xl  font-bold  mb-6 uppercase">
            Obstetric & Gynecology
          </h1>
          </div>

          <p className="president-message max-w-4xl">
            A woman's health undergoes significant changes throughout her life,
            requiring expert care at various stages such as puberty,
            childbearing age, perimenopause, and menopause. At our facility, we
            are equipped to address the diverse health needs of women through
            comprehensive obstetric and gynecologic services. Our team of highly
            skilled gynecologists in Saudi Arabia provides thorough prenatal and
            maternity care for expecting mothers. Additionally, our Gynecology
            Department offers a wide range of services to manage gynecologic
            conditions in a family-centered healthcare environment.
          </p>
          <p className="president-message max-w-4xl">
            Our dedicated physicians, nurses, and staff members are committed to
            delivering top-tier care for conditions affecting women. We focus
            exclusively on serving adult and adolescent female patients,
            providing both medical and personal care tailored to their specific
            needs.
          </p>
          <div className="w-full">

          <h2 className="text-2xl font-bold my-7">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">Adolescent Gynecology</li>
            <li className="mb-2">Abnormal Uterine Bleeding</li>
            <li className="mb-2">Breast Health</li>
            <li className="mb-2">Bone Health</li>
            <li className="mb-2">Barrett’s Esophagus</li>
            <li className="mb-2">Contraception and Family Planning</li>
            <li className="mb-2">Cosmetic Procedures </li>
            <li className="mb-2">Depression</li>
            <li className="mb-2">Endometrial Conditions</li>
            <li className="mb-2">Gastrointestinal Disorders</li>
            <li className="mb-2">General and Genitourinary Gynecology</li>
            <li className="mb-2">Heart Health</li>
            <li className="mb-2">Menopause Care</li>
            <li className="mb-2">Menstrual Disorders</li>
            <li className="mb-2">Minimally Invasive Gynecologic Surgery</li>
            <li className="mb-2">Obesity, Diet, and Exercise</li>
            <li className="mb-2">Ovarian Cysts</li>
            <li className="mb-2">Pelvic Pain</li>
            <li className="mb-2">Sexual Function Care</li>
            <li className="mb-2">Sexually Transmitted Diseases</li>
            <li className="mb-2">Uterine Fibroid Care</li>
            <li className="mb-2">Thyroid Conditions</li>
          </ul>
          </div>
        </div>
      </div>
        <div className="mt-3 py-14 px-3">
          <h1 className="text-3xl font-bold text-center">
            Meet Our Expert Obstetricians and Gynecologists{" "}
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

export default Gynecology;
