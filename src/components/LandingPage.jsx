import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ backgroundImage: 'https://th.bing.com/th/id/OIP.uDcUX9YRkHrO4wg5U1XD1wHaBO?rs=1&pid=ImgDetMain', height: '100vh' }}>
      <h2>Welcome to Paradise Nursery</h2>
      <p>Your one-stop shop for beautiful house plants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
