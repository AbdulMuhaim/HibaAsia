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
        className={`group w-24 sm:w-32 lg:w-40 bg-slate-300 p-1 cursor-pointer rounded-full flex items-center justify-start fixed -right-16 sm:-right-24 lg:-right-28 z-50 transition-all duration-1000 hover:w-32 sm:hover:w-40 lg:hover:w-48 hover:-right-8`}
        style={{ top: `${index * 52 + 170}px` }} // Adjust the spacing and initial top position as needed
      >
        <div className="bg-white group-hover:bg-[#00918d] rounded-full h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 flex items-center justify-center transform transition-transform duration-100 group-hover:animate-reverse-rotate mr-2 sm:mr-3">
          <IconComponent
            size={20}
            className="text-[#00918d] group-hover:text-white sm:size-25 lg:size-30"
          />
        </div>
        <p className="text-xs sm:text-sm lg:text-base font-medium">
          {item.label}
        </p>
      </li>
    );
  })}
</ul>
  )
}

export default SocialMedias