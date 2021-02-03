import React, {useState} from 'react'
import Error from './Error'
import shortId from 'shortid'
import PropTypes from 'prop-types'

const Formulario = ({updateGastos}) => {

    const valida = values =>{
        const errores = {}
        if(!values.nombre){
            errores.nombre = "*Debes ingresar un nombre de gasto."
        }

        if(!values.costo || isNaN(values.costo) || values.costo < 1){
            errores.costo = "*Debes ingresar un costo valido."
        }
        
        return errores
    }

    const [gasto, updateGasto] = useState({
        'nombre':'',
        'costo':'',
        'id':'',
        'error': {}
    })

    const handleOnChange = e => {
        updateGasto({
            ...gasto, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        const {error, ...sinError} = gasto
        const result = valida(sinError)
        if(Object.keys(result).length === 0){
            sinError.id = shortId.generate()
            updateGastos(sinError)
            updateGasto({
                'nombre':'',
                'costo':'',
                'id':'',
                'error': {}
            })
            return
        }

        updateGasto({
            ...gasto,
            error: result
        })
    }

    const {nombre, costo, error} = gasto

    return (        
        <div className="bg-white rounded p-2 m-1">
        <h2>Agrega tus gastos</h2>
        <form onSubmit={handleSubmit}>                        

            <label>Nombre Gasto</label>
            <input
                type="text"
                name="nombre"
                className="w-full"
                placeholder="Ej. Transporte"
                onChange={handleOnChange}
                value={nombre}
            />            
            {error.nombre && <Error mensaje={error.nombre} />}
            <label>Nombre Gasto</label>
            <input
                type="text"
                name="costo"
                className="w-full"
                placeholder="Ej. 100"
                onChange={handleOnChange}
                value={costo}
            />
            {error.costo && <Error mensaje={error.costo} />}
            <button
                type="submit"
                className="bg-blue-700 text-white p-2 my-4 w-full"
            >Agregar Gasto</button>            
        </form>
        </div>
    );
}

Formulario.propTypes = {
    updateGastos: PropTypes.func.isRequired
}



export default Formulario;