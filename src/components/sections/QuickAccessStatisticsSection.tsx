'use client';

import { motion } from 'framer-motion';
import { CreditCard, Building2, MapPin, Phone, MessageCircle, Mail, ArrowRight } from 'lucide-react';
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Quick Access - Explosive Design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="lg:pr-8"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 30, scale: 0.8, rotate: -5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ 
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 150,
                      damping: 12
                    }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.05,
                      rotate: [0, -2, 2, -2, 0],
                    }}
                    className="group relative block"
                  >
                    {/* Explosive card design */}
                    <div className="relative h-full bg-white rounded-2xl p-6 border-2 border-black shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      {/* Animated background gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          link.isRed 
                            ? 'from-primary/20 via-primary/10 to-primary/5' 
                            : 'from-gray-100 via-gray-50 to-white'
                        }`}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }}
                      />
                      
                      {/* Explosive border effect on hover */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          link.isRed ? 'border-primary' : 'border-gray-400'
                        }`}
                        animate={{
                          boxShadow: link.isRed 
                            ? ['0 0 0px rgba(220, 38, 38, 0)', '0 0 20px rgba(220, 38, 38, 0.5)', '0 0 0px rgba(220, 38, 38, 0)']
                            : ['0 0 0px rgba(0, 0, 0, 0)', '0 0 15px rgba(0, 0, 0, 0.3)', '0 0 0px rgba(0, 0, 0, 0)'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      
                      {/* Animated corner accents */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon container with explosive animation */}
                        <div className="relative flex justify-start mb-4">
                          <motion.div
                            className={`relative w-14 h-14 rounded-xl flex items-center justify-center border-2 shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                              link.isRed 
                                ? 'bg-primary border-primary' 
                                : 'bg-black border-black'
                            }`}
                            whileHover={{ 
                              rotate: [0, -10, 10, -10, 0],
                              scale: [1, 1.2, 1.15, 1.2, 1],
                            }}
                            animate={{
                              boxShadow: link.isRed
                                ? ['0 0 0px rgba(220, 38, 38, 0)', '0 0 15px rgba(220, 38, 38, 0.6)', '0 0 0px rgba(220, 38, 38, 0)']
                                : ['0 0 0px rgba(0, 0, 0, 0)', '0 0 10px rgba(0, 0, 0, 0.4)', '0 0 0px rgba(0, 0, 0, 0)'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          >
                            {/* Pulsing ring */}
                            <motion.div
                              className={`absolute inset-0 rounded-xl border-2 ${
                                link.isRed ? 'border-primary' : 'border-black'
                              } opacity-0 group-hover:opacity-100`}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0, 0.6, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeOut'
                              }}
                            />
                            <Icon className="w-7 h-7 text-white relative z-10" />
                          </motion.div>
                        </div>

                        {/* Title with explosive effect */}
                        <motion.h3
                          className="text-lg font-bold text-gray-900 mb-2 font-heading group-hover:text-primary transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {link.title}
                        </motion.h3>

                        {/* Description */}
                        <p className="text-xs text-gray-600 mb-3 group-hover:text-gray-900 transition-colors line-clamp-2">
                          {link.description}
                        </p>

                        {/* Arrow indicator with animation */}
                        <motion.div
                          className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 0.5,
                          }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>

                      {/* Bottom accent line with wave effect */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        animate={{
                          scaleX: [1, 1.05, 1],
                        }}
                        transition={{
                          delay: index * 0.1 + 0.2,
                          duration: 0.6,
                          repeat: Infinity,
                          repeatDelay: 1.4,
                        }}
                      />
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
            className="lg:pl-8"
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

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {statistics.map((stat, index) => {
                const Icon = stat.icon;
                const isRed = index < 2;
                // Different shapes for different statistics
                const shapeClass = index === 0 ? 'rounded-2xl' : index === 1 ? 'rounded-3xl' : index === 2 ? 'rounded-xl' : 'rounded-2xl';
                return (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 40, scale: 0.8, rotate: 5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ 
                      delay: index * 0.12,
                      type: 'spring',
                      stiffness: 120,
                      damping: 12
                    }}
                    whileHover={{ 
                      y: -12,
                      scale: 1.08,
                      rotate: [0, -3, 3, -3, 0],
                    }}
                    className="group relative"
                  >
                    {/* Card with varied shapes */}
                    <div className={`relative h-full bg-white ${shapeClass} p-6 border-2 border-black shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                      {/* Dynamic gradient overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${shapeClass} ${
                          isRed 
                            ? 'from-primary/15 via-primary/8 to-primary/3' 
                            : 'from-gray-50 via-gray-100 to-gray-50'
                        }`}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }}
                      />
                      
                      {/* Animated border with glow */}
                      <motion.div
                        className={`absolute inset-0 ${shapeClass} border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          isRed ? 'border-primary' : 'border-black'
                        }`}
                        animate={{
                          boxShadow: isRed
                            ? ['0 0 0px rgba(220, 38, 38, 0)', '0 0 25px rgba(220, 38, 38, 0.4)', '0 0 0px rgba(220, 38, 38, 0)']
                            : ['0 0 0px rgba(0, 0, 0, 0)', '0 0 20px rgba(0, 0, 0, 0.2)', '0 0 0px rgba(0, 0, 0, 0)'],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                        }}
                      />
                      
                      {/* Icon container with varied shapes */}
                      <div className="relative flex justify-center mb-4">
                        <motion.div
                          className={`relative w-18 h-18 ${index === 1 ? 'rounded-2xl' : 'rounded-xl'} flex items-center justify-center border-2 shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                            isRed 
                              ? 'bg-primary border-primary' 
                              : 'bg-gray-50 border-black'
                          }`}
                          style={{ width: '4.5rem', height: '4.5rem' }}
                          whileHover={{ 
                            rotate: [0, -8, 8, -8, 0],
                            scale: [1, 1.25, 1.2, 1.25, 1],
                          }}
                          animate={{
                            boxShadow: isRed
                              ? ['0 0 0px rgba(220, 38, 38, 0)', '0 0 20px rgba(220, 38, 38, 0.5)', '0 0 0px rgba(220, 38, 38, 0)']
                              : ['0 0 0px rgba(0, 0, 0, 0)', '0 0 15px rgba(0, 0, 0, 0.3)', '0 0 0px rgba(0, 0, 0, 0)'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          {/* Multiple animated rings */}
                          <motion.div
                            className={`absolute inset-0 ${index === 1 ? 'rounded-2xl' : 'rounded-xl'} border-2 opacity-0 group-hover:opacity-100 ${
                              isRed ? 'border-primary' : 'border-black'
                            }`}
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0, 0.5, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeOut'
                            }}
                          />
                          <motion.div
                            className={`absolute inset-0 ${index === 1 ? 'rounded-2xl' : 'rounded-xl'} border border-primary/30 opacity-0 group-hover:opacity-100`}
                            animate={{
                              scale: [1, 1.6, 1],
                              opacity: [0, 0.3, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: 'easeOut',
                              delay: 0.5,
                            }}
                          />
                          <Icon className={`w-9 h-9 relative z-10 ${
                            isRed ? 'text-white' : 'text-black'
                          }`} />
                        </motion.div>
                      </div>

                      {/* Value with explosive animation */}
                      <motion.div
                        className="text-center mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 + 0.3, type: 'spring', stiffness: 200 }}
                      >
                        <motion.div
                          className="text-4xl md:text-5xl font-bold text-primary mb-1 font-heading"
                          whileHover={{ scale: 1.15 }}
                          animate={{
                            textShadow: ['0 0 0px rgba(220, 38, 38, 0)', '0 0 10px rgba(220, 38, 38, 0.3)', '0 0 0px rgba(220, 38, 38, 0)'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          {stat.value}
                        </motion.div>
                      </motion.div>

                      {/* Label */}
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 + 0.4 }}
                      >
                        <div className="text-xs md:text-sm text-gray-600 font-semibold group-hover:text-gray-900 transition-colors">
                          {language === 'fr' ? stat.label : stat.labelEn}
                        </div>
                      </motion.div>

                      {/* Bottom accent line with pulse */}
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${shapeClass} ${
                          isRed ? 'bg-primary' : 'bg-black'
                        }`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        animate={{
                          scaleX: [1, 1.1, 1],
                        }}
                        transition={{
                          delay: index * 0.12 + 0.5,
                          duration: 0.8,
                          repeat: Infinity,
                          repeatDelay: 1.2,
                        }}
                      />
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
