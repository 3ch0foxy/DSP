import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import CheckInTable from '../components/CheckInTable';

export default function Dashboard() {
  const [checkIns, setCheckIns] = useState<any[]>([]);

  useEffect(() => {
    const fetchCheckIns = async () => {
      const { data, error } = await supabase.from('checkins').select('*');
      if (!error) setCheckIns(data || []);
    };
    fetchCheckIns();
  }, []);

  return (
    <main>
      <h1>Admin Dashboard</h1>
      <CheckInTable data={checkIns} />
    </main>
  );
}
