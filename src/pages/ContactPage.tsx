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
    <div className="min-h-screen pt-16" style={{ background: '#0D0F1E', color: '#F0EBE3' }}>
      {/* Header */}
      <section className="py-16 px-4" style={{ background: '#12142A', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">{t('contact.title')}</p>
          <h1 className="font-display text-5xl mb-4" style={{ color: '#F0EBE3' }}>{t('contact.title')}</h1>
          <p className="font-body text-lg" style={{ color: 'rgba(240,235,227,0.55)' }}>{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="rounded-2xl p-12 text-center" style={{ background: '#161829', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: '#D4A017' }} />
                  <h3 className="font-display text-2xl mb-3" style={{ color: '#F0EBE3' }}>{t('contact.title')}</h3>
                  <p className="font-body" style={{ color: 'rgba(240,235,227,0.55)' }}>{t('contact.subtitle')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: 'rgba(240,235,227,0.45)' }}>
                      {t('contact.name')}
                    </label>
                    <input
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="input-field"
                      placeholder="Jan Jansen"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: 'rgba(240,235,227,0.45)' }}>
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="input-field"
                      placeholder="uw@email.nl"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: 'rgba(240,235,227,0.45)' }}>
                      {t('contact.message')}
                    </label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="input-field resize-none"
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
              <div className="rounded-2xl p-8" style={{ background: '#161829', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 className="font-display text-xl mb-6" style={{ color: '#F0EBE3' }}>{t('contact.info_title')}</h3>
                <ul className="space-y-6">
                  {[
                    { icon: Mail, label: t('contact.email'), value: 'info@cellar2table.eu', href: 'mailto:info@cellar2table.eu' },
                    { icon: Phone, label: 'Telefoon', value: '+31 20 123 4567', href: 'tel:+31201234567' },
                    { icon: MapPin, label: 'Adres', value: 'Keizersgracht 123\n1015 CJ Amsterdam', href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(233,30,140,0.15)' }}>
                        <Icon className="w-4 h-4" style={{ color: '#E91E8C' }} />
                      </div>
                      <div>
                        <p className="font-body text-xs mb-0.5" style={{ color: 'rgba(240,235,227,0.40)' }}>{label}</p>
                        {href ? (
                          <a href={href} className="font-body text-sm whitespace-pre-line transition-colors" style={{ color: 'rgba(240,235,227,0.75)' }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#D4A017')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,235,227,0.75)')}
                          >{value}</a>
                        ) : (
                          <p className="font-body text-sm whitespace-pre-line" style={{ color: 'rgba(240,235,227,0.75)' }}>{value}</p>
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
