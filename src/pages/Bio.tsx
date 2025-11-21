import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Hero from '../components/Hero';
import StickyImageArticle from '../components/StickyImageArticle';
import { ArticleDivider, ArticleSpacer } from '../components/ArticleSpacers.tsx';
import ImageOfMe from '../images/me.png';
import ImagePlaceholder from '../images/placeholder-2.webp';
import styled from 'styled-components';
import StylesDark from '../images/styles-dark.jpg';
import StylesLight from '../images/styles-light.jpg';
import { CodingDuration, MyAge } from '../utils/Dates.tsx';
import { BioContent } from '../data/Bio.tsx';

const BioPage: React.FC = () => {

  const images = [
    { src: ImageOfMe, alt: 'Me' },
    { src: ImagePlaceholder, alt: 'Placeholder' },
  ]

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
        images={images}
      >
        {articleContent.map((section, i) => (
          <ArticleSection key={`articleSection${i}`}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph, pi) => (
              <p key={`paragraph${pi}`}>{paragraph}</p>
            ))}
            {articleContent.length !== i + 1 ? <ArticleDivider /> : <ArticleSpacer />}
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
    line-height: 64px;
  }

  p,
  h2 {
    margin: 40px;
    margin-left: 24px;
    margin-right: 24px;
  }

  p:first-of-type {
    margin-top: 16px;
  }
`;

export default BioPage;
