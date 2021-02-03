import React, { Fragment, useState } from 'react'
import Error from '../components/Error'
import PropTypes from 'prop-types'



const Pregunta = ({updatePresupuestoInicial, updatePregunta}) => {

    const [cantidad, updateCantidad] = useState(0)
    const [error, updateError] = useState(false)

    const validate = () => {
        if(isNaN(cantidad) || cantidad < 1){            
            return false
        }

        return true
    }
    
    const handleOnChange = e => {
        updateCantidad(parseInt(e.target.value, 10))
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(validate()){            

            updatePresupuestoInicial(cantidad)
            
            updateError(false)
            updatePregunta(false)

            return
        }

        updatePregunta(true)
        updateError(true)        
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2 m-2 p-2">                

                <input 
                    type="number"
                    name="criterio"
                    className="w-full rounded"
                    placeholder="Coloca tu presupuesto"
                    onChange={handleOnChange}
                />                

                {error ? <Error mensaje="* El presupuesto es incorrecto"/> : null}                                      

                <input 
                    type="submit"
                    className="bg-black w-full rounded text-black button-primary"
                    value="Buscar"
                />

                </div>                
                
            </form>
        </Fragment>
    )
}

Pregunta.propTypes = {
    updatePresupuestoInicial: PropTypes.func.isRequired,
    updatePregunta: PropTypes.func.isRequired
}

export default Pregunta;