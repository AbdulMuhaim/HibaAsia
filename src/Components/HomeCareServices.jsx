import React from "react";
import serviceImage from "../assets/Screenshot 2025-03-09 202715.png";
import headerImage from "../assets/Screenshot_2025-03-09_204142-removebg-preview.png";
import hibaAsiaLogo from "../assets/Screenshot 2025-03-10 211843.png";

const HomeCareServices = () => {
  // Image URLs
  // const serviceImage =
  //   "https://img.freepik.com/free-photo/medicine-uniform-healthcare-medical-workers-day-concept_185193-108329.jpg?semt=ais_hybrid";
  const qrCodeImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png";

  return (
    <div className="bg-white font-sans">
      {/* Header Section with Image */}
      <div className="text-center mb-20 ">
        <div className="bg-gradient-to-t from-[#1c648f] to-[#02999c] text-white py-10">
          <div className="w-full flex justify-center items-center">
            <img src={headerImage}  alt="" />
          </div>
          <h1 className="text-6xl font-bold mb-4 font-Roboto">
            رعاية طبية مذهبة في المنزل
          </h1>
          <h2 className="text-6xl font-bold font-Roboto">
            Expert Medical Care @Home
          </h2>
        </div>
        <img
          src={serviceImage}
          alt="Medical Care"
          className="w-full h-full object-cover mb-4"
        />
      </div>

      {/* Services Section Arabic*/}
      <div className="max-w-7xl mx-auto my-5">
        <div className="relative bg-lime-400 h-4">
          <h2
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
               w-7/10 h-[5rem] bg-[#dd1051] rounded-full 
               text-5xl font-bold flex items-center text-center text-white py-6 px-20"
          >
            الخدمات المقدمة
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 p-8 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <ul className="custom-list-arabic space-y-2">
        <li>زيارة الطبيب</li>
            <li>سحب عينات الدم</li>
            <li>جلسات العالم الطبيعي</li>
            <li>توصيل الذويلة ومفتاحات رعاية المرضى</li>
            <li>العناية بالقدم السكري وجوه</li>
            <li>قردة الفريق</li>
            <li>تركيب وإزالة القسطرة البولية</li>
            <li>الحقن الوريدية والمغذيات</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <ul className="custom-list-arabic space-y-2">
        <li>الحقن العضلية وتحت الجلد</li>
            <li>إزالة الضرر وإزالة المشبك</li>
            <li>إزالة أنبوب (بار) / ادخل</li>
            <li>غسل المشتقة</li>
            <li>تغيير كيس فخر القولون ورعايته</li>
            <li>خدمات الحقن الشريخية</li>
            <li>إعطاء حرعات الأنبوسين</li>
            <li>العالم التنفسي</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="bg-orange-500 my-10 py-3 px-10 shadow-lg w-full max-w-6xl">
          <h1 className="text-4xl text-center font-semibold text-white">
            هل تأخرت مواعيد الفحوصات الدورية؟ يمكنك إجراؤها في المنزل{" "}
          </h1>
        </div>
      </div>

      {/* Services Section English*/}
      <div className="max-w-7xl mx-auto my-5">
        <div className="relative bg-lime-400 h-4">
          <h2
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
               w-7/10 h-[5rem] bg-[#dd1051] rounded-full 
               text-5xl font-bold flex items-center text-center text-white py-6 px-20"
          >
            SERVICES OFFERED
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 p-8 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <ul className="custom-list space-y-2">
        <li>Doctor Visit</li>
            <li>Blood Sample Collection</li>
            <li>Physiotherapy Services</li>
            <li>Medicines & Patient Care Products Delivery</li>
            <li>
              Wound Dressing-Diabetic Foot, PICLine, Bed Sore and Surgical
            </li>
            <li>Catheterization, Catheter Care and Removal</li>
            <li>IV Cannulation and Injections/Infusions</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <ul className="custom-list space-y-2">
        <li>IM Injections/Subcutaneous Injections</li>
            <li>Suture Removal & Clip Removal</li>
            <li>Ryles Tube Insertion/Removal</li>
            <li>Bladder Wash</li>
            <li>Colostomy Bag Changing/Stoma Care</li>
            <li>Enema Administration</li>
            <li>Albumin Infusion</li>
            <li>Respiratory Therapy</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="bg-orange-500 my-10 py-3 px-10 shadow-lg w-full max-w-6xl">
          <h1 className="text-4xl text-center font-semibold text-white">
            Periodic Tests Delayed? Get It Done At Home
          </h1>
        </div>
      </div>


<div className="w-full">
  <img src={hibaAsiaLogo} alt="" />
</div>


      {/* Contact Information with QR Codes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center mb-5">
        <div>
          <img
            src={qrCodeImage}
            alt="QR Code 1"
            className="w-32 h-32 mx-auto mb-2"
          />
          <p className="font-semibold text-gray-700">الرقم الأول</p>
          <p className="text-gray-600">ALZAHRA 054 999 3820</p>
        </div>
        <div>
          <img
            src={qrCodeImage}
            alt="QR Code 2"
            className="w-32 h-32 mx-auto mb-2"
          />
          <p className="font-semibold text-gray-700">السائل</p>
          <p className="text-gray-600">ALSANABEL 056 233 6005</p>
        </div>
        <div>
          <img
            src={qrCodeImage}
            alt="QR Code 3"
            className="w-32 h-32 mx-auto mb-2"
          />
          <p className="font-semibold text-gray-700">الوزيرة</p>
          <p className="text-gray-600">ALWAZEERIYAH 054 596 1777</p>
        </div>
      </div>
            {/* Custom CSS for Orange Dotted Bullets */}
            <style jsx>{`
        /* General List Reset */
        .custom-list,
        .custom-list-arabic {
          list-style: none; /* Remove default bullets */
          padding-left: 0; /* Reset padding */
        }

        /* English List (Left-Aligned Bullets) */
        .custom-list li {
          position: relative;
          padding-left: 20px; /* Space for custom bullet */
          margin-bottom: 8px; /* Space between items */
        }

        .custom-list li::before {
          content: ""; /* Create a custom bullet */
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 12px; /* Larger size */
          height: 12px; /* Larger size */
          background-color: orange; /* Solid orange color */
          border-radius: 50%; /* Fully rounded */
        }

        /* Arabic List (Right-Aligned Bullets) */
        .custom-list-arabic li {
          position: relative;
          padding-right: 20px; /* Space for custom bullet */
          margin-bottom: 8px; /* Space between items */
          text-align: right; /* Align text to the right */
        }

        .custom-list-arabic li::after {
          content: ""; /* Create a custom bullet */
          position: absolute;
          right: 0; /* Align bullet to the right */
          top: 50%;
          transform: translateY(-50%);
          width: 12px; /* Larger size */
          height: 12px; /* Larger size */
          background-color: orange; /* Solid orange color */
          border-radius: 50%; /* Fully rounded */
        }
      `}</style>
    </div>
  );
};

export default HomeCareServices;

{
  /* English Services with Image */
}
<div className="bg-gray-50 p-6 rounded-lg shadow-sm">
  <img
    src={serviceImage}
    alt="English Services"
    className="w-full h-48 object-cover rounded-lg mb-4"
  />
  <h3 className="text-xl font-semibold text-gray-700 mb-4">SERVICES OFFERED</h3>
  <ul className="list-disc list-inside text-gray-600 space-y-2"></ul>
</div>;
