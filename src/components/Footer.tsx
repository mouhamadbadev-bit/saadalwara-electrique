import { Zap } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  setActiveTab: (tab: string) => void;
}

export default function Footer({ darkMode, setActiveTab }: FooterProps) {
  return (
    <footer className={`border-t py-12 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-amber-400 p-1.5 rounded-lg text-slate-950 font-bold">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <span className="text-lg font-extrabold tracking-wider">SAADAL<span className="text-amber-400">+</span>WRRA</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Nous mettons notre expertise au service de vos projets électriques, industriels, de bâtiment et d'énergie durable.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Liens rapides</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><button onClick={() => setActiveTab('accueil')} className="hover:text-amber-400">Accueil</button></li>
            <li><button onClick={() => setActiveTab('services')} className="hover:text-amber-400">Services</button></li>
            <li><button onClick={() => setActiveTab('reservations')} className="hover:text-amber-400">Réservations</button></li>
            <li><button onClick={() => setActiveTab('blog')} className="hover:text-amber-400">Blog</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Nos Services</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Électricité de Bâtiment</li>
            <li>Câblage Industriel</li>
            <li>Panneaux Solaires</li>
            <li>Vidéosurveillance</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <p className="text-sm text-slate-400 mb-2">+221 77 027 35 75</p>
          <p className="text-sm text-slate-400 mb-2">pissifall@gmail.com</p>
          <p className="text-sm text-slate-400">Diourbel, Sénégal</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
        © 2026 SAADALWARRA-PROS - Tous droits réservés.
      </div>
    </footer>
  );
}