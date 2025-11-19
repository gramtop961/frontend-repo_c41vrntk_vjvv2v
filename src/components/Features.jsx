import { HeartPulse, UsersRound, Timer, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: HeartPulse,
    title: "Modern Equipment",
    desc: "Full range of cardio and strength machines maintained to high standards.",
  },
  {
    icon: UsersRound,
    title: "Certified Coaches",
    desc: "Personal trainers to guide your workouts and nutrition goals.",
  },
  {
    icon: Timer,
    title: "Flexible Hours",
    desc: "Open early till late to fit your schedule, 7 days a week.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Clean",
    desc: "Hygiene protocols and regular cleaning to keep you healthy.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Why Choose Fit Castle</h2>
        <p className="text-blue-100/80 text-center mt-2 max-w-2xl mx-auto">
          Everything you need to crush your fitness goals in Dumai.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-sm hover:border-white/20 transition">
              <div className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-1 text-blue-100/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
