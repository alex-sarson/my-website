import './App.css';
import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import styled from 'styled-components';

function App() {
  return (
    <Layout>
      <Hero />
      <Article>
        <AboutSection />
        <PortfolioSection />
      </Article>
    </Layout>
  );
}

const Article = styled.article`
  max-width: 1200px;
  margin: 0 auto;
`;

export default App;
