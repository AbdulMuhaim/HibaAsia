import contactImage from "../assets/vecteezy_black-letter-telephone-location-and-address-icons-print_6859994.jpg";
import { useNavigate } from "react-router-dom";
import Map from "../Components/MapBox";
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function Contact() {
  const headerBgImage = `url(${contactImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      {" "}
      <div
        className="flex items-center justify-center h-60"
        style={{
          backgroundImage: headerBgImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col">
          <h1 className="text-5xl p-5 text-white">{t("Contact Us")}</h1>
          <div className="flex items-center space-x-4 text-white justify-center">
            <p className="cursor-pointer" onClick={() => navigate("/")}>
              {t('Home')}
            </p>
            <p className="text-xl">/</p>
            <p className="cursor-pointer">{t('Contact')}</p>
          </div>
        </div>
      </div>


      <div className="flex justify-center">
  <div className="grid md:grid-cols-2 border-b-2 py-5 w-full max-w-screen-lg">
    <div className="w-full flex justify-start items-start">
      <div className="py-6 rounded-lg flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-bold mb-6">
          1.{t('Hiba Asia Medical Center Al-Fahad')}
        </h1>
        <div className="space-y-6">
          <div className="flex items-center">
            <CiLocationOn className="w-10 h-10 mx-4" />
            <div>
              <strong className="block text-lg">{t('Address')}</strong>
              <p>{t(`Al-Wazeeriyah, Mada'en Al-Fahad Dist. Jeddah`)}</p>
            </div>
          </div>
          <div className="flex items-center">
            <PiPhoneCallLight className="w-10 h-10 mx-4" />
            <div>
              <strong className="block text-lg">
                {t(`For Doctor Appointments & General Enquiries`)}
              </strong>
              <p>+9660545961777, +9660545961777</p>
            </div>
          </div>
          <div className="flex items-center">
            <CiMail className="w-10 h-10 mx-4" />
            <div>
              <strong className="block text-lg">{t('Email')}</strong>
              <p>info@hibaasia.care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="overflow-hidden h-0 pb-[80%] relative">
      {/* <Map mapId="map1" longitude={39.2026} latitude={21.5424} /> */}
      <iframe className="border-0 h-[100%] w-[100%] left-0 top-0 absolute" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3713.1201950333157!2d39.2421!3d21.4638!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cc432b8ad5a3%3A0xbd114583cdf7bf0a!2sHiba%20Asia%20Polyclinic!5e0!3m2!1sen!2sin!4v1725181383228!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</div>





<div className="flex justify-center">
  <div className="grid md:grid-cols-2 border-b-2 py-5 w-full max-w-screen-lg">
    <div className="w-full flex justify-start items-start">
      <div className="py-6 rounded-lg flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-bold mb-6">
          2.{t('Hiba Asia Medical Center Al-Zahra')}
        </h1>
        <div className="space-y-6">
          <div className="flex items-center">
            <CiLocationOn className="w-10 h-10 mx-4" />
            <div>
              <strong className="block text-lg">{t('Address')}</strong>
              <p>{t(`Abdullah Jaseer St. Al-Zahra Dist. Jeddah`)}</p>
              </div>
          </div>
          <div className="flex items-center">
            <PiPhoneCallLight className="w-10 h-10 mx-4" />
            <div>
              <strong className="block text-lg">
                {t(`For Doctor Appointments & General Enquiries`)}
              </strong>
              <p>+9660545961777, +9660545961777</p>
            </div>
          </div>
          <div className="flex items-center">
            <CiMail className="w-10 h-10 mx-4" />
            <div>
              <strong className="block text-lg">{t('Email')}</strong>
              <p>info@hibaasia.care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="overflow-hidden h-0 pb-[80%] relative">
      {/* <Map mapId="map1" longitude={39.2026} latitude={21.5424} /> */}
      <iframe className="border-0 h-[100%] w-[100%] left-0 top-0 absolute" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3710.039038796733!2d39.1291667!3d21.5843992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3dbd4aa9c4a1b%3A0x7b011fc788dd6694!2zSGliYSBBc2lhIE1lZGljYWwgQ2VudGVyIEFsIFphaHJhIC8g2YXYrNmF2Lkg2YfYqNipINii2LPZitinINin2YTYt9io2Yog2KfZhNi52KfZhSDYp9mE2LLZh9ix2KfYoQ!5e0!3m2!1sen!2sin!4v1725182141789!5m2!1sen!2sin" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</div>

      
<div className="flex justify-center">
  <div className="grid md:grid-cols-2 border-b-2 py-5 w-full max-w-screen-lg">
    <div className="w-full flex justify-start items-start">
      <div className="py-6 rounded-lg flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-bold mb-6">
          3.{t('Hiba Asia Medical Center Al-Sanabel')}
        </h1>
        <div className="space-y-6">
          <div className="flex items-center">
            <CiLocationOn className="w-10 h-10 mx-4" />
            <div>
              <strong className="block text-lg">{t('Address')}</strong>
              <p>{t(`Abdullah Al-Sudais, Al-Sanabel Dist. Jeddah`)}</p>
              </div>
          </div>
          <div className="flex items-center">
            <PiPhoneCallLight className="w-10 h-10 mx-4" />
            <div>
              <strong className="block text-lg">
                {t(`For Doctor Appointments & General Enquiries`)}
              </strong>
              <p>+9660545961777, +9660545961777</p>
            </div>
          </div>
          <div className="flex items-center">
            <CiMail className="w-10 h-10 mx-4" />
            <div>
              <strong className="block text-lg">{t('Email')}</strong>
              <p>info@hibaasia.care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="overflow-hidden h-0 pb-[80%] relative">
      {/* <Map mapId="map1" longitude={39.2026} latitude={21.5424} /> */}
      <iframe className="border-0 h-[100%] w-[100%] left-0 top-0 absolute" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1233.1974759167613!2d39.26870677448536!3d21.394906181427785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cb00237e8401%3A0xb50e640d74284ee4!2sHiba%20Asia%20Medical%20Center!5e0!3m2!1sen!2sin!4v1725182324883!5m2!1sen!2sin" width="600" height="450"  allowFullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</div>



<div>
</div>



      <div className="flex flex-col items-center justify-center my-20">
        <form className="w-full max-w-[1100px] bg-white shadow-md rounded px-8 pt-6 pb-8">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                {t('Name')}*
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder={t("Enter Your Name")}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                {t('Email')}*
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="email"
                placeholder={t("Your Email")}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                {t('MESSAGE')}*
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                placeholder= {t('MESSAGE')}
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button className="bg-[#1e478e] text-white w-32 hover:bg-white hover:text-[#1e478e] text-xs uppercase px-6 py-4 border-2 border-[#1e478e] rounded shadow-lg transition duration-700 ease-in-out overflow-hidden">
                {t('SEND')}
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
