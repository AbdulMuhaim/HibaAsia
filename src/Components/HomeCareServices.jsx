import React from "react";
import serviceImage from "../assets/Screenshot 2025-03-09 202715.png";
import headerImage from "../assets/Screenshot_2025-03-09_204142-removebg-preview.png";

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
            <img src={headerImage} alt="" />
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

      {/* Services Section */}
      <div className="grid grid-cols-1 p-8 md:grid-cols-2 gap-8">
        {/* Arabic Services with Image */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <img
            src={serviceImage}
            alt="Arabic Services"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            الخدمات المقدمة
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>الحقن العضلية وتحت الجلد</li>
            <li>إزالة الضرر وإزالة المشبك</li>
            <li>إزالة أنبوب (بار) / ادخل</li>
            <li>غسل المشتقة</li>
            <li>تغيير كيس فخر القولون ورعايته</li>
            <li>خدمات الحقن الشريخية</li>
            <li>إعطاء حرعات الأنبوسين</li>
            <li>العالم التنفسي</li>
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

        {/* English Services with Image */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <img
            src={serviceImage}
            alt="English Services"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            SERVICES OFFERED
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Doctor Visit</li>
            <li>Blood Sample Collection</li>
            <li>Physiotherapy Services</li>
            <li>Medicines & Patient Care Products Delivery</li>
            <li>
              Wound Dressing-Diabetic Foot, PICLine, Bed Sore and Surgical
            </li>
            <li>Catheterization, Catheter Care and Removal</li>
            <li>IV Cannulation and Injections/Infusions</li>
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

      {/* Call to Action Section with Image */}
      <div className="text-center mt-8">
        <img
          src={serviceImage}
          alt="Call to Action"
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-700 mb-4">
          هل تأخرت مواعيد الفحوصات العربية؟ يمكنك إجراءها من المنزل
        </p>
        <p className="text-gray-700 mb-4">
          Periodic Tests Delayed? Get It Done At Home
        </p>
      </div>

      {/* Contact Information with QR Codes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">
        <div>
          <img
            src={qrCodeImage}
            alt="QR Code 1"
            className="w-24 h-24 mx-auto mb-2"
          />
          <p className="font-semibold text-gray-700">الرقم الأول</p>
          <p className="text-gray-600">ALZAHRA 054 999 3820</p>
        </div>
        <div>
          <img
            src={qrCodeImage}
            alt="QR Code 2"
            className="w-24 h-24 mx-auto mb-2"
          />
          <p className="font-semibold text-gray-700">السائل</p>
          <p className="text-gray-600">ALSANABEL 056 233 6005</p>
        </div>
        <div>
          <img
            src={qrCodeImage}
            alt="QR Code 3"
            className="w-24 h-24 mx-auto mb-2"
          />
          <p className="font-semibold text-gray-700">الوزيرة</p>
          <p className="text-gray-600">ALWAZEERIYAH 054 596 1777</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCareServices;
