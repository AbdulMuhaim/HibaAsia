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
        className="flex items-center justify-center h-60"
        style={{
          backgroundImage: headerImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col">
          <h1 className="text-5xl p-5 text-white uppercase">Pharmacy</h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer " onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer ">Pharmacy</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="grid lg:grid-cols-2 gap-10 max-w-[1315px] p-3 sm:py-20 sm:px-28">
          <div className="w-full">
            <img src={img} className="rounded-xl" alt="" />
          </div>

          <div className="w-full flex flex-col items-center justify-center mx-auto ">
            <div className="w-full">
              <h1 className=" text-4xl  font-bold  mb-4 uppercase">
                Pharmacy{" "}
              </h1>
            </div>

            <p className="president-message max-w-4xl">
              Our Pharmacy Department goes beyond dispensing medications. We are
              dedicated to providing comprehensive pharmaceutical care to
              enhance your overall health and well-being. Our professional
              pharmacists are here to ensure you receive safe, effective, and
              personalized medication services.
            </p>
            <p className="president-message max-w-4xl">
              We believe that pharmacy care is an integral part of your
              healthcare journey. Our mission is to provide you with exceptional
              service, ensuring you have the necessary resources and support to
              manage your health effectively. Choose Hiba Asia Pharmacy for a
              reliable partner in your health and wellness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pharmacy;
