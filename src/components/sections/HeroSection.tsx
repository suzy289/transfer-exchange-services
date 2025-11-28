'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight, Shield, Globe, CreditCard, Crown } from 'lucide-react';
import Button from '@/components/ui/Button';
import BackgroundShapes from '@/components/BackgroundShapes';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedSuffix, setDisplayedSuffix] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const backgroundImages = [
    '/images/f1.jpg',
    '/images/ub1.jpg',
    '/images/f.jpg',
  ];

  const cardTypes = [
    {
      price: '10 000',
      limit: '250 000',
      name: 'Standard',
      description: language === 'fr' 
        ? 'Parfaite pour vos transactions quotidiennes'
        : 'Perfect for your daily transactions',
    },
    {
      price: '12 000',
      limit: '500 000',
      name: 'Premium',
      description: language === 'fr'
        ? 'Idéale pour vos besoins professionnels'
        : 'Ideal for your professional needs',
    },
    {
      price: '14 500',
      limit: '1 500 000',
      name: 'Prestige',
      description: language === 'fr'
        ? 'Pour vos opérations de grande envergure'
        : 'For your large-scale operations',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);


  const getContent = () => {
    const baseContent = {
      fr: {
        badge: 'Premier Red Point UBA',
        titleParts: {
          prefix: 'Premier',
          highlight: 'Red Point UBA',
          suffix: 'au Cameroun',
        },
        subtitle: 'Le Cœur Financier du Groupe REAVEM',
        description:
          "Facilitons l'accès aux services bancaires et aux opérations financières du quotidien. Ouverture de comptes, transferts nationaux & internationaux, change de devises, paiement de factures et services mobile banking.",
        primaryCta: 'Ouvrir un compte UBA',
        secondaryCta: 'Découvrir nos services',
        servicesTitle: 'Services disponibles',
        services: [
          { icon: CreditCard, text: 'Cartes bancaires UBA' },
          { icon: Globe, text: "Transfert d'argent international" },
          { icon: Shield, text: 'Change Euro/Dollar' },
          { icon: CreditCard, text: 'Paiement de factures' },
        ],
      },
      en: {
        badge: 'First UBA Red Point',
        titleParts: {
          prefix: 'First',
          highlight: 'UBA Red Point',
          suffix: 'in Cameroon',
        },
        subtitle: 'The Financial Heart of REAVEM Group',
        description:
          'We facilitate access to banking services and daily financial operations. Account opening, national & international transfers, currency exchange, bill payments and mobile banking services.',
        primaryCta: 'Open a UBA account',
        secondaryCta: 'Discover our services',
        servicesTitle: 'Available services',
        services: [
          { icon: CreditCard, text: 'UBA banking cards' },
          { icon: Globe, text: 'International money transfers' },
          { icon: Shield, text: 'Euro / Dollar exchange' },
          { icon: CreditCard, text: 'Bill payment services' },
        ],
      },
    };
    
    return baseContent[language];
  };

  const t = getContent();
  const titleSuffix = t.titleParts.suffix;

  useEffect(() => {
    setDisplayedSuffix('');
    setIsTyping(true);

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setDisplayedSuffix(titleSuffix.slice(0, index));

      if (index >= titleSuffix.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [titleSuffix]);
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-white text-gray-800 overflow-hidden"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 min-h-screen" style={{ zIndex: 0 }}>
        <AnimatePresence mode="wait">
          {backgroundImages.map((image, index) => {
            if (index !== currentSlide) return null;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={image}
                  alt={`Background ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                  quality={90}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      {/* Overlay noir transparent pour assombrir l'image */}
      <div 
        className="absolute inset-0 min-h-screen"
        style={{
          background: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />
      
      {/* Overlay glassmorphism pour améliorer la lisibilité */}
      <div 
        className="absolute inset-0 min-h-screen backdrop-blur-sm"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.05), rgba(255,255,255,0.1))',
          zIndex: 2,
        }}
      />
      
      {/* Lumière rotative */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 3 }}>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Gradient rotatif pour créer l'effet de lumière */}
          <div 
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0deg, rgba(239, 68, 68, 0.3) 60deg, rgba(239, 68, 68, 0.5) 90deg, rgba(239, 68, 68, 0.3) 120deg, transparent 180deg, transparent 360deg)',
            }}
          />
        </motion.div>
        
        {/* Deuxième lumière pour plus d'effet */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div 
            className="absolute inset-0 rounded-full opacity-20"
            style={{
              background: 'conic-gradient(from 180deg, transparent 0deg, rgba(220, 38, 38, 0.4) 45deg, rgba(220, 38, 38, 0.6) 75deg, rgba(220, 38, 38, 0.4) 105deg, transparent 135deg, transparent 360deg)',
            }}
          />
        </motion.div>
      </div>
      
      {/* Background Shapes subtils */}
      <div style={{ zIndex: 4 }}>
        <BackgroundShapes />
      </div>
      
      {/* Overlay très léger pour la profondeur */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20" 
        style={{ zIndex: 5 }}
      />

      <div className="container mx-auto px-4 py-20 relative" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl -z-10 shadow-2xl" />
            <div className="relative p-8 md:p-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block mb-4"
              >
                <span className="bg-yellow-400 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {t.badge}
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight text-gray-900">
                <span>{t.titleParts.prefix} </span>
                <span className="text-primary">{t.titleParts.highlight}</span>
                <span className="relative inline-flex items-center pl-2">
                  <span className="inline-block whitespace-nowrap">
                    {isTyping ? displayedSuffix : titleSuffix}
                  </span>
                  {isTyping && <span className="typing-cursor ml-1" />}
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-4 text-gray-700 font-medium">
                {t.subtitle}
              </p>

              <p className="text-lg mb-10 text-gray-600">
                {t.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  {t.primaryCta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button href="#services" variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  {t.secondaryCta}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Content - UBA Card Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {cardTypes.map((card, index) => {
                if (index !== currentSlide) return null;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    {/* Card Image Background with 3D effect */}
                    <div className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl group" style={{ perspective: '1000px' }}>
                      <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.05, rotateY: 8, rotateX: 5 }}
                        transition={{ duration: 0.4, type: 'spring' }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {/* Card container with glow */}
                        <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent backdrop-blur-sm border border-white/20" />
                        <div className="relative w-full h-full p-6 md:p-8">
                          <Image
                            src="/images/carte uba.png"
                            alt={card.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain"
                            priority
                            onError={(e) => {
                              // Fallback to jpg if png doesn't exist
                              const target = e.target as HTMLImageElement;
                              if (target.src.includes('.png')) {
                                target.src = target.src.replace('.png', '.jpg');
                              }
                            }}
                          />
                          {/* Shine effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>
                        {/* Glow effect */}
                        <div className="absolute -inset-2 bg-primary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                      {/* Gradient overlay for better text visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                      
                      {/* Card Information Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="bg-white/98 backdrop-blur-xl rounded-2xl p-6 md:p-8 border-2 border-white/40 shadow-2xl"
                        >
                          <div className="flex items-center justify-between mb-6">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold border border-white/30">
                                  {language === 'fr' ? 'OFFRE SPÉCIALE' : 'SPECIAL OFFER'}
                                </div>
                                {index === 1 && (
                                  <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                                    className="inline-flex items-center gap-1.5 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                                  >
                                    <Crown className="w-4 h-4" />
                                    <span>{language === 'fr' ? 'Le plus populaire' : 'Most popular'}</span>
                                  </motion.div>
                                )}
                              </div>
                              <h3 className="text-xl md:text-2xl font-bold text-white font-heading mb-2 whitespace-nowrap">
                                {card.name} - {card.price} FCFA
                              </h3>
                              <p className="text-base text-yellow-400 font-medium">{card.description}</p>
                            </div>
                            <div className="relative w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 overflow-hidden">
                              <Image
                                src="/images/carte uba.png"
                                alt="UBA Card"
                                fill
                                sizes="80px"
                                className="object-contain p-2"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  if (target.src.includes('.png')) {
                                    target.src = target.src.replace('.png', '.jpg');
                                  }
                                }}
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-6 pt-6 border-t-2 border-gray-200 mb-6 items-center">
                            <div className="relative h-32 md:h-40 rounded-xl overflow-hidden border-2 border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                              <Image
                                src="/images/carte uba.png"
                                alt="UBA Card"
                                fill
                                sizes="(max-width: 768px) 40vw, 200px"
                                className="object-contain p-3"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  if (target.src.includes('.png')) {
                                    target.src = target.src.replace('.png', '.jpg');
                                  }
                                }}
                              />
                            </div>
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 h-32 md:h-40 flex flex-col justify-center">
                              <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">
                                {language === 'fr' ? 'Plafond quotidien' : 'Daily limit'}
                              </p>
                              <p className="text-3xl font-bold text-gray-900">
                                {card.limit} <span className="text-xl">FCFA</span>
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {language === 'fr' ? '/ jour' : '/ day'}
                              </p>
                            </div>
                          </div>
                          
                          <Button 
                            href="#tarifs" 
                            variant="primary" 
                            size="lg" 
                            className="w-full mt-2 shadow-lg hover:shadow-xl hover:bg-yellow-400 hover:text-gray-900 transition-all"
                          >
                            {language === 'fr' ? 'Commander cette carte' : 'Order this card'}
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Card Type Indicators - Positioned bottom right */}
      <div className="absolute bottom-6 right-6 flex flex-col items-end space-y-3" style={{ zIndex: 10 }}>
        <div className="flex space-x-2">
          {cardTypes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-lg border ${
                index === currentSlide
                  ? 'bg-primary text-white border-primary shadow-lg scale-110'
                  : 'bg-white/20 text-white border-white/30 hover:bg-yellow-400 hover:text-gray-900 hover:border-yellow-400'
              }`}
              aria-label={`${cardTypes[index].name}`}
            >
              <span className="text-sm font-semibold">{cardTypes[index].name}</span>
            </button>
          ))}
        </div>
        <div className="flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        style={{ zIndex: 10 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 bg-white/20 backdrop-blur-lg hover:bg-white/30 transition-all duration-300"
        >
          <div className="w-1 h-3 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}


