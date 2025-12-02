import { useState } from "react";
import styled from "styled-components";

interface ResponsiveImageProps {
  image: string;
  title: string;
  style?: React.CSSProperties;
  className?: string;
  key?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ image, title, style, className, key }) => {
  const [loaded, setLoaded] = useState(false);
  const imageName = image
    .replace(/^\/src\/images\//, '')
    .replace(/^\/assets\//, '')
    .replace(/\.[^/.]+$/, '')
    .replace(/-[a-f0-9]+$/, '');  // Remove hash suffix

  const srcSet = `
    /resized/480/${imageName}-480w.webp 480w,
    /resized/800/${imageName}-800w.webp 800w,
    /resized/1200/${imageName}-1200w.webp 1200w,
    /resized/1400/${imageName}-1400w.webp 1400w,
    /resized/2000/${imageName}-2000w.webp 2000w
  `;

  return (
    <StyledImage 
      src={`/resized/480/${imageName}-480w.webp`}
      alt={title}
      srcSet={srcSet}
      style={style}
      className={className}
      key={key}
      sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, (max-width: 1400px) 1200px, (max-width: 1600px) 1400px, 2000px"
      onLoad={() => setLoaded(true)}
      data-loaded={loaded}
    />
  );
};

export default ResponsiveImage;

const StyledImage = styled.img`
  &[data-loaded='false'] {
    filter: blur(20px);
  }

  &[data-loaded='true'] {
    filter: blur(0);
    transition: filter 0.3s ease-in-out;
  }
`