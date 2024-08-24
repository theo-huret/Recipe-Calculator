# Calculateur de Coût de Recette

Ce projet est une application web permettant de calculer le coût de recettes de gâteaux en fonction des ingrédients et de leurs prix. L'application permet d'ajouter des ingrédients, de gérer une liste d'ingrédients, et de calculer le coût total d'une recette.

## Table des Matières

- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Utilisation](#utilisation)

## Fonctionnalités

- Ajouter des ingrédients avec leur prix par kilo.
- Rechercher et supprimer des ingrédients de la liste.
- Ajouter des ingrédients à une recette avec des quantités spécifiques.
- Calculer le coût total de la recette en fonction des ingrédients et quantités.

## Installation

Pour installer et exécuter le projet en local, suivez ces étapes :

1. **Clonez le dépôt :**

   ```bash
   git clone https://github.com/theo-huret/Recipe-Calculator.git
   ```

2. **Accédez au répertoire du projet :**

   ```bash
   cd Recipe-Calculator
   ```

3. **Installez les dépendances :**

   ```bash
   npm install
   ```

4. **Démarrez l'application :**

   ```bash
   npm start
   ```

## Utilisation

L'application est divisée en trois onglets principaux pour gérer les ingrédients et calculer le coût des recettes. Voici comment utiliser chaque fonctionnalité :

### 1. Ajouter un Ingrédient

- **Accédez à l'onglet "Ajouter un Ingrédient"**.
- **Entrez les informations de l'ingrédient** :
    - **Nom de l'ingrédient** : Saisissez le nom de l'ingrédient (par exemple, "Farine").
    - **Prix par kilo** : Indiquez le prix par kilo en euros (par exemple, "1.50").
- **Cliquez sur le bouton "Ajouter Ingrédient"** pour enregistrer l'ingrédient dans la base de données.

### 2. Rechercher et Supprimer un Ingrédient

- **Accédez à l'onglet "Rechercher et Supprimer"**.
- **Sélectionnez un ingrédient dans la liste déroulante** :
    - La liste déroulante affiche tous les ingrédients disponibles. Choisissez celui que vous souhaitez supprimer.
- **Cliquez sur le bouton "Supprimer Ingrédient Sélectionné"** pour retirer l'ingrédient sélectionné de la liste.

### 3. Calculer le Coût de la Recette

- **Accédez à l'onglet "Calculer le Coût"**.
- **Ajouter des ingrédients à la recette** :
    - Cliquez sur le bouton **"+"** pour ajouter un nouvel ingrédient à la recette.
    - **Sélectionnez un ingrédient** dans le menu déroulant qui apparaît.
    - **Entrez la quantité désirée en kilogrammes** (par exemple, "0.5" pour 500 grammes).
    - Cliquez sur le bouton **"Supprimer"** à côté de chaque ingrédient ajouté pour le retirer si nécessaire.
- **Cliquez sur le bouton "Calculer le Coût de la Recette"** pour afficher le coût total de la recette basée sur les ingrédients et les quantités spécifiées.

### Exemple de Calcul

1. **Ajouter des Ingrédients** :
    - Farine : 1.50 €/kg
    - Sucre : 2.00 €/kg

2. **Ajouter à la Recette** :
    - Sélectionnez "Farine" et entrez "0.5" kg.
    - Sélectionnez "Sucre" et entrez "0.3" kg.

3. **Calculer le Coût** :
    - Cliquez sur "Calculer le Coût de la Recette".
    - Le coût total sera affiché (dans cet exemple, 1.50 * 0.5 + 2.00 * 0.3 = 0.75 + 0.60 = 1.35 €).

En suivant ces étapes, vous pouvez gérer vos ingrédients, créer des recettes et calculer les coûts associés facilement.
