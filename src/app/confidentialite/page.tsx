'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { AlertTriangle, Lock, Eye, ShieldCheck, FileText, Users, Database, Globe, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ConfidentialitePage() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const securityTips = [
    {
      icon: Lock,
      title: isFrench ? 'Protection des codes' : 'Code protection',
      description: isFrench
        ? 'Vos codes PIN et mots de passe sont confidentiels. Ne les divulguez jamais à personne, même à nos employés.'
        : 'Your PIN codes and passwords are confidential. Never share them with anyone, including our employees.',
    },
    {
      icon: Eye,
      title: isFrench ? 'Vigilance accrue' : 'Stay vigilant',
      description: isFrench
        ? 'Méfiez-vous des tentatives de phishing et des demandes d\'informations suspectes par email, SMS ou téléphone.'
        : 'Beware of phishing attempts and suspicious information requests via email, SMS or phone.',
    },
    {
      icon: ShieldCheck,
      title: isFrench ? 'Transactions sécurisées' : 'Secure transactions',
      description: isFrench
        ? 'Toutes nos opérations sont chiffrées et surveillées en permanence par nos systèmes de sécurité avancés.'
        : 'All our operations are encrypted and continuously monitored by our advanced security systems.',
    },
  ];

  const privacySections = [
    {
      icon: Database,
      title: isFrench ? 'Collecte des données' : 'Data collection',
      content: isFrench
        ? 'Nous collectons uniquement les informations nécessaires pour fournir nos services : nom, coordonnées, informations bancaires et documents d\'identité. Ces données sont collectées de manière légale et transparente.'
        : 'We only collect information necessary to provide our services: name, contact details, banking information and identity documents. This data is collected legally and transparently.',
    },
    {
      icon: Lock,
      title: isFrench ? 'Protection des données' : 'Data protection',
      content: isFrench
        ? 'Vos données personnelles sont protégées par des mesures de sécurité techniques et organisationnelles strictes. Nous utilisons un chiffrement de niveau bancaire et des protocoles de sécurité conformes aux standards internationaux.'
        : 'Your personal data is protected by strict technical and organizational security measures. We use bank-level encryption and security protocols compliant with international standards.',
    },
    {
      icon: Users,
      title: isFrench ? 'Partage des données' : 'Data sharing',
      content: isFrench
        ? 'Nous ne vendons jamais vos données personnelles. Elles peuvent être partagées uniquement avec UBA dans le cadre de nos services bancaires, ou avec les autorités légales si requis par la loi.'
        : 'We never sell your personal data. It may only be shared with UBA in the context of our banking services, or with legal authorities if required by law.',
    },
    {
      icon: Globe,
      title: isFrench ? 'Vos droits' : 'Your rights',
      content: isFrench
        ? 'Vous avez le droit d\'accéder, de modifier, de supprimer ou de porter vos données personnelles. Pour exercer ces droits, contactez-nous à contact@transferandexchangeservices.cm'
        : 'You have the right to access, modify, delete or port your personal data. To exercise these rights, contact us at contact@transferandexchangeservices.cm',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-primary/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/5 blur-2xl rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <ShieldCheck className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
              {isFrench ? 'Politique de Confidentialité' : 'Privacy Policy'}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              {isFrench
                ? 'Chez Transfer and Exchange Services, la sécurité et la confidentialité de vos informations sont notre priorité absolue.'
                : 'At Transfer and Exchange Services, the security and confidentiality of your information is our absolute priority.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Alert Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-red-200 bg-red-50/50 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <AlertTriangle className="w-12 h-12 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 text-red-800 font-heading">
                    {isFrench ? 'Alerte aux arnaques' : 'Scam alert'}
                  </h2>
                  <p className="text-lg text-red-700 mb-4">
                    {isFrench
                      ? 'Chez Transfer and Exchange Services, la sécurité de vos informations est prioritaire.'
                      : 'At Transfer and Exchange Services, safeguarding your information is a top priority.'}
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <p className="text-red-800 font-semibold mb-2">
                      {isFrench ? 'Important :' : 'Important:'}
                    </p>
                    <p className="text-red-700">
                      {isFrench
                        ? 'UBA et Transfer and Exchange Services ne vous demanderont JAMAIS vos codes confidentiels (PIN, mots de passe, codes OTP) par email, SMS, WhatsApp ou téléphone. Si vous recevez une telle demande, il s\'agit d\'une tentative d\'arnaque. Ne répondez pas et contactez-nous immédiatement.'
                        : 'UBA and Transfer and Exchange Services will NEVER ask for your confidential codes (PIN, passwords, OTP codes) via email, SMS, WhatsApp or phone. If you receive such a request, it is a scam attempt. Do not respond and contact us immediately.'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={isFrench ? 'Conseils de sécurité' : 'Security tips'}
            subtitle={isFrench ? 'Protégez-vous contre les arnaques' : 'Protect yourself against scams'}
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {securityTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <tip.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                        {tip.title}
                      </h3>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={isFrench ? 'Notre engagement envers votre vie privée' : 'Our commitment to your privacy'}
            subtitle={isFrench ? 'Transparence et protection de vos données' : 'Transparency and protection of your data'}
            className="mb-12"
          />
          <div className="max-w-4xl mx-auto space-y-8">
            {privacySections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <section.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                        {section.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{section.content}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Team Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={isFrench ? 'Notre équipe de sécurité' : 'Our security team'}
            subtitle={isFrench
              ? 'Des professionnels dédiés à votre protection'
              : 'Professionals dedicated to your protection'}
            className="mb-12"
          />
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Placeholder pour les images des gardiens de sécurité */}
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: item * 0.1 }}
                    className="relative group"
                  >
                    <div className="mt-4 text-center">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {isFrench ? `Gardien de sécurité ${item}` : `Security guard ${item}`}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {isFrench ? 'Agent de sécurité certifié' : 'Certified security agent'}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {isFrench ? 'Formation continue' : 'Continuous training'}
                      </h4>
                      <p className="text-gray-600">
                        {isFrench
                          ? 'Notre équipe de sécurité suit régulièrement des formations pour rester à jour avec les dernières menaces et techniques de protection.'
                          : 'Our security team regularly undergoes training to stay up-to-date with the latest threats and protection techniques.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {isFrench ? 'Surveillance 24/7' : '24/7 monitoring'}
                      </h4>
                      <p className="text-gray-600">
                        {isFrench
                          ? 'Nos systèmes de sécurité sont surveillés en permanence pour assurer la protection de nos locaux et de vos données.'
                          : 'Our security systems are continuously monitored to ensure the protection of our premises and your data.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Images Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={isFrench ? 'Galerie de sécurité' : 'Security gallery'}
            subtitle={isFrench
              ? 'Nos gardiens de sécurité et systèmes de surveillance'
              : 'Our security guards and surveillance systems'}
            className="mb-12"
          />
          <div className="max-w-7xl mx-auto">
            {/* Images de sécurité */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-64 md:h-80 rounded-lg overflow-hidden border-2 border-gray-200 shadow-lg"
              >
                <Image
                  src="/images/gdn.jpg"
                  alt={isFrench ? 'Sécurité' : 'Security'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative h-64 md:h-80 rounded-lg overflow-hidden border-2 border-gray-200 shadow-lg"
              >
                <Image
                  src="/images/cm.jpg"
                  alt={isFrench ? 'Sécurité' : 'Security'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Note d'information */}
            <Card className="p-6 bg-primary/5 border border-primary/20">
              <div className="flex items-start space-x-4">
                <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {isFrench ? 'Sécurité renforcée' : 'Enhanced security'}
                  </h4>
                  <p className="text-gray-700">
                    {isFrench
                      ? 'Toutes nos agences sont équipées de systèmes de surveillance 24/7 et de gardiens de sécurité certifiés pour assurer votre protection et celle de vos transactions.'
                      : 'All our branches are equipped with 24/7 surveillance systems and certified security guards to ensure your protection and that of your transactions.'}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <FileText className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900 font-heading">
                  {isFrench ? 'Informations complémentaires' : 'Additional information'}
                </h2>
              </div>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {isFrench ? 'Conservation des données' : 'Data retention'}
                  </h3>
                  <p>
                    {isFrench
                      ? 'Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour fournir nos services et respecter nos obligations légales. Les données sont supprimées de manière sécurisée une fois qu\'elles ne sont plus nécessaires.'
                      : 'We retain your personal data only as long as necessary to provide our services and comply with our legal obligations. Data is securely deleted once it is no longer needed.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {isFrench ? 'Cookies et technologies similaires' : 'Cookies and similar technologies'}
                  </h3>
                  <p>
                    {isFrench
                      ? 'Notre site web utilise des cookies essentiels pour son fonctionnement. Nous n\'utilisons pas de cookies de suivi publicitaire. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.'
                      : 'Our website uses essential cookies for its operation. We do not use advertising tracking cookies. You can manage your cookie preferences in your browser settings.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {isFrench ? 'Modifications de cette politique' : 'Changes to this policy'}
                  </h3>
                  <p>
                    {isFrench
                      ? 'Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.'
                      : 'We may update this privacy policy from time to time. Any changes will be published on this page with an update date. We encourage you to review this page regularly.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {isFrench ? 'Contact' : 'Contact'}
                  </h3>
                  <p>
                    {isFrench
                      ? 'Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous à :'
                      : 'For any questions regarding this privacy policy or to exercise your rights, contact us at:'}
                  </p>
                  <div className="mt-3 space-y-2">
                    <p className="font-medium">
                      Email: <a href="mailto:contact@transferandexchangeservices.cm" className="text-primary hover:underline">contact@transferandexchangeservices.cm</a>
                    </p>
                    <p className="font-medium">
                      Téléphone: <a href="tel:+237690039013" className="text-primary hover:underline">+237 6 90 03 90 13</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  {isFrench
                    ? 'Dernière mise à jour : ' : 'Last updated: '}
                  {new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

