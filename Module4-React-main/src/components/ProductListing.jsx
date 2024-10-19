import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductListing() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
              <button 
                onClick={() => dispatch(addToCart(product))}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;