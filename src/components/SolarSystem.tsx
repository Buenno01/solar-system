import React from 'react';
import Title from './Title';

function SolarSystem() {
  const headline = 'Planetas';
  return (
    <div data-testid="solar-system">
      <Title headline={ headline } />
    </div>
  );
}

export default SolarSystem;
