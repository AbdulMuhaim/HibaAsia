import whatsappLogo from "../assets/WhatsApp.svg.png";

function Whatsapp() {
  return (
    <div className="fixed z-20 p-3 flex items-center justify-center rounded-full left-4 sm:left-10 top-1/2 transform -translate-y-1/2 bg-[#2C9542] animate-pulse-border">
      <a
        href="https://api.whatsapp.com/send?phone=9660545961777"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsappLogo}
          className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16"
          alt="WhatsApp Logo"
        />
      </a>
    </div>
  );
}

export default Whatsapp;
