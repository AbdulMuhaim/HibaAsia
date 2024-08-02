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
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1280: {
        items: 4,
      },
    },
  };

  const insurances = [
    one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen,
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full mt-10 bg-zinc-200 py-24 md:py-28">
      <h1 className="mb-6 text-xl md:text-2xl font-bold">
        {t('INSURANCE')} <span className="font-normal text-[#1e478e]">{t('PARTNERS')}</span>
      </h1>
      <div className="relative static-button w-full max-w-6xl px-4 overflow-hidden">
        <OwlCarousel className="owl-theme" {...options}>
          {insurances.map((insurance, index) => (
            <div key={index} className="flex items-center justify-center p-2">
              <img
                src={insurance}
                alt={`Insurance ${index + 1}`}
                className="object-contain w-full max-w-[222px] h-auto rounded-lg"
              />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default InsuranceCarousel;
