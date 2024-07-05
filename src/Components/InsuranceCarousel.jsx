
const InsuranceCarousel = () => {

  return (
    <div className="flex justify-center w-full flex-col items-center mt-10 bg-zinc-200 py-28">
      <h1 className="text-2xl font-bold mb-6">INSURANCE <span className="font-normal text-sky-800">PARTNERS</span></h1>
      <div className="overflow-hidden relative w-[55vw]">
        <div
          className="flex justify-center gap-20"
        >
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzQX1NMCJzRD8F05VGmZVU_iX5KEiIf2sGw&s"
              alt="Insurance 1"
              className="carousel-img w-[222px] h-24"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.etimg.com/thumb/width-640,height-480,imgsize-20582,resizemode-75,msid-107283347/wealth/personal-finance-news/daughter-wins-health-insurance-claim-fight-against-lic-after-8-years-to-get-rs-1-6-lakh-as-against-rs-17100-paid-by-the-insurer.jpg"
              alt="Insurance 2"
              className="carousel-img w-[222px] h-24"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://e7.pngegg.com/pngimages/190/837/png-clipart-short-term-health-insurance-health-care-life-insurance-insurance-purple-company.png"
              alt="Insurance 3"
              className="carousel-img w-[222px] h-24"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRzVlPTrdFAwk-P8M4l9R6bBajSmFZ9Pueg&s"
              alt="Insurance 3"
              className="carousel-img w-[222px] h-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCarousel;
