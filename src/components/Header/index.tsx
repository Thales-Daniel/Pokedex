import React from 'react';
import ultraball from '../../issues/ultraball.png';
import './style.css';

function Header() {
  return (
    <header className="headerContainer">
      <h1 className="titleHeader">Pokedex</h1>
      <img src={ultraball} alt="ultraball" className="headerUltraball" />
    </header>
  );
}

export default Header;
