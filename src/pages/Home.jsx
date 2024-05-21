import Button from "../Components/Button";
import Curoussel from "../Components/Curousel2";
import headerImage from "../assets/WhatsApp_Image_2024-05-14_at_23.42.18-removebg-preview.png";
import videoSource from "../assets/132778853_778113649719337_6473248478797310844_n.mp4";
import { FaLocationDot } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import serviceImg1 from "../assets/Walkin.jpg";
import serviceImg2 from "../assets/patient-portal.png";
import serviceImg3 from "../assets/Virtual.jpg";
import serviceImg4 from "../assets/home-care.jpg";
import bannerImg from "../assets/young-handsome-physician-medical-robe-with-stethoscope.jpg"
import bannerImg2 from "../assets/covid-coronavirus-disease-healthcare-workers-concept-closeup-confident-female-asian-physician-doc (1).jpg"

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showDepartmentsDropdown, setShowDepartmentsDropdown] = useState(false);
  const [showOffersDropdown, setShowOffersDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

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

  return (
    <div>
      {/* header */}
      <div className="w-full h-auto bg-white border-b-2 flex flex-col md:flex-row justify-between items-center px-5">
        <div className="w-full md:w-auto flex-col justify-center items-center px-5 py-2 mt-2">
          <div className="flex items-center justify-center">
            <img
              src={headerImage}
              alt=""
              className="w-[60vw] h-[13vh] md:w-[35vw] md:h-[11vh] xl:w-[30vw] xl:h-[14vh] p-2 md:p-0 md:my-2 mx-auto md:mx-0"
            />
          </div>
          <p
            className="text-center opacity-50 font-medium tracking-mega-wide pt-0 mt-0 pb-2"
            style={{ wordSpacing: "0.1em" }}
          >
            INSPIRING BETTER HEALTH
          </p>
        </div>

        <div className="flex items-center mt-4 md:mt-0 md:block hidden">
          <p className="mt-1 mr-1 inline-block">
            <FaLocationDot />
          </p>
          <h1 className="font-semibold inline-block text-sm lg:text-base xl:text-lg 2xl:text-xl">
            Jeddah, Saudi Arabia
          </h1>
        </div>

        <div className="flex justify-between items-center w-full md:w-auto mt-4 md:mt-0 mb-4 md:mb-0">
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

          <div className="flex justify-between w-full md:w-auto ml-4">
            <button
              onClick={handleButtonClick}
              className="bg-white text-black xl:text-lg border-2 border-black lg:px-6 lg:py-5 md:px-3 md:py-4 py-2 px-3 rounded-3xl font-bold transition duration-300 transform hover:bg-blue-100 hover:scale-105"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {mobileMenu ? (
        <div className="p-2">
          <RxHamburgerMenu
            size={22}
            className="border-2 border-black cursor-pointer"
          />
        </div>
      ) : (
        // pages list
        <div className="bg-gray-200 shadow-md w-full h-16 flex justify-between items-center px-5">
          <div>
            <h1 className="font-bold text-medium xl:text-lg opacity-50 cursor-pointer transition-opacity duration-300 hover:opacity-100">
              Home
            </h1>
          </div>

          <div>
            <h1 className="font-bold text-medium xl:text-lg opacity-50 cursor-pointer transition-opacity duration-300 hover:opacity-100">
              About Us
            </h1>
          </div>

          <div className="relative">
            <h1
              className="font-bold text-medium xl:text-lg opacity-50 cursor-pointer transition-opacity duration-300 hover:opacity-100"
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

          <div className="relative">
            <h1 className="font-bold text-medium xl:text-lg opacity-50 cursor-pointer transition-opacity duration-300 hover:opacity-100">
              Blog
            </h1>
          </div>

          <div className="relative">
            <h1
              className="font-bold text-medium xl:text-lg opacity-50 cursor-pointer transition-opacity duration-300 hover:opacity-100"
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
              className="font-bold text-medium xl:text-lg opacity-50 cursor-pointer transition-opacity duration-300 hover:opacity-100"
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

          <div>
            <h1 className="font-bold text-medium xl:text-lg opacity-50 cursor-pointer transition-opacity duration-300 hover:opacity-100">
              News
            </h1>
          </div>

          <div>
            <h1 className="font-bold text-medium xl:text-lg opacity-50 cursor-pointer transition-opacity duration-300 hover:opacity-100">
              Careers
            </h1>
          </div>

          <div>
            <h1 className="font-bold text-medium xl:text-lg opacity-50 cursor-pointer transition-opacity duration-300 hover:opacity-100">
              Contact Us
            </h1>
          </div>
        </div>
      )}

      {/* banner */}

      <Curoussel />

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2 justify-between px-10 my-10">
        {serviceImages.map((services, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-gradient-to-br from-blue-900 to-teal-600 rounded-3xl justify-evenly px-2 h-[20vh] border-b-2 border-white cursor-pointer group"
          >
            <div className="hexagon-container bg-black h-full border-t-2 w-40 xl:w-52 border-blue-800 border-b-2">
              <img
                src={services.image}
                className="image-in-hexagon transition-transform duration-300 group-hover:scale-110"
                alt=""
              />
            </div>

            <div>
              <h1 className="text-lg text-white font-bold transition-colors duration-300 group-hover:text-teal-100">
                {services.title}
              </h1>
              <p className="text-base text-white">{services.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* video */}
      <div className="flex border-4 md:flex-row flex-col justify-center items-center md:border-indigo-900 rounded-xl md:shadow-md my-10 mx-1 md:mx-10 py-5">
        <div className=" h-72 px-1 w-full flex justify-center items-center">
        <div className="flex">
            <img src={bannerImg} className="h-[47vh] w-1/2 rounded-tl-lg rounded-bl-lg" alt="" />
            <img src={bannerImg2} className="h-[47vh] w-1/2" alt="" />
          </div>
          {/* <video autoPlay loop muted>
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
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
      </div>

      {/* departments */}
      <div className="mt-16 border-y-4 py-14 px-3 ">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. John Doe
            </h2>
            <p className="text-gray-600 mt-1 text-center">
              Surgical Gastroenterology
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

          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. Ibrahim
            </h2>
            <p className="text-gray-600 mt-1 text-center">Urology Specialist</p>
            {/* Additional Information */}
            {/* Contact Details */}
            {/* Add any other relevant information */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                + Connect
              </button>
            </div>
          </div>

          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://www.citizenshospitals.com/static/uploads/130789a4-764e-4ee3-88fe-68f9278452d6-1692966652977.png"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. Shukoor
            </h2>
            <p className="text-gray-600 mt-1 text-center">Radiologist</p>
            {/* Additional Information */}
            {/* Contact Details */}
            {/* Add any other relevant information */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                + Connect
              </button>
            </div>
          </div>

          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2023/01/DMSc-vs-DMHc-Whats-the-Difference-Hero.jpg"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. Farha
            </h2>
            <p className="text-gray-600 mt-1 text-center">Dermatologist</p>
            {/* Additional Information */}
            {/* Contact Details */}
            {/* Add any other relevant information */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                + Connect
              </button>
            </div>
          </div>

          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. Wilson
            </h2>
            <p className="text-gray-600 mt-1 text-center">Pediatrition</p>
            {/* Additional Information */}
            {/* Contact Details */}
            {/* Add any other relevant information */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                + Connect
              </button>
            </div>
          </div>

          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://www.embark.ca/wp-content/uploads/2023/12/How-to-become-a-doctor-1300x1065-1.png"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. Haniya
            </h2>
            <p className="text-gray-600 mt-1 text-center">Dentist</p>
            {/* Additional Information */}
            {/* Contact Details */}
            {/* Add any other relevant information */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                + Connect
              </button>
            </div>
          </div>

          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. Abdullah
            </h2>
            <p className="text-gray-600 mt-1 text-center">Cardiologist</p>
            {/* Additional Information */}
            {/* Contact Details */}
            {/* Add any other relevant information */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                + Connect
              </button>
            </div>
          </div>

          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://www.liveabout.com/thmb/zNzhc9WxUE_lf6r3P0yuAfBaoV0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/doctor-with-stethoscope-in-hospital-642394515-5aa9a0b8a9d4f90037431454.jpg"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. Yoonus
            </h2>
            <p className="text-gray-600 mt-1 text-center">Orthopedist</p>
            {/* Additional Information */}
            {/* Contact Details */}
            {/* Add any other relevant information */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                + Connect
              </button>
            </div>
          </div>
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
