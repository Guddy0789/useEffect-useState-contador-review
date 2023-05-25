import React from 'react';
import '../styles/Boton.css';

function Boton({manejarClick, texto }) {

  return (
    
    <button   onClick={manejarClick}>
          {texto}
    </button>
  );
}

export default Boton;