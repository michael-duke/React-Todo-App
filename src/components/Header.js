import React from 'react';
import header from '../assets/app-header.jpg';

const Header = () => {
  const headerImage = {
    width: '400px',
  };
  return (
    <header>
      <h1 style={{ textAlign: 'center' }}>
        <img style={headerImage} src={header} alt="todo-header"  />
      </h1>
    </header>
  );
};

export default Header;
