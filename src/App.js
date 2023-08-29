import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Vistas/Home';
import Nosotros from './Vistas/Nosotros';
import ProyectoEducativo from './Vistas/ProyectoEducativo';
import VidaEnColegio from './Vistas/VidaEnColegio';
import AdmisionesMatriculas from './Vistas/AdmisionesMatriculas';
import Blog from './Vistas/Blog';
import PrimarySchool from './Vistas/PrimarySchool';
import Visitanos from './Vistas/Visitanos';
import Convenios from './Vistas/Convenios';
import PlanAcademico from './Vistas/PlanAcademico';

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
        <Route path= '/Blog' element={<Blog/>}/>
        <Route path= '/PrimarySchool' element={<PrimarySchool/>}/>
        <Route path= '/Visitanos' element={<Visitanos/>}/>
        <Route path= '/Convenios' element={<Convenios/>}/>
        <Route path= '/PlanAcademico' element={<PlanAcademico/>}/>
      </Routes>
    </div>
  );
}

export default App;