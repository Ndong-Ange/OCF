# 🚀 Configuration Simple - O'Crusty Food

## Étape 1 : Configurer Supabase (5 minutes)

1. **Créer un compte** sur [supabase.com](https://supabase.com)
2. **Créer un nouveau projet** (choisir un nom et mot de passe)
3. **Copier les clés** depuis Settings > API
4. **Créer le fichier `.env`** à la racine du projet :

```bash
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre_cle_anonyme_ici
```

## Étape 2 : Personnaliser les liens de commande

Dans `src/components/OrderModal.tsx`, ligne 13-17, remplacez par vos vrais liens :

```typescript
const orderLinks = {
  uberEats: 'https://www.ubereats.com/fr/store/votre-restaurant',
  deliveroo: 'https://deliveroo.fr/fr/menu/votre-ville/votre-restaurant',
  justEat: 'https://www.just-eat.fr/restaurants-votre-restaurant'
};
```

## Étape 3 : Tester

1. Redémarrer le serveur : `npm run dev`
2. Cliquer sur "Commander" → Modal s'ouvre
3. Faire une réservation → Données sauvées dans Supabase

## ✅ C'est tout !

Votre site peut maintenant :
- ✅ Rediriger vers les plateformes de livraison
- ✅ Enregistrer les réservations en base de données
- ✅ Valider les formulaires
- ✅ Confirmer les réservations

## 📊 Voir les réservations

Connectez-vous à votre dashboard Supabase > Table Editor > `reservations`