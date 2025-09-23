import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterUser from './pages/RegisterUser';
import LoginUser from './pages/LoginUser';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/user'>
          <Route path='register' element={<RegisterUser />} />
          <Route path='login' element={<LoginUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);