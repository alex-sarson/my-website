import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import Socials from '../components/Socials';

const Home: React.FC = () => {
  return (
    <>
      <Hero title="Hello">
        I'm Alex Sarson, a self taught Web Developer based in London, UK.
        <br />I love learning new things, solving problems and creating
        beautiful websites!
      </Hero>
      <article>
        <AboutSection />
        <PortfolioSection />
        <Socials />
      </article>
    </>
  );
};

export default Home;