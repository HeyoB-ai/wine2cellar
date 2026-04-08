import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, Globe } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-surface-high">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-bold text-burgundy block mb-3">
              Cellar2Table
            </span>
            <p className="font-body text-sm text-navy/60 max-w-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3 mt-5">
              <a href="mailto:info@cellar2table.eu" className="w-8 h-8 rounded-full bg-surface-highest flex items-center justify-center text-navy/50 hover:text-burgundy hover:bg-primary-container transition-colors">
                <Mail size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-surface-highest flex items-center justify-center text-navy/50 hover:text-burgundy hover:bg-primary-container transition-colors">
                <Globe size={14} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t('footer.nav_title')}</h4>
            <ul className="space-y-2">
              {[
                { label: t('nav.offers'), to: '/partijen' },
                { label: t('nav.wineries'), to: '/wineries' },
                { label: t('nav.forProducers'), to: '/voor-producenten' },
                { label: t('nav.contact'), to: '/contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="font-body text-sm text-navy/60 hover:text-burgundy transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t('footer.contact_title')}</h4>
            <ul className="space-y-2">
              <li><a href="mailto:info@cellar2table.eu" className="font-body text-sm text-navy/60 hover:text-burgundy transition-colors">info@cellar2table.eu</a></li>
              <li><Link to="/privacy" className="font-body text-sm text-navy/60 hover:text-burgundy transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link to="/terms" className="font-body text-sm text-navy/60 hover:text-burgundy transition-colors">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 bg-surface-highest/30 rounded-xl px-6 py-4">
          <p className="font-body text-xs text-navy/40 text-center">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
