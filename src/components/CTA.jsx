export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl bg-gradient-to-br from-teal-100 to-indigo-100 p-10 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">Build financial flows your customers will love</h3>
        <p className="mt-2 text-slate-700">Simple pricing, sane APIs, and a delightful, pastel interface.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#pricing" className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm md:text-base shadow-sm hover:bg-slate-800">Start free</a>
          <a href="#contact" className="rounded-xl bg-white border border-white/60 text-slate-900 px-5 py-3 text-sm md:text-base hover:bg-white">Talk to sales</a>
        </div>
      </div>
    </section>
  )
}
