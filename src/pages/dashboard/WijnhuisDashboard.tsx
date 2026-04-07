import { useAuth } from '../../context/AuthContext';
import { Wine, Package, Users, LayoutDashboard, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WijnhuisDashboard() {
  const { profile, signOut } = useAuth();

  // Assume subscription is not active until implemented
  const subscriptionActive = false;

  return (
    <div className="min-h-screen bg-noir-900 flex">
      <aside className="w-64 shrink-0 bg-noir-800 border-r border-noir-700 p-6">
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-8 h-8 bg-wine-800 rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-gold-400" />
          </div>
          <span className="font-display font-semibold text-cream-50">Wijnhuis</span>
        </div>
        <nav className="space-y-1">
          {['Mijn partijen', 'Aanvragen', 'Profiel'].map(t => (
            <div key={t} className="px-3 py-2.5 rounded-lg text-sm font-sans text-cream-300 hover:bg-noir-700 cursor-pointer transition-colors">{t}</div>
          ))}
        </nav>
        <div className="pt-8">
          <div className="card-dark p-3 mb-3">
            <p className="text-xs text-cream-200/60 font-sans truncate">{profile?.company_name || profile?.full_name}</p>
            <p className="text-xs text-gold-500 font-sans">Wijnhuis</p>
          </div>
          <button onClick={signOut} className="w-full text-xs text-cream-200/40 hover:text-wine-400 font-sans py-1 transition-colors">Uitloggen</button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <h1 className="font-display text-2xl font-bold text-cream-50 mb-2">
          Welkom, {profile?.company_name || profile?.full_name || 'Wijnhuis'}
        </h1>
        <p className="text-cream-200/40 font-sans text-sm mb-8">Beheer uw partijen en aanvragen.</p>

        {/* Subscription banner */}
        {!subscriptionActive && (
          <div className="flex items-start gap-4 bg-gold-900/20 border border-gold-700/50 rounded-xl px-6 py-5 mb-8">
            <AlertCircle className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="font-sans font-semibold text-gold-300 text-sm mb-1">Activeer uw abonnement om partijen aan te bieden</p>
              <p className="text-cream-200/60 font-sans text-xs">Voor €X per maand kunt u actieve partijen plaatsen en aanvragen ontvangen.</p>
            </div>
            <Link to="/contact" className="btn-gold text-sm py-2 px-4 shrink-0">Neem contact op</Link>
          </div>
        )}

        {/* Stats */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {[
            { icon: Package, label: 'Actieve partijen', value: '0' },
            { icon: Users, label: 'Aanvragen', value: '0' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="card-dark p-6 text-center">
              <Icon className="w-6 h-6 text-gold-400 mx-auto mb-3" />
              <p className="font-display text-3xl font-bold text-cream-50 mb-1">{value}</p>
              <p className="text-sm text-cream-200/60 font-sans">{label}</p>
            </div>
          ))}
        </div>

        {/* Mijn partijen */}
        <div className="mb-8">
          <h2 className="font-display text-lg font-semibold text-cream-50 mb-4">Mijn partijen</h2>
          <div className="card-dark p-12 text-center">
            <Wine className="w-12 h-12 text-noir-600 mx-auto mb-4" />
            <p className="text-cream-200/40 font-sans text-sm mb-4">U heeft nog geen partijen aangemeld.</p>
            {subscriptionActive && (
              <button className="btn-gold text-sm py-2.5 px-6">+ Partij toevoegen</button>
            )}
          </div>
        </div>

        {/* Aanvragen */}
        <div>
          <h2 className="font-display text-lg font-semibold text-cream-50 mb-4">Aanvragen</h2>
          <div className="card-dark p-12 text-center">
            <Users className="w-12 h-12 text-noir-600 mx-auto mb-4" />
            <p className="text-cream-200/40 font-sans text-sm">Nog geen aanvragen ontvangen.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
