import React from 'react'
import Gasto from './Gasto';
import PropTypes from 'prop-types'

const Listado = ({gastos}) => {
    return (
        <div>
            <h2>Gastos Realizados</h2>
            {gastos.map(gasto=> <Gasto key={gasto.id} gasto={gasto} />)}
        </div>
    );
};

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}

export default Listado