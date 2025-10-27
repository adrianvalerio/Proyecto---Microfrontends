import React from 'react';
import './Tabs.css';

export type TabType = 'Cartelera' | 'Proximamente' | 'Quiero-verla';

interface TabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  counts?: {
    'Cartelera': number;
    'Proximamente': number;
    'Quiero-verla': number;
  };
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange, counts }) => {
  const tabs = [
    { id: 'Cartelera' as TabType, label: 'En Cartelera'},
    { id: 'Proximamente' as TabType, label: 'Próximamente'},
    { id: 'Quiero-verla' as TabType, label: 'Quiero Verla' },
  ];

  return (
    <div className="tabs-container">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="tab-label">{tab.label}</span>
          {counts && counts[tab.id] > 0 && (
            <span className="tab-count">{counts[tab.id]}</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;