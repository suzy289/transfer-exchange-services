'use client';

import { motion } from 'framer-motion';
import { founder } from '@/data/founder';
import SectionHeading from '@/components/ui/SectionHeading';
import { CheckCircle } from 'lucide-react';

export default function FounderSection() {
  return (
    <section id="apropos" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Notre Fondateur"
          subtitle="Dr Tcheutchoua Christophe - Médecin, Philanthrope et Visionnaire"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍⚕️</span>
                  </div>
                  <p className="text-sm">Photo du Dr Tcheutchoua Christophe</p>
                  <p className="text-xs mt-2">À ajouter</p>
                </div>
              </div>
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
                <strong>Né le {founder.birthDate}</strong> - {founder.title}
              </p>
            </div>

            <div className="prose text-gray-700 space-y-4">
              <p>
                Après une solide carrière médicale, le Dr Tcheutchoua
                Christophe met son expertise au service de plusieurs structures
                de santé en Afrique centrale.
              </p>
              <p>
                En 2001, il rejoint Freeland au Gabon en tant que médecin, puis,
                à partir de 2019, il collabore avec CCNT avant de revenir
                s'installer au Cameroun.
              </p>
              <p>
                Guidé par une vision à la fois sociale et entrepreneuriale, il
                crée le groupe REAVEM, avec l'ambition de faciliter l'accès aux
                soins, aux services financiers et à des infrastructures modernes
                pour les populations.
              </p>
              {founder.role && (
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg mt-4">
                  <p className="text-gray-800 font-medium italic">
                    {founder.role}
                  </p>
                </div>
              )}
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-800">
                Valeurs du Groupe REAVEM:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {founder.values.map((value, index) => (
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

