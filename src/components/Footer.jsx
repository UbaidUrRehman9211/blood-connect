import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">QALB System</h3>
          <p className="text-sm text-gray-400">Connecting blood donors with those in urgent need. Every drop counts towards saving lives.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/campaigns" className="hover:underline">Active Drives</Link></li>
            <li><Link to="/become-donor" className="hover:underline">Join as Donor</Link></li>
            <li><Link to="/admin" className="hover:underline">Admin Portal</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/request-blood" className="hover:underline">Request Process</Link></li>
            <li><Link to="/contact" className="hover:underline">Support Centre</Link></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Emergency Contact</h4>
          <p className="text-sm text-gray-400">Emergency Hotline:</p>
          <p className="text-red-500 font-bold text-lg">0800-QALB-SAFE</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} QALB Blood Donation Management Network. All rights reserved.
      </div>
    </footer>
  );
}