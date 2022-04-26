import React, { useContext, useEffect } from 'react';
import { PokemonsProvider } from '../../context/provider';

function Home() {
  const pokemonProvider = useContext(PokemonsProvider);

  useEffect(() => {
    const { data } = pokemonProvider;
    console.log(data);
  });
  return (
    <div>
      teste
    </div>
  );
}

export default Home;
