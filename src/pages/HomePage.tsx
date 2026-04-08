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
    <div className="font-body">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Decorative circles */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(190,24,93,0.08) 0%, transparent 70%)' }} />
        <div className="absolute right-[10%] top-[20%] w-[200px] h-[200px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(238,194,0,0.1) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-container text-primary rounded-full px-4 py-1.5 mb-8">
              <Wine size={14} />
              <span className="font-body text-xs font-semibold">{t('home.hero.badge')}</span>
            </div>

            {/* Title */}
            <h1 className="display-hero text-navy mb-6">
              {t('home.hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="font-body text-lg text-navy/60 leading-relaxed mb-10 max-w-xl">
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
      <section className="bg-surface-low py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-3">{t('home.how.label')}</p>
            <h2 className="font-display text-4xl text-navy mb-4">{t('home.how.title')}</h2>
            <p className="font-body text-navy/60 max-w-xl mx-auto">{t('home.how.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: t('home.how.step1_title'), desc: t('home.how.step1_desc') },
              { num: '02', title: t('home.how.step2_title'), desc: t('home.how.step2_desc') },
              { num: '03', title: t('home.how.step3_title'), desc: t('home.how.step3_desc') },
            ].map(step => (
              <div key={step.num} className="card p-8 relative">
                <div className="font-display text-7xl font-bold absolute top-4 right-6 leading-none select-none"
                  style={{ color: 'rgba(190, 24, 93, 0.08)' }}>
                  {step.num}
                </div>
                <div className="relative">
                  <span className="font-display text-lg font-semibold text-primary mb-3 block">{step.num}</span>
                  <h3 className="font-display text-xl text-navy mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-navy/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — warm dark accent */}
      <section className="py-20" style={{ background: '#6B1A2A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {[
              { value: '500+', label: t('home.stats.wineries') },
              { value: '4', label: t('home.stats.countries') },
              { value: t('common.active'), label: t('home.stats.free') },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-display text-5xl font-bold mb-2" style={{ color: '#EEC200' }}>
                  {stat.value}
                </div>
                <div className="font-body text-sm" style={{ color: 'rgba(253,248,242,0.65)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-3">{t('home.testimonials.label')}</p>
            <h2 className="font-display text-4xl text-navy">{t('home.testimonials.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t2, i) => (
              <div key={i} className="card p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <blockquote className="font-display text-base italic text-navy/80 leading-relaxed mb-6">
                  &ldquo;{t2.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center">
                    <span className="font-body text-xs font-bold text-primary">{t2.avatar}</span>
                  </div>
                  <div>
                    <div className="font-body text-sm font-semibold text-navy">{t2.name}</div>
                    <div className="font-body text-xs text-navy/50">{t2.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">{t('home.cta.label')}</p>
              <h2 className="font-display text-4xl text-navy mb-6 leading-tight">{t('home.cta.title')}</h2>
              <p className="font-body text-navy/60 mb-8">{t('home.cta.subtitle')}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register" className="btn-gold">
                  {t('home.cta.btn_register')} <ArrowRight size={16} />
                </Link>
                <Link to="/partijen" className="btn-ghost">
                  {t('home.cta.btn_offers')}
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-surface-high flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-display text-6xl font-bold text-primary/20 mb-4">🍷</div>
                  <div className="font-display text-2xl text-navy/30 italic">Van kelder tot tafel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
