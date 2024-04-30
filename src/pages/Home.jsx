import Button from "../Components/Button";
import Curoussel from "../Components/Curoussel";
import headerImage from "../assets/Screenshot 2024-04-24 151322.png";
import videoSource from "../assets/132778853_778113649719337_6473248478797310844_n.mp4";
import { FaLocationDot } from "react-icons/fa6";


function Home() {


  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  const hoverStyle = {
    backgroundColor: "#0013e0", // Change color on hover (example: gold)
    transform: "scale(1.05)", // Scale up by 5% on hover
    color: "white",
  };



  return (
    <div>
      {/* header */}
      <div className="w-full h-24 bg-white border-b-2 flex justify-between items-center px-5">
        <div className="h-[10vh] w-[19vw] ">
          <img src={headerImage} alt="" />
        </div>
        <div className="flex">
          <p className="mt-1 mr-1">
            <FaLocationDot />
          </p>
          <h1 className="font-semibold">Jeddah, Saudi Arabia</h1>
        </div>

        <center>
          <div className="switch">
            <input
              id="language-toggle"
              className="check-toggle check-toggle-round-flat"
              type="checkbox"
            />
            <label htmlFor="language-toggle"></label>
            <span className="on">AR</span>
            <span className="off">EN</span>
          </div>
        </center>

        <div>
          <Button
            onClick={handleButtonClick}
            text="Book an Appointment"
            hoverStyle={hoverStyle}
            style={{
              backgroundColor: "white",
              color: "black",
              border: "2px solid #000",
              padding: "15px 25px",
              borderRadius: "20px",
              fontWeight: "bold",
              transition: "background-color 0.3s, transform 0.3s", // Add transition for smooth color and size change
            }}
          />{" "}
        </div>
      </div>

      {/* pages list */}
      <div className="bg-white shadow-md w-full h-14 flex justify-between items-center px-5 pages">
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <h1>About Us</h1>
        </div>
        <div>
          <h1>Departments</h1>
        </div>
        <div>
          <h1>Blog</h1>
        </div>
        <div>
          <h1>Services</h1>
        </div>
        <div>
          <h1>Special Offers</h1>
        </div>
        <div>
          <h1>Contact Us</h1>
        </div>
      </div>

      {/* banner */}

      <Curoussel />

      {/* video */}
      <div className="flex mt-5">
        <div className=" w-1/3 h-72 mt-16 px-3">
          <video autoPlay loop muted>
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="w-2/3 px-7 font-semibold flex justify-center items-center text-lg ">
          <h1 style={{ wordSpacing: "7px" }}>
            "Your health is our priority. Hiba Asia Hospital ensures you and
            your family receive the best possible medical care and assistance.
            We strive to create a warm and safe healing environment for you and
            your family. Over the past decade, Hiba Asia has been unflinchingly
            devoted to improving healthcare and treatment. Medical specialists
            have been working diligently to conduct research and educate future
            generations of doctors and healthcare workers. As our entire team
            works toward your speedy recovery, we utilize highly-trained doctors
            and cutting-edge technology in the field of medical sciences"
          </h1>
        </div>
      </div>

      {/* text area*/}
      <div className="flex justify-between items-center p-10">
        <div className="w-1/2 ">
          <h1 className="text-5xl font-medium font-serif text-center">
            Our team of experts provides top-notch medical treatment with
            empathy using the most advanced technology.
          </h1>
        </div>

        <div className="w-1/2 flex gap-5 justify-center items-center right-text-div">
          <h1>
            1300+ <br />
            <span>Bed Capacity</span>
          </h1>
          <h1>
            10M <br />
            <span>Current Customers</span>
          </h1>
          <h1>
            128+ <br />
            <span>Medical Apparatus</span>
          </h1>
        </div>
      </div>

      {/* images */}
    </div>
  );
}

export default Home;
