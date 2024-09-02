// pages/api/contact.js
import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, message } = req.body;

    if (!username || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      const [result] = await pool.query(
        'INSERT INTO contacts (username, email, message) VALUES (?, ?, ?)',
        [username, email, message]
      );
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: 'Database error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
