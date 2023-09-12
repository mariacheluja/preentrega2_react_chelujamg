//import React from 'react'; el profesor lo puso pero lo comento por la version, me da error.

//import { TiShoppingCart } from "../node_modules/react-icons/ti";

//ruta del carrito
import CarWidget from "../src/components/CarWidget/CarWidget";


import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import  Card  from "./components/Card/Card"; //no colocar { } porque tira error!!!


function App() {
  //const [count, setCount] = useState(0);

  return (
    <div>
      
      <Navbar />{/* Utiliza el componente CarWidget que ya lo cambie de lugary lo puse dentro del navbar */}
      <ItemListContainer greeting={<h1>Carrito de Compras</h1>} />
      <Card/>
      
    </div>
  );
}

export default App;
