import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wine, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { signIn, profile } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await signIn(email, password);
    if (error) {
      setError('Onjuist e-mailadres of wachtwoord.');
      setLoading(false);
      return;
    }
    // Slight delay to allow profile to load
    setTimeout(() => {
      const role = profile?.role;
      if (role === 'admin') navigate('/dashboard/admin');
      else if (role === 'supplier') navigate('/dashboard/supplier');
      else navigate('/dashboard/customer');
    }, 500);
  }

  return (
    <div className="min-h-screen bg-noir-900 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 bg-wine-800 rounded-xl flex items-center justify-center">
              <Wine className="w-6 h-6 text-gold-400" />
            </div>
            <span className="font-display text-2xl font-semibold text-cream-50">Cellar2Table</span>
          </Link>
          <h1 className="font-display text-3xl font-bold text-cream-50 mb-2">Welkom terug</h1>
          <p className="text-cream-200/60 font-sans text-sm">Log in op uw account</p>
        </div>

        <div className="card-dark p-8">
          {error && (
            <div className="flex items-center gap-2.5 bg-wine-950/60 border border-wine-800 rounded-lg px-4 py-3 mb-6">
              <AlertCircle className="w-4 h-4 text-wine-400 shrink-0" />
              <p className="text-sm text-wine-300 font-sans">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="label-dark">E-mailadres</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="input-dark" placeholder="uw@email.nl" required />
            </div>
            <div>
              <label className="label-dark">Wachtwoord</label>
              <div className="relative">
                <input type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} className="input-dark pr-10" placeholder="••••••••" required />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-noir-500 hover:text-cream-300">
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading} className="btn-gold w-full py-3 mt-2 disabled:opacity-60">
              {loading ? 'Inloggen...' : 'Inloggen'}
            </button>
          </form>

          <p className="text-center text-sm text-cream-200/60 font-sans mt-6">
            Nog geen account?{' '}
            <Link to="/register" className="text-gold-400 hover:text-gold-300 font-medium">Registreer hier</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
