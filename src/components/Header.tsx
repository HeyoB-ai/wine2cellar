import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import { Menu, X } from 'lucide-react'

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
    setMobileOpen(false)
  }

  const getDashboardPath = () => {
    if (profile?.role === 'admin') return '/dashboard/admin'
    if (profile?.role === 'wijnhuis') return '/dashboard/wijnhuis'
    return '/dashboard/afnemer'
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${
        scrolled ? 'shadow-card' : ''
      }`}
      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <span className="font-display text-xl font-bold" style={{ color: '#E91E8C' }}>
              Cellar2Table
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: t('nav.offers'), to: '/partijen' },
              { label: t('nav.wineries'), to: '/wineries' },
              { label: t('nav.forProducers'), to: '/voor-producenten' },
              { label: t('nav.contact'), to: '/contact' },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="font-body text-sm font-medium px-3 py-2 rounded-lg transition-colors"
                style={{ color: 'rgba(240,235,227,0.65)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F0EBE3')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,235,227,0.65)')}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  to={getDashboardPath()}
                  className="font-body text-sm font-medium transition-colors"
                  style={{ color: '#D4A017' }}
                >
                  {t('nav.dashboard')}
                </Link>
                <button onClick={handleSignOut} className="btn-ghost text-sm py-2 px-4">
                  {t('nav.logout')}
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-body text-sm font-medium px-3 py-2 transition-colors"
                  style={{ color: 'rgba(240,235,227,0.65)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#F0EBE3')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,235,227,0.65)')}
                >
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
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'rgba(240,235,227,0.70)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-4 py-4 space-y-1"
          style={{ background: '#12142A', borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {[
            { label: t('nav.offers'), to: '/partijen' },
            { label: t('nav.wineries'), to: '/wineries' },
            { label: t('nav.forProducers'), to: '/voor-producenten' },
            { label: t('nav.contact'), to: '/contact' },
          ].map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block font-body text-sm py-2.5 px-3 rounded-lg transition-colors"
              style={{ color: 'rgba(240,235,227,0.70)' }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex items-center gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <LanguageSwitcher />
            {user ? (
              <>
                <Link to={getDashboardPath()} onClick={() => setMobileOpen(false)} className="font-body text-sm" style={{ color: '#D4A017' }}>{t('nav.dashboard')}</Link>
                <button onClick={handleSignOut} className="font-body text-sm" style={{ color: 'rgba(240,235,227,0.50)' }}>{t('nav.logout')}</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileOpen(false)} className="font-body text-sm" style={{ color: 'rgba(240,235,227,0.70)' }}>{t('nav.login')}</Link>
                <Link to="/register" onClick={() => setMobileOpen(false)} className="btn-gold text-sm py-1.5 px-4">{t('nav.register')}</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
