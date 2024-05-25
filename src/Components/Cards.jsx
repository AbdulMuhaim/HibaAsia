const Cards = ({ image, title, description }) => {
    return (
        <div className="card mx-3 md:mx-0">
            <img src={image} alt={title} />
            <div className="card-content justify-between">
                <div className="card-title">{title}</div>
                <div className="card-description">{description}</div>
            </div>
        </div>
    );
};

export default Cards;
