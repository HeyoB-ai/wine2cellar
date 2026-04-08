import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Users, Globe, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900/60 via-noir-900/40 to-noir-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wine-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-wine-950/80 border border-wine-800 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <span className="text-xs font-sans text-gold-400 tracking-wide">{t('home.hero.badge')}</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-cream-50 leading-tight mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg text-cream-200/70 font-sans leading-relaxed mb-10 max-w-xl">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/partijen" className="btn-gold text-base px-8 py-4 gap-2">
                {t('home.hero.cta_offers')} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/register" className="btn-outline text-base px-8 py-4">
                {t('home.hero.cta_register')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-noir-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-sans text-sm tracking-widest uppercase mb-3">{t('home.how.label')}</p>
            <h2 className="section-title mb-4">{t('home.how.title')}</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: t('home.how.step1_title'), desc: t('home.how.step1_desc') },
              { num: '02', title: t('home.how.step2_title'), desc: t('home.how.step2_desc') },
              { num: '03', title: t('home.how.step3_title'), desc: t('home.how.step3_desc') },
            ].map(({ num, title, desc }) => (
              <div key={num} className="card-dark p-8 text-center hover:border-wine-700 transition-colors">
                <div className="w-14 h-14 rounded-full border-2 border-gold-500 flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-gold-400 font-bold text-lg">{num}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-cream-50 mb-3">{title}</h3>
                <p className="text-cream-200/60 font-sans text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-wine-950 to-noir-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { icon: Users, value: '500+', label: t('home.stats.wineries') },
              { icon: Globe, value: '4', label: t('home.stats.countries') },
              { icon: Tag, value: t('common.active'), label: t('home.stats.free') },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                <p className="font-display text-4xl font-bold text-cream-50 mb-1">{value}</p>
                <p className="text-cream-200/60 font-sans text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-sans text-sm tracking-widest uppercase mb-3">{t('home.how.label')}</p>
            <h2 className="section-title mb-4">{t('home.how.subtitle')}</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('for_producers.benefit1_title'), desc: t('for_producers.benefit1_desc') },
              { title: t('for_producers.benefit2_title'), desc: t('for_producers.benefit2_desc') },
              { title: t('for_producers.benefit3_title'), desc: t('for_producers.benefit3_desc') },
            ].map(({ title, desc }) => (
              <div key={title} className="card-dark p-8 hover:border-gold-600 transition-colors">
                <div className="w-2 h-8 bg-gold-500 rounded-full mb-5" />
                <h3 className="font-display text-xl font-semibold text-cream-50 mb-3">{title}</h3>
                <p className="text-cream-200/60 font-sans text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="py-24 bg-noir-800/60">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* For buyers */}
            <div className="card-dark p-10 text-center bg-gradient-to-br from-wine-950/60 to-noir-800">
              <p className="text-gold-500 font-sans text-sm tracking-widest uppercase mb-3">{t('home.cta.label')}</p>
              <h2 className="font-display text-2xl font-bold text-cream-50 mb-4">{t('home.cta.title')}</h2>
              <p className="text-cream-200/60 font-sans text-sm mb-8 leading-relaxed">{t('home.cta.subtitle')}</p>
              <Link to="/partijen" className="btn-gold text-base px-8 py-3 gap-2">
                {t('home.cta.btn_offers')} <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            {/* For wineries */}
            <div className="card-dark p-10 text-center">
              <p className="text-gold-500 font-sans text-sm tracking-widest uppercase mb-3">{t('nav.forProducers')}</p>
              <h2 className="font-display text-2xl font-bold text-cream-50 mb-4">{t('for_producers.subtitle')}</h2>
              <p className="text-cream-200/60 font-sans text-sm mb-8 leading-relaxed">{t('for_producers.free_desc')}</p>
              <Link to="/register" className="btn-outline text-base px-8 py-3 gap-2">
                {t('home.cta.btn_register')} <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
