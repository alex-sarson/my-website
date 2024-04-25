import React from 'react';
import Hero from '../components/Hero';
import Planet from '../images/planet.jpg';

const PageNotFound: React.FC = () => {
  return (
    <>
      <Hero title="Oops" image={Planet}>
        This page doesn't exist
      </Hero>
    </>
  );
};

export default PageNotFound;
