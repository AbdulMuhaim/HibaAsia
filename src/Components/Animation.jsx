import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import centerImage from "../assets/jpeg-optimizer_female-nurse-with-stethoscope-holding-heart.jpg"
import firstImage from "../assets/jpeg-optimizer_team-doctors-meeting.jpg"
import secondImage from "../assets/jpeg-optimizer_medium-shot-scientists-posing-together (1).jpg"
import fourthImage from "../assets/jpeg-optimizer_medical-team-discussing-digital-tablet.jpg"
import fifthImage from "../assets/jpeg-optimizer_close-up-team-health-workers.jpg"

const AnimatedSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  const images = [
    firstImage,
    secondImage,
    centerImage,
    fourthImage,
    fifthImage,
  ];

  const imageRefs = useRef([]);
  const imgRef = useRef([]);
  const centerImageRef = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((imageRef, index) => {
      ScrollTrigger.create({
        trigger: imageRef,
        start: "top center",
        end: "bottom center",
        onEnter: () => handleImageEnter(index),
        onLeaveBack: () => handleImageLeave(index),
      });
    });
  }, []);

  const handleImageEnter = (index) => {
    const centerImageIndex = Math.floor(images.length / 2);
    gsap.to(imageRefs.current[centerImageIndex], {
      scaleX: 1.1,
      scaleY: 0.8,
      rotate: 4,
      zIndex: images.length - centerImageIndex,
      duration: 1,
    });

    imageRefs.current.forEach((imageRef, i) => {
      if (i !== centerImageIndex) {
        gsap.to(imageRef, {
          x: getImageXPosition(i),
          y: getImageYPosition(i),
          scaleX: 1,
          zIndex: images.length - i,
          duration: 2,
        });
      }
    });

    imgRef.current.forEach((img, i) => {
      gsap.to(img, {
        width: "250px", // Increase the width of images while scrolling down
        height: "150px",
        duration: 2,
      });
    });
  };

  const handleImageLeave = () => {
    imageRefs.current.forEach((imageRef, index) => {
      gsap.to(imageRef, {
        x: 0,
        y: 0,
        scale: 1,
        zIndex: images.length - index,
        duration: 2,
      });
    });

    imgRef.current.forEach((img) => {
      gsap.to(img, {
        width: "80px", // Reset to the specified width when scrolling up
        height: "80px",
        duration: 2,
      });
    });
  };

  const getImageXPosition = (index) => {
    switch (index) {
      case 0:
        return -130; // Top left
      case 1:
        return 600; // Top right
      case 3:
        return -470; // Bottom left
      case 4:
        return 0; // Bottom right
      default:
        return 0;
    }
  };

  const getImageYPosition = (index) => {
    switch (index) {
      case 0:
        return -150; // Top row
      case 1:
        return -90; // Top row
      case 3:
        return 185; // Bottom row
      case 4:
        return 240; // Bottom row
      default:
        return 0;
    }
  };

  return (
    <>
      <div className="hidden xl:flex static-button flex-col justify-center items-center text-center min-h-screen gap-2 px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-sky-800">We're a</h1>
        <div className="flex relative justify-center items-center gap-2">
          <div className="image-gallery absolute left-0 -right-28 inline-flex -space-x-10" ref={centerImageRef}>
            {images.map((image, index) => (
              <div
                key={index}
                className="relative"
                ref={(el) => (imageRefs.current[index] = el)}
                style={{ zIndex: images.length - index }} // This ensures the leftmost image is on top
              >
                <img
                  ref={(el) => (imgRef.current[index] = el)}
                  src={image}
                  alt={`Gallery ${index}`}
                  className="w-20 h-20  object-cover border-4 border-slate-100 rounded-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl text-[#00918d] font-semibold">
            wellness &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h2>
          <div className="flex justify-center items-center bg-gray-200"></div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl text-[#00918d] font-semibold">driven</h2>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-sky-800">dedicated crew!</h2>
      </div>
    </>
  );
};

export default AnimatedSection;
