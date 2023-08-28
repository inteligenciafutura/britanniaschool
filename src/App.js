import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Vistas/Home';
import Nosotros from './Vistas/Nosotros';
import ProyectoEducativo from './Vistas/ProyectoEducativo';
import VidaEnColegio from './Vistas/VidaEnColegio';
import AdmisionesMatriculas from './Vistas/AdmisionesMatriculas';


function App() {
  return (
    <div style={{width:'100%'}}>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path= '/Home' element={<Home/>}/>
        <Route path= '/Nosotros' element={<Nosotros/>}/>
        <Route path= '/ProyectoEducativo' element={<ProyectoEducativo/>}/>
        <Route path= '/VidaEnColegio' element={<VidaEnColegio/>}/>
        <Route path= '/AdmisionesMatriculas' element={<AdmisionesMatriculas/>}/>
      </Routes>
    </div>
  );
}

export default App;