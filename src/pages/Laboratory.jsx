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
            Laboratory Department
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer text-lg" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer text-lg">Laboratory</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto p-6 sm:p-8 lg:p-12">
          <h1 className="text-center text-4xl text-sky-800 font-bold font-Roman mb-6 uppercase">
            Laboratory{" "}
          </h1>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            Our Laboratory Department is committed to providing accurate and
            timely diagnostic services. Our state-of-the-art laboratories,
            staffed by experienced professionals, play a crucial role in
            supporting your healthcare journey by delivering reliable results
            for a wide range of tests.
          </p>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            We understand the importance of accurate diagnostics in healthcare.
            Our Laboratory Department is dedicated to providing high-quality
            services that you can trust. Rely on us for all your laboratory
            testing needs as we strive to deliver excellence in every aspect of
            our care.
          </p>
          <h2 className="text-4xl text-sky-800 font-bold font-Roman my-7">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside text-xl  opacity-70 mb-4 max-w-4xl">
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
      <div>
      </div>
    </div>
  );
}

export default Laboratory;
