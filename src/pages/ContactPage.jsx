import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact Administrative Operations</h1>
      <p className="text-gray-600 mb-6">For partnership setups, institutional inquiries, or technical support logs.</p>
      <form onSubmit={e => e.preventDefault()} className="space-y-4 bg-white p-6 rounded-xl border shadow-sm">
        <div><label className="block text-sm font-semibold mb-1">Email Address</label><input type="email" className="w-full border p-2.5 rounded" required /></div>
        <div><label className="block text-sm font-semibold mb-1">Message Body</label><textarea rows="4" className="w-full border p-2.5 rounded" required></textarea></div>
        <button type="submit" className="bg-gray-900 text-white font-semibold px-6 py-2 rounded shadow hover:bg-gray-800 transition">Send Dispatch</button>
      </form>
    </div>
  );
}