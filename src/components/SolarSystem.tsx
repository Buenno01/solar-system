import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  const headline = 'Planetas';
  return (
    <div data-testid="solar-system">
      <Title headline={ headline } />
      <div>
        {
          Planets.map((planet, index) => (
            <PlanetCard
              key={ index }
              planetImage={ planet.image }
              planetName={ planet.name }
            />
          ))
        }
      </div>
    </div>
  );
}

export default SolarSystem;
