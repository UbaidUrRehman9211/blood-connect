import React from 'react';

export default function Settings() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Gateway Configuration</h1>
      <div className="bg-white p-6 rounded-xl border max-w-lg space-y-4">
        <div className="flex items-center justify-between"><span className="text-sm font-semibold">Enable SMS Broadcast Hooks</span><input type="checkbox" defaultChecked className="h-4 w-4" /></div>
        <div className="flex items-center justify-between"><span className="text-sm font-semibold">Enforce Hospital API Cryptography</span><input type="checkbox" defaultChecked className="h-4 w-4" /></div>
      </div>
    </div>
  );
}