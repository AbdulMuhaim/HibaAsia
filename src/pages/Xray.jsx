import img from "../assets/male-doctor-with-x-ray-clinic.jpg";
import headerBgImage from "../assets/full-shot-patient-getting-ct-scan.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Xray() {

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
          <h1 className="text-5xl p-5 text-white uppercase">
            X Ray
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer " onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer "> X Ray</p>
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
          X Ray
          </h1>
          </div>

          <p className="president-message max-w-4xl">
           At Hiba Asia, we prioritize your health with state-of-the-art X-ray
            imaging services. Our team across Saudi Arabia is dedicated to
            providing accurate and efficient diagnostic imaging to support your
            healthcare needs.
          </p>
          <p className="president-message max-w-4xl">
            We understand the importance of accurate diagnostics in healthcare.
            Our Laboratory Department is dedicated to providing high-quality
            services that you can trust. Rely on us for all your laboratory
            testing needs as we strive to deliver excellence in every aspect of
            our care.
          </p>

          <div className="w-full">
          <h2 className="text-2xl font-bold my-7">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">Digital Radiography</li>
            <li className="mb-2">Dental X-Rays</li>
            <li className="mb-2">Chest X-Rays</li>
            <li className="mb-2">Bone and Joint X-Rays</li>
            <li className="mb-2">Abdominal X-Rays</li>
          </ul>
          <h2 className="text-2xl  font-bold  my-7">
            Specialized Imaging:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">Mammography</li>
            <li className="mb-2">Fluoroscopy</li>
            <li className="mb-2">CT Scans</li>
            <li className="mb-2">MRI Scans</li>
            <li className="mb-2">Ultrasound Imaging</li>
          </ul>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Xray;
