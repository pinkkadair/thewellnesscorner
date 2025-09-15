import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export function Logo({ className = '', size = 'md', variant = 'dark' }: LogoProps) {
  const sizes = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10'
  };

  const textColors = {
    light: {
      text: 'from-brand-accent to-brand-accent/80',
      middle: 'from-white via-white to-white'
    },
    dark: {
      text: 'from-brand-primary to-brand-secondary',
      middle: 'from-brand-dark via-brand-dark to-brand-dark'
    }
  };

  const colors = textColors[variant];

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://i.imgur.com/BeKN03o.png" 
        alt="The Wellness Corner Logo" 
        className={`${sizes[size]}`}
      />
      <div className="ml-2">
        <span className={`font-bold tracking-tight ${size === 'sm' ? 'text-xl' : size === 'md' ? 'text-2xl' : 'text-3xl'}`}>
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.text}`}>The</span>{' '}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.middle}`}>Wellness</span>{' '}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.text}`}>Corner</span>
        </span>
      </div>
    </div>
  );
}