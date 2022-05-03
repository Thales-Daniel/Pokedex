import React, { useContext, useEffect } from 'react';
import { PokemonContext } from '../../context/Provider';
import Card from '../Card';
import './style.css';

function PokemonList() {
  const { pokemons } = useContext(PokemonContext);

  useEffect(() => {
    console.log(pokemons);
  }, [pokemons]);

  return (
    <div className="containerList">
      {pokemons.results?.map(({ url, name }) => <Card key={name} url={url} />)}
    </div>
  );
}

export default PokemonList;
