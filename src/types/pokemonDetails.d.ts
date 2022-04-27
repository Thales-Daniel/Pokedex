type pokemonType = {
  slot: number,
  type: {
    name: string,
    url: string,
  },
}

export type pokemonDetailsTypes = {
    name: string,
    types: pokemonType[],
    sprites: {
      front_default: string,
    }
}
