import React from 'react';

import RandomPlanet from "../random-planet";

const HomePage = () => {
  return (
    <div className={'row'}>
      <div className={'col'}>
        <RandomPlanet />
        <h1>Welcome to Star Wars DB!</h1>
      </div>
    </div>
  );
};

export default HomePage;