import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
  const [users, setUsers] = useState([]);
  const { logout } = useAuth(); // Get the logout function

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Corrected full URL for fetching users
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1 className="navbar-brand">Dashboard</h1>
        <button onClick={logout} className="logout-button">Logout</button> {/* Logout Button */}
      </nav>

      <div className="content">
        <h2 className="post-heading">Users</h2> {/* Updated heading */}
        <div className="post-list">
          {users.map(user => (
            <div key={user.id} className="post-card">
              {/* Corrected link to user details */}
              <Link to={`/details/user/${user.id}`}>
                <h3>{user.name}</h3> {/* Display user name */}
                <p>Username: {user.username}</p> {/* Display username */}
                <p>Email: {user.email}</p> {/* Display email */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
