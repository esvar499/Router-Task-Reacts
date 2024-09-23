import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Details from './components/Details'; // Import the Details component
import { useAuth } from './context/AuthContext'; // Import the Auth context

// Protected Route component
function ProtectedRoute({ element: Component }) {
  const { isAuthenticated } = useAuth(); // Get authentication state from context

  // If the user is authenticated, return the component, otherwise redirect to login
  return isAuthenticated ? Component : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Protect the /dashboard and /details routes */}
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/details/user/:id" element={<ProtectedRoute element={<Details />} />} />
        
        {/* Redirect all unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
