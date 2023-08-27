import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Vistas/Home';
import Nosotros from './Vistas/Nosotros';

function App() {
  return (
    <div style={{width:'100%'}}>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path= '/Home' element={<Home/>}/>
        <Route path= '/Nosotros' element={<Nosotros/>}/>
      </Routes>
    </div>
  );
}

export default App;