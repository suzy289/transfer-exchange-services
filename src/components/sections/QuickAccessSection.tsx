'use client';

import { motion } from 'framer-motion';
import { CreditCard, Building2, MapPin, Phone, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { formatWhatsAppLink, formatTelLink, formatEmailLink } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';
import SectionHeading from '@/components/ui/SectionHeading';

export default function QuickAccessSection() {
  const { language } = useLanguage();

  const quickLinks = [
    {
      icon: CreditCard,
      title: language === 'fr' ? 'Ouvrir un compte' : 'Open an account',
      description: language === 'fr' ? 'Découvrez nos cartes UBA' : 'Discover our UBA cards',
      href: '#tarifs',
    },
    {
      icon: Building2,
      title: language === 'fr' ? 'Nos agences' : 'Our agencies',
      description: language === 'fr' ? 'Trouvez l\'agence la plus proche' : 'Find the nearest agency',
      href: '/agences',
    },
    {
      icon: Phone,
      title: language === 'fr' ? 'Nous appeler' : 'Call us',
      description: COMPANY_INFO.phone,
      href: formatTelLink(COMPANY_INFO.phone),
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
    },
    {
      icon: Mail,
      title: 'Email',
      description: COMPANY_INFO.email,
      href: formatEmailLink(COMPANY_INFO.email),
    },
    {
      icon: MapPin,
      title: language === 'fr' ? 'Localisateur' : 'Locator',
      description: language === 'fr' ? 'Trouvez nos points de vente' : 'Locate our service points',
      href: '/agences',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title={language === 'fr' ? 'Accès rapide' : 'Quick access'}
          subtitle={
            language === 'fr'
              ? 'Trouvez rapidement ce dont vous avez besoin'
              : 'Quickly find what you need'
          }
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative block"
              >
                {/* Card with modern design */}
                <div className="relative h-full bg-white rounded-2xl p-8 border-2 border-black shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon container */}
                    <div className="relative flex justify-start mb-6">
                      <motion.div
                        className="relative w-16 h-16 bg-black rounded-xl flex items-center justify-center border-2 border-black shadow-lg group-hover:shadow-xl transition-all duration-300"
                        whileHover={{ 
                          rotate: [0, -5, 5, -5, 0],
                          scale: 1.1,
                        }}
                      >
                        {/* Animated ring */}
                        <motion.div
                          className="absolute inset-0 rounded-xl border-2 border-black opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0, 0.3, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeOut'
                          }}
                        />
                        <Icon className="w-8 h-8 text-white relative z-10" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 group-hover:text-gray-900 transition-colors">
                      {link.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold mr-2">
                        {language === 'fr' ? 'En savoir plus' : 'Learn more'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                  />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
