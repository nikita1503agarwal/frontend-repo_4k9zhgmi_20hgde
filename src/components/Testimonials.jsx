export default function Testimonials() {
  const quotes = [
    {
      quote: 'They nailed the brief and delivered trophies that looked even better in person. Super responsive team.',
      author: 'Amelia, Event Organiser'
    },
    {
      quote: 'Our laser‑cut signage turned heads at the expo. Quality finish and quick turnaround.',
      author: 'Dev, Marketing Lead'
    },
    {
      quote: 'The 3D product mockups elevated our launch campaign. Will order again.',
      author: 'Priya, Brand Manager'
    }
  ]

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Clients say nice things</h2>
        <p className="text-slate-600 mt-2">Real feedback from recent projects.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <blockquote key={q.author} className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <p className="text-slate-800">“{q.quote}”</p>
              <footer className="mt-3 text-sm text-slate-500">— {q.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
