import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} CustomPrint Studio. All rights reserved.</p>
          <div className="text-sm text-slate-500">
            <a href="/test" className="hover:underline">System status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
