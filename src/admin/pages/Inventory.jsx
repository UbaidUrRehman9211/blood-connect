import React from 'react';
import { useApp } from '../../context/AppContext';

export default function Inventory() {
  const { bloodInventory } = useApp();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Real-time Reserve Depots</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {bloodInventory.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border shadow-sm text-center">
            <span className="text-2xl font-bold block text-gray-900">{item.group}</span>
            <span className="text-3xl font-extrabold text-red-600 block my-2">{item.units} <span className="text-xs font-medium text-gray-400">Pints</span></span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${item.status === 'Critical' ? 'bg-red-100 text-red-800' : item.status === 'Low' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}