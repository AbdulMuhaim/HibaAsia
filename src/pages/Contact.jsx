import React from "react";
import contactImage from "../assets/vecteezy_black-letter-telephone-location-and-address-icons-print_6859994.jpg";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import SocialMedias from "../Components/SocialMedias";
import Whatsapp from "../Components/Whatsapp";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Map from "../Components/MapBox"
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";


function Contact() {
  const headerBgImage = `url(${contactImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <Header />
      <SocialMedias />
      <Whatsapp />
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
          CONTACT US
        </h1>
      </div>

      <div className="grid grid-cols-2 ">
      <div className=" p-6 rounded-lg flex flex-col items-center justify-center max-w-md mx-auto">
      <h1 className="text-center text-2xl font-bold mb-6">Abeer Medical Center - Sharafiyah</h1>
      <div className="space-y-6">
        <div className="flex items-center">
          <CiLocationOn className="w-10 h-10 mr-4" />
          <div>
            <strong className="block text-lg">Address</strong>
            <p>Sharafiah, Jeddah, Saudi Arabia</p>
          </div>
        </div>
        <div className="flex items-center">
          < PiPhoneCallLight className="w-10 h-10 mr-4" />
          <div>
            <strong className="block text-lg">For Doctor Appointments & General Enquiries</strong>
            <p>+966920015888, +966557290188</p>
          </div>
        </div>
        <div className="flex items-center">
          <CiMail className="w-10 h-10 mr-4" />
          <div>
            <strong className="block text-lg">Email</strong>
            <p>info@alabeermedicalgroup.com</p>
          </div>
        </div>
      </div>
    </div>
        <div>
             <Map />
          </div>
        </div>
      </div>
  );
}

export default Contact;
