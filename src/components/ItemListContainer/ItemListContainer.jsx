//import React from 'react';
import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
    return (
        <div>{greeting}</div>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired // Asegura que 'greeting' sea una cadena requerida.
};

export default ItemListContainer;
