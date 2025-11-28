'use client';

import { motion } from 'framer-motion';
import { agencies } from '@/data/agencies';
import { Phone, MessageCircle, MapPin, Clock, Navigation } from 'lucide-react';
import { formatWhatsAppLink, formatTelLink } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export default function AgenciesSection() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 sm:pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            {isFrench ? 'Nos points de vente' : 'Our locations'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading mb-4">
            {isFrench ? 'Trouvez votre agence' : 'Find your agency'}
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            {isFrench
              ? 'Nos équipes sont à votre disposition dans tout le Cameroun'
              : 'Our teams are at your service throughout Cameroon'}
          </p>
        </motion.div>

        {/* Agencies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {agencies.map((agency, index) => (
            <motion.div
              key={agency.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
            >
              {/* Header Card */}
              <div className="bg-gradient-to-r from-primary to-red-600 p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                  {agency.name}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm mt-1">{agency.city}</p>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                {/* Address */}
                <div className="flex items-start gap-3 mb-4 pb-4 border-b border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-gray-500" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pt-1">{agency.address}</p>
                </div>

                {/* Info Grid */}
                <div className="space-y-3 mb-5">
                  <a
                    href={formatTelLink(agency.phone)}
                    className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 transition-colors">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{agency.phone}</span>
                  </a>

                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-sm">{agency.hours.weekdays}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <a
                    href={formatTelLink(agency.phone)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="hidden xs:inline">{isFrench ? 'Appeler' : 'Call'}</span>
                  </a>
                  <a
                    href={formatWhatsAppLink(
                      agency.whatsapp,
                      isFrench
                        ? `Bonjour, je souhaite contacter l'agence ${agency.name}`
                        : `Hello, I would like to contact the ${agency.name} agency`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white text-sm font-medium transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
        >
          <div className="p-4 sm:p-6 border-b border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-heading flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Navigation className="w-5 h-5 text-primary" />
              </div>
              {isFrench ? 'Localisation' : 'Location'}
            </h2>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 h-48 sm:h-64 flex items-center justify-center">
            <div className="text-center px-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <p className="text-gray-600 font-medium text-sm sm:text-base">
                {isFrench ? 'Carte interactive' : 'Interactive map'}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {isFrench ? 'Bientôt disponible' : 'Coming soon'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 sm:mt-14 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">
            {isFrench
              ? "Besoin d'aide pour trouver l'agence la plus proche ?"
              : 'Need help finding the nearest agency?'}
          </p>
          <a
            href={formatWhatsAppLink(
              '+237690039013',
              isFrench
                ? 'Bonjour, je cherche l\'agence la plus proche de ma position.'
                : 'Hello, I\'m looking for the nearest agency to my location.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            {isFrench ? 'Contactez-nous' : 'Contact us'}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
