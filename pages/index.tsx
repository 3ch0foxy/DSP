import React from 'react';
import QRSimulator from '../components/QRSimulator';
import Countdown from '../components/Countdown';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main>
      <h1>Welcome to Client Registration</h1>
      {/* Luma registration embed placeholder */}
      <iframe src="https://www.luma-event.com/registration" title="Luma Registration" style={{width: '100%', height: 400}} />
      <Countdown eventDate={new Date('2025-09-30T18:00:00')} />
      <QRSimulator />
      <FAQ />
    </main>
  );
}
