import { useAuth } from '../../context/AuthContext';
import { Wine, Package, User, LayoutDashboard } from 'lucide-react';

export default function SupplierDashboard() {
  const { profile, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-noir-900 flex">
      <aside className="w-64 shrink-0 bg-noir-800 border-r border-noir-700 p-6">
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-8 h-8 bg-wine-800 rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-gold-400" />
          </div>
          <span className="font-display font-semibold text-cream-50">Producent</span>
        </div>
        <nav className="space-y-1">
          {['Mijn Wijnen', 'Bestellingen', 'Profiel'].map(t => (
            <div key={t} className="px-3 py-2.5 rounded-lg text-sm font-sans text-cream-300 hover:bg-noir-700 cursor-pointer transition-colors">{t}</div>
          ))}
        </nav>
        <div className="pt-8">
          <div className="card-dark p-3 mb-3">
            <p className="text-xs text-cream-200/60 font-sans truncate">{profile?.company_name || profile?.full_name}</p>
            <p className="text-xs text-gold-500 font-sans">Producent</p>
          </div>
          <button onClick={signOut} className="w-full text-xs text-cream-200/40 hover:text-wine-400 font-sans py-1 transition-colors">Uitloggen</button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="font-display text-2xl font-bold text-cream-50 mb-2">
          Welkom, {profile?.company_name || profile?.full_name || 'Producent'}
        </h1>
        <p className="text-cream-200/40 font-sans text-sm mb-10">Beheer uw wijnen en bestellingen.</p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Wine, label: 'Wijnen', value: '0' },
            { icon: Package, label: 'Bestellingen', value: '0' },
            { icon: User, label: 'Klanten', value: '0' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="card-dark p-6 text-center">
              <Icon className="w-6 h-6 text-gold-400 mx-auto mb-3" />
              <p className="font-display text-3xl font-bold text-cream-50 mb-1">{value}</p>
              <p className="text-sm text-cream-200/60 font-sans">{label}</p>
            </div>
          ))}
        </div>

        <div className="card-dark p-12 text-center">
          <Wine className="w-12 h-12 text-noir-600 mx-auto mb-4" />
          <p className="text-cream-200/40 font-sans text-sm mb-4">U heeft nog geen wijnen toegevoegd.</p>
          <button className="btn-gold text-sm py-2.5 px-6">+ Wijn toevoegen</button>
        </div>
      </main>
    </div>
  );
}
