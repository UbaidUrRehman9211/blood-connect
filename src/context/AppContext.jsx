import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState({ name: 'Admin User', role: 'admin' });

  // Central Mock Data Store
  const [bloodInventory, setBloodInventory] = useState([
    { group: 'A+', units: 45, status: 'Stable' },
    { group: 'A-', units: 12, status: 'Low' },
    { group: 'B+', units: 38, status: 'Stable' },
    { group: 'B-', units: 8, status: 'Critical' },
    { group: 'O+', units: 60, status: 'Stable' },
    { group: 'O-', units: 5, status: 'Critical' },
    { group: 'AB+', units: 22, status: 'Stable' },
    { group: 'AB-', units: 14, status: 'Low' },
  ]);

  const [campaigns, setCampaigns] = useState([
    { id: 1, title: 'Annual Lifesaver Drive', date: '2026-08-12', location: 'Central Community Hall', target: 200, raised: 145 },
    { id: 2, title: 'Emergency O- Negative Drive', date: '2026-07-20', location: 'City General Hospital', target: 50, raised: 42 },
  ]);

  const [donors, setDonors] = useState([
    { id: 1, name: 'Sarah Ahmed', bloodGroup: 'O+', lastDonated: '2026-04-10', status: 'Eligible' },
    { id: 2, name: 'John Doe', bloodGroup: 'A-', lastDonated: '2026-06-01', status: 'Deferred' },
  ]);

  const [requests, setRequests] = useState([
    { id: 1, patientName: 'Ali Khan', bloodGroup: 'B-', units: 3, hospital: 'Metro Care Hospital', status: 'Pending' },
    { id: 2, patientName: 'Fatima Sana', bloodGroup: 'AB-', units: 2, hospital: 'St. Jude Medical Center', status: 'Fulfilled' },
  ]);

  return (
    <AppContext.Provider value={{
      sidebarOpen,
      setSidebarOpen,
      user,
      setUser,
      bloodInventory,
      setBloodInventory,
      campaigns,
      setCampaigns,
      donors,
      setDonors,
      requests,
      setRequests
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);