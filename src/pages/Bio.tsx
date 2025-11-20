import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Hero from '../components/Hero';
import StickyImageArticle from '../components/StickyImageArticle';
import ImageOfMe from '../images/me.png';
import styled from 'styled-components';
import StylesDark from '../images/styles-dark.jpg';
import StylesLight from '../images/styles-light.jpg';
import { CodingDuration, MyAge } from '../utils/Dates.tsx';
import { BioContent } from '../data/Bio.tsx';

const BioPage: React.FC = () => {

  const imageStyling = {
    filter: 'brightness(0.8)',
  };

  const articleContent = BioContent(MyAge(), CodingDuration());

  const { darkMode } = useContext(ThemeContext);
  const Styles = darkMode ? StylesDark : StylesLight;

  return (
    <>
      <Hero title="Bio" image={Styles}>
        The story of Me, how I became a Web Developer,
        <br/>and everything inbetween.
      </Hero>
      <StickyImageArticle
        image={<img src={ImageOfMe} alt="Me" style={imageStyling} />}
      >
        {articleContent.map((section, i) => (
          <ArticleSection key={`articleSection${i}`}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph, pi) => (
              <p key={`paragraph${pi}`}>{paragraph}</p>
            ))}
            {articleContent.length !== i + 1 ? <Divider /> : <Spacer />}
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
  background-color: var(--theme-colour-primary);
  border-radius: 50%;
  margin: var(--divider-margin);
`;

const Spacer = styled.div`
  height: var(--spacer-height);
`;

export default BioPage;
