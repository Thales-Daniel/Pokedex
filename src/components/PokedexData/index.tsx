import React from 'react';
import './style.css';
import { propsPodemonType } from '../../types/pokemonDetails.d';

function PokedexData(props: propsPodemonType) {
  const { pokemonDetails } = props;
  const {
    base_experience: baseExperience, types, height, weight, order,
  } = pokemonDetails;
  return (
    <div className="pokedexDataContainer">
      <h2>Pokedex Data</h2>
      <div className="spanFather">
        <p>Order</p>
        <span>{order}</span>
      </div>
      <div className="spanFather">
        <p>Type</p>
        {types?.map(({ type }) => <span key={type.name}>{type.name}</span>)}
      </div>
      <div className="spanFather">
        <p>Base Experience</p>
        <span>{baseExperience}</span>
      </div>
      <div className="spanFather">
        <p>Height</p>
        <span>{height}</span>
      </div>
      <div className="spanFather">
        <p>Weight</p>
        <span>{weight}</span>
      </div>
    </div>
  );
}

export default PokedexData;
