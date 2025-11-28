'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { Shield, CreditCard, Smartphone, DollarSign, Building2, Crown, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { formatWhatsAppLink } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/constants';

const servicesContent = {
  fr: [
    {
      icon: CreditCard,
      title: 'Comptes bancaires',
      items: ['Ouverture de comptes', 'Gestion de comptes', 'Dépôts et retraits'],
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: Shield,
      title: 'Cartes UBA',
      items: ['Vente de cartes', 'Recharge de cartes', 'Support technique'],
      color: 'from-primary to-red-700',
    },
    {
      icon: Smartphone,
      title: 'Services mobiles',
      items: ['Application M2U', 'Mobile Banking', 'Paiements en ligne'],
      color: 'from-emerald-600 to-teal-700',
    },
    {
      icon: DollarSign,
      title: 'Services financiers',
      items: ['Change de devises', 'Paiement de factures', 'Transferts nationaux'],
      color: 'from-amber-500 to-orange-600',
    },
  ],
  en: [
    {
      icon: CreditCard,
      title: 'Bank accounts',
      items: ['Account opening', 'Account management', 'Deposits and withdrawals'],
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: Shield,
      title: 'UBA cards',
      items: ['Card sales', 'Card top-up', 'Technical support'],
      color: 'from-primary to-red-700',
    },
    {
      icon: Smartphone,
      title: 'Mobile services',
      items: ['M2U application', 'Mobile banking', 'Online payments'],
      color: 'from-emerald-600 to-teal-700',
    },
    {
      icon: DollarSign,
      title: 'Financial services',
      items: ['Currency exchange', 'Bill payment', 'Domestic transfers'],
      color: 'from-amber-500 to-orange-600',
    },
  ],
} as const;

export default function UBAPartnershipSection() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';
  const ubaServices = servicesContent[language];

  const highlights = [
    {
      title: isFrench ? 'Premier Red Point UBA' : 'First UBA Red Point',
      description: isFrench
        ? 'Franchise officielle UBA pour la distribution de produits bancaires'
        : 'Official UBA franchise for banking products distribution',
      icon: Crown,
    },
    {
      title: isFrench ? 'Réseau national' : 'National network',
      description: isFrench
        ? 'Présence dans 6 agences clés, de Yaoundé à Douala'
        : 'Presence across 6 key agencies, from Yaoundé to Douala',
      icon: Building2,
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(220,38,38,0.25),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(220,38,38,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03),_transparent_70%)]" />
        
        {/* Top and bottom lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Vertical accent lines */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 text-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-5 py-2 text-sm font-bold uppercase tracking-wider text-white border border-white/20"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              {isFrench ? 'Partenaire officiel' : 'Official partner'}
            </motion.div>
            
            <SectionHeading
              title={isFrench ? 'Partenaire officiel UBA' : 'Official UBA partner'}
              subtitle={
                isFrench
                  ? 'Premier Red Point UBA au Cameroun - votre accès privilégié aux services bancaires'
                  : 'First UBA Red Point in Cameroon – your privileged access to banking services'
              }
              align="left"
              theme="dark"
              subtitleClassName="text-white/90"
            />
            
            <p className="text-lg text-white/80 leading-relaxed">
              {isFrench
                ? 'Transfer and Exchange Services connecte les Camerounais aux solutions bancaires UBA : cartes, mobile banking, transferts internationaux et change de devises.'
                : 'Transfer and Exchange Services connects Cameroonians to UBA banking solutions: cards, mobile banking, international transfers and currency exchange.'}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex gap-4 rounded-2xl bg-white/10 backdrop-blur-sm p-5 border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/60 mb-1">{item.title}</p>
                    <p className="text-white font-medium text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 px-5 py-2.5 text-sm font-medium text-white"
            >
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
              {isFrench ? 'Premier Red Point UBA du Cameroun' : "Cameroon's first UBA Red Point"}
            </motion.div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {ubaServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <div className="h-full rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/15 hover:border-white/20 transition-all duration-300">
                    {/* Card header */}
                    <div className={`bg-gradient-to-r ${service.color} p-4`}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-base font-bold text-white font-heading">{service.title}</h3>
                      </div>
                    </div>
                    {/* Card content */}
                    <div className="p-4">
                      <ul className="space-y-2">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2 text-sm text-white/80">
                            <CheckCircle className="w-3.5 h-3.5 text-white/60 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={formatWhatsAppLink(
                COMPANY_INFO.whatsapp,
                isFrench 
                  ? "Bonjour, je souhaite en savoir plus sur les offres et services UBA (cartes, comptes, mobile banking). Merci !"
                  : "Hello, I would like to learn more about UBA offers and services (cards, accounts, mobile banking). Thank you!"
              )}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer block"
            >
              {/* Background with gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-red-500 to-primary rounded-2xl" />
              <div className="absolute inset-[2px] bg-white rounded-[14px]" />
              
              {/* Content */}
              <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-5 px-4 sm:px-6 py-4 sm:py-5">
                {/* Logo container with glow */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-red-50 border border-primary/20 flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:border-primary/40 transition-all duration-300">
                    <Image
                      src="/images/recto uba.png"
                      alt="Carte UBA"
                      width={48}
                      height={32}
                      className="object-contain w-10 sm:w-12"
                      priority
                    />
                  </div>
                </div>
                
                {/* Text content */}
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      {isFrench ? 'Partenaire officiel' : 'Official partner'}
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold font-heading text-gray-900 group-hover:text-primary transition-colors duration-300">
                    UBA Cameroun
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {isFrench ? 'United Bank for Africa' : 'United Bank for Africa'}
                  </p>
                </div>
                
                {/* CTA button */}
                <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary to-red-600 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-primary/30 group-hover:shadow-primary/50 group-hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center">
                  <span className="font-semibold text-xs sm:text-sm whitespace-nowrap">
                    {isFrench ? 'Voir les offres' : 'View offers'}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}


