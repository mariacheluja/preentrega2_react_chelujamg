//importaciones primero arriba de la pagina. Todo lo que necesito de React va aqui.

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx"; // Importa el componente principal

//import "bootstrap/dist/css/bootstrap.min.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
