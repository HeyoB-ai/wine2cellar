import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { user, profile, signOut } = useAuth()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const getDashboardPath = () => {
    if (profile?.role === 'admin') return '/dashboard/admin'
    if (profile?.role === 'wijnhuis') return '/dashboard/wijnhuis'
    return '/dashboard/afnemer'
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-shadow duration-300 ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-burgundy tracking-tight">
              Cellar2Table
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link to="/partijen" className="font-body text-sm font-medium text-navy/70 hover:text-burgundy px-3 py-2 transition-colors">
              {t('nav.offers')}
            </Link>
            <Link to="/wineries" className="font-body text-sm font-medium text-navy/70 hover:text-burgundy px-3 py-2 transition-colors">
              {t('nav.wineries')}
            </Link>
            <Link to="/voor-producenten" className="font-body text-sm font-medium text-navy/70 hover:text-burgundy px-3 py-2 transition-colors">
              {t('nav.forProducers')}
            </Link>
            <Link to="/contact" className="font-body text-sm font-medium text-navy/70 hover:text-burgundy px-3 py-2 transition-colors">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            {user ? (
              <div className="flex items-center gap-3">
                <Link to={getDashboardPath()} className="font-body text-sm font-medium text-burgundy hover:text-primary transition-colors">
                  {t('nav.dashboard')}
                </Link>
                <button onClick={handleSignOut} className="btn-ghost text-sm py-2 px-4">
                  {t('nav.logout')}
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="font-body text-sm font-medium text-navy/70 hover:text-burgundy px-3 py-2 transition-colors">
                  {t('nav.login')}
                </Link>
                <Link to="/register" className="btn-gold text-sm py-2 px-5">
                  {t('nav.register')}
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-navy/70 hover:text-burgundy transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <div className="w-5 h-0.5 bg-current mb-1 transition-all"></div>
            <div className="w-5 h-0.5 bg-current mb-1 transition-all"></div>
            <div className="w-5 h-0.5 bg-current transition-all"></div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-outline/10 px-4 py-4 space-y-2">
          <Link to="/partijen" onClick={() => setMobileOpen(false)} className="block font-body text-sm font-medium text-navy/70 py-2">{t('nav.offers')}</Link>
          <Link to="/wineries" onClick={() => setMobileOpen(false)} className="block font-body text-sm font-medium text-navy/70 py-2">{t('nav.wineries')}</Link>
          <Link to="/voor-producenten" onClick={() => setMobileOpen(false)} className="block font-body text-sm font-medium text-navy/70 py-2">{t('nav.forProducers')}</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block font-body text-sm font-medium text-navy/70 py-2">{t('nav.contact')}</Link>
          <div className="pt-2 flex items-center gap-3">
            <LanguageSwitcher />
            {user ? (
              <>
                <Link to={getDashboardPath()} onClick={() => setMobileOpen(false)} className="font-body text-sm text-burgundy">{t('nav.dashboard')}</Link>
                <button onClick={handleSignOut} className="font-body text-sm text-navy/60">{t('nav.logout')}</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileOpen(false)} className="font-body text-sm text-navy/70">{t('nav.login')}</Link>
                <Link to="/register" onClick={() => setMobileOpen(false)} className="btn-gold text-sm py-1.5 px-4">{t('nav.register')}</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
