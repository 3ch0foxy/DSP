// In-memory check-in log fallback
let checkIns: any[] = [];

export function addCheckIn(entry: any) {
  checkIns.push(entry);
}

export function getCheckIns() {
  return checkIns;
}
