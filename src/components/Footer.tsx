import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="h-1 bg-brand-accent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Logo variant="light" />
            <p className="text-white/70 mt-5 leading-relaxed">
              Independent healthcare, shared under one roof in Peoria.
            </p>
          </div>
          <div>
            <h4 className="text-brand-accent text-xs uppercase tracking-[0.18em] mb-4">Visit</h4>
            <ul className="space-y-2 text-white/75">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/#directory" className="hover:text-white">Directory</Link></li>
              <li><Link to="/events" className="hover:text-white">Events</Link></li>
              <li><Link to="/foundation" className="hover:text-white">Foundation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-accent text-xs uppercase tracking-[0.18em] mb-4">The office</h4>
            <ul className="space-y-2 text-white/75">
              <li>8877 West Union Hills Dr.</li>
              <li>Suite 160</li>
              <li>Peoria, AZ 85382</li>
              <li className="pt-2">623-257-3350</li>
              <li>
                <a href="mailto:support@azwellnesscorner.com" className="hover:text-brand-accent">
                  support@azwellnesscorner.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-accent text-xs uppercase tracking-[0.18em] mb-4">Follow</h4>
            <div className="flex space-x-4 text-white/70">
              <a href="#" className="hover:text-brand-accent" aria-label="Facebook"><Facebook size={22} /></a>
              <a href="#" className="hover:text-brand-accent" aria-label="Instagram"><Instagram size={22} /></a>
              <a href="#" className="hover:text-brand-accent" aria-label="Twitter"><Twitter size={22} /></a>
              <a href="#" className="hover:text-brand-accent" aria-label="LinkedIn"><Linkedin size={22} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-sm text-white/50 flex flex-col sm:flex-row sm:justify-between gap-2">
          <p>&copy; {new Date().getFullYear()} The Wellness Corner</p>
          <p>Peoria, Arizona</p>
        </div>
      </div>
    </footer>
  );
}
