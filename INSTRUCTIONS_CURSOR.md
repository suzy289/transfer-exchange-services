# Instructions pour Cursor - Transfer and Exchange Services

## 🎯 Objectif

Créer un site web vitrine moderne, dynamique et institutionnel pour **Transfer and Exchange Services SARL** (Premier Red Point UBA au Cameroun) en utilisant Next.js, TypeScript et Tailwind CSS.

## 📚 Documentation Complète

**Lire en premier:** [CAHIER_DES_CHARGES_TRANSFER_EXCHANGE.md](./CAHIER_DES_CHARGES_TRANSFER_EXCHANGE.md)

Ce document contient toutes les spécifications détaillées.

## 🚀 Démarrage Rapide

### 1. Initialiser le Projet Next.js

```bash
npx create-next-app@latest transfer-and-exchange --typescript --tailwind --app
cd transfer-and-exchange
```

### 2. Installer les Dépendances

```bash
npm install framer-motion next-intl lucide-react
npm install -D @types/node
```

### 3. Structure de Base

Créer la structure de dossiers selon le cahier des charges (section 10).

### 4. Configurer Tailwind

Utiliser la palette de couleurs définie dans le cahier des charges (section 2.1).

### 5. Implémenter les Sections

Suivre l'ordre des sections définies dans le cahier des charges (section 4.2) :
1. Hero Section
2. Présentation & Fondateur
3. Groupe REAVEM
4. Services UBA
5. Transferts d'Argent
6. Tarification
7. Agences
8. Contact

## 📋 Checklist d'Implémentation

### Phase 1: Setup & Structure
- [ ] Projet Next.js initialisé
- [ ] Dépendances installées
- [ ] Structure de dossiers créée
- [ ] Configuration Tailwind (couleurs, fonts)
- [ ] Configuration i18n (next-intl)

### Phase 2: Composants de Base
- [ ] Header avec navigation
- [ ] Footer massif (4 colonnes)
- [ ] Composants UI réutilisables (Button, Card, etc.)
- [ ] SectionHeading component

### Phase 3: Sections Principales
- [ ] Hero Section (avec animations)
- [ ] Section Fondateur
- [ ] Section Groupe REAVEM
- [ ] Section Services
- [ ] Section Transferts
- [ ] Section Tarification
- [ ] Section Agences (avec Google Maps)
- [ ] Section Contact (avec formulaire)

### Phase 4: Fonctionnalités
- [ ] Formulaire de contact (validation + envoi)
- [ ] Intégration Google Maps
- [ ] Liens WhatsApp fonctionnels
- [ ] Sélecteur de langue FR/EN
- [ ] Animations Framer Motion

### Phase 5: SEO & Performance
- [ ] Meta tags dynamiques
- [ ] JSON-LD schemas
- [ ] Optimisation images
- [ ] Performance (Lighthouse ≥ 90)

### Phase 6: Tests & Déploiement
- [ ] Tests responsive (mobile, tablet, desktop)
- [ ] Tests accessibilité
- [ ] Tests cross-browser
- [ ] Déploiement Vercel

## 🎨 Points Clés Design

- **Couleurs:** Rouge UBA (#C8102E), Noir (#1A1A1A), Blanc (#FFFFFF)
- **Style:** Sérieux, institutionnel, moderne, dynamique
- **Animations:** Subtiles mais présentes (framer-motion)
- **Layout:** Largeur maximale, container centré, espace blanc généreux

## 📁 Fichiers de Données

Les fichiers JSON sont déjà créés dans `/data`:
- `agencies.json` - Liste des 6 agences
- `pricing.json` - Tarifs des cartes UBA
- `services.json` - Services proposés

**Note:** Compléter les coordonnées GPS dans `agencies.json` quand disponibles.

## 🔧 Configuration Requise

### Variables d'Environnement (.env.local)

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
SMTP_HOST=smtp.example.com
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
CONTACT_EMAIL=contact@transferandexchangeservices.cm
```

## 📞 Contacts Client

- **Fondateur:** Dr Christophe Tcheutchoua
- **Email:** christophecolombtcheutchoa@gmail.com
- **Téléphone:** +237 6 90 03 90 13

## ⚠️ Points d'Attention

1. **Logo:** À créer (proposer plusieurs variantes)
2. **Photos agences:** À prendre (session photo pro)
3. **Coordonnées GPS:** À compléter dans agencies.json
4. **Autorisation UBA:** Demander autorisation pour logo UBA
5. **Email pro:** Créer contact@transferandexchangeservices.cm

## 🎯 Priorités

1. **Critique:** Hero, Services, Agences, Contact
2. **Important:** Fondateur, Groupe REAVEM, Tarification
3. **Optionnel:** FAQ, Blog (si temps)

## 📅 Timeline

- **J+0:** Setup projet
- **J+1:** Composants de base + Hero
- **J+2:** Toutes les sections
- **J+3:** Fonctionnalités + tests
- **J+4:** Finalisation + déploiement

---

**Besoin d'aide?** Consultez le cahier des charges complet pour tous les détails.


