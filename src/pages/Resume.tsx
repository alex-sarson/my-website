import StickyImageArticle from '../components/StickyImageArticle';
import Hero from '../components/Hero';
import PlaceHolder from '../images/placeholder-2.webp';
import styled from 'styled-components';
import Blue from '../images/blue.jpg';

const ResumePage: React.FC = () => {
  const ArticleContent = [
    {
      title: 'First bit of exp',
      paragraphs: ['Some content here.', 'And here.'],
    },
  ];

  return (
    <>
      <Hero title="Resume" image={Blue}>
        This is the copy for the Resume section.
        <br />I don't really know what to write here yet
      </Hero>
      <StickyImageArticle
        image={<img src={PlaceHolder} alt="Place Holder Image" />}
      >
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

export default ResumePage;
