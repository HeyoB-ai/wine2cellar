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
      <div className="min-h-screen bg-cream flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-md">
          <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h2 className="font-display text-3xl text-navy mb-3">{t('auth.register.success_title')}</h2>
          <p className="font-body text-navy/60 mb-8">{t('auth.register.success_text', { email })}</p>
          <Link to="/login" className="btn-gold">{t('auth.register.success_btn')}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="font-display text-3xl font-bold text-burgundy block mb-4">
            Cellar2Table
          </Link>
          <h1 className="font-display text-2xl text-navy mb-2">{t('auth.register.title')}</h1>
          <p className="font-body text-sm text-navy/50">{t('auth.register.step', { step })}</p>
        </div>

        <div className="bg-surface-low rounded-2xl p-8 shadow-ambient">
          {step === 1 ? (
            <div>
              <h2 className="font-display text-xl text-navy mb-6">{t('auth.register.iam')}</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => setRole('afnemer')}
                  className={`card p-5 text-left transition-all border-2 ${
                    role === 'afnemer'
                      ? 'bg-primary-container border-primary'
                      : 'border-transparent hover:bg-surface-high'
                  }`}
                >
                  <Truck className={`w-8 h-8 mb-3 ${role === 'afnemer' ? 'text-primary' : 'text-navy/40'}`} />
                  <p className={`font-body font-semibold text-sm mb-1 ${role === 'afnemer' ? 'text-primary' : 'text-navy'}`}>
                    {t('auth.register.buyer_label')}
                  </p>
                  <p className="font-body text-xs text-navy/50">{t('auth.register.buyer_desc')}</p>
                </button>
                <button
                  onClick={() => setRole('wijnhuis')}
                  className={`card p-5 text-left transition-all border-2 ${
                    role === 'wijnhuis'
                      ? 'bg-primary-container border-primary'
                      : 'border-transparent hover:bg-surface-high'
                  }`}
                >
                  <Wine className={`w-8 h-8 mb-3 ${role === 'wijnhuis' ? 'text-primary' : 'text-navy/40'}`} />
                  <p className={`font-body font-semibold text-sm mb-1 ${role === 'wijnhuis' ? 'text-primary' : 'text-navy'}`}>
                    {t('auth.register.winery_label')}
                  </p>
                  <p className="font-body text-xs text-navy/50">{t('auth.register.winery_desc')}</p>
                </button>
              </div>

              {/* Sub-choice for afnemer */}
              {role === 'afnemer' && (
                <div className="mb-6">
                  <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 block mb-3">
                    {t('auth.register.buyer_type_label')}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setBuyerType('particulier')}
                      className={`px-4 py-3 rounded-xl font-body text-sm transition-all border-2 ${
                        buyerType === 'particulier'
                          ? 'border-primary bg-primary-container text-primary'
                          : 'border-outline/30 text-navy/70 hover:border-outline/60'
                      }`}
                    >
                      {t('auth.register.buyer_type_particulier')}
                    </button>
                    <button
                      onClick={() => setBuyerType('horeca')}
                      className={`px-4 py-3 rounded-xl font-body text-sm transition-all border-2 ${
                        buyerType === 'horeca'
                          ? 'border-primary bg-primary-container text-primary'
                          : 'border-outline/30 text-navy/70 hover:border-outline/60'
                      }`}
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
                    <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 block mb-1">
                      {t('auth.register.company_name')}
                    </label>
                    <input
                      value={companyName}
                      onChange={e => setCompanyName(e.target.value)}
                      className="input-underline"
                      placeholder="Château Beaulieu"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 block mb-1">
                      {t('producer_detail.country')}
                    </label>
                    <select
                      value={wineryCountry}
                      onChange={e => setWineryCountry(e.target.value)}
                      className="input-underline"
                    >
                      <option value="Frankrijk">Frankrijk</option>
                      <option value="Italië">Italië</option>
                      <option value="Duitsland">Duitsland</option>
                      <option value="Spanje">Spanje</option>
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
                <div className="flex items-center gap-2.5 bg-primary-container rounded-lg px-4 py-3">
                  <AlertCircle className="w-4 h-4 text-primary shrink-0" />
                  <p className="font-body text-sm text-primary">{error}</p>
                </div>
              )}
              <div>
                <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 block mb-1">
                  {t('auth.register.full_name')}
                </label>
                <input value={fullName} onChange={e => setFullName(e.target.value)} className="input-underline" placeholder="Jan de Vries" required />
              </div>
              <div>
                <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 block mb-1">
                  {t('auth.register.email')}
                </label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="input-underline" placeholder="uw@email.nl" required />
              </div>
              <div>
                <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 block mb-1">
                  {t('auth.register.password')}
                </label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="input-underline" placeholder={t('auth.register.password_hint')} minLength={6} required />
              </div>
              {role === 'afnemer' && buyerType === 'horeca' && (
                <>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 block mb-1">KVK-nummer</label>
                    <input value={companyKvk} onChange={e => setCompanyKvk(e.target.value)} className="input-underline" placeholder="12345678" required />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 block mb-1">Telefoonnummer</label>
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="input-underline" placeholder="+31 6 12345678" required />
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
          <p className="font-body text-center text-sm text-navy/50 mt-6">
            {t('auth.register.has_account')}{' '}
            <Link to="/login" className="text-primary font-semibold hover:underline">{t('auth.register.login_link')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
