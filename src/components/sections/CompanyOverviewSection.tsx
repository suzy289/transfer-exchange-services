'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { companyInfo } from '@/data/company';
import SectionHeading from '@/components/ui/SectionHeading';
import { Building2, Target, TrendingUp, CheckCircle, Eye, Rocket, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CompanyOverviewSection() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';
  const [currentVisionIndex, setCurrentVisionIndex] = useState(0);
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);
  
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
      icon: Eye,
      description: isFrench
        ? "Une finance de proximité, accessible partout au Cameroun grâce à un réseau d'agences connectées et à des services digitaux premium."
        : 'Proximity finance, accessible across Cameroon through a connected agency network and premium digital services.',
      placeholder: isFrench ? 'Ajoutez ici un visuel illustrant votre vision.' : 'Add a visual for your vision here.',
      highlights: isFrench 
        ? ['Réseau d\'agences connectées', 'Services digitaux premium', 'Accessibilité nationale']
        : ['Connected agency network', 'Premium digital services', 'National accessibility'],
    },
    {
      id: 'mission',
      title: isFrench ? 'Notre mission' : 'Our mission',
      icon: Rocket,
      description: isFrench ? companyInfo.role : companyInfo.roleEn,
      placeholder: isFrench ? 'Espace réservé pour une photo de vos équipes ou agences.' : 'Reserved space for a team or branch photo.',
      highlights: isFrench 
        ? ['Solutions bancaires modernes', 'Proximité humaine', 'Standards internationaux']
        : ['Modern banking solutions', 'Human proximity', 'International standards'],
    },
    {
      id: 'apropos',
      title: isFrench ? 'À propos du groupe REAVEM' : 'About REAVEM Group',
      icon: Users,
      description: isFrench
        ? 'REAVEM combine santé, hospitalité et finance pour proposer un écosystème complet au service des populations.'
        : 'REAVEM combines healthcare, hospitality and finance to deliver a comprehensive ecosystem for communities.',
      placeholder: isFrench ? 'Préparez ici un visuel institutionnel (logo, bâtiment, etc.).' : 'Plan to insert an institutional visual here (logo, building, etc.).',
      highlights: isFrench 
        ? ['Écosystème complet', 'Santé & hospitalité', 'Finance intégrée']
        : ['Complete ecosystem', 'Health & hospitality', 'Integrated finance'],
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
            className="relative bg-gradient-to-br from-white via-white to-gray-50 border border-gray-200 shadow-2xl rounded-3xl p-10 overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-black/5 via-transparent to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/10 via-transparent to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 right-0 w-1 h-24 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
            <div className="relative z-10 space-y-6">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-black text-white text-sm font-semibold">
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
                    className="rounded-2xl border border-black/15 bg-white/80 px-4 py-3 text-left shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-wide text-primary font-semibold">
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
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="group relative h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white rounded-3xl p-10 shadow-2xl overflow-hidden"
          >
            {/* Effets de lumière animés */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(220,38,38,0.3),_transparent_50%)] group-hover:opacity-100 opacity-70 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(220,38,38,0.25),_transparent_50%)] group-hover:opacity-100 opacity-60 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_70%)]" />
            
            {/* Lignes décoratives */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
            <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-primary/50 to-transparent" />
            <div className="absolute top-0 right-0 w-px h-1/3 bg-gradient-to-b from-primary/40 to-transparent" />
            
            {/* Cercles décoratifs flottants */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/15 transition-colors duration-700" />
            
            {/* Grille de points subtile */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[size:20px_20px]" />
            
            <div className="relative z-10 space-y-6">
              {/* Badge avec effet glow */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/30 to-primary/10 text-white text-sm font-bold border border-primary/40 shadow-lg shadow-primary/20 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {isFrench ? 'Premier Red Point UBA' : 'First UBA Red Point'}
                </span>
                <div className="hidden sm:flex items-center gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-start space-x-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative p-4 rounded-2xl bg-gradient-to-br from-primary to-red-700 text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Target className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    {isFrench ? companyInfo.ubaPartnership.title : companyInfo.ubaPartnership.titleEn}
                  </h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {isFrench
                      ? companyInfo.ubaPartnership.description
                      : companyInfo.ubaPartnership.descriptionEn}
                  </p>
                </div>
              </div>
              
              {/* Pills avec hover effects */}
              <div className="flex flex-wrap gap-3">
                {servicePills.map((pill, idx) => (
                  <motion.span
                    key={pill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="px-4 py-2 rounded-full bg-white/5 text-white text-sm font-semibold border border-white/10 hover:bg-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm"
                  >
                    {pill}
                  </motion.span>
                ))}
              </div>
              
              {/* Liste des items avec style amélioré */}
              <div className="space-y-4 pt-2">
                {(isFrench ? companyInfo.futureServices.items : companyInfo.futureServices.itemsEn).map(
                  (item, index) => (
                    <motion.div 
                      key={item} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="group/item flex items-start space-x-4"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/40 rounded-xl blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center text-sm font-bold text-white group-hover/item:from-primary group-hover/item:to-red-700 group-hover/item:border-primary transition-all duration-300">
                          {index + 1}
                        </div>
                      </div>
                      <span className="text-white/70 group-hover/item:text-white transition-colors duration-300 pt-2">{item}</span>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Carte Solutions bancaires UBA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Fond décoratif */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-orange-50 opacity-60" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-red-700 text-white shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary/60">UBA Partner</span>
                  <h4 className="text-xl font-bold text-gray-900">
                    {isFrench ? 'Solutions bancaires UBA' : 'UBA banking solutions'}
                  </h4>
                </div>
              </div>
              <div className="space-y-3">
                {(isFrench ? companyInfo.ubaPartnership.services : companyInfo.ubaPartnership.servicesEn).map(
                  (service, idx) => (
                    <motion.div 
                      key={service} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-xl bg-white/80 border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{service}</p>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          {/* Carte Perspective d'évolution - Design premium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden"
          >
            {/* Effets lumineux */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(220,38,38,0.2),_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(220,38,38,0.15),_transparent_60%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 text-primary group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {isFrench ? 'En développement' : 'In development'}
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    {isFrench ? companyInfo.futureServices.title : companyInfo.futureServices.titleEn}
                  </h4>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{futureIntro}</p>
              <div className="space-y-4">
                {(isFrench ? companyInfo.futureServices.items : companyInfo.futureServices.itemsEn).map(
                  (item, index) => (
                    <motion.div 
                      key={item} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-start space-x-4 group/item"
                    >
                      <div className="relative">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-red-700 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/30 group-hover/item:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                        {index !== (isFrench ? companyInfo.futureServices.items : companyInfo.futureServices.itemsEn).length - 1 && (
                          <div className="absolute left-1/2 top-12 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-primary/50 to-transparent" />
                        )}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed pt-2 group-hover/item:text-white transition-colors duration-300">{item}</p>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          {/* Carte Impact & valeurs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Fond décoratif */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-red-50 opacity-60" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-tl from-primary/15 to-transparent rounded-full group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-red-400 to-orange-400" />
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-red-700 text-white shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary/60">REAVEM Group</span>
                  <h4 className="text-xl font-bold text-gray-900">
                    {isFrench ? 'Impact & valeurs' : 'Impact & values'}
                  </h4>
                </div>
              </div>
              <div className="space-y-3">
                {roleHighlights.map((item, idx) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-red-600 mt-2 group-hover:scale-150 transition-transform duration-300" />
                    <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-primary/10 via-red-50 to-orange-50 border border-primary/20 p-5">
                <p className="text-sm text-gray-700 leading-relaxed italic">
                  <span className="text-primary font-semibold text-lg leading-none">"</span>
                  {isFrench
                    ? 'Nous connectons les Camerounais aux services bancaires modernes, avec des standards internationaux et une proximité humaine.'
                    : 'We connect Cameroonians to modern banking services with international standards and human proximity.'}
                  <span className="text-primary font-semibold text-lg leading-none">"</span>
                </p>
              </div>
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
              className="px-6 py-3 rounded-xl border-2 border-white text-white font-semibold bg-black hover:bg-white hover:text-black hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {section.title}
            </a>
          ))}
        </div>

        <div className="space-y-16">
          {anchoredSections.map((section, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative grid lg:grid-cols-2 gap-8 items-center py-12 rounded-3xl px-6 md:px-10 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-2xl"
              >
                {/* Effets de lumière */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(220,38,38,0.2),_transparent_50%)] opacity-70" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(220,38,38,0.15),_transparent_50%)] opacity-60" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
                <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-primary/50 to-transparent" />
                
                <div className={`relative z-10 ${isEven ? 'order-1' : 'order-2'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-primary/50 rounded-2xl blur-xl" />
                      <div className="relative p-3 rounded-2xl bg-gradient-to-br from-primary to-red-700 text-white shadow-xl">
                        <section.icon className="w-7 h-7" />
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/30 to-primary/10 text-white text-base font-bold border border-primary/40 shadow-lg shadow-primary/20 backdrop-blur-sm">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      {section.title.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {section.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {section.highlights.map((highlight, idx) => (
                      <motion.span
                        key={highlight}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="px-4 py-2 rounded-full bg-white/5 text-white text-sm font-semibold border border-white/10 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default backdrop-blur-sm"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div
                  className={`relative z-10 h-64 rounded-3xl overflow-hidden ${
                    section.id === 'vision' || section.id === 'mission' || section.id === 'apropos'
                      ? 'border-2 border-white/20 shadow-2xl shadow-primary/10 group-hover:border-primary/40 transition-all duration-500'
                      : 'border-2 border-dashed border-white/30 bg-white/5 flex items-center justify-center text-white/50 text-center text-sm px-6'
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
                    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl">
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
                            className="object-contain p-4"
                            priority={index === 0}
                          />
                        </motion.div>
                      ))}
                    </div>
                  ) : section.id === 'apropos' ? (
                    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl flex items-center justify-center">
                      <Image
                        src="/images/logo.png"
                        alt={isFrench ? 'Logo REAVEM' : 'REAVEM Logo'}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain p-6"
                        priority
                      />
                    </div>
                  ) : (
                    <span>{section.placeholder}</span>
                  )}
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

