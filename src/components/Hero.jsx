import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden rounded-b-[2rem]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/80 pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Minimal banking for modern commerce
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-700">
            Accept payments, manage cards, and scale globally — wrapped in a soft pastel interface your team will love.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm md:text-base shadow-sm hover:bg-slate-800">Start free</a>
            <a href="#features" className="rounded-xl bg-white/80 backdrop-blur border border-white/60 text-slate-900 px-5 py-3 text-sm md:text-base hover:bg-white">See features</a>
          </div>
        </div>
      </div>
    </section>
  )
}
