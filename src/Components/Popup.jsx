import React, { useState } from 'react';

const Popup = ({ isOpen, onClose, imageSrc }) => {

  const [isHovered, setIsHovered] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative">
        <button
          className={`absolute -top-3 -right-3 bg-black p-1 w-8 flex group hover:bg-white justify-center items-center h-8 rounded-full ${
            isHovered ? 'animate-rotate360' : 'animate-reverseRotate360'
          }`}
          onClick={onClose}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className='text-white text-lg font-semibold transform group-hover:text-black'>x</span>
        </button>
        <img src={imageSrc} alt="Popup" className="lg:h-[400px] h-[200px] sm:h-[300px]" />
      </div>
    </div>
  );
};

export default Popup;
