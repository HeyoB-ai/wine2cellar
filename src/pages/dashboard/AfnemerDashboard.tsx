import { useAuth } from '../../context/AuthContext';
import { Heart, Package, LayoutDashboard, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AfnemerDashboard() {
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
          {['Mijn aanvragen', 'Favorieten', 'Mijn profiel'].map(t => (
            <div key={t} className="px-3 py-2.5 rounded-lg text-sm font-sans text-cream-300 hover:bg-noir-700 cursor-pointer transition-colors">{t}</div>
          ))}
        </nav>
        <div className="pt-8">
          <div className="card-dark p-3 mb-3">
            <p className="text-xs text-cream-200/60 font-sans truncate">{profile?.full_name || profile?.email}</p>
            <p className="text-xs text-gold-500 font-sans">
              {profile?.buyer_type === 'horeca' ? 'Horeca' : 'Particulier'}
            </p>
          </div>
          <button onClick={signOut} className="w-full text-xs text-cream-200/40 hover:text-wine-400 font-sans py-1 transition-colors">Uitloggen</button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <h1 className="font-display text-2xl font-bold text-cream-50 mb-2">
          Welkom, {profile?.full_name || 'Afnemer'}
        </h1>
        <p className="text-cream-200/40 font-sans text-sm mb-10">Uw persoonlijke overzicht.</p>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {[
            { icon: Package, label: 'Aanvragen', value: '0' },
            { icon: Heart, label: 'Favorieten', value: '0' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="card-dark p-6 text-center">
              <Icon className="w-6 h-6 text-gold-400 mx-auto mb-3" />
              <p className="font-display text-3xl font-bold text-cream-50 mb-1">{value}</p>
              <p className="text-sm text-cream-200/60 font-sans">{label}</p>
            </div>
          ))}
        </div>

        {/* Mijn aanvragen */}
        <div className="mb-8">
          <h2 className="font-display text-lg font-semibold text-cream-50 mb-4">Mijn aanvragen</h2>
          <div className="card-dark p-12 text-center">
            <Package className="w-12 h-12 text-noir-600 mx-auto mb-4" />
            <p className="text-cream-200/40 font-sans text-sm mb-4">U heeft nog geen aanvragen ingediend.</p>
            <Link to="/partijen" className="btn-gold text-sm py-2.5 px-6 gap-2">
              Bekijk aanbiedingen <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Favorieten */}
        <div className="mb-8">
          <h2 className="font-display text-lg font-semibold text-cream-50 mb-4">Favoriete partijen</h2>
          <div className="card-dark p-12 text-center">
            <Heart className="w-12 h-12 text-noir-600 mx-auto mb-4" />
            <p className="text-cream-200/40 font-sans text-sm">Nog geen favorieten opgeslagen.</p>
          </div>
        </div>

        {/* CTA card */}
        <div className="card-dark p-8 bg-gradient-to-br from-wine-950/60 to-noir-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-lg font-semibold text-cream-50 mb-1">Bekijk actieve aanbiedingen</h3>
            <p className="text-cream-200/60 font-sans text-sm">Restpartijen en schadepartijen van Europese wijnhuizen.</p>
          </div>
          <Link to="/partijen" className="btn-gold text-sm py-3 px-6 gap-2 shrink-0">
            Naar aanbiedingen <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
