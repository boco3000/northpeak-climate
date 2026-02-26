import { ImagePanel } from "./ImagePanel";

export function Hero() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      {/* Supporting content instead of main hero copy */}
      <div>
        <p className="text-sm font-medium opacity-70">
          Why homeowners choose NorthPeak Climate
        </p>

        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Reliable service, clear communication, and lasting results.
        </h2>

        <ul className="mt-6 space-y-3 text-sm opacity-90">
          <li>• Upfront estimates with no surprises</li>
          <li>• Skilled local technicians</li>
          <li>• Preventative maintenance plans</li>
        </ul>
      </div>

      <ImagePanel
        src="/images/hero.jpg"
        alt="HVAC technician performing maintenance"
        aspect="4/3"
        overlay={
          <>
            <p className="text-sm opacity-90">Maintenance Plans</p>
            <h3 className="mt-2 text-xl font-semibold">
              Stay ahead of seasonal repairs.
            </h3>
          </>
        }
      />
    </div>
  );
}