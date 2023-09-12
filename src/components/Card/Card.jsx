//import React from 'react';

import Card from 'react-bootstrap/Card';

function Productos() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Hematología</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Lisante</Card.Subtitle>
                <Card.Text>
                    Reactivo par realizar Hemogramas
                    Equipo DXH800.<br/>
                    Sector Hematología
                </Card.Text>
                <Card.Link href="#">Agregar</Card.Link>
                <Card.Link href="#">Eliminar</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Productos;   
