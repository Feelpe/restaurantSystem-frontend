import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavbarS } from './components/Navbar';
import { FooterS } from './components/Footer';
import { Login } from './pages/Profile';
import { Register } from './pages/Profile/register';
import { Profile } from './pages/Profile/view';
import { Update } from './pages/Profile/update';
import { Delete } from './pages/Profile/delete';
import { Menu } from './pages/Menu';
import { Prato } from './pages/Menu/byid';
import { Mesa } from './pages/Mesa';

import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'https://blueteco-backend.vercel.app/';
// axios.defaults.baseURL = 'http://localhost:3333/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <NavbarS />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path='/prato/:id' element={<Prato />} />
        <Route path="/mesas" element={<Mesa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </BrowserRouter>
    <FooterS />
  </React.StrictMode>,
  document.getElementById('root'),
);
