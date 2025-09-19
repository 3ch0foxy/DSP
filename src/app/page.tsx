"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://lu.ma/your-event-id"; // Replace with your actual Luma link
    }, 2000); // 2-second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to DSP 🚀</h1>
      <p className="text-lg text-center max-w-md">
        You’re being redirected to our official registration page powered by Luma.
      </p>
      <div className="mt-8 animate-pulse text-sm opacity-80">
        Redirecting in 2 seconds...
      </div>
    </div>
  );
}
