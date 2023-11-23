import React from 'react';

type MissionCardProps = {
  name: string,
  year: string,
  country: string,
  destination: string,
};

function MissionCard({ country, destination, name, year }: MissionCardProps) {
  return (
    <li
      className="flex flex-col text-center
    px-2 py-1 justify-between
    bg-black bg-opacity-40 rounded-xl w-1/5 h-48"
    >
      <div data-testid="mission-card" />
      <h3 className="text-lg font-medium">{name}</h3>
      <h4 className="text-md font-normal">{destination}</h4>
      <p className="text-sm font-light">{country}</p>
      <p className="text-sm font-light text-end">{year}</p>
    </li>
  );
}

export default MissionCard;
