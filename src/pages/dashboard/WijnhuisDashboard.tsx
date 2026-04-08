import { useAuth } from '../../context/AuthContext'
import { Wine, Package, Users, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function WijnhuisDashboard() {
  const { profile, signOut } = useAuth()
  const { t } = useTranslation()
  const subscriptionActive = false

  return (
    <div className="min-h-screen bg-cream flex pt-16">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-surface-low p-6 border-r border-surface-high">
        <div className="mb-8">
          <span className="font-display text-lg font-semibold text-burgundy block">
            {profile?.company_name || profile?.full_name || t('nav.wineries')}
          </span>
          <span className="font-body text-xs text-navy/40">{t('dashboard.winery.title')}</span>
        </div>
        <nav className="space-y-1">
          {[t('dashboard.winery.my_lots'), t('dashboard.winery.inquiries'), t('dashboard.buyer.profile')].map(item => (
            <div
              key={item}
              className="px-3 py-2.5 rounded-lg font-body text-sm text-navy/60 hover:bg-surface-high cursor-pointer transition-colors"
            >
              {item}
            </div>
          ))}
        </nav>
        <div className="mt-8 pt-6 border-t border-surface-high">
          <button
            onClick={signOut}
            className="w-full font-body text-xs text-navy/40 hover:text-primary transition-colors py-1"
          >
            {t('dashboard.logout')}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="font-display text-3xl text-navy mb-2">
          {profile?.company_name || profile?.full_name || t('nav.wineries')}
        </h1>
        <p className="font-body text-sm text-navy/40 mb-8">{t('dashboard.winery.title')}</p>

        {/* Subscription banner */}
        {!subscriptionActive && (
          <div className="flex items-start gap-4 bg-secondary-container rounded-xl px-6 py-5 mb-8">
            <AlertCircle className="w-5 h-5 text-secondary-on mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="font-body font-semibold text-secondary-on text-sm mb-1">
                {t('dashboard.winery.no_subscription')}
              </p>
              <p className="font-body text-navy/60 text-xs">{t('for_producers.paid_desc')}</p>
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
              <Icon className="w-5 h-5 text-primary mx-auto mb-3" />
              <p className="font-display text-3xl font-bold text-navy mb-1">{value}</p>
              <p className="font-body text-sm text-navy/50">{label}</p>
            </div>
          ))}
        </div>

        {/* My lots */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl text-navy">{t('dashboard.winery.my_lots')}</h2>
            {subscriptionActive && (
              <button className="btn-gold text-sm py-2 px-5">{t('dashboard.winery.add_lot')}</button>
            )}
          </div>
          <div className="card p-12 text-center">
            <Wine className="w-10 h-10 text-outline mx-auto mb-4" />
            <p className="font-display text-xl italic text-navy/30 mb-2">Nog geen partijen</p>
            <p className="font-body text-sm text-navy/40">Activeer uw abonnement om partijen toe te voegen</p>
          </div>
        </div>

        {/* Inquiries */}
        <div>
          <h2 className="font-display text-xl text-navy mb-4">{t('dashboard.winery.inquiries')}</h2>
          <div className="card p-12 text-center">
            <Users className="w-10 h-10 text-outline mx-auto mb-4" />
            <p className="font-display text-xl italic text-navy/30">Nog geen aanvragen</p>
          </div>
        </div>
      </main>
    </div>
  )
}
