import React, { useContext } from 'react';
import { PokemonContext } from '../../context/Provider';
import Card from '../Card';
import './style.css';

function PokemonList() {
  const { pokemons } = useContext(PokemonContext);
  return (
    <div className="containerList">
      {pokemons.results?.map(({ url, name }) => <Card key={name} url={url} />)}
    </div>
  );
}

export default PokemonList;
