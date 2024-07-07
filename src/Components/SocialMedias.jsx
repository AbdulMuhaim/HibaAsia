  import { FaTiktok, FaSnapchatGhost, FaLinkedinIn, FaYoutube } from "react-icons/fa";
  import { FaFacebookF } from "react-icons/fa6";
  import { RiInstagramFill } from "react-icons/ri";
  import { FaXTwitter } from "react-icons/fa6";


function SocialMedias() {

    const socialMediaItems = [
        { icon: RiInstagramFill, label: "Instagram" },
        { icon: FaTiktok, label: "Tiktok" },
        { icon: FaSnapchatGhost, label: "Snapchat" },
        { icon: FaFacebookF, label: "Facebook" },
        { icon: FaLinkedinIn, label: "LinkedIn" },
        { icon: FaXTwitter, label: "XTwitter" },
        { icon: FaYoutube, label: "Youtube" },
      ];




  return (
<ul>
  {socialMediaItems.map((item, index) => {
    const IconComponent = item.icon;
    return (
      <li
        key={index}
        className={`group  static-button bg-black bg-opacity-40 hover:bg-slate-300 p-1 cursor-pointer rounded-full flex items-center justify-start fixed -right-20 sm:-right-24 lg:-right-32 z-50 transition-all duration-700  w-[120px]  sm:w-[136px] lg:w-[169px] hover:-right-5 sm:hover:-right-10`}
        style={{ top: `${index * 48 + 155}px` }} 

      >
        <div className="bg-white group-hover:bg-[#1e478e] rounded-full p-2 flex items-center justify-center transform transition-transform duration-200 group-hover:animate-reverse-rotate mr-2 sm:mr-3">
          <IconComponent
            className="text-[#1e478e] group-hover:text-white sm:size-25 lg:size-30"
          />
        </div>
        <p className="text-xs sm:text-sm lg:text-base font-medium ">
          {item.label}
        </p>
      </li>
    );
  })}
</ul>
  )
}

export default SocialMedias