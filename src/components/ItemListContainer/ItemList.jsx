// //import React from 'react'

// //componente presentacional

// const ItemList = {(product)} => {
//     return (
//         <div>
//             <p>{product.name}</p>
//             <p>{product.price}</p>
//             <p>{product.stock}</p>

//         </div>
//     )
// }

// export default ItemList


//import React from 'react'
import PropTypes from 'prop-types'; // Importa PropTypes
import { Col } from 'react-bootstrap';

import CardItem from './CardItem';
const ItemList = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <Col md={4} lg={4} sm={12} key={item.id} >
                        <CardItem item={item} />
                    </Col>
                ))
            }
        </>
    )
}
// Define PropTypes para las propiedades esperadas
ItemList.propTypes = {
    items: PropTypes.array.isRequired, // Espera un array llamado "items" y lo marca como requerido
};
export default ItemList


