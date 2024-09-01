import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaSnapchatGhost, FaTiktok} from 'react-icons/fa';
import { FaLocationDot,FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import footerBgImage from "../assets/pexels-photo-5428267.webp"
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const { i18n, t } = useTranslation();
  const navigate = useNavigate()
  const isArabic = i18n.language === "ar";


  return (
    <footer className="bg-[#071d28] text-white py-12 px-10 "
    style={{
      backgroundImage: `url(${footerBgImage}),linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))`, 
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundBlendMode: "overlay",
    }}>
      {/* <div className=' flex flex-col items-center bg-red-500 w-full'> */}
      <div className=" mx-auto px-4 max-w-[1150px] flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0 mr-2">
          <h2 className="text-lg font-semibold mb-4">{t('CONTACT DETAILS')}</h2>

          <p className="mb-4 flex">
          <FaLocationDot className={` ${isArabic?'ml-3':'mr-3'} text-xl`}/>
<a  className="text-sm opacity-85 max-w-[400px]" style={{lineHeight:"30px"}}>{t('hospitalLocation')}</a>
          </p>
          <p className="mb-4 flex">
          <IoIosCall className={` ${isArabic?'ml-3':'mr-3'} text-xl`}/>
<a href="tel:+9660545961777" className="hover:underline text-sm opacity-85">+9660545961777</a>
          </p>
          <p className='flex'>
          <IoMail className={` ${isArabic?'ml-3':'mr-3'} text-xl`}/>
 <a href="mailto:info@hibaasia.care" className="hover:underline text-sm opacity-85">info@hibaasia.care</a>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between flex-grow">
          <div className="md:mb-0 md:mr-8">
            <h2 className="text-lg font-semibold mb-4">{t('QUICK LINKS')}</h2>
            <ul className='text-sm flex flex-col gap-2 opacity-85'>
              <li onClick={()=>navigate('/')} className="hover:underline cursor-pointer ">{t('Home')}</li>
              <li onClick={()=>navigate('/about')} className="hover:underline cursor-pointer">{t('About')}</li>
              <li className="hover:underline cursor-pointer" onClick={()=>navigate('/about?section=president-message')}>{t(`PRESIDENT'S`)} {t('MESSAGE')}</li>
            </ul>
          </div>
          <div className="md:mb-0 md:mr-8">
            <h2 className="text-lg font-semibold mt-10"></h2>
            <ul className='text-sm flex flex-col gap-2 opacity-85'>
              <li onClick={()=>navigate('/doctors')} className="hover:underline cursor-pointer">{t('Doctors')}</li>
              <li onClick={()=>navigate('/services')} className="hover:underline cursor-pointer">{t('Services')}</li>
              <li onClick={()=>navigate('/vision')} className="hover:underline cursor-pointer">{t('MISSION & VISION')}</li>
            </ul>
          </div>
          <div className="md:mb-0 md:mr-8">
            <h2 className="text-lg font-semibold mt-10"></h2>
            <ul className='text-sm flex flex-col gap-2 opacity-85'>
              <li onClick={()=>navigate('/gallery')} className="hover:underline cursor-pointer">{t('Gallery')}</li>
              <li onClick={()=>navigate('/contact')} className="hover:underline cursor-pointer">{t('Contact')}</li>
              <li onClick={()=>navigate('/news&events')} className="hover:underline cursor-pointer">{t('News & Events')} </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mt-10"></h2>
            <ul className='text-sm flex flex-col gap-2 opacity-85'>
            <li onClick={()=>navigate('/team')} className="hover:underline cursor-pointer">{t('Team')}</li>
            <li><a href="#" className="hover:underline cursor-pointer">{t('Privacy Policy')}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1150px] mx-auto px-4 mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm"><span className='opacity-60'> &copy; Hiba Asia Medical Group | Designed and developed by</span> <a href="https://www.linkedin.com/in/abdul-muhaim-651804190/" className="hover:underline">Abdul Muhaim</a></p>
        <div className="flex mt-4 md:mt-0">
          <a href="https://www.facebook.com/HibaAsia.care/" className="mx-2  group rounded-full hover:bg-white border p-2"><FaFacebookF className='group-hover:text-black' /></a>
          <a href="https://x.com/hiba_asia_waz" className="mx-2  group rounded-full hover:bg-white border p-2"><FaXTwitter className='group-hover:text-black' /></a>
          <a href="https://www.instagram.com/hibaasia.care/" className="mx-2  group rounded-full hover:bg-white border p-2"><FaInstagram className='group-hover:text-black' /></a>
          <a href="https://www.linkedin.com/company/hibaasia/" className="mx-2  group rounded-full hover:bg-white border p-2"><FaLinkedinIn className='group-hover:text-black' /></a>
          <a href="https://www.youtube.com/channel/UCPnm2Cu5Oh1rWGIoVboDOOQ" className="mx-2  group rounded-full hover:bg-white border p-2"><FaYoutube className='group-hover:text-black' /></a>
          <a href="https://www.snapchat.com/add/hibaasia.care?invite_id=trvr6QEe&locale=en_IN&share_id=y_TsKRKQT8uHgIonRdOqvQ&sid=631801f96c6c48b3a8b54899fb69ead4" className="mx-2  group rounded-full hover:bg-white border p-2"><FaSnapchatGhost className='group-hover:text-black' /></a>
          <a href="https://www.tiktok.com/@hibaasiacare" className="mx-2  group rounded-full hover:bg-white border p-2"><FaTiktok className='group-hover:text-black' /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;








