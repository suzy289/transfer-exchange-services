# Guide d'Installation - Transfer and Exchange Services

## 🚀 Installation Rapide

### 1. Installer les dépendances

```bash
npm install
```

### 2. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```env
# Google Maps API (optionnel pour l'instant)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Email Configuration (SMTP)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password_here
CONTACT_EMAIL=contact@transferandexchangeservices.cm

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Structure du Projet

```
transfer-and-exchange/
├── src/
│   ├── app/              # Pages Next.js
│   │   ├── layout.tsx    # Layout principal
│   │   ├── page.tsx     # Page d'accueil
│   │   └── api/         # API Routes
│   ├── components/       # Composants React
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── sections/    # Sections de la page d'accueil
│   │   └── ui/          # Composants UI réutilisables
│   ├── data/            # Données TypeScript
│   ├── lib/             # Utilitaires
│   └── types/           # Types TypeScript
├── public/              # Assets statiques
└── package.json
```

## 🎨 Fonctionnalités Implémentées

✅ **Page d'accueil complète** avec 12 sections :
- Hero Section
- Statistics Section
- Services Section
- Founder Section
- REAVEM Group Section
- UBA Partnership Section
- Transfer Section
- Pricing Section
- Agencies Section
- Testimonials Section
- FAQ Section
- Contact Section

✅ **Composants UI** :
- Button (variantes: primary, secondary, outline)
- Card (avec hover effects)
- SectionHeading

✅ **Navigation** :
- Header sticky avec menu mobile
- Footer avec 4 colonnes
- Navigation smooth scroll

✅ **Animations** :
- Framer Motion pour toutes les animations
- Entrance animations au scroll
- Hover effects

## 🖼️ Images à Ajouter

Les images suivantes doivent être ajoutées dans `public/images/` :

```
public/images/
├── logo/
│   ├── logo-full.svg
│   └── logo-icon.svg
├── agencies/
│   ├── awae.jpg
│   ├── gousso.jpg
│   ├── ahala.jpg
│   ├── foundi.jpg
│   ├── douala.jpg
│   └── bertoua.jpg
├── founder/
│   └── dr-tcheutchoua.jpg
└── testimonials/
    ├── testimonial-1.jpg
    ├── testimonial-2.jpg
    └── testimonial-3.jpg
```

**Note:** Les placeholders sont déjà en place dans le code. Les images s'afficheront automatiquement une fois ajoutées.

## 🔧 Commandes Disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint
```

## 📝 Prochaines Étapes

1. **Ajouter les images** dans `public/images/`
2. **Configurer Google Maps API** (optionnel)
3. **Configurer l'envoi d'email** dans `/api/contact/route.ts`
4. **Mettre à jour les coordonnées GPS** dans `src/data/agencies.ts`
5. **Configurer i18n** pour le support bilingue FR/EN (optionnel)

## 🐛 Dépannage

### Erreur: Module not found
```bash
npm install
```

### Erreur: Port déjà utilisé
Changez le port dans `package.json` ou utilisez :
```bash
PORT=3001 npm run dev
```

### Images ne s'affichent pas
Vérifiez que les images sont dans `public/images/` et que les chemins dans le code correspondent.

## 📞 Support

Pour toute question, contactez :
- Email: contact@transferandexchangeservices.cm
- Téléphone: +237 6 90 03 90 13

---

**Le site est prêt à être utilisé ! 🎉**


