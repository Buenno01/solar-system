import React from 'react';

function Header() {
  return (
    <header>
      <h1 className="relative text-8xl text-center my-28 font-light">
        Sistema Solar
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div
            className="border-white border-4 rounded-ellipsis
          opacity-50
          left-1/3 rotate-45
          w-64 h-32"
          />
        </div>
      </h1>
    </header>
  );
}

export default Header;
