import styled from 'styled-components';
import Section from './Section';
import Me from '../images/me.png';
import Tile from './Tile';

const AboutSection: React.FC = () => {
  const tiles = [
    {
      title: 'Bio',
      link: '/bio',
      image: { Me },
      excerpt:
        "I've been coding for ** years now. Click here for a little bit more about me.",
    },
    {
      title: 'Resume',
      link: '/resume',
      image: { Me },
      excerpt:
        'After graduating with an Architecture degree, I decided that a career in Tech was more suited for me.',
    },
  ];

  console.log(tiles);

  return (
    <Section>
      <HeaderContainer>
        <h2>About Me</h2>
      </HeaderContainer>
      <div className="tiles-container">
        {tiles.map((tile, i) => (
          <Tile
            excerpt={tile.excerpt}
            image={tile.image.Me}
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
  margin: 24px;

  h2 {
    margin: 0;
  }
`;

// const Tile = styled.div`
//   background-color: var(--surface-container);
//   border-radius: var(--tile-border-radius);

//   .tile-top{
//     width: 100%;
//     height: 200px;
//     background-color: pink;
//     border-radius: var(--tile-border-radius);
//     overflow: hidden;

//     img {
//       height: 100%;
//       width: 100%;
//       object-fit: cover;
//     }
//   }
// `

export default AboutSection;
