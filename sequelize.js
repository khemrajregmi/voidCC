// sequelize.js

const { Sequelize } = require('sequelize');

// Replace the following values with your actual database connection details
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'voids-jobs.c2wwnfcaisej.eu-central-1.rds.amazonaws.com',
    username: 'postgres_ro',
    password: 'voidsiscool',
    database: 'postgres',
    schema: 'oneglass', // Assuming your schema is "oneglass"
  });

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
