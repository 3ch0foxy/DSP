# Copilot Instructions for DSP Codebase

## Overview
This project is a client registration and check-in system built with Next.js, TypeScript, and Supabase. It supports public registration, admin dashboard, real-time sync, and secure CSV export.

## Architecture
- **pages/**: Main app routes. Includes public landing (`index.tsx`), admin dashboard (`dashboard.tsx`), login (`login.tsx`), and backend API endpoints (`api/`).
- **components/**: UI elements like QR simulators, check-in tables, countdown timers, and FAQ sections.
- **lib/supabase.ts**: Centralized Supabase client setup. All Supabase interactions should use this client.
- **utils/**: Utility functions for CSV export and optional in-memory check-in log fallback.
- **.env.local**: Store Supabase keys and environment variables here.

## Key Patterns & Conventions
- **Supabase Integration**: Use the exported `supabase` client from `lib/supabase.ts` for all database/auth operations.
- **API Endpoints**: Place backend logic in `pages/api/`. Endpoints are named for their function (e.g., `luma-checkin.ts`, `checkin-log.ts`, `export-csv.ts`).
- **Component Usage**: UI logic is separated into reusable components. Example: `QRSimulator.tsx` for simulating check-ins.
- **CSV Export**: Use `utils/exportCSV.ts` for generating CSVs from check-in data. Secure export via token-based access in API.
- **State Management**: Use `utils/checkInStore.ts` for in-memory fallback if Supabase is unavailable.
- **Environment Variables**: Always access Supabase credentials via `process.env.NEXT_PUBLIC_SUPABASE_URL` and `process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY`.

## Developer Workflows
- **Local Development**: Run with `npm run dev` (Next.js default).
- **Environment Setup**: Ensure `.env.local` contains valid Supabase keys.
- **Testing**: No explicit test files found; add tests in `__tests__/` or alongside components if needed.
- **Debugging**: Use browser devtools and Supabase dashboard for troubleshooting data issues.

## External Integrations
- **Supabase**: Used for authentication, real-time sync, and data storage.
- **Luma**: API endpoint for querying guest status (`luma-checkin.ts`).

## Examples
- To fetch check-in data: Use the API endpoint in `pages/api/checkin-log.ts` and the Supabase client.
- To export CSV: Use `utils/exportCSV.ts` and the secure API endpoint `pages/api/export-csv.ts`.
- To simulate check-in: Use the `QRSimulator.tsx` component.

## References
- See `ReadMe.txt` for file structure and planning notes.
- Key files: `lib/supabase.ts`, `utils/exportCSV.ts`, `pages/api/`, `components/`

---
_If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions._
