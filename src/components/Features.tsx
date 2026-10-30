import { Shield, Award, Cpu, Clock } from 'lucide-react';

interface FeaturesProps {
  darkMode: boolean;
}

export default function Features({ darkMode }: FeaturesProps) {
  return (
    <section className={`py-12 border-y ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex items-start gap-4">
          <div className="bg-amber-400/10 p-3 rounded-xl text-amber-400"><Shield className="w-6 h-6" /></div>
          <div>
            <h3 className="font-bold text-lg mb-1">Sécurité</h3>
            <p className="text-sm text-slate-400">Des installations conformes aux normes.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-amber-400/10 p-3 rounded-xl text-amber-400"><Award className="w-6 h-6" /></div>
          <div>
            <h3 className="font-bold text-lg mb-1">Expertise</h3>
            <p className="text-sm text-slate-400">Une équipe qualifiée et expérimentée.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-amber-400/10 p-3 rounded-xl text-amber-400"><Cpu className="w-6 h-6" /></div>
          <div>
            <h3 className="font-bold text-lg mb-1">Fiabilité</h3>
            <p className="text-sm text-slate-400">Des solutions durables et performantes.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-amber-400/10 p-3 rounded-xl text-amber-400"><Clock className="w-6 h-6" /></div>
          <div>
            <h3 className="font-bold text-lg mb-1">Réactivité</h3>
            <p className="text-sm text-slate-400">Intervention rapide et suivi personnalisé.</p>
          </div>
        </div>
      </div>
    </section>
  );
}