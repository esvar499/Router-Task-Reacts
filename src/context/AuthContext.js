import React, { createContext, useState, useContext } from 'react';

// Create the Auth context
const AuthContext = createContext();

// Create a hook to use Auth context
export const useAuth = () => useContext(AuthContext);

// Create the provider to wrap around the App
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if user is logged in

  // Function to log in the user
  const login = () => {
    setIsAuthenticated(true);
  };

  // Function to log out the user
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
