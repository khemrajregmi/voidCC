// components/SalesChart.js
import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';

const SalesChart = () => {
  // Mock data for demonstration
  const data = [
    { name: 'Week 1', sales: 1500 },
    { name: 'Week 2', sales: 1800 },
    // Add more data as needed
  ];

  return (
    <div>
      <h2>Forecasted Sales Chart</h2>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default SalesChart;
