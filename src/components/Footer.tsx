import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, Globe } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer style={{ background: '#12142A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-bold block mb-3" style={{ color: '#E91E8C' }}>
              Cellar2Table
            </span>
            <p className="font-body text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(240,235,227,0.55)' }}>
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="mailto:info@cellar2table.eu"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(240,235,227,0.50)' }}
              >
                <Mail size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(240,235,227,0.50)' }}
              >
                <Globe size={14} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="section-label mb-4">{t('footer.nav_title')}</h4>
            <ul className="space-y-2.5">
              {[
                { label: t('nav.offers'), to: '/partijen' },
                { label: t('nav.wineries'), to: '/wineries' },
                { label: t('nav.forProducers'), to: '/voor-producenten' },
                { label: t('nav.contact'), to: '/contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm transition-colors"
                    style={{ color: 'rgba(240,235,227,0.55)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#D4A017')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,235,227,0.55)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-label mb-4">{t('footer.contact_title')}</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:info@cellar2table.eu"
                  className="font-body text-sm transition-colors"
                  style={{ color: 'rgba(240,235,227,0.55)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#D4A017')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,235,227,0.55)')}
                >
                  info@cellar2table.eu
                </a>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="font-body text-sm transition-colors"
                  style={{ color: 'rgba(240,235,227,0.55)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#D4A017')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,235,227,0.55)')}
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="font-body text-sm transition-colors"
                  style={{ color: 'rgba(240,235,227,0.55)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#D4A017')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,235,227,0.55)')}
                >
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="font-body text-xs text-center" style={{ color: 'rgba(240,235,227,0.30)' }}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
