import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import four from '../assets/4.jpg';
import five from '../assets/5.jpg';
import six from '../assets/6.jpg';
import seven from '../assets/7.jpg';
import eight from '../assets/8.jpg';
import nine from '../assets/9.jpg';
import ten from '../assets/10.jpg';
import eleven from '../assets/11.jpg';
import twelve from '../assets/12.jpg';
import thirteen from '../assets/13.jpg';
import { useTranslation } from 'react-i18next';

const InsuranceCarousel = () => {

  const { t } = useTranslation();

  const options = {
    items: 4,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    dots: false,
    nav: false,
  };

  const insurances = [
    one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen
  ];

  return (
    <div className="flex justify-center w-full flex-col items-center mt-10 bg-zinc-200 py-28">
      <h1 className="text-2xl font-bold mb-6">
        {t('INSURANCE')} <span className="font-normal text-sky-800">{t('PARTNERS')}</span>
      </h1>
      <div className="overflow-hidden static-button relative w-[1000px]">
        <OwlCarousel className="owl-theme " {...options}>
          {insurances.map((insurance, index) => (
            <div key={index} className="carousel-item ">
              <img
                src={insurance}
                alt={`Insurance ${index + 1}`}
                className="carousel-img w-[222px] h-24"
              />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default InsuranceCarousel;
