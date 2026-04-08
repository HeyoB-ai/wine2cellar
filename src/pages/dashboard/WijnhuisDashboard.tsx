import { useAuth } from '../../context/AuthContext';
import { Wine, Package, Users, LayoutDashboard, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function WijnhuisDashboard() {
  const { profile, signOut } = useAuth();
  const { t } = useTranslation();

  // Assume subscription is not active until implemented
  const subscriptionActive = false;

  return (
    <div className="min-h-screen bg-noir-900 flex">
      <aside className="w-64 shrink-0 bg-noir-800 border-r border-noir-700 p-6">
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-8 h-8 bg-wine-800 rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-gold-400" />
          </div>
          <span className="font-display font-semibold text-cream-50">{t('dashboard.winery.title')}</span>
        </div>
        <nav className="space-y-1">
          {[t('dashboard.winery.my_lots'), t('dashboard.winery.inquiries'), t('dashboard.buyer.profile')].map(item => (
            <div key={item} className="px-3 py-2.5 rounded-lg text-sm font-sans text-cream-300 hover:bg-noir-700 cursor-pointer transition-colors">{item}</div>
          ))}
        </nav>
        <div className="pt-8">
          <div className="card-dark p-3 mb-3">
            <p className="text-xs text-cream-200/60 font-sans truncate">{profile?.company_name || profile?.full_name}</p>
            <p className="text-xs text-gold-500 font-sans">{t('nav.wineries')}</p>
          </div>
          <button onClick={signOut} className="w-full text-xs text-cream-200/40 hover:text-wine-400 font-sans py-1 transition-colors">{t('dashboard.logout')}</button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <h1 className="font-display text-2xl font-bold text-cream-50 mb-2">
          {profile?.company_name || profile?.full_name || t('nav.wineries')}
        </h1>
        <p className="text-cream-200/40 font-sans text-sm mb-8">{t('dashboard.winery.title')}</p>

        {/* Subscription banner */}
        {!subscriptionActive && (
          <div className="flex items-start gap-4 bg-gold-900/20 border border-gold-700/50 rounded-xl px-6 py-5 mb-8">
            <AlertCircle className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="font-sans font-semibold text-gold-300 text-sm mb-1">{t('dashboard.winery.no_subscription')}</p>
              <p className="text-cream-200/60 font-sans text-xs">{t('for_producers.paid_desc')}</p>
            </div>
            <Link to="/contact" className="btn-gold text-sm py-2 px-4 shrink-0">{t('contact.title')}</Link>
          </div>
        )}

        {/* Stats */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {[
            { icon: Package, label: t('dashboard.winery.my_lots'), value: '0' },
            { icon: Users, label: t('dashboard.winery.inquiries'), value: '0' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="card-dark p-6 text-center">
              <Icon className="w-6 h-6 text-gold-400 mx-auto mb-3" />
              <p className="font-display text-3xl font-bold text-cream-50 mb-1">{value}</p>
              <p className="text-sm text-cream-200/60 font-sans">{label}</p>
            </div>
          ))}
        </div>

        {/* My lots */}
        <div className="mb-8">
          <h2 className="font-display text-lg font-semibold text-cream-50 mb-4">{t('dashboard.winery.my_lots')}</h2>
          <div className="card-dark p-12 text-center">
            <Wine className="w-12 h-12 text-noir-600 mx-auto mb-4" />
            <p className="text-cream-200/40 font-sans text-sm mb-4">{t('common.loading')}</p>
            {subscriptionActive && (
              <button className="btn-gold text-sm py-2.5 px-6">{t('dashboard.winery.add_lot')}</button>
            )}
          </div>
        </div>

        {/* Inquiries */}
        <div>
          <h2 className="font-display text-lg font-semibold text-cream-50 mb-4">{t('dashboard.winery.inquiries')}</h2>
          <div className="card-dark p-12 text-center">
            <Users className="w-12 h-12 text-noir-600 mx-auto mb-4" />
            <p className="text-cream-200/40 font-sans text-sm">{t('common.loading')}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
