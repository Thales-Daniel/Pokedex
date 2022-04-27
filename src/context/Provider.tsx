import React, {
  createContext, ReactNode, useCallback, useEffect, useMemo, useState,
} from 'react';
import getPokemons from '../services/getPokemons';
import { PokemonsContextTypes } from '../types/pokemons.d';

type UserContextProps = {
  children: ReactNode;
};

export const PokemonContext = createContext<PokemonsContextTypes>({} as PokemonsContextTypes);

export function PokemonProvider(props: UserContextProps) {
  const [pokemons, setPokemons] = useState({});
  const [pagina, setPagina] = useState(0);

  const getPoke = useCallback(async () => {
    const data = await getPokemons(pagina);
    setPokemons(data);
  }, [setPokemons, pagina]);

  useEffect(() => {
    getPoke();
  }, [getPoke]);

  const context = useMemo(
    () => ({
      pokemons, setPokemons, setPagina, pagina,
    }),
    [pokemons, setPokemons],
  );

  const { children } = props;

  return (
    <PokemonContext.Provider value={context}>
      {children}
    </PokemonContext.Provider>
  );
}
