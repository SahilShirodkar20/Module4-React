import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartItemsCount = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <header className="bg-green-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Paradise Nursery</Link>
        <div className="space-x-4">
          <Link to="/products" className="hover:underline">Products</Link>
          <Link to="/cart" className="hover:underline">Cart ({cartItemsCount})</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
