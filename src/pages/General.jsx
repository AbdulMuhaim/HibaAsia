import img from "../assets/woman-doing-leg-exercises-hospital.jpg";
import headerBgImage from "../assets/doctor-helping-patient-with-fractured-leg.jpg";
import Header from "../Components/Header";
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
            General
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer text-lg" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer text-lg">General </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto p-6 sm:p-8 lg:p-12">
          <h1 className="text-center text-4xl text-sky-800 font-bold font-Roman mb-6 uppercase">
            General{" "}
          </h1>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            At Hiba Asia, our General Medicine Department is dedicated to
            providing comprehensive and high-quality care for a wide range of
            medical conditions. Our team of expert physicians is committed to
            diagnosing, treating, and managing both acute and chronic illnesses,
            ensuring personalized care for each patient.
          </p>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            We offer a full spectrum of general medical services, including
            preventive care, routine check-ups, and management of complex health
            issues. Our interdisciplinary approach ensures that patients receive
            holistic care tailored to their individual needs.
          </p>
          <h2 className="text-4xl text-sky-800 font-bold font-Roman my-7">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside text-xl  opacity-70 mb-4 max-w-4xl">
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
      <div>
        <div className="mt-3 py-14 px-3">
          <h1 className="text-3xl font-bold text-center text-sky-800">
            Meet Our Expert General Medicine Specialists
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

export default General;
