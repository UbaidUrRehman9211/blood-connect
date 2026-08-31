import React from 'react';
import { useApp } from '../context/AppContext';

export default function CampaignsPage() {
  const { campaigns } = useApp();
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Active Public Blood Drives</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaigns.map(c => (
          <div key={c.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-red-600">{c.title}</h3>
            <p className="text-sm text-gray-500 mt-1">🗓 {c.date} | 📍 {c.location}</p>
            <div className="mt-4">
              <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1"><span>Collected: {c.raised} Pints</span><span>Target: {c.target} Pints</span></div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden"><div className="bg-green-500 h-full" style={{ width: `${(c.raised / c.target) * 100}%` }} /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}