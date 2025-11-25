'use client';

import { motion } from 'framer-motion';
import { agencies } from '@/data/agencies';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { formatWhatsAppLink, formatTelLink } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function AgenciesSection() {
  return (
    <section id="agences" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Nos Points de Vente"
          subtitle="Retrouvez nos agences dans tout le Cameroun"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {agencies.map((agency, index) => (
            <motion.div
              key={agency.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <h3 className="text-xl font-semibold mb-2 text-primary font-heading">
                  {agency.name}
                </h3>
                <div className="flex items-start mb-4">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">{agency.address}</p>
                </div>
                <p className="text-gray-500 text-sm mb-4">{agency.city}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <a
                      href={formatTelLink(agency.phone)}
                      className="text-gray-700 hover:text-primary text-sm"
                    >
                      {agency.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <a
                      href={formatWhatsAppLink(
                        agency.whatsapp,
                        `Bonjour, je souhaite contacter l'agence ${agency.name}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-green-600 text-sm"
                    >
                      WhatsApp
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">
                      {agency.hours.weekdays}
                    </span>
                  </div>
                </div>

                <Button
                  href={formatWhatsAppLink(
                    agency.whatsapp,
                    `Bonjour, je souhaite contacter l'agence ${agency.name}`
                  )}
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  Contacter cette agence
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 font-heading">
              Localisation sur la carte
            </h3>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p>Carte interactive des agences</p>
                <p className="text-sm mt-2">
                  (Google Maps - À intégrer avec API Key)
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}


