### Technologies Principales

*   **Frontend** :
    *   **Framework** : React (avec TypeScript)
    *   **Build Tool** : Vite
    *   **Styling** : Tailwind CSS
    *   **Routing** : React Router
*   **Backend** :
    *   **Environnement** : Node.js
    *   **Framework** : Express.js
*   **Base de données** :
    *   **Type** : SQLite (via le paquet `better-sqlite3`)
*   **Outils de développement** :
    *   **Linting** : ESLint
    *   **Lancement simultané** : Concurrently

---

### Dépendances du Projet

Votre `package.json` sépare bien les dépendances de production (`dependencies`) de celles de développement (`devDependencies`).

#### Dépendances de Production :

*   `react`, `react-dom` : La base de votre application pour construire l'interface utilisateur.
*   `react-router-dom` : Gère la navigation entre les différentes pages de votre application (ex: passer de l'accueil à la page "Menu").
*   `lucide-react` : Une bibliothèque d'icônes utilisée dans vos composants React.
*   `react-intersection-observer` : Un outil pratique pour détecter quand un élément entre dans le champ de vision de l'utilisateur, souvent utilisé pour des animations au défilement ou le chargement paresseux (lazy-loading).
*   `express` : Un micro-framework pour construire votre serveur backend en Node.js. Il gère les routes d'API (par exemple, pour les réservations).
*   `better-sqlite3` : Le pilote pour interagir avec votre base de données SQLite. C'est ce qui permet à votre serveur de lire et écrire des données.
*   `cors` : Un middleware Express pour autoriser les requêtes provenant d'origines différentes (essentiel car votre frontend Vite et votre backend Express tournent sur des ports différents en développement).
*   `concurrently` : Permet de lancer plusieurs commandes simultanément. Dans votre cas, il lance le serveur backend et le serveur de développement frontend en même temps avec la commande `npm run dev`.

#### Dépendances de Développement :

*   `vite`, `@vitejs/plugin-react` : Le cœur de votre outillage frontend. Vite sert les fichiers en développement avec une grande rapidité (Hot Module Replacement) et optimise les fichiers pour la production.
*   `typescript`, `@types/*` : Indique que votre projet est écrit en TypeScript, ce qui ajoute un typage statique à JavaScript pour plus de robustesse.
*   `tailwindcss`, `postcss`, `autoprefixer` : Votre solution de style. Tailwind CSS est un framework CSS "utility-first" qui permet de styliser directement dans le HTML/JSX.
*   `eslint` : Un outil d'analyse de code pour trouver et corriger les problèmes dans votre code JavaScript/TypeScript, assurant une meilleure qualité et cohérence.

---

### Architecture du Projet

Votre projet est structuré comme une application **full-stack** avec une séparation claire entre le client (frontend) et le serveur (backend), bien qu'ils coexistent dans le même répertoire.

*   **Backend (`server.js`, `src/lib/database.ts`)**
    *   Le point d'entrée est `server.js`. Ce fichier configure un serveur Express qui écoute les requêtes HTTP.
    *   Il est probable que ce serveur expose une API (par exemple, `/api/reservations`) que le frontend peut appeler.
    *   Le fichier `src/lib/database.ts` semble contenir la logique de connexion et d'interaction avec la base de données SQLite. Le serveur l'utilise pour persister les données.

*   **Frontend (`src/`)**
    *   C'est une **Single Page Application (SPA)** gérée par React et Vite.
    *   Le point d'entrée est `src/main.tsx`.
    *   **Structure des composants** :
        *   `src/components/` : Contient des composants React réutilisables (Navbar, Footer, Hero, etc.). C'est une excellente pratique pour garder le code modulaire.
        *   `src/pages/` : Contient les composants qui représentent des pages entières (HomePage, MenuPage, etc.). `react-router-dom` est certainement configuré dans `App.tsx` pour afficher la bonne page en fonction de l'URL.
    *   **Communication API** : Le fichier `src/api/reservations.ts` est dédié à la communication avec votre backend. Il contient probablement des fonctions `fetch` (ou similaires) pour envoyer et recevoir des données du serveur Express.
    *   **Données statiques** : `src/data/menuData.ts` contient des données "en dur" pour le menu, ce qui signifie qu'une partie du contenu n'est pas chargée depuis la base de données mais directement depuis le code source du frontend.
    *   **Assets** : Le dossier `public/` contient toutes vos images, bien organisées par catégorie.

---

### Fonctionnement

1.  **En développement** :
    *   Vous lancez la commande `npm run dev`.
    *   `concurrently` exécute deux processus en parallèle :
        1.  `node server.js` : Démarre votre serveur backend Express, qui se met à l'écoute des requêtes d'API.
        2.  `vite` : Démarre le serveur de développement Vite pour votre application React.
    *   Vous ouvrez votre navigateur à l'adresse fournie par Vite (ex: `http://localhost:5173`).
    *   Votre application React se charge. Lorsque vous effectuez une action (comme envoyer un formulaire de réservation), le code frontend dans `src/api/reservations.ts` envoie une requête HTTP au serveur backend (ex: `http://localhost:3000/api/reservations`).
    *   Le serveur Express reçoit la requête, la traite (par exemple, en l'insérant dans la base de données SQLite via `better-sqlite3`) et renvoie une réponse.

2.  **En production** :
    *   Vous exécutez `npm run build`.
    *   Vite compile et optimise tous vos fichiers React/TypeScript/CSS dans un dossier `dist/`.
    *   Vous déployez ensuite le contenu du dossier `dist/` (fichiers statiques) et votre backend (`server.js`, `node_modules`, base de données) sur un serveur. Le serveur Express serait alors configuré pour servir les fichiers statiques de `dist/` en plus de gérer l'API.

En résumé, il s'agit d'une application web full-stack moderne, bien structurée, qui utilise des technologies performantes et populaires pour créer une expérience utilisateur interactive avec une persistance des données côté serveur.
