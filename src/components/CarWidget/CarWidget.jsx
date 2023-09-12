//import React from 'react' //estructura base de jsx funcion flecha, a partir de la vs 17 no hace falta importarla, la desactivo me da error.

import { TiShoppingCart } from "react-icons/ti" //importo el componente del carrito
import FuncionCarrito from "../CarWidget/FuncionCarrito";

const CarWidget = () => {
    return (
        <div>
            <TiShoppingCart />
            <strong> 0 </strong>
            <FuncionCarrito />

        </div>
    );
}


export default CarWidget;