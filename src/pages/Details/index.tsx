import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import PokedexData from '../../components/PokedexData';
import { getPokemonByName } from '../../services/getPokemons';
import { pokemonDetailsTypes } from '../../types/pokemonDetails.d';

function details() {
  const { pathname } = useLocation();
  const [pokemon, setPokemon] = useState({} as pokemonDetailsTypes);

  const getPoke = useCallback(
    async () => {
      const resolve = await getPokemonByName(pathname);
      setPokemon(resolve);
      return resolve;
    },
    [getPokemonByName, setPokemon],
  );

  useEffect(() => {
    getPoke();
  }, []);

  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);

  return (
    <div className="details">
      <img src={pokemon?.sprites?.other['official-artwork'].front_default} alt={pokemon.name} />
      <PokedexData pokemonDetails={pokemon} />
    </div>
  );
}

export default details;
