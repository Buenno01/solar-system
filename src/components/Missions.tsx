import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

function Missions() {
  return (
    <section
      className="container self-center px-10 pb-10
    bg-white bg-opacity-20 mt-28 rounded-2xl mb-4"
    >
      <div data-testid="missions" />
      <Title headline="Missions" />
      <ul className=" flex flex-wrap gap-10 justify-between">
        {
        missions.map((mission, index) => (
          <MissionCard key={ index } { ...mission } />
        ))
      }
      </ul>
    </section>
  );
}

export default Missions;
