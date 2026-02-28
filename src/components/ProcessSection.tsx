export function ProcessSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl border p-6 sm:p-8">
      {/* Background layer */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10 dark:from-white/10 dark:to-white/10" />

        {/* Subtle radial texture grid */}
        <div className="absolute inset-0 opacity-[0.25] 
          [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] 
          [background-size:24px_24px] 
          dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)]" />
      </div>

      {/* Foreground content */}
      <div className="relative">
        <p className="text-sm font-medium opacity-70">
          Our Process
        </p>

        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Simple, transparent service from start to finish.
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border bg-white/50 dark:bg-white/5 p-5 backdrop-blur-sm">
            <div className="text-sm font-medium">1. Schedule</div>
            <p className="mt-2 text-sm opacity-80">
              Tell us what’s going on and choose a convenient time.
            </p>
          </div>

          <div className="rounded-xl border bg-white/50 dark:bg-white/5 p-5 backdrop-blur-sm">
            <div className="text-sm font-medium">2. Diagnose</div>
            <p className="mt-2 text-sm opacity-80">
              We assess the issue and explain your options clearly.
            </p>
          </div>

          <div className="rounded-xl border bg-white/50 dark:bg-white/5 p-5 backdrop-blur-sm">
            <div className="text-sm font-medium">3. Resolve</div>
            <p className="mt-2 text-sm opacity-80">
              Fast, reliable service backed by workmanship guarantees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}