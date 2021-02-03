import React from 'react'
import PropTypes from 'prop-types'

const Gasto = ({gasto}) => (
    <div className="grid grid-cols-2 space-y-2 w-full divide-y-2 divide-yellow-800">
            <div className="font-bold w-1/4">{gasto.nombre}:</div>
            <div className="bg-gray-400 w-3/4 text-right">${gasto.costo}</div>
    </div>
)

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto