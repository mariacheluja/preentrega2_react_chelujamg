
import React, { useState, useEffect } from 'react';
import { Row, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import useFetch from '../Hook/useFetch';
import { useParams, useNavigate } from 'react-router-dom';

const ItemListContainer = () => {
    const [allItems] = useFetch("https://fakestoreapi.com/products");
    const [items, setItems] = useState(allItems); // Estado para la lista actual de productos
    const { categoryId } = useParams(); // Obtener la categoría de los parámetros de la URL
    const navigate = useNavigate();

    // Función para manejar el clic en el botón de filtrar
    const handleFilterClick = (category) => {
        if (category === categoryId) {
            // Si se hace clic en la categoría actual, navegar a la página principal
            navigate('/');
        } else {
            // Si se hace clic en otra categoría, navegar a esa categoría
            navigate(`/category/${category}`);
        }
    };

    useEffect(() => {
        if (allItems !== null) {
            if (categoryId && categoryId !== 'all') {
                // Filtrar los productos por categoría si se proporciona una categoría válida
                const filteredItems = allItems.filter((item) => item.category === categoryId);
                setItems(filteredItems);
            } else {
                // Si no hay categoría seleccionada, mostrar todos los productos
                setItems(allItems);
            }
        }
    }, [categoryId, allItems]);

    return (
        <Container>
            <div className="text-center">
                <Button variant="outline-primary" onClick={() => handleFilterClick('electronics')}>Electrónicos</Button>
                <Button variant="outline-primary" onClick={() => handleFilterClick('jewelery')}>Joyería</Button>
                <Button variant="outline-primary" onClick={() => handleFilterClick("women's clothing")}>Ropa</Button>
                <Button variant="outline-primary" onClick={() => handleFilterClick('all')}>Todos</Button>
            </div>
            <Row>
                {items !== null && <ItemList items={items} />}
            </Row>
        </Container>
    );
};

export default ItemListContainer;





