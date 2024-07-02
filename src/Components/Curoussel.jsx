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
      <div className="text-white">hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
    </div>
  );
};

export default App;
