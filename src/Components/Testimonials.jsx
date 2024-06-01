// src/Testimonials.js
import { useEffect, useState } from "react";
import { IoLogoWechat } from "react-icons/io5";
import { FaStar } from "react-icons/fa";


const testimonialsData = [
  {
    text: "I've been working with these guys for a long time and I can say that my house is in the perfect hands.",
    image:
      "https://img.businessoffashion.com/resizer/v2/https%3A%2F%2Fprod-bof-media.s3.eu-west-1.amazonaws.com%2Fimport%2Fprofiles%2Fasset%2F1715%2Fa1f88b4a3c5c5b6761438553fe38ab872d9f59cc.jpeg?auth=7b03563a00ad77e3cd71c6cf0492ac463b993d18a585b2f94fc08539c3f031a2&height=350",
    name: "Allan Collins",
  },
  {
    text: "Working with Sentry Oak is just great, every problem in my house is solved in a matter of days.",
    image:
      "https://i.pinimg.com/736x/39/34/1a/39341ac32898c0a5d0d3fc189cda0f79.jpg",
    name: "Clay Washington",
  },
  {
    text: "Once a pipe burst in my kitchen and an hour later it was already repaired, thanks to Sentry Oak.",
    image:
      "https://asamnews.com/wp-content/uploads/2019/02/thispersondoesnotexist.com_.jpg",
    name: "Tanya Grant",
  },
  {
    text: "I've been working with these guys for a long time and I can say that my house is in the perfect hands.",
    image:
      "https://miro.medium.com/v2/resize:fit:1024/1*Athwa3eGmq9wajY6Zu4zCg.jpeg",
    name: "Muhaim",
  },
  {
    text: "Working with Sentry Oak is just great, every problem in my house is solved in a matter of days.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5S4UPcD6bRrimRECmAkJdiZ50Gt0UZWWzPni7CHycVkZzOHaA9ApZdkStZqhAdOQWgE&usqp=CAU",
    name: "Farha",
  },
  {
    text: "Once a pipe burst in my kitchen and an hour later it was already repaired, thanks to Sentry Oak.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmtH3ATnD7ZUAccAYl0OR0By8nTAQYoghyZM3i-9_iLLi7s-ZkhFRmcH2Xz9KsC4ezKs&usqp=CAU",
    name: "Tara",
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
        <h1 className="text-3xl font-bold mb-20 text-center">See what our patience say about Hiba Asia</h1>
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
