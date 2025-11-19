export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Simple Pricing</h2>
          <p className="text-blue-100/80 mt-2">Choose a plan that fits your journey.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-sm">
            <p className="text-sm text-blue-200/80">Basic</p>
            <p className="mt-2 text-3xl font-extrabold text-white">Rp 199K<span className="text-base font-medium text-blue-200/80">/mo</span></p>
            <ul className="mt-4 text-sm text-blue-100/80 space-y-2">
              <li>Gym access 6am–10pm</li>
              <li>Locker & showers</li>
              <li>Group classes 2x/week</li>
            </ul>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="mt-6 inline-flex justify-center w-full bg-white/10 hover:bg-white/15 text-white py-2.5 rounded-xl transition">Choose</a>
          </div>

          <div className="relative rounded-2xl border border-indigo-500/40 bg-gradient-to-b from-indigo-500/15 to-slate-900/60 p-6 backdrop-blur-sm ring-1 ring-indigo-500/30">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] px-2 py-0.5 rounded-full bg-indigo-500 text-white">Popular</span>
            <p className="text-sm text-blue-200/80">Pro</p>
            <p className="mt-2 text-3xl font-extrabold text-white">Rp 299K<span className="text-base font-medium text-blue-200/80">/mo</span></p>
            <ul className="mt-4 text-sm text-blue-100/80 space-y-2">
              <li>All Basic features</li>
              <li>Unlimited classes</li>
              <li>1 PT session/month</li>
            </ul>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="mt-6 inline-flex justify-center w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2.5 rounded-xl shadow hover:shadow-indigo-500/30 transition">Choose</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-sm">
            <p className="text-sm text-blue-200/80">Elite</p>
            <p className="mt-2 text-3xl font-extrabold text-white">Rp 499K<span className="text-base font-medium text-blue-200/80">/mo</span></p>
            <ul className="mt-4 text-sm text-blue-100/80 space-y-2">
              <li>24/7 access</li>
              <li>Unlimited PT sessions</li>
              <li>Nutrition coaching</li>
            </ul>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="mt-6 inline-flex justify-center w-full bg-white/10 hover:bg-white/15 text-white py-2.5 rounded-xl transition">Choose</a>
          </div>
        </div>
      </div>
    </section>
  );
}
