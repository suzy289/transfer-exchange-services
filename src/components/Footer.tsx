'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { formatWhatsAppLink, formatTelLink, formatEmailLink } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const language: 'fr' | 'en' = 'fr'; // TODO: Get from context

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1: Présentation */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">TE</span>
              </div>
              <div>
                <h3 className="font-bold text-lg font-heading">Transfer & Exchange</h3>
                <p className="text-gray-400 text-xs">Services SARL</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              {language === 'fr'
                ? 'Premier Red Point UBA au Cameroun. Vitrine financière du groupe REAVEM.'
                : 'First UBA Red Point in Cameroon. Financial showcase of the REAVEM group.'}
            </p>
            <div className="flex space-x-3">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Colonne 2: Information Utile */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">
              {language === 'fr' ? 'Information Utile' : 'Useful Information'}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {language === 'fr' ? 'Contactez-nous' : 'Contact us'}
                </Link>
              </li>
              <li>
                <Link href="#tarifs" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {language === 'fr' ? 'Compte Épargne' : 'Savings Account'}
                </Link>
              </li>
              <li>
                <Link href="#tarifs" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {language === 'fr' ? 'Compte Courant' : 'Current Account'}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {language === 'fr' ? 'Les Cartes UBA' : 'UBA Cards'}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {language === 'fr' ? 'FAQs' : 'FAQs'}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {language === 'fr' ? 'M2U Money' : 'M2U Money'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Banque avec nous */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">
              {language === 'fr' ? 'Banque avec nous' : 'Bank with us'}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {language === 'fr' ? 'Nos solutions numériques' : 'Our digital solutions'}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {language === 'fr' ? 'Banque en ligne' : 'Online banking'}
                </Link>
              </li>
              <li>
                <Link href="#tarifs" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {language === 'fr' ? 'Conditions de Banques' : 'Banking conditions'}
                </Link>
              </li>
              <li>
                <Link href="#apropos" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {language === 'fr' ? 'À propos de nous' : 'About us'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">
              {language === 'fr' ? 'Contact' : 'Contact'}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <a
                  href={formatEmailLink(COMPANY_INFO.email)}
                  className="text-gray-300 hover:text-white transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <a
                  href={formatTelLink(COMPANY_INFO.phone)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Lun-Ven: 8h-17h</p>
                  <p>Samedi: 8h-13h</p>
                </div>
              </div>
            </div>
            <a
              href={formatWhatsAppLink(COMPANY_INFO.whatsapp, language === 'fr' ? 'Bonjour, je souhaite obtenir des informations.' : 'Hello, I would like to get information.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4 font-heading">
              {language === 'fr' ? 'Inscrivez-vous à Notre Newsletter' : 'Subscribe to Our Newsletter'}
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              {language === 'fr' 
                ? 'Restez informé(e) sur l\'actualité de Transfer and Exchange Services'
                : 'Stay informed about Transfer and Exchange Services news'}
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={language === 'fr' ? 'Votre email' : 'Your email'}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                {language === 'fr' ? 'S\'inscrire' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bas du Footer */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {currentYear} {COMPANY_INFO.legalName}.{' '}
              {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                {language === 'fr' ? 'Sitemap' : 'Sitemap'}
              </Link>
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
                {language === 'fr' ? 'Termes et Conditions' : 'Terms and Conditions'}
              </Link>
              <Link href="/confidentialite" className="text-gray-400 hover:text-white transition-colors">
                {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
              </Link>
            </div>
          </div>
          <p className="text-gray-400 text-sm text-center mt-4">
            {language === 'fr' 
              ? 'Transfer and Exchange Services est agréée et réglementée en tant que point UBA officiel au Cameroun'
              : 'Transfer and Exchange Services is licensed and regulated as an official UBA point in Cameroon'}
          </p>
        </div>
      </div>
    </footer>
  );
}


