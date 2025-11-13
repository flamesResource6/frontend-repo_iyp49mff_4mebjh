import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-indigo-50 to-white text-slate-800">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Blog />
      <CTA />
      <Contact />
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">© {new Date().getFullYear()} PastelPay. All rights reserved.</footer>
    </div>
  )
}

export default App
