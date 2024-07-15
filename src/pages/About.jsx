import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import doctorsHeaderImage from '../assets/group-of-doctors-standing-in-hospital-on-medical-c-2023-11-27-05-18-43-utc.jpg';
import DoctorPatient from '../assets/smiling-girl-hospital-bed.jpg';
import president from '../assets/Screenshot 2024-07-13 220044.png';
import { useTranslation } from 'react-i18next';

function About() {
  const headerBgImage = `url(${doctorsHeaderImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const navigate = useNavigate();
  const location = useLocation();
  const presidentMessageRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');

    if (section === 'president-message' && presidentMessageRef.current) {
      presidentMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }else{
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <div
        className="flex items-center justify-center h-60"
        style={{
          backgroundImage: headerBgImage,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="flex flex-col">
          <h1 className="text-5xl p-5 uppercase text-white">
          {t('ABOUT HIBA ASIA')}
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate('/')}>
              {t('Home')}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">{t('About')}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 gap-10 max-w-[1315px] p-3 sm:py-20 sm:px-28">
          <div className="w-full">
            <img src={DoctorPatient} className="rounded-xl" alt="" />
          </div>

          <div className="w-full flex flex-col items-center justify-center mx-auto">
            <div className="w-full">
              <h1 className="text-4xl mb-4 uppercase">
                <span className="text-[#1e478e] font-semibold">{t('Hiba Asia')} </span>{t('HEALTHCARE GROUP')}
              </h1>
            </div>

            <p className="president-message">
            {t('About Hiba Para1')}
            </p>
            <p className="president-message">
            {t('About Hiba Para2')}
            </p>
            <p className="president-message">
            {t('About Hiba Para3')}
            </p>
          </div>
        </div>
      </div>

      <div ref={presidentMessageRef} className="flex justify-center">
        <div className="grid lg:grid-cols-2 gap-10 max-w-[1315px] p-3 sm:py-20 sm:px-28">
          <div className="w-full flex flex-col items-center justify-center mx-auto">
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-9 underline-custom">
                {t(`PRESIDENT'S`)} <span className="font-normal">{t('MESSAGE')}</span>
              </h2>
            </div>

            <p className="president-message">
            {t("President Message Para1")}
            </p>
            <p className="president-message">
            {t("President Message Para2")}
            </p>
            <p className="president-message">
            {t("President Message Para3")}
            </p>
            <p className="president-message">
            {t("President Message Para4")}
            </p>
            <div className="flex w-full font-semibold">
              <p className="president-message">
                {t('Sincerely')},
                <br />{t('Fahad Ibnu Abdullah')}
                <br />
                {t('president_HibaAsia')}
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={president} className="rounded-xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
