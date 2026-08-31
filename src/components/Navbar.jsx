import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-red-600 flex items-center space-x-2">
            <span>❤️</span> <span>QALB</span>
          </Link>
          <div className="hidden md:flex space-x-6 font-medium text-gray-700">
            <Link to="/" className="hover:text-red-600 transition">Home</Link>
            <Link to="/about" className="hover:text-red-600 transition">About</Link>
            <Link to="/campaigns" className="hover:text-red-600 transition">Campaigns</Link>
            <Link to="/find-donor" className="hover:text-red-600 transition">Find Donors</Link>
            <Link to="/request-blood" className="hover:text-red-600 transition">Request Blood</Link>
            <Link to="/contact" className="hover:text-red-600 transition">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-red-600 font-medium">Login</Link>
            <Link to="/become-donor" className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition">Donate Now</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}