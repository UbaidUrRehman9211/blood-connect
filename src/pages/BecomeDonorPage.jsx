import React from 'react';

export default function BecomeDonorPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white shadow p-8 rounded-xl border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Register as a Life Saver</h1>
        <p className="text-sm text-gray-500 mb-6">Your details will be encrypted and indexed solely for emergency medical matching systems.</p>
        <form onSubmit={e => e.preventDefault()} className="space-y-4">
          <div><label className="block text-sm font-semibold mb-1">Full Legal Name</label><input type="text" className="w-full border p-2.5 rounded" placeholder="Jane Doe" required /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-semibold mb-1">Blood Type</label>
              <select className="w-full border p-2.5 rounded"><option>O+</option><option>O-</option><option>A+</option><option>A-</option><option>B+</option><option>B-</option><option>AB+</option><option>AB-</option></select>
            </div>
            <div><label className="block text-sm font-semibold mb-1">Last Donation Date</label><input type="date" className="w-full border p-2.5 rounded" /></div>
          </div>
          <div><label className="block text-sm font-semibold mb-1">Mobile Contact Contact</label><input type="tel" className="w-full border p-2.5 rounded" placeholder="+1 (555) 000-0000" required /></div>
          <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 rounded hover:bg-red-700 transition shadow">Register into Donor Database</button>
        </form>
      </div>
    </div>
  );
}