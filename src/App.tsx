import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { BLOG_POSTS, type ServiceDetail } from './data/content';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('accueil');
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmitDevis = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xppqnkor", { // Remplace par ton ID Formspree
        method: "POST",
        body: data,
        headers: { 'Accept': 'json' }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* HEADER */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* CONTENU DYNAMIQUE */}
      <main>
        {activeTab === 'accueil' && (
          <div>
            <Hero setActiveTab={setActiveTab} />
            <Features darkMode={darkMode} />
            <Services darkMode={darkMode} selectedService={selectedService} setSelectedService={setSelectedService} setActiveTab={setActiveTab} />
            <Portfolio darkMode={darkMode} />
            <Stats />
          </div>
        )}

        {activeTab === 'services' && (
          <Services darkMode={darkMode} selectedService={selectedService} setSelectedService={setSelectedService} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'reservations' && (
          <div className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-4">RÉSERVATION & FORMULAIRE DE DEVIS</h2>
              <p className="text-slate-400">Remplissez ce formulaire pour demander une estimation ou planifier une intervention.</p>
            </div>

            <div className={`p-8 rounded-3xl border shadow-xl ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Demande envoyée avec succès !</h3>
                  <p className="text-slate-400 mb-6">Notre équipe technique vous contactera rapidement.</p>
                  <button onClick={() => setFormStatus('idle')} className="bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl">
                    Nouvelle demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitDevis} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Nom complet</label>
                    <input type="text" name="name" required placeholder="Mamadou Diallo" className={`w-full p-4 rounded-xl border focus:outline-none focus:border-amber-400 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300'}`} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">Adresse Email</label>
                      <input type="email" name="email" required placeholder="mamadou@example.com" className={`w-full p-4 rounded-xl border focus:outline-none focus:border-amber-400 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300'}`} />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Téléphone</label>
                      <input type="tel" name="phone" required placeholder="+221 771234567" className={`w-full p-4 rounded-xl border focus:outline-none focus:border-amber-400 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300'}`} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Service concerné</label>
                    <select name="service" className={`w-full p-4 rounded-xl border focus:outline-none focus:border-amber-400 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300'}`}>
                      <option value="Electricite Batiment">Électricité de Bâtiment</option>
                      <option value="Cablage Industriel">Câblage Industriel</option>
                      <option value="Panneaux Solaires">Panneaux Solaires</option>
                      <option value="Videosurveillance">Vidéosurveillance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Détails de votre projet</label>
                    <textarea name="message" rows={5} required placeholder="Décrivez votre besoin..." className={`w-full p-4 rounded-xl border focus:outline-none focus:border-amber-400 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300'}`}></textarea>
                  </div>
                  {formStatus === 'error' && <p className="text-red-500 text-sm">Erreur lors de l'envoi. Veuillez réessayer.</p>}
                  <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-4 rounded-xl transition-all shadow-lg text-lg">
                    {formStatus === 'submitting' ? 'Envoi en cours...' : 'Envoyer la demande de devis'}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-black mb-4">NOTRE BLOG</h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BLOG_POSTS.map(post => (
                <div key={post.id} className={`rounded-2xl overflow-hidden border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-amber-400 font-bold mb-3">
                      <span>{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-sm text-slate-400 mb-6">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'apropos' && (
          <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black mb-6">À PROPOS D'ELEC+PRO</h2>
            <p className="text-lg leading-relaxed text-slate-300">
              ELEC+PRO est une entreprise sénégalaise spécialisée dans l'électricité industrielle, le bâtiment, le photovoltaïque et la sécurité électronique.
            </p>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black mb-4">CONTACTEZ-NOUS</h2>
              <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <Phone className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Téléphone</h3>
                <p className="text-sm text-slate-400">+221 770273575</p>
              </div>
              <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <Mail className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-sm text-slate-400"> pissifall@gmail.com </p>
              </div>
              <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <MapPin className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Adresse</h3>
                <p className="text-sm text-slate-400"> Diourbel, Sénégal </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <Footer darkMode={darkMode} setActiveTab={setActiveTab} />
    </div>
  );
}