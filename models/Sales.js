// models/Sales.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Adjust the path based on your project structure

const Sales = sequelize.define('Sales', {
  // Define fields for the Sales model
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  product: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // Add other fields as needed
});

module.exports = Sales;
