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

const App = () => {
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
    <div className="relativew-[50vw] h-[67vh]">
      
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
      <div key={index} className="relative bg-slate-500 inline-block max-w-none mx-auto">
      <img src={image} className="w-[66vw] h-[67vh]" alt="" />
            <div className="absolute bottom-16 flex justify-center items-center left-24">
              <p className="text-black md:text-2xl text-center text-base font-bold bg-opacity-50 backdrop-filter backdrop-blur-md px-4 py-2 w-[55vw] break-words">
                {texts[index]}
              </p>
            </div>
            <div className="absolute flex items-center left-96 ml-16 justify-center bottom-7">
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
      <div className="absolute right-0 top-0">hii</div>

      <div
        className={`absolute z-20 h-20 w-20 bg-[#2C9542] flex items-center justify-center rounded-full left-10 bottom-56 animate-pulse-border`}
      >
        <a
          href="https://api.whatsapp.com/send?phone=966539365643"
          target="_blank"
        >
          <img src={whatsappLogo} className="h-14  w-14 " alt="WhatsApp Logo" />
        </a>
      </div>

      <ul>
        {socialMediaItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <li
              key={index}
              className={`group w-40 bg-blue-100 p-1 cursor-pointer rounded-full flex items-center justify-start -right-28 mb-1 fixed ${item.top} z-10 transition-all duration-[1000ms] hover:w-48 hover:-right-16`}
            >
              <div className="bg-white group-hover:bg-[#00918d] rounded-full h-8 w-8 flex items-center justify-center transform transition-transform duration-100 group-hover:animate-reverse-rotate mr-3">
                <IconComponent
                  size={22}
                  className=" text-[#00918d] group-hover:text-white"
                />
              </div>
              <p className="text-sm font-medium">{item.label}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
