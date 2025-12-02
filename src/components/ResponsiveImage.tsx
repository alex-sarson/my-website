import { useState } from "react";
import styled from "styled-components";

interface ResponsiveImageProps {
  image: string;
  style?: React.CSSProperties;
  className?: string;
  key?: string;
  title?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ image, title, style, className, key }) => {
  const imageName = image
    .replace(/^\/src\/images\//, '')
    .replace(/^\/assets\//, '')
    .replace(/\.[^/.]+$/, '')
    .replace(/-[a-f0-9]+$/, '');

  const storageKey = `img-loaded-${imageName}`;
  const sizeStorageKey = `img-size-${imageName}`;
  const [loaded, setLoaded] = useState(() => {
    try {
      return localStorage.getItem(storageKey) === 'true';
    } catch {
      return false;
    }
  });
  const [selectedSize, setSelectedSize] = useState(() => {
    try {
      return localStorage.getItem(sizeStorageKey) || '480';
    } catch {
      return '480';
    }
  });

  const handleLoad = () => {
    setLoaded(true);
    try {
      localStorage.setItem(storageKey, 'true');
    } catch (e) {
      // Ignore localStorage errors
    }
  };

  const handleSrcSet = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    const src = img.currentSrc;
    const match = src.match(/\/resized\/(\d+)\//);
    if (match) {
      const size = match[1];
      setSelectedSize(size);
      try {
        localStorage.setItem(sizeStorageKey, size);
      } catch (e) {
        // Ignore localStorage errors
      }
    }
  };

  const srcSet = `
    /resized/480/${imageName}-480w.webp 480w,
    /resized/800/${imageName}-800w.webp 800w,
    /resized/1200/${imageName}-1200w.webp 1200w,
    /resized/1400/${imageName}-1400w.webp 1400w,
    /resized/2000/${imageName}-2000w.webp 2000w
  `;

  return (
    <StyledImage 
      src={`/resized/${selectedSize}/${imageName}-${selectedSize}w.webp`}
      srcSet={srcSet}
      style={style}
      alt={title}
      className={className}
      key={key}
      sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, (max-width: 1400px) 1200px, (max-width: 1600px) 1400px, 2000px"
      onLoad={handleLoad}
      onLoadedMetadata={handleSrcSet}
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
`;