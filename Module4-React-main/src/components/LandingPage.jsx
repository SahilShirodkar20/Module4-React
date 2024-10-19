import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/path/to/your/background-image.jpg')"}}>
      <div className="text-center bg-white bg-opacity-75 p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Paradise Nursery</h1>
        <p className="mb-6">Welcome to Paradise Nursery, your one-stop shop for beautiful houseplants!</p>
        <Link to="/products">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;