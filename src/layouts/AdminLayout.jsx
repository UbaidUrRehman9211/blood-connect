import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useApp } from '../context/AppContext';

export default function AdminLayout() {
  const { setSidebarOpen } = useApp();

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full overflow-y-auto">
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 lg:justify-end border-b border-gray-200">
          <button className="lg:hidden p-2 text-gray-600 hover:text-gray-900" onClick={() => setSidebarOpen(prev => !prev)}>
            ☰
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Active Node: <strong>Secure Gateway</strong></span>
            <div className="h-8 w-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">A</div>
          </div>
        </header>
        <main className="p-6 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}