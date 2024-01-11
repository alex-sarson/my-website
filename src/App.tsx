import './App.css';
import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';

function App() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <PortfolioSection />
    </Layout>
  );
}

// const Container = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
// `;

export default App;
