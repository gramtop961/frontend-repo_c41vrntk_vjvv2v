import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function Trainers(){
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/trainers`);
        const data = await res.json();
        setTrainers(Array.isArray(data) ? data : []);
      } catch (e) {
        setError("Failed to load trainers");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section className="py-20" aria-labelledby="trainers-title">
      <div className="max-w-7xl mx-auto px-4">
        <h1 id="trainers-title" className="text-3xl font-bold">Certified Trainers</h1>
        <p className="text-blue-200/80 mt-2">Meet the team ready to guide your journey.</p>
        {loading ? <p className="mt-6">Loading...</p> : null}
        {error ? <p className="mt-6 text-red-400">{error}</p> : null}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {trainers.map(t => (
            <article key={t._id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              {t.photo_url ? <img src={t.photo_url} alt={t.name} className="w-full h-40 object-cover rounded-xl"/> : null}
              <h3 className="text-xl font-semibold mt-3">{t.name}</h3>
              <p className="text-blue-200/80">{t.specialty}</p>
              {t.bio ? <p className="text-blue-200/70 mt-2 text-sm">{t.bio}</p> : null}
              {t.rate_per_session ? <p className="mt-3 text-sm">Session: Rp {t.rate_per_session.toLocaleString("id-ID")} </p> : null}
              <a href="#book-trainer" className="mt-4 inline-flex items-center rounded-xl bg-indigo-500/90 hover:bg-indigo-500 text-white px-4 py-2">Book Trainer</a>
            </article>
          ))}
          {(!loading && trainers.length === 0) && <p className="col-span-full text-blue-200/70">No trainers yet.</p>}
        </div>
      </div>
    </section>
  );
}
