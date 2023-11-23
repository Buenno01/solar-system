import React from 'react';

type PlanetCardProps = {
  planetImage: string,
  planetName: string,
};

function PlanetCard({ planetImage, planetName }: PlanetCardProps) {
  return (
    <div data-testid="planet-card">
      <img src={ planetImage } alt={ planetName } />
      <p data-testid="planet-name">
        {planetName}
      </p>
    </div>
  );
}

export default PlanetCard;
