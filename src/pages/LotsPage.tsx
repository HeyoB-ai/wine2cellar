import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { mockLots, type Lot } from '../data/lots'

const LOT_TYPE_LABELS: Record<string, string> = {
  restpartij: 'Restpartij',
  schadepartij: 'Schadepartij',
  overproductie: 'Overproductie',
  anders: 'Anders',
}

const LOT_TYPE_COLORS: Record<string, string> = {
  restpartij: 'bg-wine-800 text-wine-100',
  schadepartij: 'bg-amber-800 text-amber-100',
  overproductie: 'bg-emerald-800 text-emerald-100',
  anders: 'bg-noir-600 text-cream-100',
}

const WINE_TYPE_LABELS: Record<string, string> = {
  rood: 'Rood',
  wit: 'Wit',
  rosé: 'Rosé',
  mousseux: 'Mousseux',
  overig: 'Overig',
}

export default function LotsPage() {
  const [filterCountry, setFilterCountry] = useState('')
  const [filterWineType, setFilterWineType] = useState('')
  const [filterLotType, setFilterLotType] = useState('')
  const [filterAvailableFor, setFilterAvailableFor] = useState('')

  const filtered = useMemo(() => {
    return mockLots.filter(lot => {
      if (filterCountry && lot.wineryCountry !== filterCountry) return false
      if (filterWineType && lot.wineType !== filterWineType) return false
      if (filterLotType && lot.lotType !== filterLotType) return false
      if (filterAvailableFor && !lot.availableFor.includes(filterAvailableFor as 'particulier' | 'horeca')) return false
      return true
    })
  }, [filterCountry, filterWineType, filterLotType, filterAvailableFor])

  return (
    <div className="min-h-screen bg-noir-900 text-cream-50">
      {/* Header */}
      <section className="bg-gradient-to-b from-noir-800 to-noir-900 pt-16 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title text-4xl mb-3">Actieve aanbiedingen</h1>
          <p className="text-cream-200 text-lg max-w-2xl">
            Restpartijen en schadepartijen van Europese wijnhuizen — direct beschikbaar voor particulieren en horeca.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-noir-700 bg-noir-800 sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-3">
          <select
            value={filterCountry}
            onChange={e => setFilterCountry(e.target.value)}
            className="input-dark text-sm py-1.5 px-3"
          >
            <option value="">Alle landen</option>
            <option value="Frankrijk">Frankrijk</option>
            <option value="Italië">Italië</option>
            <option value="Duitsland">Duitsland</option>
            <option value="Spanje">Spanje</option>
          </select>
          <select
            value={filterWineType}
            onChange={e => setFilterWineType(e.target.value)}
            className="input-dark text-sm py-1.5 px-3"
          >
            <option value="">Alle wijntypen</option>
            <option value="rood">Rood</option>
            <option value="wit">Wit</option>
            <option value="rosé">Rosé</option>
            <option value="mousseux">Mousseux</option>
          </select>
          <select
            value={filterLotType}
            onChange={e => setFilterLotType(e.target.value)}
            className="input-dark text-sm py-1.5 px-3"
          >
            <option value="">Alle soorten</option>
            <option value="restpartij">Restpartij</option>
            <option value="schadepartij">Schadepartij</option>
            <option value="overproductie">Overproductie</option>
          </select>
          <select
            value={filterAvailableFor}
            onChange={e => setFilterAvailableFor(e.target.value)}
            className="input-dark text-sm py-1.5 px-3"
          >
            <option value="">Particulier &amp; horeca</option>
            <option value="particulier">Particulier</option>
            <option value="horeca">Horeca</option>
          </select>
          <span className="text-cream-400 text-sm self-center ml-auto">
            {filtered.length} {filtered.length === 1 ? 'aanbieding' : 'aanbiedingen'}
          </span>
        </div>
      </section>

      {/* Lots grid */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        {filtered.length === 0 ? (
          <p className="text-cream-400 text-center py-20">Geen aanbiedingen gevonden voor deze filters.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((lot: Lot) => (
              <div key={lot.id} className="card-dark flex flex-col">
                {/* Badge row */}
                <div className="flex gap-2 mb-3 flex-wrap">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${LOT_TYPE_COLORS[lot.lotType]}`}>
                    {LOT_TYPE_LABELS[lot.lotType]}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-noir-600 text-cream-200">
                    {WINE_TYPE_LABELS[lot.wineType]}
                  </span>
                  {lot.availableFor.length === 1 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gold-900/30 text-gold-400 border border-gold-800/40">
                      alleen {lot.availableFor[0]}
                    </span>
                  )}
                </div>

                {/* Winery */}
                <p className="text-gold-400 text-sm font-medium mb-1">
                  {lot.wineryName} · {lot.wineryRegion}, {lot.wineryCountry}
                </p>

                {/* Title */}
                <h3 className="text-cream-50 font-semibold text-lg mb-2 leading-snug">{lot.title}</h3>

                {/* Description */}
                <p className="text-cream-300 text-sm mb-4 line-clamp-3 flex-1">{lot.description}</p>

                {/* Details */}
                <div className="border-t border-noir-600 pt-3 mt-auto space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-cream-400">Jaargang</span>
                    <span className="text-cream-100">{lot.vintage}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-cream-400">Beschikbaar</span>
                    <span className="text-cream-100">{lot.quantityBottles} flessen</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-cream-400">Prijs per fles</span>
                    <span className="text-gold-400 font-semibold">€{lot.pricePerBottle.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-cream-400">Min. afname</span>
                    <span className="text-cream-100">{lot.minimumOrderBottles} flessen</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="/login"
                  className="btn-gold w-full text-center mt-4 text-sm py-2"
                >
                  Interesse tonen
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
