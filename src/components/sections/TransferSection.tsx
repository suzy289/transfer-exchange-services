'use client';

import { motion } from 'framer-motion';
import { TRANSFER_SERVICES } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import { MapPin, Globe, ArrowRight, CheckCircle, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TransferSection() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const transferTypes = [
    {
      id: 'national',
      icon: MapPin,
      title: isFrench ? 'Transferts nationaux' : 'Domestic transfers',
      subtitle: isFrench ? 'Partout au Cameroun' : 'Across Cameroon',
      services: TRANSFER_SERVICES.national,
      gradient: 'from-emerald-600 to-teal-700',
      lightBg: 'bg-emerald-50',
    },
    {
      id: 'international',
      icon: Globe,
      title: isFrench ? 'Transferts internationaux' : 'International transfers',
      subtitle: isFrench ? 'Dans le monde entier' : 'Worldwide',
      services: TRANSFER_SERVICES.international,
      gradient: 'from-primary to-red-700',
      lightBg: 'bg-red-50',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(220,38,38,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(16,185,129,0.1),_transparent_50%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title={isFrench ? "Services de transfert d'argent" : 'Money transfer services'}
          subtitle={
            isFrench ? "Envoyez et recevez de l'argent partout dans le monde" : 'Send and receive money worldwide'
          }
          theme="dark"
        />

        {/* Main icon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl scale-150" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-red-700 flex items-center justify-center shadow-2xl shadow-primary/30">
              <Send className="w-10 h-10 text-white" />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {transferTypes.map((type, typeIndex) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: typeIndex * 0.2, duration: 0.5 }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
                {/* Header */}
                <div className={`relative bg-gradient-to-r ${type.gradient} p-6`}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.2),_transparent_60%)]" />
                  <div className="relative flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <type.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-heading">
                        {type.title}
                      </h3>
                      <p className="text-white/70 text-sm">{type.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Services list */}
                <div className="p-6 space-y-3">
                  {type.services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: typeIndex * 0.1 + index * 0.05 }}
                      className="group/item flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${type.gradient} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`}>
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-medium flex-1">
                        {service.name}
                      </span>
                      <ArrowRight className="w-5 h-5 text-white/30 group-hover/item:text-white/70 group-hover/item:translate-x-1 transition-all duration-300" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


