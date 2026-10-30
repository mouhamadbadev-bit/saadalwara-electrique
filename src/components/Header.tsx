import { Zap, SunMedium, Moon } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Header({ activeTab, setActiveTab, darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-md ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('accueil')}>
          <div className="bg-amber-400 p-2 rounded-lg text-slate-950 font-bold">
            <Zap className="w-6 h-6 fill-current" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-wider">SAADALWARRA<span className="text-amber-400">+</span>PRO</span>
            <p className="text-[10px] tracking-widest text-slate-400">ÉLECTRICITÉ • INDUSTRIEL • BÂTIMENT</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
          <button onClick={() => setActiveTab('accueil')} className={`transition-colors hover:text-amber-400 ${activeTab === 'accueil' ? 'text-amber-400 font-bold' : ''}`}>Accueil</button>
          <button onClick={() => setActiveTab('services')} className={`transition-colors hover:text-amber-400 ${activeTab === 'services' ? 'text-amber-400 font-bold' : ''}`}>Services</button>
          <button onClick={() => setActiveTab('reservations')} className={`transition-colors hover:text-amber-400 ${activeTab === 'reservations' ? 'text-amber-400 font-bold' : ''}`}>Réservation & Devis</button>
          <button onClick={() => setActiveTab('blog')} className={`transition-colors hover:text-amber-400 ${activeTab === 'blog' ? 'text-amber-400 font-bold' : ''}`}>Blog</button>
          <button onClick={() => setActiveTab('apropos')} className={`transition-colors hover:text-amber-400 ${activeTab === 'apropos' ? 'text-amber-400 font-bold' : ''}`}>À propos</button>
          <button onClick={() => setActiveTab('contact')} className={`transition-colors hover:text-amber-400 ${activeTab === 'contact' ? 'text-amber-400 font-bold' : ''}`}>Contact</button>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full border transition-colors ${darkMode ? 'border-slate-700 bg-slate-800 text-amber-400' : 'border-slate-300 bg-white text-slate-700'}`}
            title="Changer le fond (Dark/Light mode)"
          >
            {darkMode ? <SunMedium className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            onClick={() => setActiveTab('reservations')}
            className="hidden sm:inline-flex bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-lg transition-all shadow-lg"
          >
            Demander un devis
          </button>
        </div>
      </div>
    </header>
  );
}