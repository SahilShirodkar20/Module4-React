import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function ShoppingCart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Your Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
          <img src={item.image} alt={item.name} className="w-20 h-20 object-contain mr-4" />
          <div className="flex-grow">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center">
            <button onClick={() => dispatch(decrementQuantity(item.id))} className="bg-gray-200 px-2 py-1 rounded">-</button>
            <span className="mx-2">{item.quantity}</span>
            <button onClick={() => dispatch(incrementQuantity(item.id))} className="bg-gray-200 px-2 py-1 rounded">+</button>
          </div>
          <button onClick={() => dispatch(removeFromCart(item.id))} className="ml-4 text-red-500">Remove</button>
        </div>
      ))}
      <div className="mt-8">
        <p className="text-xl font-bold">Total Items: {totalItems}</p>
        <p className="text-xl font-bold">Total Cost: ${totalCost.toFixed(2)}</p>
      </div>
      <div className="mt-8 space-x-4">
        <Link to="/products">
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Continue Shopping
          </button>
        </Link>
        <button 
          onClick={() => alert('Checkout functionality coming soon!')}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;