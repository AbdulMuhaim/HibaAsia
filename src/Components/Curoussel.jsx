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
<img src={image} className="h-full w-full object-cover" alt="" />
</div>
        ))}
      </Carousel>
    </div>
  );
};

export default App;
