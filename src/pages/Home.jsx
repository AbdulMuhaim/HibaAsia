import Departments from "../Components/Departments";
import { useNavigate } from "react-router-dom";
import Testimonials from "../Components/Testimonials";
import { useTranslation } from "react-i18next";
import AnimatedSection from "../Components/Animation";
import ResponsivePage from "../Components/ResponsivePage";
import { useEffect, useState } from "react";
import targeting from "../assets/targeting.png";
import customer from "../assets/customer.png";
import binoculars from "../assets/binoculars.png";
import InsuranceCarousel from "../Components/InsuranceCarousel";
import VideoPlayer from "../Components/VideoPlayer";
import NewsEvents from "../Components/News&EventsInHome";
import imageSrc from "../assets/RAHATKOM.png";
import Popup from "../Components/Popup";
import DoctorsListInHome from "../Components/DoctorsListInHome";
import president from "../assets/Founder-Chairman-1.jpg";
import online from "../assets/001.png";
import teleConsultation from "../assets/003.png";
import homeCare from "../assets/002.png";
import packages from "../assets/004.png";
import Services from "../Components/Services";
import img from "../assets/muh.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const presidentImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${president})`;
  const presidentImage2 = `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${img})`;

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    // Check if the popup has been seen in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    console.log("Checking session storage:", hasSeenPopup);
    if (!hasSeenPopup) {
      // Show the popup
      setIsPopupOpen(true);
      // Set the session storage item to mark the popup as seen
      sessionStorage.setItem("hasSeenPopup", "true");
    }

    // Function to clear the session storage on page unload
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("hasSeenPopup");
      console.log("Session storage cleared on page unload");
    };

    // Add the event listener for beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleClosePopup = () => {
    console.log("Popup closed.");
    setIsPopupOpen(false);
  };

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



  const cardData = [
    {
      image: online,
      title: "card1Title",
      description: "card1Description",
    },
    {
      image: homeCare,
      title: "card2Title",
      description: "card2Description",
    },
    {
      image: teleConsultation,
      title: "card3Title",
      description: "card3Description",
    },
    {
      image: packages,
      title: "card4Title",
      description: "card4Description",
    },
  ];

  return (
    <>

    <div className="relative">
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        imageSrc={imageSrc}
      />
      <div className={`${isPopupOpen ? "pointer-events-none" : ""}`}>
        <div>
          {/* header */}

          <div className="bg-[#e3e1e1] bg-opacity-90 py-5 shadow-2xl shadow-black flex justify-center flex-col xl:flex-row gap-7 px-6 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 w-full xl:w-auto">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="group bg-[#1e478e] pr-2 rounded-md h-[60px] flex  w-full xl:w-auto xl:justify-center items-center border-2 border-transparent transition-all duration-500 ease-in-out delay-75 hover:border-sky-700 hover:bg-sky-900"
                >
                  <div className="w-[20%]">
                    <div className="md:h-[85px] md:w-[85px] h-[60px] w-[60px] bg-[#1e478e] rounded-full overflow-hidden border-6 border-transparent transition-all duration-300 ease-in-out delay-75 group-hover:border-sky-900">
                      <img
                        src={card.image}
                        alt="Image 1"
                        className="h-full w-full object-cover bg-white p-1 sm:p-3 hover:scale-110 transition-all transform duration-300"
                      />
                    </div>
                  </div>

                  <div className={`w-[80%] flex xl:justify-end justify-center ${isArabic? "pl-7 ":"px-0"}`}>
                    <div className="flex-col xl:max-w-40">
                      <h2 className="text-white text-sm">{t(card.title)}</h2>
                      <p
                        className="text-white text-xs extra-thin opacity-90"
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


          <div className="mx-auto">
            <div className="flex flex-col xl:flex-row ">
              {/* Left Section */}
              <div
                className="flex-1 px-5 md:px-16 py-10 md:py-16 bg-gray-800 text-white shadow-lg flex items-end flex-col"
                // style={{
                //   backgroundImage: presidentImage,
                //   backgroundSize: "cover",
                //   backgroundPosition: "center",
                //   backgroundRepeat: "no-repeat",
                // }}
              >
                <div className="flex flex-col justify-center">
                  <div className="relative">

                <FontAwesomeIcon icon={faQuoteLeft} className="md:text-4xl text-3xl absolute -left-40 sm:-left-11 pr-3 font-bold text-white " />
                  <h2 className="md:text-3xl text-2xl font-bold mb-10 underline-custom">
                    <span className="uppercase">{t(`PRESIDENT'S`)} </span> 
                    <span className="font-normal uppercase ">{t("MESSAGE")}</span>
                  </h2>
                  </div>

                  <p
                    className="mb-5 text-sm opacity-90 max-w-[496px]"
                    style={{ lineHeight: "30px" }}
                  >
                    {t("presientMessage")}
                  </p>

                  <div className="flex items-center mb-4">
                    <img
                      src={president}
                      alt="Mohammed Vellengara"
                      className="w-[130px] h-[120px] rounded mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold mb-3">
                        {t('Abdullah Mohammed Vellengara')}
                      </h3>
                      <p>{t('President of Hiba Asia Group')}</p>
                    </div>
                  </div>
                  <div>
                  <button onClick={() => navigate('/about?section=president-message')} className="bg-transparent text-white hover:bg-white hover:text-[#1e478e] text-xs uppercase px-6 py-4 border-2 border-white rounded shadow-lg transition duration-700 ease-in-out overflow-hidden">
                    {t('readMoreButton')}
                  </button>
                  </div>

                </div>
              </div>

              {/* Right Section */}
              <div
                className="flex-1 md:px-16 py-16 px-5  shadow-lg flex items-start flex-col"
                style={{
                  backgroundImage: presidentImage2,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
              <div className="flex-1 ">
                <div>
                  <h2 className="text-3xl mb-10 underline-custom">
                    {t("best medical center")}
                  </h2>
                  <p
                    className="mb-16 text-sm opacity-70 max-w-[496px]"
                    style={{ lineHeight: "30px" }}
                  >
                    {t("best medical center description")}
                  </p>
                  <button onClick={() => navigate('/about')} className="bg-[#1e478e] text-white w-32 hover:bg-white hover:text-[#1e478e] text-xs uppercase px-6 py-4 border-2 border-[#1e478e] rounded shadow-lg transition duration-700 ease-in-out overflow-hidden">
                    {t("readMoreButton")}
                  </button>
                </div>
              </div>

              </div>
            </div>
          </div>


          <div className="py-28 flex flex-col bg-[#f4f4f4] md:flex-row justify-center items-center gap-20 ">
            {visionData.map((item, index) => (
              <div
                key={index}
                className="flex group flex-col  items-center gap-3 max-w-sm md:max-w-xs"
              >
                <div className="your-element bottom-5 relative border-2 border-[#1e478e] text-center flex justify-center items-center"></div>

                <div className="absolute">
                  <img src={item.src} className="w-10 h-10" alt={item.src} />
                </div>

                <div className="flex flex-col justify-center items-center gap-4">
                  <h1 className="opacity-85 font-semibold uppercase">
                    {t(item.title)}
                  </h1>
                  <p className="text-base text-gray-600 opacity-75 max-w-80 text-center mb-5">
                    {t(item.description)}...
                  </p>
                </div>

                <button
                  onClick={() => navigate("/vision")}
                  className="relative bg-white text-[#1e478e] text-xs uppercase px-6 py-4 border-2 border-[#1e478e] rounded shadow-lg transition duration-700 ease-in-out overflow-hidden"
                >
                  {t("readMoreButton")}
                  <button className="absolute top-0 left-0 uppercase text-xs w-full h-full text-center hover:text-[#1e478e] text-white bg-[#1e478e] transform transition-transform duration-700 hover:translate-x-full">
                    {t("readMoreButton")}
                  </button>
                </button>
              </div>
            ))}
          </div>

          <Services />

          <DoctorsListInHome />

          <Departments />

          <InsuranceCarousel />

          <VideoPlayer />

          {/* <Cards /> */}

          <Testimonials />

          <AnimatedSection />

          <NewsEvents />

          {/* <div className="mt-3 py-14 px-3">
        <h1 className=" text-3xl font-bold text-center text-[#1e478e]">
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
      </div>
    </div>
    </>

  );
}

export default Home;
