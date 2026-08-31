import React from 'react';

export default function RequestBloodPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white shadow p-8 rounded-xl border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit Emergency Blood Request</h1>
        <p className="text-sm text-gray-500 mb-6">This alerts all compatible verified donors within the operational zone immediately.</p>
        <form onSubmit={e => e.preventDefault()} className="space-y-4">
          <div><label className="block text-sm font-semibold mb-1">Patient Name</label><input type="text" className="w-full border p-2.5 rounded" required /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold mb-1">Required Group</label>
              <select className="w-full border p-2.5 rounded"><option>O-</option><option>O+</option><option>A-</option><option>B-</option></select>
            </div>
            <div><label className="block text-sm font-semibold mb-1">Requested Units (Pints)</label><input type="number" min="1" className="w-full border p-2.5 rounded" required /></div>
          </div>
          <div><label className="block text-sm font-semibold mb-1">Target Hospital Facility</label><input type="text" className="w-full border p-2.5 rounded" placeholder="General Medical Ward E" required /></div>
          <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 rounded hover:bg-red-700 transition shadow">Broadcast Emergency Alert</button>
        </form>
      </div>
    </div>
  );
}