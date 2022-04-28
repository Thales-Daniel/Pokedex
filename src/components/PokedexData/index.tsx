import React from 'react';
import './style.css';
import { propsPodemonType } from '../../types/pokemonDetails.d';

function PokedexData(props: propsPodemonType) {
  const { pokemonDetails } = props;
  const {
    base_experience: baseExperience, types, height, weight, order,
  } = pokemonDetails;
  return (
    <div>
      <h2>Pokedex Data</h2>
      <table>
        <tbody>
          <tr>
            <th>Order</th>
            <td>{order}</td>
          </tr>
          <tr>
            <th>Type</th>
            {types?.map(({ type }) => <td key={type.name}>{type.name}</td>)}
          </tr>
          <tr>
            <th>Base Experience</th>
            <td>{baseExperience}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>{height}</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PokedexData;
