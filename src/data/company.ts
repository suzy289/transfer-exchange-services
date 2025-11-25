export interface CompanyInfo {
  name: string;
  nameEn: string;
  legalName: string;
  description: string;
  descriptionEn: string;
  role: string;
  roleEn: string;
  ubaPartnership: {
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    services: string[];
    servicesEn: string[];
  };
  futureServices: {
    title: string;
    titleEn: string;
    items: string[];
    itemsEn: string[];
  };
}

export const companyInfo: CompanyInfo = {
  name: 'Transfer and Exchange Services',
  nameEn: 'Transfer and Exchange Services',
  legalName: 'Transfer and Exchange Services SARL',
  description:
    'Structure de courtage financier et de services de transfert d\'argent du groupe REAVEM. Elle occupe une place centrale dans le dispositif du groupe en facilitant l\'accès aux services bancaires et aux opérations financières du quotidien.',
  descriptionEn:
    'Financial brokerage and money transfer services structure of the REAVEM group. It occupies a central place in the group\'s system by facilitating access to banking services and daily financial operations.',
  role:
    'Transfer and Exchange Services est la vitrine financière du groupe REAVEM. Elle relie les clients aux solutions bancaires modernes, tout en s\'appuyant sur la crédibilité médicale et sociale portée par son fondateur, le Dr Tcheutchoua Christophe.',
  roleEn:
    'Transfer and Exchange Services is the financial showcase of the REAVEM group. It connects clients to modern banking solutions, while relying on the medical and social credibility carried by its founder, Dr Tcheutchoua Christophe.',
  ubaPartnership: {
    title: 'Point UBA officiel',
    titleEn: 'Official UBA Point',
    description:
      'Transfer and Exchange Services est un point UBA, autrement dit une franchise de la banque UBA. À ce titre, l\'entreprise distribue pour le compte de UBA plusieurs produits et services bancaires.',
    descriptionEn:
      'Transfer and Exchange Services is a UBA point, in other words a franchise of UBA bank. As such, the company distributes several banking products and services on behalf of UBA.',
    services: [
      'Ouverture et gestion de comptes bancaires',
      'Dépôts et retraits sur les comptes UBA',
      'Opérations de transfert d\'argent national et international',
      'Paiement de factures (électricité, internet, etc.)',
      'Change de devises, notamment euro et dollar',
    ],
    servicesEn: [
      'Account opening and management',
      'Deposits and withdrawals on UBA accounts',
      'National and international money transfer operations',
      'Bill payment (electricity, internet, etc.)',
      'Currency exchange, notably Euro and Dollar',
    ],
  },
  futureServices: {
    title: 'Perspective d\'évolution',
    titleEn: 'Future prospects',
    items: [
      'Dépôts et retraits directs sur les comptes UBA au guichet',
      'Paiement des salaires pour les entreprises partenaires',
    ],
    itemsEn: [
      'Direct deposits and withdrawals on UBA accounts at the counter',
      'Salary payment for partner companies',
    ],
  },
};

