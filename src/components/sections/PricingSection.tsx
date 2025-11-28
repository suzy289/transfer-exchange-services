'use client';

import { motion } from 'framer-motion';
import { pricingTiers } from '@/data/pricing';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { Check, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PricingSection() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  return (
    <section id="tarifs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={isFrench ? 'Tarifs des cartes bancaires' : 'Bank card pricing'}
          subtitle={
            isFrench
              ? 'Choisissez la carte qui correspond à vos besoins'
              : 'Choose the card that matches your needs'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl shadow-lg overflow-hidden ${
                tier.popular
                  ? 'border-2 border-primary transform scale-105 relative'
                  : 'border border-gray-200'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  {isFrench ? 'Populaire' : 'Popular'}
                </div>
              )}
              {tier.badge === 'gold' && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Gold
                </div>
              )}

              <div className={`${tier.id === 'premium' ? 'bg-yellow-500' : 'bg-primary'} text-white p-6 text-center`}>
                <h3 className="text-2xl font-bold mb-2 font-heading">
                  {formatCurrency(tier.price, tier.currency)}
                </h3>
                <p className={tier.id === 'premium' ? 'text-yellow-100' : 'text-red-100'}>
                  {isFrench ? 'Plafond' : 'Limit'}: {formatCurrency(tier.dailyLimit, tier.currency)} /{' '}
                  {isFrench ? 'jour' : 'day'}
                </p>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {(isFrench ? tier.features : tier.featuresEn).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant="primary"
                  className={`w-full ${tier.id === 'premium' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}
                  size="lg"
                >
                  {isFrench ? 'Commander' : 'Order now'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


