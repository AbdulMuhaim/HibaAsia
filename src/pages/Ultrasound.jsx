import img from "../assets/man-endocrinologist-making-ultrasonography-female-patient-ultrasound-office-ultrasound-diagnostics-thyroid-gland.jpg";
import headerBgImage from "../assets/gynecologist-performing-ultrasound-consultation.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Ultrasound() {
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
          Ultrasound Department
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer text-lg" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer text-lg">Ultrasound</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl object-cover" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto p-6 sm:p-8 lg:p-12">
          <h1 className="text-center text-4xl text-sky-800 font-bold font-Roman mb-6 uppercase">
          Ultrasound{" "}
          </h1>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            Dedicated to offering high-quality imaging services, the Ultrasound
            Department at Hiba Asia assists in accurate diagnosis and effective
            treatment. Utilizing advanced ultrasound technology, skilled
            sonographers provide detailed and precise imaging to support
            healthcare needs.
          </p>
          <p className="text-xl opacity-70 mb-4 text-center max-w-4xl">
            High-quality imaging is essential for effective healthcare. The
            Ultrasound Department at Hiba Asia is committed to delivering
            excellent services that aid in precise diagnosis and treatment
            planning. Trust Hiba Asia for all ultrasound needs, where
            exceptional care is provided with a focus on health and well-being.
          </p>
          <h2 className="text-4xl text-sky-800 font-bold font-Roman my-7">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside text-xl  opacity-70 mb-4 max-w-4xl">
            <li className="mb-2">Abdominal Ultrasound
            </li>
            <li className="mb-2">
            Pelvic Ultrasound

            </li>
            <li className="mb-2">Obstetric Ultrasound
            </li>
            <li className="mb-2">Vascular Ultrasound
            </li>
            <li className="mb-2">Thyroid Ultrasound
            </li>
            <li className="mb-2">Musculoskeletal Ultrasound
            </li>
            <li className="mb-2">Pediatric Ultrasound
            </li>
            <li className="mb-2">Microbiology</li>
            <li className="mb-2">Immunology</li>
            <li className="mb-2">Histopathology</li>
            <li className="mb-2">Cytology</li>
          </ul>
          <h2 className="text-4xl text-sky-800 font-bold font-Roman my-7">
            Specialized Imaging:
          </h2>
          <ul className="list-disc list-inside text-xl  opacity-70 mb-4 max-w-4xl mr-28">
            <li className="mb-2">Mammography</li>
            <li className="mb-2">Fluoroscopy</li>
            <li className="mb-2">CT Scans</li>
            <li className="mb-2">MRI Scans</li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Ultrasound;
