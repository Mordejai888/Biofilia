import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../common/Logo';

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
    <header className="w-full bg-white py-4 px-6 md:px-12 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Navigation */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link font-semibold text-lg transition-colors duration-300 ${
                isActive(item.path)
                  ? 'text-biofilia-green'
                  : 'text-biofilia-black hover:text-biofilia-green'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <Link to="/" className="flex-shrink-0">
          <Logo size="md" />
        </Link>

        {/* Right Navigation */}
        <div className="flex items-center gap-8">
          {navItemsRight.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link font-semibold text-lg transition-colors duration-300 ${
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
