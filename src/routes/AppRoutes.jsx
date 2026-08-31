import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Outlines
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';

// Public Pages Namespace
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import CampaignsPage from '../pages/CampaignsPage';
import FindDonorPage from '../pages/FindDonorPage';
import RequestBloodPage from '../pages/RequestBloodPage';
import BecomeDonorPage from '../pages/BecomeDonorPage';
import ContactPage from '../pages/ContactPage';
import LoginPage from '../pages/LoginPage';

// Admin Pages Namespace
import Dashboard from '../admin/pages/Dashboard';
import Requests from '../admin/pages/Requests';
import Donors from '../admin/pages/Donors';
import Inventory from '../admin/pages/Inventory';
import Campaigns from '../admin/pages/Campaigns';
import Messages from '../admin/pages/Messages';
import Reports from '../admin/pages/Reports';
import Profile from '../admin/pages/Profile';
import Settings from '../admin/pages/Settings';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Facing Web Architecture */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="campaigns" element={<CampaignsPage />} />
        <Route path="find-donor" element={<FindDonorPage />} />
        <Route path="request-blood" element={<RequestBloodPage />} />
        <Route path="become-donor" element={<BecomeDonorPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>

      {/* Internal Core Management Architecture */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="requests" element={<Requests />} />
        <Route path="donors" element={<Donors />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="messages" element={<Messages />} />
        <Route path="reports" element={<Reports />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}