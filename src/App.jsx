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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
