import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useApp();

  const links = [
    { to: '/admin', label: 'Overview Dashboard' },
    { to: '/admin/requests', label: 'Blood Requests' },
    { to: '/admin/donors', label: 'Donor Management' },
    { to: '/admin/inventory', label: 'Stock Inventory' },
    { to: '/admin/campaigns', label: 'Campaign Drives' },
    { to: '/admin/messages', label: 'Inbound Messages' },
    { to: '/admin/reports', label: 'Analytics Reports' },
    { to: '/admin/profile', label: 'Admin Profile' },
    { to: '/admin/settings', label: 'System Settings' },
  ];

  return (
    <aside className={`bg-gray-800 text-white w-64 fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-0'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-30 shadow-xl flex flex-col justify-between`}>
      <div>
        <div className="h-16 flex items-center justify-between px-6 bg-gray-900">
          <Link to="/" className="text-xl font-bold tracking-wider text-red-500">QALB ADMIN</Link>
          <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setSidebarOpen(false)}>✕</button>
        </div>
        <nav className="mt-6 px-4 space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/admin'}
              className={({ isActive }) => `block px-4 py-2.5 rounded transition font-medium ${isActive ? 'bg-red-600 text-white shadow' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="p-4 bg-gray-900">
        <Link to="/" className="block text-center text-sm font-semibold bg-gray-700 hover:bg-gray-600 py-2 rounded transition">
          Exit to Main Site
        </Link>
      </div>
    </aside>
  );
}