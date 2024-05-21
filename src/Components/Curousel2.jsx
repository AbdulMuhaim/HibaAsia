import { useState } from "react";
import { Carousel } from "antd";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import Image5 from "../assets/image5.jpg";
import Image6 from "../assets/image6.jpg";
import whatsappLogo from "../assets/WhatsApp.svg.png";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import serviceImg1 from "../assets/Walkin.jpg";
import serviceImg2 from "../assets/patient-portal.png";
import serviceImg3 from "../assets/Virtual.jpg";
import serviceImg4 from "../assets/home-care.jpg";

function Curousel2() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const socialMediaItems = [
    { icon: FaFacebook, label: "Facebook", top: "top-48" },
    { icon: RiInstagramFill, label: "Instagram", top: "top-60" },
    { icon: FaTwitter, label: "Twitter", top: "top-72" },
  ];

  const serviceImages = [serviceImg1, serviceImg2, serviceImg3, serviceImg4];

  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  const texts = [
    "The art of medicine consists of amusing the patient while nature cures the disease",
    "The best way to find yourself is to lose yourself in the service of others",
    "Medicine is not only a science; it is also an art. It does not consist of compounding pills and plasters",
    "Wherever the art of medicine is loved, there is also a love of humanity",
    "The greatest healing therapy is friendship and love",
    "To cure sometimes, to relieve often, to comfort always",
  ];

  const handleAfterChange = (current) => {
    setCurrentSlide(current);
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-2/3">
        <div className="relative">
          <Carousel
            autoplay
            autoplaySpeed={5000}
            speed={1500}
            effect="fade"
            afterChange={handleAfterChange}
            pauseOnHover={false}
            dots={false}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative inline-block max-w-none mx-auto"
              >
                <img
                  src={image}
                  className="w-full h-auto md:h-[66vh] object-cover"
                  alt=""
                />
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                  <p className="text-black md:text-2xl text-center text-base font-bold bg-opacity-50 backdrop-filter backdrop-blur-md px-4 py-2 w-[55vw] break-words">
                    {texts[index]}
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-7">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`h-1 w-5 mx-1 rounded ${
                        index === currentSlide ? "bg-black" : "bg-gray-300"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>

          <div className="absolute z-20 p-3 flex items-center justify-center rounded-full left-4 bottom-24 sm:left-10 sm:bottom-56 bg-[#2C9542] animate-pulse-border">
            <a
              href="https://api.whatsapp.com/send?phone=966539365643"
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

          <ul>
            {socialMediaItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <li
                  key={index}
                  className={`group w-40 bg-blue-100 p-1 cursor-pointer mt-10 rounded-full flex items-center justify-start -right-28 mb-1 fixed ${item.top} z-10 transition-all duration-[1000ms] hover:w-48 hover:-right-16`}
                >
                  <div className="bg-white group-hover:bg-[#00918d] rounded-full h-8 w-8 flex items-center justify-center transform transition-transform duration-100 group-hover:animate-reverse-rotate mr-3">
                    <IconComponent
                      size={25}
                      className=" text-[#00918d] group-hover:text-white"
                    />
                  </div>
                  <p className="text-sm font-medium">{item.label}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-1/3 pt-5 lg:pt-0 px-3 lg:px-1">
        {serviceImages.map((image, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center bg-[#00918d] rounded-lg justify-evenly px-2 h-[16.5vh] border-b-2 border-white"
          >
            <div className="border-2">
              <img src={image} className="h-20 w-20" alt="" />
            </div>

            <div>
                <h1 className="text-base text-white font-medium">Online Appointments</h1>
                <p className="text-sm text-white">Visit Our Center For Consultation</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Curousel2;
