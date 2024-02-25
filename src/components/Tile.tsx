import { Link } from 'react-router-dom';

interface TileProps {
  excerpt: string;
  image: string | undefined;
  link: string;
  title: string;
}

const Tile: React.FC<TileProps> = ({ excerpt, image, link, title }) => {
  return (
    <Link to={link} className="tile-surface">
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
