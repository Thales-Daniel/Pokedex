import React, {
  createContext, PropsWithChildren, ReactNode, useCallback, useEffect, useMemo, useState,
} from 'react';
import getPokemons from '../services/getPokemons';

export const PokemonContext = createContext({});

export function PokemonProvider(props: PropsWithChildren<ReactNode>) {
  const [data, setData] = useState([]);

  const pokemons = useCallback(async () => {
    const getAllPokemons = await getPokemons();
    setData(getAllPokemons);
  }, []);

  useEffect(() => {
    pokemons();
  }, [pokemons]);

  const context = useMemo(() => ({ data, setData }), [data, setData]);
  const { children } = props;

  return (
    <PokemonContext.Provider value={context}>
      {children}
    </PokemonContext.Provider>
  );
}
