import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import './index.css'
import FormationDetail from './Components/FormationDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formation/:id" element={<FormationDetail />} />
      </Routes>
    </Router>
  );
};

export default App;