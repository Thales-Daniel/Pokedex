interface ArrayPokemons {
  name: string,
  url: string,
}

export interface PokemonsType {
  count?: number,
  next?: string,
  previous?: null | number,
  results?: ArrayPokemons[]
}

export interface PokemonsContextTypes {
  pokemons: PokemonsType,
  setPokemons?: (_data: PokemonsType) => void,
}
