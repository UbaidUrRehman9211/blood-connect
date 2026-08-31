import React from 'react';
import { useApp } from '../../context/AppContext';

export default function Profile() {
  const { user } = useApp();
  return (
    <div className="bg-white p-6 rounded-xl border max-w-md">
      <h1 className="text-2xl font-bold mb-4">Account Profile</h1>
      <p className="text-sm text-gray-600">Operator Identity: <strong>{user.name}</strong></p>
      <p className="text-sm text-gray-600 mt-1">Access Clearances: <span className="text-red-600 font-bold uppercase text-xs bg-red-50 px-2 py-0.5 rounded">{user.role}</span></p>
    </div>
  );
}