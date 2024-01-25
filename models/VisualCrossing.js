// visualCrossing.js
const axios = require('axios');

const apiKey = 'FXCTPT3UX2G5L4Q5L3KVRC25B';
const apiUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

// Implement logic to make requests to Visual Crossing API

async function getWeatherData(location, startDate, endDate) {
    try {
      const response = await axios.get(`${apiUrl}?key=${apiKey}&location=${location}&startDateTime=${startDate}&endDateTime=${endDate}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      throw error;
    }
  }

module.exports = { getWeatherData };
