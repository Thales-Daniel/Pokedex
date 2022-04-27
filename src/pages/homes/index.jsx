import React from 'react';
import PokemonList from '../../components/pokemonList';
import './style.css';

function Home() {
  return (
    <div className="home">
      <PokemonList />
    </div>
  );
}

export default Home;
