import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';  // Importing CSS file for Dashboard styling
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const { logout } = useAuth();

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
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="navbar-brand">Dashboard</h1>
        <button className="logout-button" onClick={logout}>Logout</button>
      </nav>

      <div className="dashboard-content">
        <h2 className="post-heading">Posts</h2>
        <div className="post-list">
          {posts.map(post => (
            <div key={post.id} className="post-card">
              <Link to={`/details/post/${post.id}`}>
                <h3>{post.title}</h3>
                <p>{post.body.substring(0, 50)}...</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
