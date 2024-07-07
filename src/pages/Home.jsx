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
import { FaHandHolding, FaNotesMedical, FaTree } from "react-icons/fa";
import { GiMedicinePills } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { MdOutlineBloodtype } from "react-icons/md";
import hospitalImage from "../assets/Screenshot (128).png";
import { useTranslation } from "react-i18next";
import headerImage from "../assets/WhatsApp_Image_2024-05-14_at_23.42.18-removebg-preview.png";
import AnimatedSection from "../Components/Animation";
import visionBgImage1 from "../assets/1000_F_596371844_8MVoHepLoFmuVNpBdfA3bCRfJUrYRfEF.jpg";
import srvs1 from "../assets/10976_prev_ui.png";
import srvs2 from "../assets/elderly-care-home-6052789-4998284.webp";
import srvs3 from "../assets/3959915_prev_ui.png";
import srvs4 from "../assets/5183184_prev_ui.png";
import Curousel2 from "../Components/Curoussel";
import ResponsivePage from "../Components/ResponsivePage";
import { GiPalmTree } from "react-icons/gi";
import { PiLeafLight } from "react-icons/pi";
import { FaHandHoldingMedical } from "react-icons/fa";
import React from "react";
import targeting from "../assets/targeting.png"
import customer from "../assets/customer.png"
import binoculars from "../assets/binoculars.png"
import Services from "../Components/Services";
import InsuranceCarousel from "../Components/InsuranceCarousel";
import VideoPlayer from "../Components/VideoPlayer";
import NewsEvents from "../Components/News&Events";

function Home() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const visionBgImage = `url(${visionBgImage1}), linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`;
  const presidentImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://img.freepik.com/free-photo/portrait-adult-male-doing-remote-work_23-2148499629.jpg?t=st=1720029479~exp=1720033079~hmac=9cb9a0a2a2b6df4a2396a82c5448eae17df68ac1b226df5e9f84e19b1587b01e&w=1060')`;


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
    {
      name: "Majed Mouris",
      image: DrMajedMouris,
      department: "General Surgery",
    },
    { name: "Samad Moideen", image: DrSamad, department: "Orthopedic" },
    { name: "Rasha Mohamed", image: DrRashaMohamed, department: "Dermatology" },
  ];

  const visionData = [
    {
      src: binoculars,
      title: "homeVisionTitle",
      description: "homeVisionText",
    },
    {
      src: targeting,
      title: "homeMissionTitle",
      description: "homeMissionText",
    },
    {
      src: customer,
      title: "homeValuesTitle",
      description: "homeValuesText",
    },
  ];

  const services = [
    { text: "service1", icon: FaNotesMedical },
    { text: "service2", icon: GiMedicinePills },
    { text: "service3", icon: FaHandHoldingHeart },
    { text: "service4", icon: MdOutlineBloodtype },
  ];

  const cardData = [
    {
      image: "https://www.abeergroup.com/ksa/images/Walkin.jpg",
      title: "card1Title",
      description: "card1Description",
    },
    {
      image: "https://www.abeergroup.com/ksa/images/home-care.jpg",
      title: "card2Title",
      description: "card2Description",
    },
    {
      image: "https://www.abeergroup.com/ksa/images/Virtual.jpg",
      title: "card3Title",
      description: "card3Description",
    },
    {
      image: "https://www.abeergroup.com/ksa/images/patient-portal.png",
      title: "card4Title",
      description: "card4Description",
    },
  ];

  return (
    <div>
      {/* header */}

      <div className="bg-[#e3e1e1] bg-opacity-90 py-5 flex justify-center flex-col xl:flex-row gap-7 px-10 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full xl:w-auto">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group bg-sky-800 pr-2 rounded-md h-[65px] flex gap-2 w-full xl:w-auto xl:justify-center items-center border-2 border-transparent transition-all duration-500 ease-in-out delay-100 hover:border-sky-700 hover:bg-sky-900"
            >
              <div className="w-[20%]">
                <div className="h-[80px] w-[80px] rounded-full bg-sky-800 overflow-hidden border-6 border-transparent transition-all duration-300 ease-in-out delay-100 group-hover:border-sky-900">
                  <img
                    src={card.image}
                    alt="Image 1"
                    className="h-full w-full object-cover bg-white"
                  />
                </div>
              </div>

              <div className="w-[80%] flex xl:justify-end justify-center">
                <div className="flex-col xl:max-w-40">
                  <h2 className="text-white text-sm">{t(card.title)}</h2>
                  <p
                    className="text-white text-xs  extra-thin opacity-90 "
                    style={{ fontSize: "11px" }}
                  >
                    {t(card.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ResponsivePage />

      {/* <div
        className="h-screen bg-cover bg-no-repeat bg-blend-overlay bg-image"
        style={{
          backgroundImage: `url(${newBgImage})`,
        }}
      >
        <div className="flex flex-col h-full items-center justify-center gap-8 md:gap-14">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl text-sky-800 text-center">
            {t("welcome")}
          </h1>
          <p className="text-base font-medium opacity-75 md:text-lg 2xl:text-2xl px-3 sm:px-0 max-w-[27rem] sm:max-w-[30rem] md:max-w-[48rem] backdrop-blur-sm break-words text-center">
            {t("welcomeDescription")}
          </p>
          <button className="rounded-full bg-sky-800 px-5 py-3 md:text-base font-semibold 2xl:text-xl md:px-4 md:py-3 2xl:px-6 2xl:py-5  border-4 text-white transition duration-500 transform hover:bg-white  hover:text-black border-sky-800">
            {t("bookAppointment")}
          </button>

          <div className="flex flex-wrap w-full justify-evenly">
            {services.map((service, index) => (
              <div key={index}>
                <div className="rounded-full h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 2xl:h-32 2xl:w-32  bg-white flex items-center justify-center shadow-2xl outline-gray-300 outline-2 sm:outline-4 md:outline-6 lg:outline-8 transform transition-all duration-500 hover:-translate-y-2.5 hover:outline hover:outline-gray-300">
                  <service.icon className="text-2xl text-sky-800 sm:text-3xl md:text-4xl" />
                </div>
                <p className="text-center opacity-75 font-bold mt-2 text-xs sm:text-sm xl:text-base 2xl:text-xl">
                  {t(service.text)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="mx-auto ">
        <div className="flex flex-col md:flex-row ">
          {/* Left Section */}
          <div className="flex-1 bg-white px-16 shadow-lg py-16 flex items-end flex-col">
            <div>
            <h2 className="text-3xl mb-10 underline-custom">
              The Best Medical Center for You
            </h2>
            <p className="mb-6 text-sm opacity-70 max-w-[30rem]"style={{lineHeight:"30px"}}>
              Hiba Asia Medical Group is a healthcare organization well known
              for quality and affordable healthcare. The healthcare company owns
              and operates a chain of medical centers, hospitals, pharmacies and
              optical outlets across the major cities in Saudi Arabia. Abeer
              established at Sharafiyah in Jeddah in 1999 is catering to the
              healthcare needs of nearly 4 million patients every year. The
              healthcare company is keen on providing patient care of
              exceptional standards through its best-in-class hospitals and
              medical centers featuring advanced medical technology and
              modernized care-giving methods...
            </p>
            <button className="bg-sky-800 text-white w-32 hover:bg-white hover:text-sky-800 text-xs uppercase px-6 py-4 border-2 border-sky-800 rounded shadow-lg transition duration-700 ease-in-out overflow-hidden">
              READ MORE
            </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 bg-gray-800 text-white px-16 py-16 shadow-lg flex items-start flex-col" 
            style={{
              backgroundImage: presidentImage,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
            <div>
            <h2 className="text-3xl font-bold mb-10 underline-custom">
              PRESIDENT'S <span className="font-normal">MESSAGE</span>
            </h2>
            <p className="mb-7 text-sm opacity-90 max-w-[30rem]"style={{lineHeight:"30px"}}>
              Thank you for visiting us. With utmost pleasure, I welcome you to
              feel Hiba Asia's cordial care-giving. In my view, the actual growth of
              healthcare industry should never be understood in terms of the
              mushrooming of healthcare institutions. It has to be rather on the
              basis of increasing awareness on the ways to enhance...
            </p>
            <div className="flex items-center mb-8">
              <img
                src="https://img.freepik.com/free-photo/portrait-smiley-business-man_23-2148514859.jpg?t=st=1720028100~exp=1720031700~hmac=3af07f6a0ce5f7b4b7e4b9011d0f65746a7f775f190806a3ea584ea6c76f6a81&w=900"
                alt="Alungal Mohamed"
                className="w-24 h-20 rounded mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-3">Mr. Abdullah Mohammed Vellengara</h3>
                <p>President of Hiba Asia Group</p>
              </div>
            </div>
            <button className="bg-transparent text-white hover:bg-white hover:text-sky-800 text-xs uppercase px-6 py-4 border-2 border-white rounded shadow-lg transition duration-700 ease-in-out overflow-hidden">
              READ MORE
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch text-center lg:min-h-[80vh]">
          <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between">
            <h1 className="2xl:text-5xl md:text-4xl text-3xl font- text-left text-sky-800">
              {t("hospitalImageTitle")}
            </h1>
            <p
              className="text-base md:text-lg 2xl:text-2xl opacity-75 max-w-[45rem] text-left leading-relaxed my-6"
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
      </div> */}

      <div className="py-28 flex flex-col bg-[#f4f4f4] md:flex-row justify-center items-center gap-20">
        {visionData.map((item, index) => (
          <div
            key={index}
            className="flex group flex-col  items-center gap-3 max-w-xs"
          >
            <div className="your-element bottom-5 relative border-2 border-sky-900 text-center flex justify-center items-center"></div>

            <div className="absolute">
              {/* {React.createElement(item.src, {
                className: "text-4xl text-sky-800",
              })} */}
              <img src={item.src} className="w-10 h-10" alt={item.src} />
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="opacity-85 font-semibold uppercase">
                {t(item.title)}
              </h1>
              <p className="text-base text-gray-600 opacity-75 text-center mb-5">
                {t(item.description)}...
              </p>
            </div>

            <button
              onClick={() => navigate("/vision")}
              className="relative bg-white text-sky-800 text-xs uppercase px-6 py-4 border-2 border-sky-800 rounded shadow-lg transition duration-700 ease-in-out overflow-hidden"
            >
              {t("visionButtonText")}
              <button className="absolute top-0 left-0 uppercase text-xs w-full h-full text-center hover:text-sky-800 text-white bg-sky-800 transform transition-transform duration-700 hover:translate-x-full">
                {t("visionButtonText")}
              </button>
            </button>
          </div>
        ))}
      </div>

      <Services />

      <Departments />


      <InsuranceCarousel />

        <VideoPlayer/>

      {/* <Cards />


      {/* <div className="mt-3 py-14 px-3">
        <h1 className="text-3xl font-bold text-center text-sky-800">
          Our Doctors
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 mt-10">
          {doctors.map((doctor, index) => (
            <div key={index} className="perspective-1000">
              <div className="relative h-[20rem] text-center transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                card front side
                <div className="absolute w-full h-full shadow-xl rounded-lg py-3 border bg-slate-50 backface-hidden  flex flex-col items-center justify-center">
                  <div className="flex justify-center items-center">
                    <img
                      src={doctor.image}
                      alt=""
                      className="w-full h-full max-w-[11rem] object-contain rounded-3xl"
                    />
                  </div>
                  <div className="mt-2">
                    <h2 className="font-semibold mt-2">
                      {t("Dr")} {t(doctor.name)}
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">
                      {t(doctor.department)}
                    </p>
                  </div>
                </div>

                card backside
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
                        {t("Dr")} {t(doctor.name)}{" "}
                      </h2>
                      <p className="text-gray-600 mt-2 text-sm">
                        {t(doctor.department)}
                      </p>
                      <button className="bg-sky-800 text-white text-sm rounded-full px-3 py-2 mt-4">
                        {t("Connect")}
                      </button>
                      <div className="text-black flex justify-center items-center mr-1 mt-5 w-full">
                        <img
                          src={headerImage}
                          alt=""
                          className="max-w-[6rem]"
                        />
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
              {t("View All")}
            </button>
          </div>
        </div>
      </div> */}

      <Testimonials />

      <AnimatedSection />


      <NewsEvents/>


      {/* <div className="mt-3 py-14 px-3">
        <h1 className=" text-3xl font-bold text-center text-sky-800">
          {t("newseventsTitle")}
        </h1>

        YouTube Video 1
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
          YouTube Video 2
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
      </div> */}

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
