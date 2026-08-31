import React from 'react';
import { useApp } from '../../context/AppContext';

export default function Donors() {
  const { donors } = useApp();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">System Donor Manifest</h1>
      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
          <thead className="bg-gray-50 text-xs font-bold text-gray-500 uppercase">
            <tr><th className="px-6 py-3">Volunteer Donor</th><th className="px-6 py-3">Blood Classification</th><th className="px-6 py-3">Last Active Collection</th></tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {donors.map(d => (
              <tr key={d.id}>
                <td className="px-6 py-4 font-semibold">{d.name}</td>
                <td className="px-6 py-4 text-red-600 font-bold">{d.bloodGroup}</td>
                <td className="px-6 py-4 text-gray-500">{d.lastDonated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}