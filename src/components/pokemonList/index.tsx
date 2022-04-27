import React, { useContext, useEffect } from 'react';
import { PokemonContext } from '../../context/Provider';
import Card from '../Card';

function PokemonList() {
  const { pokemons } = useContext(PokemonContext);
  useEffect(() => {
  }, [pokemons]);

  return (
    <div>
      {pokemons.results?.map(({ url, name }) => <Card key={name} url={url} />)}
    </div>
  );
}

export default PokemonList;
