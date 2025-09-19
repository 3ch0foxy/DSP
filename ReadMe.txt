client-registration/
├── pages/
│   ├── index.tsx                 ← Public landing page with embedded Luma registration + QR simulator
│   ├── dashboard.tsx             ← Admin dashboard with real-time Supabase sync
│   ├── login.tsx                 ← Admin login page (Supabase Auth)
│   └── api/
│       ├── luma-checkin.ts       ← Backend endpoint to query Luma guest status
│       ├── checkin-log.ts        ← API to fetch check-in data from Supabase
│       └── export-csv.ts         ← Secure CSV export with token-based access
├── components/
│   ├── QRSimulator.tsx           ← Simulated QR check-in buttons
│   ├── CheckInTable.tsx          ← Dashboard table view
│   ├── Countdown.tsx             ← Countdown timer to event start
│   └── FAQ.tsx                   ← Optional FAQ section
├── lib/
│   └── supabase.ts               ← Supabase client setup
├── utils/
│   ├── exportCSV.ts              ← CSV generator from check-in data
│   └── checkInStore.ts           ← (Optional) in-memory check-in log fallback
├── .env.local                    ← Environment variables (Supabase keys)

File structure Planning ^