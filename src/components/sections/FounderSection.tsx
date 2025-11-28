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

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/DJI_20251127124658_0172_D_traite.jpg"
                alt={isFrench ? 'Dr Tcheutchoua Christophe' : 'Dr Tcheutchoua Christophe'}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold mb-2 text-gray-800 font-heading">
                {founder.name}
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                <strong>{birthDateLabel}</strong> - {isFrench ? founder.title : founder.titleEn}
              </p>
            </div>

            <div className="prose text-gray-700 space-y-4">
              {biographyParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {founder.role && (
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg mt-4">
                  <p className="text-gray-800 font-medium italic">
                    {isFrench ? founder.role : founder.roleEn}
                  </p>
                </div>
              )}
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-800">
                {isFrench ? 'Valeurs du groupe REAVEM :' : 'Values of the REAVEM group:'}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {(isFrench ? founder.values : founder.valuesEn).map((value, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

