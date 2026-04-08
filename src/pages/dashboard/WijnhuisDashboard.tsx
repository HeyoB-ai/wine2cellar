import { useAuth } from '../../context/AuthContext'
import { Wine, Package, Users, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


export default function WijnhuisDashboard() {
  const { profile, signOut } = useAuth()
  const { t } = useTranslation()
  const subscriptionActive = false

  return (
    <div className="min-h-screen flex pt-16" style={{ background: '#0D0F1E' }}>
      {/* Sidebar */}
      <aside className="w-64 shrink-0 p-6" style={{ background: '#12142A', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mb-8">
          <Link to="/" className="font-display text-base font-semibold block mb-2 hover:opacity-80 transition-opacity" style={{ color: '#E91E8C' }}>
            Cellar2Table
          </Link>
          <span className="font-display text-lg font-semibold block" style={{ color: '#F0EBE3' }}>
            {profile?.company_name || profile?.full_name || t('nav.wineries')}
          </span>
          <span className="font-body text-xs" style={{ color: 'rgba(240,235,227,0.40)' }}>{t('dashboard.winery.title')}</span>
        </div>
        <nav className="space-y-1">
          {[t('dashboard.winery.my_lots'), t('dashboard.winery.inquiries'), t('dashboard.buyer.profile')].map(item => (
            <div
              key={item}
              className="px-3 py-2.5 rounded-lg font-body text-sm cursor-pointer transition-colors"
              style={{ color: 'rgba(240,235,227,0.55)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLElement).style.color = '#F0EBE3' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'rgba(240,235,227,0.55)' }}
            >
              {item}
            </div>
          ))}
        </nav>
        <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <button
            onClick={signOut}
            className="w-full font-body text-xs py-1 transition-colors"
            style={{ color: 'rgba(240,235,227,0.35)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E91E8C')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,235,227,0.35)')}
          >
            {t('dashboard.logout')}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto" style={{ background: '#0D0F1E' }}>
        <h1 className="font-display text-3xl mb-2" style={{ color: '#F0EBE3' }}>
          {profile?.company_name || profile?.full_name || t('nav.wineries')}
        </h1>
        <p className="font-body text-sm mb-8" style={{ color: 'rgba(240,235,227,0.40)' }}>{t('dashboard.winery.title')}</p>

        {/* Subscription banner */}
        {!subscriptionActive && (
          <div className="flex items-start gap-4 rounded-xl px-6 py-5 mb-8" style={{ background: 'rgba(212,160,23,0.12)', border: '1px solid rgba(212,160,23,0.20)' }}>
            <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#D4A017' }} />
            <div className="flex-1">
              <p className="font-body font-semibold text-sm mb-1" style={{ color: '#D4A017' }}>
                {t('dashboard.winery.no_subscription')}
              </p>
              <p className="font-body text-xs" style={{ color: 'rgba(240,235,227,0.55)' }}>{t('for_producers.paid_desc')}</p>
            </div>
            <Link to="/contact" className="btn-gold text-sm py-2 px-4 shrink-0">
              Neem contact op
            </Link>
          </div>
        )}

        {/* Stats */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {[
            { icon: Package, label: t('dashboard.winery.my_lots'), value: '0' },
            { icon: Users, label: t('dashboard.winery.inquiries'), value: '0' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="card p-6 text-center">
              <Icon className="w-5 h-5 mx-auto mb-3" style={{ color: '#E91E8C' }} />
              <p className="font-display text-3xl font-bold mb-1" style={{ color: '#D4A017' }}>{value}</p>
              <p className="font-body text-sm" style={{ color: 'rgba(240,235,227,0.50)' }}>{label}</p>
            </div>
          ))}
        </div>

        {/* My lots */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl" style={{ color: '#F0EBE3' }}>{t('dashboard.winery.my_lots')}</h2>
            {subscriptionActive && (
              <button className="btn-gold text-sm py-2 px-5">{t('dashboard.winery.add_lot')}</button>
            )}
          </div>
          <div className="card p-12 text-center">
            <Wine className="w-10 h-10 mx-auto mb-4" style={{ color: 'rgba(240,235,227,0.20)' }} />
            <p className="font-display text-xl italic mb-2" style={{ color: 'rgba(240,235,227,0.25)' }}>Nog geen partijen</p>
            <p className="font-body text-sm" style={{ color: 'rgba(240,235,227,0.35)' }}>Activeer uw abonnement om partijen toe te voegen</p>
          </div>
        </div>

        {/* Inquiries */}
        <div>
          <h2 className="font-display text-xl mb-4" style={{ color: '#F0EBE3' }}>{t('dashboard.winery.inquiries')}</h2>
          <div className="card p-12 text-center">
            <Users className="w-10 h-10 mx-auto mb-4" style={{ color: 'rgba(240,235,227,0.20)' }} />
            <p className="font-display text-xl italic" style={{ color: 'rgba(240,235,227,0.25)' }}>Nog geen aanvragen</p>
          </div>
        </div>
      </main>
    </div>
  )
}
