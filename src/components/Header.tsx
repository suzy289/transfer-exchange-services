'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Briefcase, MapPin, Mail, CreditCard, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

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
      label: language === 'fr' ? 'Tarifs' : 'Pricing',
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
      label: language === 'fr' ? 'Agences' : 'Agencies',
      external: false,
      icon: MapPin,
      iconColor: 'text-white',
    },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] bg-primary shadow-lg"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Transfer and Exchange Services Logo"
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className="text-white font-bold text-sm sm:text-base md:text-lg font-heading leading-tight whitespace-nowrap">
                  Transfer & Exchange
                </h1>
                <p className="hidden sm:block text-red-100 text-[10px] sm:text-xs font-medium tracking-wider uppercase">
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
                  className="relative flex items-center space-x-2 text-white hover:text-red-200 transition-colors font-medium group whitespace-nowrap"
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
                    className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl py-2 min-w-[140px] z-50"
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
              className="flex items-center space-x-2 bg-black text-white px-6 py-2 rounded-xl font-semibold hover:bg-white hover:text-black transition-colors group"
            >
              <Mail className="w-5 h-5 text-white group-hover:text-black transition-colors" />
              <span className="group-hover:text-black transition-colors">{language === 'fr' ? 'Nous contacter' : 'Contact us'}</span>
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

