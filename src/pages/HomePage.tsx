import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Users, Globe, Tag } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900/60 via-noir-900/40 to-noir-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wine-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-wine-950/80 border border-wine-800 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <span className="text-xs font-sans text-gold-400 tracking-wide">Frankrijk · Italië · Duitsland · Spanje</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-cream-50 leading-tight mb-6">
              Restpartijen<br />
              <em className="text-gold-400 not-italic">rechtstreeks van het wijnhuis</em>
            </h1>
            <p className="text-lg text-cream-200/70 font-sans leading-relaxed mb-10 max-w-xl">
              Ontdek voordelige wijn in grotere hoeveelheden — rechtstreeks van Franse, Italiaanse, Duitse en Spaanse wijnhuizen. Ideaal voor particulieren en horeca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/partijen" className="btn-gold text-base px-8 py-4 gap-2">
                Bekijk aanbiedingen <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/register" className="btn-outline text-base px-8 py-4">
                Meld uw wijnhuis aan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-noir-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-sans text-sm tracking-widest uppercase mb-3">Hoe het werkt</p>
            <h2 className="section-title mb-4">Van wijnhuis tot afnemer</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Wijnhuis registreert zich', desc: 'Wijnhuizen maken gratis een profiel aan op het platform' },
              { num: '02', title: 'Partij aanmelden', desc: 'Met een actief abonnement plaatsen wijnhuizen hun rest- en schadepartijen' },
              { num: '03', title: 'Direct zaken doen', desc: 'Afnemers tonen interesse en handelen rechtstreeks af met het wijnhuis' },
            ].map(({ num, title, desc }) => (
              <div key={num} className="card-dark p-8 text-center hover:border-wine-700 transition-colors">
                <div className="w-14 h-14 rounded-full border-2 border-gold-500 flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-gold-400 font-bold text-lg">{num}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-cream-50 mb-3">{title}</h3>
                <p className="text-cream-200/60 font-sans text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-wine-950 to-noir-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { icon: Users, value: '500+', label: 'wijnhuizen in database' },
              { icon: Globe, value: '4', label: 'Europese landen' },
              { icon: Tag, value: 'Gratis', label: 'aanmelden als afnemer' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                <p className="font-display text-4xl font-bold text-cream-50 mb-1">{value}</p>
                <p className="text-cream-200/60 font-sans text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-sans text-sm tracking-widest uppercase mb-3">Voordelen</p>
            <h2 className="section-title mb-4">Waarom Cellar2Table?</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Voordelige partijen', desc: 'Rest- en schadepartijen worden aangeboden ver onder de normale marktprijs' },
              { title: 'Geen tussenpersoon', desc: 'Direct contact tussen wijnhuis en koper, zonder importeur of groothandel' },
              { title: 'Grote en kleine afname', desc: 'Bestel per doos of per pallet, afhankelijk van uw behoefte' },
            ].map(({ title, desc }) => (
              <div key={title} className="card-dark p-8 hover:border-gold-600 transition-colors">
                <div className="w-2 h-8 bg-gold-500 rounded-full mb-5" />
                <h3 className="font-display text-xl font-semibold text-cream-50 mb-3">{title}</h3>
                <p className="text-cream-200/60 font-sans text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="py-24 bg-noir-800/60">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* For buyers */}
            <div className="card-dark p-10 text-center bg-gradient-to-br from-wine-950/60 to-noir-800">
              <p className="text-gold-500 font-sans text-sm tracking-widest uppercase mb-3">Afnemers</p>
              <h2 className="font-display text-2xl font-bold text-cream-50 mb-4">Op zoek naar voordelige wijn?</h2>
              <p className="text-cream-200/60 font-sans text-sm mb-8 leading-relaxed">Gratis aanmelden en direct toegang tot alle actieve aanbiedingen van Europese wijnhuizen.</p>
              <Link to="/partijen" className="btn-gold text-base px-8 py-3 gap-2">
                Bekijk aanbiedingen <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            {/* For wineries */}
            <div className="card-dark p-10 text-center">
              <p className="text-gold-500 font-sans text-sm tracking-widest uppercase mb-3">Wijnhuizen</p>
              <h2 className="font-display text-2xl font-bold text-cream-50 mb-4">Heeft u overschot of een schadepartij?</h2>
              <p className="text-cream-200/60 font-sans text-sm mb-8 leading-relaxed">Maak gratis een profiel aan en bereik Nederlandse particulieren en horecaondernemers.</p>
              <Link to="/register" className="btn-outline text-base px-8 py-3 gap-2">
                Meld uw wijnhuis aan <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
