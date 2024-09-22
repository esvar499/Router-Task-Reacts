import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth(); // Assuming you have a context that provides current user info

  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
