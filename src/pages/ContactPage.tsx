import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ContactPage() {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-cream pt-16">
      {/* Header */}
      <section className="bg-surface-low py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">{t('contact.title')}</p>
          <h1 className="font-display text-5xl text-navy mb-4">{t('contact.title')}</h1>
          <p className="font-body text-navy/60 text-lg">{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="card p-12 text-center shadow-ambient">
                  <CheckCircle2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-display text-2xl text-navy mb-3">{t('contact.title')}</h3>
                  <p className="font-body text-navy/60">{t('contact.subtitle')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 block mb-1">
                      {t('contact.name')}
                    </label>
                    <input
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="input-underline"
                      placeholder="Jan Jansen"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 block mb-1">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="input-underline"
                      placeholder="uw@email.nl"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 block mb-1">
                      {t('contact.message')}
                    </label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="input-underline resize-none"
                      rows={6}
                      placeholder={t('contact.message')}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full justify-center py-3.5">
                    {t('contact.submit')}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-8">
                <h3 className="font-display text-xl text-navy mb-6">{t('contact.info_title')}</h3>
                <ul className="space-y-6">
                  {[
                    { icon: Mail, label: t('contact.email'), value: 'info@cellar2table.eu', href: 'mailto:info@cellar2table.eu' },
                    { icon: Phone, label: 'Telefoon', value: '+31 20 123 4567', href: 'tel:+31201234567' },
                    { icon: MapPin, label: 'Adres', value: 'Keizersgracht 123\n1015 CJ Amsterdam', href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-primary-container rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-navy/40 mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="font-body text-sm text-navy hover:text-burgundy transition-colors whitespace-pre-line">{value}</a>
                        ) : (
                          <p className="font-body text-sm text-navy whitespace-pre-line">{value}</p>
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
  )
}
