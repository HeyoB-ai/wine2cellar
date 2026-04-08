import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Calendar, Award, Mail, Globe } from 'lucide-react'
import { producers } from '../data/producers'
import { useTranslation } from 'react-i18next'

export default function ProducerDetailPage() {
  const { id } = useParams()
  const { t } = useTranslation()
  const producer = producers.find(p => p.id === id)

  if (!producer) return (
    <div className="min-h-screen bg-cream flex items-center justify-center pt-16">
      <div className="text-center">
        <p className="font-body text-navy/50 mb-4">{t('producers.empty')}</p>
        <Link to="/wineries" className="btn-gold">{t('producer_detail.back')}</Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-cream pt-16">
      {/* Cover hero — gradient fades to cream, not black */}
      <div className="relative h-80 overflow-hidden">
        <img src={producer.image} alt={producer.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, #FDF8F2 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <Link to="/wineries" className="inline-flex items-center gap-1.5 font-body text-sm text-navy/60 hover:text-burgundy mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {t('producer_detail.back')}
          </Link>
          <h1 className="font-display text-4xl md:text-5xl text-navy leading-tight">{producer.name}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-2 font-body text-sm text-navy/60">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-outline" />{producer.region}, {producer.country}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-outline" />{t('producer_detail.established')} {producer.founded}</span>
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
              <h2 className="font-display text-2xl text-navy mb-6">{t('producer_detail.about')}</h2>
              <p className="font-body text-navy/70 leading-relaxed text-base mb-8">{producer.description}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="card p-6 text-center">
                  <p className="font-display text-3xl font-bold text-primary mb-1">{producer.founded}</p>
                  <p className="font-body text-sm text-navy/50">{t('producer_detail.established')}</p>
                </div>
                {producer.hectares > 0 && (
                  <div className="card p-6 text-center">
                    <p className="font-display text-3xl font-bold text-primary mb-1">{producer.hectares}</p>
                    <p className="font-body text-sm text-navy/50">{t('producer_detail.hectares')}</p>
                  </div>
                )}
              </div>
            </section>

            {/* Wines */}
            <section>
              <h2 className="font-display text-2xl text-navy mb-6">{t('producer_detail.our_wines')}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {producer.wines.map(wine => (
                  <div key={wine.id} className="card overflow-hidden">
                    <div className="h-40 overflow-hidden">
                      <img src={wine.image} alt={wine.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-display font-semibold text-navy text-base leading-snug flex-1 mr-2">{wine.name}</h3>
                        <span className="font-display text-xl font-bold text-primary shrink-0">€{wine.price}</span>
                      </div>
                      <p className="font-body text-xs text-navy/50 mb-3">{wine.vintage} · {wine.type}</p>
                      <p className="font-body text-sm text-navy/60 leading-relaxed line-clamp-2 mb-4">{wine.description}</p>
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
              <div className="card p-6">
                <h3 className="font-display text-lg text-navy mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-secondary" /> {t('producer_detail.awards')}
                </h3>
                <ul className="space-y-3">
                  {producer.awards.map(a => (
                    <li key={a} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      <span className="font-body text-sm text-navy/70">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Info */}
            <div className="card p-6">
              <h3 className="font-display text-lg text-navy mb-4">{t('producer_detail.info')}</h3>
              <table className="w-full font-body text-sm">
                <tbody>
                  {[
                    [t('producer_detail.region'), producer.region],
                    [t('producer_detail.country'), producer.country],
                    [t('producer_detail.established'), producer.founded],
                    [t('producer_detail.wines'), producer.wines.length],
                  ].map(([k, v]) => (
                    <tr key={String(k)} className="border-b border-surface-high last:border-0">
                      <td className="py-2.5 text-navy/40 pr-4">{k}</td>
                      <td className="py-2.5 text-navy font-medium">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Contact CTA */}
            <div className="card p-6">
              <h3 className="font-display text-lg text-navy mb-3">{t('producer_detail.contact_title')}</h3>
              <p className="font-body text-sm text-navy/60 mb-5">{t('producer_detail.contact_desc')}</p>
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
