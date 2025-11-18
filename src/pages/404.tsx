import React, { useContext } from 'react';
import Hero from '../components/Hero';
import RedPlant from '../images/red-plant.jpg';
import PinkPlant from '../images/pink-plant.jpg';
import { ThemeContext } from '../context/ThemeContext';

const PageNotFound: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const Plant = darkMode ? RedPlant : PinkPlant;
  return (
    <>
      <Hero title="Oops" image={Plant}>
        This page doesn't exist
      </Hero>
    </>
  );
};

export default PageNotFound;
