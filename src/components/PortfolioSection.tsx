import styled from 'styled-components';
import Section from './Section';
import Tile from './Tile';
import Scrum from '../images/scrum.webp';
import Bar from '../images/bar.webp';

const PortfolioSection: React.FC = () => {
  const tiles = [
    {
      title: 'Projects',
      link: '/bio',
      image: Scrum,
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus asperiores obcaecati facere repudiandae aliquam soluta. Natus nulla cumque veniam minus.',
    },
    {
      title: 'Project 2',
      link: '/bio',
      image: Bar,
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptate ad quae debitis, perferendis impedit distinctio quibusdam possimus earum aliquid!',
    },
  ];

  return (
    <Section>
      <HeaderContainer>
        <h2>Portfolio</h2>
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
  margin: 24px;

  h2 {
    margin: 0;
  }
`;

export default PortfolioSection;
