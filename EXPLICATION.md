# Explication du Site Web O'Crusty Food

## Technologies Utilisées

Ce site web est construit avec des technologies modernes :

### 1. **React** 🚀
- **Qu'est-ce que c'est ?** Une bibliothèque JavaScript créée par Facebook
- **Pourquoi ?** Permet de créer des interfaces utilisateur interactives
- **Comment ?** Divise l'interface en petits morceaux appelés "composants"

### 2. **TypeScript** 📝
- **Qu'est-ce que c'est ?** JavaScript avec vérification des types
- **Pourquoi ?** Évite les erreurs et rend le code plus robuste
- **Exemple :** Au lieu d'écrire juste `name`, on écrit `name: string`

### 3. **Vite** ⚡
- **Qu'est-ce que c'est ?** Un outil de développement très rapide
- **Pourquoi ?** Démarre le serveur instantanément et recharge les changements en temps réel

### 4. **Tailwind CSS** 🎨
- **Qu'est-ce que c'est ?** Un framework CSS avec des classes prêtes à l'emploi
- **Exemple :** `bg-red-500` pour un fond rouge, `text-white` pour du texte blanc

## Structure du Projet

```
src/
├── App.tsx              # 🏠 Composant principal (comme le chef d'orchestre)
├── main.tsx             # 🚪 Point d'entrée (la porte d'entrée)
├── components/          # 🧩 Composants réutilisables
│   ├── Navbar.tsx       # 📋 Barre de navigation
│   ├── Hero.tsx         # 🌟 Section héro de la page d'accueil
│   ├── Menu.tsx         # 🍽️ Affichage du menu
│   ├── About.tsx        # ℹ️ Section à propos
│   ├── Contact.tsx      # 📞 Formulaire de contact
│   └── Footer.tsx       # 👣 Pied de page
├── pages/               # 📄 Pages complètes
│   ├── HomePage.tsx     # 🏠 Page d'accueil
│   ├── MenuPage.tsx     # 🍽️ Page menu
│   ├── AboutPage.tsx    # ℹ️ Page à propos
│   └── ContactPage.tsx  # 📞 Page contact
└── data/
    └── menuData.ts      # 📊 Données du menu
```

## Comment ça Fonctionne ?

### 1. **Les Composants React**
Imagine que ton site web est comme une maison :
- **App.tsx** = La structure de la maison
- **Navbar.tsx** = Le toit
- **Hero.tsx** = Le salon
- **Menu.tsx** = La cuisine
- **Footer.tsx** = Les fondations

Chaque composant est un morceau de code réutilisable :

```jsx
// Exemple simple d'un composant
function Bouton() {
  return (
    <button className="bg-red-500 text-white">
      Cliquez-moi !
    </button>
  );
}
```

### 2. **Le Système de Navigation**
- **React Router** permet de naviguer entre les pages
- Quand tu cliques sur "Menu", ça charge `MenuPage.tsx`
- Quand tu cliques sur "Accueil", ça charge `HomePage.tsx`

### 3. **Les Hooks React**
Ce sont des fonctions spéciales qui ajoutent des fonctionnalités :

- **useState** : Pour gérer les données qui changent
  ```jsx
  const [menuOuvert, setMenuOuvert] = useState(false);
  ```

- **useEffect** : Pour faire des actions quand la page se charge
  ```jsx
  useEffect(() => {
    console.log("Page chargée !");
  }, []);
  ```

### 4. **Le Styling avec Tailwind**
Au lieu d'écrire du CSS traditionnel :
```css
/* CSS traditionnel */
.bouton {
  background-color: red;
  color: white;
  padding: 10px;
}
```

On utilise des classes Tailwind :
```jsx
<button className="bg-red-500 text-white p-4">
  Mon bouton
</button>
```

## Flux de Données

1. **Données** → Stockées dans `menuData.ts`
2. **Composants** → Utilisent ces données
3. **Pages** → Assemblent les composants
4. **App.tsx** → Orchestre tout le site
5. **Navigateur** → Affiche le résultat final

## Avantages de cette Architecture

### ✅ **Modulaire**
- Chaque partie est séparée
- Facile à modifier une section sans casser le reste

### ✅ **Réutilisable**
- Un composant peut être utilisé plusieurs fois
- Exemple : Le bouton "Commander" est le même partout

### ✅ **Maintenable**
- Code organisé et facile à comprendre
- Chaque fichier a une responsabilité claire

### ✅ **Performant**
- React ne met à jour que ce qui change
- Vite rend le développement très rapide

## Exemple Concret : Comment Ajouter un Nouveau Plat

1. **Ouvrir** `src/data/menuData.ts`
2. **Ajouter** un nouvel objet dans le tableau :
```typescript
{
  id: 10,
  name: 'Nouveau Plat',
  description: 'Description du plat',
  price: '15.99€',
  image: 'url-de-l-image',
  category: 'main-courses'
}
```
3. **Sauvegarder** → Le plat apparaît automatiquement !

## Technologies Complémentaires

- **Lucide React** : Icônes modernes
- **React Intersection Observer** : Animations au scroll
- **PostCSS & Autoprefixer** : Optimisation CSS

Cette architecture permet de créer un site web moderne, rapide et facilement maintenable ! 🚀