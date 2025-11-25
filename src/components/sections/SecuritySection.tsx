'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { AlertTriangle, Lock, Eye, ShieldCheck } from 'lucide-react';

const securityTips = [
  {
    icon: Lock,
    title: 'Protection des Codes',
    description: 'Vos codes PIN et mots de passe sont confidentiels. Ne les divulguez jamais à personne.',
  },
  {
    icon: Eye,
    title: 'Vigilance',
    description: 'Soyez attentif aux tentatives de phishing et aux communications suspectes.',
  },
  {
    icon: ShieldCheck,
    title: 'Transactions Sécurisées',
    description: 'Toutes vos transactions sont cryptées et protégées par nos systèmes de sécurité avancés.',
  },
];

export default function SecuritySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Information de Sécurité"
          subtitle="Alerte aux arnaques. Avis de non-divulgation."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-red-50 border-l-4 border-red-500">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-red-800 font-heading">
                  Chez Transfer and Exchange Services, garder vos informations confidentielles et sécurisées est une priorité.
                </h3>
                <p className="text-red-700 mb-4">
                  Veuillez noter que les détails de votre carte bancaire, les services bancaires par Internet et votre code PIN sont confidentiels et ne doivent être divulgués à personne.
                </p>
                <p className="text-red-700 font-semibold">
                  UBA et Transfer and Exchange Services ne vous demanderont jamais vos codes confidentiels par email, SMS ou téléphone.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <tip.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800 font-heading">
                  {tip.title}
                </h3>
                <p className="text-gray-600">{tip.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

