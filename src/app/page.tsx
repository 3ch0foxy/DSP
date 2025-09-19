import React from "react";
import Image from "next/image";

export default function Page() {
  const [form, setForm] = React.useState({ name: "", email: "", event: "" });
  const [status, setStatus] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      setStatus("Registration successful!");
      setForm({ name: "", email: "", event: "" });
    } else {
      setStatus(data.error || "Registration failed.");
    }
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold mb-4">Event Registration</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2"
          />
          <input
            type="text"
            name="event"
            placeholder="Event Name"
            value={form.event}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2"
          />
          <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 font-semibold">Register</button>
          {status && <div className="mt-2 text-center text-sm">{status}</div>}
        </form>
        {/* ...existing code... */}
      </main>
    </div>
  );
}
