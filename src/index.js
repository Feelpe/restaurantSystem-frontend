import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Fonts from './components/fonts/fonts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavbarS } from './components/Navbar';
import { FooterS } from './components/Footer';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile/view';
import { Update } from './pages/Profile/update';
import { Delete } from './pages/Profile/delete';
import { Menu } from './pages/Menu';
import { Mesa } from './pages/Mesa';

import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'https://backend-blueteco.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <Fonts />
    <NavbarS />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/mesas" element={<Mesa />} />
      </Routes>
    </BrowserRouter>
    <FooterS />
  </React.StrictMode>,
  document.getElementById('root'),
);
