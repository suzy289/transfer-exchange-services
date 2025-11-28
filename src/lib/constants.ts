export const COMPANY_INFO = {
  name: 'Transfer and Exchange Services',
  nameEn: 'Transfer and Exchange Services',
  legalName: 'Transfer and Exchange Services SARL',
  tagline: 'Premier Red Point UBA au Cameroun',
  taglineEn: 'First UBA Red Point in Cameroon',
  description: 'Vitrine financière du groupe REAVEM. Structure de courtage financier et de services de transfert d\'argent.',
  descriptionEn: 'Financial showcase of the REAVEM group. Financial brokerage and money transfer services structure.',
  email: 'transfertservices.cm',
  phone: '+237 6 90 03 90 13',
  whatsapp: '+237690039013',
  address: 'Cameroun',
  founder: {
    name: 'Dr Christophe Tcheutchoua',
    email: 'christophecolombtcheutchoa@gmail.com',
    phone: '+237 6 90 03 90 13',
  },
  social: {
    facebook: '#', // À compléter
    instagram: '#', // À compléter
    linkedin: '#', // À compléter
    twitter: '#', // À compléter
  },
} as const;

export const TRANSFER_SERVICES = {
  national: [
    { name: 'Orange Money', logo: '/images/partners/orange-money.png' },
    { name: 'MTN Mobile Money', logo: '/images/partners/mtn.png' },
  ],
  international: [
    { name: 'MoneyGram', logo: '/images/partners/moneygram.png' },
    { name: 'Western Union', logo: '/images/partners/western-union.png' },
    { name: 'Ria', logo: '/images/partners/ria.png' },
    { name: 'Juba', logo: '/images/partners/juba.png' },
  ],
} as const;

export const NAVIGATION = {
  home: { fr: 'Accueil', en: 'Home' },
  about: { fr: 'À Propos', en: 'About' },
  services: { fr: 'Services', en: 'Services' },
  agencies: { fr: 'Agences', en: 'Agencies' },
  pricing: { fr: 'Tarifs', en: 'Pricing' },
  partners: { fr: 'Partenaires', en: 'Partners' },
  contact: { fr: 'Contact', en: 'Contact' },
  faq: { fr: 'FAQ', en: 'FAQ' },
} as const;


