import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto px-4 py-24">
      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-6">Internal Portal Gateway</h2>
        <button onClick={() => navigate('/admin')} className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition shadow">
          Bypass as Authorized Admin
        </button>
      </div>
    </div>
  );
}