export default function Contact(){
  return (
    <section className="py-20" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4">
        <h1 id="contact-title" className="text-3xl font-bold">Contact & Visit</h1>
        <p className="text-blue-200/80 mt-2">We are located in Dumai, Indonesia. Reach out or visit us.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Details</h3>
            <ul className="mt-3 text-blue-200/80 space-y-1 text-sm">
              <li>Address: Dumai, Riau, Indonesia</li>
              <li>Hours: Mon–Sun 06:00–22:00</li>
              <li>Phone/WA: +62 812-3456-7890</li>
              <li>Email: hello@fitcastle.id</li>
            </ul>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center rounded-xl bg-emerald-500/90 hover:bg-emerald-500 text-white px-4 py-2">Chat via WhatsApp</a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe title="map" src="https://www.google.com/maps?q=Dumai,%20Riau,%20Indonesia&output=embed" className="w-full h-[300px]"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
