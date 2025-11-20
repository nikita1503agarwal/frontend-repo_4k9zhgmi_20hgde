import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    setStatus({ state: 'loading' })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus({ state: 'success' })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ state: 'error', message: e.message })
    }
  }

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Request a quote</h2>
            <p className="text-slate-600 mt-2">Tell us about your project and we’ll get back within one business day.</p>

            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" required placeholder="Full name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="phone" placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                <input name="company" placeholder="Company (optional)" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <select name="product_type" required className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-400">
                  <option value="">Product type</option>
                  <option>2D Laser-cut</option>
                  <option>3D Trophy</option>
                  <option>3D Mockup</option>
                  <option>Other</option>
                </select>
                <input name="quantity" type="number" min="1" placeholder="Quantity" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="budget_range" placeholder="Budget range (optional)" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                <input name="reference_url" placeholder="Reference URL (optional)" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              </div>
              <textarea name="message" required placeholder="Project details" rows="5" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"></textarea>

              <div className="flex items-center gap-4">
                <button type="submit" className="inline-flex px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60" disabled={status.state==='loading'}>
                  {status.state==='loading' ? 'Sending…' : 'Send request'}
                </button>
                {status.state==='success' && <p className="text-green-700">Thanks! We\'ll be in touch shortly.</p>}
                {status.state==='error' && <p className="text-red-700">{status.message}</p>}
              </div>
            </form>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Why clients choose us</h3>
            <ul className="mt-3 space-y-2 text-slate-600 text-sm list-disc pl-5">
              <li>Premium materials and finishes</li>
              <li>Fast turnarounds with reliable delivery</li>
              <li>Design‑first approach with proofs</li>
              <li>Bulk and trade pricing available</li>
            </ul>
            <div className="mt-6 text-sm text-slate-500">
              Prefer email? hello@customprint.studio
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
