import img from "../assets/front-view-doctor-holding-baby.jpg";
import headerBgImage from "../assets/side-view-of-doctor-examining-cute-little-baby-boy-2023-11-27-05-27-26-utc.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrMohammedAnwar from "../assets/HibaDoctors/08. Dr. Mohammed Anwar.jpg";
import DoctorCard from "../Components/DoctorCard";


function Pediatrics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;

  const doctors = [
    {
        name: "Muhammed Anwar",
        image: DrMohammedAnwar,
        department: "Pediatrician",
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
          <h1 className="text-5xl p-5 backdrop-filter font-Tahoma text-white uppercase">
            Pediatrics
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">Pediatrics</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto">
          <div className="w-full">
          <h1 className=" text-4xl font-bold  mb-6 uppercase">
            Pediatrics{" "}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
            In our Pediatric Unit, every child is embraced as a unique ray of
            hope, each one a star in the making. We believe that investing in
            their health and happiness today is the surest path to a brighter
            tomorrow. Our team of dedicated Pediatricians across Riyadh, Jeddah,
            and beyond, share a common commitment to excellence, ensuring that
            every child receives the finest care from the moment they enter our
            world.
          </p>
          <p className="president-message max-w-4xl">
            At the heart of our mission lies a simple yet profound belief: that
            every child deserves to be treated like royalty. With this ethos
            guiding us, we offer a comprehensive range of services tailored to
            meet the diverse needs of children at every stage of their
            development. From the tender care provided in our Neonatal ICU to
            the specialized treatments offered by our experts in Emergency
            Medicine, Cardiology, and Critical Care, we spare no effort in
            ensuring that each child receives the personalized attention they
            deserve.
          </p>
          <p className="president-message max-w-4xl">
            But our commitment to children's well-being extends beyond medical
            treatment alone. We recognize the importance of fostering a
            nurturing environment where children can thrive emotionally,
            intellectually, and socially. Through our holistic approach to
            pediatric care, we strive to empower the superheroes of tomorrow,
            equipping them with the resilience and strength they need to face
            life's challenges head-on.
          </p>

        </div>
      </div>
        <div className="mt-3 py-14 px-3">
          <h1 className="text-3xl font-bold text-center">
            Meet Our Expert Pediatricians
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

export default Pediatrics;
