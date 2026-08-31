import React from 'react';
import { useApp } from '../../context/AppContext';

export default function Requests() {
  const { requests } = useApp();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Patient Demand Allocations</h1>
      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
          <thead className="bg-gray-50 text-xs font-bold text-gray-500 uppercase">
            <tr><th className="px-6 py-3">Patient</th><th className="px-6 py-3">Type Required</th><th className="px-6 py-3">Volume</th><th className="px-6 py-3">Hospital Node</th><th className="px-6 py-3">Status</th></tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {requests.map(r => (
              <tr key={r.id}>
                <td className="px-6 py-4 font-semibold">{r.patientName}</td>
                <td className="px-6 py-4 text-red-600 font-bold">{r.bloodGroup}</td>
                <td className="px-6 py-4">{r.units} Pints</td>
                <td className="px-6 py-4 text-gray-600">{r.hospital}</td>
                <td className="px-6 py-4"><span className={`px-2 py-0.5 rounded text-xs font-bold ${r.status === 'Fulfilled' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}