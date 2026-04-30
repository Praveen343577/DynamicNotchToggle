import React, { useState } from 'react';
import './NotchHeader.css';

const NotchHeader = () => {
  const [activeTab, setActiveTab] = useState('unpaid');

  const tabs = [
    { id: 'all', label: 'All Invoices', count: null },
    { id: 'draft', label: 'Draft', count: 3 },
    { id: 'unpaid', label: 'Unpaid', count: 5 },
  ];

  return (
    <div className="header-container">
      {/* The Notch */}
      <div className="notch-container">
        <nav className="notch-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
            >
              <span className="label">{tab.label}</span>
              {tab.count !== null && (
                <span className="badge">{tab.count}</span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NotchHeader;