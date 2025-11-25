# Structure Complète du Projet - Transfer and Exchange Services

## 📁 Structure des Fichiers Créés

```
transfer-and-exchange/
├── package.json                    # Dépendances du projet
├── tsconfig.json                   # Configuration TypeScript
├── next.config.js                  # Configuration Next.js
├── tailwind.config.js              # Configuration Tailwind CSS
├── postcss.config.js               # Configuration PostCSS
├── .gitignore                      # Fichiers à ignorer
├── .env.example                    # Exemple de variables d'environnement
├── README.md                       # Documentation du projet
├── CAHIER_DES_CHARGES_TRANSFER_EXCHANGE.md  # Cahier des charges complet
├── INSTRUCTIONS_CURSOR.md          # Instructions pour Cursor
│
├── data/                          # Données JSON (ancien format)
│   ├── agencies.json
│   ├── pricing.json
│   └── services.json
│
└── src/
    ├── app/
    │   ├── globals.css            # Styles globaux
    │   ├── layout.tsx             # Layout principal (À CRÉER)
    │   └── page.tsx               # Page d'accueil (À CRÉER)
    │
    ├── components/
    │   ├── Header.tsx             # ✅ Créé
    │   ├── Footer.tsx             # ✅ Créé
    │   ├── sections/              # Sections de la page d'accueil (À CRÉER)
    │   │   ├── HeroSection.tsx
    │   │   ├── FounderSection.tsx
    │   │   ├── REAVEMGroupSection.tsx
    │   │   ├── ServicesSection.tsx
    │   │   ├── TransferSection.tsx
    │   │   ├── PricingSection.tsx
    │   │   ├── StatisticsSection.tsx
    │   │   ├── AgenciesSection.tsx
    │   │   ├── TestimonialsSection.tsx
    │   │   ├── ContactSection.tsx
    │   │   └── FAQSection.tsx
    │   └── ui/                    # Composants UI réutilisables (À CRÉER)
    │       ├── Button.tsx
    │       ├── Card.tsx
    │       ├── ServiceCard.tsx
    │       ├── AgencyCard.tsx
    │       ├── PricingCard.tsx
    │       └── ContactForm.tsx
    │
    ├── data/                      # Données TypeScript
    │   ├── agencies.ts           # ✅ Créé (6 agences avec coordonnées par défaut)
    │   ├── services.ts           # ✅ Créé (7 services)
    │   ├── pricing.ts            # ✅ Créé (3 tarifs)
    │   ├── founder.ts            # ✅ Créé (Données du fondateur)
    │   ├── reavem.ts             # ✅ Créé (Structures REAVEM)
    │   ├── statistics.ts         # ✅ Créé (Statistiques)
    │   ├── testimonials.ts       # ✅ Créé (Témoignages)
    │   └── faq.ts                # ✅ Créé (FAQ)
    │
    ├── lib/
    │   ├── constants.ts         # ✅ Créé (Constantes du site)
    │   └── utils.ts              # ✅ Créé (Fonctions utilitaires)
    │
    └── types/
        └── index.ts              # ✅ Créé (Types TypeScript)
```

## 🎯 Sections de la Page d'Accueil (10 Sections)

### 1. Hero Section
- Titre: "Premier Red Point UBA au Cameroun"
- Sous-titre: "Le Cœur Financier du Groupe REAVEM"
- Description et CTAs
- Image de fond avec overlay

### 2. Statistics Section (NOUVELLE)
- 4 statistiques clés:
  - 6 Agences au Cameroun
  - 5+ Années d'expérience
  - 1000+ Clients satisfaits
  - 7 Services disponibles

### 3. Services Overview Section
- Grille de 7 services avec icônes
- Cartes interactives avec hover effects

### 4. Founder Section
- Photo du Dr Tcheutchoua Christophe
- Biographie complète
- Parcours et vision

### 5. REAVEM Group Section
- 3 structures du groupe:
  - Transfer & Exchange Services
  - Clinique REAVEM
  - REAVEM Hotel (en construction)

### 6. UBA Partnership Section
- Mise en avant du partenariat UBA
- Services bancaires détaillés
- Logo UBA (avec autorisation)

### 7. Money Transfer Section
- Transferts nationaux (Orange Money, MTN)
- Transferts internationaux (MoneyGram, WU, Ria, Juba)
- Logos des partenaires

### 8. Pricing Section
- 3 cartes de tarification:
  - Standard: 10 000 FCFA (250k/jour)
  - Premium: 12 000 FCFA (500k/jour) - Badge "Populaire"
  - Gold: 14 500 FCFA (1.5M/jour) - Badge "Gold"

### 9. Agencies Section
- Liste des 6 agences
- Carte Google Maps interactive
- Coordonnées et contacts par agence
- Boutons WhatsApp et Appel direct

### 10. Testimonials Section (NOUVELLE)
- Carrousel de témoignages clients
- 3 témoignages avec photos et notes

### 11. FAQ Section (NOUVELLE)
- 6 questions fréquentes
- Accordéon interactif

### 12. Contact Section
- Formulaire de contact complet
- Informations de contact
- Bouton WhatsApp flottant

## 📍 Coordonnées GPS par Défaut

Les coordonnées GPS ont été ajoutées par défaut pour chaque agence:

- **Yaoundé (4 agences):**
  - Awae: 3.8480, 11.5021
  - Gousso: 3.8667, 11.5167
  - Ahala: 3.8600, 11.5100
  - Foundi: 3.8700, 11.5200

- **Douala:**
  - Douala: 4.0517, 9.7680

- **Bertoua:**
  - Bertoua: 4.5833, 14.5167

**Note:** Ces coordonnées sont approximatives. À mettre à jour avec les coordonnées exactes quand disponibles.

## 🖼️ Images à Ajouter

### Structure des dossiers d'images:
```
public/
├── images/
│   ├── logo/
│   │   ├── logo-full.svg
│   │   ├── logo-icon.svg
│   │   └── logo-monochrome.svg
│   ├── agencies/
│   │   ├── awae.jpg
│   │   ├── gousso.jpg
│   │   ├── ahala.jpg
│   │   ├── foundi.jpg
│   │   ├── douala.jpg
│   │   └── bertoua.jpg
│   ├── founder/
│   │   └── dr-tcheutchoua.jpg
│   ├── testimonials/
│   │   ├── testimonial-1.jpg
│   │   ├── testimonial-2.jpg
│   │   └── testimonial-3.jpg
│   ├── partners/
│   │   ├── uba-logo.png
│   │   ├── orange-money.png
│   │   ├── mtn.png
│   │   ├── moneygram.png
│   │   ├── western-union.png
│   │   ├── ria.png
│   │   └── juba.png
│   └── hero/
│       └── hero-background.jpg
```

## 🔧 Configuration Requise

### Variables d'Environnement (.env.local)
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
CONTACT_EMAIL=contact@transferandexchangeservices.cm
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📦 Dépendances à Installer

```bash
npm install
```

Dépendances principales:
- next@^14.0.4
- react@^18.2.0
- framer-motion@^10.16.16
- next-intl@^3.5.0
- lucide-react@^0.294.0
- react-hook-form@^7.49.2
- zod@^3.22.4
- clsx@^2.0.0
- tailwind-merge@^2.2.0

## 🚀 Prochaines Étapes

1. **Créer les composants de sections:**
   - HeroSection.tsx
   - StatisticsSection.tsx
   - ServicesSection.tsx
   - FounderSection.tsx
   - REAVEMGroupSection.tsx
   - TransferSection.tsx
   - PricingSection.tsx
   - AgenciesSection.tsx
   - TestimonialsSection.tsx
   - FAQSection.tsx
   - ContactSection.tsx

2. **Créer les composants UI:**
   - Button.tsx
   - Card.tsx
   - ServiceCard.tsx
   - AgencyCard.tsx
   - PricingCard.tsx
   - ContactForm.tsx

3. **Créer les pages:**
   - app/layout.tsx
   - app/page.tsx
   - app/services/page.tsx
   - app/a-propos/page.tsx
   - app/agences/page.tsx
   - app/tarifs/page.tsx
   - app/contact/page.tsx
   - app/faq/page.tsx

4. **Configurer i18n:**
   - messages/fr.json
   - messages/en.json
   - Configuration next-intl

5. **Ajouter les images:**
   - Logo (plusieurs variantes)
   - Photos des agences
   - Photo du fondateur
   - Logos des partenaires
   - Images de témoignages

6. **Intégrer Google Maps:**
   - API Key
   - Composant Map avec marqueurs
   - Directions

7. **Formulaire de contact:**
   - Validation avec Zod
   - Envoi email via API Route
   - Feedback utilisateur

## ✅ Fichiers Déjà Créés

- ✅ Configuration complète (package.json, tsconfig.json, tailwind.config.js, etc.)
- ✅ Types TypeScript complets
- ✅ Données structurées (agencies, services, pricing, founder, etc.)
- ✅ Utilitaires (utils.ts, constants.ts)
- ✅ Header et Footer
- ✅ Structure de base

## 📝 Notes Importantes

1. **Coordonnées GPS:** Mettre à jour avec les coordonnées exactes des agences
2. **Images:** Toutes les images sont en placeholder, à remplacer progressivement
3. **Logo:** Créer plusieurs variantes (full, icon-only, monochrome)
4. **Autorisation UBA:** Demander autorisation pour utiliser le logo UBA
5. **Email pro:** Créer contact@transferandexchangeservices.cm
6. **Google Maps:** Obtenir une clé API Google Maps
7. **i18n:** Configurer next-intl pour le support bilingue FR/EN

## 🎨 Design System

### Couleurs
- Primaire: #C8102E (Rouge UBA)
- Secondaire: #1A1A1A (Noir)
- Fond: #FFFFFF (Blanc)
- Texte: #1A1A1A (Noir)

### Typographies
- Titres: Montserrat (700)
- Corps: Inter/Roboto (400-500)

### Animations
- Framer Motion pour toutes les animations
- Entrance: fade-in-up
- Hover: scale, shadow
- Floating: subtle bounce

---

**Document créé le:** Novembre 2025  
**Version:** 1.0  
**Statut:** Structure de base complète, composants à finaliser


