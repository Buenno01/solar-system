import React from 'react';

type PlanetCardProps = {
  planetImage: string,
  planetName: string,
};

const loadOnTailwind = [
  'w-Terra',
  'w-Júpiter',
  'w-Saturno',
  'w-Urano',
  'w-Netuno',
  'w-Marte',
  'w-Vênus',
  'w-Mercúrio',
];
let a: string[] = loadOnTailwind;
const b = a;
a = b;

function PlanetCard({ planetImage, planetName }: PlanetCardProps) {
  return (
    <div
      data-testid="planet-card"
      className="w-1/9 flex flex-col justify-center content-center text-center"
    >
      <span className="my-auto flex justify-center">
        <img
          className={ `w-${planetName}` }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
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
