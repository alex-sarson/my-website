import styled from 'styled-components';
import Section from './Section';
import StationP from '../images/station-pianist.webp';
import Trek from '../images/trek.webp';
import Tile from './Tile';

const AboutSection: React.FC = () => {
  const tiles = [
    {
      title: 'Bio',
      link: '/bio',
      image: StationP,
      excerpt: 'The part where I tell you a little bit about me.',
    },
    {
      title: 'Resume',
      link: '/resume',
      image: Trek,
      excerpt:
        'After graduating with an Architecture degree, I decided that a career in Tech was more suited for me.',
    },
  ];

  return (
    <Section>
      <HeaderContainer>
        <h2>About Me</h2>
      </HeaderContainer>
      <div className="tiles-container">
        {tiles.map((tile, i) => (
          <Tile
            excerpt={tile.excerpt}
            image={tile.image}
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
