'use client';

import { motion } from 'framer-motion';
import { agencies } from '@/data/agencies';
import { Phone, MessageCircle, MapPin, Clock, Building2 } from 'lucide-react';
import { formatWhatsAppLink, formatTelLink } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export default function AgenciesSection() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 sm:pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            {isFrench ? 'Nos agences' : 'Our agencies'}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-2">
            {isFrench ? 'Trouvez votre agence' : 'Find your agency'}
          </h1>
          <p className="text-gray-500 text-sm">
            {isFrench ? 'Présents dans tout le Cameroun' : 'Present throughout Cameroon'}
          </p>
        </motion.div>

        {/* Agencies Grid - Compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {agencies.map((agency, index) => (
            <motion.div
              key={agency.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3 p-4 border-b border-gray-50">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-red-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-gray-900 truncate group-hover:text-primary transition-colors">
                    {agency.name}
                  </h3>
                  <p className="text-primary text-xs font-medium">{agency.city}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 text-xs leading-relaxed">{agency.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600 text-xs">{agency.hours.weekdays}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="p-4 pt-0 flex gap-2">
                <a
                  href={formatTelLink(agency.phone)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-gray-200 hover:border-primary hover:text-primary text-gray-600 text-xs font-semibold transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {isFrench ? 'Appeler' : 'Call'}
                </a>
                <a
                  href={formatWhatsAppLink(
                    agency.whatsapp,
                    isFrench
                      ? `Bonjour, je souhaite contacter l'agence ${agency.name}`
                      : `Hello, I would like to contact ${agency.name}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-black hover:bg-gray-800 text-white text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-primary to-red-600 rounded-xl p-4 sm:p-5 text-white"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-base sm:text-lg">
                {isFrench ? "Besoin d'aide ?" : 'Need help?'}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm">
                {isFrench ? "Trouvez l'agence la plus proche" : 'Find the nearest agency'}
              </p>
            </div>
            <a
              href={formatWhatsAppLink(
                '+237690039013',
                isFrench
                  ? "Bonjour, je cherche l'agence la plus proche."
                  : "Hello, I'm looking for the nearest agency."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-primary rounded-lg font-bold text-sm hover:bg-white/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {isFrench ? 'Contacter' : 'Contact'}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
