import React from 'react';
import { useTranslation } from 'react-i18next';

const DoctorCard = ({ doctor }) => {

    const { t } = useTranslation();

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center w-full sm:w-64 text-center my-10 transform transition-transform duration-300 hover:scale-105">
            <img className="w-full h-90 object-cover" src={doctor.image} alt={doctor.name} />
            <div className="p-4 bg-gradient-to-t from-[#1e478e] to-[#00977b] text-white w-full sm:w-64 flex flex-col items-center justify-center min-h-[165px]">
                <h3 className="text-lg font-bold">{t('Dr')} {t(doctor.name)}</h3>
                <p className="text-sm">{t(doctor.department)}</p>
                <button className="mt-4 px-4 py-2 bg-white text-[#1e478e] rounded-md font-semibold transition-colors duration-200">
                    {t('bookAppointment')}
                </button>
            </div>
        </div>
    );
};

export default DoctorCard;
