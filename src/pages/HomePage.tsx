import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Star, Wine } from 'lucide-react'

const testimonials = [
  {
    name: 'Marco Visser',
    role: 'Restaurateur, Amsterdam',
    quote: 'Via Cellar2Table kopen wij rechtstreeks bij kleine Bourgondische wijnhuizen. De prijzen zijn uitstekend en de kwaliteit consistent.',
    avatar: 'MV',
  },
  {
    name: 'Sophie de Bruin',
    role: 'Wijnliefhebber, Utrecht',
    quote: 'Eindelijk een platform waar ik als particulier ook grotere hoeveelheden kan inkopen. Mijn kelder is nu prachtig gevuld.',
    avatar: 'SB',
  },
  {
    name: 'Luca Moretti',
    role: 'Fattoria Moretti, Toscane',
    quote: 'Wij konden snel onze overproductie kwijt aan gemotiveerde Nederlandse kopers. Het platform werkt uitstekend.',
    avatar: 'LM',
  },
]

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div style={{ background: '#0D0F1E', color: '#F0EBE3' }}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Glow circles */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(233,30,140,0.12) 0%, transparent 65%)' }} />
        <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 65%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8" style={{ background: 'rgba(233,30,140,0.15)', border: '1px solid rgba(233,30,140,0.30)' }}>
              <Wine size={13} style={{ color: '#E91E8C' }} />
              <span className="font-body text-xs font-semibold" style={{ color: '#E91E8C' }}>{t('home.hero.badge')}</span>
            </div>

            {/* Title */}
            <h1 className="font-display font-bold mb-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.02em', color: '#F0EBE3' }}>
              {t('home.hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="font-body text-lg leading-relaxed mb-10 max-w-xl" style={{ color: 'rgba(240,235,227,0.65)' }}>
              {t('home.hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link to="/partijen" className="btn-gold text-base">
                {t('home.hero.cta_offers')}
                <ArrowRight size={18} />
              </Link>
              <Link to="/register" className="btn-ghost text-base">
                {t('home.hero.cta_register')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: '#12142A', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-3">{t('home.how.label')}</p>
            <h2 className="font-display text-4xl mb-4" style={{ color: '#F0EBE3' }}>{t('home.how.title')}</h2>
            <p className="font-body max-w-xl mx-auto" style={{ color: 'rgba(240,235,227,0.55)' }}>{t('home.how.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: t('home.how.step1_title'), desc: t('home.how.step1_desc') },
              { num: '02', title: t('home.how.step2_title'), desc: t('home.how.step2_desc') },
              { num: '03', title: t('home.how.step3_title'), desc: t('home.how.step3_desc') },
            ].map(step => (
              <div key={step.num} className="card p-8 relative">
                <div className="font-display text-7xl font-bold absolute top-4 right-6 leading-none select-none pointer-events-none" style={{ color: 'rgba(233,30,140,0.10)' }}>
                  {step.num}
                </div>
                <div className="relative">
                  <span className="font-display text-lg font-semibold block mb-3" style={{ color: '#E91E8C' }}>{step.num}</span>
                  <h3 className="font-display text-xl mb-3" style={{ color: '#F0EBE3' }}>{step.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(240,235,227,0.55)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ background: '#0D0F1E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {[
              { value: '500+', label: t('home.stats.wineries') },
              { value: '4', label: t('home.stats.countries') },
              { value: 'Gratis', label: t('home.stats.free') },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-display text-5xl font-bold mb-2" style={{ color: '#D4A017' }}>{stat.value}</div>
                <div className="font-body text-sm" style={{ color: 'rgba(240,235,227,0.50)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{ background: '#12142A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-3">{t('home.testimonials.label')}</p>
            <h2 className="font-display text-4xl" style={{ color: '#F0EBE3' }}>{t('home.testimonials.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <div key={i} className="card p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={13} style={{ color: '#D4A017', fill: '#D4A017' }} />
                  ))}
                </div>
                <blockquote className="font-display text-base italic leading-relaxed mb-6" style={{ color: 'rgba(240,235,227,0.80)' }}>
                  "{item.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(233,30,140,0.20)' }}>
                    <span className="font-body text-xs font-bold" style={{ color: '#E91E8C' }}>{item.avatar}</span>
                  </div>
                  <div>
                    <div className="font-body text-sm font-semibold" style={{ color: '#F0EBE3' }}>{item.name}</div>
                    <div className="font-body text-xs" style={{ color: 'rgba(240,235,227,0.45)' }}>{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: '#0D0F1E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">{t('home.cta.label')}</p>
              <h2 className="font-display text-4xl mb-6 leading-tight" style={{ color: '#F0EBE3' }}>{t('home.cta.title')}</h2>
              <p className="font-body mb-8" style={{ color: 'rgba(240,235,227,0.60)' }}>{t('home.cta.subtitle')}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register" className="btn-gold">
                  {t('home.cta.btn_register')} <ArrowRight size={16} />
                </Link>
                <Link to="/partijen" className="btn-ghost">
                  {t('home.cta.btn_offers')}
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="w-64 h-64 rounded-full flex items-center justify-center" style={{ background: 'radial-gradient(circle, rgba(212,160,23,0.15) 0%, rgba(233,30,140,0.08) 60%, transparent 100%)' }}>
                <div className="text-center">
                  <div className="font-display text-5xl mb-2">🍷</div>
                  <div className="font-display text-lg italic" style={{ color: 'rgba(240,235,227,0.25)' }}>Van kelder tot tafel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
