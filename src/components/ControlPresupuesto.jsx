import React, {Fragment} from 'react'
import {revisarPresupuesto} from '../helpers'
import PropTypes from 'prop-types'

const ControlPresupuesto = ({presupuestoIni, gasto}) => {
    const clase = "w-full p-2 rounded m-2 "+revisarPresupuesto(presupuestoIni, gasto)
    return (
        <Fragment>
            <div className="bg-blue-300 p-2 m-2 rounded">Presupuesto: ${presupuestoIni}</div>
            <div className={clase}>Restante: ${gasto}</div>
        </Fragment>
    );
};

ControlPresupuesto.propTypes = {
    presupuestoIni: PropTypes.number.isRequired,
    gasto: PropTypes.number.isRequired
}

export default ControlPresupuesto