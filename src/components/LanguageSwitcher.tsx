import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'nl', flag: '🇳🇱', label: 'NL' },
  { code: 'en', flag: '🇬🇧', label: 'EN' },
  { code: 'de', flag: '🇩🇪', label: 'DE' },
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
  { code: 'es', flag: '🇪🇸', label: 'ES' },
  { code: 'it', flag: '🇮🇹', label: 'IT' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = LANGUAGES.find(l => i18n.language.startsWith(l.code)) || LANGUAGES[0]

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-body text-sm font-medium transition-colors"
        style={{ color: 'rgba(240,235,227,0.60)', background: 'rgba(255,255,255,0.06)' }}
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className="absolute right-0 top-full mt-1 rounded-xl shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 min-w-[110px] py-1"
        style={{ background: '#161829', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {LANGUAGES.map(lang => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm font-body transition-colors"
            style={{
              color: i18n.language.startsWith(lang.code) ? '#E91E8C' : 'rgba(240,235,227,0.65)',
              fontWeight: i18n.language.startsWith(lang.code) ? 600 : 400,
              background: 'transparent',
            }}
            onMouseEnter={e => { if (!i18n.language.startsWith(lang.code)) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
          >
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
