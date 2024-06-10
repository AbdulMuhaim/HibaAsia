import img from "../assets/surgical-procedure-made-by-doctor-special-equipment.jpg";
import headerBgImage from "../assets/nurse-hand-taking-surgical-instrument-group-surgeons-background-operating-patient-surgical-theatre-steel-medical-instruments-ready-be-used-surgery-emergency-concept.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrMajedMouris from "../assets/HibaDoctors/07. Dr. Majed Mouris.jpg";

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
            General Surgery{" "}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer text-lg" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer text-lg">General Surgery</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl object-cover" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto p-6 sm:p-8 lg:p-12">
          <h1 className="text-center text-4xl text-sky-800 font-bold font-Roman mb-6 uppercase">
            General Surgery{" "}
          </h1>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            The General Surgery Department at Hiba Asia is committed to
            providing exceptional surgical care. Our team of highly skilled
            surgeons, supported by advanced technology and comprehensive care
            protocols, ensures that you receive the highest standard of
            treatment for a wide range of surgical conditions.
          </p>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            At Hiba Asia, we understand the importance of precision and care in
            surgical procedures. The General Surgery Department is dedicated to
            providing you with the best possible outcomes through meticulous
            surgical practices and compassionate care. Trust Hiba Asia for all
            your surgical needs, where your health and recovery are our utmost
            priorities.
          </p>
          <h2 className="text-4xl text-sky-800 font-bold font-Roman my-7">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside text-xl  opacity-70 mb-4 max-w-4xl">
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
      <div>
        <div className="mt-3 py-14 px-3">
          <h1 className="text-3xl font-bold text-center text-sky-800">
            Meet Our Expert Surgeons
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

export default Surgery;
