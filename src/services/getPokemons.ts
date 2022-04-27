import axios from 'axios';

const getPokemons = async (pagina: number) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${pagina}&limit=10`;
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getOnePokemon = async (url : string) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getPokemonByName = async (poke : string) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon${poke}`;
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default getPokemons;
