const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const suppliers = ["Grand Frais", "La boutique à patisser", "E.Leclerc"];

router.get('/suppliers', (req, res) => {
    res.json(suppliers);
});

const ingredientsFilePath = path.join(__dirname, '../data/ingredients.json');

function readIngredients() {
    const data = fs.readFileSync(ingredientsFilePath, 'utf8');
    return JSON.parse(data);
}

function writeIngredients(data) {
    fs.writeFileSync(ingredientsFilePath, JSON.stringify(data, null, 2), 'utf8');
}

router.get('/', (req, res) => {
    const ingredients = readIngredients();

    ingredients.sort((a, b) => a.name.localeCompare(b.name));

    res.json(ingredients);
});

router.post('/', (req, res) => {
    const ingredients = readIngredients();
    const { name, pricePerKg, description = "", supplier } = req.body;

    if (!supplier) {
        return res.status(400).json({ error: "Supplier is required" });
    }

    const newIngredient = { name, pricePerKg, description, supplier };
    ingredients.push(newIngredient);
    writeIngredients(ingredients);

    res.status(201).json(newIngredient);
});

router.post('/calculate', (req, res) => {
    const ingredients = readIngredients();
    const recipe = req.body;

    let totalCost = 0;

    recipe.forEach(item => {
        const ingredient = ingredients.find(ing => ing.name === item.name);
        if (ingredient) {
            totalCost += ingredient.pricePerKg * item.quantityKg;
        }
    });

    res.json({ totalCost });
});

router.delete('/:name', (req, res) => {
    const ingredients = readIngredients();
    const ingredientName = req.params.name;
    const updatedIngredients = ingredients.filter(ingredient => ingredient.name !== ingredientName);

    if (ingredients.length === updatedIngredients.length) {
        res.status(404).json({ message: 'Ingrédient non trouvé' });
    } else {
        writeIngredients(updatedIngredients);
        res.status(200).json({ message: 'Ingrédient supprimé avec succès' });
    }
});

module.exports = router;