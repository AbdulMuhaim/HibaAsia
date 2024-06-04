import generalImg from "../assets/general.png";
import internalImg from "../assets/internal.png";
import cardiologyImg from "../assets/cardiology.png";
import urologyImg from "../assets/urology.png";
import entImg from "../assets/ent.png";
import orthopedicImg from "../assets/orthopedic.png";
import obstetricImg from "../assets/obstetric.png";
import pediatricImg from "../assets/pediatric.png";
import dentalImg from "../assets/dental.png";
import ophthalmologyImg from "../assets/ophthalmology.png";
import dermatologyImg from "../assets/dermatology.png";
import generalSurgeryImg from "../assets/general surgery.png";
import laboratoryImg from "../assets/laboratory.png";
import xrayImg from "../assets/xray.png";
import ultrasoundImg from "../assets/ultrasound.png";
import pharmacyImg from "../assets/pharmacy.png";
import { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// client/src/assets/dermatology.png

function Departments() {
  const departments = [
    {
      name: "General Medicine",
      img: generalImg,
    },
    {
      name: "Internal Medicine",
      img: internalImg,
    },
    {
      name: "Cardiology",
      img: cardiologyImg,
    },
    {
      name: "Urology",
      img: urologyImg,
    },
    {
      name: "E N T",
      img: entImg,
    },
    {
      name: "Orthopedic",
      img: orthopedicImg,
    },
    {
      name: "Obstetric & Gynecology",
      img: obstetricImg,
    },
    {
      name: "Pediatrics",
      img: pediatricImg,
    },
    {
      name: "Dental",
      img: dentalImg,
    },
    {
      name: "Ophthalmology",
      img: ophthalmologyImg,
    },
    {
      name: "Dermatology",
      img: dermatologyImg,
    },
    {
      name: "General Surgery",
      img: generalSurgeryImg,
    },
    {
      name: "Laboratory",
      img: laboratoryImg,
    },
    {
      name: "X Ray",
      img: xrayImg,
    },
    {
      name: "Ultrasound",
      img: ultrasoundImg,
    },
    {
      name: "Pharmacy",
      img: pharmacyImg,
    },
  ];



  const [currentIndex, setCurrentIndex] = useState(0);
  const [departmentsToShow, setDepartmentsToShow] = useState(getDepartmentsToShow());

  useEffect(() => {
    const handleResize = () => {
      setDepartmentsToShow(getDepartmentsToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
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
    <div className="mt-16 py-14 px-3 h-[50vh]">
      <h1 className="text-3xl xl:text-4xl font-bold text-center text-sky-800">
        Departments
      </h1>
      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-4 pt-8">
        {currentDepartments.map((department, index) => (
          <div key={index} className="text-center">
            <div className="animate-fade-in">
              <img
                src={department.img}
                alt={department.name}
                className="w-full h-auto max-h-[13rem] max-w-[10rem] mx-auto"
              />
            </div>
            <p className="opacity-70 font-bold text-xl mt-5 uppercase">
              {department.name}
            </p>
          </div>
        ))}
        <button
          className="absolute left-10 top-1/2 text-5xl transform -translate-y-1/2 bg-white shadow-2xl border rounded-md px-2 py-4 hover:bg-slate-100"
          onClick={showPreviousDepartment}
        >
          <IoIosArrowBack size={35} />
        </button>
        <button
          className="absolute right-10 top-1/2 text-5xl transform -translate-y-1/2 bg-white shadow-2xl border rounded-md px-2 py-4 hover:bg-slate-100"
          onClick={showNextDepartment}
        >
          <IoIosArrowForward size={35} />
        </button>
      </div>
    </div>
  );
}

export default Departments;
