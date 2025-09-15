import { createContext, useContext, useState, ReactNode } from 'react';
import type { Provider } from '../types';

interface AuthContextType {
  isAuthenticated: boolean;
  user: Provider | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Default user for auto-login
const DEFAULT_USER: Provider = {
  id: '1',
  name: 'Dr. Sarah Johnson',
  specialty: 'Holistic Medicine',
  email: 'test@provider.com',
  bio: 'Experienced holistic medicine practitioner specializing in integrative health approaches.',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  // Auto-authenticate by default
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState<Provider | null>(DEFAULT_USER);

  const login = (email: string, password: string) => {
    // For demo purposes, only allow the test user
    if (email === DEFAULT_USER.email && password === 'test123') {
      setIsAuthenticated(true);
      setUser(DEFAULT_USER);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}