import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Details from './components/Details'; // Import the Details component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add route for user details */}
        <Route path="/details/user/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
