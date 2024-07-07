import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#071d28] text-white py-12 px-10"
    style={{
      backgroundImage: 'url("https://images.pexels.com/photos/5428267/pexels-photo-5428267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"),linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))', 
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundBlendMode: "overlay",
    }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0 mr-7">
          <h2 className="text-lg font-semibold mb-4">CONTACT DETAILS</h2>
          <address className="not-italic mb-4 flex text-sm" style={{lineHeight:"30px"}}>
         <FaLocationDot  className='mr-3 text-xl' /> Hiba Asia Polyclinic <br /> Dist, Abi Abdullah Al Ayashi, Mada'en Al-Fahd, Jeddah 22343, Saudi Arabia
          </address>
          <p className="mb-4 flex">
          <IoIosCall className='mr-3 text-xl'/>
<a href="tel:+9660545961777" className="hover:underline text-sm">+9660545961777</a>
          </p>
          <p className='flex'>
          <IoMail className='mr-3 text-xl'/>
 <a href="mailto:info@hibaasia.care" className="hover:underline text-sm">info@hibaasia.care</a>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between flex-grow">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-lg font-semibold mb-4">QUICK LINKS</h2>
            <ul className='text-sm flex flex-col gap-2'>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Hiba Asia</a></li>
              <li><a href="#" className="hover:underline">President's Message</a></li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-lg font-semibold mb-10"></h2>
            <ul className='text-sm flex flex-col gap-2'>
              <li><a href="#" className="hover:underline">Mission & Vision</a></li>
              <li><a href="#" className="hover:underline">Departments</a></li>
              <li><a href="#" className="hover:underline">Facilities</a></li>
              <li><a href="#" className="hover:underline">Insurance Partners</a></li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-lg font-semibold mb-10"></h2>
            <ul className='text-sm flex flex-col gap-2'>
              <li><a href="#" className="hover:underline">Doctors</a></li>
              <li><a href="#" className="hover:underline">Service & Packages</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Health Blog</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-10"></h2>
            <ul className='text-sm flex flex-col gap-2'>
              <li><a href="#" className="hover:underline">Join Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm"><span className='opacity-60'> &copy; Hiba Asia Medical Group | Designed and developed by</span> <a href="#" className="hover:underline">FarAa Technologies Pvt. Ltd.</a></p>
        <div className="flex mt-4 md:mt-0">
          <a href="#" className="mx-2  group rounded-full hover:bg-white border p-2"><FaFacebookF className='group-hover:text-black' /></a>
          <a href="#" className="mx-2  group rounded-full hover:bg-white border p-2"><FaTwitter className='group-hover:text-black' /></a>
          <a href="#" className="mx-2  group rounded-full hover:bg-white border p-2"><FaInstagram className='group-hover:text-black' /></a>
          <a href="#" className="mx-2  group rounded-full hover:bg-white border p-2"><FaLinkedinIn className='group-hover:text-black' /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;








