import { Link } from 'react-router-dom';
import { Wine, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-noir-900 border-t border-noir-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-wine-800 rounded-lg flex items-center justify-center">
                <Wine className="w-5 h-5 text-gold-400" />
              </div>
              <span className="font-display text-lg font-semibold text-cream-50">Cellar2Table</span>
            </Link>
            <p className="text-sm text-cream-200/70 font-sans leading-relaxed mb-5">
              Authentieke wijnen, rechtstreeks van de beste producenten wereldwijd naar uw tafel.
            </p>
            <div className="flex items-center gap-3">
              {['IG', 'X', 'FB'].map((label) => (
                <a key={label} href="#" className="w-8 h-8 rounded-full bg-noir-800 hover:bg-wine-800 flex items-center justify-center transition-colors">
                  <span className="text-cream-300 text-xs font-sans font-semibold">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="font-display text-sm font-semibold text-cream-50 uppercase tracking-widest mb-4">Navigatie</h4>
            <ul className="space-y-2.5">
              {[['/', 'Home'], ['/producers', 'Wijnhuizen'], ['/for-producers', 'Voor Producenten'], ['/contact', 'Contact'], ['/login', 'Inloggen']].map(([to, label]) => (
                <li key={to}><Link to={to} className="text-sm text-cream-200/70 hover:text-gold-400 font-sans transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Wijnhuizen */}
          <div>
            <h4 className="font-display text-sm font-semibold text-cream-50 uppercase tracking-widest mb-4">Uitgelicht</h4>
            <ul className="space-y-2.5">
              {['Domaine Leflaive', 'Vega Sicilia', 'Marchesi Antinori', 'Château Margaux', 'Ornellaia'].map((name) => (
                <li key={name}><span className="text-sm text-cream-200/70 font-sans">{name}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-cream-50 uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <a href="mailto:info@cellar2table.nl" className="text-sm text-cream-200/70 hover:text-gold-400 font-sans">info@cellar2table.nl</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-cream-200/70 font-sans">+31 20 123 4567</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-cream-200/70 font-sans">Keizersgracht 123<br />1015 CJ Amsterdam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-noir-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-200/40 font-sans">© 2025 Cellar2Table. Alle rechten voorbehouden.</p>
          <p className="text-xs text-cream-200/40 font-sans">Geniet met mate. Alcoholhoudende dranken, leeftijdsgrens 18+.</p>
        </div>
      </div>
    </footer>
  );
}
