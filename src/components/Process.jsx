export default function Process() {
  const steps = [
    { title: 'Consult', desc: 'Tell us about your idea, goals and budget.' },
    { title: 'Design', desc: 'We produce concepts, materials and finishes.' },
    { title: 'Prototype', desc: 'Optional prototypes to validate size and look.' },
    { title: 'Produce', desc: 'We craft and finish to spec, then ship worldwide.' },
  ]

  return (
    <section id="process" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How it works</h2>
        <p className="text-slate-600 mt-2">A clear, collaborative process from idea to delivery.</p>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl bg-white border border-slate-200 p-6">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-semibold">{i+1}</div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="text-slate-600 mt-1 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
