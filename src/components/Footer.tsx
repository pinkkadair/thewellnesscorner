import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo variant="light" />
            <p className="text-gray-400 mt-4">
              A centralized location for aesthetic, medical, and holistic health services.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><a href="#directory" className="text-gray-400 hover:text-white">Directory</a></li>
              <li><a href="#support" className="text-gray-400 hover:text-white">Support Us</a></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>15182 N. 75th Ave</li>
              <li>Suite 180</li>
              <li>Peoria, AZ 85381</li>
              <li>Phone: 623-257-3350</li>
              <li>Email: <Link to="/contact" className="hover:text-brand-accent">support@azwellnesscorner.com</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-accent">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-accent">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-accent">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-accent">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Wellness Corner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}