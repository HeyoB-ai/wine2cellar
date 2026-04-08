import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-noir-800/60 py-20 border-b border-noir-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-500 font-sans text-sm tracking-widest uppercase mb-3">{t('contact.subtitle')}</p>
          <h1 className="section-title mb-4">{t('contact.title')}</h1>
          <div className="gold-divider mx-auto" />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-cream-50 mb-8">{t('contact.submit')}</h2>
              {sent ? (
                <div className="card-dark p-10 text-center">
                  <CheckCircle2 className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold text-cream-50 mb-2">{t('contact.title')}</h3>
                  <p className="text-cream-200/60 font-sans text-sm">{t('contact.subtitle')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="label-dark">{t('contact.name')}</label>
                    <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="input-dark" placeholder={t('contact.name')} required />
                  </div>
                  <div>
                    <label className="label-dark">{t('contact.email')}</label>
                    <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="input-dark" placeholder="uw@email.nl" required />
                  </div>
                  <div>
                    <label className="label-dark">{t('contact.message')}</label>
                    <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="input-dark resize-none" rows={6} placeholder={t('contact.message')} required />
                  </div>
                  <button type="submit" className="btn-gold w-full py-3">{t('contact.submit')}</button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card-dark p-6">
                <h3 className="font-display text-lg font-semibold text-cream-50 mb-6">{t('contact.info_title')}</h3>
                <ul className="space-y-5">
                  {[
                    { icon: Mail, label: t('contact.email'), value: 'info@cellar2table.nl', href: 'mailto:info@cellar2table.nl' },
                    { icon: Phone, label: 'Telefoon', value: '+31 20 123 4567', href: 'tel:+31201234567' },
                    { icon: MapPin, label: 'Adres', value: 'Keizersgracht 123\n1015 CJ Amsterdam', href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-3.5">
                      <div className="w-9 h-9 bg-wine-900 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-gold-400" />
                      </div>
                      <div>
                        <p className="text-xs text-cream-200/40 font-sans mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm text-cream-200 hover:text-gold-400 font-sans transition-colors whitespace-pre-line">{value}</a>
                        ) : (
                          <p className="text-sm text-cream-200 font-sans whitespace-pre-line">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
