import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import Departments from "../Components/Departments";
import Cards from "../Components/Cards";
import visionImage from "../assets/Vision-Icon-Photoroom.png-Photoroom.png";
import missionImage from "../assets/Mission-Icon-Photoroom.png-Photoroom.png";
import valuesImage from "../assets/reputation-building-icon-line-illustration-vector-Photoroom.png-Photoroom.png";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import DrAswaq from "../assets/HibaDoctors/01. Dr. Aswaq.jpg";
import DrAzza from "../assets/HibaDoctors/02. Dr. Azza.jpg";
import DrSherifHelmy from "../assets/HibaDoctors/09. Dr. Sherif Helmy.jpg";
import DrMohammedAnwar from "../assets/HibaDoctors/08. Dr. Mohammed Anwar.jpg";
import DrSamad from "../assets/HibaDoctors/06. Dr. Samad.jpg";
import DrMajedMouris from "../assets/HibaDoctors/07. Dr. Majed Mouris.jpg";
import DrRashaMohamed from "../assets/HibaDoctors/11. Dr. Rasha Mohamed.jpg";
import Testimonials from "../Components/Testimonials";
import newBgImage from "../assets/internal medicine.jpg";
import { FaNotesMedical } from "react-icons/fa";
import { GiMedicinePills } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { MdOutlineBloodtype } from "react-icons/md";
import hospitalImage from "../assets/Screenshot (128).png";


function Home() {
  const navigate = useNavigate();

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
    {
      name: "Mohamad Sherif Helmy",
      image: DrSherifHelmy,
      department: "Cardiologist",
    },
    {
      name: "Muhammed Anwar",
      image: DrMohammedAnwar,
      department: "Pediatrician",
    },
    { name: "Majed Mouris", image: DrMajedMouris, department: "Surgeon" },
    { name: "Samad Moideen", image: DrSamad, department: "Orthopedics" },
    { name: "Rasha Mohamed", image: DrRashaMohamed, department: "Dermatology" },
  ];

  const cardsData = [
    { frontText: "Hii 1", backText: "Hello 1" },
    { frontText: "Hii 2", backText: "Hello 2" },
    { frontText: "Hii 3", backText: "Hello 3" },
    { frontText: "Hii 4", backText: "Hello 4" },
    { frontText: "Hii 5", backText: "Hello 5" },
    { frontText: "Hii 6", backText: "Hello 6" },
    { frontText: "Hii 7", backText: "Hello 7" },
    { frontText: "Hii 8", backText: "Hello 8" },
  ];


  const visionData = [
    { src: visionImage, title: 'Our Vision', description: 'By following the standards of Vision 2030, we aspire to be one of the best' },
    { src: missionImage, title: 'Our Mission', description: 'We believe that a large part of our patients treatment lies in our personal' },
    { src: valuesImage, title: 'Our Values', description: 'Patient-Centricity, Collaboration, Innovation, Integrity, Quality' },
  ]

  return (
    <div>
      {/* header */}
      <div
        className="h-screen bg-cover bg-no-repeat bg-blend-overlay"
        style={{
          backgroundImage: `url(${newBgImage})`,
        }}
      >

        <div className="flex flex-col h-full items-center justify-center gap-8 md:gap-14">
          <h1 className="font-bold text-3xl md:text-5xl 2xl:text-7xl text-sky-950 text-center">
            INSPIRING BETTER HEALTH
          </h1>
          <p className="text-base font-medium md:text-lg 2xl:text-2xl max-w-[22rem] md:max-w-[48rem] backdrop-blur-sm break-words text-center">
            Discover a new standard of healthcare excellence at Hiba Asia. We
            combine advanced medical technology with compassionate care to
            ensure the best possible outcomes for our patients.
          </p>
          <button className="rounded-full bg-sky-800 px-5 py-3 md:text-lg font-semibold 2xl:text-xl md:px-10 md:py-6 border-4 text-white transition duration-500 transform hover:bg-white  hover:text-black border-sky-800">
            Book an Appointment
          </button>

          <div className="flex flex-wrap gap-4 items-center sm:gap-8 md:gap-16 lg:gap-24 xl:gap-32 justify-center">
      <div>
        <div className="rounded-full h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 bg-white flex items-center justify-center shadow-2xl outline-gray-300 outline-2 sm:outline-4 md:outline-6 lg:outline-8 transform transition-all duration-500 hover:-translate-y-2.5 hover:outline hover:outline-gray-300">
          <FaNotesMedical className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
        </div>
        <p className="text-center opacity-80 font-bold mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Examination
        </p>
      </div>
      <div>
        <div className="rounded-full h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 bg-white flex items-center justify-center shadow-2xl outline-gray-300 outline-2 sm:outline-4 md:outline-6 lg:outline-8 transform transition-all duration-500 hover:-translate-y-2.5 hover:outline hover:outline-gray-300">
          <GiMedicinePills className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
        </div>
        <p className="text-center opacity-80 font-bold mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Prescription
        </p>
      </div>
      <div>
        <div className="rounded-full h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 bg-white flex items-center justify-center shadow-2xl outline-gray-300 outline-2 sm:outline-4 md:outline-6 lg:outline-8 transform transition-all duration-500 hover:-translate-y-2.5 hover:outline hover:outline-gray-300">
          <FaHandHoldingHeart className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
        </div>
        <p className="text-center opacity-80 font-bold mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Cardiogram
        </p>
      </div>
      <div>
        <div className="rounded-full h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 bg-white flex items-center justify-center shadow-2xl outline-gray-300 outline-2 sm:outline-4 md:outline-6 lg:outline-8 transform transition-all duration-500 hover:-translate-y-2.5 hover:outline hover:outline-gray-300">
          <MdOutlineBloodtype className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
        </div>
        <p className="text-center opacity-80 font-bold mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Blood Pressure
        </p>
      </div>
    </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch text-center  lg:min-h-[80vh]">
          <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between">
            <h1 className="text-5xl font-thin text-left text-sky-800">
              Your Trusted Healthcare Partner
            </h1>
            <p
              className="text-xl opacity-70 max-w-[45rem] text-left leading-relaxed my-3 md:my-0 "
              style={{ letterSpacing: "1px", wordSpacing: "3px" }}
            >
              At Hiba Asia Polyclinics, we are committed to working with our
              patients to continually improve care and thus play an integral
              role in empowering patients, their families and communities to
              take charge of their health and wellness by delivering seamless,
              person-centered and preventive healthcare. Hiba Asia Healthcare is
              a group of polyclinics that provide comprehensive healthcare
              services to the community. The mission of Hiba Asia Healthcare is
              to provide high-quality, affordable, and accessible healthcare to
              all.
            </p>
            <div className="flex sm:gap-20 gap-2 justify-end my-3 md:my-0 md:justify-normal">
              <a className="flex items-center gap-2" href="tel:+9660545961777">
                <button className="bg-white text-black p-1 sm:p-2  border-sky-800 border-4 xl:text-2xl rounded-full transition duration-300 transform">
                  <IoIosCall />
                </button>
                <div>
                  <p className="font-medium md:text-lg opacity-85">
                    Talk to Us
                  </p>
                  <p className="font-Avenir opacity-90">0545961777</p>
                </div>
              </a>
              <a
                className="flex items-center gap-2"
                href="mailto:info@hibaasia.care"
              >
                <button className="bg-white text-black border-sky-800 border-4 p-1 sm:p-2 xl:text-2xl rounded-full font-bold transition duration-300 transform">
                  <MdEmail />{" "}
                </button>
                <div>
                  <p className="font-medium opacity-85 md:text-lg ">
                    Write to Us
                  </p>
                  <p className="font-Avenir opacity-90">info@hibaasia.care</p>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-full object-cover md:rounded-l-3xl"
              src={hospitalImage}
              alt="Hospital Image"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-100 py-10 flex flex-col md:flex-row justify-evenly items-center mt-20">
      {visionData.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-4 m-4 max-w-xs">
          <img className="w-48 h-48 object-cover mb-4 rounded" src={item.src} alt={item.title} />
          <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
          <p className="text-base text-gray-600 opacity-75 mb-4 text-center">
            {item.description}...
          </p>
          <button onClick={()=>navigate('/vision')} className="relative bg-white text-sky-800 px-6 py-5 rounded shadow-lg transition duration-700 ease-in-out overflow-hidden">
      Read More
      <button className="absolute top-0 left-0 w-full h-full text-center hover:text-sky-800 text-white bg-sky-800 transform transition-transform duration-700 hover:translate-x-full">Read More</button>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          {doctors.map((doctor, index) => (
            <div key={index} className="perspective-1000">
              <div className="relative h-[30rem] text-center transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                <div className="absolute w-full h-full shadow-xl rounded-lg py-3 bg-slate-50 backface-hidden flex flex-col items-center justify-center">
                  <div className="w-full h-40 flex justify-center flex-1 items-center">
                    <img
                      src={doctor.image}
                      alt=""
                      className="h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div className="flex-2">
                    <h2 className="text-xl font-semibold mt-4">
                      Dr. {doctor.name}
                    </h2>
                    <p className="text-gray-600 mt-2">{doctor.department}</p>
                  </div>
                </div>
                <div className="absolute w-full h-full shadow-inner bg-gradient-to-br from-sky-200 to-white  rounded-lg p-5 backface-hidden transform rotate-y-180 flex flex-col items-center justify-center text-white">
                  <div className="flex items-center justify-center ">
                    <div className="w-full h-60 flex justify-center flex-1 items-center">
                      <img
                        src={doctor.image}
                        alt=""
                        className="h-full object-cover rounded-3xl mr-2"
                      />
                    </div>
                    <div className="flex-2">
                      <h2 className="text-xl font-semibold mt-4 max-w-40 text-black">
                        Dr. {doctor.name}
                      </h2>
                      <p className="text-gray-600 mt-2">{doctor.department}</p>
                      <button className="bg-sky-800 text-white rounded-full px-4 py-2 mt-4">
                        + Connect
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="h-[30rem] flex items-center justify-center bg-slate-50 rounded-lg ">
            <button
              onClick={() => navigate("/doctors")}
              className="rounded-full bg-white px-5 text-lg font-semibold  transition-transform hover:scale-105 py-2 border-4 border-sky-800"
            >
              View All
            </button>
          </div>
        </div>
      </div>

      <Testimonials />

      <div className="mt-3 py-14 px-3 ">
        <h1 className=" text-3xl font-bold text-center text-sky-800">
          News, Events and Blogs
        </h1>

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
