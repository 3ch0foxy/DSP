import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { guestId } = req.query;
  // Simulate Luma API call
  if (!guestId) return res.status(400).json({ error: 'Missing guestId' });
  // Replace with real Luma API logic
  res.status(200).json({ guestId, status: 'checked-in' });
}
