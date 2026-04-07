import { useAuth } from '../../context/AuthContext';
import { Heart, Package, User, LayoutDashboard } from 'lucide-react';

export default function CustomerDashboard() {
  const { profile, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-noir-900 flex">
      <aside className="w-64 shrink-0 bg-noir-800 border-r border-noir-700 p-6">
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-8 h-8 bg-wine-800 rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-gold-400" />
          </div>
          <span className="font-display font-semibold text-cream-50">Mijn account</span>
        </div>
        <nav className="space-y-1">
          {['Favorieten', 'Bestellingen', 'Mijn profiel'].map(t => (
            <div key={t} className="px-3 py-2.5 rounded-lg text-sm font-sans text-cream-300 hover:bg-noir-700 cursor-pointer transition-colors">{t}</div>
          ))}
        </nav>
        <div className="pt-8">
          <div className="card-dark p-3 mb-3">
            <p className="text-xs text-cream-200/60 font-sans truncate">{profile?.full_name || profile?.email}</p>
            <p className="text-xs text-gold-500 font-sans">klant</p>
          </div>
          <button onClick={signOut} className="w-full text-xs text-cream-200/40 hover:text-wine-400 font-sans py-1 transition-colors">Uitloggen</button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="font-display text-2xl font-bold text-cream-50 mb-2">
          Welkom, {profile?.full_name || 'Wijnliefhebber'}
        </h1>
        <p className="text-cream-200/40 font-sans text-sm mb-10">Uw persoonlijke wijnpagina.</p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Heart, label: 'Favorieten', value: '0' },
            { icon: Package, label: 'Bestellingen', value: '0' },
            { icon: User, label: 'Profiel', value: '✓' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="card-dark p-6 text-center">
              <Icon className="w-6 h-6 text-gold-400 mx-auto mb-3" />
              <p className="font-display text-3xl font-bold text-cream-50 mb-1">{value}</p>
              <p className="text-sm text-cream-200/60 font-sans">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-dark p-8 text-center">
            <Heart className="w-10 h-10 text-noir-600 mx-auto mb-3" />
            <p className="text-cream-200/40 font-sans text-sm">Nog geen favorieten opgeslagen.</p>
          </div>
          <div className="card-dark p-8 text-center">
            <Package className="w-10 h-10 text-noir-600 mx-auto mb-3" />
            <p className="text-cream-200/40 font-sans text-sm">Nog geen bestellingen geplaatst.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
