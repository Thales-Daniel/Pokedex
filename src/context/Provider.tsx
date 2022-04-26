import React, {
  createContext, ReactNode, useCallback, useEffect, useMemo, useState,
} from 'react';
import getPokemons from '../services/getPokemons';

export const PokemonContext = createContext({});

type UserContextProps = {
  children: ReactNode;
};

export function PokemonProvider(props: UserContextProps) {
  const [pokemonState, setPokemonState] = useState([]);

  const pokemons = useCallback(async () => {
    const teste = await getPokemons();
    console.log(teste);
    setPokemonState(teste);
  }, [setPokemonState]);

  useEffect(() => {
    pokemons();
  }, [pokemons]);

  const context = useMemo(
    () => ({ pokemonState, setPokemonState }),
    [pokemonState, setPokemonState],
  );

  const { children } = props;

  return (
    <PokemonContext.Provider value={context}>
      {children}
    </PokemonContext.Provider>
  );
}
