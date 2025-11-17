import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import BioPage from './pages/Bio.tsx';
import ResumePage from './pages/Resume.tsx';
import PageNotFound from './pages/404.tsx';
// import Projects from './pages/Projects.tsx';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bio" element={<BioPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="*" element={<PageNotFound />} />
      {/* <Route path="/projects" element={<Projects />} /> */}
    </Routes>
  );
};

export default AppRouter;
