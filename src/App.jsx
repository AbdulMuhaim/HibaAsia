import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vision from './pages/Vision';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Cardiology from './pages/Cardiology';
import Gynecology from './pages/Gynecology';
import Dermatology from './pages/Dermatology';
import Urology from './pages/Urology';
import ENT from './pages/ENT';
import Orthopedics from './pages/Orthopedics';
import General from './pages/General';
import Pediatrics from './pages/Pediatrics';
import Dental from './pages/Dental';
import Xray from './pages/Xray';
import Layout from './Components/Layout';
import Internal from './pages/Internal';
import Ophtalmology from './pages/Ophtalmology';
import Laboratory from './pages/Laboratory';
import Ultrasound from './pages/Ultrasound';
import Pharmacy from './pages/Pharmacy';
import Surgery from './pages/Surgery';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import NewsAndEvents from './pages/NewsAndEvents';
import Team from './pages/Team';
import OtherBusiness from './pages/OtherBusiness';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
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
    </BrowserRouter>
  );
}

export default App;
