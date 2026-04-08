import { useAuth } from '../../context/AuthContext'
import { Heart, Package, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function AfnemerDashboard() {
  const { profile, signOut } = useAuth()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-cream flex pt-16">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-surface-low p-6 border-r border-surface-high">
        <div className="mb-8">
          <span className="font-display text-lg font-semibold text-burgundy block">
            {profile?.full_name || t('dashboard.buyer.title')}
          </span>
          <span className="font-body text-xs text-navy/40">
            {profile?.buyer_type === 'horeca'
              ? t('auth.register.buyer_type_horeca')
              : t('auth.register.buyer_type_particulier')}
          </span>
        </div>
        <nav className="space-y-1">
          {[t('dashboard.buyer.my_inquiries'), t('dashboard.buyer.favorites'), t('dashboard.buyer.profile')].map(item => (
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
          {profile?.full_name || t('dashboard.buyer.title')}
        </h1>
        <p className="font-body text-sm text-navy/40 mb-10">{t('dashboard.buyer.title')}</p>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {[
            { icon: Package, label: t('dashboard.buyer.my_inquiries'), value: '0' },
            { icon: Heart, label: t('dashboard.buyer.favorites'), value: '0' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="card p-6 text-center">
              <Icon className="w-5 h-5 text-primary mx-auto mb-3" />
              <p className="font-display text-3xl font-bold text-navy mb-1">{value}</p>
              <p className="font-body text-sm text-navy/50">{label}</p>
            </div>
          ))}
        </div>

        {/* My inquiries */}
        <div className="mb-8">
          <h2 className="font-display text-xl text-navy mb-4">{t('dashboard.buyer.my_inquiries')}</h2>
          <div className="card p-12 text-center">
            <Package className="w-10 h-10 text-outline mx-auto mb-4" />
            <p className="font-display text-xl italic text-navy/30 mb-4">Nog geen aanvragen</p>
            <Link to="/partijen" className="btn-gold text-sm py-2.5 px-6 gap-2">
              {t('nav.offers')} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Favorites */}
        <div className="mb-8">
          <h2 className="font-display text-xl text-navy mb-4">{t('dashboard.buyer.favorites')}</h2>
          <div className="card p-12 text-center">
            <Heart className="w-10 h-10 text-outline mx-auto mb-4" />
            <p className="font-display text-xl italic text-navy/30">Nog geen favorieten</p>
          </div>
        </div>

        {/* CTA */}
        <div className="card p-8 bg-surface-high flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl text-navy mb-1">{t('lots.title')}</h3>
            <p className="font-body text-sm text-navy/60">{t('lots.subtitle')}</p>
          </div>
          <Link to="/partijen" className="btn-gold text-sm py-3 px-6 gap-2 shrink-0">
            {t('nav.offers')} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  )
}
