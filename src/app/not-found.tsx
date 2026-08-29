import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#08090b] dot-grid-bg px-6">
      <div className="text-center max-w-md">
        <p className="font-mono text-[#baff29] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          404 / NOT FOUND
        </p>
        <h1 className="font-heading text-6xl font-bold text-[#f2f1ec] mb-4">
          Gap not found.
        </h1>
        <p className="text-[#a3a3ad] mb-10">
          Whatever you were scanning for isn&apos;t here. Wrong path, or it never existed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-[#8b5cf6] hover:bg-[#a78bfa] text-[#08090b] font-semibold px-6 py-3 transition-colors"
        >
          Back to base
        </Link>
      </div>
    </div>
  );
}
