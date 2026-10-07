import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';

const links = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Directory', to: '/#directory' },
  { label: 'Events', to: '/events' },
  { label: 'Foundation', to: '/foundation' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string) => {
    if (to.startsWith('/#')) return location.pathname === '/' && location.hash === to.slice(1);
    return location.pathname === to;
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-brand-dark text-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-sm">
          <p>
            <span className="text-brand-accent font-semibold">November 14, 2026</span>
            <span className="mx-2 text-white/40">·</span>
            Community Health &amp; Safety Fair, 8:00 AM – 12:00 PM
          </p>
          <Link to="/events" className="text-brand-accent font-semibold hover:text-white" onClick={closeMenu}>
            View the fair
          </Link>
        </div>
      </div>
      <nav className="bg-[#fbf8f2]/95 backdrop-blur border-b border-[#e4d7c2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-[4.75rem] items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <Logo variant="dark" />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[0.82rem] uppercase tracking-[0.16em] font-semibold border-b-2 pb-1 transition-colors ${
                    isActive(link.to)
                      ? 'text-brand-primary border-brand-accent'
                      : 'text-brand-ink border-transparent hover:text-brand-primary hover:border-brand-accent'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-brand-ink"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#e4d7c2] bg-[#fbf8f2]">
            <div className="px-4 py-3 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className="block px-3 py-3 uppercase tracking-[0.14em] text-sm font-semibold text-brand-ink hover:text-brand-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
