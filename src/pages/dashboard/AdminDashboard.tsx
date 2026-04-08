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
    <div className="min-h-screen bg-cream flex pt-16">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-surface-low p-6 border-r border-surface-high">
        <div className="mb-8">
          <span className="font-display text-lg font-semibold text-burgundy block">{t('dashboard.admin.title')}</span>
          <span className="font-body text-xs text-navy/40">{profile?.full_name || 'Admin'}</span>
        </div>
        <nav className="space-y-1">
          {TABS.map(tabItem => (
            <button
              key={tabItem}
              onClick={() => setTab(tabItem)}
              className={`w-full text-left px-3 py-2.5 rounded-lg font-body text-sm transition-colors ${
                tab === tabItem
                  ? 'bg-primary-container text-primary font-semibold'
                  : 'text-navy/60 hover:bg-surface-high'
              }`}
            >
              {tabItem}
            </button>
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
        <h1 className="font-display text-3xl text-navy mb-8">{tab}</h1>

        {tab === TABS[0] && (
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { icon: Grape, label: t('nav.wineries'), value: producers.length },
              { icon: Users, label: t('dashboard.buyer.my_inquiries'), value: 0 },
              { icon: TrendingUp, label: t('dashboard.winery.my_lots'), value: 0 },
              { icon: Package, label: t('dashboard.admin.tabs.subscriptions'), value: 0 },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="card p-6">
                <Icon className="w-5 h-5 text-primary mb-3" />
                <p className="font-display text-3xl font-bold text-navy mb-1">{value}</p>
                <p className="font-body text-sm text-navy/50">{label}</p>
              </div>
            ))}
          </div>
        )}

        {tab === TABS[1] && (
          <div className="card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-surface-high">
                  {['Naam', t('producer_detail.region'), t('producer_detail.country'), 'Abonnement', 'Status'].map(h => (
                    <th key={h} className="text-left px-6 py-4 font-body text-xs font-semibold text-navy/40 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {producers.map((p, i) => (
                  <tr key={p.id} className={i % 2 === 0 ? 'bg-cream' : 'bg-surface-low'}>
                    <td className="px-6 py-4 font-body font-medium text-navy text-sm">{p.name}</td>
                    <td className="px-6 py-4 font-body text-sm text-navy/60">{p.region}</td>
                    <td className="px-6 py-4 font-body text-sm text-navy/60">{p.country}</td>
                    <td className="px-6 py-4">
                      <span className="font-body text-xs px-2.5 py-1 rounded-full bg-surface-high text-navy/60">
                        {t('for_producers.free_account')}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-body text-xs px-2.5 py-1 rounded-full bg-secondary-container text-secondary-on">
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
            <p className="font-display text-2xl italic text-navy/30">{t('common.loading')}</p>
          </div>
        )}
      </main>
    </div>
  )
}
