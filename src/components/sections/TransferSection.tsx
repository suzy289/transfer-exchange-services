'use client';

import { motion } from 'framer-motion';
import { TRANSFER_SERVICES } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { MapPin, Globe } from 'lucide-react';

export default function TransferSection() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Services de Transfert d'Argent"
          subtitle="Envoyez et recevez de l'argent partout dans le monde"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Transferts Nationaux */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card hover className="h-full">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-primary font-heading">
                  Transferts Nationaux
                </h3>
              </div>
              <div className="space-y-4">
                {TRANSFER_SERVICES.national.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <span className="text-lg font-medium text-gray-800">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Transferts Internationaux */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card hover className="h-full">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-primary font-heading">
                  Transferts Internationaux
                </h3>
              </div>
              <div className="space-y-4">
                {TRANSFER_SERVICES.international.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <span className="text-lg font-medium text-gray-800">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


