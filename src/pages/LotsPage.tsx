import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { mockLots } from '../data/lots'

const LOT_TYPE_BADGE_STYLE: Record<string, React.CSSProperties> = {
  restpartij: { background: 'rgba(233,30,140,0.18)', color: '#E91E8C' },
  schadepartij: { background: 'rgba(255,255,255,0.08)', color: 'rgba(240,235,227,0.70)' },
  overproductie: { background: 'rgba(212,160,23,0.18)', color: '#D4A017' },
  anders: { background: 'rgba(255,255,255,0.08)', color: 'rgba(240,235,227,0.60)' },
}

export default function LotsPage() {
  const { t } = useTranslation()
  const [filterCountry, setFilterCountry] = useState('')
  const [filterWineType, setFilterWineType] = useState('')
  const [filterLotType, setFilterLotType] = useState('')

  const filtered = useMemo(() => mockLots.filter(lot => {
    if (filterCountry && lot.wineryCountry !== filterCountry) return false
    if (filterWineType && lot.wineType !== filterWineType) return false
    if (filterLotType && lot.lotType !== filterLotType) return false
    return true
  }), [filterCountry, filterWineType, filterLotType])

  const countries = ['Frankrijk', 'Italië', 'Duitsland', 'Spanje']
  const wineTypes = ['rood', 'wit', 'rosé', 'mousseux']
  const lotTypes = ['restpartij', 'schadepartij', 'overproductie']

  return (
    <div className="min-h-screen pt-16" style={{ background: '#0D0F1E', color: '#F0EBE3' }}>
      {/* Header */}
      <section className="py-16 px-4" style={{ background: '#12142A', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-3">{t('nav.offers')}</p>
          <h1 className="font-display text-5xl mb-4" style={{ color: '#F0EBE3' }}>{t('lots.title')}</h1>
          <p className="font-body text-lg max-w-xl" style={{ color: 'rgba(240,235,227,0.55)' }}>{t('lots.subtitle')}</p>
        </div>
      </section>

      {/* Sticky filters */}
      <div className="sticky top-16 z-10 glass-nav py-3 px-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 items-center">
            <button onClick={() => setFilterCountry('')} className={`chip ${!filterCountry ? 'chip-active' : ''}`}>
              {t('lots.filter_all_countries')}
            </button>
            {countries.map(c => (
              <button key={c} onClick={() => setFilterCountry(filterCountry === c ? '' : c)} className={`chip ${filterCountry === c ? 'chip-active' : ''}`}>{c}</button>
            ))}
            <div className="w-px h-4 mx-1" style={{ background: 'rgba(255,255,255,0.10)' }} />
            {wineTypes.map(w => (
              <button key={w} onClick={() => setFilterWineType(filterWineType === w ? '' : w)} className={`chip ${filterWineType === w ? 'chip-active' : ''} capitalize`}>{w}</button>
            ))}
            <div className="w-px h-4 mx-1" style={{ background: 'rgba(255,255,255,0.10)' }} />
            {lotTypes.map(l => (
              <button key={l} onClick={() => setFilterLotType(filterLotType === l ? '' : l)} className={`chip ${filterLotType === l ? 'chip-active' : ''}`}>{l}</button>
            ))}
            <span className="ml-auto font-body text-xs" style={{ color: 'rgba(240,235,227,0.40)' }}>
              {filtered.length} {filtered.length === 1 ? 'aanbieding' : 'aanbiedingen'}
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-display text-3xl italic" style={{ color: 'rgba(240,235,227,0.25)' }}>{t('lots.empty')}</p>
            <button onClick={() => { setFilterCountry(''); setFilterWineType(''); setFilterLotType('') }} className="btn-ghost mt-6">
              {t('lots.clear_filters')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(lot => (
              <div key={lot.id} className="card flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  {/* Badges */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="badge-lot" style={LOT_TYPE_BADGE_STYLE[lot.lotType] || LOT_TYPE_BADGE_STYLE.anders}>
                      {t(`lots.badge_${lot.lotType}`)}
                    </span>
                    <span className="badge-lot capitalize" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(240,235,227,0.55)' }}>
                      {lot.wineType}
                    </span>
                  </div>

                  {/* Winery */}
                  <p className="font-body text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#E91E8C' }}>
                    {lot.wineryName} · {lot.wineryRegion}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-xl leading-snug mb-3" style={{ color: '#F0EBE3' }}>{lot.title}</h3>

                  {/* Description */}
                  <p className="font-body text-sm leading-relaxed mb-4 flex-1 line-clamp-3" style={{ color: 'rgba(240,235,227,0.55)' }}>
                    {lot.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '0.875rem' }}>
                    <div className="flex justify-between">
                      <span className="font-body text-xs" style={{ color: 'rgba(240,235,227,0.40)' }}>{t('lots.bottles')}</span>
                      <span className="font-body text-sm" style={{ color: '#F0EBE3' }}>{lot.quantityBottles}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-body text-xs" style={{ color: 'rgba(240,235,227,0.40)' }}>{t('lots.per_bottle')}</span>
                      <span className="font-display text-2xl font-bold" style={{ color: '#D4A017' }}>€{lot.pricePerBottle.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-body text-xs" style={{ color: 'rgba(240,235,227,0.40)' }}>{t('lots.min_order', { amount: lot.minimumOrderBottles })}</span>
                      <span className="font-body text-xs" style={{ color: 'rgba(240,235,227,0.50)' }}>{lot.wineryCountry}</span>
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
