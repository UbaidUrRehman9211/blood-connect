import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function FindDonorPage() {
  const { donors } = useApp();
  const [filter, setFilter] = useState('All');

  const filteredDonors = filter === 'All' ? donors : donors.filter(d => d.bloodGroup === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Verified Donor Registry</h1>
          <p className="text-sm text-gray-500 mt-1">Direct verification status updates</p>
        </div>
        <select className="border p-2 rounded-lg mt-4 md:mt-0" onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All Blood Types</option>
          <option value="O+">O+</option><option value="O-">O-</option><option value="A-">A-</option>
        </select>
      </div>
      <div className="bg-white shadow overflow-hidden rounded-xl border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-50">
            <tr><th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Name</th><th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Group</th><th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Last Donated</th><th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Status</th></tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm">
            {filteredDonors.map(d => (
              <tr key={d.id}>
                <td className="px-6 py-4 font-semibold text-gray-900">{d.name}</td>
                <td className="px-6 py-4 font-bold text-red-600">{d.bloodGroup}</td>
                <td className="px-6 py-4 text-gray-600">{d.lastDonated}</td>
                <td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs font-bold ${d.status === 'Eligible' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{d.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}