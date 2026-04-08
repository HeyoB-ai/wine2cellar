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
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 pt-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/" className="font-display text-3xl font-bold text-burgundy">Cellar2Table</Link>
        </div>

        <div className="bg-surface-low rounded-2xl p-8 shadow-ambient">
          <h1 className="font-display text-2xl text-navy mb-2">{t('auth.login.title')}</h1>
          <p className="font-body text-sm text-navy/50 mb-8">{t('auth.login.subtitle')}</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 block mb-1">
                {t('auth.login.email')}
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="uw@email.com"
                className="input-underline"
                required
              />
            </div>
            <div>
              <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 block mb-1">
                {t('auth.login.password')}
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input-underline"
                required
              />
            </div>

            {error && (
              <p className="font-body text-sm text-primary bg-primary-container rounded-lg px-4 py-3">{error}</p>
            )}

            <button type="submit" disabled={loading} className="btn-gold w-full justify-center py-3.5">
              {loading ? t('auth.login.loading') : t('auth.login.submit')}
            </button>
          </form>

          <p className="font-body text-sm text-navy/50 text-center mt-6">
            {t('auth.login.no_account')}{' '}
            <Link to="/register" className="text-primary font-semibold hover:underline">
              {t('auth.login.register_link')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
