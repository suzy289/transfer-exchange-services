'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { Shield, CreditCard, Smartphone, DollarSign, Building2, Crown, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

const servicesContent = {
  fr: [
    {
      icon: CreditCard,
      title: 'Comptes bancaires',
      items: ['Ouverture de comptes', 'Gestion de comptes', 'Dépôts et retraits'],
    },
    {
      icon: Shield,
      title: 'Cartes UBA',
      items: ['Vente de cartes', 'Recharge de cartes', 'Support technique'],
    },
    {
      icon: Smartphone,
      title: 'Services mobiles',
      items: ['Application M2U', 'Mobile Banking', 'Paiements en ligne'],
    },
    {
      icon: DollarSign,
      title: 'Services financiers',
      items: ['Change de devises', 'Paiement de factures', 'Transferts nationaux'],
    },
  ],
  en: [
    {
      icon: CreditCard,
      title: 'Bank accounts',
      items: ['Account opening', 'Account management', 'Deposits and withdrawals'],
    },
    {
      icon: Shield,
      title: 'UBA cards',
      items: ['Card sales', 'Card top-up', 'Technical support'],
    },
    {
      icon: Smartphone,
      title: 'Mobile services',
      items: ['M2U application', 'Mobile banking', 'Online payments'],
    },
    {
      icon: DollarSign,
      title: 'Financial services',
      items: ['Currency exchange', 'Bill payment', 'Domestic transfers'],
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
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-primary-dark" />
      <div className="absolute inset-0 opacity-30 mix-blend-screen" style={{ backgroundImage: 'radial-gradient(circle at top, rgba(255,255,255,0.3), transparent 60%)' }} />
      <div className="container relative mx-auto px-4 text-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-primary/20">
              {isFrench ? 'Partenaire officiel' : 'Official partner'}
            </div>
            <SectionHeading
              title={isFrench ? 'Partenaire officiel UBA' : 'Official UBA partner'}
              subtitle={
                isFrench
                  ? 'Premier Red Point UBA au Cameroun - votre accès privilégié aux services bancaires'
                  : 'First UBA Red Point in Cameroon – your privileged access to banking services'
              }
              align="left"
              theme="dark"
              subtitleClassName="text-white"
            />
            <p className="text-lg text-white/80">
              {isFrench
                ? 'Transfer and Exchange Services connecte les Camerounais aux solutions bancaires UBA : cartes, mobile banking, transferts internationaux et change de devises.'
                : 'Transfer and Exchange Services connects Cameroonians to UBA banking solutions: cards, mobile banking, international transfers and currency exchange.'}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur border border-white/10 lg:hover:bg-white/20 lg:transition lg:duration-300"
                >
                  <item.icon className="h-10 w-10 text-white" />
                  <div>
                    <p className="text-sm uppercase tracking-widest text-white/60">{item.title}</p>
                    <p className="text-white font-semibold">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white/90">
              <span className="inline-flex h-2 w-2 rounded-full bg-white" />
              {isFrench ? 'Premier Red Point UBA du Cameroun' : 'Cameroon’s first UBA Red Point'}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {ubaServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full border-white/20 bg-white/10 text-white backdrop-blur">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 overflow-hidden">
                      <Image
                        src="/images/carte uba.png"
                        alt="Carte UBA"
                        width={36}
                        height={20}
                        className="object-contain"
                        priority
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 font-heading">{service.title}</h3>
                    <ul className="space-y-2 text-sm text-white/80">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-4 rounded-2xl bg-white text-primary px-6 py-5 shadow-lg"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">
                  {isFrench ? 'En collaboration avec' : 'In partnership with'}
                </p>
                <p className="text-2xl font-bold font-heading">UBA Cameroun</p>
              </div>
              <div className="ml-auto flex items-center gap-2 text-primary">
                <span className="font-semibold">
                  {isFrench ? 'Voir les offres UBA' : 'Browse UBA offers'}
                </span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


