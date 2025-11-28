'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { AlertTriangle, Lock, Eye, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const tipsContent = {
  fr: [
    {
      icon: Lock,
      title: 'Protection des codes',
      description: 'Vos codes PIN et mots de passe sont confidentiels. Ne les divulguez jamais à personne.',
    },
    {
      icon: Eye,
      title: 'Vigilance',
      description: 'Soyez attentif aux tentatives de phishing et aux communications suspectes.',
    },
    {
      icon: ShieldCheck,
      title: 'Transactions sécurisées',
      description: 'Toutes vos transactions sont cryptées et protégées par nos systèmes de sécurité avancés.',
    },
  ],
  en: [
    {
      icon: Lock,
      title: 'Code protection',
      description: 'Your PIN codes and passwords are confidential. Never share them with anyone.',
    },
    {
      icon: Eye,
      title: 'Stay vigilant',
      description: 'Be alert to phishing attempts and suspicious communications.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure transactions',
      description: 'All your transactions are encrypted and protected by our advanced security systems.',
    },
  ],
} as const;

export default function SecuritySection() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';
  const securityTips = tipsContent[language];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={isFrench ? 'Information de sécurité' : 'Security information'}
          subtitle={
            isFrench ? 'Alerte aux arnaques. Avis de non-divulgation.' : 'Scam alert. Non-disclosure notice.'
          }
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
                  {isFrench
                    ? 'Chez Transfer and Exchange Services, garder vos informations confidentielles et sécurisées est une priorité.'
                    : 'At Transfer and Exchange Services, keeping your information confidential and secure is a priority.'}
                </h3>
                <p className="text-red-700 mb-4">
                  {isFrench
                    ? 'Veuillez noter que les détails de votre carte bancaire, les services bancaires par Internet et votre code PIN sont confidentiels et ne doivent être divulgués à personne.'
                    : 'Please note that your card details, internet banking credentials and PIN are confidential and must never be shared.'}
                </p>
                <p className="text-red-700 font-semibold">
                  {isFrench
                    ? 'UBA et Transfer and Exchange Services ne vous demanderont jamais vos codes confidentiels par email, SMS ou téléphone.'
                    : 'UBA and Transfer and Exchange Services will never ask for your confidential codes by email, SMS or phone.'}
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

