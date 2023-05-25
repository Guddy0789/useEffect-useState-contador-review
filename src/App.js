
import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import freecodecampLogo from './images/freecodecamp-logo.png'

function App() {
  const [numClics, setnumClick] = useState(55)
  const sumar = ()=>{
  setnumClick(numClics+1);
  }
  const reiniciar = ()=>{
    setnumClick(0);
    }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freecodecampLogo} alt="logo" />
        
      </div>
      <Contador numClics={numClics}/>
      <Boton manejarClick={sumar} texto="Sumar"/>
      <Boton manejarClick={reiniciar} texto="Reiniciar"/>
    </div>
  );
}

export default App;
