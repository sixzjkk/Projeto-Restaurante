import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import UserPerfil from './pages/UserPerfil';
import RegisterUser from './pages/RegisterUser';
import LoginUser from './pages/LoginUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user'>
          <Route path='' element={<UserPerfil />} />
          <Route path='register' element={<RegisterUser />} />
          <Route path='login' element={<LoginUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);