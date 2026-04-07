import { Link } from 'react-router-dom';
import { Globe, BarChart3, Users, ChevronRight } from 'lucide-react';

export default function ForProducersPage() {
  const benefits = [
    { icon: Globe, title: 'Internationaal Bereik', desc: 'Bereik wijnliefhebbers in heel Europa en daarbuiten zonder tussenpartijen.' },
    { icon: BarChart3, title: 'Inzicht & Analyse', desc: 'Volg uw verkopen, klantgedrag en populairste wijnen in real-time.' },
    { icon: Users, title: 'Directe Klantrelatie', desc: 'Bouw duurzame relaties op met uw klanten — geen anonieme groothandel.' },
  ];

  const steps = [
    { num: '01', title: 'Registreer als Producent', desc: 'Maak een gratis account aan als producent.' },
    { num: '02', title: 'Stel uw profiel in', desc: 'Voeg uw wijnhuis, verhaal en wijnen toe.' },
    { num: '03', title: 'Bereik uw klanten', desc: 'Ontvang bestellingen en bouw uw klantenbestand op.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1400&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900 to-noir-900/95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-500 font-sans text-sm tracking-widest uppercase mb-4">Voor Producenten</p>
          <h1 className="section-title text-5xl mb-6 max-w-3xl mx-auto">Verkoop Uw Wijnen Wereldwijd</h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream-200/60 font-sans text-lg max-w-2xl mx-auto mb-10">
            Cellar2Table verbindt u rechtstreeks met wijnliefhebbers. Geen tussenpartijen, hogere marges, echte relaties.
          </p>
          <Link to="/register?role=supplier" className="btn-gold text-base px-10 py-4 gap-2">
            Start als Producent <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-noir-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Waarom Cellar2Table?</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-dark p-8 hover:border-gold-600 transition-colors">
                <div className="w-12 h-12 bg-wine-900 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-cream-50 mb-3">{title}</h3>
                <p className="text-cream-200/60 font-sans text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Hoe Aanmelden?</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-gold-500 flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-gold-400 font-bold text-lg">{num}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-cream-50 mb-3">{title}</h3>
                <p className="text-cream-200/60 font-sans text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-wine-950 to-noir-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4">Klaar om te Beginnen?</h2>
          <p className="text-cream-200/60 font-sans mb-10">Sluit u aan bij de meest gerenommeerde wijnhuizen op ons platform.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn-gold text-base px-8 py-4">Account aanmaken</Link>
            <Link to="/contact" className="btn-outline text-base px-8 py-4">Meer informatie</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
