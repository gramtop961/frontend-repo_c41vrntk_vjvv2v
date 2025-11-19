import { ArrowRight, Star, Dumbbell } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div className="absolute top-32 -right-16 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white rounded-full px-3 py-1 text-xs mb-4">
            <Star className="w-3.5 h-3.5 text-yellow-300" />
            Rated #1 local gym in Dumai
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Build Your Strength at Fit Castle
          </h1>
          <p className="mt-4 text-blue-100/90 text-base sm:text-lg max-w-xl">
            A modern training space in Dumai, Indonesia. Top equipment, expert coaches, and a community that pushes you to be your best.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-5 py-3 rounded-xl shadow hover:shadow-indigo-500/30 transition"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:text-white hover:border-white/30 transition"
            >
              View Pricing
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-blue-100/80 text-sm">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4" />
              Open 6am – 10pm
            </div>
            <div>Jl. Sudirman, Dumai</div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-2">
            <div className="h-full w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-slate-900/80 text-white text-sm border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-md">
            Memberships from Rp 199K / month
          </div>
        </div>
      </div>
    </section>
  );
}
