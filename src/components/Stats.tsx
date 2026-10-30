export default function Stats() {
  return (
    <section className="bg-amber-400 text-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-4xl lg:text-5xl font-black mb-2">150+</p>
          <p className="font-bold text-sm uppercase tracking-wider">Projets réalisés</p>
        </div>
        <div>
          <p className="text-4xl lg:text-5xl font-black mb-2">10+</p>
          <p className="font-bold text-sm uppercase tracking-wider">Années d'expérience</p>
        </div>
        <div>
          <p className="text-4xl lg:text-5xl font-black mb-2">25+</p>
          <p className="font-bold text-sm uppercase tracking-wider">Experts qualifiés</p>
        </div>
        <div>
          <p className="text-4xl lg:text-5xl font-black mb-2">98%</p>
          <p className="font-bold text-sm uppercase tracking-wider">Clients satisfaits</p>
        </div>
      </div>
    </section>
  );
}
