import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Hero from '../components/Hero';
import styled from 'styled-components';
import FoundationsLight from '../images/foundations-light.jpg';
import FoundationsDark from '../images/foundations-dark.jpg';
import { ResumeContent } from '../data/Resume';
import { ArticleDivider, ArticleSpacer } from '../components/ArticleSpacers';
import Article from '../components/Article';
import Skills from '../components/Skills';

const ResumePage: React.FC = () => {
  const resume = ResumeContent;

  const { darkMode } = useContext(ThemeContext);
  const Foundations = darkMode ? FoundationsDark : FoundationsLight;

  return (
    <>
      <Hero title="Resume" image={Foundations}>
        A detailed look at my roles, responsibilities,
        <br />and key accomplishments in web development.
      </Hero>
      <Article>
        {resume.map((job, i) => (
          <ArticleSection key={`resumeSection${i}`}>
            <h2>{job.title}</h2>
            <h3>{job.company}</h3>
            <p>{job.duration}</p>
            <ul>
              {job.responsibilities.map((resp, ri) => (
                <li key={`responsibility${ri}`}>{resp}</li>
              ))}
            </ul>
            <Skills skills={job.skills} />
            {resume.length !== i + 1 ? <ArticleDivider /> : <ArticleSpacer />}
          </ArticleSection>
        ))}
      </Article>
    </>
  );
};

const ArticleSection = styled.div`
  margin: var(--margin-section);
  display: flex;
  flex-direction: column;
  
  h3 {
    margin-top: 16px;
    margin-bottom: 0;
  }

  p,
  ul,
  h3,
  h2 {
    margin-right: 24px;
    margin-left: 24px;
  }

  p {
    color: var(--surface-container-text);
    margin-top: 0;
  }

  ul {
    padding-left: 20px;
    margin-top: 32px;

    li {
      margin-bottom: 16px;
    }
  }

`;

export default ResumePage;
