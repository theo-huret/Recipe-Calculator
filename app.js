const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const ingredientsRouter = require('./routes/ingredients');
const recipesRouter = require('./routes/recettes');

app.use('/ingredients', ingredientsRouter);
app.use('/recettes', recipesRouter);

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
