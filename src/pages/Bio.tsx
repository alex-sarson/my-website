import Hero from '../components/Hero';
import StickyImageArticle from '../components/StickyImageArticle';
import ImageOfMe from '../images/me.png';
import styled from 'styled-components';
import GreenPainting from '../images/green-painting.jpg';

const BioPage: React.FC = () => {
  function CodingDuration() {
    const start = new Date('2020-01-01').getFullYear();
    const today = new Date().getFullYear();
    const difference = today - start;
    return difference;
  }

  function MyAge() {
    const todaysDate = {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    };
    const myBd = {
      day: new Date('1997-01-24').getDate(),
      month: new Date('1997-01-24').getMonth() + 1,
      year: new Date('1997-01-24').getFullYear(),
    };
    let age;

    switch (true) {
      case todaysDate.month == myBd.month && todaysDate.day >= myBd.day: {
        age = todaysDate.year - myBd.year;
        break;
      }
      case todaysDate.month > myBd.month: {
        age = todaysDate.year - myBd.year;
        break;
      }
      default: {
        age = todaysDate.year - myBd.year - 1;
        break;
      }
    }
    return age;
  }

  const ArticleContent = [
    {
      title: 'A bit about me',
      paragraphs: [
        "Hey 👋🏽 I'm Alex, a " +
          MyAge() +
          " year old Web Developer living in London. I moved to London in 2023 to expose myself to better opportunites and I love it here, I'm definitely more of a city person. My favourite thing about London is that you can meet people from all walks of life, just walking down a busy street you hear so many different accents!",
        "In my free time, I enjoy going to the gym four days a week, watching anime (currently One Piece), reading (particularly Sci-Fi; Isaac Asimov is my favourite author), listening to music, and honing my coding skills (I'm currently learning Gleam).",
      ],
    },
    {
      title: 'How it all started',
      paragraphs: [
        "I've always been fascinated by tech. When I was 14, my brother and I built my first computer together. Before that, you'd catch me gaming on my Netbook, playing World of Warcraft or Runescape. I also spent a lot of time playing Call of Duty on my Xbox. What really got me hooked was how tech allowed me to connect with people from all over.",
        "But I.T. never interested me at school, I feel like if I'd have known about coding back then things would have gone differently. I payed close attention to my affinity for designing and making things. So, I figured I'd go into Architecture. Turns out, that wasn't quite my thing. After university, armed with a Bachelor's in Architecture and no clue about what's next, I decided to dive into tech. Taught myself how to code, and well, the rest is history.",
      ],
    },
    {
      title: "Where I'm at now",
      paragraphs: [
        "I've been coding for " +
          CodingDuration() +
          " years now and I love it, especially Front-End development because it scratches the design and making itch that I've always had. One of my favourite aspects of coding is being able to step back and admire the work you've done, It's a very important part of my making process.",
        'Over these ' +
          CodingDuration() +
          "years I've been writing websites mainly using LAMP or JAM stacks. I've dipped my toes into the world of headless CMS and have been having a long bathe in the waters of WordPress. I much prefer learning new ways to make web applications, React being one of my latest endeavours.",
        "My drive is always improving on myself, finding ways that I can be a better and more efficient developer. Recently I've taken on the role of Release Manager at my company. As a release manager, I see the role as crucial for establishing and maintaining efficient processes. This responsibility not only ensures smooth releases but also facilitates my growth as a developer by mastering project lifecycle management and enhancing our team's workflow.",
      ],
    },
  ];

  return (
    <>
      <Hero title="Bio" image={GreenPainting}>
        The story of Me, how I became a Web Developer, and everything inbetween
      </Hero>
      <StickyImageArticle image={<img src={ImageOfMe} alt="Me" />}>
        {ArticleContent.map((section, i) => (
          <ArticleSection key={`articleSection${i}`}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph, pi) => (
              <p key={`paragraph${pi}`}>{paragraph}</p>
            ))}
            {ArticleContent.length !== i + 1 ? <Divider /> : <Spacer />}
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
    margin: 40px;
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

const Spacer = styled.div`
  height: var(--spacer-height);
`;

export default BioPage;
