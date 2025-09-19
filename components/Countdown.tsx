import React from 'react';

interface CountdownProps {
  eventDate: Date;
}

export default function Countdown({ eventDate }: CountdownProps) {
  // Simple countdown placeholder
  return <div>Countdown to event: {eventDate.toLocaleString()}</div>;
}
