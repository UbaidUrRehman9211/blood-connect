import React from 'react';
import { useApp } from '../../context/AppContext';

export default function Campaigns() {
  const { campaigns } = useApp();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Campaign Performance Audit</h1>
      <div className="space-y-4">
        {campaigns.map(c => (
          <div key={c.id} className="bg-white p-6 rounded-xl border shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div><h3 className="font-bold text-lg">{c.title}</h3><p className="text-sm text-gray-500">{c.location} | {c.date}</p></div>
            <div className="text-right"><span className="text-sm font-semibold text-gray-700">Yield: {c.raised} / {c.target} Units</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}