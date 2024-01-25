// components/DashboardLayout.js
import React, { useState } from 'react';
import SalesChart from './SalesChart';
import LocationSwitchButton from './LocationSwitchButton';
import InventoryAlert from './InventoryAlert';

const DashboardLayout = () => {
  const [currentInventory, setCurrentInventory] = useState(0);

  const handleInventoryChange = newInventory => {
    setCurrentInventory(newInventory);
  };

  return (
    <div>
      <h1>ONEGLASS.io Dashboard</h1>
      <LocationSwitchButton />
      <SalesChart />
      <InventoryAlert currentInventory={currentInventory} />
      <input
        type="number"
        placeholder="Enter Current Inventory"
        value={currentInventory}
        onChange={e => handleInventoryChange(e.target.value)}
      />
    </div>
  );
};

export default DashboardLayout;
