import img from "../assets/smiley-pregnant-woman-home-with-mug-coffee.jpg";
import headerBgImage from "../assets/doctor-performing-ultrasound-scanning-her-pregnant-patient.jpg";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import DrAswaq from "../assets/HibaDoctors/01. Dr. Aswaq.jpg";
import DrAzza from "../assets/HibaDoctors/02. Dr. Azza.jpg";

function Gynecology() {
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
      <Header />

      <div
        className="flex items-center justify-center h-96"
        style={{
          backgroundImage: headerImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col">
          <h1 className="text-5xl p-5 backdrop-filter font-Tahoma backdrop-blur-md text-white uppercase">
            OBSTETRIC & Gynecology Department
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer text-lg" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer text-lg">Obstetric & Gynecology</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto p-6 sm:p-8 lg:p-12">
          <h1 className="text-center text-4xl text-sky-800 font-bold font-Roman mb-6 uppercase">
            Obstetric & Gynecology
          </h1>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
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
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            Our dedicated physicians, nurses, and staff members are committed to
            delivering top-tier care for conditions affecting women. We focus
            exclusively on serving adult and adolescent female patients,
            providing both medical and personal care tailored to their specific
            needs.
          </p>
          <h2 className="text-4xl text-sky-800 font-bold font-Roman my-7">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside text-xl  opacity-70 mb-4 max-w-4xl">
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
      <div>
        <div className="mt-3 py-14 px-3">
          <h1 className="text-3xl font-bold text-center text-sky-800">
            Meet Our Expert Obstetricians and Gynecologists{" "}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            {doctors.map((doctor, index) => (
              <div key={index} className="perspective-1000">
                <div className="relative h-[30rem] text-center transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                  <div className="absolute w-full h-full shadow-xl rounded-lg py-3 bg-slate-50 backface-hidden flex flex-col items-center justify-center">
                    <div className="w-full h-40 flex justify-center flex-1 items-center">
                      <img
                        src={doctor.image}
                        alt=""
                        className="h-full object-cover rounded-3xl"
                      />
                    </div>
                    <div className="flex-2">
                      <h2 className="text-xl font-semibold mt-4">
                        Dr. {doctor.name}
                      </h2>
                      <p className="text-gray-600 mt-2">{doctor.department}</p>
                    </div>
                  </div>
                  <div className="absolute w-full h-full shadow-inner bg-gradient-to-br from-sky-200 to-white  rounded-lg p-5 backface-hidden transform rotate-y-180 flex flex-col items-center justify-center text-white">
                    <div className="flex items-center justify-center ">
                      <div className="w-full h-60 flex justify-center flex-1 items-center">
                        <img
                          src={doctor.image}
                          alt=""
                          className="h-full object-cover rounded-3xl mr-2"
                        />
                      </div>
                      <div className="flex-2">
                        <h2 className="text-xl font-semibold mt-4 max-w-40 text-black">
                          Dr. {doctor.name}
                        </h2>
                        <p className="text-gray-600 mt-2">
                          {doctor.department}
                        </p>
                        <button className="bg-sky-800 text-white rounded-full px-4 py-2 mt-4">
                          + Connect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Gynecology;
