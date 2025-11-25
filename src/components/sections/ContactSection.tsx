'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { formatWhatsAppLink, formatTelLink, formatEmailLink } from '@/lib/utils';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false,
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Contactez-nous"
          subtitle="Une question ? Notre équipe est à votre écoute"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+237 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="information">Information générale</option>
                    <option value="service">Service client</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Votre message"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-2"
                  />
                  <label className="text-sm text-gray-600">
                    J'accepte que mes données soient utilisées pour me contacter *
                  </label>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg">
                    Message envoyé avec succès ! Nous vous répondrons sous peu.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-100 text-red-800 px-4 py-3 rounded-lg">
                    Une erreur est survenue. Veuillez réessayer.
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Informations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 font-heading">
                Coordonnées principales
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a
                      href={formatEmailLink(COMPANY_INFO.email)}
                      className="text-gray-600 hover:text-primary break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Téléphone</p>
                    <a
                      href={formatTelLink(COMPANY_INFO.phone)}
                      className="text-gray-600 hover:text-primary"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <a
                      href={formatWhatsAppLink(
                        COMPANY_INFO.whatsapp,
                        'Bonjour, je souhaite obtenir des informations.'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-primary/5">
              <h4 className="text-lg font-semibold mb-3 text-primary font-heading">
                Contact du Fondateur
              </h4>
              <p className="text-gray-700 mb-2 font-medium">
                {COMPANY_INFO.founder.name}
              </p>
              <a
                href={formatEmailLink(COMPANY_INFO.founder.email)}
                className="text-gray-600 hover:text-primary block mb-2 break-all"
              >
                {COMPANY_INFO.founder.email}
              </a>
              <a
                href={formatTelLink(COMPANY_INFO.founder.phone)}
                className="text-gray-600 hover:text-primary"
              >
                {COMPANY_INFO.founder.phone}
              </a>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

