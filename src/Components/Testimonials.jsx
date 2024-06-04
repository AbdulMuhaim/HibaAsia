// src/Testimonials.js
import { useEffect, useState } from "react";
import { IoLogoWechat } from "react-icons/io5";
import { FaStar } from "react-icons/fa";


const testimonialsData = [
  {
    text: "Outstanding care at Hiba Asia Hospital. Compassionate staff ensured a swift recovery. Highly recommended!",
    image:
      "https://wp.en.aleteia.org/wp-content/uploads/sites/2/2017/04/web3-muslim-man-face-young-beard-head-shutterstock_122151928-shutterstock.jpg?w=620&h=348&crop=1",
    name: "Jawad Ali",
  },
  {
    text: "Great surgery experience at Hiba Asia Hospital. Modern facility and top-notch medical team.",
    image:
      "https://img.freepik.com/free-photo/muslim-woman-portrait-hijab-smiling-face-close-up_53876-144187.jpg",
    name: "Aysha Mariyam",
  },
  {
    text: "Quick, efficient care after an accident. Exceptional emergency and follow-up treatment.",
    image:
      "https://asamnews.com/wp-content/uploads/2019/02/thispersondoesnotexist.com_.jpg",
    name: "Tanya Grant",
  },
  {
    text: "Hiba Asia Hospital improved my life with holistic care for my chronic illness.",
    image:
      "https://bookamuslim.com/wp-content/uploads/2022/01/unnamed.jpeg",
    name: "Farha",
  },
  {
    text: "Best hospital for check-ups and treatments. Friendly, professional staff. Very satisfied!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5S4UPcD6bRrimRECmAkJdiZ50Gt0UZWWzPni7CHycVkZzOHaA9ApZdkStZqhAdOQWgE&usqp=CAU",
    name: "Abdul Muhaim",
  },
  {
    text: "Exceptional maternity care at Hiba Asia Hospital. Supportive doctors and nurses made it wonderful.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmtH3ATnD7ZUAccAYl0OR0By8nTAQYoghyZM3i-9_iLLi7s-ZkhFRmcH2Xz9KsC4ezKs&usqp=CAU",
    name: "Abid",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-5">
      <div className="w-full max-w-6xl mx-auto relative">
        <h1 className="text-3xl font-bold mb-20 text-center text-sky-800">See what our patience say about Hiba Asia</h1>
        <div className="flex flex-col lg:flex-row transition-transform duration-500 gap-20">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-1/3 p-16 bg-white border border-sky-800 hover:border-2 rounded-md text-center transform transition-transform hover:scale-105 duration-500"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 text-5xl text-sky-700">
                <IoLogoWechat />
              </div>
              <p className="text-gray-600 mb-4 font-sans font-semibold border-b-2 pb-3">
                "{testimonial.text}"
              </p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg text-gray-900 opacity-65">{testimonial.name}</h3>
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
