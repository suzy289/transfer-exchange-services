'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X, Home, CreditCard, MapPin, Info, DollarSign, Phone, MessageCircle, Mail } from 'lucide-react';
import Link from 'next/link';
import { formatWhatsAppLink, formatTelLink, formatEmailLink } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

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

  const menuItems = [
    { icon: Home, label: isFrench ? 'Accueil' : 'Home', href: '/' },
    { icon: CreditCard, label: 'Services', href: '/#services' },
    { icon: DollarSign, label: isFrench ? 'Tarifs' : 'Pricing', href: '/#tarifs' },
    { icon: Info, label: isFrench ? 'À propos' : 'About', href: '/#apropos' },
    { icon: MapPin, label: isFrench ? 'Agences' : 'Agencies', href: '/agences' },
    { icon: Phone, label: 'Contact', href: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-0 right-0 z-50 w-72 h-full bg-black/90 backdrop-blur-xl text-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h2 className="font-bold text-base">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-3">
              <ul className="space-y-1">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <item.icon className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Contact rapide */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-black/50">
              <p className="text-[10px] uppercase tracking-wider text-white/40 mb-3">
                {isFrench ? 'Contact rapide' : 'Quick contact'}
              </p>
              <div className="flex gap-2">
                <a
                  href={formatTelLink(COMPANY_INFO.phone)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-xs">Appeler</span>
                </a>
                <a
                  href={formatWhatsAppLink(COMPANY_INFO.whatsapp, isFrench ? 'Bonjour, je souhaite des informations.' : 'Hello, I need information.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-green-600 hover:bg-green-500 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs">WhatsApp</span>
                </a>
              </div>
              <a
                href={formatEmailLink(COMPANY_INFO.email)}
                className="flex items-center justify-center gap-2 mt-2 py-2.5 rounded-lg bg-primary hover:bg-primary/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-xs">{COMPANY_INFO.email}</span>
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
