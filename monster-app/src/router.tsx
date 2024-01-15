import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  App from './App';
import {default as Login } from "./features/authentication/Login"
import Dashboard from './features/dashboard/Dashboard';


const AppRouter: React.FC = () => (
  <Routes>
  <Route path="/login"  element={<Login/>}/>
  <Route path="/dashboard"  element={<Dashboard/>}/>
  </Routes>

);

export default AppRouter;