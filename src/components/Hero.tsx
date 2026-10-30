import { ArrowRight } from 'lucide-react';

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1600&auto=format&fit=crop')` }}></div>
      <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-amber-400/10 text-amber-400 border border-amber-400/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
            Électricité • Industriel • Bâtiment
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-6 mb-6 leading-tight">
            L'ÉNERGIE QUI CONSTRUIT <span className="text-amber-400">VOS PROJETS</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Solutions électriques fiables et innovantes pour les professionnels et les particuliers à Dakar et au Sénégal.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setActiveTab('services')}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg flex items-center gap-2"
            >
              Nos services <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setActiveTab('reservations')}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl border border-slate-700 transition-all"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}