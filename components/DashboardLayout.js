// components/DashboardLayout.js
import React from 'react';
import SalesChart from './SalesChart';
import LocationSwitchButton from './LocationSwitchButton';
import InventoryAlert from './InventoryAlert';

const DashboardLayout = () => {
  return (
    <div>
      <h1>ONEGLASS.io Dashboard</h1>
      <SalesChart />
      <LocationSwitchButton />
      <InventoryAlert />
    </div>
  );
};

export default DashboardLayout;
