import Button from "../Components/Button";
import Curoussel from "../Components/Curoussel";
import headerImage from "../assets/Screenshot 2024-04-24 151322.png";
import videoSource from "../assets/132778853_778113649719337_6473248478797310844_n.mp4";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showDepartmentsDropdown, setShowDepartmentsDropdown] = useState(false);
  const [showOffersDropdown, setShowOffersDropdown] = useState(false);

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
            <span className="on">EN</span>
            <span className="off">AR</span>
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

        <div className="relative">
          <h1
            onMouseEnter={() => setShowDepartmentsDropdown(true)}
            onMouseLeave={() => setShowDepartmentsDropdown(false)}
          >
            Departments
          </h1>
          <div
            className={`absolute z-10 bg-white rounded-lg text-center py-4 border-2 w-36 ${
              showDepartmentsDropdown ? "block" : "hidden"
            }`}
          >
            {/* Dropdown content */}
            <ul>
              <li className="mb-2">Option 1</li>
              <li className="mb-2">Option 2</li>
              <li className="mb-2">Option 3</li>
              <li className="mb-2">Option 4</li>
              <li className="mb-2">Option 5</li>
              <li className="mb-2">Option 6</li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <h1>Blog</h1>
        </div>

        <div className="relative">
          <h1
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            Services
          </h1>
          <div
            className={`absolute z-10 bg-white rounded-lg text-center py-4 border-2 w-36 ${
              showServicesDropdown ? "block" : "hidden"
            }`}
          >
            {/* Dropdown content */}
            <ul>
              <li className="mb-2">Option 1</li>
              <li className="mb-2">Option 2</li>
              <li className="mb-2">Option 3</li>
              <li className="mb-2">Option 4</li>
              <li className="mb-2">Option 5</li>
              <li className="mb-2">Option 6</li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <h1
            onMouseEnter={() => setShowOffersDropdown(true)}
            onMouseLeave={() => setShowOffersDropdown(false)}
          >
            Special Offers
          </h1>
          <div
            className={`absolute z-10 bg-white rounded-lg text-center py-4 border-2 w-36 ${
              showOffersDropdown ? "block" : "hidden"
            }`}
          >
            {/* Dropdown content */}
            <ul>
              <li className="mb-2">Option 1</li>
              <li className="mb-2">Option 2</li>
              <li className="mb-2">Option 3</li>
              <li className="mb-2">Option 4</li>
              <li className="mb-2">Option 5</li>
              <li className="mb-2">Option 6</li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <h1>Contact Us</h1>
        </div>
      </div>

      {/* banner */}

      <Curoussel />

      {/* video */}
      <div className="flex border-4 md:flex-row flex-col justify-center items-center border-indigo-900 rounded-xl shadow-md my-10 mx-10 py-5">
        <div className=" h-72  px-3  w-full flex justify-center items-center">
          <video autoPlay loop muted>
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="w-2/3 px-7 font-semibold flex justify-center items-center text-lg ">
          <h1 style={{ wordSpacing: "6px" }}>
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

      {/* departments */}
      <div className="mt-16 border-y-4 py-14 px-3 ">
        <h1 className=" text-3xl xl:text-4xl font-bold">Departments</h1>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 pt-8">
          {/* Child div 1 */}
          <div>
            <p className="department-name">Pediatric</p>
            <div className="child-div">
              <img
                src="https://www.bluewaterresearch.in/public/Blogs/1686309816.jpeg"
                alt=""
              />
            </div>
          </div>
          {/* Child div 2 */}
          <div>
            <p className="department-name">Radiology</p>
            <div className="child-div">
              <img
                src="https://www.yashodahealthcare.com/blogs/wp-content/uploads/2023/01/radiology-diagnostic-imaging-at-yashoda-hospital.webp"
                alt=""
              />
            </div>
          </div>
          {/* Child div 3 */}
          <div>
            <p className="department-name">Cardiology</p>
            <div className="child-div">
              <img
                src="https://www.nm.org/-/media/northwestern/healthbeat/images/health%20library/nm-ten-signs-cardiologist_preview.jpg"
                alt=""
              />
            </div>
          </div>{" "}
          {/* Child div 4 */}
          <div>
            <p className="department-name">Urology</p>
            <div className="child-div">
              <img
                src="https://media.istockphoto.com/id/1339092350/photo/unrecognizable-doctor-caring-highlighted-red-handrawn-bladder-and-kidneys-medical.jpg?s=612x612&w=0&k=20&c=oXJPyi0bBZh5nKbdCppcq0UUTBNIS6m7_XBnEcFuQ6I="
                alt=""
              />
            </div>
          </div>{" "}
          {/* Child div 5 */}
          <div>
            <p className="department-name">Orthopedic</p>
            <div className="child-div">
              <img
                src="https://d3b6u46udi9ohd.cloudfront.net/wp-content/uploads/2022/07/14133118/orthopedic.jpg"
                alt=""
              />
            </div>
          </div>{" "}
          {/* Child div 6 */}
          <div>
            <p className="department-name">Dermatology</p>
            <div className="child-div">
              <img
                src="https://www.oasisdermatology.com/wp-content/uploads/2022/12/What-is-Cosmetic-Dermatology-Oasis-Dermatology-1000x658.jpg"
                alt=""
              />
            </div>
          </div>{" "}
          {/* Child div 7 */}
          <div>
            <p className="department-name">Dentistry</p>
            <div className="child-div">
              <img
                src="https://mytowncenterdental.com/wp-content/uploads/2023/10/dentist-in-cedar-park-tx-town-center-dental-cedar-park.jpg"
                alt=""
              />
            </div>
          </div>{" "}
          {/* Child div 8 */}
          <div>
            <p className="department-name">Ophthalmology</p>
            <div className="child-div">
              <img
                src="https://www.westernlasereye.com/wp-content/uploads/shutterstock_1565916823-1.jpg"
                alt=""
              />
            </div>
          </div>{" "}
        </div>
      </div>

      {/* Doctors */}
      <div className="mt-3 border-b-4 py-14 px-3 ">
        <h1 className=" text-3xl font-bold">Our Doctors</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. John Doe
            </h2>
            <p className="text-gray-600 mt-1 text-center">
              Surgical Gastroenterology
            </p>
            {/* Additional Information */}
            {/* Contact Details */}
            {/* Add any other relevant information */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                + Connect
              </button>
            </div>
          </div>

          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. Ibrahim
            </h2>
            <p className="text-gray-600 mt-1 text-center">Urology Specialist</p>
            {/* Additional Information */}
            {/* Contact Details */}
            {/* Add any other relevant information */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                + Connect
              </button>
            </div>
          </div>

          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://www.citizenshospitals.com/static/uploads/130789a4-764e-4ee3-88fe-68f9278452d6-1692966652977.png"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. Shukoor
            </h2>
            <p className="text-gray-600 mt-1 text-center">Radiologist</p>
            {/* Additional Information */}
            {/* Contact Details */}
            {/* Add any other relevant information */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                + Connect
              </button>
            </div>
          </div>

          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2023/01/DMSc-vs-DMHc-Whats-the-Difference-Hero.jpg"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. Farha
            </h2>
            <p className="text-gray-600 mt-1 text-center">Dermatologist</p>
            {/* Additional Information */}
            {/* Contact Details */}
            {/* Add any other relevant information */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                + Connect
              </button>
            </div>
          </div>

          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. Wilson
            </h2>
            <p className="text-gray-600 mt-1 text-center">Pediatrition</p>
            {/* Additional Information */}
            {/* Contact Details */}
            {/* Add any other relevant information */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                + Connect
              </button>
            </div>
          </div>

          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://www.embark.ca/wp-content/uploads/2023/12/How-to-become-a-doctor-1300x1065-1.png"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. Haniya
            </h2>
            <p className="text-gray-600 mt-1 text-center">Dentist</p>
            {/* Additional Information */}
            {/* Contact Details */}
            {/* Add any other relevant information */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                + Connect
              </button>
            </div>
          </div>

          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. Abdullah
            </h2>
            <p className="text-gray-600 mt-1 text-center">Cardiologist</p>
            {/* Additional Information */}
            {/* Contact Details */}
            {/* Add any other relevant information */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                + Connect
              </button>
            </div>
          </div>

          <div className="shadow-xl rounded-lg p-8 bg-slate-50 hover:scale-105 hover:transition-transform duration-1000">
            {/* Profile Image */}
            <img
              src="https://www.liveabout.com/thmb/zNzhc9WxUE_lf6r3P0yuAfBaoV0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/doctor-with-stethoscope-in-hospital-642394515-5aa9a0b8a9d4f90037431454.jpg"
              alt=""
              className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {/* Name and Specialty */}
            <h2 className="text-xl font-semibold mt-2 text-center">
              Dr. Yoonus
            </h2>
            <p className="text-gray-600 mt-1 text-center">Orthopedist</p>
            {/* Additional Information */}
            {/* Contact Details */}
            {/* Add any other relevant information */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white rounded-full px-3 py-1 mt-7 ">
                + Connect
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* News&Events */}

      <div className="mt-3 border-b-4 py-14 px-3 ">
        <h1 className=" text-3xl font-bold">News & Events</h1>

        {/* YouTube Video 1 */}
        <div className="grid grid-cols-2 gap-4 pt-8">
          <div className="mb-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GB-KWIsuSM0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          {/* YouTube Video 2 */}
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lId6H20rWrc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* text area*/}
      <div className="flex justify-between items-center p-10 bg-slate-100 h-screen">
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
