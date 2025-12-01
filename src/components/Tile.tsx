import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

interface TileProps {
  excerpt: string;
  darkImage: string;
  lightImage: string;
  link: string;
  title: string;
}

const Tile: React.FC<TileProps> = ({ excerpt, darkImage, lightImage, link, title }) => {
  const { darkMode } = useContext(ThemeContext);
  const image = darkMode ? darkImage : lightImage;
  const imageName = image
    .replace(/^\/src\/images\//, '')
    .replace(/\.[^/.]+$/, '');

  return (
    <Link to={link} className="tile-surface" title={title}>
      <div className="tile-top">
        <img 
          src={image} 
          alt={`${title} Image`}
          srcSet={
            `/src/images/resized/480/${imageName}-480w.webp 480w,
            /src/images/resized/800/${imageName}-800w.webp 800w,
            /src/images/resized/1200/${imageName}-1200w.webp 1200w,
            /src/images/resized/1400/${imageName}-1400w.webp 1400w`
          }
          sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, (max-width: 1400px) 1200px, 1400px"
        />
      </div>
      <div className="tile-bottom">
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </div>
    </Link>
  );
};

export default Tile;
