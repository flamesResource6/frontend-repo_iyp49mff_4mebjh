export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid md:grid-cols-3 gap-6">
        {[{
          name: 'Starter', price: '$0', sub: 'For trying things out', perks: ['1,000 free transactions', 'Basic analytics', 'Community support']
        },{
          name: 'Growth', price: '$49', sub: 'For scaling teams', perks: ['100k transactions', 'Priority support', 'Webhooks + API access']
        },{
          name: 'Scale', price: '$199', sub: 'For high volume', perks: ['Unlimited transactions', 'Dedicated SRE', 'Custom SLAs']
        }].map((p, i) => (
          <div key={p.name} className={`rounded-2xl p-6 border shadow-sm ${i===1 ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-100'}`}>
            <div className="flex items-baseline gap-2">
              <h3 className="text-xl font-semibold">{p.name}</h3>
            </div>
            <p className={`mt-1 ${i===1 ? 'text-white/80' : 'text-slate-600'}`}>{p.sub}</p>
            <div className="mt-6 text-4xl font-semibold">{p.price}<span className="text-base font-normal">/mo</span></div>
            <ul className={`mt-6 space-y-2 ${i===1 ? 'text-white/90' : 'text-slate-700'}`}>
              {p.perks.map(perk => (<li key={perk} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-teal-300 to-indigo-300 inline-block" />{perk}</li>))}
            </ul>
            <button className={`mt-8 w-full rounded-xl px-4 py-3 text-sm font-medium ${i===1 ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'} hover:opacity-95`}>Choose {p.name}</button>
          </div>
        ))}
      </div>
    </section>
  )
}
