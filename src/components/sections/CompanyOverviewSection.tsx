'use client';

import { motion } from 'framer-motion';
import { companyInfo } from '@/data/company';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { Building2, Target, TrendingUp, CheckCircle } from 'lucide-react';

export default function CompanyOverviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Transfer and Exchange Services"
          subtitle="Le Cœur Financier du Groupe REAVEM"
        />

        <div className="space-y-12">
          {/* Description principale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <div className="flex items-start space-x-4">
                <Building2 className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary font-heading">
                    Notre Mission
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {companyInfo.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {companyInfo.role}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Point UBA Officiel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="bg-primary/5 border-2 border-primary">
              <div className="flex items-start space-x-4">
                <Target className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-bold text-primary font-heading mr-3">
                      {companyInfo.ubaPartnership.title}
                    </h3>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Premier Red Point UBA au Cameroun
                    </span>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {companyInfo.ubaPartnership.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {companyInfo.ubaPartnership.services.map((service, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Perspectives d'évolution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary font-heading">
                    {companyInfo.futureServices.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    À l'avenir, la structure prévoit d'étendre encore ses services :
                  </p>
                  <ul className="space-y-3">
                    {companyInfo.futureServices.items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

