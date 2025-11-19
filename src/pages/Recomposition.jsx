import { useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function Recomposition(){
  const [form, setForm] = useState({ gender: "male", age: 28, height_cm: 175, weight_kg: 75, activity_level: "moderate", goal: "recomp" });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError(""); setResult(null);
    try {
      const res = await fetch(`${API_BASE}/api/recomposition/recommend`, { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(form)});
      const data = await res.json();
      if (res.ok) setResult(data); else setError(data.detail || "Failed to get recommendation");
    } catch (e) {
      setError("Network error");
    } finally { setLoading(false); }
  };

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <section className="py-20" aria-labelledby="recomp-title">
      <div className="max-w-3xl mx-auto px-4">
        <h1 id="recomp-title" className="text-3xl font-bold">Body Recomposition Advisor</h1>
        <p className="text-blue-200/80 mt-2">Input your measurements to get a weekly exercise plan.</p>

        <form onSubmit={submit} className="mt-8 grid grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
          <label className="col-span-2 sm:col-span-1 text-sm">Gender
            <select value={form.gender} onChange={e=>update("gender", e.target.value)} className="mt-1 w-full bg-slate-900/60 border border-white/10 rounded-lg p-2">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label className="col-span-2 sm:col-span-1 text-sm">Age
            <input type="number" value={form.age} onChange={e=>update("age", Number(e.target.value))} className="mt-1 w-full bg-slate-900/60 border border-white/10 rounded-lg p-2" />
          </label>
          <label className="col-span-2 sm:col-span-1 text-sm">Height (cm)
            <input type="number" value={form.height_cm} onChange={e=>update("height_cm", Number(e.target.value))} className="mt-1 w-full bg-slate-900/60 border border-white/10 rounded-lg p-2" />
          </label>
          <label className="col-span-2 sm:col-span-1 text-sm">Weight (kg)
            <input type="number" value={form.weight_kg} onChange={e=>update("weight_kg", Number(e.target.value))} className="mt-1 w-full bg-slate-900/60 border border-white/10 rounded-lg p-2" />
          </label>
          <label className="col-span-2 sm:col-span-1 text-sm">Activity level
            <select value={form.activity_level} onChange={e=>update("activity_level", e.target.value)} className="mt-1 w-full bg-slate-900/60 border border-white/10 rounded-lg p-2">
              <option value="sedentary">Sedentary</option>
              <option value="light">Light</option>
              <option value="moderate">Moderate</option>
              <option value="active">Active</option>
              <option value="athlete">Athlete</option>
            </select>
          </label>
          <label className="col-span-2 sm:col-span-1 text-sm">Goal
            <select value={form.goal} onChange={e=>update("goal", e.target.value)} className="mt-1 w-full bg-slate-900/60 border border-white/10 rounded-lg p-2">
              <option value="fat_loss">Fat Loss</option>
              <option value="muscle_gain">Muscle Gain</option>
              <option value="recomp">Recomp</option>
            </select>
          </label>
          <div className="col-span-2 flex justify-end">
            <button disabled={loading} className="inline-flex items-center rounded-xl bg-indigo-500/90 hover:bg-indigo-500 text-white px-4 py-2">
              {loading ? "Calculating..." : "Get Recommendation"}
            </button>
          </div>
        </form>

        {error && <p className="mt-4 text-red-400">{error}</p>}

        {result && (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Your Weekly Plan</h2>
            <p className="text-blue-200/80 mt-1">{result.summary}</p>
            <ul className="mt-4 space-y-2">
              {result.weekly_plan?.map((it, idx) => (
                <li key={idx} className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <span className="font-semibold">{it.name}</span> — {it.sets} sets • {it.reps} • {it.frequency_per_week}x/week
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
