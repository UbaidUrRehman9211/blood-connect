import React from 'react';
import StatCard from '../../components/StatCard';
import { useApp } from '../../context/AppContext';

export default function Dashboard() {
  const { requests, donors } = useApp();
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">System Command Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard title="Total Registered Donors" value={donors.length} unit="Users" icon="👥" change="12% vs last month" />
        <StatCard title="Active Critical Requests" value={requests.filter(r => r.status === 'Pending').length} unit="Cases" icon="🚨" change="Action Needed" trend="down" />
        <StatCard title="System Node Status" value="100%" unit="Online" icon="⚡" />
      </div>
    </div>
  );
}