'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { companyInfo } from '@/data/company';
import SectionHeading from '@/components/ui/SectionHeading';
import { Building2, Target, TrendingUp, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CompanyOverviewSection() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';
  const [currentVisionIndex, setCurrentVisionIndex] = useState(0);
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);
  const [currentAproposIndex, setCurrentAproposIndex] = useState(0);
  
  const visionImages = [
    '/images/IMG_6745.jpg',
    '/images/IMG_6738.jpg',
    '/images/IMG_6727mar.jpg',
    '/images/IMG_6735.jpg',
    '/images/IMG_6742 (1).jpg',
  ];

  const missionImages = [
    '/images/recto uba.png',
    '/images/er.png',
    '/images/dl.png',
    '/images/M2.png',
    '/images/mtn-mobile-money-logo.webp',
    '/images/OIP.webp',
    '/images/uub.png',
    '/images/una c.png',
  ];

  const aproposImages = [
    '/images/OIP (1).webp',
    '/images/logo.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVisionIndex((prev) => (prev + 1) % visionImages.length);
    }, 3000); // Change d'image toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMissionIndex((prev) => (prev + 1) % missionImages.length);
    }, 3000); // Change d'image toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAproposIndex((prev) => (prev + 1) % aproposImages.length);
    }, 3000); // Change d'image toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  const headingSubtitle = isFrench
    ? 'Le Cœur Financier du Groupe REAVEM'
    : 'The Financial Heart of the REAVEM Group';
  const futureIntro = isFrench
    ? 'À l’avenir, la structure prévoit d’étendre encore ses services :'
    : 'In the future, the structure plans to further expand its services:';

  const quickFacts = [
    {
      label: isFrench ? 'Statut légal' : 'Legal status',
      value: companyInfo.legalName,
    },
    {
      label: isFrench ? 'Positionnement' : 'Positioning',
      value: isFrench ? 'Premier Red Point UBA' : 'First UBA Red Point',
    },
    {
      label: isFrench ? 'Rôle' : 'Role',
      value: isFrench
        ? 'Vitrine financière du groupe REAVEM'
        : 'Financial showcase of the REAVEM group',
    },
  ];

  const servicePills = isFrench
    ? ['Comptes & cartes', 'Transferts sécurisés', 'Paiements & change']
    : ['Accounts & cards', 'Secure transfers', 'Payments & FX'];

  const roleHighlights = isFrench
    ? [
        'Vitrine financière du groupe REAVEM',
        'Accès simplifié aux services bancaires modernes',
        'Confiance portée par le Dr Tcheutchoua Christophe',
      ]
    : [
        'Financial showcase of the REAVEM group',
        'Simplified access to modern banking services',
        'Trust embodied by Dr. Tcheutchoua Christophe',
      ];

  const anchoredSections = [
    {
      id: 'vision',
      title: isFrench ? 'Notre vision' : 'Our vision',
      description: isFrench
        ? "Une finance de proximité, accessible partout au Cameroun grâce à un réseau d'agences connectées et à des services digitaux premium."
        : 'Proximity finance, accessible across Cameroon through a connected agency network and premium digital services.',
      placeholder: isFrench ? 'Ajoutez ici un visuel illustrant votre vision.' : 'Add a visual for your vision here.',
    },
    {
      id: 'mission',
      title: isFrench ? 'Notre mission' : 'Our mission',
      description: isFrench ? companyInfo.role : companyInfo.roleEn,
      placeholder: isFrench ? 'Espace réservé pour une photo de vos équipes ou agences.' : 'Reserved space for a team or branch photo.',
    },
    {
      id: 'apropos',
      title: isFrench ? 'À propos du groupe REAVEM' : 'About REAVEM Group',
      description: isFrench
        ? 'REAVEM combine santé, hospitalité et finance pour proposer un écosystème complet au service des populations.'
        : 'REAVEM combines healthcare, hospitality and finance to deliver a comprehensive ecosystem for communities.',
      placeholder: isFrench ? 'Préparez ici un visuel institutionnel (logo, bâtiment, etc.).' : 'Plan to insert an institutional visual here (logo, building, etc.).',
    },
  ];

  return (
    <section id="apropos" className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Formes rouges claires - réduites */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/8 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-primary/6 blur-2xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <SectionHeading
            title={isFrench ? companyInfo.name : companyInfo.nameEn}
            subtitle={headingSubtitle}
            className="text-center"
          />
          <p className="text-gray-700 text-lg md:text-xl">
            {isFrench ? companyInfo.description : companyInfo.descriptionEn}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/90 border border-white/60 shadow-2xl rounded-3xl p-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative z-10 space-y-6">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                {isFrench ? 'Mission stratégique' : 'Strategic mission'}
              </span>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary font-heading mb-4">
                    {isFrench ? 'Un hub financier pour REAVEM' : 'A financial hub for REAVEM'}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {isFrench ? companyInfo.description : companyInfo.descriptionEn}
                  </p>
                  <p className="text-gray-700 leading-relaxed italic">
                    {isFrench ? companyInfo.role : companyInfo.roleEn}
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-gray-100 bg-white/80 px-4 py-3 text-left shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                      {fact.label}
                    </p>
                    <p className="text-gray-900 font-semibold mt-1">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative h-full bg-gradient-to-br from-primary to-black text-white rounded-3xl p-10 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.5),_transparent_45%)]" />
            <div className="relative z-10 space-y-6">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/30">
                {isFrench ? 'Premier Red Point UBA' : 'First UBA Red Point'}
              </span>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl bg-white/10 text-white">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold font-heading mb-3">
                    {isFrench ? companyInfo.ubaPartnership.title : companyInfo.ubaPartnership.titleEn}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {isFrench
                      ? companyInfo.ubaPartnership.description
                      : companyInfo.ubaPartnership.descriptionEn}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {servicePills.map((pill) => (
                  <span
                    key={pill}
                    className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/20"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                {(isFrench ? companyInfo.futureServices.items : companyInfo.futureServices.itemsEn).map(
                  (item, index) => (
                    <div key={item} className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-white/90">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-gray-100 bg-white/90 p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-5">
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-primary">
                {isFrench ? 'Solutions bancaires UBA' : 'UBA banking solutions'}
              </h4>
            </div>
            <div className="space-y-4">
              {(isFrench ? companyInfo.ubaPartnership.services : companyInfo.ubaPartnership.servicesEn).map(
                (service) => (
                  <div key={service} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{service}</p>
                  </div>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-white p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-5">
              <div className="p-2 rounded-xl bg-white text-primary shadow">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-primary">
                {isFrench ? companyInfo.futureServices.title : companyInfo.futureServices.titleEn}
              </h4>
            </div>
            <p className="text-gray-700 mb-6">{futureIntro}</p>
            <div className="space-y-4">
              {(isFrench ? companyInfo.futureServices.items : companyInfo.futureServices.itemsEn).map(
                (item, index) => (
                  <div key={item} className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      {index !== (isFrench ? companyInfo.futureServices.items : companyInfo.futureServices.itemsEn).length - 1 && (
                        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-px h-8 bg-primary/30" />
                      )}
                    </div>
                    <p className="text-gray-800">{item}</p>
                  </div>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-3xl border border-gray-100 bg-white/90 p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-5">
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-primary">
                {isFrench ? 'Impact & valeurs' : 'Impact & values'}
              </h4>
            </div>
            <div className="space-y-4">
              {roleHighlights.map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-primary/40 p-4 text-sm text-gray-600">
              {isFrench
                ? 'Nous connectons les Camerounais aux services bancaires modernes, avec des standards internationaux et une proximité humaine.'
                : 'We connect Cameroonians to modern banking services with international standards and human proximity.'}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 md:mt-16 space-y-10 relative z-10">
        <div className="flex flex-wrap gap-4 justify-center">
          {anchoredSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="px-5 py-2 rounded-full border border-primary/30 text-primary font-semibold bg-white hover:bg-primary hover:text-white transition-colors"
            >
              {section.title}
            </a>
          ))}
        </div>

        <div className="space-y-16">
          {anchoredSections.map((section, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={section.id}
                id={section.id}
                className="grid lg:grid-cols-2 gap-8 items-center py-12 border border-gray-100/70 rounded-3xl bg-white/80 shadow-xl px-6 md:px-10"
              >
                <div className={isEven ? 'order-1' : 'order-2'}>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                    {section.title}
                  </p>
                  <h3 className="text-3xl font-heading font-bold mb-4 text-gray-900">{section.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <div
                  className={`relative h-64 rounded-3xl overflow-hidden ${
                    section.id === 'vision' || section.id === 'mission' || section.id === 'apropos'
                      ? 'border-2 border-gray-200 shadow-lg'
                      : 'border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-500 text-center text-sm px-6'
                  } ${
                    isEven ? 'order-2' : 'order-1'
                  }`}
                >
                  {section.id === 'vision' ? (
                    <div className="relative w-full h-full overflow-hidden">
                      {visionImages.map((image, index) => (
                        <motion.div
                          key={image}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: currentVisionIndex === index ? 1 : 0,
                            y: currentVisionIndex === index ? 0 : 20,
                            zIndex: currentVisionIndex === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.8, ease: 'easeInOut' }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={image}
                            alt={isFrench ? 'Notre vision' : 'Our vision'}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority={index === 0}
                          />
                        </motion.div>
                      ))}
                    </div>
                  ) : section.id === 'mission' ? (
                    <div className="relative w-full h-full overflow-hidden">
                      {missionImages.map((image, index) => (
                        <motion.div
                          key={image}
                          initial={{ x: '100%', opacity: 0 }}
                          animate={{
                            x: currentMissionIndex === index ? 0 : currentMissionIndex > index ? '-100%' : '100%',
                            opacity: currentMissionIndex === index ? 1 : 0,
                            zIndex: currentMissionIndex === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.8, ease: 'easeInOut' }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={image}
                            alt={isFrench ? 'Notre mission' : 'Our mission'}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-contain bg-white"
                            priority={index === 0}
                          />
                        </motion.div>
                      ))}
                    </div>
                  ) : section.id === 'apropos' ? (
                    <div className="relative w-full h-full overflow-hidden">
                      {aproposImages.map((image, index) => (
                        <motion.div
                          key={image}
                          initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                          animate={{
                            scale: currentAproposIndex === index ? 1 : 0.8,
                            opacity: currentAproposIndex === index ? 1 : 0,
                            rotate: currentAproposIndex === index ? 0 : -5,
                            zIndex: currentAproposIndex === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.8, ease: 'easeInOut' }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={image}
                            alt={isFrench ? 'À propos du groupe REAVEM' : 'About REAVEM Group'}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-contain bg-white"
                            priority={index === 0}
                          />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <span>{section.placeholder}</span>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

