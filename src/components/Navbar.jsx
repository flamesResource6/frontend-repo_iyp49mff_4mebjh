import { Menu, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-300 to-indigo-300 flex items-center justify-center shadow-sm">
            <Sparkles className="h-5 w-5 text-slate-700" />
          </div>
          <span className="font-semibold text-slate-800">PastelPay</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <Link to="/blog" className="hover:text-slate-900 transition">Blog</Link>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="#" className="text-slate-600 hover:text-slate-900">Sign in</Link>
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm shadow-sm hover:bg-slate-800">
            Start free
          </a>
        </div>
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/70 backdrop-blur border border-white/60 shadow-sm">
          <Menu className="h-5 w-5 text-slate-700" />
        </button>
      </div>
    </header>
  )
}
