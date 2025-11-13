import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/blog`).then(r => r.json()).then(setPosts).finally(() => setLoading(false))
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-slate-900">Blog</h2>
      {loading ? (
        <p className="mt-4 text-slate-600">Loading…</p>
      ) : (
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <article key={p._id} className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              {p.excerpt && <p className="mt-2 text-slate-600 text-sm">{p.excerpt}</p>}
              <div className="mt-4 text-xs text-slate-500">{new Date(p.published_at).toLocaleDateString()}</div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
