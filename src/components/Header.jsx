import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const itemsCount = useSelector((state) => state.cart.items.length);

  return (
    <header>
      <h1>Paradise Nursery</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({itemsCount})</Link>
      </nav>
    </header>
  );
};

export default Header;
