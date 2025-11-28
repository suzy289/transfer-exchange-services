'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { formatWhatsAppLink, formatTelLink, formatEmailLink } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/40 shadow-lg relative">
                <Image
                  src="/images/logo.png"
                  alt="Transfer and Exchange Services logo"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div>
                <h3 className="font-bold text-lg font-heading">Transfer & Exchange</h3>
                <p className="text-gray-400 text-xs">Services SARL</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              {isFrench
                ? 'Premier Red Point UBA au Cameroun. Vitrine financière du groupe REAVEM.'
                : 'First UBA Red Point in Cameroon. Financial showcase of the REAVEM group.'}
            </p>
            <div className="flex space-x-3">
              {[COMPANY_INFO.social.facebook, COMPANY_INFO.social.instagram, COMPANY_INFO.social.linkedin].map(
                (link, idx) => {
                  const icons = [Facebook, Instagram, Linkedin];
                  const Icon = icons[idx];
                  const labels = ['Facebook', 'Instagram', 'LinkedIn'];
                  return (
                    <a
                      key={labels[idx]}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors"
                      aria-label={labels[idx]}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                },
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">
              {isFrench ? 'Information utile' : 'Useful information'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {isFrench ? 'Contactez-nous' : 'Contact us'}
                </Link>
              </li>
              <li>
                <Link href="#tarifs" className="text-gray-300 hover:text-white transition-colors">
                  {isFrench ? 'Compte épargne' : 'Savings account'}
                </Link>
              </li>
              <li>
                <Link href="#tarifs" className="text-gray-300 hover:text-white transition-colors">
                  {isFrench ? 'Compte courant' : 'Current account'}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  {isFrench ? 'Les cartes UBA' : 'UBA cards'}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  M2U Money
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">
              {isFrench ? 'Banque avec nous' : 'Bank with us'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  {isFrench ? 'Nos solutions numériques' : 'Our digital solutions'}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  {isFrench ? 'Banque en ligne' : 'Online banking'}
                </Link>
              </li>
              <li>
                <Link href="#tarifs" className="text-gray-300 hover:text-white transition-colors">
                  {isFrench ? 'Conditions de banque' : 'Banking conditions'}
                </Link>
              </li>
              <li>
                <Link href="#apropos" className="text-gray-300 hover:text-white transition-colors">
                  {isFrench ? 'À propos de nous' : 'About us'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">
              {isFrench ? 'Contact' : 'Contact'}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <a href={formatEmailLink(COMPANY_INFO.email)} className="text-gray-300 hover:text-white break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <a href={formatTelLink(COMPANY_INFO.phone)} className="text-gray-300 hover:text-white">
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
                  <p>{isFrench ? 'Lun-Ven : 8h-17h' : 'Mon-Fri: 8am-5pm'}</p>
                  <p>{isFrench ? 'Samedi : 8h-13h' : 'Saturday: 8am-1pm'}</p>
                </div>
              </div>
            </div>
            <a
              href={formatWhatsAppLink(
                COMPANY_INFO.whatsapp,
                isFrench ? 'Bonjour, je souhaite obtenir des informations.' : 'Hello, I would like more information.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © 2025 Transfer and Exchange Services SARL. {isFrench ? 'Tous droits réservés.' : 'All rights reserved.'}
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                {isFrench ? 'Plan du site' : 'Sitemap'}
              </Link>
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
                {isFrench ? 'Termes et conditions' : 'Terms and conditions'}
              </Link>
              <Link href="/confidentialite" className="text-gray-400 hover:text-white transition-colors">
                {isFrench ? 'Politique de confidentialité' : 'Privacy policy'}
              </Link>
            </div>
          </div>
          <p className="text-gray-400 text-sm text-center mt-4">
            {isFrench
              ? 'Transfer and Exchange Services est agréée et réglementée en tant que point UBA officiel au Cameroun'
              : 'Transfer and Exchange Services is licensed and regulated as an official UBA point in Cameroon'}
          </p>
        </div>
      </div>
    </footer>
  );
}

