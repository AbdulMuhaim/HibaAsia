import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Cardiology from "./pages/Cardiology";
import Gynecology from "./pages/Gynecology";
import Dermatology from "./pages/Dermatology";
import Urology from "./pages/Urology";
import ENT from "./pages/ENT";
import Orthopedics from "./pages/Orthopedics";
import General from "./pages/General";
import Pediatrics from "./pages/Pediatrics";
import Dental from "./pages/Dental";
import Xray from "./pages/Xray";
import Layout from "./Components/Layout";
import Internal from "./pages/Internal";
import Ophtalmology from "./pages/Ophtalmology";
import Laboratory from "./pages/Laboratory";
import Ultrasound from "./pages/Ultrasound";
import Pharmacy from "./pages/Pharmacy";
import Surgery from "./pages/Surgery";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import NewsAndEvents from "./pages/NewsAndEvents";
import Team from "./pages/Team";
import OtherBusiness from "./pages/OtherBusiness";
import { useEffect, useState } from "react";
import Popup from "./Components/Popup";
import adImage from "../src/assets/ads.jpg";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/branches" element={<Contact />} />
            <Route path="/cardiology" element={<Cardiology />} />
            <Route path="/gynecology" element={<Gynecology />} />
            <Route path="/dermatology" element={<Dermatology />} />
            <Route path="/urology" element={<Urology />} />
            <Route path="/ent" element={<ENT />} />
            <Route path="/orthopedics" element={<Orthopedics />} />
            <Route path="/general" element={<General />} />
            <Route path="/pediatrics" element={<Pediatrics />} />
            <Route path="/dental" element={<Dental />} />
            <Route path="/xray" element={<Xray />} />
            <Route path="/internal" element={<Internal />} />
            <Route path="/ophtalmology" element={<Ophtalmology />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/ultrasound" element={<Ultrasound />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/surgery" element={<Surgery />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news&events" element={<NewsAndEvents />} />
            <Route path="/team" element={<Team />} />
            <Route path="/otherbusiness" element={<OtherBusiness />} />
          </Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

const MainLayout = ({ children }) => {
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Check if the current page is NOT the home page
    if (location.pathname !== "/") {
      // Show the popup on every page change except the home page
      setIsPopupOpen(true);
    }
  }, [location]); // Trigger this effect whenever the route changes

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="relative">
      {isPopupOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            imageSrc={adImage}
          />
        </div>
      )}
      <div className={`${isPopupOpen ? "pointer-events-none" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default App;
