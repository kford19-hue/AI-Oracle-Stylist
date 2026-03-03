"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Studio() {
  const router = useRouter();

  const [occasion, setOccasion] = useState("");
  const [mood, setMood] = useState("");
  const [intensity, setIntensity] = useState("");

  const generateSession = () => {
    const params = new URLSearchParams({
      occasion,
      mood,
      intensity,
    });

    router.push(`/session?${params.toString()}`);
  };

  return (
    <main className="min-h-screen text-neutral-100 px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold tracking-tight">Studio Intake</h1>

        <p className="mt-4 text-neutral-400">Let’s engineer your next look.</p>

        <div className="mt-12 border border-neutral-800 bg-neutral-900/40 backdrop-blur-md p-10 rounded-2xl">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-neutral-300">Occasion</label>
              <input
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                placeholder="Dinner, work, date night..."
                className="bg-neutral-950/40 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/10"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-neutral-300">Mood</label>
              <input
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="Soft, powerful, mysterious..."
                className="bg-neutral-950/40 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/10"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-neutral-300">Style Intensity</label>
              <select
                value={intensity}
                onChange={(e) => setIntensity(e.target.value)}
                className="appearance-none bg-neutral-950/40 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/10"
              >
                <option value="" className="bg-black text-neutral-400">
                  Select intensity
                </option>
                <option value="subtle" className="bg-black text-neutral-100">
                  Subtle
                </option>
                <option value="balanced" className="bg-black text-neutral-100">
                  Balanced
                </option>
                <option value="dramatic" className="bg-black text-neutral-100">
                  Dramatic
                </option>
              </select>
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-neutral-500">This is a draft intake. AI wiring comes next.</p>

              <button
                type="button"
                onClick={generateSession}
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-90 transition"
              >
                Generate Session
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}