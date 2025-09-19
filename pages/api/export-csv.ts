import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabase';
import { exportCSV } from '../../utils/ExportCSV';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers['x-export-token'];
  if (token !== process.env.EXPORT_TOKEN) return res.status(403).json({ error: 'Forbidden' });
  const { data, error } = await supabase.from('checkins').select('*');
  if (error) return res.status(500).json({ error: error.message });
  const csv = exportCSV(data || []);
  res.setHeader('Content-Type', 'text/csv');
  res.status(200).send(csv);
}
