import img from "../assets/dentist-examining-female-patient-teeth.jpg";
import headerBgImage from "../assets/image22.jpg";
import Header from "../Components/Header";
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
            X Ray
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer text-lg" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer text-lg"> X Ray</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto p-6 sm:p-8 lg:p-12">
          <h1 className="text-center text-4xl text-sky-800 font-bold font-Roman mb-6 uppercase">
            X Ray{" "}
          </h1>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            At Hiba Asia, we prioritize your health with state-of-the-art X-ray
            imaging services. Our team across Saudi Arabia is dedicated to
            providing accurate and efficient diagnostic imaging to support your
            healthcare needs.
          </p>
          <h2 className="text-4xl text-sky-800 font-bold font-Roman my-7">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside text-xl  opacity-70 mb-4 max-w-4xl">
            <li className="mb-2">Digital Radiography</li>
            <li className="mb-2">Dental X-Rays</li>
            <li className="mb-2">Chest X-Rays</li>
            <li className="mb-2">Bone and Joint X-Rays</li>
            <li className="mb-2">Abdominal X-Rays</li>
          </ul>
          <h2 className="text-4xl text-sky-800 font-bold font-Roman my-7">
            Specialized Imaging:
          </h2>
          <ul className="list-disc list-inside text-xl  opacity-70 mb-4 max-w-4xl">
            <li className="mb-2">Mammography</li>
            <li className="mb-2">Fluoroscopy</li>
            <li className="mb-2">CT Scans</li>
            <li className="mb-2">MRI Scans</li>
            <li className="mb-2">Ultrasound Imaging</li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Xray;
