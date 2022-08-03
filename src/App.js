import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1)
  }
  
  const resetearContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App"> 
      <div className='freecodecampo-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de free code camp'
        />  
      </div>
      <div className='contador-contenedor-principal'>
        <Contador numClick= { numClicks } />
        <Boton texto='Click' botonClick={true} manejarClick={ manejarClick } />
        <Boton texto='Reset' botonClick={false} manejarClick={ resetearContador } />
      </div>
    </div>
  );
}

export default App;