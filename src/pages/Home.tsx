import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import PetalsLight from '../images/petals-light.webp';
import PetalsDark from '../images/petals.webp';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Seo from '../components/Seo';

const Home: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const Plant = darkMode ? PetalsDark : PetalsLight;
  const title = 'Home';
  const description = "I'm Alex Sarson, a self taught Web Developer based in London, UK. I love learning new things, solving problems and creating beautiful websites!";
  return (
    <>
      <Seo title={title} description={description} />
      <Hero title="Hello" image={Plant}>
        I'm Alex Sarson, a self taught Web Developer based in London, UK.
        <br />I love learning new things, solving problems and creating
        beautiful websites!
      </Hero>
      <article>
        <AboutSection />
      </article>
    </>
  );
};

export default Home;
