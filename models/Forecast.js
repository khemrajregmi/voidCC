// models/Forecast.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Forecast = sequelize.define('Forecast', {
  // Define forecast model fields
});

// models/Inventory.js
const Inventory = sequelize.define('Inventory', {
  // Define inventory model fields
});

module.exports = { Forecast, Inventory };
