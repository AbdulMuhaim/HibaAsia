import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import doctorsHeaderImage from '../assets/group-of-doctors-standing-in-hospital-on-medical-c-2023-11-27-05-18-43-utc.jpg';
import DoctorPatient from '../assets/smiling-girl-hospital-bed.jpg';
import president from '../assets/Screenshot 2024-07-13 220044.png';

function About() {
  const headerBgImage = `url(${doctorsHeaderImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const navigate = useNavigate();
  const location = useLocation();
  const presidentMessageRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');

    if (section === 'president-message' && presidentMessageRef.current) {
      presidentMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }else{
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <div
        className="flex items-center justify-center h-60"
        style={{
          backgroundImage: headerBgImage,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="flex flex-col">
          <h1 className="text-5xl p-5 uppercase text-white">
            About Hiba Asia
          </h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate('/')}>
              Home
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">About</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 gap-10 max-w-[1315px] p-3 sm:py-20 sm:px-28">
          <div className="w-full">
            <img src={DoctorPatient} className="rounded-xl" alt="" />
          </div>

          <div className="w-full flex flex-col items-center justify-center mx-auto">
            <div className="w-full">
              <h1 className="text-4xl mb-4">
                <span className="text-[#1e478e] font-semibold">HIBA ASIA</span> HEALTHCARE GROUP
              </h1>
            </div>

            <p className="president-message">
              Hiba Asia Healthcare Group is a multinational conglomerate
              headquartered in Jeddah since 2005, Saudi Arabia. Our company
              playing a remarkable role in the healthcare sector of Jeddah, Saudi
              Arabia since its establishment. Under Healthcare Group we are
              operating multiple healthcare units in different part of Jeddah. Our
              aims to expand our healthcare networks all over the Kingdom to
              provide cost effective, high quality healthcare to all...
            </p>
            <p className="president-message">
              HAHG provides a comprehensive range of health services for the
              family, functioning as a one-stop health center providing treatment
              for acute medical conditions, management of chronic diseases, women
              & child health services, and Dental care. The focus of Hiba Asia is
              on health promotion and disease prevention, early and accurate
              diagnosis, and disease management through specialist-led team-based
              care.
            </p>
            <p className="president-message">
              At Hiba Asia Polyclinics, we are committed to working with our
              patients to continually improve care and thus play an integral role
              in empowering patients, their families, and communities to take
              charge of their health and wellness by delivering seamless,
              person-centered, and preventive healthcare. Hiba Asia Healthcare is
              a group of polyclinics with multiple specialty that provide
              comprehensive healthcare services to the community. The mission of
              Hiba Asia Healthcare is to provide high-quality, affordable, and
              accessible healthcare to all.
            </p>
          </div>
        </div>
      </div>

      <div ref={presidentMessageRef} className="flex justify-center">
        <div className="grid lg:grid-cols-2 gap-10 max-w-[1315px] p-3 sm:py-20 sm:px-28">
          <div className="w-full flex flex-col items-center justify-center mx-auto">
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-9 underline-custom">
                PRESIDENT'S <span className="font-normal">MESSAGE</span>
              </h2>
            </div>

            <p className="president-message">
              Welcome to Hiba Asia, where excellence in healthcare meets
              compassionate care. It is with great pride and joy that I invite you
              to experience our commitment to your well-being. At Hiba Asia, we
              believe that the true measure of progress in the healthcare industry
              is not just the number of facilities, but the quality of care and
              awareness we bring to our community.
            </p>
            <p className="president-message">
              Our mission goes beyond treating illnesses; we strive to empower our
              patients with the knowledge and resources to lead healthier lives.
              Each member of our dedicated team is committed to providing
              personalized care tailored to meet the unique needs of every
              individual who walks through our doors.
            </p>
            <p className="president-message">
              As we continue to grow and expand, our focus remains steadfast on
              delivering cutting-edge medical services while maintaining a warm
              and welcoming environment. We are here to support you every step of
              the way, ensuring that you receive the highest standard of care.
            </p>
            <p className="president-message">
              Thank you for choosing Hiba Asia. We look forward to being your
              trusted partner in health and wellness.
            </p>
            <div className="text-left flex w-full font-semibold">
              <p className="president-message">
                Sincerely,
                <br /> Dr. Fahad Ibnu Abdullah
                <br />
                President, Hiba Asia Hospital
              </p>
            </div>
          </div>
          <div className="w-full">
            <img src={president} className="rounded-xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
