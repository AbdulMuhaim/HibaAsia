import { useEffect, useState } from "react";
import headerImage from "../assets/WhatsApp_Image_2024-05-14_at_23.42.18-removebg-preview.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to check screen size and update mobileMenu state
    const checkScreenSize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setMobileMenu(true);
      } else {
        setMobileMenu(false);
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const headerMenuOptions = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Doctors",
      url: "/doctors",
    },
    {
      name: "Services",
      url: "",
    },
    {
      name: "Gallery",
      url: "",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <>
    <div className="w-full h-auto flex justify-between items-center">
        <div className="w-1/2 md:w-auto flex-col justify-center items-center pl-5 py-2">
          <div className="flex items-center justify-center">
            <img
              src={headerImage}
              alt=""
              className="md:p-0 md:my-2 min-h-[4rem] max-h-[5rem] max-w-[12rem] min-w-[5rem] mx-auto md:mx-0 "
            />
          </div>
        </div>

        {/* options bar under header */}
        {mobileMenu ? (
          <div className="p-2 w-1/2 flex justify-end">
            <RxHamburgerMenu
              size={22}
              className="border-2  border-black cursor-pointer"
            />
          </div>
        ) : (
          // Menu list
          <div
            className="w-4/5 h-16 flex justify-between items-center px-5"
            style={{ fontFamily: "Avenir Next or Sofia Pro" }}
          >
            {headerMenuOptions.map((option, index) => (
              <div key={index}>
                <h1
                  onClick={() => navigate(option.url)}
                  className="font-bold text-medium xl:text-lg opacity-60 cursor-pointer transition-opacity duration-300 hover:opacity-100"
                >
                  {option.name}
                </h1>
              </div>
            ))}
          </div>
        )}

        {/* options bar under header closed*/}




      <div className="flex absolute right-7 top-32 justify-between items-center w-full md:w-auto mt-4 md:mt-0 mb-4 md:mb-0">
        <div className="flex items-center justify-between w-full md:w-auto md:mb-0">
          <div className="switch">
            <input
              id="language-toggle"
              className="check-toggle check-toggle-round-flat"
              type="checkbox"
            />
            <label htmlFor="language-toggle" className="!h-10"></label>
            <span className="on">EN</span>
            <span className="off">AR</span>
          </div>
        </div>
      </div>
    </div>

{/* <div className="border-t-2 border-gray-300 bg-sky-800">
<h1 className="border text-white p-3">Home</h1>
<h1 className="border text-white p-3">About</h1>
<h1 className="border text-white p-3">Doctors</h1>
<h1 className="border text-white p-3">Services</h1>
<h1 className="border text-white p-3">Gallery</h1>
<h1 className="border text-white p-3">Contact</h1>
  </div> */}
    </>
  );
}

export default Header;
