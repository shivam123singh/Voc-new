'use client';
import { createContext, useState } from 'react';

export const TabContext = createContext(null);

export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('account');

  const setActiveTabHandler = (name) => setActiveTab(name);

  const value = {
    activeTab,
    setActiveTabHandler,
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};
