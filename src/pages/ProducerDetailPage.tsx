import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Calendar, Award, Mail, Globe } from 'lucide-react'
import { producers } from '../data/producers'
import { useTranslation } from 'react-i18next'

export default function ProducerDetailPage() {
  const { id } = useParams()
  const { t } = useTranslation()
  const producer = producers.find(p => p.id === id)

  if (!producer) return (
    <div className="min-h-screen flex items-center justify-center pt-16" style={{ background: '#0D0F1E' }}>
      <div className="text-center">
        <p className="font-body mb-4" style={{ color: 'rgba(240,235,227,0.50)' }}>{t('producers.empty')}</p>
        <Link to="/wineries" className="btn-gold">{t('producer_detail.back')}</Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen pt-16" style={{ background: '#0D0F1E', color: '#F0EBE3' }}>
      {/* Cover hero */}
      <div className="relative h-80 overflow-hidden">
        <img src={producer.image} alt={producer.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, #0D0F1E 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <Link
            to="/wineries"
            className="inline-flex items-center gap-1.5 font-body text-sm mb-4 transition-colors"
            style={{ color: 'rgba(240,235,227,0.60)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#D4A017')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,235,227,0.60)')}
          >
            <ArrowLeft className="w-4 h-4" /> {t('producer_detail.back')}
          </Link>
          <h1 className="font-display text-4xl md:text-5xl leading-tight" style={{ color: '#F0EBE3' }}>{producer.name}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-2 font-body text-sm" style={{ color: 'rgba(240,235,227,0.55)' }}>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" style={{ color: 'rgba(240,235,227,0.35)' }} />{producer.region}, {producer.country}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" style={{ color: 'rgba(240,235,227,0.35)' }} />{t('producer_detail.established')} {producer.founded}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <section>
              <h2 className="font-display text-2xl mb-6" style={{ color: '#F0EBE3' }}>{t('producer_detail.about')}</h2>
              <p className="font-body leading-relaxed text-base mb-8" style={{ color: 'rgba(240,235,227,0.65)' }}>{producer.description}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="card p-6 text-center">
                  <p className="font-display text-3xl font-bold mb-1" style={{ color: '#D4A017' }}>{producer.founded}</p>
                  <p className="font-body text-sm" style={{ color: 'rgba(240,235,227,0.45)' }}>{t('producer_detail.established')}</p>
                </div>
                {producer.hectares > 0 && (
                  <div className="card p-6 text-center">
                    <p className="font-display text-3xl font-bold mb-1" style={{ color: '#D4A017' }}>{producer.hectares}</p>
                    <p className="font-body text-sm" style={{ color: 'rgba(240,235,227,0.45)' }}>{t('producer_detail.hectares')}</p>
                  </div>
                )}
              </div>
            </section>

            {/* Wines */}
            <section>
              <h2 className="font-display text-2xl mb-6" style={{ color: '#F0EBE3' }}>{t('producer_detail.our_wines')}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {producer.wines.map(wine => (
                  <div key={wine.id} className="card overflow-hidden">
                    <div className="h-40 overflow-hidden">
                      <img src={wine.image} alt={wine.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-display font-semibold text-base leading-snug flex-1 mr-2" style={{ color: '#F0EBE3' }}>{wine.name}</h3>
                        <span className="font-display text-xl font-bold shrink-0" style={{ color: '#D4A017' }}>€{wine.price}</span>
                      </div>
                      <p className="font-body text-xs mb-3" style={{ color: 'rgba(240,235,227,0.45)' }}>{wine.vintage} · {wine.type}</p>
                      <p className="font-body text-sm leading-relaxed line-clamp-2 mb-4" style={{ color: 'rgba(240,235,227,0.55)' }}>{wine.description}</p>
                      <Link to="/login" className="btn-gold w-full justify-center text-sm py-2">
                        {t('producer_detail.add_to_cart')}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {producer.awards.length > 0 && (
              <div className="card p-6" style={{ background: '#161829' }}>
                <h3 className="font-display text-lg mb-4 flex items-center gap-2" style={{ color: '#F0EBE3' }}>
                  <Award className="w-5 h-5" style={{ color: '#D4A017' }} /> {t('producer_detail.awards')}
                </h3>
                <ul className="space-y-3">
                  {producer.awards.map(a => (
                    <li key={a} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: '#D4A017' }} />
                      <span className="font-body text-sm" style={{ color: 'rgba(240,235,227,0.65)' }}>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Info */}
            <div className="card p-6" style={{ background: '#161829' }}>
              <h3 className="font-display text-lg mb-4" style={{ color: '#F0EBE3' }}>{t('producer_detail.info')}</h3>
              <table className="w-full font-body text-sm">
                <tbody>
                  {[
                    [t('producer_detail.region'), producer.region],
                    [t('producer_detail.country'), producer.country],
                    [t('producer_detail.established'), producer.founded],
                    [t('producer_detail.wines'), producer.wines.length],
                  ].map(([k, v]) => (
                    <tr key={String(k)} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                      <td className="py-2.5 pr-4" style={{ color: 'rgba(240,235,227,0.40)' }}>{k}</td>
                      <td className="py-2.5 font-medium" style={{ color: '#F0EBE3' }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Contact CTA */}
            <div className="card p-6" style={{ background: '#161829' }}>
              <h3 className="font-display text-lg mb-3" style={{ color: '#F0EBE3' }}>{t('producer_detail.contact_title')}</h3>
              <p className="font-body text-sm mb-5" style={{ color: 'rgba(240,235,227,0.55)' }}>{t('producer_detail.contact_desc')}</p>
              {producer.email && (
                <a href={`mailto:${producer.email}`} className="btn-gold w-full text-sm py-2.5 justify-center gap-2 mb-3">
                  <Mail className="w-4 h-4" /> {t('producer_detail.contact_btn')}
                </a>
              )}
              {producer.website && (
                <a href={producer.website} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full text-sm py-2.5 justify-center gap-2">
                  <Globe className="w-4 h-4" /> Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
