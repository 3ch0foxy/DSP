"use client";
import { useState } from "react";

export default function AdminPage() {
  const [access, setAccess] = useState(false);
  const [password, setPassword] = useState("");
  const [emails, setEmails] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const correctPassword = "dsp2025"; // Change this to something secure

  const handleAuth = () => {
    if (password === correctPassword) {
      setAccess(true);
    } else {
      alert("Incorrect password");
    }
  };

  const handleSend = async () => {
    setSending(true);
    setStatus("");

    const lines = emails
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    for (const email of lines) {
      await fetch("/api/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Guest", email }),
      });
    }

    setSending(false);
    setStatus(`✅ Sent ${lines.length} invites`);
  };

  if (!access) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
        <h1 className="text-xl font-bold mb-4">Admin Access Required</h1>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 rounded mb-4"
        />
        <button
          onClick={handleAuth}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Unlock
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">Admin Invite Panel</h1>
      <p className="text-md text-gray-600 mb-6 text-center max-w-xl">
        Paste a list of emails below (one per line) and click "Send Invites" to deliver personalized registration links.
      </p>
      <textarea
        rows={10}
        className="w-full max-w-xl border border-gray-300 rounded p-3 mb-4 text-sm"
        placeholder="foxy@example.com\nnina@example.com\nzhihao@example.com"
        value={emails}
        onChange={(e) => setEmails(e.target.value)}
      />
      <button
        onClick={handleSend}
        disabled={sending}
        className={`bg-indigo-600 text-white px-6 py-2 rounded font-semibold ${
          sending ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {sending ? "Sending..." : "Send Invites"}
      </button>
      {status && <p className="mt-4 text-green-600 font-medium">{status}</p>}
    </div>
  );
}
