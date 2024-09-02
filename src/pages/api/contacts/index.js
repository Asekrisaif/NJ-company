import db from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const [orders] = await db.query('SELECT * FROM contacts');
      return res.status(200).json(orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      return res.status(500).json({ error: 'Failed to fetch orders' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
