# CAHIER DES CHARGES TECHNIQUE
## Site Web Vitrine - Transfer and Exchange Services SARL

**Version:** 1.0  
**Date:** Novembre 2025  
**Client:** Transfer and Exchange Services SARL (Groupe REAVEM)  
**Développeur:** À définir  
**Timeline:** 24/11/2025 - 28/11/2025

---

## 📋 1. RÉSUMÉ EXÉCUTIF

### 1.1 Présentation du Projet
Création d'un site web vitrine institutionnel, moderne et dynamique pour **Transfer and Exchange Services SARL**, premier Red Point UBA au Cameroun. Le site doit refléter le sérieux d'une institution financière tout en étant visuellement attractif et technologiquement moderne.

### 1.2 Objectifs Principaux
- Présenter l'entreprise et ses services bancaires (UBA)
- Mettre en avant le positionnement "Premier Red Point UBA au Cameroun"
- Générer des contacts (visites agences, WhatsApp, appels)
- Présenter le fondateur Dr Tcheutchoua Christophe et le Groupe REAVEM
- Faciliter la localisation et le contact des 6 agences

### 1.3 Public Cible
- Grand public (particuliers)
- Petites entreprises
- Partenaires potentiels

---

## 🎨 2. IDENTITÉ VISUELLE & DESIGN SYSTEM

### 2.1 Palette de Couleurs
```
Primaire (Rouge UBA):     #C8102E / #D42E12
Secondaire (Noir):        #1A1A1A / #0B0B0B
Fond Principal:           #FFFFFF
Fond Secondaire:          #F3F4F6 / #F7F7F7
Texte Principal:         #1A1A1A
Texte Secondaire:        #4B4B4B / #6B7280
Accent (Gris Métallique): #9CA3AF
```

### 2.2 Typographies
- **Titres:** `Montserrat` ou `Inter` (font-weight: 600-800)
- **Corps:** `Roboto` ou `Open Sans` (font-weight: 400-500)
- **Fallback:** System fonts (sans-serif)

### 2.3 Style & Ambiance
- **Ton:** Sérieux, institutionnel, moderne, dynamique
- **Référence:** Site UBA Cameroon (https://www.ubacameroon.com/)
- **Effets:** Animations subtiles, icônes flottantes, parallax léger
- **Layout:** Largeur maximale, container centré, espace blanc généreux

### 2.4 Logo
- **Statut:** À créer (proposer plusieurs variantes)
- **Formats requis:** SVG, PNG (transparent)
- **Variantes:** Full logo, icon-only, monochrome

---

## 🛠️ 3. STACK TECHNIQUE

### 3.1 Technologies Obligatoires
- **Framework:** Next.js 14+ (App Router)
- **Langage:** TypeScript (strict mode)
- **Styling:** Tailwind CSS (mobile-first)
- **Animations:** Framer Motion (OBLIGATOIRE)
- **Icônes:** Lucide React ou React Icons
- **Composants UI:** Shadcn/ui (recommandé) ou composants custom

### 3.2 Dépendances Principales
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.4.0",
  "framer-motion": "^10.16.0",
  "lucide-react": "^0.294.0",
  "next-intl": "^3.0.0"
}
```

### 3.3 Fonctionnalités Techniques
- **i18n:** Support bilingue FR/EN (next-intl)
- **SEO:** Meta tags dynamiques, Open Graph, JSON-LD
- **Performance:** Images optimisées (next/image), lazy-loading
- **Accessibilité:** WCAG 2.1 AA minimum
- **Responsive:** Mobile-first, breakpoints Tailwind

---

## 📐 4. STRUCTURE DU SITE & ARBORESCENCE

### 4.1 Pages Principales
1. **Accueil** (`/`) - Page principale avec toutes les sections
2. **Services** (`/services`) - Détail des produits et services
3. **À Propos** (`/a-propos`) - Histoire, fondateur, groupe REAVEM
4. **Agences** (`/agences`) - Liste et carte interactive des points de vente
5. **Tarifs** (`/tarifs`) - Grille tarifaire des cartes UBA
6. **Contact** (`/contact`) - Formulaire et coordonnées
7. **Partenaires** (`/partenaires`) - UBA et autres partenaires
8. **FAQ** (`/faq`) - Questions fréquentes

### 4.2 Structure de la Page d'Accueil (8+ Sections)

#### Section 1: Hero Section
- **Titre principal:** "Premier Red Point UBA au Cameroun"
- **Sous-titre:** "Le Cœur Financier du Groupe REAVEM"
- **Description:** "Facilitons l'accès aux services bancaires et aux opérations financières du quotidien"
- **CTAs:** 
  - Bouton principal: "Ouvrir un compte UBA" (rouge)
  - Bouton secondaire: "Découvrir nos services" (outline)
- **Visuel:** Image de fond haute qualité avec overlay dégradé rouge
- **Animation:** Fade-up pour le titre, pop pour les boutons

#### Section 2: Présentation & Fondateur
- **Layout:** Image à gauche / Texte à droite
- **Contenu:**
  - Photo du Dr Tcheutchoua Christophe
  - Nom: Dr Tcheutchoua Christophe
  - Né le: 09 octobre 1966
  - Titre: Médecin camerounais et philanthrope
  - Parcours: Médecin au Gabon (Freeland), CCNT, Créateur du Groupe REAVEM
  - Vision: Sociale et entrepreneuriale
  - Valeurs: Proximité, fiabilité, professionnalisme, impact social
- **CTA:** "En savoir plus" → Page À Propos

#### Section 3: Le Groupe REAVEM
- **Titre:** "Un Écosystème de Services Complets"
- **Layout:** 3 cartes interactives (hover effect)
- **Cartes:**
  1. **Transfer & Exchange Services**
     - Vitrine financière, courtage
     - Icône: 💳
  2. **Clinique Médico-chirurgicale REAVEM**
     - Soins médicaux et chirurgicaux
     - Vision humaniste
     - Icône: 🏥
  3. **REAVEM Hotel** (En construction)
     - Hôtel de luxe
     - Voyageurs d'affaires et de loisirs
     - Icône: 🏨

#### Section 4: Partenariat UBA & Services Bancaires
- **Titre:** "Point UBA Officiel - Votre Banque au Quartier"
- **Sous-titre:** "Premier Red Point UBA au Cameroun"
- **Layout:** Grille de 6 services (2 colonnes desktop, 1 colonne mobile)
- **Services:**
  1. **Ouverture & Gestion de Comptes**
     - Accompagnement complet des dossiers
     - Icône: 📋
  2. **Dépôts & Retraits**
     - Opérations sur comptes UBA
     - Icône: 💰
  3. **Vente & Recharge Cartes UBA**
     - Délivrance et recharge
     - Icône: 💳
  4. **Application M2U (Mobile Banking)**
     - Transferts et paiements mobiles
     - Icône: 📱
  5. **Paiement de Factures**
     - Électricité, Internet, etc.
     - Icône: ⚡
  6. **Change de Devises**
     - Achat/Vente Euro et Dollar
     - Icône: 💵

#### Section 5: Services de Transfert d'Argent
- **Titre:** "Envoyez et Recevez de l'Argent Partout"
- **Layout:** 2 colonnes (National / International)
- **Transferts Nationaux:**
  - Orange Money
  - MTN Mobile Money
- **Transferts Internationaux:**
  - MoneyGram
  - Western Union
  - Ria
  - Juba
- **Design:** Logos en niveaux de gris → couleur au hover (carrousel ou grille)

#### Section 6: Tarification Cartes UBA
- **Titre:** "Choisissez la Carte qui Correspond à Vos Besoins"
- **Layout:** 3 cartes de prix (Pricing Cards)
- **Carte 1 - Standard:**
  - Prix: **10 000 FCFA**
  - Plafond: 250 000 FCFA/jour
  - Features: Carte UBA standard, retraits quotidiens, support client
- **Carte 2 - Premium:** (Badge "Populaire")
  - Prix: **12 000 FCFA**
  - Plafond: 500 000 FCFA/jour
  - Features: Carte UBA premium, plafond élevé, assistance prioritaire
  - Style: Border rouge, scale légèrement agrandi
- **Carte 3 - Gold:** (Badge "Gold/Pro")
  - Prix: **14 500 FCFA**
  - Plafond: 1 500 000 FCFA/jour
  - Features: Carte UBA gold, plafond maximum, service VIP
- **CTA:** "Commander" sur chaque carte

#### Section 7: Nos Agences & Points de Vente
- **Titre:** "Retrouvez Nos Agences dans Tout le Cameroun"
- **Layout:** Liste à gauche / Carte interactive à droite (ou en dessous sur mobile)
- **Agences (6):**
  1. **Awae - Escalier**
     - Adresse: Face DOV
     - Ville: Yaoundé
     - Téléphone: +237 XXX XXX XXX
     - WhatsApp: +237 XXX XXX XXX
     - Horaires: Lun-Ven: 8h-17h, Sam: 8h-13h
  2. **Gousso**
     - Adresse: Face Hôtel Général
     - Ville: Yaoundé
     - Téléphone: +237 XXX XXX XXX
     - WhatsApp: +237 XXX XXX XXX
     - Horaires: Lun-Ven: 8h-17h, Sam: 8h-13h
  3. **Carrefour Ahala**
     - Adresse: Centre-ville
     - Ville: Yaoundé
     - Téléphone: +237 XXX XXX XXX
     - WhatsApp: +237 XXX XXX XXX
     - Horaires: Lun-Ven: 8h-17h, Sam: 8h-13h
  4. **Foundi, Mol**
     - Adresse: Centre commercial
     - Ville: Yaoundé
     - Téléphone: +237 XXX XXX XXX
     - WhatsApp: +237 XXX XXX XXX
     - Horaires: Lun-Ven: 8h-17h, Sam: 8h-13h
  5. **Douala**
     - Adresse: Face Acep dernier poteau
     - Ville: Douala
     - Téléphone: +237 XXX XXX XXX
     - WhatsApp: +237 XXX XXX XXX
     - Horaires: Lun-Ven: 8h-17h, Sam: 8h-13h
  6. **Bertoua**
     - Adresse: Centre-ville
     - Ville: Bertoua
     - Téléphone: +237 XXX XXX XXX
     - WhatsApp: +237 XXX XXX XXX
     - Horaires: Lun-Ven: 8h-17h, Sam: 8h-13h
- **Fonctionnalités:**
  - Carte Google Maps avec marqueurs pour chaque agence
  - Bouton "Contacter cette agence" → WhatsApp pré-rempli
  - Bouton "Appeler" → lien tel:
  - Bouton "Itinéraire" → Google Maps directions

#### Section 8: Contact Rapide
- **Titre:** "Une Question ? Notre Équipe est à Votre Écoute"
- **Layout:** Formulaire à gauche / Informations à droite
- **Formulaire:**
  - Nom complet (required)
  - Email (required)
  - Téléphone (required)
  - Sujet (select: Information générale, Service client, Partnership, Autre)
  - Message (textarea, required)
  - Checkbox consentement RGPD
  - Bouton "Envoyer le message"
- **Informations:**
  - Email: contact@transferandexchangeservices.cm
  - Téléphone: +237 6 90 03 90 13
  - WhatsApp: +237 6 90 03 90 13
  - Contact Fondateur:
    - Dr Christophe Tcheutchoua
    - Email: christophecolombtcheutchoa@gmail.com
    - Téléphone: +237 6 90 03 90 13
  - Réseaux sociaux (liens à venir)

---

## 🧩 5. COMPOSANTS RÉUTILISABLES

### 5.1 Composants Principaux
- `Header` - Navigation sticky avec menu déroulant
- `Footer` - Footer massif avec 4 colonnes
- `Hero` - Section hero réutilisable
- `SectionHeading` - Titre de section centré avec ligne rouge
- `ServiceCard` - Carte de service avec icône et description
- `AgencyCard` - Carte d'agence avec contact
- `PricingCard` - Carte de tarification
- `ContactForm` - Formulaire de contact avec validation
- `FloatingIcon` - Icône animée flottante
- `LanguageSwitcher` - Sélecteur de langue FR/EN

### 5.2 Animations Requises
- **Entrance:** Fade-in-up pour toutes les sections au scroll
- **Hover:** Scale, shadow, color transitions
- **Floating:** Icônes flottantes discrètes (subtle bounce)
- **Parallax:** Léger effet parallax sur hero section

---

## 📱 6. HEADER & NAVIGATION

### 6.1 Structure du Header
```
[Logo] [Accueil ▾] [Services ▾] [À Propos] [Agences] [Tarifs] [Contact] [FR/EN] [CTA: Ouvrir compte]
```

### 6.2 Menu Desktop
- **Accueil** (dropdown: Hero, Services, Agences)
- **Services** (dropdown: Cartes UBA, Transferts, Change, Mobile Banking)
- **À Propos** (dropdown: Fondateur, Groupe REAVEM, Histoire)
- **Agences** (lien direct)
- **Tarifs** (lien direct)
- **Contact** (lien direct)
- **Langue:** FR (actif) / EN
- **CTA:** Bouton rouge "Ouvrir un compte UBA"

### 6.3 Menu Mobile
- Hamburger menu → Sidebar full-screen
- Tous les liens + langue + CTA
- Animation slide-in depuis la droite

### 6.4 Comportement
- Sticky header (fixe en haut au scroll)
- Compact on scroll (réduire la hauteur)
- Accessible (skip to content link)

---

## 🦶 7. FOOTER (MASSIF & MODERNE)

### 7.1 Structure (4 Colonnes)

#### Colonne 1: Présentation
- Logo Transfer & Exchange Services
- Texte: "Premier Red Point UBA au Cameroun. Vitrine financière du groupe REAVEM."
- Réseaux sociaux (icônes flottantes):
  - Facebook
  - Instagram
  - LinkedIn
  - WhatsApp (bouton fixe)

#### Colonne 2: Liens Rapides
- **Services:**
  - Cartes UBA
  - Transferts d'argent
  - Change de devises
  - Mobile Banking
- **Entreprise:**
  - À propos
  - Groupe REAVEM
  - Partenaires

#### Colonne 3: Informations Légales
- Mentions légales
- Politique de confidentialité
- Conditions d'utilisation
- FAQ

#### Colonne 4: Contact
- **Siège Social:**
  - Email: contact@transferandexchangeservices.cm
  - Téléphone: +237 6 90 03 90 13
  - WhatsApp: +237 6 90 03 90 13
- **Contact Fondateur:**
  - Dr Christophe Tcheutchoua
  - Email: christophecolombtcheutchoa@gmail.com
- **Horaires:**
  - Lun-Ven: 8h-17h
  - Samedi: 8h-13h
  - Dimanche: Fermé

### 7.2 Bas du Footer
- Ligne de séparation (rouge)
- Copyright: "© 2025 Transfer and Exchange Services SARL. Tous droits réservés."
- Mentions: "Partenaire officiel UBA Cameroun"

### 7.3 Effets Visuels
- Fond: Noir profond (#1A1A1A) ou Rouge très sombre
- Icônes flottantes discrètes
- Micro-interactions au hover
- Pattern de fond léger (subtle)

---

## 📊 8. DONNÉES & CONTENU

### 8.1 Informations Fondateur
```typescript
interface Founder {
  name: "Dr Tcheutchoua Christophe";
  birthDate: "09 octobre 1966";
  title: "Médecin camerounais et philanthrope";
  career: [
    "Médecin - Afrique centrale",
    "2001: Freeland au Gabon",
    "2019: Collaboration CCNT",
    "Retour au Cameroun",
    "Créateur du Groupe REAVEM"
  ];
  vision: "Faciliter l'accès aux soins, aux services financiers et aux infrastructures modernes";
  values: ["Proximité", "Fiabilité", "Professionnalisme", "Impact social"];
  contact: {
    email: "christophecolombtcheutchoa@gmail.com";
    phone: "+237 6 90 03 90 13";
  };
}
```

### 8.2 Services Principaux
```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "banking" | "transfer" | "exchange" | "mobile";
}

const services: Service[] = [
  {
    id: "uba-cards",
    title: "Cartes Bancaires UBA",
    description: "Délivrance et recharge de cartes UBA avec différents plafonds",
    icon: "💳",
    category: "banking"
  },
  {
    id: "account-opening",
    title: "Ouverture de Compte",
    description: "Accompagnement complet pour l'ouverture de compte UBA",
    icon: "📋",
    category: "banking"
  },
  {
    id: "m2u",
    title: "Application M2U",
    description: "Mobile Banking UBA - Transferts et paiements via application",
    icon: "📱",
    category: "mobile"
  },
  {
    id: "currency-exchange",
    title: "Change de Devises",
    description: "Achat et vente d'Euros et Dollars au meilleur taux",
    icon: "💵",
    category: "exchange"
  },
  {
    id: "money-transfer",
    title: "Transferts d'Argent",
    description: "MoneyGram, Western Union, Ria, Juba - Envoi et réception",
    icon: "🌍",
    category: "transfer"
  },
  {
    id: "bill-payment",
    title: "Paiement de Factures",
    description: "Électricité, Internet et autres services",
    icon: "⚡",
    category: "banking"
  }
];
```

### 8.3 Agences (JSON)
```json
{
  "agencies": [
    {
      "id": "awae",
      "name": "Awae - Escalier",
      "address": "Face DOV",
      "city": "Yaoundé",
      "region": "Centre",
      "coords": {
        "lat": 0,
        "lng": 0
      },
      "phone": "+237 XXX XXX XXX",
      "whatsapp": "+237 XXX XXX XXX",
      "email": "",
      "hours": {
        "weekdays": "8h-17h",
        "saturday": "8h-13h",
        "sunday": "Fermé"
      }
    },
    {
      "id": "gousso",
      "name": "Gousso",
      "address": "Face Hôtel Général",
      "city": "Yaoundé",
      "region": "Centre",
      "coords": {
        "lat": 0,
        "lng": 0
      },
      "phone": "+237 XXX XXX XXX",
      "whatsapp": "+237 XXX XXX XXX",
      "email": "",
      "hours": {
        "weekdays": "8h-17h",
        "saturday": "8h-13h",
        "sunday": "Fermé"
      }
    },
    {
      "id": "ahala",
      "name": "Carrefour Ahala",
      "address": "Centre-ville",
      "city": "Yaoundé",
      "region": "Centre",
      "coords": {
        "lat": 0,
        "lng": 0
      },
      "phone": "+237 XXX XXX XXX",
      "whatsapp": "+237 XXX XXX XXX",
      "email": "",
      "hours": {
        "weekdays": "8h-17h",
        "saturday": "8h-13h",
        "sunday": "Fermé"
      }
    },
    {
      "id": "foundi",
      "name": "Foundi, Mol",
      "address": "Centre commercial",
      "city": "Yaoundé",
      "region": "Centre",
      "coords": {
        "lat": 0,
        "lng": 0
      },
      "phone": "+237 XXX XXX XXX",
      "whatsapp": "+237 XXX XXX XXX",
      "email": "",
      "hours": {
        "weekdays": "8h-17h",
        "saturday": "8h-13h",
        "sunday": "Fermé"
      }
    },
    {
      "id": "douala",
      "name": "Douala",
      "address": "Face Acep dernier poteau",
      "city": "Douala",
      "region": "Littoral",
      "coords": {
        "lat": 0,
        "lng": 0
      },
      "phone": "+237 XXX XXX XXX",
      "whatsapp": "+237 XXX XXX XXX",
      "email": "",
      "hours": {
        "weekdays": "8h-17h",
        "saturday": "8h-13h",
        "sunday": "Fermé"
      }
    },
    {
      "id": "bertoua",
      "name": "Bertoua",
      "address": "Centre-ville",
      "city": "Bertoua",
      "region": "Est",
      "coords": {
        "lat": 0,
        "lng": 0
      },
      "phone": "+237 XXX XXX XXX",
      "whatsapp": "+237 XXX XXX XXX",
      "email": "",
      "hours": {
        "weekdays": "8h-17h",
        "saturday": "8h-13h",
        "sunday": "Fermé"
      }
    }
  ]
}
```

### 8.4 Tarifs Cartes
```typescript
interface PricingTier {
  id: string;
  name: string;
  price: number;
  currency: "FCFA";
  dailyLimit: number;
  features: string[];
  badge?: "popular" | "premium" | "gold";
}

const pricingTiers: PricingTier[] = [
  {
    id: "standard",
    name: "Standard",
    price: 10000,
    currency: "FCFA",
    dailyLimit: 250000,
    features: [
      "Carte UBA standard",
      "Retraits quotidiens",
      "Support client"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    price: 12000,
    currency: "FCFA",
    dailyLimit: 500000,
    features: [
      "Carte UBA premium",
      "Plafond élevé",
      "Assistance prioritaire"
    ],
    badge: "popular"
  },
  {
    id: "gold",
    name: "Gold",
    price: 14500,
    currency: "FCFA",
    dailyLimit: 1500000,
    features: [
      "Carte UBA gold",
      "Plafond maximum",
      "Service VIP"
    ],
    badge: "gold"
  }
];
```

---

## 🔧 9. FONCTIONNALITÉS TECHNIQUES

### 9.1 Internationalisation (i18n)
- **Langues:** Français (par défaut) / Anglais
- **Bibliothèque:** next-intl
- **Structure:**
  ```
  /messages
    /fr.json
    /en.json
  ```
- **Sélecteur:** Dans le header (FR/EN toggle)

### 9.2 Intégration Google Maps
- **API:** Google Maps JavaScript API
- **Fonctionnalités:**
  - Carte interactive avec marqueurs pour chaque agence
  - InfoWindow avec détails de l'agence
  - Bouton "Itinéraire" → Google Maps Directions
  - Clustering si nécessaire
- **Coordonnées:** À compléter dans `agencies.json`

### 9.3 Formulaire de Contact
- **Validation:** Côté client (React Hook Form) + serveur
- **Champs:**
  - Nom complet (required, min 2 chars)
  - Email (required, format email)
  - Téléphone (required, format international)
  - Sujet (select, required)
  - Message (required, min 10 chars)
  - Consentement RGPD (checkbox, required)
- **Envoi:**
  - API Route: `/api/contact`
  - Email via SMTP (Nodemailer ou Resend)
  - Notification WhatsApp (optionnel, webhook)
  - Stockage DB (optionnel)
- **Feedback:** Message de succès/erreur

### 9.4 WhatsApp Integration
- **Boutons de contact direct:**
  - Format: `https://wa.me/237690039013?text=Bonjour...`
  - Pré-remplir le message selon le contexte
- **Bouton flottant:** Sticky sur mobile (coin inférieur droit)

### 9.5 SEO & Métadonnées
- **Meta Tags Dynamiques:**
  - Title (unique par page)
  - Description (unique par page)
  - Keywords
  - Author
- **Open Graph:**
  - og:title, og:description, og:image, og:url
- **Twitter Cards:**
  - twitter:card, twitter:title, twitter:description
- **JSON-LD:**
  - Organization schema
  - LocalBusiness schema (pour chaque agence)
  - BreadcrumbList
- **Sitemap:** Génération automatique
- **Robots.txt:** Configuration appropriée

### 9.6 Performance
- **Images:** next/image avec optimisation
- **Lazy Loading:** Sections et images
- **Code Splitting:** Automatique avec Next.js
- **Fonts:** next/font avec preload
- **Target:** Lighthouse score ≥ 90

### 9.7 Accessibilité (A11y)
- **Contrast:** Ratio minimum 4.5:1
- **Alt Text:** Toutes les images
- **Keyboard Navigation:** Tous les éléments interactifs
- **ARIA Labels:** Formulaires, boutons, liens
- **Skip Links:** Navigation principale
- **Screen Reader:** Testé avec NVDA/JAWS

---

## 📁 10. STRUCTURE DES FICHIERS

```
transfer-and-exchange/
├── .next/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── logo.png
│   │   ├── founder.jpg
│   │   ├── agencies/
│   │   └── services/
│   ├── icons/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── services/
│   │   │   │   └── page.tsx
│   │   │   ├── a-propos/
│   │   │   │   └── page.tsx
│   │   │   ├── agences/
│   │   │   │   └── page.tsx
│   │   │   ├── tarifs/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── partenaires/
│   │   │   │   └── page.tsx
│   │   │   └── faq/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts
│   │   │   └── agencies/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── sections/
│   │   │   ├── FounderSection.tsx
│   │   │   ├── REAVEMGroupSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── TransferSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── AgenciesSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── AgencyCard.tsx
│   │   │   ├── PricingCard.tsx
│   │   │   └── ContactForm.tsx
│   │   └── animations/
│   │       └── FloatingIcon.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   ├── agencies.ts
│   │   ├── services.ts
│   │   └── pricing.ts
│   ├── data/
│   │   ├── agencies.json
│   │   └── content.json
│   ├── messages/
│   │   ├── fr.json
│   │   └── en.json
│   └── types/
│       └── index.ts
├── .env.local
├── .env.example
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🎯 11. CONTENU TEXTUEL (FR & EN)

### 11.1 Hero Section

**FR:**
```
Titre: "Premier Red Point UBA au Cameroun"
Sous-titre: "Le Cœur Financier du Groupe REAVEM"
Description: "Facilitons l'accès aux services bancaires et aux opérations financières du quotidien. Ouverture de comptes, transferts nationaux & internationaux, change de devises, paiement de factures et services mobile banking."
CTA Principal: "Ouvrir un compte UBA"
CTA Secondaire: "Découvrir nos services"
```

**EN:**
```
Title: "First UBA Red Point in Cameroon"
Subtitle: "The Financial Heart of REAVEM Group"
Description: "Facilitating access to banking services and daily financial operations. Account opening, national & international transfers, currency exchange, bill payments and mobile banking services."
Primary CTA: "Open a UBA Account"
Secondary CTA: "Discover our services"
```

### 11.2 Présentation Entreprise

**FR:**
```
Transfer and Exchange Services SARL est la structure de courtage financier et de services de transfert d'argent du groupe REAVEM. Elle occupe une place centrale dans le dispositif du groupe en facilitant l'accès aux services bancaires et aux opérations financières du quotidien.

En tant que point UBA officiel, nous distribuons pour le compte de UBA plusieurs produits et services bancaires : ouverture et gestion de comptes, dépôts et retraits, transferts d'argent national et international, paiement de factures et change de devises.

Transfer and Exchange Services est la vitrine financière du groupe REAVEM. Nous relayons les clients aux solutions bancaires modernes, tout en nous appuyant sur la crédibilité médicale et sociale portée par notre fondateur, le Dr Tcheutchoua Christophe.
```

**EN:**
```
Transfer and Exchange Services SARL is the financial brokerage and money transfer services structure of the REAVEM group. It occupies a central place in the group's system by facilitating access to banking services and daily financial operations.

As an official UBA point, we distribute on behalf of UBA several banking products and services: account opening and management, deposits and withdrawals, national and international money transfers, bill payments and currency exchange.

Transfer and Exchange Services is the financial showcase of the REAVEM group. We connect clients to modern banking solutions, while relying on the medical and social credibility carried by our founder, Dr Tcheutchoua Christophe.
```

### 11.3 Fondateur

**FR:**
```
Dr Tcheutchoua Christophe, né le 09 octobre 1966, est un médecin camerounais et philanthrope. Après une solide carrière médicale, il met son expertise au service de plusieurs structures de santé en Afrique centrale.

En 2001, il rejoint Freeland au Gabon en tant que médecin, puis, à partir de 2019, il collabore avec CCNT avant de revenir s'installer au Cameroun. Guidé par une vision à la fois sociale et entrepreneuriale, il crée le groupe REAVEM, avec l'ambition de faciliter l'accès aux soins, aux services financiers et à des infrastructures modernes pour les populations.

Porteur de ce projet global, le Dr Tcheutchoua Christophe est aujourd'hui le principal initiateur et garant de la stratégie et des valeurs du groupe REAVEM : proximité, fiabilité, professionnalisme et impact social.
```

**EN:**
```
Dr Tcheutchoua Christophe, born October 9, 1966, is a Cameroonian physician and philanthropist. After a solid medical career, he puts his expertise at the service of several health structures in Central Africa.

In 2001, he joined Freeland in Gabon as a physician, then, from 2019, he collaborates with CCNT before returning to settle in Cameroon. Guided by both a social and entrepreneurial vision, he creates the REAVEM group, with the ambition of facilitating access to care, financial services and modern infrastructure for populations.

Carrying this global project, Dr Tcheutchoua Christophe is today the main initiator and guarantor of the strategy and values of the REAVEM group: proximity, reliability, professionalism and social impact.
```

---

## 🚀 12. DÉPLOIEMENT & HÉBERGEMENT

### 12.1 Plateforme Recommandée
- **Vercel** (recommandé pour Next.js)
- Alternative: Netlify, AWS Amplify

### 12.2 Configuration
- **Domaine:** transferandexchangeservices.cm (ou .com)
- **SSL:** Automatique (Vercel)
- **Environment Variables:**
  - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
  - `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`
  - `WHATSAPP_WEBHOOK_TOKEN` (optionnel)

### 12.3 Email Professionnel
- **Créer:** contact@transferandexchangeservices.cm
- **Configuration:** MX records DNS
- **Alternative:** Utiliser Resend ou SendGrid

---

## ✅ 13. CHECKLIST DE VALIDATION

### 13.1 Contenu
- [ ] Tous les textes FR/EN présents
- [ ] Photos agences (à prendre)
- [ ] Logo créé et intégré
- [ ] Coordonnées complètes et vérifiées

### 13.2 Fonctionnalités
- [ ] Navigation fonctionnelle (desktop + mobile)
- [ ] Formulaire de contact opérationnel
- [ ] Carte Google Maps avec tous les marqueurs
- [ ] Liens WhatsApp fonctionnels
- [ ] Sélecteur de langue FR/EN
- [ ] Toutes les pages accessibles

### 13.3 Design
- [ ] Responsive (mobile, tablette, desktop)
- [ ] Animations fluides
- [ ] Palette de couleurs respectée
- [ ] Typographies chargées correctement
- [ ] Images optimisées

### 13.4 Technique
- [ ] SEO (meta tags, JSON-LD)
- [ ] Performance (Lighthouse ≥ 90)
- [ ] Accessibilité (WCAG 2.1 AA)
- [ ] Pas d'erreurs console
- [ ] Tests cross-browser

### 13.5 Déploiement
- [ ] Site en ligne
- [ ] Email professionnel fonctionnel
- [ ] DNS configuré
- [ ] SSL actif
- [ ] Analytics configuré (optionnel)

---

## 📞 14. CONTACTS & VALIDATION

### 14.1 Interlocuteur Principal
- **Nom:** Dr Christophe Tcheutchoua
- **Email:** christophecolombtcheutchoa@gmail.com
- **Téléphone:** +237 6 90 03 90 13
- **Rôle:** Fondateur, Décideur, Valideur

### 14.2 Email Professionnel à Créer
- **Email:** contact@transferandexchangeservices.cm
- **Configuration:** Via hébergement (MX records)

### 14.3 Mode de Validation
- **Communication:** WhatsApp, Email
- **Réunions:** Si nécessaire
- **Outils:** Pas d'outil de suivi spécifique

---

## 📅 15. PLANNING & JALONS

### 15.1 Timeline
- **Démarrage:** 24 novembre 2025
- **Mise en ligne cible:** 28 novembre 2025
- **Durée:** 4-5 jours (ambitieux)

### 15.2 Jalons
1. **J+0 (24/11):** Kickoff, recueil logo/photos, setup projet
2. **J+1 (25/11):** Maquette desktop + validation UX
3. **J+2 (26/11):** Développement pages critiques (Hero, Services, Agences, Contact)
4. **J+3 (27/11):** Intégration map, formulaires, tests responsive
5. **J+4 (28/11):** Recette client, corrections, mise en ligne

### 15.3 Budget
- **Fourchette:** 50 000 - 80 000 XAF
- **Livrable:** Site complet fonctionnel

---

## 🎨 16. DESIGN ADDITIONNEL

### 16.1 Effets "Explosifs" à Implémenter
- Micro-animations SVG sur hero (cartes + lignes de transfert animées)
- Section témoignages clients (carrousel, optionnel)
- Barre sticky "Contactez-nous" (WhatsApp) visible sur mobile
- Pop-up ou bandeau promotionnel pour offres cartes UBA (optionnel)

### 16.2 Illustrations & Icônes
- Icônes custom pour chaque service
- Illustrations vectorielles pour hero
- Photos professionnelles des agences (à prendre)
- Logo UBA (avec autorisation)

---

## 📝 17. NOTES FINALES

### 17.1 Points d'Attention
1. **Photos agences:** Faire une session photo pro pour chaque point de vente
2. **Accord UBA:** Demander autorisation d'utiliser logo UBA sur site (franchise)
3. **Email pro:** Créer contact@transferandexchangeservices.cm + alias pour Dr Christophe
4. **Backups & Support:** Prévoir 30 jours de support post-lancement
5. **Plan évolutif:** Prévoir CMS pour blog/actualités si besoin futur

### 17.2 Évolutions Futures Possibles
- CMS pour gestion de contenu
- Dashboard admin pour gestion agences
- Blog/Actualités
- Système de réservation en ligne
- Chat en direct

---

## 📄 18. ANNEXES

### 18.1 Références
- Site UBA Cameroon: https://www.ubacameroon.com/
- Documentation Next.js: https://nextjs.org/docs
- Documentation Tailwind: https://tailwindcss.com/docs
- Documentation Framer Motion: https://www.framer.com/motion/

### 18.2 Ressources Externes
- Google Maps API: https://developers.google.com/maps
- next-intl: https://next-intl-docs.vercel.app/
- Shadcn/ui: https://ui.shadcn.com/

---

**Fin du Cahier des Charges**

*Document créé le: Novembre 2025*  
*Version: 1.0*  
*Statut: Prêt pour implémentation*


