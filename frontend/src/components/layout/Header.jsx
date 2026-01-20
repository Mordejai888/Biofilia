import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Portafolio', path: '/portafolio' },
  { label: 'Nosotros', path: '/nosotros' }
];

const navItemsRight = [
  { label: 'Contacta', path: '/contacta' },
  { label: 'Servicios', path: '/servicios' }
];

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full bg-white py-3 px-6 md:px-12 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Navigation */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link font-bold text-lg transition-colors duration-300 ${
                isActive(item.path)
                  ? 'text-biofilia-green'
                  : 'text-biofilia-black hover:text-biofilia-green'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Center Logo - Using PNG image */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src="https://customer-assets.emergentagent.com/job_bbf9e7d9-e7b6-45b5-a13c-7fcbccfcb815/artifacts/n3mufaik_Logos-Biofilia-Cocreativa.png"
            alt="Biofilia Cocreativa"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Right Navigation */}
        <div className="flex items-center gap-8">
          {navItemsRight.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link font-bold text-lg transition-colors duration-300 ${
                isActive(item.path)
                  ? 'text-biofilia-green'
                  : 'text-biofilia-black hover:text-biofilia-green'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
