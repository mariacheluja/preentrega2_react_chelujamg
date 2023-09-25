/* eslint-disable react/jsx-no-comment-textnodes */

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importa PropTypes

const CardItem = ({ item }) => {
    return (
        <Card style={{ width: '18rem' }}className='mx-2 mt-4' >
            <Card.Img variant="top" src={item.image}  style={{ height: '30%' }} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                // link que me muestra el detalle del producto.
                <Link to={`/detalle/${item.id}`}>  
                    <Button variant="primary">Ver detalles</Button>
                </Link>
            </Card.Body>
        </Card>
        
    );
}
// Define PropTypes para la propiedad 'item'
CardItem.propTypes = {
    item: PropTypes.object.isRequired, // Espera un objeto llamado "item" y lo marca como requerido
};
export default CardItem