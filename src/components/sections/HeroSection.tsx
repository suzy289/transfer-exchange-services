'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Globe, CreditCard } from 'lucide-react';
import Button from '@/components/ui/Button';
import BackgroundShapes from '@/components/BackgroundShapes';

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-white text-gray-800 overflow-hidden"
    >
      {/* Background blanc propre */}
      <div className="absolute inset-0 -z-20 bg-white"></div>
      
      {/* Lumière rotative */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Gradient rotatif pour créer l'effet de lumière */}
          <div 
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0deg, rgba(239, 68, 68, 0.3) 60deg, rgba(239, 68, 68, 0.5) 90deg, rgba(239, 68, 68, 0.3) 120deg, transparent 180deg, transparent 360deg)',
            }}
          />
        </motion.div>
        
        {/* Deuxième lumière pour plus d'effet */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div 
            className="absolute inset-0 rounded-full opacity-20"
            style={{
              background: 'conic-gradient(from 180deg, transparent 0deg, rgba(220, 38, 38, 0.4) 45deg, rgba(220, 38, 38, 0.6) 75deg, rgba(220, 38, 38, 0.4) 105deg, transparent 135deg, transparent 360deg)',
            }}
          />
        </motion.div>
      </div>
      
      {/* Background Shapes subtils */}
      <BackgroundShapes />
      
      {/* Overlay très léger pour la profondeur */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30 z-10" />

      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="bg-yellow-400 text-primary px-4 py-2 rounded-full font-bold text-sm">
                Premier Red Point UBA
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight text-gray-900">
              Premier{' '}
              <span className="text-primary">Red Point UBA</span> au
              Cameroun
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-gray-700 font-medium">
              Le Cœur Financier du Groupe REAVEM
            </p>

            <p className="text-lg mb-10 text-gray-600">
              Facilitons l'accès aux services bancaires et aux opérations
              financières du quotidien. Ouverture de comptes, transferts
              nationaux & internationaux, change de devises, paiement de
              factures et services mobile banking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#contact" variant="primary" size="lg">
                Ouvrir un compte UBA
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="#services" variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                Découvrir nos services
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Services Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-primary font-heading">
                Services disponibles
              </h3>
              <div className="space-y-4">
                {[
                  { icon: CreditCard, text: 'Cartes bancaires UBA' },
                  { icon: Globe, text: 'Transfert d\'argent international' },
                  { icon: Shield, text: 'Change Euro/Dollar' },
                  { icon: CreditCard, text: 'Paiement de factures' },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{service.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}


