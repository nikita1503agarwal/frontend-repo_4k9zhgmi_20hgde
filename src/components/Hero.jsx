import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900"
            >
              Customised 2D & 3D Products that make your brand pop
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              className="mt-5 text-lg text-slate-600"
            >
              From precision laser‑cut pieces to premium 3D trophies and stunning mockups – we design and craft standout items that spark conversations.
            </motion.p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#products" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Explore Products</a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-slate-300 text-slate-900 hover:bg-slate-100">Get a Quote</a>
            </div>
            <div className="mt-6 text-sm text-slate-500">Lead time 5–10 days • Custom finishes • Bulk orders welcome</div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop" alt="Hero showcase" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="bg-white rounded-xl shadow px-4 py-3 border border-slate-200">
                <p className="text-sm font-semibold text-slate-900">3D Trophy • Premium Gold</p>
                <p className="text-xs text-slate-500">Laser‑polished edges, matte base</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
