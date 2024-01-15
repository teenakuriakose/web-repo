import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  App from './App';
import {default as Login } from "./features/authentication/Login"


const AppRouter: React.FC = () => (
  <Routes>
  <Route path="/"  element={<App/>}/>
  <Route path="/login"  element={<Login/>}/>
  </Routes>

);

export default AppRouter;