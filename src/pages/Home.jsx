import blob from "../assets/blob.svg";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import smilingDoctor from "../assets/file.png";
import backgroundImage from "../assets/rm209-ning-19.jpg";
import Doctors from "../Components/DoctorsList";
import Departments from "../Components/Departments";
import Whatsapp from "../Components/Whatsapp";
import SocialMedias from "../Components/SocialMedias";
// import { FaMapLocationDot } from "react-icons/fa6";
import aboutImage2 from "../assets/file (2).png";
import Cards from "../Components/Cards";
import blobImage from "../assets/smiling-little-boy-in-medical-uniform-and-eyeglass-2023-11-27-05-22-22-utc-Photoroom.png-Photoroom.png";
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

  return (
    <div>
      {/* header */}
      <div
        className="bg-gradient-to-b from-white to-sky-200 h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        {" "}
        <Header />
        {/* header closed */}
        {/* banner */}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2 w-full flex justify-center items-center">
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
                <button className="bg-sky-800 mt-10 2xl:mt-20 mb-10 text-white xl:text-2xl lg:px-6 lg:py-6 md:px-3 md:py-4 py-2 px-3 rounded-full border-4 hover:text-black border-sky-800 font-bold transition duration-500 transform hover:bg-white hover:scale-105">
                  Book an Appointment
                </button>
                <div className="flex gap-10 mt-40 md:mt-0">
                  <a
                    className="flex items-center gap-2"
                    href="tel:+9660545961777"
                  >
                    <button className="bg-white text-black p-2  border-sky-800 border-4 xl:text-lg rounded-full transition duration-300 transform">
                      <IoIosCall size={30} />
                    </button>
                    <div>
                      <p className="font-medium text-lg opacity-70">
                        Talk to Us
                      </p>
                      <p className="font-Avenir opacity-90">0545961777</p>
                    </div>
                  </a>
                  <a
                    className="flex items-center gap-2"
                    href="mailto:info@hibaasia.care"
                  >
                    <button className="bg-white text-black border-sky-800 border-4 p-2 xl:text-lg rounded-full font-bold transition duration-300 transform">
                      <MdEmail size={30} />{" "}
                    </button>
                    <div>
                      <p className="font-medium opacity-70 text-lg ">
                        Write to Us
                      </p>
                      <p className="font-Avenir opacity-90">
                        info@hibaasia.care
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center bg-slate-600 gap-3 2xl:gap-10 pl-14">
                {/* <div className="flex gap-2">
                  <h1 className="font-semibold text-xl opacity-70 mr-1">
                    <FaMapLocationDot color="black" size={40} />
                  </h1>
                  <button className="rounded-full font-Avenir font-semibold border-y-2 border-teal-700 h-auto border-x-8 bg-white px-5 whitespace-nowrap">
                    Al Zahra
                  </button>
                  <button className="rounded-full font-Avenir font-semibold border-y-2 border-teal-700 h-auto border-x-8 bg-white px-5 whitespace-nowrap">
                    Al Wazeriyah
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 w-full overflow-hidden">
            <img
              src={smilingDoctor}
              className="w-full  h-full -z-10"
              alt="Smiling Doctor"
            />
          </div>
          {/* banner closed*/}

          {/* whatsapp */}
          <Whatsapp />

          {/* social medias */}
          <SocialMedias />
        </div>
        <div className="h-1 sm:mt-0 mt-6 bg-gradient-to-br from-blue-900 to-teal-600 font-Avenir font-semibold text-white flex items-center justify-between px-5 gap-10">
          <h1 className="bg-gradient-to-br from-blue-900 to-teal-600 text-center rounded-full md:py-5 md:px-5 px-1 py-1">
            Online Appointments
          </h1>
          <h1 className="bg-gradient-to-br from-blue-900 to-teal-600 text-center rounded-full md:py-5 md:px-5 px-1 py-1">
            Hiba Home Care
          </h1>
          <h1 className="bg-gradient-to-br from-blue-900 to-teal-600 text-center rounded-full md:py-5 md:px-5 px-1 py-1">
            Tele Consultation
          </h1>
          <h1 className="bg-gradient-to-br from-blue-900 to-teal-600 text-center rounded-full md:py-5 md:px-5 px-1 py-1">
            Service & Packages
          </h1>
        </div>
      </div>

      <div className="relative h-[400px] w-full mt-10 flex items-center justify-center">
        <div className="absolute h-[50vh] 2xl:-top-20 top-0 -left-14 w-1/2 hidden sm:block">
          <img
            className="z-10 absolute max-h-[30rem] hidden md:block left-20 2xl:left-64 top-10 2xl:top-52"
            src={blobImage}
            alt=""
          />
          <img
            src={blob}
            className="opacity- w-full h-auto max-w-[42rem] mx-auto -z-50"
            alt=""
          />
        </div>

        <div className="absolute right-0 top-24 hidden sm:block">
          <img
            className="w-full h-[65vh] hidden md:block"
            src={aboutImage2}
            alt=""
          />
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
      </div>

      <div className="mt-60 flex flex-col md:flex-row justify-center md:justify-evenly py-40 items-center bg-[url('https://img.freepik.com/free-vector/medical-healthcare-blue-color_1017-26807.jpg?t=st=1716905726~exp=1716909326~hmac=e3522a94835f46159dd5e1fc0a3be928be5c0bc04e50a7e6e1941ef5c488a2b5&w=1060')] bg-cover bg-center">
        <div
          onClick={() => navigate("/vision")}
          className="bg-slate-50 h-96 w-96 cursor-pointer border-8 border-b-slate-400 shadow-2xl rounded-full p-6 flex flex-col items-center justify-center transform transition-transform duration-500 hover:translate-y-[-10px] custom-shadow"
        >
          <img
            src={missionImage}
            alt="Mission"
            className="w-full h-auto max-w-[10rem] mx-auto"
          />
          <div className="flex flex-col items-center justify-center mt-4">
            <h1 className="font-Avenir font-bold text-xl mb-2">OUR MISSION</h1>
            <div className="relative w-full max-w-xs">
              <div className="opacity-90 font-serif tracking-wide text-center">
                <p className="w-full">
                  Our mission is to continually improve the
                </p>
                <p className="w-full">the health of the communities by</p>
                <p className="w-full">discovering and delivering</p>
                <p className="w-full">compassionate and...</p>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/vision")}
          className="bg-slate-50 h-96 w-96 my-3 cursor-pointer border-8 border-b-slate-400 shadow-2xl rounded-full p-6 flex flex-col items-center justify-center transform transition-transform duration-500 hover:translate-y-[-10px] custom-shadow"
        >
          <img
            src={visionImage}
            alt="Mission"
            className="w-full h-auto max-w-[10rem] mx-auto"
          />
          <div className="flex flex-col items-center justify-center mt-4">
            <h1 className="font-Avenir font-bold text-xl mb-2">OUR VISION</h1>
            <div className="relative w-full max-w-xs">
              <div className="opacity-90 font-serif tracking-wide text-center">
                <p className="w-full">
                  By following the standards of Vision 2023
                </p>
                <p className="w-full">we aspire to be one of the best pr-</p>
                <p className="w-full">oviders of medical services</p>
                <p className="w-full">the Kingdom of Sa...</p>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/vision")}
          className="bg-slate-50 h-96 w-96 cursor-pointer border-8  border-b-slate-400 shadow-2xl rounded-full p-6 flex flex-col items-center justify-center transform transition-transform duration-500 hover:translate-y-[-10px] custom-shadow"
        >
          <img
            src={valuesImage}
            alt="Mission"
            className="w-full h-auto max-w-[10rem] mx-auto"
          />
          <div className="flex flex-col items-center justify-center mt-4">
            <h1 className="font-Avenir font-bold text-xl mb-2">OUR VALUES</h1>
            <div className="relative w-full max-w-xs">
              <div className="opacity-90 font-serif tracking-wide text-center">
                <p className="w-full">
                  Our hospital values excellence by striv-
                </p>
                <p className="w-full">ing for the highest standards in</p>
                <p className="w-full">Compassion, Patient-Cent-</p>
                <p className="w-full">tricity, Collaborat...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <Cards />

      {/* departments */}

      <Departments />

      <div className="mt-3 border-b-4 py-14 px-3">
        <h1 className="text-3xl font-bold text-center">Our Doctors</h1>
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
                  {/* <div className="bg-black w-full h-5"></div> */}

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

                  {/* <div className="bg-black w-full h-5"></div> */}
                </div>
              </div>
            </div>
          ))}
          <div className="h-[30rem] flex items-center justify-center bg-slate-50 rounded-lg ">
            <button onClick={()=>navigate('/doctors')} className="rounded-full bg-white px-5 text-lg font-semibold  transition-transform hover:scale-105 py-2 border-4 border-sky-800">
              View All
            </button>
          </div>
        </div>
      </div>

      {/* doctors */}
      {/* <Doctors /> */}

      <div className="mt-3 border-b-4 py-14 px-3 ">
        <h1 className=" text-3xl font-bold mb-10">
          See what people are saying about Hiba Asia
        </h1>

        <div
          className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5"
          style={{ lineHeight: "27px" }}
        >
          <h1 className="p-5">
            "It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, "
          </h1>
          <h1 className="p-5">
            "It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, "
          </h1>
          <h1 className="p-5">
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
