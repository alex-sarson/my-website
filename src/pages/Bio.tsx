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

  function CodingDuration() {
    const start = new Date('2020-01-01').getFullYear();
    const today = new Date().getFullYear();
    const difference = today - start;
    return difference;
  }

  const ArticleContent = [
    {
      title: 'How it all started',
      paragraphs: [
        "I've always had a thing for tech, I built my first computer with my Brother when I was 14. Before that, you would either find me playing World of Warcraft on my Netbook, or Call of Duty on my Xbox 360, so what I loved most about tech was being able to communicate and interact with people all over the world.",
        "But I.T. never interested me at school because I didn't know much about coding, my focus was on designing and making things, instead I decided that Architecture was going to be the path for me. As it turns out I was wrong, I left University with a Bachelors in Architecture and no idea what I wanted to do so I turned to tech. I started teaching myself to code and the rest is history.",
      ],
    },
    {
      title: "Where I'm at now",
      paragraphs: [
        "I've been coding for " +
          CodingDuration() +
          " years now and I love it, especially Front-End development because it scratches the design and making itch that I've always had. One of my favourite aspects of coding is being able to step back and see how you've turned words and numbers into something aesthetically pleasing and functional.",
        "During this time I've been writing websites mainly using LAMP or JAM stacks. I've dipped my toes into the world of headless CMS and have been having a long bathe in the waters of WordPress. I much prefer learning new ways to make web applications, React being one of my latest endeavours, and I aim to tackle many more languages and frameworks as I progress through my career.",
      ],
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
        {ArticleContent.map((section, i) => (
          <ArticleSection key={`articleSection${i}`}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph, pi) => (
              <p key={`paragraph${pi}`}>{paragraph}</p>
            ))}
            {ArticleContent.length !== i + 1 && <Divider />}
          </ArticleSection>
        ))}
      </StickyImageArticle>
    </>
  );
};

const ArticleSection = styled.div`
  margin: var(--margin-section);
  width: 60ch;

  h2 {
    margin-bottom: 0;
  }

  * {
    margin: 30px;
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const Divider = styled.div`
  height: var(--divider-width);
  width: var(--divider-width);
  background-color: var(--surface-container);
  border-radius: 50%;
  margin: var(--divider-margin);
`;

export default BioPage;
