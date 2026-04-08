import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Award, Mail, Globe } from 'lucide-react';
import { producers } from '../data/producers';
import { useTranslation } from 'react-i18next';

export default function ProducerDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const producer = producers.find(p => p.id === id);

  if (!producer) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-cream-200/60 font-sans mb-4">{t('producers.empty')}</p>
        <Link to="/producers" className="btn-wine">{t('producer_detail.back')}</Link>
      </div>
    </div>
  );

  return (
    <div>
      {/* Cover hero */}
      <div className="relative h-96 overflow-hidden">
        <img src={producer.image} alt={producer.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-900 via-noir-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/producers" className="inline-flex items-center gap-2 text-sm text-cream-300 hover:text-gold-400 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {t('producer_detail.back')}
          </Link>
          <div className="flex flex-wrap items-end gap-6">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-cream-50 mb-3">{producer.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-cream-300">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-gold-400" />{producer.region}, {producer.country}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-gold-400" />{t('producer_detail.established')} {producer.founded}</span>
                {producer.hectares > 0 && <span>{producer.hectares} {t('producer_detail.hectares').toLowerCase()}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <section>
              <h2 className="font-display text-2xl font-bold text-cream-50 mb-2">{t('producer_detail.about')}</h2>
              <div className="gold-divider mb-6" />
              <p className="text-cream-200/70 font-body leading-relaxed text-base mb-8">{producer.description}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="card-dark p-5 text-center">
                  <p className="font-display text-3xl font-bold text-gold-400 mb-1">{producer.founded}</p>
                  <p className="text-sm text-cream-200/60 font-sans">{t('producer_detail.established')}</p>
                </div>
                {producer.hectares > 0 && (
                  <div className="card-dark p-5 text-center">
                    <p className="font-display text-3xl font-bold text-gold-400 mb-1">{producer.hectares}</p>
                    <p className="text-sm text-cream-200/60 font-sans">{t('producer_detail.hectares')}</p>
                  </div>
                )}
              </div>
            </section>

            {/* Wines */}
            <section>
              <h2 className="font-display text-2xl font-bold text-cream-50 mb-2">{t('producer_detail.our_wines')}</h2>
              <div className="gold-divider mb-6" />
              <div className="grid sm:grid-cols-2 gap-6">
                {producer.wines.map(wine => (
                  <div key={wine.id} className="card-dark overflow-hidden hover:border-wine-700 transition-colors">
                    <div className="h-40 overflow-hidden">
                      <img src={wine.image} alt={wine.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-display font-semibold text-cream-50 text-sm leading-snug flex-1 mr-2">{wine.name}</h3>
                        <span className="text-gold-400 font-sans font-semibold text-sm shrink-0">€{wine.price}</span>
                      </div>
                      <p className="text-xs text-gold-500 font-sans mb-2">{wine.type} · {wine.vintage}</p>
                      <p className="text-xs text-cream-200/60 font-sans leading-relaxed">{wine.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Awards */}
            {producer.awards.length > 0 && (
              <div className="card-dark p-6">
                <h3 className="font-display text-lg font-semibold text-cream-50 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-gold-400" /> {t('producer_detail.awards')}
                </h3>
                <ul className="space-y-3">
                  {producer.awards.map(a => (
                    <li key={a} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                      <span className="text-sm text-cream-200/70 font-sans">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Info */}
            <div className="card-dark p-6">
              <h3 className="font-display text-lg font-semibold text-cream-50 mb-4">{t('producer_detail.info')}</h3>
              <table className="w-full text-sm font-sans">
                <tbody className="divide-y divide-noir-700">
                  {[
                    [t('producer_detail.region'), producer.region],
                    [t('producer_detail.country'), producer.country],
                    [t('producer_detail.established'), producer.founded],
                    [t('producer_detail.wines'), producer.wines.length],
                  ].map(([k, v]) => (
                    <tr key={String(k)}>
                      <td className="py-2.5 text-cream-200/40 pr-4">{k}</td>
                      <td className="py-2.5 text-cream-100 font-medium">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Contact CTA */}
            <div className="card-dark p-6 bg-gradient-to-br from-wine-950/60 to-noir-800">
              <h3 className="font-display text-lg font-semibold text-cream-50 mb-3">{t('producer_detail.contact_title')}</h3>
              <p className="text-sm text-cream-200/60 font-sans mb-5">{t('producer_detail.contact_desc')}</p>
              {producer.email && (
                <a href={`mailto:${producer.email}`} className="btn-gold w-full text-sm py-2.5 justify-center gap-2 mb-3">
                  <Mail className="w-4 h-4" /> {t('producer_detail.contact_btn')}
                </a>
              )}
              {producer.website && (
                <a href={producer.website} target="_blank" rel="noopener noreferrer" className="btn-outline w-full text-sm py-2.5 justify-center gap-2">
                  <Globe className="w-4 h-4" /> Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
