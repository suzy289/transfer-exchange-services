'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  // Dates fictives pour chaque service (à adapter selon vos besoins)
  const serviceDates = [
    'Fév 25, 2025',
    'Jan 14, 2026',
    'Mar 10, 2025',
    'Avr 5, 2025',
    'Mai 20, 2025',
    'Juin 15, 2025',
    'Juil 8, 2025',
  ];

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Nos Services Financiers"
          subtitle="Transfer and Exchange Services vous offre une gamme complète de solutions bancaires et financières"
        />

        <div className="relative -mx-4 flex flex-wrap md:py-14 lg:py-20">
          {/* Ligne verticale décorée au milieu */}
          <div className="absolute left-2 top-0 hidden h-full md:left-1/2 md:block -translate-x-1/2">
            <span className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 dark:from-[#2D2C4A] dark:via-[#3D3C5A] dark:to-[#2D2C4A] -translate-x-1/2"></span>
          </div>
          
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            
            return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`w-full md:w-1/2 px-4 mb-12 relative ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
            >
              {/* Cercle décoratif sur la ligne */}
              <div 
                className="absolute hidden md:block z-20"
                style={{
                  left: isEven ? 'calc(100% - 1.5rem)' : '-1.5rem',
                  top: '1.5rem',
                }}
              >
                {/* Cercle extérieur animé */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  style={{ width: '3rem', height: '3rem', margin: '-0.5rem' }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                {/* Cercle principal */}
                <div className="relative w-8 h-8 bg-white rounded-full border-4 border-primary shadow-xl flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                {/* Cercle intérieur brillant */}
                <div className="absolute inset-0 w-8 h-8 bg-gradient-to-br from-primary/20 to-transparent rounded-full"></div>
              </div>

              <div className={`relative h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 ${isEven ? 'md:mr-auto md:max-w-[85%]' : 'md:ml-auto md:max-w-[85%]'}`}>
                
                {/* Header avec date et badge - Inversé selon le côté */}
                <div className={`p-6 pb-4 border-b border-gray-100 ${isEven ? 'md:bg-gradient-to-l md:from-primary/5' : 'bg-gradient-to-r from-primary/5'}`}>
                  <div className={`flex items-center mb-4 ${isEven ? 'md:justify-end' : 'justify-between'}`}>
                    {isEven ? (
                      <>
                        <div className="text-4xl order-2 md:order-1 md:ml-4">{service.icon}</div>
                        <div className="flex items-center space-x-2 text-gray-500 text-sm order-1 md:order-2">
                          <Calendar className="w-4 h-4" />
                          <span>{serviceDates[index]}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center space-x-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{serviceDates[index]}</span>
                        </div>
                        <div className="text-4xl">{service.icon}</div>
                      </>
                    )}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 text-gray-800 font-heading group-hover:text-primary transition-colors ${isEven ? 'md:text-right' : ''}`}>
                    {service.title}
                  </h3>
                </div>

                {/* Contenu - Inversé selon le côté */}
                <div className={`p-6 pt-4 ${isEven ? 'md:bg-gradient-to-l md:from-gray-50/50' : 'bg-gradient-to-r from-gray-50/50'}`}>
                  <p className={`text-gray-600 mb-4 leading-relaxed ${isEven ? 'md:text-right' : ''}`}>
                    {service.description}
                  </p>

                  {/* Détails - Inversé */}
                  <ul className={`space-y-2 mb-6 ${isEven ? 'md:text-right' : ''}`}>
                    {service.details.slice(0, 2).map((detail, idx) => (
                      <li key={idx} className={`flex items-start text-sm text-gray-600 ${isEven ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                        <span className={`text-primary ${isEven ? 'md:ml-2 md:mr-0' : 'mr-2'} mt-1 flex-shrink-0`}>
                          {isEven ? '◉' : '•'}
                        </span>
                        <span className={isEven ? 'md:text-right' : ''}>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Badge ou indicateur - Inversé */}
                  <div className={`flex items-center gap-3 flex-wrap ${isEven ? 'md:justify-end md:flex-row-reverse' : 'justify-between'}`}>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category === 'banking' && 'Banque'}
                      {service.category === 'transfer' && 'Transfert'}
                      {service.category === 'exchange' && 'Change'}
                      {service.category === 'mobile' && 'Mobile'}
                    </span>
                    <Link
                      href="#contact"
                      className={`flex items-center text-primary hover:text-primary-dark font-semibold text-sm transition-transform ${isEven ? 'md:flex-row-reverse md:group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                    >
                      {isEven ? (
                        <>
                          <ArrowRight className="w-4 h-4 mr-1 rotate-180" />
                          En savoir plus
                        </>
                      ) : (
                        <>
                          En savoir plus
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </Link>
                  </div>
                </div>

                {/* Effet hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
