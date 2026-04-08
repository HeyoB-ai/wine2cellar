import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wine, Truck, CheckCircle2, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import type { UserRole } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

type BuyerType = 'particulier' | 'horeca';

export default function RegisterPage() {
  const { signUp } = useAuth();
  const { t } = useTranslation();
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
      <div className="min-h-screen flex items-center justify-center px-4 pt-16" style={{ background: '#0D0F1E' }}>
        <div className="text-center max-w-md">
          <CheckCircle2 className="w-16 h-16 mx-auto mb-6" style={{ color: '#D4A017' }} />
          <h2 className="font-display text-3xl mb-3" style={{ color: '#F0EBE3' }}>{t('auth.register.success_title')}</h2>
          <p className="font-body mb-8" style={{ color: 'rgba(240,235,227,0.55)' }}>{t('auth.register.success_text', { email })}</p>
          <Link to="/login" className="btn-gold">{t('auth.register.success_btn')}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16" style={{ background: '#0D0F1E' }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="font-display text-3xl font-bold block mb-4" style={{ color: '#E91E8C' }}>
            Cellar2Table
          </Link>
          <h1 className="font-display text-2xl mb-2" style={{ color: '#F0EBE3' }}>{t('auth.register.title')}</h1>
          <p className="font-body text-sm" style={{ color: 'rgba(240,235,227,0.45)' }}>{t('auth.register.step', { step })}</p>
        </div>

        <div className="rounded-2xl p-8" style={{ background: '#161829', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
          {step === 1 ? (
            <div>
              <h2 className="font-display text-xl mb-6" style={{ color: '#F0EBE3' }}>{t('auth.register.iam')}</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => setRole('afnemer')}
                  className="card p-5 text-left transition-all"
                  style={{
                    border: role === 'afnemer' ? '2px solid rgba(233,30,140,0.40)' : '2px solid transparent',
                    background: role === 'afnemer' ? 'rgba(233,30,140,0.08)' : '#161829',
                  }}
                >
                  <Truck className="w-8 h-8 mb-3" style={{ color: role === 'afnemer' ? '#E91E8C' : 'rgba(240,235,227,0.35)' }} />
                  <p className="font-body font-semibold text-sm mb-1" style={{ color: role === 'afnemer' ? '#E91E8C' : '#F0EBE3' }}>
                    {t('auth.register.buyer_label')}
                  </p>
                  <p className="font-body text-xs" style={{ color: 'rgba(240,235,227,0.45)' }}>{t('auth.register.buyer_desc')}</p>
                </button>
                <button
                  onClick={() => setRole('wijnhuis')}
                  className="card p-5 text-left transition-all"
                  style={{
                    border: role === 'wijnhuis' ? '2px solid rgba(233,30,140,0.40)' : '2px solid transparent',
                    background: role === 'wijnhuis' ? 'rgba(233,30,140,0.08)' : '#161829',
                  }}
                >
                  <Wine className="w-8 h-8 mb-3" style={{ color: role === 'wijnhuis' ? '#E91E8C' : 'rgba(240,235,227,0.35)' }} />
                  <p className="font-body font-semibold text-sm mb-1" style={{ color: role === 'wijnhuis' ? '#E91E8C' : '#F0EBE3' }}>
                    {t('auth.register.winery_label')}
                  </p>
                  <p className="font-body text-xs" style={{ color: 'rgba(240,235,227,0.45)' }}>{t('auth.register.winery_desc')}</p>
                </button>
              </div>

              {/* Sub-choice for afnemer */}
              {role === 'afnemer' && (
                <div className="mb-6">
                  <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-3" style={{ color: 'rgba(240,235,227,0.45)' }}>
                    {t('auth.register.buyer_type_label')}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setBuyerType('particulier')}
                      className="px-4 py-3 rounded-xl font-body text-sm transition-all"
                      style={{
                        border: buyerType === 'particulier' ? '2px solid rgba(233,30,140,0.40)' : '2px solid rgba(255,255,255,0.10)',
                        background: buyerType === 'particulier' ? 'rgba(233,30,140,0.08)' : 'transparent',
                        color: buyerType === 'particulier' ? '#E91E8C' : 'rgba(240,235,227,0.65)',
                      }}
                    >
                      {t('auth.register.buyer_type_particulier')}
                    </button>
                    <button
                      onClick={() => setBuyerType('horeca')}
                      className="px-4 py-3 rounded-xl font-body text-sm transition-all"
                      style={{
                        border: buyerType === 'horeca' ? '2px solid rgba(233,30,140,0.40)' : '2px solid rgba(255,255,255,0.10)',
                        background: buyerType === 'horeca' ? 'rgba(233,30,140,0.08)' : 'transparent',
                        color: buyerType === 'horeca' ? '#E91E8C' : 'rgba(240,235,227,0.65)',
                      }}
                    >
                      {t('auth.register.buyer_type_horeca')}
                    </button>
                  </div>
                </div>
              )}

              {/* Winery fields for wijnhuis */}
              {role === 'wijnhuis' && (
                <div className="mb-6 space-y-6">
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: 'rgba(240,235,227,0.45)' }}>
                      {t('auth.register.company_name')}
                    </label>
                    <input
                      value={companyName}
                      onChange={e => setCompanyName(e.target.value)}
                      className="input-field"
                      placeholder="Château Beaulieu"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: 'rgba(240,235,227,0.45)' }}>
                      {t('producer_detail.country')}
                    </label>
                    <select
                      value={wineryCountry}
                      onChange={e => setWineryCountry(e.target.value)}
                      className="input-field"
                      style={{ background: 'transparent', cursor: 'pointer' }}
                    >
                      <option value="Frankrijk" style={{ background: '#161829' }}>Frankrijk</option>
                      <option value="Italië" style={{ background: '#161829' }}>Italië</option>
                      <option value="Duitsland" style={{ background: '#161829' }}>Duitsland</option>
                      <option value="Spanje" style={{ background: '#161829' }}>Spanje</option>
                    </select>
                  </div>
                </div>
              )}

              <button onClick={() => setStep(2)} className="btn-gold w-full justify-center">
                {t('auth.register.next')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="flex items-center gap-2.5 rounded-lg px-4 py-3" style={{ background: 'rgba(233,30,140,0.15)', border: '1px solid rgba(233,30,140,0.25)' }}>
                  <AlertCircle className="w-4 h-4 shrink-0" style={{ color: '#E91E8C' }} />
                  <p className="font-body text-sm" style={{ color: '#E91E8C' }}>{error}</p>
                </div>
              )}
              <div>
                <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: 'rgba(240,235,227,0.45)' }}>
                  {t('auth.register.full_name')}
                </label>
                <input value={fullName} onChange={e => setFullName(e.target.value)} className="input-field" placeholder="Jan de Vries" required />
              </div>
              <div>
                <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: 'rgba(240,235,227,0.45)' }}>
                  {t('auth.register.email')}
                </label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="input-field" placeholder="uw@email.nl" required />
              </div>
              <div>
                <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: 'rgba(240,235,227,0.45)' }}>
                  {t('auth.register.password')}
                </label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="input-field" placeholder={t('auth.register.password_hint')} minLength={6} required />
              </div>
              {role === 'afnemer' && buyerType === 'horeca' && (
                <>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: 'rgba(240,235,227,0.45)' }}>KVK-nummer</label>
                    <input value={companyKvk} onChange={e => setCompanyKvk(e.target.value)} className="input-field" placeholder="12345678" required />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: 'rgba(240,235,227,0.45)' }}>Telefoonnummer</label>
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="input-field" placeholder="+31 6 12345678" required />
                  </div>
                </>
              )}
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setStep(1)} className="btn-ghost flex-1 justify-center">
                  {t('auth.register.back')}
                </button>
                <button type="submit" disabled={loading} className="btn-gold flex-1 justify-center disabled:opacity-60">
                  {loading ? t('common.loading') : t('auth.register.submit')}
                </button>
              </div>
            </form>
          )}
          <p className="font-body text-center text-sm mt-6" style={{ color: 'rgba(240,235,227,0.45)' }}>
            {t('auth.register.has_account')}{' '}
            <Link to="/login" className="font-semibold" style={{ color: '#E91E8C' }}>{t('auth.register.login_link')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
