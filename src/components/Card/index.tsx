import React, { useCallback, useEffect, useState } from 'react';
import { getOnePokemon } from '../../services/getPokemons';

function Card(props: { url: string }) {
  const { url } = props;
  const [pokemonDetails, setPokemonDetails] = useState({});
  const pokemon = useCallback(
    async () => {
      const resolve = await getOnePokemon(url);
      setPokemonDetails(resolve);
      return resolve;
    },
    [getOnePokemon, setPokemonDetails],
  );

  useEffect(() => {
    pokemon();
  }, [pokemon]);

  useEffect(() => {
    console.log(pokemonDetails);
  }, [pokemonDetails]);

  return (
    <div>
      triste
    </div>
  );
}

export default Card;
