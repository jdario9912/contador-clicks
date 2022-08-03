import React from 'react'
import '../styles/button.css'

function Boton({texto, botonClick, manejarClick}) {
  return (
    <div>
      <button 
        className = {botonClick ? "boton-click" : "boton-reiniciar"}
        onClick = {manejarClick}
      >
        {texto}
      </button>
    </div>
  )
}

export default Boton;