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




function Curousel2() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const socialMediaItems = [
    { icon: FaFacebook, label: "Facebook", top: "top-48" },
    { icon: RiInstagramFill, label: "Instagram", top: "top-60" },
    { icon: FaTwitter, label: "Twitter", top: "top-72" },
  ];



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
      <div className="w-full">
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
                  className="w-full h-auto md:h-[66vh] object-cover opacity-70 px-20"
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
                  className={`group w-32 sm:w-40 lg:w-48 bg-blue-100 p-1 cursor-pointer rounded-full flex items-center justify-start fixed -right-24 sm:-right-28 lg:-right-36  ${item.top} z-50 transition-all duration-1000 hover:w-40 sm:hover:w-48 lg:hover:w-56 hover:-right-16`}
                  style={{ top: `${index * 62 + 300}px` }} // Adjust the spacing and initial top position as needed
                >
                  <div className="bg-white group-hover:bg-[#00918d] rounded-full h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 flex items-center justify-center transform transition-transform duration-100 group-hover:animate-reverse-rotate mr-2 sm:mr-3">
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
        </div>
      </div>
    </div>
  );
}

export default Curousel2;
