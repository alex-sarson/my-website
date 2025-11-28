import styled from 'styled-components';
import Section from './Section';
import Tile from './Tile';
import { Tiles } from '../data/Home';

const AboutSection: React.FC = () => {
  const aboutTiles = Tiles;

  return (
    <Section>
      <HeaderContainer>
        <h2>About Me</h2>
      </HeaderContainer>
      <div className="tiles-container">
        {aboutTiles.map((tile, i) => (
          <Tile
            excerpt={tile.excerpt}
            darkImage={tile.darkImage}
            lightImage={tile.lightImage}
            key={`tile${i}`}
            link={tile.link}
            title={tile.title}
          />
        ))}
      </div>
    </Section>
  );
};

const HeaderContainer = styled.div`
  margin: var(--margin-header);

  h2 {
    margin: 0;
  }
`;

export default AboutSection;
