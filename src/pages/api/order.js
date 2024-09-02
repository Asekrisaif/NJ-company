// src/pages/api/order.js
import db from '../../lib/db'; // Adjust the import based on your DB configuration

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, address, email, tel, selectedServiceName } = req.body;

    if (!fullName || !address || !email || !tel || !selectedServiceName) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      const [result] = await db.query(
        'INSERT INTO orders (full_name, address, email, phone_number, service_name) VALUES (?, ?, ?, ?, ?)',
        [fullName, address, email, tel, selectedServiceName]
      );

      return res.status(200).json({ message: 'Order placed successfully' });
    } catch (error) {
      console.error('Error placing order:', error);
      return res.status(500).json({ error: 'Failed to place order' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
