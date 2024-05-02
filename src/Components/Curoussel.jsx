import React, { useState } from "react";
import { Carousel } from "antd";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import Image5 from "../assets/image5.jpg";
import Image6 from "../assets/image6.jpg";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div className="relative">
      <Carousel
        autoplay
        autoplaySpeed={2000}
        afterChange={handleAfterChange}
        pauseOnHover={false}
        dots={false}
      >
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} className="h-[80vh] w-full" alt="" />
            <div className="absolute bottom-16 flex justify-center items-center left-0 right-0">
            <p className="text-black text-2xl font-bold bg-opacity-50 backdrop-filter backdrop-blur-md px-4 py-2">{texts[index]}</p>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
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
  );
};

export default App;
