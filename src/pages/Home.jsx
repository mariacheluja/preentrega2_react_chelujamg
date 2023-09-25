import React, { useState, useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router';

const Home = () => {
    const { id } = useParams(); // Obtener el id de los parámetros de la URL

    // Estado para almacenar la lista de productos
    const [products, setProducts] = useState([]);
   const defaultCategory = 'all'; // Categoría predeterminada si no se especifica ninguna en la URL

    useEffect(() => {
        // Realizar la solicitud a la API (usar la URL correcta)
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                if (id && id !== defaultCategory) {
                    // Filtrar los productos por categoría
                    const filteredProducts = data.filter((product) => product.category === id);
                    setProducts(filteredProducts);
                } else {
                    setProducts(data);
                }
            })
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div>
            <h1>Productos de Compras</h1>
            <ItemListContainer items={products} />
        </div>
    );
};

export default Home;



