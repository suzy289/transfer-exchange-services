'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION } from '@/lib/constants';
import Sidebar from './Sidebar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { 
      href: '#accueil', 
      label: NAVIGATION.home,
      dropdown: null
    },
    { 
      href: '#services', 
      label: NAVIGATION.services,
      dropdown: [
        { href: '#services', label: 'Tous nos services' },
        { href: '#services', label: 'Cartes UBA' },
        { href: '#services', label: 'Transferts d\'argent' },
        { href: '#services', label: 'Change de devises' },
        { href: '#services', label: 'Mobile Banking' },
      ]
    },
    { 
      href: '#agences', 
      label: NAVIGATION.agencies,
      dropdown: null
    },
    { 
      href: '#apropos', 
      label: NAVIGATION.about,
      dropdown: [
        { href: '#apropos', label: 'Notre histoire' },
        { href: '#apropos', label: 'Le fondateur' },
        { href: '#apropos', label: 'Groupe REAVEM' },
        { href: '#apropos', label: 'Nos valeurs' },
      ]
    },
    { 
      href: '#tarifs', 
      label: NAVIGATION.pricing,
      dropdown: null
    },
    { 
      href: '#contact', 
      label: NAVIGATION.contact,
      dropdown: null
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg' : 'bg-primary'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-white hover:text-red-200 transition-colors p-2 rounded-full border border-white/20"
              aria-label="Ouvrir le menu rapide"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">TE</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-lg font-heading">
                  Transfer & Exchange
                </h1>
                <p className="text-red-100 text-xs">Services SARL</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-white hover:text-red-200 transition-colors font-medium flex items-center space-x-1"
                >
                  <span>{language === 'fr' ? item.label.fr : item.label.en}</span>
                  {item.dropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center space-x-2 text-white hover:text-red-200 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium">{language.toUpperCase()}</span>
            </button>
            <Link
              href="#contact"
              className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              {language === 'fr' ? 'Ouvrir un compte' : 'Open an account'}
            </Link>
          </div>

          {/* Mobile Menu Button (for mobile dropdown) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2 ml-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-red-600"
          >
            <nav className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="block text-white hover:text-red-200 transition-colors font-medium py-2"
                >
                  {language === 'fr' ? item.label.fr : item.label.en}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-red-600">
                <button
                  onClick={() => {
                    setLanguage(language === 'fr' ? 'en' : 'fr');
                    closeMenu();
                  }}
                  className="flex items-center space-x-2 text-white"
                >
                  <Globe className="w-5 h-5" />
                  <span>{language.toUpperCase()}</span>
                </button>
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="bg-white text-primary px-6 py-2 rounded-lg font-semibold"
                >
                  {language === 'fr' ? 'Ouvrir un compte' : 'Open an account'}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
          </AnimatePresence>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}

