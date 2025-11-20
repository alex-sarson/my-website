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

  return (
    <Link to={link} className="tile-surface" title={title}>
      <div className="tile-top">
        <img src={image} alt={`${title} Image`} />
      </div>
      <div className="tile-bottom">
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </div>
    </Link>
  );
};

export default Tile;
