import { PORTFOLIO_DATA } from '../data/content';

interface PortfolioProps {
  darkMode: boolean;
}

export default function Portfolio({ darkMode }: PortfolioProps) {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-black mb-4">NOS RÉALISATIONS</h2>
        <div className="w-20 h-1 bg-amber-400 mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PORTFOLIO_DATA.map((project) => (
          <div key={project.id} className={`rounded-2xl overflow-hidden border shadow-lg ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">{project.type}</span>
              <h3 className="font-bold text-lg mt-1">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}