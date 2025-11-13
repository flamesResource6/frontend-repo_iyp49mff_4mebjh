import { ShieldCheck, Zap, CreditCard, Globe } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Bank‑grade security',
    desc: 'PCI-compliant infrastructure with advanced fraud protection.'
  },
  {
    icon: Zap,
    title: 'Fast onboarding',
    desc: 'Start processing in minutes with instant verifications.'
  },
  {
    icon: CreditCard,
    title: 'Cards & payouts',
    desc: 'Create virtual cards and automate global payouts.'
  },
  {
    icon: Globe,
    title: 'Global by default',
    desc: '150+ currencies with transparent FX and local rails.'
  }
]

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid md:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-teal-200 to-indigo-200 flex items-center justify-center">
              <f.icon className="h-5 w-5 text-slate-700" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
