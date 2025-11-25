'use client';

import { motion } from 'framer-motion';
import { CreditCard, Building2, MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import Card from '@/components/ui/Card';
import { formatWhatsAppLink, formatTelLink, formatEmailLink } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/constants';

const quickLinks = [
  {
    icon: CreditCard,
    title: 'Ouvrir un Compte',
    description: 'Découvrez nos cartes UBA',
    href: '#tarifs',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Building2,
    title: 'Nos Agences',
    description: 'Trouvez l\'agence la plus proche',
    href: '#agences',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Phone,
    title: 'Nous Appeler',
    description: COMPANY_INFO.phone,
    href: formatTelLink(COMPANY_INFO.phone),
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Contactez-nous directement',
    href: formatWhatsAppLink(COMPANY_INFO.whatsapp, 'Bonjour, je souhaite obtenir des informations.'),
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Mail,
    title: 'Email',
    description: COMPANY_INFO.email,
    href: formatEmailLink(COMPANY_INFO.email),
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: MapPin,
    title: 'Localisateur',
    description: 'Trouvez nos points de vente',
    href: '#agences',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
];

export default function QuickAccessSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Accès Rapide
          </h2>
          <p className="text-xl text-red-100">
            Trouvez rapidement ce dont vous avez besoin
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="block"
            >
              <Card className="bg-white text-gray-800 h-full text-center hover:shadow-xl transition-all">
                <div className={`w-12 h-12 ${link.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <link.icon className={`w-6 h-6 ${link.color}`} />
                </div>
                <h3 className="font-semibold mb-1 text-sm font-heading">{link.title}</h3>
                <p className="text-xs text-gray-600">{link.description}</p>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

