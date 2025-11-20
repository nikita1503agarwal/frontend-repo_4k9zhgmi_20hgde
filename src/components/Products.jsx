import { useEffect, useState } from 'react'

export default function Products() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/products?featured=true`)
        if (!res.ok) throw new Error('Failed to load products')
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Products</h2>
            <p className="text-slate-600 mt-2">A quick look at what we can craft for you.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-100">Request a Quote</a>
        </div>

        {loading && <p className="text-slate-600">Loading products…</p>}
        {error && (
          <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg">{error}</div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.id} className="group rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="w-full h-full bg-slate-100" />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                {item.description && <p className="text-sm text-slate-600 mt-1">{item.description}</p>}
                <div className="mt-3 text-xs text-slate-500">{item.category}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
