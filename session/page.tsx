"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Session() {
  const sp = useSearchParams();

  const occasion = sp.get("occasion") ?? "";
  const mood = sp.get("mood") ?? "";
  const intensity = sp.get("intensity") ?? "";

  return (
    <main className="min-h-screen text-neutral-100 px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold tracking-tight">Oracle Output</h1>

          <Link
            href="/studio"
            className="text-sm text-neutral-300 hover:text-white border border-neutral-800 rounded-lg px-4 py-2 bg-neutral-900/40"
          >
            Back
          </Link>
        </div>

        <div className="mt-10 border border-neutral-800 bg-neutral-900/40 backdrop-blur-md p-10 rounded-2xl">
          <p className="text-neutral-300">Here’s what you entered:</p>

          <ul className="mt-6 space-y-3 text-neutral-200">
            <li>
              <span className="text-neutral-400">Occasion:</span> {occasion || "—"}
            </li>
            <li>
              <span className="text-neutral-400">Mood:</span> {mood || "—"}
            </li>
            <li>
              <span className="text-neutral-400">Intensity:</span> {intensity || "—"}
            </li>
          </ul>

          <div className="mt-8 text-sm text-neutral-500">
            Next: we’ll generate outfit bullets dynamically based on these inputs.
          </div>
        </div>
      </div>
    </main>
  );
}