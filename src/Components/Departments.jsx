import generalImg from "../assets/HibaDepartments/general.png";
import internalImg from "../assets/HibaDepartments/internal.png";
import cardiologyImg from "../assets/HibaDepartments/cardiology.png";
import urologyImg from "../assets/HibaDepartments/urology.png";
import entImg from "../assets/HibaDepartments/ent.png";
import orthopedicImg from "../assets/HibaDepartments/orthopedic.png";
import obstetricImg from "../assets/HibaDepartments/obstetric.png";
import pediatricImg from "../assets/HibaDepartments/pediatric.png";
import dentalImg from "../assets/HibaDepartments/dental.png";
import ophthalmologyImg from "../assets/HibaDepartments/ophthalmology.png";
import dermatologyImg from "../assets/HibaDepartments/dermatology.png";
import generalSurgeryImg from "../assets/HibaDepartments/general surgery.png";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


function Departments() {

  const { t } = useTranslation();

  const departments = [
    
    {
      name: "Dermatology",
      img: dermatologyImg,
      link: "dermatology"
    },
    {
      name: "Cardiology",
      img: cardiologyImg,
      link: "cardiology"
    },
    {
      name: "Obstetric & Gynecology",
      img: obstetricImg,
      link: "gynecology"
    },
    {
      name: "Pediatrics",
      img: pediatricImg,
      link: "pediatrics"
    },
    {
      name: "General Medicine",
      img: generalImg,
      link: "general"
    },
    {
      name: "Internal Medicine",
      img: internalImg,
      link: "internal"
    },
    {
      name: "Urology",
      img: urologyImg,
      link: "urology"
    },
    {
      name: "E N T",
      img: entImg,
      link: "ent"
    },
    {
      name: "Orthopedic",
      img: orthopedicImg,
      link: "orthopedics"
    },
    {
      name: "Dental",
      img: dentalImg,
      link: "dental"
    },
    {
      name: "Ophthalmology",
      img: ophthalmologyImg,
      link: "ophtalmology"
    },
    {
      name: "General Surgery",
      img: generalSurgeryImg,
      link: "surgery"
    },
  ];

  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [departmentsToShow, setDepartmentsToShow] = useState(
    getDepartmentsToShow()
  );

  useEffect(() => {
    const handleResize = () => {
      setDepartmentsToShow(getDepartmentsToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getDepartmentsToShow() {
    const width = window.innerWidth;
    if (width >= 1536) return 4; // 2xl and above
    if (width >= 1280) return 3; // xl
    if (width >= 1024) return 3; // lg
    if (width >= 768) return 2; // md
    return 1; // sm and below
  }

  const showNextDepartment = () => {
    setCurrentIndex((currentIndex + 1) % departments.length);
  };

  const showPreviousDepartment = () => {
    setCurrentIndex(
      (currentIndex - 1 + departments.length) % departments.length
    );
  };

  const currentDepartments = departments.slice(
    currentIndex,
    currentIndex + departmentsToShow
  );

  return (
    <div className="px-3 py-24 flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 uppercase opacity-90">
        {t('DEPARTMENTS')}
      </h1>
      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-20 pt-8">
        {currentDepartments.map((department, index) => (
          <div
            key={index}
            className="relative text-center rounded p-5 hover:before:content-[''] hover:before:absolute hover:before:bottom-0 hover:before:left-1/2 hover:before:h-1 hover:before:w-0 hover:before:bg-[#1e478e] hover:before:animate-growBorder hover:before:transform hover:before:-translate-x-1/2"
          >
            <div className="animate-fade-in w-[200px]">
              <img
                src={department.img}
                alt={department.name}
                className="h-[140px] object-cover mx-auto cursor-pointer transition-all hover:scale-110 duration-500"
                onClick={() => navigate(department.link)}
              />
            </div>
            <p className="opacity-70 font-bold text-lg max-w-[200px] mt-5 uppercase">
              {t(department.name)}
            </p>
          </div>
        ))}

        <button
          className="absolute -left-10 top-1/2 text-3xl sm:text-4xl md:text-5xl transform -translate-y-1/2 bg-white shadow-2xl border rounded-md px-2 py-2 sm:py-3 md:py-4 hover:bg-slate-100"
          onClick={showPreviousDepartment}
        >
          <IoIosArrowBack className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
        </button>
        <button
          className="absolute -right-10 top-1/2 text-3xl sm:text-4xl md:text-5xl transform -translate-y-1/2 bg-white shadow-2xl border rounded-md px-2 py-2 sm:py-3 md:py-4 hover:bg-slate-100"
          onClick={showNextDepartment}
        >
          <IoIosArrowForward className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
        </button>
      </div>
    </div>
  );
}

export default Departments;
