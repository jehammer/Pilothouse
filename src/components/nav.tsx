import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'; //Maybe HashRouter
import BridgePage from '../pages/BridgePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

export default function Nav() {
  return (
    <Router>
      <Routes>
        <Route path="/BridgePage" element={<BridgePage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
};