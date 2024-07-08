import doctorsHeaderImage from "../assets/group-of-doctors-standing-in-hospital-on-medical-c-2023-11-27-05-18-43-utc.jpg";
import DoctorsList from "../Components/DoctorsList";
import DoctorPatient from "../assets/doctor-doing-injection-to-little-patient-sitting-o-2023-11-27-05-13-55-utc.jpg";
const presidentImage =
  "https://img.freepik.com/free-photo/portrait-adult-male-doing-remote-work_23-2148499629.jpg?t=st=1720029479~exp=1720033079~hmac=9cb9a0a2a2b6df4a2396a82c5448eae17df68ac1b226df5e9f84e19b1587b01e&w=1060";
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
        <div className=" flex justify-end items-center">
          <img
            src={DoctorPatient}
            alt="Doctor and Patient"
            className="rounded-lg shadow-lg w-[550px] h-auto"
          />
        </div>

        <div className="max-w-[550px] mt-6 md:mt-0 md:ml-6 flex flex-col justify-start items-center">
          <h1 className="text-3xl md:text-4xl text-gray-800 mb-4">
            HIBA ASIA HEALTHCARE GROUP{" "}
          </h1>
          <p className=" president-message">
            Hiba Asia Healthcare Group is a multinational conglomerate
            headquartered in Jeddah since 2005, Saudi Arabia. Our company
            playing a remarkable role in the healthcare sector of Jeddah, Saudi
            Arabia since its establishment. Under Healthcare Group we are
            operating multiple healthcare units in different part of Jeddah. Our
            aims to expand our healthcare networks all over the Kingdom to
            provide cost effective, high quality healthcare to all...{" "}
          </p>
          <p className="president-message">
            HAHG provides a comprehensive range of health services for the
            family, functioning as a one-stop health center providing treatment
            for acute medical conditions, management of chronic diseases, women
            & child health services, and Dental care. The focus of Hiba Asia is
            on health promotion and disease prevention, early and accurate
            diagnosis, and disease management through specialist-led team-based
            care.{" "}
          </p>
          <p className="president-message">
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

      <div className="flex flex-col md:flex-row items-center justify-center px-10 py-20 bg-white">
        <div className="max-w-[550px] mt-6 md:mt-0 md:ml-6 flex flex-col justify-start items-center">
          <h2 className="text-3xl font-bold mb-10 underline-custom">
            PRESIDENT'S <span className="font-normal">MESSAGE</span>
          </h2>
          <p className=" president-message">
            Welcome to Hiba Asia, where excellence in healthcare meets
            compassionate care. It is with great pride and joy that I invite you
            to experience our commitment to your well-being. At Hiba Asia, we
            believe that the true measure of progress in the healthcare industry
            is not just the number of facilities, but the quality of care and
            awareness we bring to our community.
          </p>
          <p className="president-message">
            Our mission goes beyond treating illnesses; we strive to empower our
            patients with the knowledge and resources to lead healthier lives.
            Each member of our dedicated team is committed to providing
            personalized care tailored to meet the unique needs of every
            individual who walks through our doors.
          </p>
          <p className="president-message">
            As we continue to grow and expand, our focus remains steadfast on
            delivering cutting-edge medical services while maintaining a warm
            and welcoming environment. We are here to support you every step of
            the way, ensuring that you receive the highest standard of care.
          </p>
          <p className="president-message">
            Thank you for choosing Hiba Asia. We look forward to being your
            trusted partner in health and wellness.{" "}
          </p>
          <div className="text-left flex w-full font-semibold">
          <p className="president-message ">
            Sincerely,
            <br /> Mr. Abdullah Mohammed Vellengara
            <br />
            President, Hiba Asia Hospital
          </p>
          </div>
        </div>

        <div className=" flex justify-end items-center">
          <img
            src={presidentImage}
            alt="Doctor and Patient"
            className="rounded-lg shadow-lg w-[550px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
