import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PerfilUsuario from './pages/PerfilUsuario';
import CadastrarUsuario from './pages/CadastrarUsuario';
import Cardapio  from './pages/Cardapio';
import LoginUsuario from './pages/LoginUsuario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cardapio' element={<Cardapio />} />
        <Route path='/user'>
          <Route path='' element={<PerfilUsuario />} />
          <Route path='register' element={<CadastrarUsuario />} />
          <Route path='login' element={<LoginUsuario />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);