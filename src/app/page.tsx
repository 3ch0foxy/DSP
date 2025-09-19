"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://luma.com/v1ijcgdn"; // Replace with actual Luma link to the event
    }, 3000); // 3-second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to [event name] 🚀</h1>
      <p className="text-lg text-center max-w-md">
        You’re being redirected to our official registration page powered by Luma.
      </p>
      <div className="mt-8 animate-pulse text-sm opacity-80">
        Redirecting in 3 seconds...
      </div>
    </div>
  );
}
