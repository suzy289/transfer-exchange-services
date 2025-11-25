'use client';

import { motion } from 'framer-motion';
import { reavemStructures } from '@/data/reavem';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

export default function REAVEMGroupSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Le Groupe REAVEM"
          subtitle="Un Écosystème de Services Complets"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reavemStructures.map((structure, index) => (
            <motion.div
              key={structure.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card hover className="h-full text-center">
                <div className="text-6xl mb-4">{structure.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-primary font-heading">
                  {structure.name}
                </h3>
                <p className="text-gray-600 mb-4">{structure.description}</p>
                {structure.status === 'construction' && (
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    En construction
                  </span>
                )}
                {structure.status === 'active' && (
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Actif
                  </span>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


