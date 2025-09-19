export function exportCSV(data: any[]): string {
  if (!data || !data.length) return '';
  const keys = Object.keys(data[0]);
  const csvRows = [keys.join(',')];
  for (const row of data) {
    csvRows.push(keys.map(k => JSON.stringify(row[k] ?? '')).join(','));
  }
  return csvRows.join('\n');
}
