import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wine, Menu, X, ChevronDown, User, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dashboardPath = profile?.role === 'admin'
    ? '/dashboard/admin'
    : profile?.role === 'supplier'
    ? '/dashboard/supplier'
    : '/dashboard/customer';

  const roleLabel = profile?.role === 'admin' ? 'Beheerder' : profile?.role === 'supplier' ? 'Producent' : 'Klant';

  async function handleSignOut() {
    await signOut();
    navigate('/');
    setDropdownOpen(false);
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/producers', label: 'Wijnhuizen' },
    { to: '/for-producers', label: 'Voor Producenten' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-noir-900/95 backdrop-blur-sm border-b border-noir-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-wine-800 rounded-lg flex items-center justify-center">
              <Wine className="w-5 h-5 text-gold-400" />
            </div>
            <span className="font-display text-xl font-semibold text-cream-50">Cellar2Table</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="px-4 py-2 text-sm font-sans text-cream-200 hover:text-gold-400 transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Auth */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-noir-800 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-wine-800 flex items-center justify-center">
                    <User className="w-4 h-4 text-gold-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-sans font-medium text-cream-100 leading-tight">{profile?.full_name || user.email?.split('@')[0]}</p>
                    <p className="text-xs text-gold-500 leading-tight">{roleLabel}</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-cream-400" />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-noir-800 border border-noir-600 rounded-xl shadow-2xl py-1">
                    <Link to={dashboardPath} onClick={() => setDropdownOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-cream-200 hover:bg-noir-700 hover:text-gold-400 transition-colors">
                      <LayoutDashboard className="w-4 h-4" /> Dashboard
                    </Link>
                    <hr className="border-noir-600 my-1" />
                    <button onClick={handleSignOut} className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-cream-200 hover:bg-noir-700 hover:text-wine-400 transition-colors">
                      <LogOut className="w-4 h-4" /> Uitloggen
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="text-sm font-sans text-cream-200 hover:text-gold-400 transition-colors px-3 py-2">Inloggen</Link>
                <Link to="/register" className="btn-gold text-sm py-2 px-5">Registreren</Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-cream-300 hover:text-gold-400">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-noir-900 border-t border-noir-700 px-4 py-4 space-y-2">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-cream-200 hover:text-gold-400 text-sm font-sans">
              {l.label}
            </Link>
          ))}
          <hr className="border-noir-700 my-2" />
          {user ? (
            <>
              <Link to={dashboardPath} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-gold-400 text-sm font-sans">Dashboard</Link>
              <button onClick={handleSignOut} className="block w-full text-left px-3 py-2.5 text-wine-400 text-sm font-sans">Uitloggen</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-cream-200 text-sm font-sans">Inloggen</Link>
              <Link to="/register" onClick={() => setMobileOpen(false)} className="block btn-gold text-center text-sm py-2.5 mt-2">Registreren</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
