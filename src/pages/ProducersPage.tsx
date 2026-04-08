import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin, Award } from 'lucide-react'
import { producers } from '../data/producers'
import { useTranslation } from 'react-i18next'

export default function ProducersPage() {
  const { t } = useTranslation()
  const [query, setQuery] = useState('')
  const [activeCountry, setActiveCountry] = useState('Alle')

  const countries = useMemo(() => ['Alle', ...Array.from(new Set(producers.map(p => p.country)))], [])

  const filtered = useMemo(() => producers.filter(p => {
    const matchQ = !query || p.name.toLowerCase().includes(query.toLowerCase()) || p.region.toLowerCase().includes(query.toLowerCase())
    const matchC = activeCountry === 'Alle' || p.country === activeCountry
    return matchQ && matchC
  }), [query, activeCountry])

  return (
    <div className="min-h-screen pt-16" style={{ background: '#0D0F1E', color: '#F0EBE3' }}>
      {/* Header */}
      <section className="py-16 px-4" style={{ background: '#12142A', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">{t('nav.wineries')}</p>
          <h1 className="font-display text-5xl mb-4" style={{ color: '#F0EBE3' }}>{t('producers.title')}</h1>
          <p className="font-body text-lg max-w-xl" style={{ color: 'rgba(240,235,227,0.55)' }}>{t('producers.subtitle')}</p>
        </div>
      </section>

      {/* Sticky filters */}
      <div className="sticky top-16 z-10 glass-nav py-4 px-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'rgba(240,235,227,0.35)' }} />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={t('producers.search_placeholder')}
                className="input-box pl-9"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {countries.map(c => (
                <button
                  key={c}
                  onClick={() => setActiveCountry(c)}
                  className={`chip ${activeCountry === c ? 'chip-active' : ''}`}
                >
                  {c === 'Alle' ? t('lots.filter_all_countries') : c}
                </button>
              ))}
            </div>
          </div>
          <p className="font-body text-xs mt-2" style={{ color: 'rgba(240,235,227,0.40)' }}>
            {t(filtered.length === 1 ? 'producers.found_singular' : 'producers.found_plural', { count: filtered.length })}
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-display text-3xl italic" style={{ color: 'rgba(240,235,227,0.25)' }}>{t('producers.empty')}</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(p => (
              <div key={p.id} className="card group">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="font-body text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'rgba(233,30,140,0.18)', color: '#E91E8C' }}>
                      {p.country}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-xl leading-snug mb-1 transition-colors" style={{ color: '#F0EBE3' }}>
                    {p.name}
                  </h2>
                  <div className="flex items-center gap-1.5 mb-3 font-body text-xs" style={{ color: 'rgba(240,235,227,0.45)' }}>
                    <MapPin className="w-3.5 h-3.5" style={{ color: 'rgba(240,235,227,0.35)' }} />
                    {p.region}, {p.country}
                  </div>
                  <p className="font-body text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: 'rgba(240,235,227,0.55)' }}>{p.description}</p>
                  {p.awards.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.awards.slice(0, 2).map(a => (
                        <span key={a} className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-body" style={{ background: 'rgba(212,160,23,0.18)', color: '#D4A017' }}>
                          <Award className="w-3 h-3" /> {a}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link to={`/producer/${p.id}`} className="btn-gold w-full justify-center text-sm py-2.5">
                    {t('producers.visit')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
