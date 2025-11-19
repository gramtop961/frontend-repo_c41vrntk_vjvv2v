import { Menu, Dumbbell } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Programs", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-md">
              <Dumbbell className="w-5 h-5" />
            </span>
            <div className="leading-tight">
              <p className="text-white font-bold tracking-tight">Fit Castle</p>
              <p className="text-[11px] text-blue-200/80 -mt-0.5">Dumai, Indonesia</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-blue-100/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded-xl shadow hover:shadow-indigo-500/30 transition"
            >
              Join Now
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 backdrop-blur-md bg-slate-900/70 border border-white/10 rounded-2xl px-4 py-3 shadow-lg">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-blue-100/90 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded-xl shadow"
              >
                Join Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
