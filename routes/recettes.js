const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const recipesFilePath = path.join(__dirname, '../data/recipes.json');

function readJSON(filePath) {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    }
    return [];
}

function writeJSON(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

router.post('/', (req, res) => {
    const recipes = readJSON(recipesFilePath);  // Read recipes from file
    const { name, ingredients, profitMargin, hoursSpent, electricityCost } = req.body;

    if (!name || !ingredients || ingredients.length === 0) {
        return res.status(400).json({ error: "Recipe name and ingredients are required" });
    }

    const existingRecipe = Object.values(recipes).find(recipe => recipe.name === name);
    if (existingRecipe) {
        return res.status(400).json({ error: "Recipe with this name already exists" });
    }

    const newRecipe = { name, ingredients, profitMargin, hoursSpent, electricityCost };

    recipes[name] = newRecipe;  // This assumes 'name' is a unique key

    writeJSON(recipesFilePath, recipes);
    res.status(201).json({ message: "Recette sauvegardée avec succès", recipe: newRecipe });
});

router.get('/', (req, res) => {
    const recipes = readJSON(recipesFilePath);
    res.json(Object.values(recipes));
});

router.get('/:name', (req, res) => {
    const recipes = readJSON(recipesFilePath);
    const recipe = recipes[req.params.name];

    if (recipe) {
        res.json(recipe);
    } else {
        res.status(404).json({ message: 'Recette non trouvée' });
    }
});

router.delete('/:name', (req, res) => {
    const recipes = readJSON(recipesFilePath);
    if (recipes[req.params.name]) {
        delete recipes[req.params.name];
        writeJSON(recipesFilePath, recipes);
        res.status(200).json({ message: 'Recette supprimée avec succès' });
    } else {
        res.status(404).json({ message: 'Recette non trouvée' });
    }
});


module.exports = router;