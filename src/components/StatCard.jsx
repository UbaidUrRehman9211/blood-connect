import React from 'react';

export default function StatCard({ title, value, unit, icon, change, trend = 'up' }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
        <h3 className="text-3xl font-bold text-gray-900 mt-1">
          {value} <span className="text-base font-normal text-gray-500">{unit}</span>
        </h3>
        {change && (
          <span className={`text-xs font-semibold inline-block mt-2 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? '▲' : '▼'} {change}
          </span>
        )}
      </div>
      <div className="text-4xl p-3 bg-red-50 text-red-600 rounded-lg">{icon}</div>
    </div>
  );
}