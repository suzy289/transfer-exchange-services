export interface FAQ {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  category: 'general' | 'cards' | 'transfers' | 'account';
}

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Qu\'est-ce qu\'un Red Point UBA ?',
    questionEn: 'What is a UBA Red Point?',
    answer: 'Un Red Point UBA est un point de vente agréé par la banque UBA pour distribuer ses produits et services bancaires. Transfer and Exchange Services est le premier Red Point UBA au Cameroun.',
    answerEn: 'A UBA Red Point is an authorized sales point by UBA bank to distribute its banking products and services. Transfer and Exchange Services is the first UBA Red Point in Cameroon.',
    category: 'general',
  },
  {
    id: 'faq-2',
    question: 'Comment ouvrir un compte UBA ?',
    questionEn: 'How to open a UBA account?',
    answer: 'Vous pouvez vous rendre dans l\'une de nos agences avec une pièce d\'identité valide. Notre équipe vous accompagnera dans la constitution et le dépôt de votre dossier.',
    answerEn: 'You can visit one of our agencies with a valid ID. Our team will assist you in preparing and submitting your file.',
    category: 'account',
  },
  {
    id: 'faq-3',
    question: 'Quels sont les plafonds de retrait des cartes UBA ?',
    questionEn: 'What are the withdrawal limits for UBA cards?',
    answer: 'Nous proposons trois types de cartes : Standard (250 000 FCFA/jour), Premium (500 000 FCFA/jour) et Gold (1 500 000 FCFA/jour).',
    answerEn: 'We offer three types of cards: Standard (250,000 FCFA/day), Premium (500,000 FCFA/day) and Gold (1,500,000 FCFA/day).',
    category: 'cards',
  },
  {
    id: 'faq-4',
    question: 'Quels services de transfert d\'argent proposez-vous ?',
    questionEn: 'What money transfer services do you offer?',
    answer: 'Nous proposons les transferts nationaux (Orange Money, MTN Mobile Money) et internationaux (MoneyGram, Western Union, Ria, Juba).',
    answerEn: 'We offer national transfers (Orange Money, MTN Mobile Money) and international transfers (MoneyGram, Western Union, Ria, Juba).',
    category: 'transfers',
  },
  {
    id: 'faq-5',
    question: 'Quelles devises acceptez-vous pour le change ?',
    questionEn: 'Which currencies do you accept for exchange?',
    answer: 'Nous effectuons l\'achat et la vente d\'Euros (EUR) et de Dollars américains (USD) au meilleur taux.',
    answerEn: 'We buy and sell Euros (EUR) and US Dollars (USD) at the best rate.',
    category: 'general',
  },
  {
    id: 'faq-6',
    question: 'Quels sont vos horaires d\'ouverture ?',
    questionEn: 'What are your opening hours?',
    answer: 'Nos agences sont ouvertes du lundi au vendredi de 8h à 17h, et le samedi de 8h à 13h. Elles sont fermées le dimanche.',
    answerEn: 'Our agencies are open Monday to Friday from 8am to 5pm, and Saturday from 8am to 1pm. They are closed on Sunday.',
    category: 'general',
  },
];


