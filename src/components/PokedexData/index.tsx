import React from 'react';
import './style.css';
import { propsPodemonType } from '../../types/pokemonDetails.d';

function PokedexData(props: propsPodemonType) {
  const { pokemonDetails } = props;
  const {
    base_experience: baseExperience, types, height, weight, order,
    abilities, stats,
  } = pokemonDetails;
  return (
    <div className="pokedexDataContainer">
      <h1 className="pokedexDataTittle">{pokemonDetails.name}</h1>
      <div className="pokedexDetailsFather">
        <div className="pokedexDetailsInside">
          <h4>Details</h4>
          <div className="spanFather">
            <p>Order</p>
            <span>{order}</span>
          </div>
          <div className="spanFather">
            <p>Types</p>
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
        <div className="pokedexDetailsInside">
          <div className="pokedexTitlesAbilities">
            <h4>Abilities</h4>
            <h4>Hidden</h4>
          </div>
          {abilities?.map((ability) => (
            <div key={ability.ability.name} className="spanFather">
              <p>{ability.ability.name}</p>
              <span>
                {ability.is_hidden ? 'True' : 'False'}
              </span>
            </div>
          ))}
        </div>
        <div className="pokedexDetailsInside">
          <h4>Stats</h4>

          {stats?.map(({ base_stat: base, stat }) => (
            <div className="spanFather">
              <p>{stat.name}</p>
              <span>{base}</span>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default PokedexData;
