'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { Smartphone, Shield, Zap, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const digitalFeatures = [
  {
    icon: Smartphone,
    title: 'Application M2U',
    description: 'Gérez vos comptes, effectuez des transferts et payez vos factures directement depuis votre téléphone mobile.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Shield,
    title: 'Sécurité Renforcée',
    description: 'Vos transactions sont protégées par les dernières technologies de sécurité bancaire.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Zap,
    title: 'Transactions Rapides',
    description: 'Effectuez vos opérations bancaires en quelques secondes, 24h/24 et 7j/7.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
];

export default function DigitalBankingSection() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Banque Digitale"
          subtitle="Nos solutions digitales offrent de nombreux avantages qui vous permettront de garder le contrôle où que vous soyez"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {digitalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 font-heading">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button href="#services" variant="primary" size="lg">
            En savoir plus
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

