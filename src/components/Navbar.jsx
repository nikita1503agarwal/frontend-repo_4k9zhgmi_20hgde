import { useState } from 'react'
import { Menu, X, Cube, Layers } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Products', href: '#products' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#work' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white items-center justify-center shadow">
            <Layers size={18} />
          </span>
          <span>CustomPrint Studio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
            <Cube size={16} /> Get a Quote
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 grid gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-slate-700">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg">
              <Cube size={16} /> Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
