'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { Smartphone, Lock, Clock, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

const featuresContent = {
  fr: [
    {
      icon: Smartphone,
      title: 'Application M2U',
      description:
        'Gérez vos comptes, effectuez des transferts et payez vos factures directement depuis votre téléphone mobile.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Lock,
      title: 'Sécurité renforcée',
      description: 'Vos transactions sont protégées par les dernières technologies de sécurité bancaire.',
      color: 'text-red-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Clock,
      title: 'Transactions rapides',
      description: 'Effectuez vos opérations bancaires en quelques secondes, 24h/24 et 7j/7.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ],
  en: [
    {
      icon: Smartphone,
      title: 'M2U application',
      description: 'Manage your accounts, make transfers and pay your bills directly from your mobile phone.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Lock,
      title: 'Enhanced security',
      description: 'Your transactions are protected by the latest banking security technologies.',
      color: 'text-red-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Clock,
      title: 'Faster transactions',
      description: 'Carry out your banking operations in seconds, 24/7.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ],
} as const;

export default function DigitalBankingSection() {
  const { language } = useLanguage();
  const digitalFeatures = featuresContent[language];

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={language === 'fr' ? 'Banque digitale' : 'Digital banking'}
          subtitle={
            language === 'fr'
              ? 'Nos solutions digitales offrent de nombreux avantages qui vous permettront de garder le contrôle où que vous soyez'
              : 'Our digital solutions provide key advantages so you stay in control wherever you are'
          }
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
                  {index === 0 ? (
                    <Image
                      src="/images/M2.png"
                      alt="M2U"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  ) : (
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  )}
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
            {language === 'fr' ? 'En savoir plus' : 'Learn more'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

