import React from 'react';
import Pagination from '../../components/Pagination';
import PokemonList from '../../components/PokemonList';
import './style.css';

function Home() {
  return (
    <div className="home">
      <PokemonList />
      <Pagination />
    </div>
  );
}

export default Home;
