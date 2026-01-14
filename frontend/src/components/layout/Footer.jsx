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
            {socialLinks.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a
                  key={social.id}
                  href={social.url}
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
            <div className="flex items-center gap-2 text-biofilia-green mb-2">
              <MapPin className="w-5 h-5" />
            </div>
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

          {/* Empty space for balance */}
          <div className="hidden md:block" />

          {/* Legal Links */}
          <div className="flex flex-col gap-2 text-right">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-biofilia-black hover:text-biofilia-green transition-colors duration-300 text-sm"
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
          ©2025 Biofilia Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
