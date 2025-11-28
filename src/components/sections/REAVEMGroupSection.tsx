'use client';

import { motion } from 'framer-motion';
import { reavemStructures } from '@/data/reavem';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';
import { Building2, Stethoscope, Hotel } from 'lucide-react';

export default function REAVEMGroupSection() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const iconMap: Record<string, React.ReactNode> = {
    '💳': <Building2 className="w-8 h-8" />,
    '🏥': <Stethoscope className="w-8 h-8" />,
    '🏨': <Hotel className="w-8 h-8" />,
  };

  const colorSchemes = [
    { bg: 'from-primary to-red-700', light: 'bg-primary/10', border: 'border-primary/20' },
    { bg: 'from-emerald-600 to-teal-700', light: 'bg-emerald-50', border: 'border-emerald-200' },
    { bg: 'from-amber-500 to-orange-600', light: 'bg-amber-50', border: 'border-amber-200' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title={isFrench ? 'Le groupe REAVEM' : 'The REAVEM group'}
          subtitle={isFrench ? 'Un écosystème de services complets' : 'A comprehensive service ecosystem'}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reavemStructures.map((structure, index) => {
            const colors = colorSchemes[index % colorSchemes.length];
            const icon = iconMap[structure.icon] || structure.icon;
            
            return (
              <motion.div
                key={structure.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className={`h-full rounded-2xl bg-white border ${colors.border} shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                  {/* Header with gradient */}
                  <div className={`relative bg-gradient-to-r ${colors.bg} p-6 pb-12`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.2),_transparent_60%)]" />
                    <div className="relative flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform duration-300">
                        {icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white font-heading leading-tight">
                          {isFrench ? structure.name : structure.nameEn}
                        </h3>
                      </div>
                    </div>
                    {/* Status badge */}
                    <div className="absolute -bottom-4 right-6">
                      {structure.status === 'construction' && (
                        <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-900 animate-pulse" />
                          {isFrench ? 'En construction' : 'Under construction'}
                        </span>
                      )}
                      {structure.status === 'active' && (
                        <span className="inline-flex items-center gap-1.5 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          {isFrench ? 'Actif' : 'Active'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-8">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {isFrench ? structure.description : structure.descriptionEn}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


