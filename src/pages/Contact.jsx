import contactImage from "../assets/vecteezy_black-letter-telephone-location-and-address-icons-print_6859994.jpg";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Map from "../Components/MapBox"
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";


function Contact() {
  const headerBgImage = `url(${contactImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const navigate = useNavigate();

  const locations = [
    {
      name: "Hiba Asia healthcare group",
      address: "Mada'en Al-Fahad, Al-Wazeeriya",
      phone: "+9660545961777, +9660545961777",
      email: "info@hibaasia.care",
      mapId: "map1",
      longitude: 39.2026,
      latitude: 21.5424,
    },
    {
      name: "Hiba Asia Polyclinic",
      address: "Mada'en Al-Fahad, Al-Wazeeriya",
      phone: "+9660545961777, +9660545961777",
      email: "info@hibaasia.care",
      mapId: "map2",
      longitude: 39.2026,
      latitude: 21.5424,
    },
  ];

  return (
    <div>
      {" "}
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
        <div className="flex flex-col">
        <h1 className="text-5xl p-5 backdrop-filter font-Tahoma backdrop-blur-md text-white">
          CONTACT US
        </h1>
        <div className="flex items-center space-x-4 text-white justify-center">
        <p className="cursor-pointer" onClick={()=>navigate('/')}>Home </p>
        <p className="text-xl">/</p>
        <p className="cursor-pointer">Contact</p>
        </div>
      </div>
      </div>



      <div className="grid md:grid-cols-2 border-b-2 py-5">
      <div className="p-6 rounded-lg flex flex-col items-center justify-center max-w-md mx-auto">
      <h1 className="text-center text-2xl font-bold mb-6">Hiba Asia healthcare group</h1>
      <div className="space-y-6">
        <div className="flex items-center">
          <CiLocationOn className="w-10 h-10 mr-4" />
          <div>
            <strong className="block text-lg">Address</strong>
            <p>Mada'en Al-Fahad,  Al-Wazeeriya</p>
          </div>
        </div>
        <div className="flex items-center">
          < PiPhoneCallLight className="w-10 h-10 mr-4" />
          <div>
            <strong className="block text-lg">For Doctor Appointments & General Enquiries</strong>
            <p>+9660545961777, +9660545961777</p>
          </div>
        </div>
        <div className="flex items-center">
          <CiMail className="w-10 h-10 mr-4" />
          <div>
            <strong className="block text-lg">Email</strong>
            <p>info@hibaasia.care</p>
          </div>
        </div>
      </div>
    </div>
        <div className="pt-2">
             <Map mapId="map1" longitude={39.2026} latitude={21.5424} />
          </div>
        </div>


        <div className="grid md:grid-cols-2 border-b-2 py-5">
      <div className="p-6 rounded-lg flex flex-col items-center justify-center max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Hiba Asia Polyclinic</h1>
      <div className="space-y-6">
        <div className="flex items-center">
          <CiLocationOn className="w-10 h-10 mr-4" />
          <div>
            <strong className="block text-lg">Address</strong>
            <p>Mada'en Al-Fahad,  Al-Wazeeriya</p>
          </div>
        </div>
        <div className="flex items-center">
          < PiPhoneCallLight className="w-10 h-10 mr-4" />
          <div>
            <strong className="block text-lg">For Doctor Appointments & General Enquiries</strong>
            <p>+9660545961777, +9660545961777</p>
          </div>
        </div>
        <div className="flex items-center">
          <CiMail className="w-10 h-10 mr-4" />
          <div>
            <strong className="block text-lg">Email</strong>
            <p>info@hibaasia.care</p>
          </div>
        </div>
      </div>
    </div>
        <div className="pt-2">
             <Map mapId="map2" longitude={39.2026} latitude={21.5424} />
          </div>
        </div>


      <div className="flex flex-col items-center justify-center min-h-screen ">
      <form className="w-full max-w-5xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Name*
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Enter Your Name" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Email*
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="Your Email" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Message*
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" placeholder="Message" rows="5"></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button className="shadow bg-sky-800 hover:bg-sky-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>


      </div>
  );
}

export default Contact;
