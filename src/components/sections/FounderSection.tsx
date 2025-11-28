'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { founder } from '@/data/founder';
import SectionHeading from '@/components/ui/SectionHeading';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function FounderSection() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';
  const biographyParagraphs = isFrench
    ? [
        'Après une solide carrière médicale, le Dr Tcheutchoua Christophe met son expertise au service de plusieurs structures de santé en Afrique centrale.',
        'En 2001, il rejoint Freeland au Gabon en tant que médecin, puis, à partir de 2019, il collabore avec CCNT avant de revenir s’installer au Cameroun.',
        'Guidé par une vision à la fois sociale et entrepreneuriale, il crée le groupe REAVEM, avec l’ambition de faciliter l’accès aux soins, aux services financiers et à des infrastructures modernes pour les populations.',
      ]
    : [
        'After a solid medical career, Dr. Tcheutchoua Christophe placed his expertise at the service of several healthcare structures in Central Africa.',
        'In 2001 he joined Freeland in Gabon as a physician, then from 2019 he collaborated with CCNT before returning to settle in Cameroon.',
        'Guided by both a social and entrepreneurial vision, he created the REAVEM Group with the ambition of facilitating access to healthcare, financial services and modern infrastructures for local communities.',
      ];
  const birthDateLabel = isFrench ? `Né le ${founder.birthDate}` : `Born on October 9, 1966`;

  return (
    <section id="apropos" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={isFrench ? 'Notre fondateur' : 'Our founder'}
          subtitle={
            isFrench
              ? 'Dr Tcheutchoua Christophe - Médecin, philanthrope et visionnaire'
              : 'Dr. Tcheutchoua Christophe – Physician, philanthropist and visionary'
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Image + Valeurs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="relative w-full flex-1 min-h-[400px] lg:min-h-[480px] rounded-t-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/DJI_20251127124658_0172_D_traite.jpg"
                alt={isFrench ? 'Dr Tcheutchoua Christophe' : 'Dr Tcheutchoua Christophe'}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            
            {/* Valeurs sous l'image - compact */}
            <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-b-2xl px-4 py-3">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {(isFrench ? founder.values : founder.valuesEn).map((value, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-primary" />
                    <span className="text-white text-xs font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center bg-white rounded-2xl p-6 lg:p-8 shadow-xl"
          >
            <div className="mb-6">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-gray-800 font-heading">
                {founder.name}
              </h3>
              <p className="text-base lg:text-lg text-gray-600">
                <strong>{birthDateLabel}</strong> - {isFrench ? founder.title : founder.titleEn}
              </p>
            </div>

            <div className="prose prose-sm lg:prose text-gray-700 space-y-3">
              {biographyParagraphs.map((paragraph, index) => (
                <p key={index} className="text-sm lg:text-base leading-relaxed">{paragraph}</p>
              ))}
              {founder.role && (
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="text-gray-800 font-medium italic text-sm lg:text-base">
                    {isFrench ? founder.role : founder.roleEn}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

