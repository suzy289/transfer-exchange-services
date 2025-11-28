'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { useRef, useEffect, useState } from 'react';
import {
  CreditCard,
  UserPlus,
  Wallet,
  Smartphone,
  BadgeDollarSign,
  Send,
  Users,
  Receipt,
  LucideIcon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesSection() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Défilement automatique
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000); // Change toutes les 3 secondes

    return () => clearInterval(interval);
  }, [isPaused]);

  // Scroll vers la carte active
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 320 + 24; // largeur carte + gap
      scrollRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const scrollToCard = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    } else {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }
  };

  const iconComponents: Record<string, LucideIcon> = {
    'uba-cards': CreditCard,
    'account-opening': UserPlus,
    'deposits-withdrawals': Wallet,
    'm2u': Smartphone,
    'currency-exchange': BadgeDollarSign,
    'money-transfer': Send,
    'salary-payment': Users,
    'bill-payment': Receipt,
  };

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background artistic shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />

        <div className="absolute -top-16 -right-24 w-[420px] h-[420px] bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -left-24 w-[360px] h-[360px] bg-gradient-to-tl from-primary/10 via-primary/5 to-transparent blur-2xl" />

        <div
          className="absolute left-1/4 top-0 w-[360px] h-[280px] opacity-40 rotate-6 bg-primary/20"
          style={{
            clipPath: 'polygon(0% 0%, 80% 10%, 100% 60%, 15% 100%)',
          }}
        />
        <div
          className="absolute right-0 bottom-10 w-[420px] h-[300px] opacity-30 -rotate-6 bg-gradient-to-br from-primary/30 to-transparent"
          style={{
            clipPath: 'polygon(10% 0%, 100% 10%, 85% 100%, 0% 90%)',
          }}
        />

        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(120deg, rgba(220,38,38,0.12), rgba(220,38,38,0.12) 2px, transparent 2px, transparent 16px)',
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 p-10 rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-2xl overflow-hidden"
        >
          {/* Effets de lumière */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(220,38,38,0.2),_transparent_50%)] opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(220,38,38,0.15),_transparent_50%)] opacity-60" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
          
          <div className="relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/30 to-primary/10 text-white text-sm font-bold border border-primary/40 shadow-lg shadow-primary/20 backdrop-blur-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {isFrench ? 'SERVICES FINANCIERS' : 'FINANCIAL SERVICES'}
            </span>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {isFrench
                ? 'Transfer and Exchange Services vous offre une gamme complète de solutions bancaires et financières'
                : 'Transfer and Exchange Services provides a comprehensive range of banking and financial solutions'}
            </p>
          </div>
        </motion.div>

        {/* Horizontal Scroll Cards */}
        <div 
          className="relative -mx-4 px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Boutons de navigation */}
          <button
            onClick={() => scrollToCard('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group/btn"
          >
            <ChevronLeft className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
          </button>
          <button
            onClick={() => scrollToCard('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group/btn"
          >
            <ChevronRight className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
          </button>

          {/* Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scrollbar-hide px-8" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => {
              const title = isFrench ? service.title : service.titleEn;
              const description = isFrench ? service.description : service.descriptionEn;
              const details = isFrench ? service.details : service.detailsEn;
              const IconComponent = iconComponents[service.id] || CreditCard;
              
              // Couleurs d'icônes variées
              const iconColors = [
                'bg-gradient-to-br from-primary to-red-700',
                'bg-gradient-to-br from-gray-900 to-black',
                'bg-gradient-to-br from-orange-500 to-amber-600',
                'bg-gradient-to-br from-blue-600 to-blue-800',
                'bg-gradient-to-br from-green-600 to-emerald-700',
                'bg-gradient-to-br from-purple-600 to-violet-800',
                'bg-gradient-to-br from-pink-600 to-rose-700',
                'bg-gradient-to-br from-cyan-600 to-teal-700',
              ];
              
              return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-shrink-0 w-[320px] snap-center group"
              >
                <div className="relative h-[420px] rounded-[2rem] overflow-hidden bg-white border-2 border-gray-100 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl">
                  {/* Numéro en grand */}
                  <div className="absolute -top-4 -right-4 text-[180px] font-black text-gray-100 leading-none select-none pointer-events-none z-0">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Barre colorée en haut */}
                  <div className={`h-2 w-full ${iconColors[index % iconColors.length]}`} />
                  
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Icône avec effet */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className={`relative w-16 h-16 rounded-2xl ${iconColors[index % iconColors.length]} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Titre */}
                    <h3 className="text-2xl font-bold text-gray-900 font-heading mb-3 group-hover:text-primary transition-colors duration-300">
                      {title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                      {description}
                    </p>
                    
                    {/* Ligne séparatrice */}
                    <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent mb-4" />
                    
                    {/* Détails en tags */}
                    <div className="flex flex-wrap gap-2">
                      {details.slice(0, 2).map((detail, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                          {detail.length > 25 ? detail.substring(0, 25) + '...' : detail}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Effet hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
              );
            })}
          </div>
          
          {/* Indicateurs de pagination */}
          <div className="flex justify-center items-center gap-3 mt-6">
            {services.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-10 h-3 bg-primary' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          {/* Indicateur de progression */}
          <div className="flex justify-center mt-4">
            <div className="text-sm text-gray-500 font-medium">
              <span className="text-primary font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="mx-2">/</span>
              <span>{String(services.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
