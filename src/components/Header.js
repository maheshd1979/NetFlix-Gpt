import React from 'react';
const Header = () => {
  return (
    <div className="absolute top-0 left-0 z-10 px-8 py-2 bg-gradient-to-b from-black">
    <img
      className='h-20 w-19'
      src={`${process.env.PUBLIC_URL}/images/NETFLIX1.png`}
      alt="Logo"
    />
    </div>
  );
}

export default Header;