import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // If not authenticated, redirect to login
    return <Navigate to="/login" />;
  }

  // If authenticated, allow access to the route
  return children;
};

export default ProtectedRoute;
