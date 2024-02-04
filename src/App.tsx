import './App.css';
import Layout from './components/Layout';
import AppRouter from './Router';

function App() {
  console.log('render');
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
