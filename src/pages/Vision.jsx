import visionBgImage from "../assets/Vision&Mission.jpg";
import visionImage from "../assets/Vision-Icon-Photoroom.png-Photoroom.png";
import missionImage from "../assets/Mission-Icon-Photoroom.png-Photoroom.png";
import valuesImage from "../assets/reputation-building-icon-line-illustration-vector-Photoroom.png-Photoroom.png";
import Header from "../Components/Header";
import visionHeaderImage from "../assets/hospital-teamwork-and-hands-of-doctors-in-support-2023-11-27-05-21-38-utc.jpg";
import SocialMedias from "../Components/SocialMedias";
import Whatsapp from "../Components/Whatsapp";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Vision() {
  const bgImage = `url(${visionBgImage}), linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))`;
  const headerBgImage = `url(${visionHeaderImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Header />
      </div>

      <div
        className="flex items-center justify-center h-96"
        style={{
          backgroundImage: headerBgImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <IoArrowBackCircleSharp
          onClick={() => navigate(-1)}
          size={50}
          className="absolute transition-transform hover:scale-105 text-white top-32 left-4 cursor-pointer"
        />

        <h1 className="text-5xl p-5 backdrop-filter font-Tahoma backdrop-blur-md text-white">
          MISSION & VISION
        </h1>
      </div>

      <SocialMedias />
      <Whatsapp />

      <div
        className="grid md:grid-cols-2 grid-cols-1 my-20 border-4  border-sky-700 mx-2 rounded-md"
        style={{
          backgroundImage: bgImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="col-span-1">
          <img
            src={missionImage}
            alt="Mission"
            className="w-full h-auto max-w-[10rem] mx-auto"
          />
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-Avenir font-bold text-xl mb-5">OUR MISSION</h1>
            <p
              className="max-w-xs opacity-90 font-serif tracking-extra-wide"
              style={{ wordSpacing: "0.2rem" }}
            >
              Our mission is to continually improve the health of the
              communities by discovering and delivering compassionate and
              quality healthcare services through a team of dedicated and highly
              qualified professionals.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <img
            src={visionImage}
            alt="Vision"
            className="w-full h-auto max-w-[10rem] mx-auto"
          />
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-Avenir font-bold text-xl mb-5">OUR VISION</h1>
            <p
              className="max-w-xs opacity-90 font-serif tracking-extra-wide"
              style={{ wordSpacing: "0.2rem" }}
            >
              By following the standards of Vision 2030, we aspire to be one of
              the best providers of medical services in the Kingdom
              of Saudi Arabia.
            </p>
          </div>
        </div>
        <div className="md:col-span-2 col-span-1 flex-col justify-center">
          <img
            src={valuesImage}
            alt="Values"
            className="w-full h-auto max-w-[10rem] mx-auto"
          />
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-Avenir font-bold text-xl mb-5">OUR VALUES</h1>
            <div className="grid grid-cols-2 gap-24 sm:grid-cols-3">
              <ul className="list-disc list-inside p-4 rounded">
                <li className="text-xl font-semibold font-Avenir">
                  Compassion
                </li>
                <p className="h-auto max-w-sm mx-auto opacity-90 font-serif tracking-extra-wide">
                  We believe that a large part of our patients treatment lies in
                  our personal participation throughout their medical journey
                  from the beginning to the point of full recovery. We are
                  empathetic and believe that compassion is half the healing.
                </p>
                <br />
                <li className="text-xl font-Avenir font-semibold">
                  Patient-Centricity
                </li>{" "}
                <p className="h-auto max-w-sm mx-auto opacity-90 font-serif tracking-extra-wide">
                  We consider our patients to be the decision-makers in their
                  treatment journey, and our role is to guide them and give them
                  all the treatment options that are appropriate for every
                  condition. Our patients are at the core f the entire health
                  and care process.
                </p>
              </ul>
              <ul className="list-disc list-inside p-4 rounded">
                <li className="text-xl font-Avenir font-semibold">
                  Collaboration
                </li>{" "}
                <p className="h-auto max-w-sm mx-auto opacity-90 font-serif tracking-extra-wide">
                  We define collaboration as the ongoing process of working and
                  learning with everyone involved in our patient medical journey
                  in HIBA ASIA as ONE TEAM. The efforts of the medical and
                  administrative teams are combined with our patients family and
                  social environment, which represents an important element in
                  their lives, in order to achieve complete recovery while
                  ensuring that world-class standards are preserved throughout
                  all our services.
                </p>
                <br />
                <li className="text-xl font-Avenir font-semibold">
                  Innovation
                </li>
                <p className="h-auto max-w-sm mx-auto opacity-90 font-serif tracking-extra-wide">
                  Our constant commitment to developing our services is what
                  allows us to care for our patients and ease their suffering in
                  their integrated treatment journey in a professional and
                  efficient way. We constantly evaluate our services and we
                  believe that to remain at the top of our field, we preach
                  innovation at all levels.
                </p>
              </ul>
              <ul className="list-disc list-inside p-4 rounded">
                <li className="text-xl font-Avenir font-semibold">Integrity</li>
                <p className="h-auto max-w-sm mx-auto opacity-90 font-serif tracking-extra-wide">
                  We are honest, ethical and trustworthy. We shall always be
                  transparent and act morally upright, in our patients’ best
                  interest.
                </p>
                <br />
                <li className="text-xl font-Avenir font-semibold">Quality</li>
                <p className="h-auto max-w-sm mx-auto opacity-90 font-serif tracking-extra-wide">
                  We believe that everyone has the right to have the best chance
                  to live a healthy and active life. Thus, we at HIBA ASIA are
                  dedicated to offer our patients the highest global standards
                  and quality of medical services in healthcare.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
