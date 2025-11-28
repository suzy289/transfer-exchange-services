'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import { X, Home, CreditCard, MapPin, User, DollarSign, Phone, MessageCircle, Mail, Building2, HelpCircle, FileText, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { formatWhatsAppLink, formatTelLink, formatEmailLink } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavigationItem {
  key: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
  href?: string;
  external?: boolean;
  children?: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { language } = useLanguage();
  const isFrench = language === 'fr';
  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navigationItems: NavigationItem[] = [
    { key: 'home', icon: Home, label: isFrench ? 'Accueil' : 'Home', href: '#accueil' },
    {
      key: 'services',
      icon: CreditCard,
      label: isFrench ? 'Services' : 'Services',
      href: '#services',
      children: [
        { label: isFrench ? 'Tous nos services' : 'All services', href: '#services' },
        { label: isFrench ? 'Cartes UBA' : 'UBA cards', href: '#services' },
        { label: isFrench ? "Transferts d'argent" : 'Money transfers', href: '#services' },
        { label: isFrench ? 'Change de devises' : 'Currency exchange', href: '#services' },
        { label: isFrench ? 'Mobile Banking' : 'Mobile banking', href: '#services' },
      ],
    },
    { key: 'agencies', icon: MapPin, label: isFrench ? 'Nos agences' : 'Our agencies', href: '/agences' },
    {
      key: 'apropos',
      icon: User,
      label: isFrench ? 'À propos' : 'About',
      href: '#apropos',
      children: [
        { label: isFrench ? 'Notre histoire' : 'Our history', href: '#apropos' },
        { label: isFrench ? 'Le fondateur' : 'The founder', href: '#apropos' },
        { label: isFrench ? 'Groupe REAVEM' : 'REAVEM group', href: '#apropos' },
        { label: isFrench ? 'Nos valeurs' : 'Our values', href: '#apropos' },
      ],
    },
    { key: 'pricing', icon: DollarSign, label: isFrench ? 'Tarifs' : 'Pricing', href: '#tarifs' },
    { key: 'contact', icon: Phone, label: isFrench ? 'Contact' : 'Contact', href: '/contact' },
  ];

  const informationItems: NavigationItem[] = [
    { key: 'founder', icon: User, label: isFrench ? 'Le fondateur' : 'The founder', href: '#apropos' },
    { key: 'group', icon: Building2, label: isFrench ? 'Groupe REAVEM' : 'REAVEM group', href: '#apropos' },
    { key: 'faq', icon: HelpCircle, label: 'FAQ', href: '#faq' },
    { key: 'legal', icon: FileText, label: isFrench ? 'Mentions légales' : 'Legal notice', href: '/mentions-legales' },
  ];

  const contactItems: NavigationItem[] = [
    {
      key: 'phone',
      icon: Phone,
      label: COMPANY_INFO.phone,
      href: formatTelLink(COMPANY_INFO.phone),
      external: true,
    },
    {
      key: 'whatsapp',
      icon: MessageCircle,
      label: 'WhatsApp',
      href: formatWhatsAppLink(COMPANY_INFO.whatsapp, 'Bonjour, je souhaite obtenir des informations.'),
      external: true,
    },
    {
      key: 'email',
      icon: Mail,
      label: COMPANY_INFO.email,
      href: formatEmailLink(COMPANY_INFO.email),
      external: true,
    },
  ];

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    services: true,
    apropos: true,
  });

  const sectionTitles = {
    navigation: isFrench ? 'Navigation principale' : 'Main navigation',
    information: isFrench ? 'Informations' : 'Information',
    contact: isFrench ? 'Contact rapide' : 'Quick contact',
  };

  const toggleItem = (key: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.95 }}
          transition={{ 
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="fixed top-24 left-4 z-50 w-80 max-w-sm bg-black/70 backdrop-blur-md text-white rounded-2xl shadow-2xl p-6 max-h-[75vh] overflow-y-auto border border-white/20"
        >
          {/* Header Sidebar */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/60">
                {isFrench ? 'Menu rapide' : 'Quick menu'}
              </p>
              <h2 className="font-bold text-lg font-heading">
                {isFrench ? 'Navigation' : 'Navigation'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-3">
                {sectionTitles.navigation}
              </h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.key}>
                    {item.children ? (
                      <div className="rounded-xl bg-white/5">
                        <button
                          onClick={() => toggleItem(item.key)}
                          className="w-full flex items-center justify-between px-3 py-2.5 text-left text-white/90 hover:text-white"
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="w-5 h-5 text-white/80" />
                            <span className="font-medium text-sm">{item.label}</span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              expandedItems[item.key] ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {expandedItems[item.key] && (
                          <div className="mt-1 pb-2 space-y-1 border-t border-white/10">
                            {item.children.map((child, idx) => (
                              <Link
                                key={`${item.key}-${idx}`}
                                href={child.href}
                                onClick={onClose}
                                className="flex items-center space-x-2 px-6 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                              >
                                <span>•</span>
                                <span>{child.label}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href ?? '#'}
                        onClick={onClose}
                        className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-white/15 transition-all duration-200 group"
                      >
                        <item.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                        <span className="font-medium text-sm text-white/90 group-hover:text-white transition-colors">
                          {item.label}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-3">
                {sectionTitles.information}
              </h3>
              <ul className="space-y-2">
                {informationItems.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href ?? '#'}
                      onClick={onClose}
                      className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-white/15 transition-all duration-200 group"
                    >
                      <item.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                      <span className="font-medium text-sm text-white/90 group-hover:text-white transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-3">
                {sectionTitles.contact}
              </h3>
              <ul className="space-y-2">
                {contactItems.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href ?? '#'}
                      onClick={onClose}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-white/15 transition-all duration-200 group"
                    >
                      <item.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                      <span className="font-medium text-sm text-white/90 group-hover:text-white transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-white/10">
              <Link
                href="#contact"
                onClick={onClose}
                className="block w-full bg-primary text-white text-center py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
              >
                {language === 'fr' ? 'Ouvrir un compte' : 'Open an account'}
              </Link>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

