import axios from 'axios';

const getPokemons = async () => {
  try {
    const url = '';
    const { data } = await axios.get(url);
    return data.items;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default getPokemons;
