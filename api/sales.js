// api/sales.js
import { Sales } from '../models';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const salesData = await Sales.findAll();
      res.status(200).json(salesData);
    } catch (error) {
      console.error('Error fetching sales data:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
