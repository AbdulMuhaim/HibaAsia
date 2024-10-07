import { useEffect, useState } from "react";
import { IoLogoWechat } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import unnamed from "../assets/unnamed.png"
import unnamed1 from "../assets/unnamed (1).png"
import unnamed2 from "../assets/unnamed (2).png"
import unnamed3 from "../assets/unnamed (3).png"
import unnamed4 from "../assets/unnamed (4).png"
import unnamed5 from "../assets/unnamed (5).png"

const testimonialsData = [
  {
    text: "I visited Dr. Rahaf for crowning she is a very good doctor there were absolutely no pain.",
    image:
      unnamed,
    name: "Maria Quaseem",
  },
  {
    text: `Clean clinic and very very nice staff.
The nurses were running around and helping us and everyone else.`,
    image:
      unnamed1,
    name: "Melisa Haseljić",
  },
  {
    text: `Was in and out, with great service.  My granddaughter didn't even cry with the nurse inserting the IV.  The doctors are great.`,
    image:
      unnamed2,
    name: "Shareefa Basyyoni",
  },
  {
    text: "Very special thanks to Dr.Ramy Rashed I am writing to express my sincere gratitude for the exceptional dental care he has provided.",
    image: unnamed5,
    name: "Mahmoud Amer",
  },
  {
    text: "testiThe most effective work staff ever. The blood test really came out fast. Great teamwork, great clinic, great service. Thank you:)",
    image:
      unnamed3,
    name: "wan siti maryam barus",
  },
  {
    text: "Best Health care provider in Jeddah.Providing good and quality services. Good ventilation and Approachable staff.",
    image:
      unnamed4,
    name: "Celf Creationsbid",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const displayedTestimonials = [
    testimonialsData[currentIndex],
    testimonialsData[(currentIndex + 1) % testimonialsData.length],
    testimonialsData[(currentIndex + 2) % testimonialsData.length],
  ];

  return (
    <div className="bg-gray-100 mt-20 flex items-center justify-center py-24 md:py-32">
      <div className="w-full max-w-6xl mx-auto relative">
        <div className=" w-full text-center flex justify-center">
        <h1 className="text-2xl md:text-3xl font-semibold max-w-md mb-20 text-center text-gray-800">
          {t("testimonialTitle")}{" "}
          <span className="font-thin text-[#1e478e] ">{t("Hiba Asia")}</span>{" "}
        </h1>
        </div>

        <div className="flex flex-col justify-center items-center lg:flex-row transition-transform duration-500 gap-24">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-1/3 py-14 px-6 bg-white border b hover:border-2 rounded-md text-center transform transition-transform hover:scale-105 duration-500"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 text-5xl text-[#1e478e]">
                <IoLogoWechat />
              </div>
              <p className="max-w-[15rem] mb-4 president-message max-h-36 min-h-36 overflow-hidden border-b-2 pb-3">
                "{t(testimonial.text)}"
              </p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg text-gray-900 opacity-65">
                {t(testimonial.name)}
              </h3>
              <div className="flex mt-1 justify-center">
                <FaStar size={18} color="yellow" />
                <FaStar size={18} color="yellow" />
                <FaStar size={18} color="yellow" />
                <FaStar size={18} color="yellow" />
                <FaStar size={18} color="yellow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
