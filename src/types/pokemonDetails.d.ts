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

type abilities = {
  is_hidden: boolean,
  ability: {
    name: string,
    url: string,
  }
}

type stats = {
  base_stat: number,
  efford: number,
  stat: {
    name: string
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
  abilities: abilities[]
  stats?: stats[]
}

export type propsPodemonType = {
  pokemonDetails: pokemonDetailsTypes,
}
