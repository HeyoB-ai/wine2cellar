import { useAuth } from '../../context/AuthContext'
import { Heart, Package, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


export default function AfnemerDashboard() {
  const { profile, signOut } = useAuth()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex pt-16" style={{ background: '#0D0F1E' }}>
      {/* Sidebar */}
      <aside className="w-64 shrink-0 p-6" style={{ background: '#12142A', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mb-8">
          <Link to="/" className="font-display text-base font-semibold block mb-2 hover:opacity-80 transition-opacity" style={{ color: '#E91E8C' }}>
            Cellar2Table
          </Link>
          <span className="font-display text-lg font-semibold block" style={{ color: '#F0EBE3' }}>
            {profile?.full_name || t('dashboard.buyer.title')}
          </span>
          <span className="font-body text-xs" style={{ color: 'rgba(240,235,227,0.40)' }}>
            {profile?.buyer_type === 'horeca'
              ? t('auth.register.buyer_type_horeca')
              : t('auth.register.buyer_type_particulier')}
          </span>
        </div>
        <nav className="space-y-1">
          {[t('dashboard.buyer.my_inquiries'), t('dashboard.buyer.favorites'), t('dashboard.buyer.profile')].map(item => (
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
          {profile?.full_name || t('dashboard.buyer.title')}
        </h1>
        <p className="font-body text-sm mb-10" style={{ color: 'rgba(240,235,227,0.40)' }}>{t('dashboard.buyer.title')}</p>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {[
            { icon: Package, label: t('dashboard.buyer.my_inquiries'), value: '0' },
            { icon: Heart, label: t('dashboard.buyer.favorites'), value: '0' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="card p-6 text-center">
              <Icon className="w-5 h-5 mx-auto mb-3" style={{ color: '#E91E8C' }} />
              <p className="font-display text-3xl font-bold mb-1" style={{ color: '#D4A017' }}>{value}</p>
              <p className="font-body text-sm" style={{ color: 'rgba(240,235,227,0.50)' }}>{label}</p>
            </div>
          ))}
        </div>

        {/* My inquiries */}
        <div className="mb-8">
          <h2 className="font-display text-xl mb-4" style={{ color: '#F0EBE3' }}>{t('dashboard.buyer.my_inquiries')}</h2>
          <div className="card p-12 text-center">
            <Package className="w-10 h-10 mx-auto mb-4" style={{ color: 'rgba(240,235,227,0.20)' }} />
            <p className="font-display text-xl italic mb-4" style={{ color: 'rgba(240,235,227,0.25)' }}>Nog geen aanvragen</p>
            <Link to="/partijen" className="btn-gold text-sm py-2.5 px-6 gap-2">
              {t('nav.offers')} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Favorites */}
        <div className="mb-8">
          <h2 className="font-display text-xl mb-4" style={{ color: '#F0EBE3' }}>{t('dashboard.buyer.favorites')}</h2>
          <div className="card p-12 text-center">
            <Heart className="w-10 h-10 mx-auto mb-4" style={{ color: 'rgba(240,235,227,0.20)' }} />
            <p className="font-display text-xl italic" style={{ color: 'rgba(240,235,227,0.25)' }}>Nog geen favorieten</p>
          </div>
        </div>

        {/* CTA */}
        <div className="card p-8 flex flex-col sm:flex-row items-center justify-between gap-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div>
            <h3 className="font-display text-xl mb-1" style={{ color: '#F0EBE3' }}>{t('lots.title')}</h3>
            <p className="font-body text-sm" style={{ color: 'rgba(240,235,227,0.55)' }}>{t('lots.subtitle')}</p>
          </div>
          <Link to="/partijen" className="btn-gold text-sm py-3 px-6 gap-2 shrink-0">
            {t('nav.offers')} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  )
}
