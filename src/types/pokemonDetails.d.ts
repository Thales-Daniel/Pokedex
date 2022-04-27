type pokemonType = {
  slot: number,
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
}
