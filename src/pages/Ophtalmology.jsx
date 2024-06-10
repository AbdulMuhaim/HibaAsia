import img from "../assets/sad-girl-has-eye-problems-portrait-upset-gloomy-european-woman-ophthalmologist-office-testing-vision-while-sitting-wearing-phoropter-regretting-that-she-spoilt-sight-near-computer.jpg";
import headerBgImage from "../assets/mother-with-little-son-glasses-store.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrTaha from "../assets/HibaDoctors/10. Dr. Taha.jpg";

function Ophtalmology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;

  const doctors = [
    { name: "Taha Abouelenin", image: DrTaha, department: "Ophthalmology" },

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
          Ophthalmology Department
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer text-lg" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer text-lg">Ophthalmology</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto p-6 sm:p-8 lg:p-12">
          <h1 className="text-center text-4xl text-sky-800 font-bold font-Roman mb-6 uppercase">
          Ophthalmology{" "}
          </h1>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            At Hiba Asia, our Ophthalmology Department is dedicated to
            delivering exceptional eye care services. Our team of expert
            ophthalmologists is committed to preserving and enhancing your
            vision through comprehensive, personalized treatment plans tailored
            to your unique needs.
          </p>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            We prioritize your vision and eye health, ensuring that you receive
            the highest quality care. Trust our Ophthalmology Department for all
            your eye care needs, as we strive to help you see the world more
            clearly and comfortably.
          </p>
          <h2 className="text-4xl text-sky-800 font-bold font-Roman my-7">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside text-xl  opacity-70 mb-4 max-w-4xl">
            <li className="mb-2">Comprehensive Eye Exams</li>
            <li className="mb-2">
              Vision Correction (Glasses and Contact Lenses)
            </li>
            <li className="mb-2">Cataract Surgery</li>
            <li className="mb-2">Glaucoma Management</li>
            <li className="mb-2">Diabetic Eye Care</li>
            <li className="mb-2">Macular Degeneration Treatment</li>
            <li className="mb-2">Pediatric Ophthalmology</li>
            <li className="mb-2">Corneal Transplants</li>
            <li className="mb-2">LASIK and Refractive Surgery</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="mt-3 py-14 px-3">
          <h1 className="text-3xl font-bold text-center text-sky-800">
            Meet Our Expert Dentists
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

export default Ophtalmology;
