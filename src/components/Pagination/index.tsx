import React, { useContext } from 'react';
import { PokemonContext } from '../../context/Provider';

function Pagination() {
  const { setPagina, pagina } = useContext(PokemonContext);
  return (
    <div>
      <button type="button" onClick={() => (pagina > 0 ? setPagina(pagina - 10) : setPagina(0))}>Anterior</button>
      <button type="button" onClick={() => setPagina(pagina + 10)}>Proximo</button>
    </div>
  );
}

export default Pagination;
