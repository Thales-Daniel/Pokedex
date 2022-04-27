import React, { useCallback, useEffect, useState } from 'react';
import { getOnePokemon } from '../../services/getPokemons';
import { pokemonDetailsTypes } from '../../types/pokemonDetails.d';
import './style.css';

function Card(props: { url: string }) {
  const { url } = props;
  const [pokemonDetails, setPokemonDetails] = useState({} as pokemonDetailsTypes);

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
      <div className="cardContainer">
        <div>
          <img
            src={pokemonDetails.sprites?.front_default}
            alt={`pokemon ${pokemonDetails.name} sprite`}
          />
        </div>
        <div className="nameContainer">
          <p className="titleName">NAME</p>
          <span className="valueTittle">{pokemonDetails.name}</span>
        </div>
        <div className="typesContainer">
          <p className="titleCard">TYPE</p>
          <div>
            {pokemonDetails.types?.map(({ type }) => (
              <span className="typesValue" key={type.name}>
                {type.name}
                {' '}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
