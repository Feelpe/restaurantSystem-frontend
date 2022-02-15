import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './pages/Menu';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import { NavbarS } from './components/Navbar';
import { FooterS } from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'https://backend-blueteco.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <NavbarS />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    <FooterS />
  </React.StrictMode>,
  document.getElementById('root'),
);
