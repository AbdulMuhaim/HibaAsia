import img from "../assets/woman-working-laboratory-close-up.jpg";
import headerBgImage from "../assets/hand-with-protective-gloves-holding-blood-samples-covid-test.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Laboratory() {
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
            Laboratory
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer " onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer ">Laboratory</p>
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
            Laboratory{" "}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
            Our Laboratory Department is committed to providing accurate and
            timely diagnostic services. Our state-of-the-art laboratories,
            staffed by experienced professionals, play a crucial role in
            supporting your healthcare journey by delivering reliable results
            for a wide range of tests.
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
            <li className="mb-2">Comprehensive Eye Exams</li>
            <li className="mb-2">
              Vision Correction (Glasses and Contact Lenses)
            </li>
            <li className="mb-2">Blood Tests</li>
            <li className="mb-2">Urine Tests</li>
            <li className="mb-2">Stool Tests</li>
            <li className="mb-2">Biochemical Analysis</li>
            <li className="mb-2">Hematology</li>
            <li className="mb-2">Microbiology</li>
            <li className="mb-2">Immunology</li>
            <li className="mb-2">Histopathology</li>
            <li className="mb-2">Cytology</li>
          </ul>
          </div>
        </div>
      </div>
      </div>




      <div>
      </div>
    </div>
  );
}

export default Laboratory;
