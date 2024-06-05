import visionBgImage from "../assets/Vision&Mission.jpg";
import visionImage from "../assets/front-view-human-eye.jpg";
import missionImage from "../assets/3d-rendering-arrow-hitting-target (2).jpg";
import valuesImage from "../assets/colleagues-working-together-project.jpg";
import Header from "../Components/Header";
import visionHeaderImage from "../assets/physician-consulting-his-patient-clinic.jpg";
import { useNavigate } from "react-router-dom";

function Vision() {
  const bgImage = `url(${visionBgImage}), linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))`;
  const headerBgImage = `url(${visionHeaderImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div
        className="flex items-center justify-center h-96"
        style={{
          backgroundImage: headerBgImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col">
          <h1 className="text-5xl p-5 backdrop-filter font-Tahoma backdrop-blur-md text-white">
            MISSION & VISION
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer text-lg" onClick={() => navigate("/")}>
              Home{" "}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer text-lg">Mision&Vision</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={missionImage} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto">
          <h1 className="text-center text-4xl text-sky-800 font-bold font-Roman mb-6">
            OUR MISSION
          </h1>
          <p className=" text-xl opacity-70">
            Our mission is to continually improve the health of the communities
            by discovering and delivering compassionate and quality healthcare
            services through a team of dedicated and highly
            qualified professionals.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 border-b-2 sm:py-20 p-3 sm:px-28">
        <div className="w-full flex flex-col items-center justify-center mx-auto">
          <h1 className="text-center text-4xl  text-sky-800 font-bold font-Roman mb-6">
            OUR VISION
          </h1>
          <p className=" text-xl opacity-70">
            By following the standards of Vision 2030, we aspire to be one of
            the best providers of medical services in the Kingdom
            of Saudi Arabia.
          </p>
        </div>

        <div className="w-full">
          <img  src={visionImage} className="rounded-xl" alt="" />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 border-b-2 p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={valuesImage} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto">
          <h1 className="text-center text-4xl  text-sky-800 font-bold font-Roman mb-6">
            OUR VALUES
          </h1>
          <div>
            <h2 className=" text-2xl mb-3">Compassion</h2>
            <p className=" text-xl opacity-70 mb-5">
              We believe that a large part of our patients treatment lies in our
              personal participation throughout their medical journey from the
              beginning to the point of full recovery. We are empathetic and
              believe that compassion is half the healing.
            </p>
          </div>

          <div>
            <h2 className=" text-2xl mb-3">Patient-Centricity</h2>
            <p className=" text-xl opacity-70 mb-5">
              We consider our patients to be the decision-makers in their
              treatment journey, and our role is to guide them and give them all
              the treatment options that are appropriate for every condition.
              Our patients are at the core f the entire health and care process.
            </p>
          </div>

          <div>
            <h2 className=" text-2xl mb-3">Collaboration</h2>
            <p className=" text-xl opacity-70 mb-5">
              We define collaboration as the ongoing process of working and
              learning with everyone involved in our patient medical journey in
              HIBA ASIA as ONE TEAM. The efforts of the medical and
              administrative teams are combined with our patients family and
              social environment, which represents an important element in their
              lives, in order to achieve complete recovery while ensuring that
              world-class standards are preserved throughout all our services.
            </p>
          </div>

          <div>
            <h2 className=" text-2xl mb-3">Innovation</h2>
            <p className=" text-xl opacity-70 mb-5">
              Our constant commitment to developing our services is what allows
              us to care for our patients and ease their suffering in their
              integrated treatment journey in a professional and efficient way.
              We constantly evaluate our services and we believe that to remain
              at the top of our field, we preach innovation at all levels.
            </p>
          </div>

          <div>
            <h2 className=" text-2xl mb-3">Integrity</h2>
            <p className=" text-xl opacity-70 mb-5">
              We are honest, ethical and trustworthy. We shall always be
              transparent and act morally upright, in our patients’ best
              interest.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3">Quality</h2>
            <p className=" text-xl opacity-70">
              We believe that everyone has the right to have the best chance to
              live a healthy and active life. Thus, we at HIBA ASIA are
              dedicated to offer our patients the highest global standards and
              quality of medical services in healthcare.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
