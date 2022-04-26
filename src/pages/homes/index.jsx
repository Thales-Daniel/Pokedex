import React, { useContext, useEffect } from 'react';
import { PokemonContext } from '../../context/Provider';

function Home() {
  const pokemonProvider = useContext(PokemonContext);

  useEffect(() => {
    const teste = pokemonProvider;
    console.log(teste);
  }, [pokemonProvider]);
  return (
    <div>
      teste
    </div>
  );
}

export default Home;
