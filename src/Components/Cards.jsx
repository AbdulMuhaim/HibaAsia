import srvs1 from "../assets/10976_prev_ui.png";
import srvs2 from "../assets/elderly-care-home-6052789-4998284.webp";
import srvs3 from "../assets/3959915_prev_ui.png";
import srvs4 from "../assets/5183184_prev_ui.png";

const Cards = () => {
  const cardData = [
    {
      image: srvs3,
      title: "Online Appointments",
      description: "Visit Our Center For Consultation",
    },
    {
      image: srvs2,
      title: "Hiba Home Care",
      description: "A Complete Medical Care at Your Home",
    },
    {
      image: srvs4,
      title: "Tele Consultation",
      description: "Consultation through Video Conference",
    },
    {
      image: srvs1,
      title: "Service & Packages",
      description: "View and purchase services & packages",
    },
  ];

  return(

<div className="app mt-10">
  <h1 className="text-4xl opacity-90 font-bold mb-10">What We Do</h1>
  <div className="card-container flex flex-wrap justify-evenly  gap-5 w-full">
    {cardData.map((card, index) => (
      <div key={index} className="card mx-3 md:mx-0">
        <img src={card.image} alt={card.itle} />
        <div className="card-content justify-between">
          <div className="card-title">{card.title}</div>
          <div className="card-description">{card.description}</div>
        </div>
      </div>
    ))}{" "}
  </div>
</div>

  ) 
};

export default Cards;


