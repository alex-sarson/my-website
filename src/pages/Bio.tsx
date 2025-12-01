import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Hero from '../components/Hero';
import StickyImageArticle from '../components/StickyImageArticle';
import { ArticleDivider, ArticleSpacer } from '../components/ArticleSpacers.tsx';
import ImageOfMe from '../images/me.webp';
import ImageOfMeAndRyan from '../images/me-and-ryan-at-fish.webp';
import styled from 'styled-components';
import StylesDark from '../images/styles-dark.webp';
import StylesLight from '../images/styles-light.webp';
import { CodingDuration, MyAge } from '../utils/Dates.tsx';
import { BioContent } from '../data/Bio.tsx';
import Seo from '../components/Seo.tsx';

const BioPage: React.FC = () => {

  const images = [
    { src: ImageOfMe, alt: 'Me' },
    { src: ImageOfMeAndRyan, alt: 'Me & Ryan' },
  ]

  const articleContent = BioContent(MyAge(), CodingDuration());

  const { darkMode } = useContext(ThemeContext);
  const Styles = darkMode ? StylesDark : StylesLight;

  const title = 'Bio';
  const description = 'The story of me, how I became a Web Developer, and everything inbetween.';

  return (
    <>
      <Seo title={title} description={description} slug="bio" />
      <Hero title="Bio" image={Styles}>
        The story of me, how I became a Web Developer,
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

  h2 {
    margin-bottom: 0;
  }

  p,
  h2 {
    margin: 40px;
    margin-left: var(--article-margin);
    margin-right: var(--article-margin);
  }

  p:first-of-type {
    margin-top: 16px;
  }
`;

export default BioPage;
