'use client';

import { motion } from 'framer-motion';
import { reavemStructures } from '@/data/reavem';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { useLanguage } from '@/context/LanguageContext';

export default function REAVEMGroupSection() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={isFrench ? 'Le groupe REAVEM' : 'The REAVEM group'}
          subtitle={isFrench ? 'Un écosystème de services complets' : 'A comprehensive service ecosystem'}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reavemStructures.map((structure, index) => (
            <motion.div
              key={structure.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.8, ease: 'easeOut' }}
              className="group focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 rounded-2xl"
            >
              <div className="h-full rounded-3xl border-4 border-primary/60 bg-white/80 p-1 shadow-primary/30 shadow-2xl">
                <Card
                  hover
                  delay={index * 220}
                  className="h-full text-center bg-gradient-to-b from-white via-primary/10 to-white border-4 border-white rounded-2xl shadow-inner"
                >
                  <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
                    <div className="relative text-7xl">{structure.icon}</div>
                    <div className="absolute -inset-4 rounded-3xl border border-primary/20 blur-lg" />
                  </div>
                <h3 className="text-3xl font-semibold mb-4 text-primary font-heading">
                  {isFrench ? structure.name : structure.nameEn}
                </h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  {isFrench ? structure.description : structure.descriptionEn}
                </p>
                {structure.status === 'construction' && (
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-sm font-semibold shadow-inner">
                    {isFrench ? 'En construction' : 'Under construction'}
                  </span>
                )}
                {structure.status === 'active' && (
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-semibold shadow-inner">
                    {isFrench ? 'Actif' : 'Active'}
                  </span>
                )}
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


