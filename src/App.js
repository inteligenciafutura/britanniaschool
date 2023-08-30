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
import Kindergarten from './Vistas/Kindergarten'; 
import SecundarySchool from './Vistas/SecundarySchool'; 
import PrimerasComuniones from './Vistas/PrimerasComuniones'; 
import IzadaBandera from './Vistas/IzadaBandera'; 
import SemanaBritania from './Vistas/SemanaBritania';
import BacktoSchool2022 from './Vistas/BacktoSchool2022';
import ModalidadPresencial2021 from './Vistas/ModalidadPresencial2021';
import FeriaVirtualUniversidades from './Vistas/FeriaVirtualUniversidades';

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
        <Route path= '/Kindergarten' element={<Kindergarten/>}/>
        <Route path= '/SecundarySchool' element={<SecundarySchool/>}/>
        <Route path= '/PrimerasComuniones' element={<PrimerasComuniones/>}/>
        <Route path= '/IzadaBandera' element={<IzadaBandera/>}/>
        <Route path= '/SemanaBritania' element={<SemanaBritania/>}/>
        <Route path= '/BacktoSchool2022' element={<BacktoSchool2022/>}/>
        <Route path= '/ModalidadPresencial2021' element={<ModalidadPresencial2021/>}/>
        <Route path= '/FeriaVirtualUniversidades' element={<FeriaVirtualUniversidades/>}/>
      </Routes>
    </div>
  );
}

export default App;