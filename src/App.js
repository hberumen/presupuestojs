import React, { useState } from 'react';
import ControlPresupuesto from './components/ControlPresupuesto';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Pregunta from "./components/Pregunta";


function App() {

  const [presupuesto, updatePresupuesto] = useState({
    'presupuestoIni': '',
    'gasto': '',
    'gastos': [],
    'mensaje': ''
  })

  const {gastos, presupuestoIni, gasto} = presupuesto

  const updatePresupuestoInicial = (cantidad) =>{
    updatePresupuesto({
      ...presupuesto,
      'presupuestoIni': cantidad,
      'gasto': cantidad
    })
  }

  const [mostrarPregunta, updatePregunta] = useState(true)
  
  const updateGastos = cantidadGasto =>{       
    updatePresupuesto({
      ...presupuesto,
      gasto: gasto - cantidadGasto.costo,      
      gastos: [
        ...gastos,
        cantidadGasto
      ]
    })
  } 

  return (    
    <div className='container'>
        <header>
          <h1>Gasto Semanal</h1>
          {mostrarPregunta ? (
              <div className="bg-white rounded-xl p-3 space-x-1">
              <Pregunta 
                  updatePresupuestoInicial={updatePresupuestoInicial}
                  updatePregunta={updatePregunta}
              />                                  
            </div>          
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 space-x-1">
                <div><Formulario updateGastos={updateGastos}/></div>
                <div className="bg-white rounded p-2 m-1">
                  <Listado 
                      gastos={gastos}
                  />

                  <ControlPresupuesto 
                    presupuestoIni={presupuestoIni}
                    gasto={gasto}
                  />
                </div>
            </div>
          )}

          
        </header>
    </div>
  );
}

export default App;
