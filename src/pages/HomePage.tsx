import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronRight, Users, Package, Globe } from 'lucide-react';

export default function HomePage() {
  const testimonials = [
    { name: 'Sophie van den Berg', role: 'Wijnliefhebber', text: 'Eindelijk een platform dat echt kwalitatieve wijnen aanbiedt. De selectie is ongeëvenaard.', stars: 5 },
    { name: 'Thomas Müller', role: 'Restauranthouder', text: 'Via Cellar2Table hebben we onze wijnkaart compleet vernieuwd. Directe lijnen met producenten is goud waard.', stars: 5 },
    { name: 'Marie Dubois', role: 'Sommelier', text: 'De verhalen achter elke producent maken dit platform uniek. Mijn klanten zijn dol op de authenticiteit.', stars: 5 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900/60 via-noir-900/40 to-noir-900" />
        {/* Decorative blurs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wine-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-wine-950/80 border border-wine-800 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <span className="text-xs font-sans text-gold-400 tracking-wide">50+ producenten · 6 landen · 200+ wijnen</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-cream-50 leading-tight mb-6">
              Van Kelder<br />
              <em className="text-gold-400 not-italic">tot Tafel</em>
            </h1>
            <p className="text-lg text-cream-200/70 font-sans leading-relaxed mb-10 max-w-xl">
              Ontdek authentieke wijnen rechtstreeks van de meest gerenommeerde producenten wereldwijd. Verhalen, passie en kwaliteit in elk glas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/producers" className="btn-gold text-base px-8 py-4 gap-2">
                Ontdek wijnhuizen <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/for-producers" className="btn-outline text-base px-8 py-4">
                Ik ben producent
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
            <h2 className="section-title mb-4">Rechtstreeks van de producent</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🍇', title: 'Ontdek', desc: 'Blader door ons zorgvuldig geselecteerde aanbod van wijnhuizen uit de beste regio\'s.' },
              { icon: '📖', title: 'Leer kennen', desc: 'Lees de verhalen achter elke producent — hun filosofie, terroir en de passie die elk wijn drijft.' },
              { icon: '🚚', title: 'Ontvang', desc: 'Bestel direct bij de bron en ontvang uw selectie zorgvuldig verpakt aan huis.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card-dark p-8 text-center hover:border-wine-700 transition-colors">
                <div className="text-4xl mb-5">{icon}</div>
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
              { icon: Users, value: '50+', label: 'Producenten' },
              { icon: Package, value: '200+', label: 'Wijnen' },
              { icon: Globe, value: '6', label: 'Landen' },
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

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-sans text-sm tracking-widest uppercase mb-3">Ervaringen</p>
            <h2 className="section-title mb-4">Wat onze klanten zeggen</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="card-dark p-8">
                <div className="flex gap-1 mb-5">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />)}
                </div>
                <p className="text-cream-200/70 font-body text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-sans font-semibold text-cream-100 text-sm">{t.name}</p>
                  <p className="font-sans text-xs text-gold-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-noir-800/60">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4">Klaar om te ontdekken?</h2>
          <p className="text-cream-200/60 font-sans mb-10 leading-relaxed">Sluit u aan bij duizenden wijnliefhebbers en ontdek het verhaal achter elk glas.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/producers" className="btn-gold text-base px-8 py-4 gap-2">
              Bekijk alle wijnhuizen <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/register" className="btn-outline text-base px-8 py-4">Maak een account</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
