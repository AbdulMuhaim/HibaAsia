import img from "../assets/front-view-woman-having-ache.jpg";
import headerBgImage from "../assets/female-doctor-holding-human-kidney-model-her-hands-closeup-view.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DrRamadan from "../assets/HibaDoctors/03. Dr. Ramadan.jpg";
import DoctorCard from "../Components/DoctorCard";

function Urology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;

  const doctors = [
    { name: "Mohammed Ramadan Ahmad", image: DrRamadan, department: "Urology" },
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
        Urology
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer " onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer ">Urology</p>
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
          <h1 className=" text-4xl  font-bold  mb-6 uppercase">
            Urology{" "}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
            Our Department of Urology provides efficient care for the infections
            and disorders affecting urinary tract, kidneys, bladder, prostate
            and the male and female genitalia.
          </p>
          <p className="president-message max-w-4xl">
            We are well equipped with new and advanced facilities to provide the
            best quality care and comprehensive and evidence-based treatment
            using the latest technology and cutting-edge breakthroughs in the
            management of various urologic disorders. We have the best
            Urologists in Riyadh, Jeddah and other regions who possess extensive
            medical expertise and immense experience in the treatment of medical
            conditions of the female urinary tract and the male genitourinary
            system, including Incontinence, Kidney Stones, Erectile Dysfunction
            and different forms of cancer. alternative to this
          </p>
        </div>
      </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-3 py-14 px-3 max-w-[1315px]">
          <h1 className="text-3xl font-bold text-center">
            Meet Our Expert Urologists
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

export default Urology;
