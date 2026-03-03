import Link from "next/link";
export default function Home() {
  return (
   <main className="min-h-screen text-neutral-100 flex items-center justify-center px-6">
      <div className="max-w-3xl w-full">
        <div className="border border-neutral-800 bg-neutral-900/40 backdrop-blur-md p-12 rounded-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            AI Style Oracle
          </h1>

          <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
            A high-tech stylist studio.
            <br />
            Personalized looks. Precision curation.
            <br />
            Your aesthetic, engineered.
          </p>

          <div className="mt-10 flex gap-4">
           <Link
  href="/studio"
  className="px-6 py-3 bg-white text-black font-medium rounded-lg transition-all duration-300 hover:opacity-95 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
>
  Enter Studio
</Link>
            <button className="px-6 py-3 border border-neutral-700 rounded-lg text-neutral-300 hover:border-neutral-500 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}