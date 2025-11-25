'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X, Home, CreditCard, MapPin, User, DollarSign, Phone, MessageCircle, Mail, Building2, Shield, Globe, HelpCircle, FileText } from 'lucide-react';
import Link from 'next/link';
import { formatWhatsAppLink, formatTelLink, formatEmailLink } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/constants';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
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

  const menuSections = [
    {
      title: 'Navigation',
      items: [
        { icon: Home, label: 'Accueil', href: '#accueil' },
        { icon: CreditCard, label: 'Services', href: '#services' },
        { icon: MapPin, label: 'Nos Agences', href: '#agences' },
        { icon: User, label: 'À Propos', href: '#apropos' },
        { icon: DollarSign, label: 'Tarifs', href: '#tarifs' },
        { icon: Phone, label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services Détail',
      items: [
        { icon: CreditCard, label: 'Cartes Bancaires UBA', href: '#services' },
        { icon: Globe, label: 'Transferts d\'Argent', href: '#services' },
        { icon: DollarSign, label: 'Change de Devises', href: '#services' },
        { icon: Shield, label: 'Mobile Banking M2U', href: '#services' },
        { icon: Building2, label: 'Ouverture de Compte', href: '#services' },
      ],
    },
    {
      title: 'Informations',
      items: [
        { icon: User, label: 'Le Fondateur', href: '#apropos' },
        { icon: Building2, label: 'Groupe REAVEM', href: '#apropos' },
        { icon: HelpCircle, label: 'FAQ', href: '#faq' },
        { icon: FileText, label: 'Mentions Légales', href: '/mentions-legales' },
      ],
    },
    {
      title: 'Contact Rapide',
      items: [
        { 
          icon: Phone, 
          label: COMPANY_INFO.phone, 
          href: formatTelLink(COMPANY_INFO.phone),
          external: true
        },
        { 
          icon: MessageCircle, 
          label: 'WhatsApp', 
          href: formatWhatsAppLink(COMPANY_INFO.whatsapp, 'Bonjour, je souhaite obtenir des informations.'),
          external: true
        },
        { 
          icon: Mail, 
          label: COMPANY_INFO.email, 
          href: formatEmailLink(COMPANY_INFO.email),
          external: true
        },
      ],
    },
  ];

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
              <p className="text-xs uppercase tracking-wider text-white/60">Menu rapide</p>
              <h2 className="font-bold text-lg font-heading">Navigation</h2>
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
            {menuSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-white/15 transition-all duration-200 group"
                      >
                        <item.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                        <span className="font-medium text-sm text-white/90 group-hover:text-white transition-colors">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-4 border-t border-white/10">
              <Link
                href="#contact"
                onClick={onClose}
                className="block w-full bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Ouvrir un compte UBA
              </Link>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

