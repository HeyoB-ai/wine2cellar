import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { mockLots, type Lot } from '../data/lots'
import { useTranslation } from 'react-i18next'

const LOT_TYPE_BADGE: Record<string, string> = {
  restpartij: 'bg-primary-container text-primary',
  schadepartij: 'bg-surface-high text-navy/70',
  overproductie: 'bg-secondary-container text-secondary-on',
  anders: 'bg-surface-high text-navy/70',
}

const WINE_TYPE_KEYS: Record<string, string> = {
  rood: 'Rood',
  wit: 'Wit',
  rosé: 'Rosé',
  mousseux: 'Mousseux',
  overig: 'Overig',
}

export default function LotsPage() {
  const { t } = useTranslation()
  const [filterCountry, setFilterCountry] = useState('')
  const [filterWineType, setFilterWineType] = useState('')
  const [filterLotType, setFilterLotType] = useState('')
  const [filterAvailableFor, setFilterAvailableFor] = useState('')

  const filtered = useMemo(() => {
    return mockLots.filter((lot: Lot) => {
      if (filterCountry && lot.wineryCountry !== filterCountry) return false
      if (filterWineType && lot.wineType !== filterWineType) return false
      if (filterLotType && lot.lotType !== filterLotType) return false
      if (filterAvailableFor && !lot.availableFor.includes(filterAvailableFor as 'particulier' | 'horeca')) return false
      return true
    })
  }, [filterCountry, filterWineType, filterLotType, filterAvailableFor])

  const countries = ['Frankrijk', 'Italië', 'Duitsland', 'Spanje']
  const wineTypes = ['rood', 'wit', 'rosé', 'mousseux']
  const lotTypes = ['restpartij', 'schadepartij', 'overproductie']

  return (
    <div className="min-h-screen bg-cream pt-16">
      {/* Header */}
      <section className="bg-surface-low py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-3">{t('nav.offers')}</p>
          <h1 className="font-display text-5xl text-navy mb-4">{t('lots.title')}</h1>
          <p className="font-body text-navy/60 text-lg max-w-xl">{t('lots.subtitle')}</p>
        </div>
      </section>

      {/* Sticky filters */}
      <div className="sticky top-16 z-10 glass-nav py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 items-center">
            {/* Country chips */}
            <button onClick={() => setFilterCountry('')} className={`chip ${!filterCountry ? 'chip-active' : ''}`}>
              {t('lots.filter_all_countries')}
            </button>
            {countries.map(c => (
              <button key={c} onClick={() => setFilterCountry(filterCountry === c ? '' : c)}
                className={`chip ${filterCountry === c ? 'chip-active' : ''}`}>{c}</button>
            ))}
            <div className="w-px h-5 bg-outline/20 mx-1" />
            {/* Wine type chips */}
            {wineTypes.map(w => (
              <button key={w} onClick={() => setFilterWineType(filterWineType === w ? '' : w)}
                className={`chip ${filterWineType === w ? 'chip-active' : ''} capitalize`}>{w}</button>
            ))}
            <div className="w-px h-5 bg-outline/20 mx-1" />
            {lotTypes.map(l => (
              <button key={l} onClick={() => setFilterLotType(filterLotType === l ? '' : l)}
                className={`chip ${filterLotType === l ? 'chip-active' : ''}`}>{l}</button>
            ))}
            <div className="w-px h-5 bg-outline/20 mx-1" />
            <button onClick={() => setFilterAvailableFor('')} className={`chip ${!filterAvailableFor ? 'chip-active' : ''}`}>Alle</button>
            <button onClick={() => setFilterAvailableFor(filterAvailableFor === 'particulier' ? '' : 'particulier')}
              className={`chip ${filterAvailableFor === 'particulier' ? 'chip-active' : ''}`}>{t('auth.register.buyer_type_particulier')}</button>
            <button onClick={() => setFilterAvailableFor(filterAvailableFor === 'horeca' ? '' : 'horeca')}
              className={`chip ${filterAvailableFor === 'horeca' ? 'chip-active' : ''}`}>{t('auth.register.buyer_type_horeca')}</button>
            <span className="ml-auto font-body text-xs text-navy/50">
              {filtered.length} {filtered.length === 1 ? 'aanbieding' : 'aanbiedingen'}
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-display text-3xl italic text-navy/30">{t('lots.empty')}</p>
            <button onClick={() => { setFilterCountry(''); setFilterWineType(''); setFilterLotType(''); setFilterAvailableFor('') }}
              className="mt-6 btn-ghost">{t('lots.clear_filters')}</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((lot: Lot) => (
              <div key={lot.id} className="card flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  {/* Badges */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className={`badge-lot ${LOT_TYPE_BADGE[lot.lotType] || 'bg-surface-high text-navy/70'}`}>
                      {t(`lots.badge_${lot.lotType as string}`)}
                    </span>
                    <span className="badge-lot bg-surface-high text-navy/60 capitalize">{WINE_TYPE_KEYS[lot.wineType] || lot.wineType}</span>
                  </div>

                  {/* Winery */}
                  <p className="font-body text-xs font-semibold text-primary mb-1 uppercase tracking-wide">
                    {lot.wineryName} · {lot.wineryRegion}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-xl text-navy mb-3 leading-snug">{lot.title}</h3>

                  {/* Description */}
                  <p className="font-body text-sm text-navy/60 leading-relaxed mb-4 flex-1 line-clamp-3">{lot.description}</p>

                  {/* Details */}
                  <div className="space-y-2 mb-5">
                    <div className="flex justify-between">
                      <span className="font-body text-xs text-navy/50">{t('lots.bottles')}</span>
                      <span className="font-body text-sm text-navy">{lot.quantityBottles}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-body text-xs text-navy/50">{t('lots.per_bottle')}</span>
                      <span className="font-display text-2xl font-semibold text-primary">€{lot.pricePerBottle.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-body text-xs text-navy/50">{t('lots.min_order', { amount: lot.minimumOrderBottles })}</span>
                      <span className="font-body text-xs text-navy/60">{lot.wineryCountry}</span>
                    </div>
                  </div>

                  <Link to="/login" className="btn-gold w-full justify-center text-sm py-2.5">
                    {t('lots.interest')}
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
