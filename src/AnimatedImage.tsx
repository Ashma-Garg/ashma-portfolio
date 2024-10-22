import React, { useState } from 'react';
import './AnimatedImage.css'; // Import CSS file

interface AnimatedImageProps {
    src: string;
    alt: string;
}

const AnimatedImage = ({ src, alt }: AnimatedImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`animated-image ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export default AnimatedImage;