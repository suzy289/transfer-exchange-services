'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Lock, Eye, ShieldCheck, Star } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { useLanguage } from '@/context/LanguageContext';
import { testimonials } from '@/data/testimonials';

const securityTips = {
  fr: [
    {
      icon: Lock,
      title: 'Protection des codes',
      description: 'Vos codes PIN et mots de passe sont confidentiels. Ne les divulguez jamais.',
    },
    {
      icon: Eye,
      title: 'Vigilance accrue',
      description: 'Méfiez-vous des tentatives de phishing et des demandes d’informations suspectes.',
    },
    {
      icon: ShieldCheck,
      title: 'Transactions sécurisées',
      description: 'Nos opérations sont chiffrées et surveillées en permanence.',
    },
  ],
  en: [
    {
      icon: Lock,
      title: 'Code protection',
      description: 'Your PIN codes and passwords are confidential. Never share them.',
    },
    {
      icon: Eye,
      title: 'Stay vigilant',
      description: 'Beware of phishing attempts or suspicious information requests.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure transactions',
      description: 'Our operations are encrypted and continuously monitored.',
    },
  ],
} as const;

const SLIDE_DELAY = 6500;

const highlightMessages = {
  fr: [
    'Premier Red Point UBA au Cameroun – Transfer and Exchange Services SARL',
    'Cartes UBA : 10 000 FCFA (250 000 FCFA/jour) • 12 000 FCFA (500 000 FCFA/jour) • 14 500 FCFA (1 500 000 FCFA/jour)',
    'Services : cartes UBA, ouverture de comptes, transferts OM/MTN et MoneyGram – Western Union – Ria – Juba',
    'Points de vente : Awae-escalier, Gousso, Carrefour Ahala, Foundi Mol, Douala – Acep, Bertoua centre-ville',
    'Contact direct : Dr Tcheutchoua Christophe • +237 6 90 03 90 13 • christophecolombtcheutchoa@gmail.com',
    'Couleurs officielles : rouge & blanc • Site vitrine institutionnel • Lancement prévu 28/11/2025',
  ],
  en: [
    'First UBA Red Point in Cameroon – Transfer and Exchange Services SARL',
    'UBA cards: 10,000 FCFA (250,000/day) • 12,000 FCFA (500,000/day) • 14,500 FCFA (1,500,000/day)',
    'Services: UBA cards, account opening, transfers via OM/MTN + MoneyGram • Western Union • Ria • Juba',
    'Locations: Awae-escaliers, Gousso, Carrefour Ahala, Foundi Mol, Douala (Acep), Bertoua downtown',
    'Direct contact: Dr Tcheutchoua Christophe • +237 6 90 03 90 13 • christophecolombtcheutchoa@gmail.com',
    'Official palette: red & white • Institutional showcase site • Launch planned 28/11/2025',
  ],
} as const;

export default function SecurityTestimonialsSection() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';
  const tips = securityTips[language];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, SLIDE_DELAY);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = useMemo(() => testimonials[currentIndex], [currentIndex]);

  const headingTitle = isFrench ? 'Information de sécurité' : 'Security information';
  const headingSubtitle = isFrench
    ? 'Alerte aux arnaques. Avis de non-divulgation.'
    : 'Scam alert. Non-disclosure notice.';
  const highlights = highlightMessages[language];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Security column */}
          <div>
            <SectionHeading
              title={headingTitle}
              subtitle={headingSubtitle}
              align="left"
              eyebrow={headingTitle}
            />
            <Card className="mb-8 border border-red-100 bg-red-50">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-red-800 font-heading">
                    {isFrench
                      ? 'Chez Transfer and Exchange Services, la sécurité de vos informations est prioritaire.'
                      : 'At Transfer and Exchange Services, safeguarding your information is a top priority.'}
                  </h3>
                  <p className="text-red-700">
                    {isFrench
                      ? 'UBA et Transfer and Exchange Services ne vous demanderont jamais vos codes confidentiels par email, SMS ou téléphone.'
                      : 'UBA and Transfer and Exchange Services will never ask for your confidential codes via email, SMS or phone.'}
                  </p>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              {tips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="flex items-start space-x-4">
                    <tip.icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{tip.title}</h4>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials slider */}
          <div>
            <SectionHeading
              title={isFrench ? 'Témoignages clients' : 'Customer testimonials'}
              subtitle={
                isFrench
                  ? 'Ce que nos clients disent de nos services'
                  : 'What our customers say about us'
              }
              align="left"
              eyebrow={isFrench ? 'Expériences réelles' : 'Real experiences'}
            />
            <Card className="relative overflow-hidden border border-primary/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {currentTestimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {isFrench ? currentTestimonial.role : currentTestimonial.roleEn}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {Array.from({ length: currentTestimonial.rating }).map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 italic leading-relaxed">
                    “{isFrench ? currentTestimonial.content : currentTestimonial.contentEn}”
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-between text-sm text-gray-500">
                <span>
                  {currentIndex + 1}/{testimonials.length}
                </span>
                <div className="flex items-center gap-2">
                  {testimonials.map((testimonial, idx) => (
                    <button
                      key={testimonial.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 w-6 rounded-full transition-all ${
                        idx === currentIndex ? 'bg-primary' : 'bg-gray-300'
                      }`}
                      aria-label={`Afficher le témoignage ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </Card>

            <div className="mt-6 overflow-hidden rounded-xl border border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                <span className="bg-primary text-white px-3 py-1 rounded-full">
                  {isFrench ? 'Important' : 'Important'}
                </span>
                <span>{isFrench ? 'Informations clés' : 'Key highlights'}</span>
              </div>
              <div className="relative overflow-hidden">
                <div className="flex gap-8 whitespace-nowrap animate-marquee px-4 py-3 text-sm text-primary font-medium">
                  {highlights.concat(highlights).map((item, index) => (
                    <span key={`${item}-${index}`} className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


