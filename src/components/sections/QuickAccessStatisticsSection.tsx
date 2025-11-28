'use client';

import { motion } from 'framer-motion';
import { CreditCard, Building2, MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import { formatWhatsAppLink, formatTelLink, formatEmailLink } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/constants';
import { statistics } from '@/data/statistics';
import { useLanguage } from '@/context/LanguageContext';
import SectionHeading from '@/components/ui/SectionHeading';

export default function QuickAccessStatisticsSection() {
  const { language } = useLanguage();

  const quickLinks = [
    {
      icon: CreditCard,
      title: language === 'fr' ? 'Ouvrir un compte' : 'Open an account',
      description: language === 'fr' ? 'Découvrez nos cartes UBA' : 'Discover our UBA cards',
      href: '#tarifs',
      isRed: true,
    },
    {
      icon: Building2,
      title: language === 'fr' ? 'Nos agences' : 'Our agencies',
      description: language === 'fr' ? 'Trouvez l\'agence la plus proche' : 'Find the nearest agency',
      href: '#agences',
      isRed: false,
    },
    {
      icon: Phone,
      title: language === 'fr' ? 'Nous appeler' : 'Call us',
      description: COMPANY_INFO.phone,
      href: formatTelLink(COMPANY_INFO.phone),
      isRed: true,
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: language === 'fr' ? 'Contactez-nous directement' : 'Contact us directly',
      href: formatWhatsAppLink(
        COMPANY_INFO.whatsapp,
        language === 'fr'
          ? 'Bonjour, je souhaite obtenir des informations.'
          : 'Hello, I would like to get more information.',
      ),
      isRed: false,
    },
    {
      icon: Mail,
      title: 'Email',
      description: COMPANY_INFO.email,
      href: formatEmailLink(COMPANY_INFO.email),
      isRed: false,
    },
    {
      icon: MapPin,
      title: language === 'fr' ? 'Localisateur' : 'Locator',
      description: language === 'fr' ? 'Trouvez nos points de vente' : 'Locate our service points',
      href: '#agences',
      isRed: true,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Abstract polygon background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute -left-24 top-8 w-80 h-80 bg-gradient-to-br from-primary to-primary/60 opacity-60 blur-sm rotate-6"
          style={{
            clipPath: 'polygon(0% 0%, 80% 10%, 100% 70%, 20% 100%)',
          }}
        />
        <div
          className="absolute right-16 top-16 w-[420px] h-[300px] bg-gradient-to-br from-primary/80 via-primary/60 to-transparent opacity-70"
          style={{
            clipPath: 'polygon(15% 0%, 100% 0%, 85% 90%, 0% 100%)',
          }}
        />
        <div
          className="absolute left-1/3 bottom-0 w-[360px] h-[260px] bg-gradient-to-tr from-primary/90 via-primary/60 to-transparent opacity-60 rotate-12"
          style={{
            clipPath: 'polygon(0% 40%, 50% 0%, 100% 20%, 90% 100%, 10% 100%)',
          }}
        />
      </div>

      {/* Background geometric lines - doubled diagonal lines from bottom left to top right */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-10">
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#DC2626" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#DC2626" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Doubled diagonal lines - 10 lines total */}
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="url(#lineGradient)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="90%" x2="100%" y2="-10%" stroke="url(#lineGradient2)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="80%" x2="100%" y2="-20%" stroke="url(#lineGradient)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="70%" x2="100%" y2="-30%" stroke="url(#lineGradient2)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="60%" x2="100%" y2="-40%" stroke="url(#lineGradient)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="50%" x2="100%" y2="-50%" stroke="url(#lineGradient2)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="40%" x2="100%" y2="-60%" stroke="url(#lineGradient)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="30%" x2="100%" y2="-70%" stroke="url(#lineGradient2)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="20%" x2="100%" y2="-80%" stroke="url(#lineGradient)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="10%" x2="100%" y2="-90%" stroke="url(#lineGradient2)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
        
        {/* Enhanced animated geometric shapes */}
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        {/* Additional geometric shapes */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-primary/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Side - Quick Access - Explosive Design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="lg:pr-8 flex flex-col"
          >
            <SectionHeading
              title={language === 'fr' ? 'Accès rapide' : 'Quick access'}
              subtitle={
                language === 'fr'
                  ? 'Trouvez rapidement ce dont vous avez besoin'
                  : 'Quickly find what you need'
              }
              className="mb-8"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ 
                      delay: index * 0.08,
                      type: 'spring',
                      stiffness: 100,
                      damping: 15
                    }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group relative block"
                  >
                    {/* Card design moderne - vertical layout */}
                    <div className={`relative h-full rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col items-center text-center ${
                      link.isRed 
                        ? 'bg-gradient-to-br from-primary via-primary to-red-700' 
                        : 'bg-white border-2 border-gray-200 hover:border-black'
                    }`}>
                      
                      {/* Decorative circles for colored cards */}
                      {link.isRed && (
                        <div className="absolute inset-0 opacity-10 overflow-hidden">
                          <div className="absolute -top-8 -right-8 w-24 h-24 bg-white rounded-full" />
                          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full" />
                        </div>
                      )}
                      
                      {/* Icon container - au dessus */}
                      <div className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 mb-3 ${
                        link.isRed 
                          ? 'bg-white/20 backdrop-blur-sm' 
                          : 'bg-black'
                      }`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>

                      {/* Content - en bas */}
                      <div className="relative z-10 flex-1">
                        <h3 className={`text-sm sm:text-base md:text-lg font-bold font-heading mb-1 ${
                          link.isRed ? 'text-white' : 'text-black'
                        }`}>
                          {link.title}
                        </h3>
                        <p className={`text-xs sm:text-sm leading-snug line-clamp-2 ${
                          link.isRed ? 'text-white/80' : 'text-gray-600'
                        }`}>
                          {link.description}
                        </p>
                      </div>

                      {/* Bottom accent for white cards */}
                      {!link.isRed && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      )}
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - Statistics - Modified shapes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="lg:pl-8 flex flex-col"
          >
            <SectionHeading
              title={language === 'fr' ? 'Nos statistiques' : 'Our statistics'}
              subtitle={
                language === 'fr'
                  ? 'Des chiffres qui parlent d\'eux-mêmes'
                  : 'Numbers that speak for themselves'
              }
              className="mb-8"
            />

            <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6 flex-1">
              {statistics.map((stat, index) => {
                const Icon = stat.icon;
                const isRed = index < 2;
                return (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ 
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 100,
                      damping: 15
                    }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                  >
                    {/* Card moderne et épuré */}
                    <div className={`relative h-full rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                      isRed 
                        ? 'bg-gradient-to-br from-primary via-primary to-red-700 text-white' 
                        : 'bg-white border-2 border-gray-200 hover:border-black'
                    }`}>
                      
                      {/* Subtle pattern overlay for red cards */}
                      {isRed && (
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                        </div>
                      )}
                      
                      {/* Icon container */}
                      <div className="relative flex justify-center mb-3 sm:mb-4">
                        <div className={`relative rounded-xl flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110 ${
                          isRed 
                            ? 'bg-white/20 backdrop-blur-sm' 
                            : 'bg-black'
                        }`}>
                          <Icon className={`w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 ${
                            isRed ? 'text-white' : 'text-white'
                          }`} />
                        </div>
                      </div>

                      {/* Value */}
                      <motion.div
                        className="text-center mb-1 sm:mb-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <div className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight ${
                          isRed ? 'text-white' : 'text-black'
                        }`}>
                          {stat.value}
                        </div>
                      </motion.div>

                      {/* Label */}
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <div className={`text-xs xs:text-sm sm:text-base font-medium leading-tight ${
                          isRed ? 'text-white/90' : 'text-gray-600'
                        }`}>
                          {language === 'fr' ? stat.label : stat.labelEn}
                        </div>
                      </motion.div>

                      {/* Bottom accent for white cards */}
                      {!isRed && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-black to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
