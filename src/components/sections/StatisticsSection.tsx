'use client';

import { motion } from 'framer-motion';
import { statistics } from '@/data/statistics';
import { useLanguage } from '@/context/LanguageContext';

export default function StatisticsSection() {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                }}
                className="group relative"
              >
                {/* Card with modern design */}
                <div className="relative h-full bg-white rounded-2xl p-6 md:p-8 border-2 border-black shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon container with animated ring */}
                  <div className="relative flex justify-center mb-6">
                    <motion.div
                      className="relative w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-black shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ 
                        rotate: [0, -5, 5, -5, 0],
                        scale: 1.1,
                      }}
                    >
                      {/* Animated ring */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-black opacity-0 group-hover:opacity-100"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeOut'
                        }}
                      />
                      <Icon className="w-10 h-10 text-black relative z-10" />
                    </motion.div>
                  </div>

                  {/* Value */}
                  <motion.div
                    className="text-center mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    <div className="text-5xl md:text-6xl font-bold text-primary mb-2 font-heading group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                  </motion.div>

                  {/* Label */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    <div className="text-sm md:text-base text-gray-600 font-semibold group-hover:text-gray-900 transition-colors">
                      {language === 'fr' ? stat.label : stat.labelEn}
                    </div>
                  </motion.div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


