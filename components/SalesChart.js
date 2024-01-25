// components/SalesChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import api from '../utils/api';

const SalesChart = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/sales'); // Replace with your actual API endpoint
        setSalesData(response.data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };

    fetchData();
  }, []);

  // ... rest of the component remains the same
};

export default SalesChart;
