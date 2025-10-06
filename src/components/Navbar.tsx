import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Future logout functionality can be added here
  // const navigate = useNavigate();
  // const { logout } = useAuth();
  // const handleLogout = () => {
  //   logout();
  //   localStorage.removeItem('auth_token');
  //   navigate('/');
  // };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo variant="dark" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-brand-dark hover:text-brand-primary">About</Link>
            <Link to="/services" className="text-brand-dark hover:text-brand-primary">Services</Link>
            <a href="#directory" className="text-brand-dark hover:text-brand-primary">Directory</a>
            <a href="#support" className="text-brand-dark hover:text-brand-primary">Support Us</a>
            <Link to="/contact" className="text-brand-dark hover:text-brand-primary">Contact</Link>
            {/* Dashboard button removed */}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-dark hover:text-brand-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/about"
              className="block px-3 py-2 text-brand-dark hover:text-brand-primary"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-brand-dark hover:text-brand-primary"
            >
              Services
            </Link>
            <a
              href="#directory"
              className="block px-3 py-2 text-brand-dark hover:text-brand-primary"
            >
              Directory
            </a>
            <a
              href="#support"
              className="block px-3 py-2 text-brand-dark hover:text-brand-primary"
            >
              Support Us
            </a>
            <Link
              to="/contact"
              className="block px-3 py-2 text-brand-dark hover:text-brand-primary"
            >
              Contact
            </Link>
            {/* Dashboard button removed from mobile menu */}
          </div>
        </div>
      )}
    </nav>
  );
}