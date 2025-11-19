import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function Classes(){
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/classes`);
        const data = await res.json();
        setClasses(data || []);
      } catch (e) {
        setError("Failed to load classes");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="py-20" aria-labelledby="classes-title">
      <div className="max-w-7xl mx-auto px-4">
        <h1 id="classes-title" className="text-3xl font-bold">Group Classes</h1>
        <p className="text-blue-200/80 mt-2">Book a spot in our weekly schedule.</p>
        {loading ? <p className="mt-6">Loading...</p> : null}
        {error ? <p className="mt-6 text-red-400">{error}</p> : null}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {classes.map((c) => (
            <article key={c._id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="text-blue-200/80 mt-1">{c.description}</p>
              <p className="mt-2 text-sm text-blue-200/70">{c.day_of_week} • {c.start_time} • {c.duration_min} mins</p>
              <button className="mt-4 inline-flex items-center rounded-xl bg-indigo-500/90 hover:bg-indigo-500 text-white px-4 py-2">Book Class</button>
            </article>
          ))}
          {(!loading && classes.length === 0) && <p className="col-span-full text-blue-200/70">No classes yet.</p>}
        </div>
      </div>
    </section>
  );
}
