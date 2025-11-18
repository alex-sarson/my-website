import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
// import PortfolioSection from '../components/PortfolioSection';
import PetalsLight from '../images/petals-light.png';
import PetalsDark from '../images/petals.png';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Home: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const Plant = darkMode ? PetalsDark : PetalsLight;
  return (
    <>
      <Hero title="Hello" image={Plant}>
        I'm Alex Sarson, a self taught Web Developer based in London, UK.
        <br />I love learning new things, solving problems and creating
        beautiful websites!
      </Hero>
      <article>
        <AboutSection />
        {/* <PortfolioSection /> */}
      </article>
    </>
  );
};

export default Home;
