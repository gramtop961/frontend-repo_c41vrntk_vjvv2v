import { useState } from "react";

export default function Membership(){
  const [plan, setPlan] = useState("pro");

  const plans = [
    { id: "basic", name: "Basic", price: 199000, perks: ["Gym Access", "Locker" ] },
    { id: "pro", name: "Pro", price: 299000, perks: ["All Basic", "Group Classes 2x/week", "Sauna"] },
    { id: "elite", name: "Elite", price: 499000, perks: ["All Pro", "Unlimited Classes", "Personalized Plan"] },
  ];

  const selected = plans.find(p => p.id === plan);

  return (
    <section className="py-20" aria-labelledby="membership-title">
      <div className="max-w-7xl mx-auto px-4">
        <h1 id="membership-title" className="text-3xl font-bold">Membership</h1>
        <p className="text-blue-200/80 mt-2">Choose a plan and get started today.</p>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {plans.map(p => (
            <button key={p.id} onClick={() => setPlan(p.id)} className={`rounded-2xl border p-5 text-left ${plan===p.id?"border-indigo-400 bg-white/10":"border-white/10 bg-white/5 hover:bg-white/10"}`}>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-blue-200/80 mt-1">Rp {p.price.toLocaleString("id-ID")}/mo</p>
              <ul className="mt-3 text-sm text-blue-200/80 list-disc list-inside">
                {p.perks.map(perk => <li key={perk}>{perk}</li>)}
              </ul>
            </button>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Selected: {selected.name}</h2>
          <p className="text-blue-200/80">Rp {selected.price.toLocaleString("id-ID")}/month</p>
          <a href={`https://wa.me/6281234567890?text=Saya%20ingin%20bergabung%20paket%20${selected.name}`}
             target="_blank"
             rel="noreferrer"
             className="mt-4 inline-flex items-center rounded-xl bg-emerald-500/90 hover:bg-emerald-500 text-white px-4 py-2">
            Proceed via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
