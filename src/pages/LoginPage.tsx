import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTranslation } from 'react-i18next'

export default function LoginPage() {
  const { signIn } = useAuth()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error: err } = await signIn(email, password)
    if (err) {
      setError(t('auth.login.error'))
      setLoading(false)
    } else {
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16" style={{ background: '#0D0F1E' }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/" className="font-display text-3xl font-bold" style={{ color: '#E91E8C' }}>
            Cellar2Table
          </Link>
        </div>

        <div className="rounded-2xl p-8" style={{ background: '#161829', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
          <h1 className="font-display text-2xl mb-2" style={{ color: '#F0EBE3' }}>{t('auth.login.title')}</h1>
          <p className="font-body text-sm mb-8" style={{ color: 'rgba(240,235,227,0.50)' }}>{t('auth.login.subtitle')}</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: 'rgba(240,235,227,0.45)' }}>
                {t('auth.login.email')}
              </label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="uw@email.com" className="input-field" required />
            </div>
            <div>
              <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: 'rgba(240,235,227,0.45)' }}>
                {t('auth.login.password')}
              </label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="input-field" required />
            </div>

            {error && (
              <p className="font-body text-sm rounded-lg px-4 py-3" style={{ background: 'rgba(233,30,140,0.15)', color: '#E91E8C', border: '1px solid rgba(233,30,140,0.25)' }}>
                {error}
              </p>
            )}

            <button type="submit" disabled={loading} className="btn-gold w-full justify-center py-3.5">
              {loading ? t('auth.login.loading') : t('auth.login.submit')}
            </button>
          </form>

          <p className="font-body text-sm text-center mt-6" style={{ color: 'rgba(240,235,227,0.50)' }}>
            {t('auth.login.no_account')}{' '}
            <Link to="/register" className="font-semibold transition-colors" style={{ color: '#E91E8C' }}>
              {t('auth.login.register_link')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
