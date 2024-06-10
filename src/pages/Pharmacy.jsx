import img from "../assets/pharmacist-work.jpg";
import headerBgImage from "../assets/high-angle-medical-desk-composition.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Pharmacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;

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
            Pharmacy Department
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer text-lg" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer text-lg">Pharmacy</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl object-cover" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto p-6 sm:p-8 lg:p-12">
          <h1 className="text-center text-4xl text-sky-800 font-bold font-Roman mb-6 uppercase">
            Pharmacy{" "}
          </h1>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            Our Pharmacy Department goes beyond dispensing medications. We are
            dedicated to providing comprehensive pharmaceutical care to enhance
            your overall health and well-being. Our professional pharmacists are
            here to ensure you receive safe, effective, and personalized
            medication services.
          </p>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            We believe that pharmacy care is an integral part of your healthcare
            journey. Our mission is to provide you with exceptional service,
            ensuring you have the necessary resources and support to manage your
            health effectively. Choose Hiba Asia Pharmacy for a reliable partner
            in your health and wellness.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Pharmacy;
