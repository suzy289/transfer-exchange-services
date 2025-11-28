'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronDown, Briefcase, MapPin, Mail, CreditCard, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Fonction pour gérer les clics sur les liens avec ancres
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const hash = href.substring(1); // Enlever le / pour garder #services
      
      if (pathname === '/') {
        // Si on est déjà sur la page d'accueil, scroll vers l'ancre
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Si on est sur une autre page, rediriger vers la page d'accueil avec l'ancre
        router.push(href);
        // Scroll vers l'ancre après le chargement de la page
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500);
      }
    }
  };

  const mainLinks = [
    {
      href: '/#services',
      label: language === 'fr' ? 'Services' : 'Services',
      external: false,
      icon: Briefcase,
      iconColor: 'text-yellow-400',
    },
    {
      href: '/#tarifs',
      label: language === 'fr' ? 'Nos tarifs' : 'Our pricing',
      external: false,
      icon: CreditCard,
      iconColor: 'text-purple-400',
    },
    {
      href: '/#apropos',
      label: language === 'fr' ? 'À propos' : 'About',
      external: false,
      icon: Info,
      iconColor: 'text-blue-400',
    },
    {
      href: '/agences',
      label: language === 'fr' ? 'Nos agences' : 'Our agencies',
      external: false,
      icon: MapPin,
      iconColor: 'text-green-400',
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
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-14 h-14 rounded-full bg-white shadow-lg overflow-hidden ring-2 ring-white/40">
                <Image
                  src="/images/logo.png"
                  alt="Transfer and Exchange Services Logo"
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div className="hidden md:block">
                <h1 className="text-white font-bold text-lg font-heading leading-tight">
                  Transfer & Exchange
                </h1>
                <p className="text-red-100 text-xs font-medium tracking-wider uppercase">
                  Services SARL
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-16">
            {mainLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative flex items-center space-x-2 text-white hover:text-red-200 transition-colors font-medium group"
                >
                  <Icon className={`w-4 h-4 ${item.iconColor}`} />
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </Link>
              );
            })}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center space-x-4 ml-8">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsLangDropdownOpen(true)}
                onMouseLeave={() => setIsLangDropdownOpen(false)}
                className="flex items-center space-x-2 text-white hover:text-red-200 transition-colors"
              >
                {language === 'fr' ? (
                  <div className="w-5 h-4 rounded-sm overflow-hidden flex">
                    <div className="w-1/3 bg-blue-600" />
                    <div className="w-1/3 bg-white" />
                    <div className="w-1/3 bg-red-600" />
                  </div>
                ) : (
                  <div className="w-5 h-4 rounded-sm overflow-hidden flex flex-col">
                    <div className="h-1/3 bg-blue-600" />
                    <div className="h-1/3 bg-white" />
                    <div className="h-1/3 bg-red-600" />
                  </div>
                )}
                <span className="font-medium">{language.toUpperCase()}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onMouseEnter={() => setIsLangDropdownOpen(true)}
                    onMouseLeave={() => setIsLangDropdownOpen(false)}
                    className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[140px] z-50"
                  >
                    <button
                      onClick={() => {
                        setLanguage('fr');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 hover:bg-primary hover:text-white transition-colors ${
                        language === 'fr' ? 'bg-primary/10 text-primary font-semibold' : 'text-gray-800'
                      }`}
                    >
                      <div className="w-5 h-4 rounded-sm overflow-hidden flex">
                        <div className="w-1/3 bg-blue-600" />
                        <div className="w-1/3 bg-white" />
                        <div className="w-1/3 bg-red-600" />
                      </div>
                      <span>Français</span>
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 hover:bg-primary hover:text-white transition-colors ${
                        language === 'en' ? 'bg-primary/10 text-primary font-semibold' : 'text-gray-800'
                      }`}
                    >
                      <div className="w-5 h-4 rounded-sm overflow-hidden flex flex-col">
                        <div className="h-1/3 bg-blue-600" />
                        <div className="h-1/3 bg-white" />
                        <div className="h-1/3 bg-red-600" />
                      </div>
                      <span>English</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/contact"
              className="flex items-center space-x-2 bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors group"
            >
              <Mail className="w-5 h-5 text-primary group-hover:text-gray-900 transition-colors" />
              <span className="group-hover:text-gray-900 transition-colors">{language === 'fr' ? 'Nous contacter' : 'Contact us'}</span>
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
              {mainLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      handleAnchorClick(e, item.href);
                      closeMenu();
                    }}
                    className="flex items-center space-x-3 text-white hover:text-red-200 transition-colors font-medium py-2"
                  >
                    <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-red-600 space-y-3">
                <div>
                  <button
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                    className="flex items-center justify-between w-full text-white hover:text-red-200 transition-colors font-medium py-2"
                  >
                    <div className="flex items-center space-x-2">
                      {language === 'fr' ? (
                        <div className="w-5 h-4 rounded-sm overflow-hidden flex">
                          <div className="w-1/3 bg-blue-600" />
                          <div className="w-1/3 bg-white" />
                          <div className="w-1/3 bg-red-600" />
                        </div>
                      ) : (
                        <div className="w-5 h-4 rounded-sm overflow-hidden flex flex-col">
                          <div className="h-1/3 bg-blue-600" />
                          <div className="h-1/3 bg-white" />
                          <div className="h-1/3 bg-red-600" />
                        </div>
                      )}
                      <span>{language === 'fr' ? 'Français' : 'English'}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isLangDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-2"
                      >
                        <button
                          onClick={() => {
                            setLanguage('fr');
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center space-x-2 text-left py-2 ${
                            language === 'fr' ? 'text-white font-semibold' : 'text-red-100'
                          }`}
                        >
                          <div className="w-5 h-4 rounded-sm overflow-hidden flex">
                            <div className="w-1/3 bg-blue-600" />
                            <div className="w-1/3 bg-white" />
                            <div className="w-1/3 bg-red-600" />
                          </div>
                          <span>Français</span>
                        </button>
                        <button
                          onClick={() => {
                            setLanguage('en');
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center space-x-2 text-left py-2 ${
                            language === 'en' ? 'text-white font-semibold' : 'text-red-100'
                          }`}
                        >
                          <div className="w-5 h-4 rounded-sm overflow-hidden flex flex-col">
                            <div className="h-1/3 bg-blue-600" />
                            <div className="h-1/3 bg-white" />
                            <div className="h-1/3 bg-red-600" />
                          </div>
                          <span>English</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center space-x-2 w-full bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:text-gray-900 transition-colors" />
                  <span className="group-hover:text-gray-900 transition-colors">{language === 'fr' ? 'Nous contacter' : 'Contact us'}</span>
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

