import Article from '../components/Article';
import Hero from '../components/Hero';

const BioPage: React.FC = () => {
  return (
    <>
      <Hero title="Bio">
        This is the copy for the bio section.
        <br />I don't really know what to write here yet
      </Hero>
      <Article />
    </>
  );
};

export default BioPage;
