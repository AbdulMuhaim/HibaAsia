import doctorsHeaderImage from "../assets/group-of-doctors-standing-in-hospital-on-medical-c-2023-11-27-05-18-43-utc.jpg";
import DoctorsList from "../Components/DoctorsList";
import DoctorPatient from "../assets/young-doctor-listen-female-patient-heart-chest-with-stethoscope-clinic-meeting-man-gp-checkup-examine-woman-client-with-phonendoscope-healthcare-concept.jpg";

import { useNavigate } from "react-router-dom";

function About() {
  const headerBgImage = `url(${doctorsHeaderImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="flex items-center justify-center h-60"
        style={{
          backgroundImage: headerBgImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col">
          <h1 className="text-5xl p-5 backdrop-filter font-Tahoma backdrop-blur-md textu text-white">
            About Hiba Asia{" "}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer text-lg" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer text-lg">About</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-10 py-20 bg-white">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={DoctorPatient}
            alt="Doctor and Patient"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl text-gray-800 mb-4">
            Hiba Asia Healthcare Group{" "}
          </h1>
          <p className="text-gray-700 mb-4">
            Hiba Asia Healthcare Group is a multinational conglomerate
            headquartered in Jeddah since 2005, Saudi Arabia. Our company
            playing a remarkable role in the healthcare sector of Jeddah, Saudi
            Arabia since its establishment. Under Healthcare Group we are
            operating multiple healthcare units in different part of Jeddah. Our
            aims to expand our healthcare networks all over the Kingdom to
            provide cost effective, high quality healthcare to all...{" "}
          </p>
          <p className="text-gray-700 mb-4">
            HAHG provides a comprehensive range of health services for the
            family, functioning as a one-stop health center providing treatment
            for acute medical conditions, management of chronic diseases, women
            & child health services, and Dental care. The focus of Hiba Asia is
            on health promotion and disease prevention, early and accurate
            diagnosis, and disease management through specialist-led team-based
            care.{" "}
          </p>
          <p className="text-gray-700 mb-4">
            At Hiba Asia Polyclinics, we are committed to working with our
            patients to continually improve care and thus play an integral role
            in empowering patients, their families, and communities to take
            charge of their health and wellness by delivering seamless,
            person-centered, and preventive healthcare. Hiba Asia Healthcare is
            a group of polyclinics with multiple specialty that provide
            comprehensive healthcare services to the community. The mission of
            Hiba Asia Healthcare is to provide high-quality, affordable, and
            accessible healthcare to all.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
