import React from 'react';

type PlanetCardProps = {
  planetImage: string,
  planetName: string,
};

function PlanetCard({ planetImage, planetName }: PlanetCardProps) {
  return (
    <div
      data-testid="planet-card"
      className="flex flex-col justify-center content-center text-center"
    >
      <span className="w-48 flex self-center">
        <img src={ planetImage } alt={ planetName } />
      </span>
      <h3
        className="text-xl"
        data-testid="planet-name"
      >
        {planetName}
      </h3>
    </div>
  );
}

export default PlanetCard;
