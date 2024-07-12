import img from "../assets/cute-woman-lying-procedure-rejuvenation-skin.jpg";
import headerBgImage from "../assets/girl-receiving-facial-treatment-beauty-salon.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrRashaMohamed from "../assets/HibaDoctors/11. Dr. Rasha Mohamed.jpg";
import DrAbdullahBayazeed from "../assets/HibaDoctors/22. Dr. Abdullah Bayazeed.jpg";
import DoctorCard from "../Components/DoctorCard";



function Dermatology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;

  const doctors = [
    { name: "Hana Aimora", image: DrRashaMohamed, department: "Dermatology" },
    {
      name: "Abdullah Bayazeed",
      image: DrAbdullahBayazeed,
      department: "Orthodontist",
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
            Dermatology
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">Dermatology</p>
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
            Dermatology{" "}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
            At our Dermatology Department, we offer expert cosmetic and medical
            care for your skin, hair, nails, and mucous membranes. Our team of
            top dermatologists in Riyadh and across Saudi Arabia is dedicated to
            providing both surgical and non-surgical treatments for a wide range
            of dermatological conditions. Recognized as one of the leading
            dermatology hospitals in Saudi Arabia, we specialize in diagnosing
            and treating various skin diseases, whether they are infectious,
            immunologic, degenerative, neoplastic, or sexually transmitted.
          </p>
          <p className="president-message max-w-4xl">
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
          <div className="w-full">
          <h2 className="text-2xl font-bold  my-7">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">Adult Dermatology</li>
            <li className="mb-2">Cosmetic Dermatology</li>
            <li className="mb-2">Dermatologic Surgery</li>
            <li className="mb-2">Geriatric Dermatology</li>
            <li className="mb-2">Pediatric Dermatology</li>
            <li className="mb-2">Tropical Dermatology</li>
          </ul>
          </div>

        </div>
      </div>
        <div className="mt-3 py-14 px-3">
          <h1 className="text-3xl font-bold text-center">
            Meet Our Expert Dermatologists
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

export default Dermatology;
