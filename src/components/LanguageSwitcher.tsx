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
      <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full font-body text-sm font-medium text-navy/60 hover:text-burgundy hover:bg-surface-low transition-colors">
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="absolute right-0 top-full mt-1 bg-cream rounded-xl shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 min-w-[110px] py-1">
        {LANGUAGES.map(lang => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-body transition-colors hover:bg-surface-low ${
              i18n.language.startsWith(lang.code) ? 'text-primary font-semibold' : 'text-navy/60'
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
