import { useState } from "react";
import { Carousel } from "antd";
import Image1 from "../assets/BG NW 01.jpg";
import Image2 from "../assets/BG NW 02.jpg";
import Image4 from "../assets/BG NW 03.jpg";
import Image5 from "../assets/BG NW 04.jpg";
import Image6 from "../assets/BG NW 05.jpg";


const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const images = [Image1, Image2, Image4, Image5, Image6];


  const handleAfterChange = (current) => {
    setCurrentSlide(current);
  };

  return ( 
    <div className="relative h-full">
      
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
      <div key={index} className="relative inline-block max-w-none mx-auto">
      <img src={image} className="h-full object-cover" alt="" />
            {/* <div className="absolute bottom-16 flex justify-center items-center left-24">
              <p className="text-black md:text-2xl text-center text-base font-bold bg-opacity-50 backdrop-filter backdrop-blur-md px-4 py-2 w-[55vw] break-words">
                {texts[index]}
              </p>
            </div> */}
            {/* <div className="absolute flex items-center left-96 ml-16 justify-center bottom-7">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`h-1 w-5 mx-1 rounded ${
                    index === currentSlide ? "bg-black" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default App;
