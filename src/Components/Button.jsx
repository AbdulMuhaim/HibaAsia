// Button.jsx
import React from 'react';

const Button = ({ onClick, text, style, hoverStyle }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button 
      onClick={onClick} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      style={isHovered ? { ...style, ...hoverStyle } : style} 
      className="custom-button"
    >
      {text}
    </button>
  );
};

export default Button;
