import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import { default as Login } from "../features/authentication/Login";
import Dashboard from "../features/dashboard/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import { DASHBOARD, LOGIN } from "./config";

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path={LOGIN} element={<Login />} />
      <Route path={DASHBOARD} element={<Dashboard />} />
    </Routes>
  </Router>
);

export default AppRouter;
