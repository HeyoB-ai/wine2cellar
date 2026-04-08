import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ForProducersPage() {
  const { t } = useTranslation()

  const benefits = [
    { num: '01', title: t('for_producers.benefit1_title'), desc: t('for_producers.benefit1_desc') },
    { num: '02', title: t('for_producers.benefit2_title'), desc: t('for_producers.benefit2_desc') },
    { num: '03', title: t('for_producers.benefit3_title'), desc: t('for_producers.benefit3_desc') },
  ]

  return (
    <div className="min-h-screen pt-16" style={{ background: '#0D0F1E', color: '#F0EBE3' }}>
      {/* Hero */}
      <section className="py-20 px-4" style={{ background: '#12142A', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label mb-4">{t('for_producers.title')}</p>
          <h1 className="font-display text-5xl md:text-6xl mb-6 leading-tight" style={{ color: '#F0EBE3' }}>
            {t('for_producers.subtitle')}
          </h1>
          <p className="font-body text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(240,235,227,0.60)' }}>
            {t('for_producers.paid_desc')}
          </p>
          <Link to="/register?role=wijnhuis" className="btn-gold text-base px-8">
            {t('for_producers.cta')} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 px-4" style={{ background: '#0D0F1E' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free */}
            <div className="card p-8" style={{ border: '1px solid rgba(212,160,23,0.15)' }}>
              <p className="section-label mb-3">{t('for_producers.free_account')}</p>
              <p className="font-display text-5xl font-bold mb-2" style={{ color: '#F0EBE3' }}>€0</p>
              <p className="font-body text-sm mb-6" style={{ color: 'rgba(240,235,227,0.45)' }}>altijd gratis</p>
              <ul className="space-y-3 mb-8">
                {[t('for_producers.free_desc'), t('for_producers.benefit3_desc')].map(item => (
                  <li key={item} className="flex items-start gap-2.5 font-body text-sm" style={{ color: 'rgba(240,235,227,0.65)' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: '#D4A017' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/register?role=wijnhuis" className="btn-ghost w-full justify-center">
                {t('for_producers.cta')}
              </Link>
            </div>

            {/* Paid */}
            <div className="card p-8" style={{ border: '1px solid rgba(233,30,140,0.25)', boxShadow: '0 0 24px rgba(233,30,140,0.08)' }}>
              <p className="section-label mb-3">{t('for_producers.paid_account')}</p>
              <p className="font-display text-5xl font-bold mb-2" style={{ color: '#E91E8C' }}>€X</p>
              <p className="font-body text-sm mb-6" style={{ color: 'rgba(240,235,227,0.45)' }}>per maand</p>
              <ul className="space-y-3 mb-8">
                {[t('for_producers.paid_desc'), t('for_producers.benefit1_desc'), t('for_producers.benefit2_desc')].map(item => (
                  <li key={item} className="flex items-start gap-2.5 font-body text-sm" style={{ color: 'rgba(240,235,227,0.65)' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: '#E91E8C' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-gold w-full justify-center">
                Neem contact op <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4" style={{ background: '#12142A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Voordelen</p>
            <h2 className="font-display text-4xl" style={{ color: '#F0EBE3' }}>Waarom Cellar2Table?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map(({ num, title, desc }) => (
              <div key={num} className="card p-8 relative overflow-hidden">
                <div className="font-display text-8xl font-bold absolute top-2 right-4 leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(233,30,140,0.08)' }}>
                  {num}
                </div>
                <div className="relative">
                  <span className="font-display text-lg font-semibold block mb-3" style={{ color: '#E91E8C' }}>{num}</span>
                  <h3 className="font-display text-xl mb-3" style={{ color: '#F0EBE3' }}>{title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(240,235,227,0.55)' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4" style={{ background: '#0D0F1E' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-4" style={{ color: '#F0EBE3' }}>Klaar om te beginnen?</h2>
          <p className="font-body mb-10" style={{ color: 'rgba(240,235,227,0.55)' }}>{t('home.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register?role=wijnhuis" className="btn-gold text-base px-8">
              {t('for_producers.cta')}
            </Link>
            <Link to="/contact" className="btn-ghost text-base px-8">
              {t('contact.title')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
