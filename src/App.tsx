import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/navbar';
import Login from './paginas/login';
import Inicio from './paginas/inicio';
import Comentarios from './paginas/comentarios';

const App: React.FC = () =>{
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Comentarios" element={<Comentarios />} />
      </Routes>
    </Router>
  );
};

export default App
