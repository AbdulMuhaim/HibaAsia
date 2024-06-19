import srvs1 from "../assets/10976_prev_ui.png";
import srvs2 from "../assets/elderly-care-home-6052789-4998284.webp";
import srvs3 from "../assets/3959915_prev_ui.png";
import srvs4 from "../assets/5183184_prev_ui.png";
import { useTranslation } from "react-i18next";

const Cards = () => {

  const { t } = useTranslation();

  const cardData = [
    {
      image: srvs3,
      title: "card1Title",
      description: "card1Description",
    },
    {
      image: srvs2,
      title: "card2Title",
      description: "card2Description",
    },
    {
      image: srvs4,
      title: "card3Title",
      description: "card3Description",
    },
    {
      image: srvs1,
      title: "card4Title",
      description: "card4Description",
    },
  ];

  return(

<div className="flex flex-col justify-center items-center min-h-[80vh] mt-10">
  <h1 className="text-4xl opacity-90 font-bold mb-10 text-sky-800">{t('cardsTitle')}</h1>
  <div className="card-container flex flex-wrap justify-evenly gap-10 md:gap-3 w-full">
    {cardData.map((card, index) => (
      <div key={index} className="card mx-3 md:mx-0 ">
        <img src={card.image} alt={card.itle} />
        <div className="card-content justify-between">
          <div className="card-title">{t(card.title)}</div>
          <div className="card-description">{t(card.description)}</div>
        </div>
      </div>
    ))}{" "}
  </div>
</div>

  ) 
};

export default Cards;


