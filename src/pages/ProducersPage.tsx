import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Award, Grape } from 'lucide-react';
import { producers } from '../data/producers';

export default function ProducersPage() {
  const [query, setQuery] = useState('');
  const [activeCountry, setActiveCountry] = useState('Alle');

  const countries = useMemo(() => ['Alle', ...Array.from(new Set(producers.map(p => p.country)))], []);

  const filtered = useMemo(() => producers.filter(p => {
    const matchQ = !query || p.name.toLowerCase().includes(query.toLowerCase()) || p.region.toLowerCase().includes(query.toLowerCase());
    const matchC = activeCountry === 'Alle' || p.country === activeCountry;
    return matchQ && matchC;
  }), [query, activeCountry]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-noir-800/60 py-20 border-b border-noir-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-500 font-sans text-sm tracking-widest uppercase mb-3">Onze selectie</p>
          <h1 className="section-title mb-4">Wijnhuizen</h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-cream-200/60 font-sans max-w-xl mx-auto">Ontdek de meest gerenommeerde wijnhuizen ter wereld, elk met een uniek verhaal en uitzonderlijke kwaliteit.</p>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-noir-900/95 backdrop-blur-sm border-b border-noir-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-noir-500" />
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Zoek op naam of regio..." className="input-dark pl-9 py-2.5" />
            </div>
            <div className="flex flex-wrap gap-2">
              {countries.map(c => (
                <button key={c} onClick={() => setActiveCountry(c)}
                  className={`px-4 py-2 rounded-full text-sm font-sans font-medium transition-all ${activeCountry === c ? 'bg-wine-700 text-cream-50' : 'bg-noir-800 text-cream-300 hover:bg-noir-700 border border-noir-600'}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <Grape className="w-16 h-16 text-noir-600 mx-auto mb-4" />
              <p className="text-cream-200/40 font-sans">Geen wijnhuizen gevonden.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map(p => (
                <div key={p.id} className="card-dark group hover:border-wine-700 transition-all">
                  <div className="relative h-56 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" />
                      <span className="text-xs font-sans text-cream-200">{p.country} · {p.region}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-xl font-semibold text-cream-50 mb-2 group-hover:text-gold-300 transition-colors">{p.name}</h2>
                    <p className="text-cream-200/60 font-sans text-sm leading-relaxed mb-4 line-clamp-2">{p.description}</p>
                    {p.awards.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {p.awards.slice(0, 2).map(a => (
                          <span key={a} className="inline-flex items-center gap-1 bg-wine-950/60 border border-wine-800 rounded-full px-2.5 py-1 text-xs text-wine-300">
                            <Award className="w-3 h-3" /> {a}
                          </span>
                        ))}
                      </div>
                    )}
                    <Link to={`/producer/${p.id}`} className="btn-wine w-full text-sm py-2.5 justify-center">Bekijk Wijnhuis</Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
