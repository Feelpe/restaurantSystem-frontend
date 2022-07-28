import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavbarS } from './components/navbar';
import { FooterS } from './components/footer';
import { Login } from './pages/Profile';
import { Register } from './pages/Profile/register';
import { Profile } from './pages/Profile/view';
import { Update } from './pages/Profile/update';
import { Delete } from './pages/Profile/delete';
import { Menus } from './pages/Menu';
import { MenuId } from './pages/Menu/menuId';
import { MenuAdd } from './pages/Menu/menuAdd';
import { Mesas } from './pages/Mesa';
import { MesaId } from './pages/Mesa/mesaId';
import { MesaAdd } from './pages/Mesa/mesaAdd';

import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'https://restaurantsystem-backend.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:3333/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <NavbarS />
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<Menus />} />
        <Route path='/menu/:id' element={<MenuId />} />
        <Route path='/menu/add' element={<MenuAdd />} />
        <Route path="/mesas" element={<Mesas />} />
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
