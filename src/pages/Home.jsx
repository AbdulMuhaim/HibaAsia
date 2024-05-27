import Button from "../Components/Button";
import Curoussel from "../Components/Curousel2";
import headerImage from "../assets/WhatsApp_Image_2024-05-14_at_23.42.18-removebg-preview.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import serviceImg1 from "../assets/Walkin.jpg";
import serviceImg2 from "../assets/patient-portal.png";
import serviceImg3 from "../assets/Virtual.jpg";
import serviceImg4 from "../assets/home-care.jpg";
// import bannerImg from "../assets/young-handsome-physician-medical-robe-with-stethoscope.jpg";
// import bannerImg2 from "../assets/covid-coronavirus-disease-healthcare-workers-concept-closeup-confident-female-asian-physician-doc (1).jpg";
import blob from "../assets/blob.svg";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import smilingDoctor from "../assets/file.png";
import backgroundImage from '../assets/rm209-ning-19.jpg';
import visionBgImage from '../assets/Vision&Mission.jpg'

import {
  FaTiktok,
  FaSnapchatGhost,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaMapLocationDot, FaXTwitter } from "react-icons/fa6";
import whatsappLogo from "../assets/WhatsApp.svg.png";
import aboutImage2 from "../assets/file (2).png";
import Cards from "../Components/Cards";
import srvs1 from "../assets/10976_prev_ui.png";
import srvs2 from "../assets/elderly-care-home-6052789-4998284.webp";
import srvs3 from "../assets/3959915_prev_ui.png";
import srvs4 from "../assets/5183184_prev_ui.png";
import blobImage from "../assets/smiling-little-boy-in-medical-uniform-and-eyeglass-2023-11-27-05-22-22-utc-Photoroom.png-Photoroom.png";
import visionImage from "../assets/Vision-Icon-Photoroom.png-Photoroom.png";
import missionImage from "../assets/Mission-Icon-Photoroom.png-Photoroom.png";
import valuesImage from "../assets/reputation-building-icon-line-illustration-vector-Photoroom.png-Photoroom.png";
import DrAswaq from "../assets/HibaDoctors/01. Dr. Aswaq.jpg";
import DrAzza from "../assets/HibaDoctors/02. Dr. Azza.jpg";
import DrRamadan from "../assets/HibaDoctors/03. Dr. Ramadan.jpg";
import DrHussam from "../assets/HibaDoctors/04. Dr. Hussam.jpg";
import DrShahin from "../assets/HibaDoctors/05. Dr. Shahin.jpg";
import DrSamad from "../assets/HibaDoctors/06. Dr. Samad.jpg";
import DrMajedMouris from "../assets/HibaDoctors/07. Dr. Majed Mouris.jpg";
import DrMohammedAnwar from "../assets/HibaDoctors/08. Dr. Mohammed Anwar.jpg";
import DrSherifHelmy from "../assets/HibaDoctors/09. Dr. Sherif Helmy.jpg";
import DrTaha from "../assets/HibaDoctors/10. Dr. Taha.jpg";
import DrRashaMohamed from "../assets/HibaDoctors/11. Dr. Rasha Mohamed.jpg";
import DrShukoor from "../assets/HibaDoctors/12. Dr. Shukoor.jpg";
import DrMurtaza from "../assets/HibaDoctors/13. Dr. Murtaza.jpg";
import DrJavedIqbal from "../assets/HibaDoctors/14. Dr. Javed Iqbal.jpg";
import DrBahaIbrahim from "../assets/HibaDoctors/15. Dr. Baha Ibrahim.jpg";
import DrFathimathuZuhra from "../assets/HibaDoctors/16. Dr. Fathimathu Zuhra.jpg";
import DrAminaKhan from "../assets/HibaDoctors/17. Dr. Amina Khan.jpg";
import DrKhaleel from "../assets/HibaDoctors/18. Dr. Khaleel.jpg";
import DrIramQadirReshi from "../assets/HibaDoctors/19. Dr. Iram Qadir Reshi.jpg";
import DrAbdirizak from "../assets/HibaDoctors/20. Dr. Abdirizak.jpg";
import DrKatherIbrahim from "../assets/HibaDoctors/21. dr. Kather Ibrahim.jpg";
import DrAbdullahBayazeed from "../assets/HibaDoctors/22. Dr. Abdullah Bayazeed.jpg";
import DrAbdulAzeezalZahrani from "../assets/HibaDoctors/23. Dr. Abdul Azeez al Zahrani.jpg";
import DrShahadBinMahfouz from "../assets/HibaDoctors/24. Dr. Shahad Bin Mahfouz.jpg";
import DrNoufQasem from "../assets/HibaDoctors/25. Dr. Nouf Qasem.jpg";
import DrJensonJohn from "../assets/HibaDoctors/26. Dr. Jenson John.jpg";
import DrLintuMol from "../assets/HibaDoctors/27. Dr. Lintu Mol.jpg";
import DrMaryamAhmed from "../assets/HibaDoctors/28. Dr. Maryam Ahmed.jpg";
import DrSamahObaid from "../assets/HibaDoctors/29. Dr. Samah Obaid.jpg";

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showDepartmentsDropdown, setShowDepartmentsDropdown] = useState(false);
  const [showOffersDropdown, setShowOffersDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const bgImage = `url(${visionBgImage}), linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))`;


  useEffect(() => {
    // Function to check screen size and update mobileMenu state
    const checkScreenSize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setMobileMenu(true);
      } else {
        setMobileMenu(false);
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  const hoverStyle = {
    backgroundColor: "#0013e0", // Change color on hover (example: gold)
    transform: "scale(1.05)", // Scale up by 5% on hover
    color: "white",
  };

  const doctors = [
    {
      name: "Aswaq Ahmed",
      image: DrAswaq,
      department: "Obstetrics & Gynecology",
    },
    {
      name: "Azza Hussein Ahmed",
      image: DrAzza,
      department: "Obstetrics & Gynecology",
    },
    { name: "Mohammed Ramadan Ahmad", image: DrRamadan, department: "Urology" },
    { name: "Hussam Alagha", image: DrHussam, department: "Internist" },
    { name: "Mahmoud Shahin", image: DrShahin, department: "ENT Specialist" },
    { name: "Samad Moideen", image: DrSamad, department: "Orthopedics" },
    { name: "Majed Mouris", image: DrMajedMouris, department: "Surgeon" },
    {
      name: "Muhammed Anwar",
      image: DrMohammedAnwar,
      department: "Pediatrician",
    },
    {
      name: "Mohamad Sherif Helmy",
      image: DrSherifHelmy,
      department: "Cardiologist",
    },
    { name: "Taha Abouelenin", image: DrTaha, department: "Ophthalmology" },
    { name: "Rasha Mohamed", image: DrRashaMohamed, department: "Dermatology" },
    { name: "Shukoor", image: DrShukoor, department: "Radiologist" },
    {
      name: "Murtaza Bakhsh",
      image: DrMurtaza,
      department: "General Physician",
    },
    {
      name: "Javed Iqbal",
      image: DrJavedIqbal,
      department: "General Physician",
    },
    {
      name: "Baha Ibrahim",
      image: DrBahaIbrahim,
      department: "General Physician",
    },
    {
      name: "Fathimathu Zuhra",
      image: DrFathimathuZuhra,
      department: "General Physician",
    },
    {
      name: "Amina Khan Shafi",
      image: DrAminaKhan,
      department: "General Physician",
    },
    { name: "Khaleel", image: DrKhaleel, department: "General Physician" },
    {
      name: "Iram Qadir Reshi",
      image: DrIramQadirReshi,
      department: "General Physician",
    },
    {
      name: "Kather Ibrahim",
      image: DrKatherIbrahim,
      department: "General Physician",
    },
    {
      name: "Abdullah Bayazeed",
      image: DrAbdullahBayazeed,
      department: "Orthodontist",
    },
    {
      name: "Abdul Aziz AlZahrani",
      image: DrAbdulAzeezalZahrani,
      department: "Dentist",
    },
    {
      name: "Shahad Bin Mehfouz",
      image: DrShahadBinMahfouz,
      department: "Dentist",
    },
    { name: "Nouf Qasem Mohammed", image: DrNoufQasem, department: "Dentist" },
    { name: "Jenson John", image: DrJensonJohn, department: "Dentist" },
    { name: "Lintu Mol", image: DrLintuMol, department: "Dentist" },
    { name: "Maryam Ahmed", image: DrMaryamAhmed, department: "Dentist" },
    { name: "Samah Obaid", image: DrSamahObaid, department: "Dentist" },
  ];

  const serviceImages = [
    {
      image: serviceImg1,
      title: "Online Appointments",
      description: "Visit Our Center For Consultation",
    },
    {
      image: serviceImg4,
      title: "Hiba Home Care",
      description: "A Complete Medical Care at Your Home",
    },
    {
      image: serviceImg3,
      title: "Tele Consultation",
      description: "Consultation through Video Conference",
    },
    {
      image: serviceImg2,
      title: "Service & Packages",
      description: "View and purchase services & packages",
    },
  ];

  const socialMediaItems = [
    { icon: RiInstagramFill, label: "Instagram" },
    { icon: FaTiktok, label: "Tiktok" },
    { icon: FaSnapchatGhost, label: "Snapchat" },
    { icon: FaFacebookF, label: "Facebook" },
    { icon: FaLinkedinIn, label: "LinkedinIn" },
    { icon: FaXTwitter, label: "XTwitter" },
    { icon: FaYoutube, label: "Youtube" },
  ];

  const cardData = [
    {
      image: srvs3,
      title: "Online Appointments",
      description: "Visit Our Center For Consultation",
    },
    {
      image: srvs2,
      title: "Hiba Home Care",
      description: "A Complete Medical Care at Your Home",
    },
    {
      image: srvs4,
      title: "Tele Consultation",
      description: "Consultation through Video Conference",
    },
    {
      image: srvs1,
      title: "Service & Packages",
      description: "View and purchase services & packages",
    },
  ];

  return (
    <div>
      {/* header */}
      <div
        className="bg-gradient-to-b from-white to-sky-200 h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", // ensures the image covers the entire div
          backgroundRepeat: "no-repeat", // prevents the image from repeating
          backgroundBlendMode: "overlay", // blend the gradient and image
        }}
      >
        {" "}
        <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-5">
          <div className="w-1/5 md:w-auto flex-col justify-center items-center px-5 py-1 mt-2">
            <div className="flex items-center justify-center">
              <img
                src={headerImage}
                alt=""
                className="md:p-0 md:my-2 min-h-[4rem] max-h-[5rem] mx-auto md:mx-0 "
              />
            </div>
          </div>

          {/* options bar under header */}
          {mobileMenu ? (
            <div className="p-2">
              <RxHamburgerMenu
                size={22}
                className="border-2 border-black cursor-pointer"
              />
            </div>
          ) : (
            // pages list
            <div
              className="w-4/5 h-16 flex justify-between items-center px-5"
              style={{ fontFamily: "Avenir Next or Sofia Pro" }}
            >
              <div>
                <h1 className="font-bold text-medium xl:text-lg opacity-60 cursor-pointer transition-opacity duration-300 hover:opacity-100">
                  Home
                </h1>
              </div>

              <div>
                <h1 className="font-bold text-medium xl:text-lg opacity-60 cursor-pointer transition-opacity duration-300 hover:opacity-100">
                  About Us
                </h1>
              </div>

              <div className="relative">
                <h1
                  className="font-bold text-medium xl:text-lg opacity-60 cursor-pointer transition-opacity duration-300 hover:opacity-100"
                  onMouseEnter={() => setShowDepartmentsDropdown(true)}
                  onMouseLeave={() => setShowDepartmentsDropdown(false)}
                >
                  Departments
                </h1>
                <div
                  className={`absolute z-10 bg-white rounded-lg text-center py-4 border-2 w-36 ${
                    showDepartmentsDropdown ? "block" : "hidden"
                  }`}
                >
                  <ul>
                    <li className="mb-2">Option 1</li>
                    <li className="mb-2">Option 2</li>
                    <li className="mb-2">Option 3</li>
                    <li className="mb-2">Option 4</li>
                    <li className="mb-2">Option 5</li>
                    <li className="mb-2">Option 6</li>
                  </ul>
                </div>
              </div>

              {/* <div className="relative">
            <h1 className="font-bold text-medium xl:text-lg opacity-60 cursor-pointer transition-opacity duration-300 hover:opacity-100">
              Blog
            </h1>
          </div> */}

              <div className="relative">
                <h1
                  className="font-bold text-medium xl:text-lg opacity-60 cursor-pointer transition-opacity duration-300 hover:opacity-100"
                  onMouseEnter={() => setShowServicesDropdown(true)}
                  onMouseLeave={() => setShowServicesDropdown(false)}
                >
                  Services
                </h1>
                <div
                  className={`absolute z-10 bg-white rounded-lg text-center py-4 border-2 w-36 ${
                    showServicesDropdown ? "block" : "hidden"
                  }`}
                >
                  <ul>
                    <li className="mb-2">Option 1</li>
                    <li className="mb-2">Option 2</li>
                    <li className="mb-2">Option 3</li>
                    <li className="mb-2">Option 4</li>
                    <li className="mb-2">Option 5</li>
                    <li className="mb-2">Option 6</li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <h1
                  className="font-bold text-medium xl:text-lg opacity-60 cursor-pointer transition-opacity duration-300 hover:opacity-100"
                  onMouseEnter={() => setShowOffersDropdown(true)}
                  onMouseLeave={() => setShowOffersDropdown(false)}
                >
                  Special Offers
                </h1>
                <div
                  className={`absolute z-10 bg-white rounded-lg text-center py-4 border-2 w-36 ${
                    showOffersDropdown ? "block" : "hidden"
                  }`}
                >
                  <ul>
                    <li className="mb-2">Option 1</li>
                    <li className="mb-2">Option 2</li>
                    <li className="mb-2">Option 3</li>
                    <li className="mb-2">Option 4</li>
                    <li className="mb-2">Option 5</li>
                    <li className="mb-2">Option 6</li>
                  </ul>
                </div>
              </div>

              {/* <div>
            <h1 className="font-bold text-medium xl:text-lg opacity-60 cursor-pointer transition-opacity duration-300 hover:opacity-100">
              News
            </h1>
          </div> */}

              <div>
                <h1 className="font-bold text-medium xl:text-lg opacity-60 cursor-pointer transition-opacity duration-300 hover:opacity-100">
                  Careers
                </h1>
              </div>

              <div>
                <h1 className="font-bold text-medium xl:text-lg opacity-60 cursor-pointer transition-opacity duration-300 hover:opacity-100">
                  Contact Us
                </h1>
              </div>
            </div>
          )}
          {/* options bar under header closed*/}

          <div className="flex absolute right-7 top-28 justify-between items-center w-full md:w-auto mt-4 md:mt-0 mb-4 md:mb-0">
            <div className="flex items-center justify-between w-full md:w-auto md:mb-0">
              <div className="switch">
                <input
                  id="language-toggle"
                  className="check-toggle check-toggle-round-flat"
                  type="checkbox"
                />
                <label htmlFor="language-toggle" className="!h-10"></label>
                <span className="on">EN</span>
                <span className="off">AR</span>
              </div>
            </div>
          </div>
        </div>
        {/* header closed */}
        {/* banner */}
        <div className="flex">
          <div className="w-1/2 flex justify-center items-center">
            <div className="px-10 h-full">
              <div className="flex flex-col items-center justify-center text-center pl-20 h-4/5">
                <h1 className="font-Avenir 2xl:text-6xl xl:text-4xl min-w-[20rem] font-bold mb-2 whitespace-nowrap">
                  INSPIRING BETTER HEALTH
                </h1>
                <p className="2xl:text-lg font-medium opacity-75 font-serif">
                  Discover a new standard of healthcare excellence at Hiba Asia.
                  We combine advanced medical technology with compassionate care
                  to ensure the best possible outcomes for our patients.
                </p>
                <button
                  onClick={handleButtonClick}
                  className="bg-teal-700 mt-10  text-white xl:text-lg lg:px-6 lg:py-5 md:px-3 md:py-4 py-2 px-3 rounded-3xl font-bold transition duration-500 transform hover:bg-teal-800 hover:scale-105"
                >
                  Book an Appointment
                </button>
              </div>

              {/* <div className="h-1/5 flex items-center">
                <div className="flex gap-7 ">
                  <h1 className="font-semibold text-xl font-sans opacity-70 ">
                    <FaMapLocationDot color="black" size={40} />
                  </h1>
                  <button className="rounded-full  border-teal-700 h-9 border-x-8 bg-white px-5">
                    KSA
                  </button>
                  <button className="rounded-full  border-teal-700 h-9 border-x-8 bg-white px-5">
                    UAE
                  </button>
                  <button className="rounded-full  border-teal-700 h-9 border-x-8 bg-white px-5">
                    OMAN
                  </button>
                  <button className="rounded-full  border-teal-700 h-9 border-x-8 bg-white px-5">
                    BAHRAIN
                  </button>
                </div>
              </div> */}

              <div className="flex items-center gap-3 2xl:gap-10 pl-14">
                <a
                  className="flex items-center gap-2"
                  href="tel:+9660545961777"
                >
                  <button className="bg-white text-black p-2  border-teal-600 border-4 xl:text-lg rounded-full transition duration-300 transform">
                    <IoIosCall size={30} />
                  </button>
                  <div>
                    <p className="font-medium text-lg opacity-70">Talk to Us</p>
                    <p className="font-Avenir opacity-90">0545961777</p>
                  </div>
                </a>

                <a
                  className="flex items-center gap-2"
                  href="mailto:info@hibaasia.care"
                >
                  <button className="bg-white text-black border-teal-600 border-4 p-2 xl:text-lg rounded-full font-bold transition duration-300 transform">
                    <MdEmail size={30} />{" "}
                  </button>
                  <div>
                    <p className="font-medium opacity-70 text-lg ">
                      Write to Us
                    </p>
                    <p className="font-Avenir opacity-90">info@hibaasia.care</p>
                  </div>
                </a>
                <div className="flex gap-2">
                  <h1 className="font-semibold text-xl opacity-70 mr-1">
                    <FaMapLocationDot color="black" size={40} />
                  </h1>
                  <button className="rounded-full font-Avenir font-semibold border-y-2 border-teal-700 h-auto border-x-8 bg-white px-5 whitespace-nowrap">
                    Al Zahra
                  </button>
                  <button className="rounded-full font-Avenir font-semibold border-y-2 border-teal-700 h-auto border-x-8 bg-white px-5 whitespace-nowrap">
                    Al Wazeriyah
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 overflow-hidden">
            <img
              src={smilingDoctor}
              className="w-full h-full object-cover overflow-hidden"
              alt="Smiling Doctor"
            />
          </div>

          {/* banner closed*/}

          {/* whatsapp */}
          <div className="fixed z-20 p-3 flex items-center justify-center rounded-full left-4 sm:left-10 xl:bottom-[25vh] lg:bottom-[20vh] 2xl:bottom-[35vh] bg-[#2C9542] animate-pulse-border">
            <a
              href="https://api.whatsapp.com/send?phone=9660545961777"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsappLogo}
                className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16"
                alt="WhatsApp Logo"
              />
            </a>
          </div>
          {/* whatsapp closed*/}

          {/* social medias */}
          <ul>
            {socialMediaItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <li
                  key={index}
                  className={`group w-32 sm:w-40 lg:w-48 bg-blue-100 p-1 cursor-pointer rounded-full flex items-center justify-start fixed -right-20 sm:-right-28 lg:-right-36 z-50 transition-all duration-1000 hover:w-40 sm:hover:w-48 lg:hover:w-56 hover:-right-16`}
                  style={{ top: `${index * 62 + 200}px` }} // Adjust the spacing and initial top position as needed
                >
                  <div className="bg-white group-hover:bg-[#00918d] rounded-full h-9 w-9 sm:h-8 sm:w-8 lg:h-10 lg:w-10 flex items-center justify-center transform transition-transform duration-100 group-hover:animate-reverse-rotate mr-2 sm:mr-3">
                    <IconComponent
                      size={27}
                      className="text-[#00918d] group-hover:text-white sm:size-25 lg:size-30"
                    />
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base font-medium">
                    {item.label}
                  </p>
                </li>
              );
            })}
          </ul>
          {/* social medias closed*/}
        </div>
        <div className="h-1 bg-gradient-to-br from-blue-900 to-teal-600 font-Avenir font-semibold text-white flex items-center justify-between px-5 gap-10">
          <h1 className="bg-gradient-to-br from-blue-900 to-teal-600  rounded-full py-5 px-5">
            Online Appointments
          </h1>
          <h1 className="bg-gradient-to-br from-blue-900 to-teal-600 rounded-full py-5 px-5">
            Hiba Home Care
          </h1>
          <h1 className="bg-gradient-to-br from-blue-900 to-teal-600 rounded-full py-5 px-5">
            Tele Consultation
          </h1>
          <h1 className="bg-gradient-to-br from-blue-900 to-teal-600 rounded-full py-5 px-5">
            Service & Packages
          </h1>
        </div>
      </div>

      {/* Services */}

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2 justify-between mt-8 mx-4">
  {serviceImages.map((services, index) => (
    <div
      key={index}
      className="flex items-center gap-3 z-10 bg-gradient-to-br from-blue-900 to-teal-600 rounded-xl justify-evenly px-6 h-[14vh] cursor-pointer group"
    >
      <div className="hexagon-container bg-black h-full w-32 border-t-2 border-blue-800 border-b-2 flex items-center justify-center overflow-hidden">
        <img
          src={services.image}
          className="image-in-hexagon transition-transform duration-300 group-hover:scale-110"
          alt=""
        />
      </div>

      <div>
        <h1 className="text-white font-bold transition-colors duration-300 group-hover:text-teal-100">
          {services.title}
        </h1>
        <p className="text-sm text-white">{services.description}</p>
      </div>
    </div>
  ))}
</div> */}
      {/* Services closed */}

      <div className="relative h-[400px] w-full mt-10 flex items-center justify-center">
        <div className="absolute h-[50vh] 2xl:-top-20 top-0 -left-14 w-1/2 hidden sm:block">
          <img
            className="z-10 absolute max-h-[30rem] left-20 2xl:left-64 top-10 2xl:top-52"
            src={blobImage}
            alt=""
          />
          <img
            src={blob}
            className="opacity-40 w-full h-auto max-w-[42rem] mx-auto -z-50"
            alt=""
          />
        </div>

        <div className="absolute right-0 top-24 hidden sm:block">
          <img className="w-full h-[65vh] " src={aboutImage2} alt="" />
        </div>

        <div className="text-center">
          <h1 className="text-4xl opacity-90 font-bold mb-10">Who We Are</h1>
          <div className="text-lg max-w-2xl mx-auto">
            <h1
              className="text-lg font-medium opacity-70 font-serif mt-5 tracking-extra-wide"
              style={{ wordSpacing: "0.3rem" }}
            >
              Your health is our priority. Hiba Asia Hospital ensures you and
              your family receive the best possible medical care and assistance.
              We strive to create a warm and safe healing environment for you
              and your family. Over the past decade, Hiba Asia has been
              unflinchingly devoted to improving healthcare and treatment.
              Medical specialists have been working diligently to conduct
              research and educate future generations of doctors and healthcare
              workers. As our entire team works toward your speedy recovery, we
              utilize highly-trained doctors and cutting-edge technology in the
              field of medical sciences.
            </h1>
          </div>
        </div>

        {/* <div className="flex border-4 md:flex-row flex-col justify-center items-center md:border-indigo-900 rounded-xl md:shadow-md mt-7 mx-1 md:mx-10 ">
        <div className="w-full flex justify-center items-center overflow-hidden">
          <div className="flex">
            <img
              src={bannerImg}
              className="w-1/2 rounded-tl-lg rounded-bl-lg object-cover object-center"
              alt=""
            />
            <img
              src={bannerImg2}
              className="w-1/2 object-cover object-center"
              alt=""
            />
          </div>
        </div>

        <div className="w-2/3 md:px-7 font-semibold flex justify-center items-center text-lg ">
          <h1 style={{ wordSpacing: "6px" }}>
            "Your health is our priority. Hiba Asia Hospital ensures you and
            your family receive the best possible medical care and assistance.
            We strive to create a warm and safe healing environment for you and
            your family. Over the past decade, Hiba Asia has been unflinchingly
            devoted to improving healthcare and treatment. Medical specialists
            have been working diligently to conduct research and educate future
            generations of doctors and healthcare workers. As our entire team
            works toward your speedy recovery, we utilize highly-trained doctors
            and cutting-edge technology in the field of medical sciences"
          </h1>
        </div>
      </div> */}
      </div>
      <div
        className="grid grid-cols-2 mt-52 border-4  border-sky-700 mx-2 rounded-md"
        style={{
          backgroundImage: bgImage,
          backgroundSize: "cover", // ensures the image covers the entire div
          backgroundRepeat: "no-repeat", // prevents the image from repeating
          backgroundBlendMode: "overlay", // blend the gradient and image
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
              qualified professionals
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
              Our mission is to continually improve the health of the
              communities by discovering and delivering compassionate and
              quality healthcare services through a team of dedicated and highly
              qualified professionals
            </p>
          </div>
        </div>
        <div className="col-span-2 flex-col justify-center">
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

      <div className="app mt-10">
        <h1 className="text-4xl opacity-90 font-bold mb-10">What We Do</h1>
        <div className="card-container flex flex-wrap justify-evenly  gap-5 w-full">
          {cardData.map((card, index) => (
            <Cards
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      {/* departments */}
      <div className="sm:mt-16 border-b-4 py-14 px-3 ">
        <h1 className="text-3xl xl:text-4xl font-bold">Departments</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 pt-8">
          {/* Child div 1 */}
          <div>
            <p className="department-name">Pediatric</p>
            <div className="child-div">
              <img
                src="https://www.bluewaterresearch.in/public/Blogs/1686309816.jpeg"
                alt=""
              />
            </div>
          </div>
          {/* Child div 2 */}
          <div>
            <p className="department-name">Radiology</p>
            <div className="child-div">
              <img
                src="https://www.yashodahealthcare.com/blogs/wp-content/uploads/2023/01/radiology-diagnostic-imaging-at-yashoda-hospital.webp"
                alt=""
              />
            </div>
          </div>
          {/* Child div 3 */}
          <div>
            <p className="department-name">Cardiology</p>
            <div className="child-div">
              <img
                src="https://www.nm.org/-/media/northwestern/healthbeat/images/health%20library/nm-ten-signs-cardiologist_preview.jpg"
                alt=""
              />
            </div>
          </div>{" "}
          {/* Child div 4 */}
          <div>
            <p className="department-name">Urology</p>
            <div className="child-div">
              <img
                src="https://media.istockphoto.com/id/1339092350/photo/unrecognizable-doctor-caring-highlighted-red-handrawn-bladder-and-kidneys-medical.jpg?s=612x612&w=0&k=20&c=oXJPyi0bBZh5nKbdCppcq0UUTBNIS6m7_XBnEcFuQ6I="
                alt=""
              />
            </div>
          </div>{" "}
          {/* Child div 5 */}
          <div>
            <p className="department-name">Orthopedic</p>
            <div className="child-div">
              <img
                src="https://d3b6u46udi9ohd.cloudfront.net/wp-content/uploads/2022/07/14133118/orthopedic.jpg"
                alt=""
              />
            </div>
          </div>{" "}
          {/* Child div 6 */}
          <div>
            <p className="department-name">Dermatology</p>
            <div className="child-div">
              <img
                src="https://www.oasisdermatology.com/wp-content/uploads/2022/12/What-is-Cosmetic-Dermatology-Oasis-Dermatology-1000x658.jpg"
                alt=""
              />
            </div>
          </div>{" "}
          {/* Child div 7 */}
          <div>
            <p className="department-name">Dentistry</p>
            <div className="child-div">
              <img
                src="https://mytowncenterdental.com/wp-content/uploads/2023/10/dentist-in-cedar-park-tx-town-center-dental-cedar-park.jpg"
                alt=""
              />
            </div>
          </div>{" "}
          {/* Child div 8 */}
          <div>
            <p className="department-name">Ophthalmology</p>
            <div className="child-div">
              <img
                src="https://www.westernlasereye.com/wp-content/uploads/shutterstock_1565916823-1.jpg"
                alt=""
              />
            </div>
          </div>{" "}
        </div>
      </div>

      {/* Doctors */}
      <div className="mt-3 border-b-4 py-14 px-3 ">
        <h1 className=" text-3xl font-bold">Our Doctors</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000"
            >
              {/* Profile Image */}
              <img
                src={doctor.image}
                alt=""
                className="object-cover max-w-[7rem] rounded-full mx-auto"
              />
              {/* Name and Specialty */}
              <h2 className="text-xl font-semibold mt-2 text-center">
                Dr. {doctor.name}
              </h2>
              <p className="text-gray-600 mt-1 text-center">
                {doctor.department}
              </p>
              {/* Additional Information */}
              {/* Contact Details */}
              {/* Add any other relevant information */}
              <div className="flex items-center justify-center">
                <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                  + Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 border-b-4 py-14 px-3 ">
        <h1 className=" text-3xl font-bold mb-10">
          See what people are saying about Hiba Asia
        </h1>

        <div
          className="flex justify-evenly items-center gap-32 px-5"
          style={{ lineHeight: "27px" }}
        >
          <h1>
            "It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, "
          </h1>
          <h1>
            "It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, "
          </h1>
          <h1>
            "It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, "
          </h1>
        </div>
      </div>

      {/* News&Events */}

      <div className="mt-3 border-b-4 py-14 px-3 ">
        <h1 className=" text-3xl font-bold">News & Events</h1>

        {/* YouTube Video 1 */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-8">
          <div className="mb-6 flex items-center justify-center">
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
      <div className="flex flex-col-reverse md:flex-row justify-between items-center p-10 bg-slate-100 gap-14 md:gap-0 md:h-screen">
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
      </div>

      {/* images */}
    </div>
  );
}

export default Home;
