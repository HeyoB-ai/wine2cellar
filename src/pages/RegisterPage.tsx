import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wine, Truck, CheckCircle2, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import type { UserRole } from '../context/AuthContext';

type BuyerType = 'particulier' | 'horeca';

export default function RegisterPage() {
  const { signUp } = useAuth();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<UserRole>('afnemer');
  const [buyerType, setBuyerType] = useState<BuyerType>('particulier');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyKvk, setCompanyKvk] = useState('');
  const [phone, setPhone] = useState('');
  const [wineryCountry, setWineryCountry] = useState('Frankrijk');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await signUp(email, password, {
      role,
      fullName,
      companyName: role === 'wijnhuis' ? companyName : undefined,
      buyerType: role === 'afnemer' ? buyerType : undefined,
      companyKvk: role === 'afnemer' && buyerType === 'horeca' ? companyKvk : undefined,
      phone: role === 'afnemer' && buyerType === 'horeca' ? phone : undefined,
    });
    if (error) {
      setError(error.message || 'Registratie mislukt.');
      setLoading(false);
      return;
    }
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="min-h-screen bg-noir-900 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <CheckCircle2 className="w-16 h-16 text-gold-400 mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold text-cream-50 mb-3">Registratie gelukt!</h2>
          <p className="text-cream-200/60 font-sans mb-8">Controleer uw e-mail voor een bevestigingslink.</p>
          <Link to="/login" className="btn-gold">Ga naar inloggen</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-noir-900 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 bg-wine-800 rounded-xl flex items-center justify-center">
              <Wine className="w-6 h-6 text-gold-400" />
            </div>
            <span className="font-display text-2xl font-semibold text-cream-50">Cellar2Table</span>
          </Link>
          <h1 className="font-display text-3xl font-bold text-cream-50 mb-2">Account aanmaken</h1>
          <p className="text-cream-200/60 font-sans text-sm">Stap {step} van 2</p>
        </div>

        <div className="card-dark p-8">
          {step === 1 ? (
            <div>
              <h2 className="font-display text-xl font-semibold text-cream-50 mb-6">Ik ben een...</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => setRole('afnemer')}
                  className={`p-5 rounded-xl border text-left transition-all ${role === 'afnemer' ? 'border-gold-500 bg-gold-500/10' : 'border-noir-600 bg-noir-800 hover:border-noir-500'}`}
                >
                  <Truck className={`w-8 h-8 mb-3 ${role === 'afnemer' ? 'text-gold-400' : 'text-cream-400'}`} />
                  <p className={`font-sans font-semibold text-sm mb-1 ${role === 'afnemer' ? 'text-gold-300' : 'text-cream-100'}`}>Afnemer</p>
                  <p className="text-xs text-cream-200/50 font-sans">Ik wil restpartijen inkopen</p>
                </button>
                <button
                  onClick={() => setRole('wijnhuis')}
                  className={`p-5 rounded-xl border text-left transition-all ${role === 'wijnhuis' ? 'border-gold-500 bg-gold-500/10' : 'border-noir-600 bg-noir-800 hover:border-noir-500'}`}
                >
                  <Wine className={`w-8 h-8 mb-3 ${role === 'wijnhuis' ? 'text-gold-400' : 'text-cream-400'}`} />
                  <p className={`font-sans font-semibold text-sm mb-1 ${role === 'wijnhuis' ? 'text-gold-300' : 'text-cream-100'}`}>Wijnhuis</p>
                  <p className="text-xs text-cream-200/50 font-sans">Ik vertegenwoordig een wijnhuis</p>
                </button>
              </div>

              {/* Sub-choice for afnemer */}
              {role === 'afnemer' && (
                <div className="mb-6">
                  <label className="label-dark mb-2">Ik ben een...</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setBuyerType('particulier')}
                      className={`px-4 py-3 rounded-lg border text-sm font-sans transition-all ${buyerType === 'particulier' ? 'border-gold-500 bg-gold-500/10 text-gold-300' : 'border-noir-600 bg-noir-800 text-cream-300 hover:border-noir-500'}`}
                    >
                      Particulier
                    </button>
                    <button
                      onClick={() => setBuyerType('horeca')}
                      className={`px-4 py-3 rounded-lg border text-sm font-sans transition-all ${buyerType === 'horeca' ? 'border-gold-500 bg-gold-500/10 text-gold-300' : 'border-noir-600 bg-noir-800 text-cream-300 hover:border-noir-500'}`}
                    >
                      Horeca / zakelijk
                    </button>
                  </div>
                </div>
              )}

              {/* Winery country for wijnhuis */}
              {role === 'wijnhuis' && (
                <div className="mb-6">
                  <label className="label-dark">Naam wijnhuis</label>
                  <input
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                    className="input-dark mb-3"
                    placeholder="Château Beaulieu"
                  />
                  <label className="label-dark">Land</label>
                  <select
                    value={wineryCountry}
                    onChange={e => setWineryCountry(e.target.value)}
                    className="input-dark"
                  >
                    <option value="Frankrijk">Frankrijk</option>
                    <option value="Italië">Italië</option>
                    <option value="Duitsland">Duitsland</option>
                    <option value="Spanje">Spanje</option>
                  </select>
                </div>
              )}

              <button onClick={() => setStep(2)} className="btn-gold w-full">Volgende stap</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-center gap-2.5 bg-wine-950/60 border border-wine-800 rounded-lg px-4 py-3">
                  <AlertCircle className="w-4 h-4 text-wine-400 shrink-0" />
                  <p className="text-sm text-wine-300 font-sans">{error}</p>
                </div>
              )}
              <div>
                <label className="label-dark">Volledige naam</label>
                <input value={fullName} onChange={e => setFullName(e.target.value)} className="input-dark" placeholder="Jan de Vries" required />
              </div>
              <div>
                <label className="label-dark">E-mailadres</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="input-dark" placeholder="uw@email.nl" required />
              </div>
              <div>
                <label className="label-dark">Wachtwoord</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="input-dark" placeholder="Minimaal 6 tekens" minLength={6} required />
              </div>
              {role === 'afnemer' && buyerType === 'horeca' && (
                <>
                  <div>
                    <label className="label-dark">KVK-nummer</label>
                    <input value={companyKvk} onChange={e => setCompanyKvk(e.target.value)} className="input-dark" placeholder="12345678" required />
                  </div>
                  <div>
                    <label className="label-dark">Telefoonnummer</label>
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="input-dark" placeholder="+31 6 12345678" required />
                  </div>
                </>
              )}
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setStep(1)} className="btn-outline flex-1">Terug</button>
                <button type="submit" disabled={loading} className="btn-gold flex-1 disabled:opacity-60">
                  {loading ? 'Bezig...' : 'Account aanmaken'}
                </button>
              </div>
            </form>
          )}
          <p className="text-center text-sm text-cream-200/60 font-sans mt-6">
            Al een account? <Link to="/login" className="text-gold-400 hover:text-gold-300 font-medium">Inloggen</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
