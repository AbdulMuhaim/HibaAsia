import Departments from "../Components/Departments";
import Cards from "../Components/Cards";
import visionImage from "../assets/Vision-Icon-Photoroom.png-Photoroom.png";
import missionImage from "../assets/Mission-Icon-Photoroom.png-Photoroom.png";
import valuesImage from "../assets/reputation-building-icon-line-illustration-vector-Photoroom.png-Photoroom.png";
import { useNavigate } from "react-router-dom";
import DrAswaq from "../assets/HibaDoctors/01. Dr. Aswaq.jpg";
import DrAzza from "../assets/HibaDoctors/02. Dr. Azza.jpg";
import DrSherifHelmy from "../assets/HibaDoctors/09. Dr. Sherif Helmy.jpg";
import DrMohammedAnwar from "../assets/HibaDoctors/08. Dr. Mohammed Anwar.jpg";
import DrSamad from "../assets/HibaDoctors/06. Dr. Samad.jpg";
import DrMajedMouris from "../assets/HibaDoctors/07. Dr. Majed Mouris.jpg";
import DrRashaMohamed from "../assets/HibaDoctors/11. Dr. Rasha Mohamed.jpg";
import Testimonials from "../Components/Testimonials";
import newBgImage from "../assets/friendly-man-doctor-s-hands-holding-male-patient-s-hand-encouragement-empathy.jpg";
import { FaNotesMedical } from "react-icons/fa";
import { GiMedicinePills } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { MdOutlineBloodtype } from "react-icons/md";
import hospitalImage from "../assets/Screenshot (128).png";
import { useTranslation } from "react-i18next";
import headerImage from "../assets/WhatsApp_Image_2024-05-14_at_23.42.18-removebg-preview.png";
import AnimatedSection from "../Components/Animation";

function Home() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const doctors = [
    {
      name: "Aswaq Ahmed",
      image: DrAswaq,
      department: "Obstetric & Gynecology",
    },
    {
      name: "Azza Hussein Ahmed",
      image: DrAzza,
      department: "Obstetric & Gynecology",
    },
    {
      name: "Mohamad Sherif Helmy",
      image: DrSherifHelmy,
      department: "Cardiology",
    },
    {
      name: "Muhammed Anwar",
      image: DrMohammedAnwar,
      department: "Pediatrics",
    },
    { name: "Majed Mouris", image: DrMajedMouris, department: "General Surgery" },
    { name: "Samad Moideen", image: DrSamad, department: "Orthopedic" },
    { name: "Rasha Mohamed", image: DrRashaMohamed, department: "Dermatology" },
  ];

  const visionData = [
    {
      src: visionImage,
      title: "homeVisionTitle",
      description:
        "homeVisionText",
    },
    {
      src: missionImage,
      title: "homeMissionTitle",
      description:
        "homeMissionText",
    },
    {
      src: valuesImage,
      title: "homeValuesTitle",
      description:
        "homeValuesText",
    },
  ];

  const services = [
    { text: "service1", icon: FaNotesMedical },
    { text: "service2", icon: GiMedicinePills },
    { text: "service3", icon: FaHandHoldingHeart },
    { text: "service4", icon: MdOutlineBloodtype },
  ];

  return (
    <div>
      {/* header */}
      <div
        className="h-screen bg-cover bg-no-repeat bg-blend-overlay bg-image"
        style={{
          backgroundImage: `url(${newBgImage})`,
        }}
      >
        <div className="flex flex-col h-full items-center justify-center gap-8 md:gap-14">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl text-sky-950 text-center">
            {t("welcome")}
          </h1>
          <p className="text-base font-medium md:text-lg 2xl:text-2xl px-3 sm:px-0 max-w-[27rem] sm:max-w-[30rem] md:max-w-[48rem] backdrop-blur-sm break-words text-center">
            {t("welcomeDescription")}
          </p>
          <button className="rounded-full bg-sky-800 px-5 py-3 md:text-base font-semibold 2xl:text-xl md:px-4 md:py-3 2xl:px-6 2xl:py-5  border-4 text-white transition duration-500 transform hover:bg-white  hover:text-black border-sky-800">
            {t("bookAppointment")}
          </button>

          <div className="flex flex-wrap w-full justify-evenly">
            {services.map((service, index) => (
              <div key={index}>
                <div className="rounded-full h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 2xl:h-32 2xl:w-32  bg-white flex items-center justify-center shadow-2xl outline-gray-300 outline-2 sm:outline-4 md:outline-6 lg:outline-8 transform transition-all duration-500 hover:-translate-y-2.5 hover:outline hover:outline-gray-300">
                  <service.icon className="text-2xl sm:text-3xl md:text-4xl" />
                </div>
                <p className="text-center opacity-80 font-bold mt-2 text-xs sm:text-sm xl:text-base 2xl:text-xl">
                  {t(service.text)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch text-center lg:min-h-[80vh]">
          <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between">
            <h1 className="2xl:text-5xl md:text-4xl text-3xl font-thin text-left text-sky-800">
              {t("hospitalImageTitle")}
            </h1>
            <p
              className="text-base font-medium md:text-lg 2xl:text-2xl opacity-70 max-w-[45rem] text-left leading-relaxed my-6"
              style={{ letterSpacing: "1px", wordSpacing: "3px" }}
            >
              {t("hospitalImageDescription")}
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              className={`w-full h-full object-cover ${
                isArabic ? "md:rounded-r-3xl" : "md:rounded-l-3xl"
              }`}
              src={hospitalImage}
              alt="Hospital Image"
            />
          </div>
        </div>
      </div>





      <div className="bg-slate-100 py-10 flex flex-col md:flex-row justify-evenly items-center mt-20">
        {visionData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 m-4 max-w-xs"
          >
            <img
              className="w-36 h-36 object-cover mb-4 rounded"
              src={item.src}
              alt={t(item.title)}
            />
            <h1 className="text-xl font-bold mb-2">{t(item.title)}</h1>
            <p className="text-base text-gray-600 opacity-75 mb-4 text-center">
              {t(item.description)}...
            </p>
            <button
              onClick={() => navigate("/vision")}
              className="relative bg-white text-sky-800 px-4 py-3 rounded shadow-lg transition duration-700 ease-in-out overflow-hidden"
            >
              {t('visionButtonText')}
              <button className="absolute top-0 left-0 w-full h-full text-center hover:text-sky-800 text-white bg-sky-800 transform transition-transform duration-700 hover:translate-x-full">
                {t('visionButtonText')}
              </button>
            </button>
          </div>
        ))}
      </div>

      <Cards />

      <Departments />

      <div className="mt-3 py-14 px-3">
        <h1 className="text-3xl font-bold text-center text-sky-800">
          Our Doctors
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 mt-10">
          {doctors.map((doctor, index) => (
            <div key={index} className="perspective-1000">
              <div className="relative h-[20rem] text-center transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                {/* card front side */}
                <div className="absolute w-full h-full shadow-xl rounded-lg py-3 border bg-slate-50 backface-hidden  flex flex-col items-center justify-center">
                  <div className="flex justify-center items-center">
                    <img
                      src={doctor.image}
                      alt=""
                      className="w-full h-full max-w-[11rem] object-contain rounded-3xl"
                    />
                  </div>
                  <div className="mt-2">
                    <h2 className="font-semibold mt-2">{t('Dr')} {t(doctor.name)}</h2>
                    <p className="text-gray-600 text-sm mt-2">
                      {t(doctor.department)}
                    </p>
                  </div>
                </div>

                {/* card backside */}
                <div className="absolute w-full h-full shadow-inner bg-gradient-to-br from-sky-200 to-white border rounded-lg p-5 backface-hidden transform rotate-y-180 flex flex-col items-center justify-center text-white">
                  <div className="flex items-center justify-center">
                    <div className="w-full h-[90%] flex justify-center items-center">
                      <img
                        src={doctor.image}
                        alt=""
                        className="w-full h-full max-w-[15rem] object-contain rounded-3xl mr-2"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="font-semibold mt-2 text-black">
                      {t('Dr')} {t(doctor.name)}                      </h2>
                      <p className="text-gray-600 mt-2 text-sm">
                      {t(doctor.department)}
                      </p>
                      <button className="bg-sky-800 text-white text-sm rounded-full px-3 py-2 mt-4">
                        {t('Connect')}
                      </button>
                      <div className="text-black flex justify-center items-center mr-1 mt-5 w-full">
                    <img src={headerImage} alt="" className="max-w-[6rem]"/>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="h-[20rem] flex items-center justify-center bg-slate-50 rounded-lg">
            <button
              onClick={() => navigate("/doctors")}
              className="rounded-full bg-white px-5 font-semibold transition-transform hover:scale-105 py-2 border-4 border-sky-800"
            >
              {t('View All')}
            </button>
          </div>
        </div>
      </div>


      <Testimonials />

      <AnimatedSection/>


      <div className="mt-3 py-14 px-3">
        <h1 className=" text-3xl font-bold text-center text-sky-800">
          {t('newseventsTitle')}
        </h1>

        {/* YouTube Video 1 */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 pt-8">
          <div className="flex items-center justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GB-KWIsuSM0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          {/* YouTube Video 2 */}
          <div className="flex items-center justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lId6H20rWrc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* text area*/}
      {/* <div className="flex flex-col-reverse md:flex-row justify-between items-center p-10 bg-slate-100 gap-14 md:gap-0 md:h-screen">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-medium font-serif text-center md:text-left">
            Our team of experts provides top-notch medical treatment with
            empathy using the most advanced technology.
          </h1>
        </div>

        <div className="w-full md:w-1/2 flex gap-5 justify-center items-center mb-5 md:mb-0 order-1 md:order-2">
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              1300+ <br />
              <span className="text-base font-normal">Bed Capacity</span>
            </h1>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              10M <br />
              <span className="text-base font-normal">Current Customers</span>
            </h1>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              128+ <br />
              <span className="text-base font-normal">Medical Apparatus</span>
            </h1>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
