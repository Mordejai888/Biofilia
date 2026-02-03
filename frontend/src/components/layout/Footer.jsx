import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Mail } from 'lucide-react';
import { socialLinks, footerLinks } from '../../data/mock';

const iconMap = {
  Facebook: Facebook,
  Instagram: Instagram,
  MessageCircle: MessageCircle,
  Mail: Mail
};

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Social Links - Solo iconos */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-biofilia-green/10 text-biofilia-green hover:bg-biofilia-green hover:text-white transition-all duration-300"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Navigation Links - Sin título */}
          <div className="flex flex-col gap-2">
            {footerLinks.navigation.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-biofilia-black/70 hover:text-biofilia-green transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Tagline + Logo */}
          <div className="flex flex-col gap-4">
            <p className="text-sm text-biofilia-black/70 leading-relaxed italic">
              En Biofilia Cocreativa, cada proyecto es una oportunidad para cocrear un futuro más verde.
            </p>
            <img 
              src="/logos/Logos-Biofilia-Cocreativa_2.svg" 
              alt="Biofilia Cocreativa"
              className="w-24 h-auto"
            />
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-2">
            {footerLinks.legal.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-biofilia-black/70 hover:text-biofilia-green transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-biofilia-black/70 hover:text-biofilia-green transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-100 py-4">
        <p className="text-center text-sm text-biofilia-black/70">
          ©2025 Biofilia Cocreativa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
