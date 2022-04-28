import React from 'react';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import PokemonList from '../../components/PokemonList';
import './style.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <PokemonList />
      <Pagination />
    </div>
  );
}

export default Home;
