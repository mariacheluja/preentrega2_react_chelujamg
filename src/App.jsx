
//import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetails/ItemDetailsConteiner'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import Detalle from './pages/Detalle'
import "./App.css"

const App = () => {
  return (
    <>
      <NavBar />
      
      <nav>
        <ul className="nav-links">
          <li><Link to="/ ">Página Pricipal</Link></li>
          <li><Link to="/About ">Acerca de </Link></li>
          <li> <Link to="/Contact ">Contacto</Link></li>
          
        </ul>
      </nav>


      <Routes>
      

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/category/:categoryId' element={<Home />} /> 
        <Route path='/detalle/:id' element={<Detalle />} />
      </Routes>

    </>
  )
}

export default App