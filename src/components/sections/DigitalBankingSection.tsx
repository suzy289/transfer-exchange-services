'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Smartphone, Lock, Clock, Zap, Shield, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

const featuresContent = {
  fr: [
    {
      icon: Smartphone,
      title: 'Application M2U',
      description: 'Gérez vos comptes, effectuez des transferts et payez vos factures depuis votre mobile.',
      stats: '50K+',
      statsLabel: 'Utilisateurs actifs',
    },
    {
      icon: Shield,
      title: 'Sécurité maximale',
      description: 'Authentification biométrique et cryptage de bout en bout pour protéger vos données.',
      stats: '100%',
      statsLabel: 'Transactions sécurisées',
    },
    {
      icon: Zap,
      title: 'Ultra rapide',
      description: 'Transferts instantanés et notifications en temps réel pour chaque opération.',
      stats: '<3s',
      statsLabel: 'Temps de transfert',
    },
    {
      icon: Globe,
      title: 'Accessible partout',
      description: 'Disponible 24h/24, 7j/7 où que vous soyez dans le monde.',
      stats: '24/7',
      statsLabel: 'Disponibilité',
    },
  ],
  en: [
    {
      icon: Smartphone,
      title: 'M2U Application',
      description: 'Manage your accounts, make transfers and pay bills from your mobile.',
      stats: '50K+',
      statsLabel: 'Active users',
    },
    {
      icon: Shield,
      title: 'Maximum security',
      description: 'Biometric authentication and end-to-end encryption to protect your data.',
      stats: '100%',
      statsLabel: 'Secure transactions',
    },
    {
      icon: Zap,
      title: 'Ultra fast',
      description: 'Instant transfers and real-time notifications for every operation.',
      stats: '<3s',
      statsLabel: 'Transfer time',
    },
    {
      icon: Globe,
      title: 'Accessible everywhere',
      description: 'Available 24/7 wherever you are in the world.',
      stats: '24/7',
      statsLabel: 'Availability',
    },
  ],
} as const;

const appFeatures = {
  fr: [
    'Consultation de solde en temps réel',
    'Transferts nationaux & internationaux',
    'Paiement de factures',
    'Historique des transactions',
    'Notifications push',
    'Support client intégré',
  ],
  en: [
    'Real-time balance check',
    'National & international transfers',
    'Bill payments',
    'Transaction history',
    'Push notifications',
    'Integrated customer support',
  ],
};

export default function DigitalBankingSection() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';
  const digitalFeatures = featuresContent[language];
  const features = appFeatures[language];
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {isFrench ? 'INNOVATION DIGITALE' : 'DIGITAL INNOVATION'}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 font-heading mb-6">
            {isFrench ? 'La banque dans' : 'Banking in'}
            <span className="text-primary"> {isFrench ? 'votre poche' : 'your pocket'}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {isFrench
              ? "Découvrez M2U, l'application qui révolutionne votre expérience bancaire"
              : 'Discover M2U, the app that revolutionizes your banking experience'}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto w-[300px] md:w-[350px]">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-[3rem] blur-3xl scale-110" />
              
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Phone Screen Content */}
                  <div className="h-full bg-gradient-to-br from-primary via-red-600 to-red-800 p-6 flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-white/80 text-xs mb-8">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white/80 rounded-sm" />
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <p className="text-white/70 text-sm">{isFrench ? 'Bienvenue' : 'Welcome'}</p>
                        <p className="text-white font-bold text-xl">Paul KENGNE</p>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Image
                          src="/images/M2.png"
                          alt="M2U"
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Balance Card */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-6">
                      <p className="text-white/70 text-sm mb-2">{isFrench ? 'Solde disponible' : 'Available balance'}</p>
                      <p className="text-white text-3xl font-bold">2,450,000 <span className="text-lg">FCFA</span></p>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="grid grid-cols-4 gap-3 mb-6">
                      {['Envoyer', 'Recharger', 'Factures', 'Plus'].map((action, i) => (
                        <div key={i} className="text-center">
                          <div className="w-12 h-12 bg-white/20 rounded-xl mx-auto mb-2 flex items-center justify-center">
                            {i === 0 && <ArrowRight className="w-5 h-5 text-white rotate-[-45deg]" />}
                            {i === 1 && <Smartphone className="w-5 h-5 text-white" />}
                            {i === 2 && <Zap className="w-5 h-5 text-white" />}
                            {i === 3 && <Globe className="w-5 h-5 text-white" />}
                          </div>
                          <p className="text-white/80 text-[10px]">{action}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Recent Transactions */}
                    <div className="flex-grow bg-white rounded-t-3xl -mx-6 -mb-6 p-5">
                      <p className="text-gray-900 font-bold mb-4">{isFrench ? 'Récent' : 'Recent'}</p>
                      {[1, 2].map((_, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-full" />
                            <div>
                              <p className="text-gray-900 font-medium text-sm">Orange Money</p>
                              <p className="text-gray-500 text-xs">12 Nov 2024</p>
                            </div>
                          </div>
                          <p className="text-red-600 font-bold text-sm">-25,000</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Phone Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-8 top-20 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-sm">{isFrench ? 'Transfert réussi' : 'Transfer successful'}</p>
                    <p className="text-gray-500 text-xs">50,000 FCFA</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -left-8 bottom-32 bg-black rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{isFrench ? 'Sécurisé' : 'Secured'}</p>
                    <p className="text-gray-400 text-xs">256-bit SSL</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {isFrench ? 'Tout ce dont vous avez besoin' : 'Everything you need'}
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{feature}</p>
                </motion.div>
              ))}
            </div>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <div className="inline-flex items-center gap-2 px-8 py-4 bg-gray-400 text-white font-bold rounded-xl cursor-not-allowed opacity-70">
                <Clock className="w-5 h-5" />
                {isFrench ? 'Bientôt disponible' : 'Coming soon'}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {digitalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setActiveFeature(index)}
              className={`relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden ${
                activeFeature === index 
                  ? 'bg-black text-white' 
                  : 'bg-white border-2 border-gray-100 hover:border-black'
              }`}
            >
              {/* Background Glow */}
              {activeFeature === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              )}
              
              <div className="relative z-10">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 md:mb-6 flex items-center justify-center ${
                  activeFeature === index 
                    ? 'bg-white/10' 
                    : 'bg-black'
                }`}>
                  <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${activeFeature === index ? 'text-white' : 'text-white'}`} />
                </div>
                
                <p className={`text-2xl sm:text-3xl md:text-4xl font-black mb-1 sm:mb-2 ${
                  activeFeature === index ? 'text-primary' : 'text-gray-900'
                }`}>
                  {feature.stats}
                </p>
                <p className={`text-[10px] sm:text-xs md:text-sm font-medium mb-2 sm:mb-3 md:mb-4 ${
                  activeFeature === index ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {feature.statsLabel}
                </p>
                
                <h4 className={`text-sm sm:text-base font-bold mb-1 sm:mb-2 ${
                  activeFeature === index ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h4>
                <p className={`text-[10px] sm:text-xs md:text-sm leading-relaxed ${
                  activeFeature === index ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
