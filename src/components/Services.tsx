import { ArrowRight, CheckCircle } from 'lucide-react';
import { SERVICES_DATA, type ServiceDetail } from '../data/content';

interface ServicesProps {
  darkMode: boolean;
  selectedService: ServiceDetail | null;
  setSelectedService: (service: ServiceDetail | null) => void;
  setActiveTab: (tab: string) => void;
}

export default function Services({ darkMode, selectedService, setSelectedService, setActiveTab }: ServicesProps) {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-black mb-4">NOS DOMAINES D'EXPERTISE & DÉTAILS</h2>
        <p className="text-slate-400">Cliquez sur "En savoir plus" pour afficher les caractéristiques complètes de chaque service.</p>
        <div className="w-20 h-1 bg-amber-400 mx-auto mt-4"></div>
      </div>

      {selectedService && (
        <div className={`p-8 rounded-3xl border mb-16 shadow-2xl ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          <button 
            onClick={() => setSelectedService(null)}
            className="mb-6 text-sm bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition"
          >
            ← Retour à la liste des services
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <img src={selectedService.image} alt={selectedService.title} className="rounded-2xl w-full h-80 object-cover shadow-xl" />
            <div>
              <h3 className="text-3xl font-black mb-4 text-amber-400">{selectedService.title}</h3>
              <p className="text-lg leading-relaxed mb-6">{selectedService.fullDesc}</p>
              <h4 className="font-bold text-lg mb-3">Prestations incluses :</h4>
              <ul className="space-y-2 mb-8">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setActiveTab('reservations')}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-xl transition shadow-lg"
              >
                Réserver ce service / Devis
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES_DATA.map((service) => (
          <div key={service.id} className={`rounded-2xl overflow-hidden border flex flex-col justify-between shadow-lg ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div>
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{service.shortDesc}</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <button 
                onClick={() => setSelectedService(service)}
                className="text-amber-400 font-bold text-sm inline-flex items-center gap-2 hover:underline"
              >
                En savoir plus <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}