import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { producers } from '../../data/producers'
import { Users, Package, TrendingUp, Grape } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function AdminDashboard() {
  const { profile, signOut } = useAuth()
  const { t } = useTranslation()

  const TABS = [
    t('dashboard.admin.tabs.overview'),
    t('dashboard.admin.tabs.wineries'),
    t('dashboard.admin.tabs.lots'),
    t('dashboard.admin.tabs.users'),
    t('dashboard.admin.tabs.subscriptions'),
  ] as const

  type TabLabel = typeof TABS[number]
  const [tab, setTab] = useState<TabLabel>(TABS[0])

  return (
    <div className="min-h-screen flex pt-16" style={{ background: '#0D0F1E' }}>
      {/* Sidebar */}
      <aside className="w-64 shrink-0 p-6" style={{ background: '#12142A', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mb-8">
          <span className="font-display text-lg font-semibold block" style={{ color: '#E91E8C' }}>{t('dashboard.admin.title')}</span>
          <span className="font-body text-xs" style={{ color: 'rgba(240,235,227,0.40)' }}>{profile?.full_name || 'Admin'}</span>
        </div>
        <nav className="space-y-1">
          {TABS.map(tabItem => (
            <button
              key={tabItem}
              onClick={() => setTab(tabItem)}
              className="w-full text-left px-3 py-2.5 rounded-lg font-body text-sm transition-colors"
              style={{
                background: tab === tabItem ? 'rgba(233,30,140,0.15)' : 'transparent',
                color: tab === tabItem ? '#E91E8C' : 'rgba(240,235,227,0.55)',
                fontWeight: tab === tabItem ? 600 : 400,
              }}
            >
              {tabItem}
            </button>
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
        <h1 className="font-display text-3xl mb-8" style={{ color: '#F0EBE3' }}>{tab}</h1>

        {tab === TABS[0] && (
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { icon: Grape, label: t('nav.wineries'), value: producers.length },
              { icon: Users, label: t('dashboard.buyer.my_inquiries'), value: 0 },
              { icon: TrendingUp, label: t('dashboard.winery.my_lots'), value: 0 },
              { icon: Package, label: t('dashboard.admin.tabs.subscriptions'), value: 0 },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="card p-6">
                <Icon className="w-5 h-5 mb-3" style={{ color: '#E91E8C' }} />
                <p className="font-display text-3xl font-bold mb-1" style={{ color: '#D4A017' }}>{value}</p>
                <p className="font-body text-sm" style={{ color: 'rgba(240,235,227,0.50)' }}>{label}</p>
              </div>
            ))}
          </div>
        )}

        {tab === TABS[1] && (
          <div className="card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                  {['Naam', t('producer_detail.region'), t('producer_detail.country'), 'Abonnement', 'Status'].map(h => (
                    <th key={h} className="text-left px-6 py-4 font-body text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(240,235,227,0.40)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {producers.map((p, i) => (
                  <tr key={p.id} style={{ background: i % 2 === 0 ? '#161829' : 'rgba(255,255,255,0.02)' }}>
                    <td className="px-6 py-4 font-body font-medium text-sm" style={{ color: '#F0EBE3' }}>{p.name}</td>
                    <td className="px-6 py-4 font-body text-sm" style={{ color: 'rgba(240,235,227,0.55)' }}>{p.region}</td>
                    <td className="px-6 py-4 font-body text-sm" style={{ color: 'rgba(240,235,227,0.55)' }}>{p.country}</td>
                    <td className="px-6 py-4">
                      <span className="font-body text-xs px-2.5 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(240,235,227,0.55)' }}>
                        {t('for_producers.free_account')}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-body text-xs px-2.5 py-1 rounded-full" style={{ background: 'rgba(212,160,23,0.15)', color: '#D4A017' }}>
                        {t('common.active')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {(tab === TABS[2] || tab === TABS[3] || tab === TABS[4]) && (
          <div className="card p-16 text-center">
            <p className="font-display text-2xl italic" style={{ color: 'rgba(240,235,227,0.25)' }}>{t('common.loading')}</p>
          </div>
        )}
      </main>
    </div>
  )
}
