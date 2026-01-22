import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';
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
          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-biofilia-black mb-2">Síguenos</h4>
            {socialLinks.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-biofilia-black hover:text-biofilia-green transition-colors duration-300 group"
                >
                  <span className="font-semibold text-sm w-8">{social.label}</span>
                  <IconComponent className="w-5 h-5 text-biofilia-green group-hover:scale-110 transition-transform duration-300" />
                </a>
              );
            })}
          </div>

          {/* Location & Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-biofilia-black mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-biofilia-green" />
              Navegación
            </h4>
            {footerLinks.navigation.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-biofilia-green hover:text-biofilia-black transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Tagline */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-biofilia-black/70 leading-relaxed italic">
              En Biofilia Cocreativa, cada proyecto es una oportunidad para cocrear un futuro más verde.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-biofilia-black mb-2">Legal</h4>
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-biofilia-black/70 hover:text-biofilia-green transition-colors duration-300 text-sm"
              >
                {link.label}
              </Link>
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
