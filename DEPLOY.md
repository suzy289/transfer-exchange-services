# Guide de déploiement - Transfer and Exchange Services

## 🚀 Déploiement sur GitHub et Vercel

### Étape 1 : Initialiser Git (si pas déjà fait)

```bash
git init
git add .
git commit -m "Initial commit - Transfer and Exchange Services"
```

### Étape 2 : Créer un dépôt sur GitHub

1. Allez sur [GitHub.com](https://github.com)
2. Cliquez sur le bouton "+" en haut à droite
3. Sélectionnez "New repository"
4. Nommez-le : `transfer-exchange-services` (ou un autre nom)
5. Ne cochez PAS "Initialize with README" (déjà initialisé)
6. Cliquez sur "Create repository"

### Étape 3 : Connecter votre dépôt local à GitHub

```bash
git remote add origin https://github.com/VOTRE_USERNAME/transfer-exchange-services.git
git branch -M main
git push -u origin main
```

Remplacez `VOTRE_USERNAME` par votre nom d'utilisateur GitHub.

### Étape 4 : Déployer sur Vercel

1. Allez sur [Vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "Add New Project"
4. Importez votre dépôt `transfer-exchange-services`
5. Vercel détectera automatiquement Next.js
6. Cliquez sur "Deploy"

Vercel vous donnera automatiquement une URL comme :
`https://transfer-exchange-services.vercel.app`

### Étape 5 : Configuration (optionnel)

Si vous avez des variables d'environnement, ajoutez-les dans :
- Vercel Dashboard → Settings → Environment Variables

## 📝 Commandes utiles

### Pour mettre à jour le dépôt GitHub

```bash
git add .
git commit -m "Description des modifications"
git push origin main
```

Vercel redéploiera automatiquement après chaque push.

## 🔗 Liens utiles

- GitHub : https://github.com/VOTRE_USERNAME/transfer-exchange-services
- Vercel Dashboard : https://vercel.com/dashboard
- Documentation Vercel : https://vercel.com/docs

