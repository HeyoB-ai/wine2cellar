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
    <div className="min-h-screen bg-cream pt-16">
      {/* Hero */}
      <section className="bg-surface-low py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label mb-4">{t('for_producers.title')}</p>
          <h1 className="font-display text-5xl md:text-6xl text-navy mb-6 leading-tight">
            {t('for_producers.subtitle')}
          </h1>
          <p className="font-body text-lg text-navy/60 max-w-2xl mx-auto mb-10">
            {t('for_producers.paid_desc')}
          </p>
          <Link to="/register?role=wijnhuis" className="btn-gold text-base px-8">
            {t('for_producers.cta')} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free */}
            <div className="card p-8">
              <p className="section-label mb-3">{t('for_producers.free_account')}</p>
              <p className="font-display text-5xl font-bold text-navy mb-2">€0</p>
              <p className="font-body text-sm text-navy/50 mb-6">altijd gratis</p>
              <ul className="space-y-3 mb-8">
                {[t('for_producers.free_desc'), t('for_producers.benefit3_desc')].map(item => (
                  <li key={item} className="flex items-start gap-2.5 font-body text-sm text-navy/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/register?role=wijnhuis" className="btn-ghost w-full justify-center">
                {t('for_producers.cta')}
              </Link>
            </div>

            {/* Paid */}
            <div className="card p-8" style={{ background: '#FFE4EE' }}>
              <p className="section-label mb-3">{t('for_producers.paid_account')}</p>
              <p className="font-display text-5xl font-bold text-primary mb-2">€X</p>
              <p className="font-body text-sm text-navy/50 mb-6">per maand</p>
              <ul className="space-y-3 mb-8">
                {[t('for_producers.paid_desc'), t('for_producers.benefit1_desc'), t('for_producers.benefit2_desc')].map(item => (
                  <li key={item} className="flex items-start gap-2.5 font-body text-sm text-navy/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
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

      {/* Benefits with large decorative numbers */}
      <section className="py-24 bg-surface-low px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Voordelen</p>
            <h2 className="font-display text-4xl text-navy">Waarom Cellar2Table?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map(({ num, title, desc }) => (
              <div key={num} className="card p-8 relative overflow-hidden">
                <div className="font-display text-8xl font-bold absolute top-2 right-4 leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(190, 24, 93, 0.07)' }}>
                  {num}
                </div>
                <div className="relative">
                  <span className="font-display text-lg font-semibold text-primary block mb-3">{num}</span>
                  <h3 className="font-display text-xl text-navy mb-3">{title}</h3>
                  <p className="font-body text-sm text-navy/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl text-navy mb-4">Klaar om te beginnen?</h2>
          <p className="font-body text-navy/60 mb-10">{t('home.cta.subtitle')}</p>
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
