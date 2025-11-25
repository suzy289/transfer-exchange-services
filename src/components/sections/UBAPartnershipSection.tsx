'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { Shield, CreditCard, Smartphone, DollarSign } from 'lucide-react';

const ubaServices = [
  {
    icon: CreditCard,
    title: 'Comptes Bancaires',
    items: ['Ouverture de comptes', 'Gestion de comptes', 'Dépôts et retraits'],
  },
  {
    icon: Shield,
    title: 'Cartes UBA',
    items: ['Vente de cartes', 'Recharge de cartes', 'Support technique'],
  },
  {
    icon: Smartphone,
    title: 'Services Mobiles',
    items: ['Application M2U', 'Mobile Banking', 'Paiements en ligne'],
  },
  {
    icon: DollarSign,
    title: 'Services Financiers',
    items: ['Change de devises', 'Paiement de factures', 'Transferts nationaux'],
  },
];

export default function UBAPartnershipSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Partenaire Officiel UBA"
          subtitle="Premier Red Point UBA au Cameroun - Votre accès privilégié aux services bancaires"
          className="text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {ubaServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white text-gray-800 h-full">
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-primary font-heading">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm">
                      <span className="text-primary mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-lg p-8 inline-block">
            <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
              En collaboration avec
            </h3>
            <div className="bg-gray-100 rounded p-6 inline-block">
              <span className="text-gray-800 font-bold text-2xl">UBA CAMEROUN</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


