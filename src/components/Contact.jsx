export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Visit Us</h2>
          <p className="text-blue-100/85 mt-2">Jl. Jendral Sudirman, Dumai, Riau, Indonesia</p>
          <div className="mt-4 text-blue-100/80 space-y-1">
            <p>Open: 06:00 - 22:00</p>
            <p>Phone/WA: +62 812-3456-7890</p>
            <p>Email: hello@fitcastle.id</p>
          </div>
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=dumai%20riau%20indonesia&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        <form className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-blue-100/80">Name</label>
              <input className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your Name" />
            </div>
            <div>
              <label className="text-sm text-blue-100/80">Phone</label>
              <input className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="08xxxxxxxxxx" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-blue-100/80">Message</label>
            <textarea rows={4} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us your goals..." />
          </div>
          <button type="button" onClick={() => window.open('https://wa.me/6281234567890','_blank')} className="mt-5 inline-flex items-center justify-center w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2.5 rounded-xl shadow hover:shadow-indigo-500/30 transition">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
