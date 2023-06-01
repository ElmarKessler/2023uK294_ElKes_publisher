import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Service/Home';
import Login from './Service/Login';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
