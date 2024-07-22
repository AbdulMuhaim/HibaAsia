import { useEffect, useState } from "react";
import { IoLogoWechat } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const testimonialsData = [
  {
    text: "testimonial1",
    image:
      "https://wp.en.aleteia.org/wp-content/uploads/sites/2/2017/04/web3-muslim-man-face-young-beard-head-shutterstock_122151928-shutterstock.jpg?w=620&h=348&crop=1",
    name: "Jawad Ali",
  },
  {
    text: "testimonial2",
    image:
      "https://img.freepik.com/free-photo/muslim-woman-portrait-hijab-smiling-face-close-up_53876-144187.jpg",
    name: "Aysha Mariyam",
  },
  {
    text: "testimonial3",
    image:
      "https://asamnews.com/wp-content/uploads/2019/02/thispersondoesnotexist.com_.jpg",
    name: "Tanya Grant",
  },
  {
    text: "testimonial4",
    image: "https://bookamuslim.com/wp-content/uploads/2022/01/unnamed.jpeg",
    name: "Farha",
  },
  {
    text: "testimonial5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5S4UPcD6bRrimRECmAkJdiZ50Gt0UZWWzPni7CHycVkZzOHaA9ApZdkStZqhAdOQWgE&usqp=CAU",
    name: "Abdul Muhaim",
  },
  {
    text: "testimonial6",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmtH3ATnD7ZUAccAYl0OR0By8nTAQYoghyZM3i-9_iLLi7s-ZkhFRmcH2Xz9KsC4ezKs&usqp=CAU",
    name: "Abid",
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
    <div className="bg-gray-100 mt-20 flex items-center justify-center py-32">
      <div className="w-full max-w-6xl mx-auto relative">
        <h1 className="text-3xl font-semibold mb-20 text-center text-gray-800">
          {t("testimonialTitle")}{" "}
          <span className="font-thin text-[#1e478e] ">{t("Hiba Asia")}</span>{" "}
        </h1>
        <div className="flex flex-col justify-center items-center lg:flex-row transition-transform duration-500 gap-24">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-1/3 py-14 px-6 bg-white border b hover:border-2 rounded-md text-center transform transition-transform hover:scale-105 duration-500"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 text-5xl text-[#1e478e]">
                <IoLogoWechat />
              </div>
              <p className="max-w-[15rem] mb-4 president-message border-b-2 pb-3">
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
