import { useState } from 'react'

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) setStatus('sent')
      else setStatus(data.detail || 'error')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Contact us</h2>
          <p className="mt-2 text-slate-600">We usually respond within a business day.</p>
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-teal-100 to-indigo-100 p-6">
            <p className="text-slate-700">Prefer email? hello@pastelpay.dev</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
          <label className="block text-sm text-slate-700">Name</label>
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" required />
          <label className="mt-4 block text-sm text-slate-700">Email</label>
          <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" required />
          <label className="mt-4 block text-sm text-slate-700">Message</label>
          <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} rows={5} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" required />
          <button className="mt-6 w-full rounded-xl bg-slate-900 text-white px-4 py-3 text-sm hover:bg-slate-800">Send</button>
          {status === 'sent' && <p className="mt-3 text-sm text-teal-700">Thanks! We received your message.</p>}
          {status && status !== 'sent' && status !== 'loading' && <p className="mt-3 text-sm text-red-600">{String(status)}</p>}
        </form>
      </div>
    </section>
  )
}
