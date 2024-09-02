import React from "react";
import { useTranslation } from "react-i18next";

const DoctorCard = ({ doctor }) => {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg shadow-2xl overflow-hidden flex flex-col items-center justify-center w-full sm:w-64 text-center my-10 transform transition-transform duration-300 hover:scale-105">
      <img
        className="w-[70%] h-[70%] object-cover border-2"
        src={doctor.image}
        alt={doctor.name}
      />
      <div className="p-4 bg-gradient-to-t from-[#1e478e] to-[#00977b] text-white w-full sm:w-64 flex flex-col items-center justify-center min-h-[165px]">
        <h3 className="text-lg font-bold">
          {t("Dr")} {t(doctor.name)}
        </h3>
        <p className="text-sm uppercase">{t(doctor.department)}</p>
        <a
          href={`https://api.whatsapp.com/send?phone=9660545961777&text=Hello,%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20${doctor.name}%20from%20the%20${doctor.department}%20department.%20Please%20let%20me%20know%20the%20available%20slots.`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-4 px-4 py-2 bg-white text-[#1e478e] rounded-md font-semibold transition-colors duration-200">
            {t("bookAppointment")}
          </button>
        </a>
      </div>
    </div>
  );
};

export default DoctorCard;
