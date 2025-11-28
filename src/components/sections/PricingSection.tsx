'use client';

import { motion } from 'framer-motion';
import { pricingTiers } from '@/data/pricing';
import SectionHeading from '@/components/ui/SectionHeading';
import { formatCurrency, formatWhatsAppLink } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/constants';
import { Check, Crown, CreditCard, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PricingSection() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const cardStyles = [
    { gradient: 'from-gray-600 to-gray-800', accent: 'bg-gray-500', name: 'Standard' },
    { gradient: 'from-primary to-red-700', accent: 'bg-primary', name: 'Classic' },
    { gradient: 'from-amber-500 to-yellow-600', accent: 'bg-amber-500', name: 'Gold' },
  ];

  return (
    <section id="tarifs" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title={isFrench ? 'Tarifs des cartes bancaires' : 'Bank card pricing'}
          subtitle={
            isFrench
              ? 'Choisissez la carte qui correspond à vos besoins'
              : 'Choose the card that matches your needs'
          }
        />

        {/* Cards icon */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg border border-gray-100">
            <CreditCard className="w-5 h-5 text-primary" />
            <span className="text-gray-700 font-medium text-sm">
              {isFrench ? 'Cartes UBA disponibles' : 'UBA cards available'}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricingTiers.map((tier, index) => {
            const style = cardStyles[index % cardStyles.length];
            
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: tier.popular ? -12 : -8, transition: { duration: 0.3 } }}
                className={`relative group ${tier.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-600 text-black px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-amber-500/30">
                      <Crown className="w-3.5 h-3.5" />
                      {isFrench ? 'POPULAIRE' : 'POPULAR'}
                    </div>
                  </div>
                )}

                <div className={`h-full rounded-2xl overflow-hidden transition-all duration-500 ${
                  tier.popular
                    ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 ring-2 ring-amber-400/50 shadow-2xl shadow-amber-500/20'
                    : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
                }`}>
                  
                  {/* Card visual header */}
                  <div className={`relative bg-gradient-to-br ${style.gradient} p-6 pb-16`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.2),_transparent_60%)]" />
                    
                    {/* Decorative card chip */}
                    <div className="absolute top-6 right-6 w-10 h-7 rounded bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-80" />
                    
                    <div className="relative">
                      <p className="text-white/70 text-xs uppercase tracking-wider mb-1">
                        {tier.popular ? (isFrench ? 'Carte Premium' : 'Premium Card') : (isFrench ? 'Carte' : 'Card')} {style.name}
                      </p>
                      <h3 className="text-3xl font-bold text-white font-heading">
                        {formatCurrency(tier.price, tier.currency)}
                      </h3>
                    </div>
                    
                    {/* Card number dots */}
                    <div className="absolute bottom-4 left-6 flex gap-3">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-1">
                          {[...Array(4)].map((_, j) => (
                            <div key={j} className="w-1.5 h-1.5 rounded-full bg-white/30" />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Limit badge */}
                  <div className="relative -mt-6 mx-6 mb-4">
                    <div className={`rounded-xl p-4 ${tier.popular ? 'bg-white/10 border border-white/10' : 'bg-gray-50 border border-gray-100'}`}>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs uppercase tracking-wider ${tier.popular ? 'text-white/60' : 'text-gray-500'}`}>
                          {isFrench ? 'Plafond journalier' : 'Daily limit'}
                        </span>
                        <span className={`font-bold ${tier.popular ? 'text-amber-400' : 'text-gray-900'}`}>
                          {formatCurrency(tier.dailyLimit, tier.currency)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className={`px-6 pb-6 ${tier.popular ? '' : ''}`}>
                    <ul className="space-y-3 mb-6">
                      {(isFrench ? tier.features : tier.featuresEn).map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            tier.popular ? 'bg-amber-400/20' : 'bg-green-100'
                          }`}>
                            <Check className={`w-3 h-3 ${tier.popular ? 'text-amber-400' : 'text-green-600'}`} />
                          </div>
                          <span className={`text-sm ${tier.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <a
                      href={formatWhatsAppLink(
                        COMPANY_INFO.whatsapp,
                        isFrench 
                          ? `Bonjour, je souhaite commander une carte UBA ${tier.name} à ${formatCurrency(tier.price, tier.currency)}. Merci de me donner plus d'informations.`
                          : `Hello, I would like to order a UBA ${tier.name} card at ${formatCurrency(tier.price, tier.currency)}. Please provide more information.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 group/btn ${
                        tier.popular 
                          ? 'bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-bold shadow-lg shadow-amber-500/30' 
                          : tier.id === 'gold' 
                            ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white shadow-lg shadow-amber-500/20' 
                            : 'bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-primary/20'
                      }`}
                    >
                      {isFrench ? 'Commander' : 'Order now'}
                      <Sparkles className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


