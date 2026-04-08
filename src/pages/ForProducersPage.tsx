import { Link } from 'react-router-dom';
import { Globe, Users, TrendingUp, ChevronRight, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ForProducersPage() {
  const { t } = useTranslation();

  const benefits = [
    { icon: Zap, title: t('for_producers.benefit1_title'), desc: t('for_producers.benefit1_desc') },
    { icon: Globe, title: t('for_producers.benefit2_title'), desc: t('for_producers.benefit2_desc') },
    { icon: Users, title: t('for_producers.benefit2_title'), desc: t('for_producers.benefit2_desc') },
    { icon: TrendingUp, title: t('for_producers.benefit3_title'), desc: t('for_producers.benefit3_desc') },
  ];

  const steps = [
    { num: '01', title: t('for_producers.free_account'), desc: t('for_producers.free_desc') },
    { num: '02', title: t('for_producers.paid_account'), desc: t('for_producers.paid_desc') },
    { num: '03', title: t('dashboard.winery.inquiries'), desc: t('for_producers.benefit1_desc') },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1400&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-noir-900 to-noir-900/95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-500 font-sans text-sm tracking-widest uppercase mb-4">{t('for_producers.title')}</p>
          <h1 className="section-title text-5xl mb-6 max-w-3xl mx-auto">{t('for_producers.subtitle')}</h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-cream-200/60 font-sans text-lg max-w-2xl mx-auto mb-10">
            {t('for_producers.paid_desc')}
          </p>
          <Link to="/register?role=wijnhuis" className="btn-gold text-base px-10 py-4 gap-2">
            {t('for_producers.cta')} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 bg-noir-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">{t('home.how.label')}</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free account */}
            <div className="card-dark p-8">
              <p className="text-gold-500 font-sans text-xs tracking-widest uppercase mb-3">{t('for_producers.free_account')}</p>
              <h3 className="font-display text-2xl font-bold text-cream-50 mb-2">{t('for_producers.free_account')}</h3>
              <p className="font-display text-4xl font-bold text-gold-400 mb-6">€0</p>
              <ul className="space-y-3 mb-8">
                {[
                  t('for_producers.free_desc'),
                  t('for_producers.benefit3_desc'),
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-cream-200/70 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/register?role=wijnhuis" className="btn-outline w-full text-center py-3">
                {t('for_producers.cta')}
              </Link>
            </div>

            {/* Paid subscription */}
            <div className="card-dark p-8 border-gold-600 bg-gradient-to-br from-wine-950/40 to-noir-800">
              <p className="text-gold-500 font-sans text-xs tracking-widest uppercase mb-3">{t('for_producers.paid_account')}</p>
              <h3 className="font-display text-2xl font-bold text-cream-50 mb-2">{t('for_producers.paid_account')}</h3>
              <p className="font-display text-4xl font-bold text-gold-400 mb-1">€<span className="text-2xl">X</span></p>
              <p className="text-cream-200/40 font-sans text-xs mb-6">{t('for_producers.paid_account')}</p>
              <ul className="space-y-3 mb-8">
                {[
                  t('for_producers.paid_desc'),
                  t('for_producers.benefit1_desc'),
                  t('for_producers.benefit2_desc'),
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-cream-200/70 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-gold w-full text-center py-3 gap-2">
                {t('contact.title')} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">{t('home.how.label')}</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-gold-500 flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-gold-400 font-bold text-lg">{num}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-cream-50 mb-3">{title}</h3>
                <p className="text-cream-200/60 font-sans text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-noir-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">{t('for_producers.title')}</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title + desc} className="card-dark p-6 hover:border-gold-600 transition-colors">
                <div className="w-12 h-12 bg-wine-900 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-cream-50 mb-2">{title}</h3>
                <p className="text-cream-200/60 font-sans text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-wine-950 to-noir-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4">{t('home.cta.label')}</h2>
          <p className="text-cream-200/60 font-sans mb-10">{t('home.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register?role=wijnhuis" className="btn-gold text-base px-8 py-4">{t('for_producers.cta')}</Link>
            <Link to="/contact" className="btn-outline text-base px-8 py-4">{t('contact.title')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
