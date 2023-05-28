import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BridgePage from '../pages/BridgePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BridgePage />} />
      </Routes>
    </Router>
  );
};

export default App;
