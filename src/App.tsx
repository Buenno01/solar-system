import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

function App() {
  return (
    <div
      className="flex flex-col
      bg-no-repeat bg-cover bg-space-img
      font-my-font
      min-w-screen min-h-screen
      text-white"
    >
      <Header />
      <SolarSystem />
    </div>
  );
}

export default App;
