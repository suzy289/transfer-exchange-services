'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Briefcase, MapPin, Mail, CreditCard, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
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

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const mainLinks = [
    {
      href: '/#services',
      label: language === 'fr' ? 'Services' : 'Services',
      external: false,
      icon: Briefcase,
      iconColor: 'text-white',
    },
    {
      href: '/#tarifs',
      label: language === 'fr' ? 'Nos tarifs' : 'Our pricing',
      external: false,
      icon: CreditCard,
      iconColor: 'text-white',
    },
    {
      href: '/#apropos',
      label: language === 'fr' ? 'À propos' : 'About',
      external: false,
      icon: Info,
      iconColor: 'text-white',
    },
    {
      href: '/agences',
      label: language === 'fr' ? 'Nos agences' : 'Our agencies',
      external: false,
      icon: MapPin,
      iconColor: 'text-white',
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
                      className={`w-full flex items-center space-x-3 px-4 py-2 hover:bg-yellow-400 hover:text-gray-900 transition-colors ${
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
                      className={`w-full flex items-center space-x-3 px-4 py-2 hover:bg-yellow-400 hover:text-gray-900 transition-colors ${
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
              className="flex items-center space-x-2 bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors group"
            >
              <Mail className="w-5 h-5 text-white group-hover:text-gray-900 transition-colors" />
              <span className="group-hover:text-gray-900 transition-colors">{language === 'fr' ? 'Nous contacter' : 'Contact us'}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-white p-2 ml-2"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sidebar Mobile Menu */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}

