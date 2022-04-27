export type pokemonType = {
  type: {
    name: string,
    url: string,
  },
}

type sprit = {
  front_default: string,
  other: {
    'official-artwork': {
      front_default: string,
    }
  }
}

export type pokemonDetailsTypes = {
  name: string,
  types: pokemonType[],
  sprites: sprit,
  base_experience?: number,
  type?: pokemonType[],
  height?: number,
  weight?: number,
  order?: number,
}

export type propsPodemonType = {
  pokemonDetails: pokemonDetailsTypes,
}
