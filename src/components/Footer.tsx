'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { formatWhatsAppLink, formatTelLink, formatEmailLink } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-10">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8 border-b border-gray-700">
          {/* Logo & Description */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/40 relative flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Transfer and Exchange Services"
                fill
                sizes="48px"
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg font-heading">Transfer & Exchange</h3>
              <p className="text-gray-400 text-sm">
                {isFrench ? 'Premier Red Point UBA au Cameroun' : 'First UBA Red Point in Cameroon'}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
              {isFrench ? 'Services' : 'Services'}
            </Link>
            <Link href="#tarifs" className="text-gray-300 hover:text-white transition-colors">
              {isFrench ? 'Tarifs' : 'Pricing'}
            </Link>
            <Link href="#apropos" className="text-gray-300 hover:text-white transition-colors">
              {isFrench ? 'À propos' : 'About'}
            </Link>
            <Link href="/agences" className="text-gray-300 hover:text-white transition-colors">
              {isFrench ? 'Agences' : 'Agencies'}
            </Link>
            <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">
              FAQs
            </Link>
          </nav>

          {/* Contact Actions */}
          <div className="flex items-center gap-3">
            <a
              href={formatTelLink(COMPANY_INFO.phone)}
              className="w-10 h-10 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center transition-colors"
              aria-label="Téléphone"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={formatEmailLink(COMPANY_INFO.email)}
              className="w-10 h-10 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={formatWhatsAppLink(
                COMPANY_INFO.whatsapp,
                isFrench ? 'Bonjour, je souhaite obtenir des informations.' : 'Hello, I would like more information.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-400">
          <p>
            © 2025 Transfer and Exchange Services SARL. {isFrench ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              {isFrench ? 'Mentions légales' : 'Legal notice'}
            </Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">
              {isFrench ? 'Confidentialité' : 'Privacy'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
