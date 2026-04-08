import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { producers } from '../../data/producers';
import { Users, Package, TrendingUp, Grape, LayoutDashboard } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AdminDashboard() {
  const { profile, signOut } = useAuth();
  const { t } = useTranslation();

  const TABS = [
    t('dashboard.admin.tabs.overview'),
    t('dashboard.admin.tabs.wineries'),
    t('dashboard.admin.tabs.lots'),
    t('dashboard.admin.tabs.users'),
    t('dashboard.admin.tabs.subscriptions'),
  ] as const;

  type TabLabel = typeof TABS[number];
  const [tab, setTab] = useState<TabLabel>(TABS[0]);

  return (
    <div className="min-h-screen bg-noir-900 flex">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-noir-800 border-r border-noir-700 p-6">
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-8 h-8 bg-wine-800 rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-gold-400" />
          </div>
          <span className="font-display font-semibold text-cream-50">{t('dashboard.admin.title')}</span>
        </div>
        <nav className="space-y-1">
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-sans transition-colors ${tab === t ? 'bg-wine-800 text-cream-50' : 'text-cream-300 hover:bg-noir-700'}`}>
              {t}
            </button>
          ))}
        </nav>
        <div className="mt-auto pt-8">
          <div className="card-dark p-3 mb-3">
            <p className="text-xs text-cream-200/60 font-sans truncate">{profile?.full_name || 'Admin'}</p>
            <p className="text-xs text-gold-500 font-sans">{t('common.active')}</p>
          </div>
          <button onClick={signOut} className="w-full text-xs text-cream-200/40 hover:text-wine-400 font-sans py-1 transition-colors">{t('dashboard.logout')}</button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="font-display text-2xl font-bold text-cream-50 mb-8">{tab}</h1>

        {tab === TABS[0] && (
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { icon: Grape, label: t('nav.wineries'), value: producers.length, color: 'text-wine-400' },
              { icon: Users, label: t('dashboard.buyer.my_inquiries'), value: '0', color: 'text-gold-400' },
              { icon: TrendingUp, label: t('dashboard.winery.my_lots'), value: '0', color: 'text-green-400' },
              { icon: Package, label: t('dashboard.admin.tabs.subscriptions'), value: '0', color: 'text-blue-400' },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="card-dark p-6">
                <Icon className={`w-6 h-6 ${color} mb-3`} />
                <p className="font-display text-3xl font-bold text-cream-50 mb-1">{value}</p>
                <p className="text-sm text-cream-200/60 font-sans">{label}</p>
              </div>
            ))}
          </div>
        )}

        {tab === TABS[1] && (
          <div className="card-dark overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-noir-700">
                  {['Naam', t('producer_detail.region'), t('producer_detail.country'), t('dashboard.admin.tabs.subscriptions'), 'Status'].map(h => (
                    <th key={h} className="text-left px-6 py-4 text-xs font-sans font-semibold text-cream-200/40 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-noir-700">
                {producers.map(p => (
                  <tr key={p.id} className="hover:bg-noir-700/50 transition-colors">
                    <td className="px-6 py-4 font-sans font-medium text-cream-100 text-sm">{p.name}</td>
                    <td className="px-6 py-4 text-sm text-cream-200/60 font-sans">{p.region}</td>
                    <td className="px-6 py-4 text-sm text-cream-200/60 font-sans">{p.country}</td>
                    <td className="px-6 py-4"><span className="inline-flex px-2.5 py-1 rounded-full text-xs bg-noir-700 text-cream-400 border border-noir-600">{t('for_producers.free_account')}</span></td>
                    <td className="px-6 py-4"><span className="inline-flex px-2.5 py-1 rounded-full text-xs bg-green-900/40 text-green-400 border border-green-800/50">{t('common.active')}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {(tab === TABS[2] || tab === TABS[3] || tab === TABS[4]) && (
          <div className="card-dark p-16 text-center">
            <p className="text-cream-200/40 font-sans text-sm">{t('common.loading')}</p>
          </div>
        )}
      </main>
    </div>
  );
}
