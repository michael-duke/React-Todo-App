import React from 'react';
import header from '../../assets/app-header.jpg';

const Header = () => {
  return (
    <header>
      <img
        className="mx-auto w-[400px] mb-2"
        src={header}
        alt="todo-header"
      />
    </header>
  );
};

export default Header;
