import Hero from '../components/Hero';
import StickyImageArticle from '../components/StickyImageArticle';
import ImageOfMe from '../images/me.png';
import Pepe from '../images/giga pepe.jpg';
import Synth from '../images/images.jpg';
import styled from 'styled-components';

const BioPage: React.FC = () => {
  const ImagesArray = [
    {
      alt: 'Me',
      src: ImageOfMe,
      zIndex: 5,
    },
    {
      alt: 'Pepe',
      src: Pepe,
      zIndex: 4,
    },
    {
      alt: 'Synth',
      src: Synth,
      zIndex: 3,
    },
  ];

  return (
    <>
      <Hero title="Bio">
        The story of Me, how I became a Web Developer and everything inbetween
      </Hero>
      <StickyImageArticle
        images={ImagesArray.map((item, i) => (
          <img
            src={item.src}
            alt={item.alt}
            key={i}
            style={{ zIndex: item.zIndex }}
          />
        ))}
      >
        <ArticleSection>
          <h2>How it all started</h2>
          <p>
            I've always had a thing for tech, I built my first computer with my
            Brother when I was 14. Before that, you would either find me playing
            World of Warcraft on my Netbook, or Call of Duty on my Xbox 360, so
            what I loved most about tech was being able to communicate and
            interact with people all over the world.
          </p>
          <p>
            But I.T. never interested me at school because I didn't know much
            about coding, my focus was on designing and making things, instead I
            decided that Architecture was going to be the path for me.
          </p>
        </ArticleSection>
      </StickyImageArticle>
    </>
  );
};

const ArticleSection = styled.div`
  margin: var(--margin-article);
  border-bottom: 5px dashed var(--surface-container);
  padding-bottom: 80px;

  h2 {
    margin-bottom: 0;
  }

  * {
    margin: 30px;
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export default BioPage;
