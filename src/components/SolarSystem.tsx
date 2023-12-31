import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  const headline = 'Planetas';
  return (
    <section>
      <div data-testid="solar-system" />
      <Title headline={ headline } />
      <div
        className="flex justify-center relative"
      >
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
    </section>
  );
}

export default SolarSystem;
