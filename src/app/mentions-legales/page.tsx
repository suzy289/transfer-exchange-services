'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FileText, Scale, Shield, AlertCircle, CheckCircle, XCircle, Info, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function MentionsLegalesPage() {
  const { language } = useLanguage();
  const isFrench = language === 'fr';

  const sections = [
    {
      icon: Info,
      title: isFrench ? '1. Acceptation des conditions' : '1. Acceptance of terms',
      content: isFrench
        ? 'En accédant et en utilisant les services de Transfer and Exchange Services SARL, vous acceptez d\'être lié par les présents termes et conditions. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser nos services. Ces conditions s\'appliquent à tous les utilisateurs de nos services, y compris les visiteurs, les clients et les utilisateurs de notre site web.'
        : 'By accessing and using the services of Transfer and Exchange Services SARL, you agree to be bound by these terms and conditions. If you do not agree to these terms, please do not use our services. These terms apply to all users of our services, including visitors, customers, and users of our website.',
    },
    {
      icon: Scale,
      title: isFrench ? '2. Description des services' : '2. Description of services',
      content: isFrench
        ? 'Transfer and Exchange Services SARL est un Red Point UBA agréé au Cameroun. Nous offrons les services suivants : ouverture de comptes bancaires UBA, émission de cartes bancaires UBA, transferts d\'argent nationaux (Orange Money, MTN Mobile Money) et internationaux (MoneyGram, Western Union, Ria, Juba), change de devises (EUR/USD), et services de mobile banking. Tous nos services sont fournis conformément aux réglementations bancaires en vigueur au Cameroun et aux standards UBA.'
        : 'Transfer and Exchange Services SARL is an authorized UBA Red Point in Cameroon. We offer the following services: UBA bank account opening, UBA bank card issuance, national money transfers (Orange Money, MTN Mobile Money) and international transfers (MoneyGram, Western Union, Ria, Juba), currency exchange (EUR/USD), and mobile banking services. All our services are provided in accordance with banking regulations in force in Cameroon and UBA standards.',
    },
    {
      icon: Shield,
      title: isFrench ? '3. Conditions d\'utilisation' : '3. Terms of use',
      content: isFrench
        ? 'Vous vous engagez à utiliser nos services uniquement à des fins légales et conformément à ces conditions. Il est strictement interdit d\'utiliser nos services pour des activités frauduleuses, de blanchiment d\'argent, de financement du terrorisme ou toute autre activité illégale. Vous devez fournir des informations exactes et à jour lors de l\'ouverture d\'un compte ou de l\'utilisation de nos services. Vous êtes responsable de la confidentialité de vos codes d\'accès et de toute activité effectuée avec votre compte.'
        : 'You agree to use our services only for lawful purposes and in accordance with these terms. It is strictly prohibited to use our services for fraudulent activities, money laundering, terrorist financing or any other illegal activity. You must provide accurate and up-to-date information when opening an account or using our services. You are responsible for the confidentiality of your access codes and any activity carried out with your account.',
    },
    {
      icon: AlertCircle,
      title: isFrench ? '4. Obligations du client' : '4. Customer obligations',
      content: isFrench
        ? 'En tant que client, vous vous engagez à : (a) fournir des documents d\'identité valides et authentiques, (b) maintenir la confidentialité de vos codes PIN, mots de passe et autres informations d\'accès, (c) nous informer immédiatement de toute transaction non autorisée ou suspecte, (d) respecter toutes les limites de transaction et les conditions spécifiques à chaque service, (e) payer tous les frais et commissions associés à nos services selon les tarifs en vigueur.'
        : 'As a customer, you agree to: (a) provide valid and authentic identity documents, (b) maintain the confidentiality of your PIN codes, passwords and other access information, (c) immediately inform us of any unauthorized or suspicious transaction, (d) respect all transaction limits and conditions specific to each service, (e) pay all fees and commissions associated with our services according to current rates.',
    },
    {
      icon: Shield,
      title: isFrench ? '5. Responsabilités et limitations' : '5. Responsibilities and limitations',
      content: isFrench
        ? 'Transfer and Exchange Services SARL s\'efforce de fournir des services fiables et sécurisés. Cependant, nous ne pouvons garantir que nos services seront ininterrompus, sans erreur ou exempts de virus. Nous ne serons pas responsables des dommages indirects, consécutifs ou accessoires résultant de l\'utilisation ou de l\'impossibilité d\'utiliser nos services. Notre responsabilité est limitée au montant des frais que vous avez payés pour le service concerné.'
        : 'Transfer and Exchange Services SARL strives to provide reliable and secure services. However, we cannot guarantee that our services will be uninterrupted, error-free or virus-free. We will not be liable for indirect, consequential or incidental damages resulting from the use or inability to use our services. Our liability is limited to the amount of fees you have paid for the service in question.',
    },
    {
      icon: FileText,
      title: isFrench ? '6. Frais et commissions' : '6. Fees and commissions',
      content: isFrench
        ? 'Tous les frais et commissions sont clairement indiqués avant toute transaction. Les tarifs peuvent être modifiés à tout moment, mais les modifications ne s\'appliquent pas aux transactions déjà initiées. Les frais de carte bancaire, de transfert, de change et autres services sont détaillés dans nos tarifs disponibles dans nos agences et sur demande. Certains services peuvent être soumis à des frais supplémentaires selon les réglementations UBA et les conditions du marché.'
        : 'All fees and commissions are clearly indicated before any transaction. Rates may be changed at any time, but changes do not apply to transactions already initiated. Bank card fees, transfer fees, exchange fees and other service fees are detailed in our rates available in our agencies and on request. Some services may be subject to additional fees according to UBA regulations and market conditions.',
    },
    {
      icon: XCircle,
      title: isFrench ? '7. Résiliation et suspension' : '7. Termination and suspension',
      content: isFrench
        ? 'Nous nous réservons le droit de suspendre ou de résilier votre accès à nos services à tout moment, sans préavis, en cas de violation de ces conditions, d\'activité suspecte, de fraude, ou pour toute autre raison légitime. Vous pouvez également résilier votre relation avec nous à tout moment en nous contactant et en respectant les procédures de clôture de compte. Les obligations contractuelles en cours devront être honorées avant la résiliation.'
        : 'We reserve the right to suspend or terminate your access to our services at any time, without notice, in case of violation of these terms, suspicious activity, fraud, or for any other legitimate reason. You may also terminate your relationship with us at any time by contacting us and following account closure procedures. Ongoing contractual obligations must be fulfilled before termination.',
    },
    {
      icon: Shield,
      title: isFrench ? '8. Propriété intellectuelle' : '8. Intellectual property',
      content: isFrench
        ? 'Tous les contenus de ce site web, y compris les textes, graphiques, logos, images et logiciels, sont la propriété de Transfer and Exchange Services SARL ou de ses partenaires et sont protégés par les lois sur la propriété intellectuelle. Vous n\'êtes pas autorisé à reproduire, distribuer, modifier ou créer des œuvres dérivées de ces contenus sans notre autorisation écrite préalable.'
        : 'All content on this website, including texts, graphics, logos, images and software, is the property of Transfer and Exchange Services SARL or its partners and is protected by intellectual property laws. You are not authorized to reproduce, distribute, modify or create derivative works from this content without our prior written authorization.',
    },
    {
      icon: Scale,
      title: isFrench ? '9. Protection des données personnelles' : '9. Personal data protection',
      content: isFrench
        ? 'Le traitement de vos données personnelles est régi par notre Politique de Confidentialité, qui fait partie intégrante de ces conditions. En utilisant nos services, vous consentez au traitement de vos données personnelles conformément à cette politique. Nous collectons et utilisons vos données uniquement dans le cadre de la fourniture de nos services et conformément aux réglementations en vigueur.'
        : 'The processing of your personal data is governed by our Privacy Policy, which is an integral part of these terms. By using our services, you consent to the processing of your personal data in accordance with this policy. We collect and use your data only in the context of providing our services and in accordance with applicable regulations.',
    },
    {
      icon: AlertCircle,
      title: isFrench ? '10. Force majeure' : '10. Force majeure',
      content: isFrench
        ? 'Nous ne serons pas responsables de tout retard ou défaillance dans l\'exécution de nos obligations résultant de circonstances indépendantes de notre volonté raisonnable, y compris mais sans s\'y limiter : catastrophes naturelles, guerre, terrorisme, pandémies, grèves, pannes de réseau, défaillances techniques majeures, ou toute autre cause de force majeure.'
        : 'We will not be liable for any delay or failure in the performance of our obligations resulting from circumstances beyond our reasonable control, including but not limited to: natural disasters, war, terrorism, pandemics, strikes, network failures, major technical failures, or any other force majeure cause.',
    },
    {
      icon: Scale,
      title: isFrench ? '11. Droit applicable et juridiction' : '11. Applicable law and jurisdiction',
      content: isFrench
        ? 'Ces termes et conditions sont régis par les lois de la République du Cameroun. Tout litige découlant de ou lié à ces conditions sera soumis à la juridiction exclusive des tribunaux compétents du Cameroun. En cas de conflit entre différentes versions linguistiques de ces conditions, la version française fera foi.'
        : 'These terms and conditions are governed by the laws of the Republic of Cameroon. Any dispute arising from or related to these terms will be subject to the exclusive jurisdiction of the competent courts of Cameroon. In case of conflict between different language versions of these terms, the French version shall prevail.',
    },
    {
      icon: FileText,
      title: isFrench ? '12. Modifications des conditions' : '12. Modification of terms',
      content: isFrench
        ? 'Nous nous réservons le droit de modifier ces termes et conditions à tout moment. Les modifications entreront en vigueur dès leur publication sur ce site web. Il est de votre responsabilité de consulter régulièrement ces conditions pour prendre connaissance des éventuelles modifications. Votre utilisation continue de nos services après la publication des modifications constitue votre acceptation des nouvelles conditions.'
        : 'We reserve the right to modify these terms and conditions at any time. Modifications will take effect upon their publication on this website. It is your responsibility to regularly review these terms to be aware of any changes. Your continued use of our services after the publication of modifications constitutes your acceptance of the new terms.',
    },
    {
      icon: Info,
      title: isFrench ? '13. Dispositions générales' : '13. General provisions',
      content: isFrench
        ? 'Si une disposition de ces conditions est jugée invalide ou inapplicable, les autres dispositions resteront en vigueur. Ces conditions constituent l\'accord complet entre vous et Transfer and Exchange Services SARL concernant l\'utilisation de nos services. Aucun accord, communication ou compréhension verbale ne peut modifier ces conditions sans notre consentement écrit. Le fait que nous n\'exercions pas un droit ne constitue pas une renonciation à ce droit.'
        : 'If a provision of these terms is found to be invalid or unenforceable, the other provisions will remain in effect. These terms constitute the complete agreement between you and Transfer and Exchange Services SARL regarding the use of our services. No agreement, communication or verbal understanding may modify these terms without our written consent. Our failure to exercise a right does not constitute a waiver of that right.',
    },
  ];

  const importantPoints = [
    {
      icon: CheckCircle,
      title: isFrench ? 'Acceptation requise' : 'Acceptance required',
      text: isFrench
        ? 'L\'utilisation de nos services implique l\'acceptation complète de ces conditions.'
        : 'Use of our services implies full acceptance of these terms.',
    },
    {
      icon: AlertCircle,
      title: isFrench ? 'Respect des lois' : 'Compliance with laws',
      text: isFrench
        ? 'Tous nos services sont fournis dans le respect strict des réglementations camerounaises et des standards UBA.'
        : 'All our services are provided in strict compliance with Cameroonian regulations and UBA standards.',
    },
    {
      icon: Shield,
      title: isFrench ? 'Sécurité avant tout' : 'Security first',
      text: isFrench
        ? 'La sécurité de vos transactions et de vos données est notre priorité absolue.'
        : 'The security of your transactions and data is our absolute priority.',
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
              <Scale className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
              {isFrench ? 'Termes et Conditions d\'Utilisation' : 'Terms and Conditions of Use'}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              {isFrench
                ? 'Veuillez lire attentivement ces conditions avant d\'utiliser nos services. En utilisant nos services, vous acceptez d\'être lié par ces termes et conditions.'
                : 'Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms and conditions.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-primary/30 bg-primary/5 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <AlertCircle className="w-12 h-12 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 font-heading">
                    {isFrench ? 'Avis important' : 'Important notice'}
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    {isFrench
                      ? 'En accédant à nos services ou en utilisant notre site web, vous reconnaissez avoir lu, compris et accepté d\'être lié par ces termes et conditions. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser nos services.'
                      : 'By accessing our services or using our website, you acknowledge that you have read, understood and agree to be bound by these terms and conditions. If you do not agree to these terms, please do not use our services.'}
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    {importantPoints.map((point, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <point.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{point.title}</h4>
                          <p className="text-sm text-gray-600">{point.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
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

      {/* Acceptance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-white">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">
                  {isFrench ? 'Acceptation des conditions' : 'Acceptance of terms'}
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {isFrench
                    ? 'En utilisant les services de Transfer and Exchange Services SARL, vous confirmez que vous avez lu, compris et accepté ces termes et conditions dans leur intégralité. Vous reconnaissez également avoir la capacité légale de contracter et d\'utiliser nos services conformément aux lois camerounaises.'
                    : 'By using the services of Transfer and Exchange Services SARL, you confirm that you have read, understood and accepted these terms and conditions in their entirety. You also acknowledge that you have the legal capacity to contract and use our services in accordance with Cameroonian laws.'}
                </p>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    {isFrench
                      ? 'Pour toute question concernant ces termes et conditions, veuillez nous contacter :'
                      : 'For any questions regarding these terms and conditions, please contact us:'}
                  </p>
                  <div className="space-y-2 text-left max-w-md mx-auto">
                    <p className="font-medium text-gray-900">
                      Email: <a href="mailto:contact@transferandexchangeservices.cm" className="text-primary hover:underline">contact@transferandexchangeservices.cm</a>
                    </p>
                    <p className="font-medium text-gray-900">
                      {isFrench ? 'Téléphone' : 'Phone'}: <a href="tel:+237690039013" className="text-primary hover:underline">+237 6 90 03 90 13</a>
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button
                    href="/"
                    variant="primary"
                    size="lg"
                    className="px-8 py-4 text-lg"
                  >
                    {isFrench ? 'J\'accepte les conditions' : 'I accept the terms'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">
                {isFrench
                  ? 'Dernière mise à jour : ' : 'Last updated: '}
                {new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-sm text-gray-400">
                {isFrench
                  ? 'Transfer and Exchange Services SARL - Premier Red Point UBA au Cameroun'
                  : 'Transfer and Exchange Services SARL - First UBA Red Point in Cameroon'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

