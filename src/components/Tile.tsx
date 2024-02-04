import styled from "styled-components"

interface TileProps {
  excerpt: string;
  image: string | undefined;
  key: string;
  link: string;
  title: string;
}

const Tile: React.FC<TileProps> = ({ excerpt, image, key, link, title }) => {
  return (
    <Surface key={key} href={link}>
      <div className="tile-top">
        <img src={image} alt={`${title} Image`} />
      </div>
      <div className="tile-bottom">
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </div>
    </Surface>
  )
}

const Surface = styled.a`
  background-color: var(--surface-container);
  border-radius: var(--tile-border-radius);
  color: var(--surface-text);
  transition: color 0.2s ease-out, 
              background-color 0.2s ease-out,
              border-radius 0.2s ease-out;
  overflow: hidden;

  &:hover,
  &:active {
    color: var(--surface-text);
    background-color: var(--surface-container-hover);
  }

  &:active {
    border-radius: var(--tile-border-radius-active);
  }

  .tile-top {
    width: 100%;
    height: 200px;
    border-radius: var(--tile-border-radius);
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`

export default Tile