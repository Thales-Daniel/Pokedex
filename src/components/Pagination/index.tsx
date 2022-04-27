import React, { useContext } from 'react';
import { PokemonContext } from '../../context/Provider';
import './style.css';

function Pagination() {
  const { setPagina, pagina } = useContext(PokemonContext);
  return (
    <div>
      <button className="pageButton" type="button" onClick={() => (pagina > 0 ? setPagina(pagina - 10) : setPagina(0))}>Anterior</button>
      <button className="pageButton" type="button" onClick={() => setPagina(pagina + 10)}>Proximo</button>
    </div>
  );
}

export default Pagination;
