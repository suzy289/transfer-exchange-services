'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { formatTelLink, formatEmailLink } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(220,38,38,0.1),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(220,38,38,0.05),_transparent_50%)]" />
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-6">
          {/* Information column */}
              <div>
            <h4 className="text-xs font-bold mb-3 text-white uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
              {isFrench ? 'Information' : 'Information'}
            </h4>
            <ul className="space-y-1.5">
              {[
                { href: '/contact', label: isFrench ? 'Contactez-nous' : 'Contact us' },
                { href: '#apropos', label: isFrench ? 'À propos' : 'About us' },
                { href: '/agences', label: isFrench ? 'Nos agences' : 'Our agencies' },
                { href: '#faq', label: 'FAQs' },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary group-hover:w-2 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-xs font-bold mb-3 text-white uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
              {isFrench ? 'Nos services' : 'Our services'}
            </h4>
            <ul className="space-y-1.5">
              {[
                { href: '#services', label: isFrench ? 'Transfert d\'argent' : 'Money transfer' },
                { href: '#services', label: isFrench ? 'Change de devises' : 'Currency exchange' },
                { href: '#services', label: 'M2U Mobile Banking' },
                { href: '#services', label: isFrench ? 'Solutions numériques' : 'Digital solutions' },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary group-hover:w-2 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Banking column */}
          <div>
            <h4 className="text-xs font-bold mb-3 text-white uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
              {isFrench ? 'Banque' : 'Banking'}
            </h4>
            <ul className="space-y-1.5">
              {[
                { href: '#tarifs', label: isFrench ? 'Compte épargne' : 'Savings account' },
                { href: '#tarifs', label: isFrench ? 'Compte courant' : 'Current account' },
                { href: '#services', label: isFrench ? 'Les cartes UBA' : 'UBA cards' },
                { href: '#tarifs', label: isFrench ? 'Conditions de banque' : 'Banking conditions' },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary group-hover:w-2 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-xs font-bold mb-3 text-white uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
              {isFrench ? 'Contact' : 'Contact'}
            </h4>
            <div className="space-y-2">
              <a 
                href={formatEmailLink(COMPANY_INFO.email)}
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors duration-300">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-gray-400 hover:text-white transition-colors text-sm break-all pt-1.5">
                  {COMPANY_INFO.email}
                </span>
              </a>
              
              <a 
                href={formatTelLink(COMPANY_INFO.phone)}
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors duration-300">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-gray-400 hover:text-white transition-colors text-sm pt-1.5">
                  {COMPANY_INFO.phone}
                </span>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-gray-400 text-sm pt-1.5">
                  {COMPANY_INFO.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                © {currentYear} Transfer & Exchange Services SARL
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              {[
                { href: '/mentions-legales', label: isFrench ? 'Mentions légales' : 'Legal notice' },
                { href: '/confidentialite', label: isFrench ? 'Confidentialité' : 'Privacy' },
              ].map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-gray-600 text-[10px] sm:text-xs text-center mt-3 max-w-xl mx-auto">
            {isFrench
              ? 'Transfer and Exchange Services est agréée et réglementée en tant que Red Point UBA officiel au Cameroun — Groupe REAVEM'
              : 'Transfer and Exchange Services is licensed and regulated as an official UBA Red Point in Cameroon — REAVEM Group'}
          </p>
        </div>
      </div>
    </footer>
  );
}

