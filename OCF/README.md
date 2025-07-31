# 🍽️ O'Crusty Food - Site Web Restaurant

Un site web moderne et élégant pour le restaurant O'Crusty Food, construit avec React, TypeScript et Tailwind CSS.

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Ouvrir http://localhost:5173 dans votre navigateur
```

## 📦 Technologies Utilisées

### Frontend
- **React 18.3.1** - Bibliothèque JavaScript pour interfaces utilisateur
- **TypeScript 5.5.3** - JavaScript avec typage statique
- **Tailwind CSS 3.4.1** - Framework CSS utilitaire
- **React Router DOM 6.22.3** - Navigation côté client
- **Lucide React 0.344.0** - Icônes modernes et élégantes
- **React Intersection Observer 9.8.1** - Animations au scroll

### Outils de Développement
- **Vite 5.4.2** - Serveur de développement ultra-rapide
- **ESLint 9.9.1** - Analyse statique du code
- **PostCSS 8.4.35** - Traitement CSS
- **Autoprefixer 10.4.18** - Préfixes CSS automatiques

## 🏗️ Structure du Projet

```
src/
├── App.tsx                 # 🏠 Composant racine et routage
├── main.tsx               # 🚪 Point d'entrée de l'application
├── index.css              # 🎨 Styles globaux Tailwind
├── components/            # 🧩 Composants réutilisables
│   ├── Navbar.tsx         # 📋 Barre de navigation responsive
│   ├── Hero.tsx           # 🌟 Section héro avec animation
│   ├── Menu.tsx           # 🍽️ Affichage du menu avec filtres
│   ├── About.tsx          # ℹ️ Section à propos avec animations
│   ├── Contact.tsx        # 📞 Formulaire de contact et infos
│   ├── Footer.tsx         # 👣 Pied de page avec liens
│   └── Testimonials.tsx   # 💬 Témoignages clients (carousel)
├── pages/                 # 📄 Pages complètes
│   ├── HomePage.tsx       # 🏠 Page d'accueil
│   ├── MenuPage.tsx       # 🍽️ Page menu complète
│   ├── AboutPage.tsx      # ℹ️ Page à propos
│   └── ContactPage.tsx    # 📞 Page contact
└── data/
    └── menuData.ts        # 📊 Données du menu et catégories
```

## 🎨 Système de Design

### Palette de Couleurs
```css
/* Couleurs personnalisées dans tailwind.config.js */
crusty-red: #DC2626      /* Rouge principal - CTA et accents */
crusty-yellow: #FCD34D   /* Jaune doré - Highlights */
crusty-black: #1F2937    /* Noir élégant - Texte principal */
crusty-white: #FFFFFF    /* Blanc pur - Arrière-plans */
```

### Typographie
- **Titres** : Georgia (serif) - Élégance classique
- **Corps** : Inter (sans-serif) - Lisibilité moderne
- **Hiérarchie** : 3 poids maximum (normal, bold, semibold)

### Animations
- **Scroll Animations** : Utilisation de `react-intersection-observer`
- **Hover Effects** : Transitions fluides sur les éléments interactifs
- **Micro-interactions** : Boutons, cartes, navigation

## 📱 Fonctionnalités

### Navigation
- **Responsive** : Adaptation mobile/desktop
- **Sticky Header** : Navigation fixe avec effet de transparence
- **Active States** : Indication de la page actuelle
- **Mobile Menu** : Menu hamburger pour mobile

### Menu Interactif
- **Filtrage par Catégorie** : Entrées, plats, desserts, boissons
- **Plats Populaires** : Section mise en avant
- **Images Optimisées** : Chargement lazy et effets hover
- **Interface Intuitive** : Navigation fluide entre catégories

### Animations & UX
- **Scroll Reveal** : Éléments qui apparaissent au scroll
- **Smooth Transitions** : Animations CSS fluides
- **Loading States** : Gestion des états de chargement
- **Responsive Design** : Adaptation tous écrans

## 🛠️ Scripts Disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement (port 5173)

# Production
npm run build        # Construit l'application pour la production
npm run preview      # Prévisualise la version de production

# Qualité du Code
npm run lint         # Vérifie la qualité du code avec ESLint
```

## 📋 Installation Détaillée

### Prérequis
- **Node.js** 16.0+ 
- **npm** 7.0+ ou **yarn** 1.22+

### Étapes d'Installation

1. **Cloner le projet**
```bash
git clone [url-du-repo]
cd ocrusty-food
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer en développement**
```bash
npm run dev
```

4. **Accéder au site**
```
http://localhost:5173
```

## 🔧 Configuration

### Vite Configuration (`vite.config.ts`)
```typescript
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Optimisation des dépendances
  },
});
```

### Tailwind Configuration (`tailwind.config.js`)
```javascript
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crusty: {
          red: '#DC2626',
          yellow: '#FCD34D',
          black: '#1F2937',
          white: '#FFFFFF'
        }
      }
    },
  },
}
```

## 📊 Structure des Données

### Menu Items (`src/data/menuData.ts`)
```typescript
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  popular?: boolean;
}
```

### Catégories
- `starters` - Entrées
- `main-courses` - Plats principaux  
- `desserts` - Desserts
- `drinks` - Boissons

## 🚀 Déploiement

### Build de Production
```bash
npm run build
```

Le dossier `dist/` contient les fichiers optimisés pour la production.

### Hébergement Recommandé
- **Netlify** - Déploiement automatique depuis Git
- **Vercel** - Optimisé pour React/Vite
- **GitHub Pages** - Gratuit pour projets open source

## 🎯 Fonctionnalités Avancées

### Performance
- **Code Splitting** : Chargement optimisé des composants
- **Lazy Loading** : Images chargées à la demande
- **Tree Shaking** : Élimination du code inutilisé
- **Minification** : Compression automatique en production

### SEO & Accessibilité
- **Meta Tags** : Optimisation pour les moteurs de recherche
- **Alt Text** : Descriptions d'images pour l'accessibilité
- **Semantic HTML** : Structure HTML sémantique
- **Keyboard Navigation** : Navigation au clavier

### Responsive Design
- **Mobile First** : Conception mobile prioritaire
- **Breakpoints** : sm, md, lg, xl, 2xl
- **Flexible Layouts** : Grid et Flexbox
- **Touch Friendly** : Éléments adaptés au tactile

## 🐛 Dépannage

### Problèmes Courants

**Port déjà utilisé**
```bash
# Changer le port
npm run dev -- --port 3000
```

**Erreurs de dépendances**
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
```

**Problèmes de cache**
```bash
# Vider le cache Vite
npm run dev -- --force
```

## 📝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Équipe

- **Développement Frontend** : React + TypeScript
- **Design System** : Tailwind CSS
- **Animations** : CSS Transitions + Intersection Observer
- **Routing** : React Router DOM

## 🔗 Liens Utiles

- [Documentation React](https://react.dev/)
- [Documentation Vite](https://vitejs.dev/)
- [Documentation Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

**O'Crusty Food** - Des délices croustillants dans chaque bouchée ! 🍽️✨