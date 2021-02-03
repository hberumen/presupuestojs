import React from 'react';
import PropTypes from 'prop-types'

const Error = ({mensaje}) => {
    return (
        <div className="bg-red-700 text-white bold rounded p-1 w-1/2">
                        <p>{mensaje}</p>
                        </div>
    );
};

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;