import axios from 'axios';

const getPokemons = async () => {
  try {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default getPokemons;
