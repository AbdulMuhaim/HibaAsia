import img from "../assets/cute-woman-lying-procedure-rejuvenation-skin.jpg";
import headerBgImage from "../assets/girl-receiving-facial-treatment-beauty-salon.jpg";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrRashaMohamed from "../assets/HibaDoctors/11. Dr. Rasha Mohamed.jpg";
import Footer from "../Components/Footer";

function Dermatology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;

  const doctors = [
    { name: "Rasha Mohamed", image: DrRashaMohamed, department: "Dermatology" },
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
            Dermatology
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer text-lg" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer text-lg">Dermatology</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto p-6 sm:p-8 lg:p-12">
          <h1 className="text-center text-4xl text-sky-800 font-bold font-Roman mb-6 uppercase">
            Dermatology{" "}
          </h1>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            At our Dermatology Department, we offer expert cosmetic and medical
            care for your skin, hair, nails, and mucous membranes. Our team of
            top dermatologists in Riyadh and across Saudi Arabia is dedicated to
            providing both surgical and non-surgical treatments for a wide range
            of dermatological conditions. Recognized as one of the leading
            dermatology hospitals in Saudi Arabia, we specialize in diagnosing
            and treating various skin diseases, whether they are infectious,
            immunologic, degenerative, neoplastic, or sexually transmitted.
          </p>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            Our dermatology consultations cover a broad spectrum of conditions,
            from common issues like acne, eczema, and dermatitis to severe and
            life-threatening conditions such as drug rashes and blistering skin
            diseases. Our highly skilled dermatologists in Jeddah and other
            locations in Saudi Arabia are committed to helping you achieve and
            maintain optimal skin health. We offer specialized services for the
            removal of unwanted hair and blemishes, and provide advanced
            skincare treatments including peels, masks, and scrubs to rejuvenate
            and hydrate your skin. Our Skin Care Clinics are equipped with the
            latest technology to deliver the best anti-aging skincare treatments
            available.
          </p>
          <h2 className="text-4xl text-sky-800 font-bold font-Roman my-7">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside text-xl  opacity-70 mb-4 max-w-4xl">
            <li className="mb-2">Adult Dermatology</li>
            <li className="mb-2">Cosmetic Dermatology</li>
            <li className="mb-2">Dermatologic Surgery</li>
            <li className="mb-2">Geriatric Dermatology</li>
            <li className="mb-2">Pediatric Dermatology</li>
            <li className="mb-2">Tropical Dermatology</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="mt-3 py-14 px-3">
          <h1 className="text-3xl font-bold text-center text-sky-800">
            Meet Our Expert Dermatologists
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

export default Dermatology;
