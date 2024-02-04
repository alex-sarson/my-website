import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import BioPage from './pages/Bio.tsx';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bio" element={<BioPage />} />
    </Routes>
  );
};

export default AppRouter;
