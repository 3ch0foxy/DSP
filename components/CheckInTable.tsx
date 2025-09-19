import React from 'react';
export default function CheckInTable({ data }: { data: any[] }) {
  return (
    <table>
      <thead>
        <tr>
          {data.length > 0 && Object.keys(data[0]).map(key => <th key={key}>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) && data.map((row, i) => (
          <tr key={i}>
            {row && typeof row === 'object'
              ? Object.values(row).map((val, j) => <td key={j}>{String(val)}</td>)
              : <td colSpan={1}>Invalid row</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
