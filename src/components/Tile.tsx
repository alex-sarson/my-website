import { Link } from 'react-router-dom';

interface TileProps {
  excerpt: string;
  image: string;
  link: string;
  title: string;
}

const Tile: React.FC<TileProps> = ({ excerpt, image, link, title }) => {
  const imageStyling = {
    filter: 'opacity(0.5)',
  };
  return (
    <Link to={link} className="tile-surface">
      <div className="tile-top">
        <img src={image} alt={`${title} Image`} style={imageStyling} />
      </div>
      <div className="tile-bottom">
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </div>
    </Link>
  );
};

export default Tile;
