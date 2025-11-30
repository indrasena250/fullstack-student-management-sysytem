import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Student Management System</h1>
      <p><Link to="/register">Register Student</Link></p>
      <p><Link to="/login">Student Login</Link></p>
      <p><Link to="/students">View Students</Link></p>
    </div>
  );
};

export default Home;
