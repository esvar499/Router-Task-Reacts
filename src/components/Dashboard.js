import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const { logout } = useAuth(); // Get the logout function

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1 className="navbar-brand">Dashboard</h1>
        <button onClick={logout} className="logout-button">Logout</button> {/* Logout Button */}
      </nav>

      <div className="content">
        <h2 className="post-heading">Posts</h2>
        <div className="post-list">
          {posts.map(post => (
            <div key={post.id} className="post-card">
              <Link to={`/details/post/${post.id}`}>
                <h3>{post.title}</h3>
                <p>{post.body.substring(0, 60)}...</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
