import React from 'react';
import { BrowserRouter as Router, Routes, Route } from
'react-router-dom';


import Header from './components/Header';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import ProyectoBlob from './pages/ProyectoBlob';


export default function App() {
  return (
    <Router>

      <Header />
      
      <Routes>
        
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyecto" element={<ProyectoBlob />} />
      
      </Routes>
    
    </Router>
  );
}
