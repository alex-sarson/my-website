import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import Socials from '../components/Socials';
import styled from 'styled-components';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Article>
        <AboutSection />
        <PortfolioSection />
        <Socials />
      </Article>
    </>
  );
};

const Article = styled.article`
  max-width: 1200px;
  margin: 0 auto;
`;

export default Home;
