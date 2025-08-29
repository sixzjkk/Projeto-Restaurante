import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterUser from './pages/RegisterUser';
import LoginUser from './pages/loginUser'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/user/register' element={<RegisterUser />} />
        <Route path='/user/login' element={<LoginUser />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);